'use client';

import { useState, useEffect } from 'react';
import { Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';
import ProductCard from '@/components/ProductCard';
import { products, storages, models, type Product } from '@/data/products';

export default function ShopPage() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    model: '',
    storage: '',
    maxPrice: '',
  });
  const [showFilters, setShowFilters] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    applyFilters();
  }, [filters]);

  const applyFilters = () => {
    let filtered = [...products];

    if (filters.model) {
      filtered = filtered.filter(p => p.model.toLowerCase().includes(filters.model.toLowerCase()));
    }
    if (filters.storage) {
      filtered = filtered.filter(p => p.storage === filters.storage);
    }
    if (filters.maxPrice) {
      filtered = filtered.filter(p => p.price <= parseInt(filters.maxPrice));
    }

    setFilteredProducts(filtered);
  };

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: `${product.model} ${product.storage}`,
      price: product.price,
      quantity: 1,
      image: product.image,
    });
    toast.success(`${product.model} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-brand-black">
      {/* Hero Section */}
      <section className="bg-brand-charcoal py-12 px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-2">Pre-Owned iPhones</h1>
          <p className="text-brand-muted">Quality devices. Great prices. Trusted service.</p>
          <div className="flex flex-wrap gap-4 mt-6 text-sm">
            <span className="flex items-center gap-2 text-brand-muted">
              <span className="w-2 h-2 bg-brand-gold rounded-full"></span>
              100% Tested & Functional
            </span>
            <span className="flex items-center gap-2 text-brand-muted">
              <span className="w-2 h-2 bg-brand-gold rounded-full"></span>
              All Networks Supported
            </span>
            <span className="flex items-center gap-2 text-brand-muted">
              <span className="w-2 h-2 bg-brand-gold rounded-full"></span>
              Battery Health As Listed
            </span>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex gap-8">
          {/* Filters - Desktop */}
          <div className="hidden lg:block w-64">
            <div className="bg-brand-charcoal border border-white/10 rounded-2xl p-6 sticky top-24">
              <h3 className="text-lg font-bold text-white mb-4">Filters</h3>
              
              <div className="mb-6">
                <label className="block text-sm font-semibold text-white mb-2">Model</label>
                <select
                  value={filters.model}
                  onChange={(e) => setFilters({ ...filters, model: e.target.value })}
                  className="w-full bg-brand-black border border-white/10 rounded-lg px-3 py-2 text-white text-base min-h-[48px]"
                >
                  <option value="" className="bg-brand-charcoal">All Models</option>
                  {models.map(m => (
                    <option key={m} value={`iPhone ${m}`} className="bg-brand-charcoal">iPhone {m}</option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-white mb-2">Storage</label>
                <select
                  value={filters.storage}
                  onChange={(e) => setFilters({ ...filters, storage: e.target.value })}
                  className="w-full bg-brand-black border border-white/10 rounded-lg px-3 py-2 text-white text-base min-h-[48px]"
                >
                  <option value="" className="bg-brand-charcoal">All Storage</option>
                  {storages.map(s => (
                    <option key={s} value={s} className="bg-brand-charcoal">{s}</option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-white mb-2">Max Price</label>
                <select
                  value={filters.maxPrice}
                  onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
                  className="w-full bg-brand-black border border-white/10 rounded-lg px-3 py-2 text-white text-base min-h-[48px]"
                >
                  <option value="" className="bg-brand-charcoal">Any Price</option>
                  <option value="5000" className="bg-brand-charcoal">Under R5,000</option>
                  <option value="10000" className="bg-brand-charcoal">Under R10,000</option>
                  <option value="15000" className="bg-brand-charcoal">Under R15,000</option>
                  <option value="20000" className="bg-brand-charcoal">Under R20,000</option>
                </select>
              </div>

              <Button
                variant="outline"
                className="w-full border-white/10 text-white hover:bg-brand-gold hover:text-brand-black"
                onClick={() => setFilters({ model: '', storage: '', maxPrice: '' })}
              >
                Clear Filters
              </Button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Mobile Filter Button */}
            <div className="lg:hidden mb-6">
              <Button
                variant="outline"
                className="w-full flex items-center justify-center gap-2 min-h-[48px] border-white/10 text-white hover:bg-brand-gold hover:text-brand-black"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="h-4 w-4" />
                Filters
              </Button>
              
              {showFilters && (
                <div className="mt-4 bg-brand-charcoal border border-white/10 rounded-2xl p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-bold text-white">Filters</h3>
                    <button 
                      onClick={() => setShowFilters(false)}
                      className="min-h-[48px] min-w-[48px] flex items-center justify-center text-white touch-manipulation"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-white mb-2">Model</label>
                    <select
                      value={filters.model}
                      onChange={(e) => setFilters({ ...filters, model: e.target.value })}
                      className="w-full bg-brand-black border border-white/10 rounded-lg px-3 py-2 text-white text-base min-h-[48px]"
                    >
                      <option value="" className="bg-brand-charcoal">All Models</option>
                      {models.map(m => (
                        <option key={m} value={`iPhone ${m}`} className="bg-brand-charcoal">iPhone {m}</option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-white mb-2">Storage</label>
                    <select
                      value={filters.storage}
                      onChange={(e) => setFilters({ ...filters, storage: e.target.value })}
                      className="w-full bg-brand-black border border-white/10 rounded-lg px-3 py-2 text-white text-base min-h-[48px]"
                    >
                      <option value="" className="bg-brand-charcoal">All Storage</option>
                      {storages.map(s => (
                        <option key={s} value={s} className="bg-brand-charcoal">{s}</option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-white mb-2">Max Price</label>
                    <select
                      value={filters.maxPrice}
                      onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
                      className="w-full bg-brand-black border border-white/10 rounded-lg px-3 py-2 text-white text-base min-h-[48px]"
                    >
                      <option value="" className="bg-brand-charcoal">Any Price</option>
                      <option value="5000" className="bg-brand-charcoal">Under R5,000</option>
                      <option value="10000" className="bg-brand-charcoal">Under R10,000</option>
                      <option value="15000" className="bg-brand-charcoal">Under R15,000</option>
                      <option value="20000" className="bg-brand-charcoal">Under R20,000</option>
                    </select>
                  </div>
                </div>
              )}
            </div>

            {loading ? (
              <div className="text-center py-12">
                <p className="text-brand-muted">Loading products...</p>
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-brand-muted">No products found matching your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    onAddToCart={handleAddToCart} 
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <h3 className="text-lg font-bold text-white mb-2">Included with Every Device</h3>
            <p className="text-brand-muted text-sm">Charger • Screen Protector & Case • 3-Month Warranty</p>
          </div>
          <div className="p-6">
            <h3 className="text-lg font-bold text-white mb-2">Free Nationwide Courier</h3>
            <p className="text-brand-muted text-sm">Cash on delivery (PMB only) • Trade-ins welcome</p>
          </div>
          <div className="p-6">
            <h3 className="text-lg font-bold text-white mb-2">Visit Our Store</h3>
            <p className="text-brand-muted text-sm">8 Coronation Road, Scottsville, PMB 3201</p>
          </div>
        </div>
      </section>
    </div>
  );
}
