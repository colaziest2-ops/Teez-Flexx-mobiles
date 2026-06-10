import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    condition: '',
    model: '',
    storage: '',
    category: ''
  });
  const [showFilters, setShowFilters] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();
  const { addToCart } = useCart();

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [filters, products]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${API}/products`);
      setProducts(response.data);
      setFilteredProducts(response.data);
    } catch (error) {
      console.error('Failed to fetch products:', error);
      toast.error('Failed to load products');
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let filtered = [...products];

    if (filters.condition) {
      filtered = filtered.filter(p => p.condition === filters.condition);
    }
    if (filters.model) {
      filtered = filtered.filter(p => p.model === filters.model);
    }
    if (filters.storage) {
      filtered = filtered.filter(p => p.storage === filters.storage);
    }
    if (filters.category) {
      filtered = filtered.filter(p => p.category === filters.category);
    }

    setFilteredProducts(filtered);
  };

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({ condition: '', model: '', storage: '', category: '' });
  };

  const handleAddToCart = async (productId) => {
    if (!user) {
      toast.error('Please login to add items to cart');
      navigate('/login');
      return;
    }

    try {
      await addToCart(productId, 1);
      toast.success('Added to cart!');
    } catch (error) {
      toast.error('Failed to add to cart');
    }
  };

  const uniqueModels = [...new Set(products.map(p => p.model))];
  const uniqueStorages = [...new Set(products.map(p => p.storage))];
  const uniqueConditions = [...new Set(products.map(p => p.condition))];
  const uniqueCategories = [...new Set(products.map(p => p.category))];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900 mx-auto mb-4"></div>
          <p className="text-slate-600">Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2" data-testid="shop-page-title">Shop iPhones</h1>
          <p className="text-slate-600">Find your perfect iPhone from our extensive collection</p>
        </div>

        <div className="flex gap-8">
          <aside className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-64 bg-white border border-slate-200 rounded-2xl p-6 h-fit sticky top-24`}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-lg">Filters</h3>
              <button onClick={() => setShowFilters(false)} className="md:hidden" data-testid="close-filters-btn">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Category</label>
                <select
                  value={filters.category}
                  onChange={(e) => handleFilterChange('category', e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  data-testid="filter-category"
                >
                  <option value="">All Categories</option>
                  {uniqueCategories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Condition</label>
                <select
                  value={filters.condition}
                  onChange={(e) => handleFilterChange('condition', e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  data-testid="filter-condition"
                >
                  <option value="">All Conditions</option>
                  {uniqueConditions.map(cond => <option key={cond} value={cond}>{cond}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Model</label>
                <select
                  value={filters.model}
                  onChange={(e) => handleFilterChange('model', e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  data-testid="filter-model"
                >
                  <option value="">All Models</option>
                  {uniqueModels.map(model => <option key={model} value={model}>{model}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Storage</label>
                <select
                  value={filters.storage}
                  onChange={(e) => handleFilterChange('storage', e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  data-testid="filter-storage"
                >
                  <option value="">All Storage</option>
                  {uniqueStorages.map(storage => <option key={storage} value={storage}>{storage}</option>)}
                </select>
              </div>

              <Button
                onClick={clearFilters}
                variant="outline"
                className="w-full rounded-full"
                data-testid="clear-filters-btn"
              >
                Clear Filters
              </Button>
            </div>
          </aside>

          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-slate-600" data-testid="product-count">
                {filteredProducts.length} products found
              </p>
              <Button
                onClick={() => setShowFilters(true)}
                variant="outline"
                className="md:hidden rounded-full"
                data-testid="show-filters-btn"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.product_id}
                  className="product-card bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg"
                  data-testid={`product-card-${product.product_id}`}
                >
                  <div
                    className="relative h-56 cursor-pointer"
                    onClick={() => navigate(`/product/${product.product_id}`)}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    {product.original_price && (
                      <span className="badge-discount" data-testid={`product-discount-${product.product_id}`}>
                        Save R{product.original_price - product.price}
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="mb-2">
                      <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                        {product.condition}
                      </span>
                    </div>
                    <h3
                      className="font-bold text-slate-900 mb-2 cursor-pointer hover:text-slate-700"
                      onClick={() => navigate(`/product/${product.product_id}`)}
                      data-testid={`product-name-${product.product_id}`}
                    >
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-2xl font-bold text-slate-900" data-testid={`product-price-${product.product_id}`}>
                        R{product.price.toLocaleString()}
                      </span>
                      {product.original_price && (
                        <span className="text-sm text-slate-400 line-through">
                          R{product.original_price.toLocaleString()}
                        </span>
                      )}
                    </div>
                    <Button
                      onClick={() => handleAddToCart(product.product_id)}
                      className="w-full rounded-full bg-slate-900 hover:bg-slate-800 text-white"
                      data-testid={`add-to-cart-btn-${product.product_id}`}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12" data-testid="no-products-message">
                <p className="text-slate-600 text-lg">No products found matching your filters.</p>
                <Button onClick={clearFilters} className="mt-4 rounded-full" data-testid="no-products-clear-btn">
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;