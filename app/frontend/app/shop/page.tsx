'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Filter, X, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

// Mock data for iPhones
const mockProducts = [
  {
    id: 1,
    model: 'iPhone 15 Pro',
    storage: '256GB',
    condition: 'New',
    price: 24999,
    image: 'https://images.unsplash.com/photo-1592286927505-1def25115558?w=500',
    description: 'Latest model with A17 Pro chip'
  },
  {
    id: 2,
    model: 'iPhone 15',
    storage: '128GB',
    condition: 'New',
    price: 19999,
    image: 'https://images.unsplash.com/photo-1605559424843-9e4c3ca3806d?w=500',
    description: 'Latest generation iPhone'
  },
  {
    id: 3,
    model: 'iPhone 14 Pro Max',
    storage: '256GB',
    condition: 'Refurbished',
    price: 17999,
    image: 'https://images.unsplash.com/photo-1592286927505-1def25115558?w=500',
    description: 'Professionally refurbished'
  },
  {
    id: 4,
    model: 'iPhone 14',
    storage: '128GB',
    condition: 'Refurbished',
    price: 14999,
    image: 'https://images.unsplash.com/photo-1605559424843-9e4c3ca3806d?w=500',
    description: 'Like new condition'
  },
  {
    id: 5,
    model: 'iPhone 13 Pro',
    storage: '256GB',
    condition: 'Used',
    price: 11999,
    image: 'https://images.unsplash.com/photo-1592286927505-1def25115558?w=500',
    description: 'Good condition'
  },
  {
    id: 6,
    model: 'iPhone 13',
    storage: '128GB',
    condition: 'Used',
    price: 9999,
    image: 'https://images.unsplash.com/photo-1605559424843-9e4c3ca3806d?w=500',
    description: 'Excellent value'
  },
];

export default function ShopPage() {
  const [products, setProducts] = useState(mockProducts);
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    condition: '',
    model: '',
    storage: '',
  });
  const [showFilters, setShowFilters] = useState(false);
  const { user } = useAuth();
  const { addToCart } = useCart();

  useEffect(() => {
    applyFilters();
  }, [filters, products]);

  const applyFilters = () => {
    let filtered = [...products];

    if (filters.condition) {
      filtered = filtered.filter(p => p.condition === filters.condition);
    }
    if (filters.model) {
      filtered = filtered.filter(p => p.model.includes(filters.model));
    }
    if (filters.storage) {
      filtered = filtered.filter(p => p.storage === filters.storage);
    }

    setFilteredProducts(filtered);
  };

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: product.model,
      price: product.price,
      quantity: 1,
      image: product.image,
    });
    toast.success(`${product.model} added to cart!`);
  };

  const conditions = ['New', 'Refurbished', 'Used'];
  const storages = ['128GB', '256GB', '512GB', '1TB'];

  return (
    <div className="min-h-screen">
      <section className="bg-slate-100 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Shop iPhones</h1>
          <p className="text-slate-600">Browse our collection of new, refurbished, and used iPhones</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex gap-8">
          {/* Filters - Desktop */}
          <div className="hidden lg:block w-64">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sticky top-24">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Filters</h3>
              
              <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-900 mb-2">Condition</label>
                <select
                  value={filters.condition}
                  onChange={(e) => setFilters({ ...filters, condition: e.target.value })}
                  className="w-full border border-slate-200 rounded-lg px-3 py-2"
                >
                  <option value="">All Conditions</option>
                  {conditions.map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-900 mb-2">Storage</label>
                <select
                  value={filters.storage}
                  onChange={(e) => setFilters({ ...filters, storage: e.target.value })}
                  className="w-full border border-slate-200 rounded-lg px-3 py-2"
                >
                  <option value="">All Storage</option>
                  {storages.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <Button
                variant="outline"
                className="w-full"
                onClick={() => setFilters({ condition: '', model: '', storage: '' })}
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
                className="w-full flex items-center justify-center gap-2"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="h-4 w-4" />
                Filters
              </Button>
              
              {showFilters && (
                <div className="mt-4 bg-white border border-slate-200 rounded-2xl p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-bold text-slate-900">Filters</h3>
                    <button onClick={() => setShowFilters(false)}><X className="h-5 w-5" /></button>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-slate-900 mb-2">Condition</label>
                    <select
                      value={filters.condition}
                      onChange={(e) => setFilters({ ...filters, condition: e.target.value })}
                      className="w-full border border-slate-200 rounded-lg px-3 py-2"
                    >
                      <option value="">All Conditions</option>
                      {conditions.map(c => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-slate-900 mb-2">Storage</label>
                    <select
                      value={filters.storage}
                      onChange={(e) => setFilters({ ...filters, storage: e.target.value })}
                      className="w-full border border-slate-200 rounded-lg px-3 py-2"
                    >
                      <option value="">All Storage</option>
                      {storages.map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>
              )}
            </div>

            {loading ? (
              <div className="text-center py-12">
                <p className="text-slate-600">Loading products...</p>
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-slate-600">No products found matching your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Link href={`/product/${product.id}`} key={product.id}>
                    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all hover:scale-105 duration-300">
                      <div className="aspect-square overflow-hidden bg-slate-100">
                        <img
                          src={product.image}
                          alt={product.model}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-semibold text-slate-900">{product.model}</h3>
                            <p className="text-xs text-slate-500">{product.storage}</p>
                          </div>
                          <span className="inline-block px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full">
                            {product.condition}
                          </span>
                        </div>
                        <p className="text-sm text-slate-600 mb-4">{product.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-slate-900">R{product.price.toLocaleString()}</span>
                          <Button
                            size="sm"
                            className="rounded-full bg-emerald-600 hover:bg-emerald-700"
                            onClick={(e) => {
                              e.preventDefault();
                              handleAddToCart(product);
                            }}
                          >
                            <ShoppingCart className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
