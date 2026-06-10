import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import { Check, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_ANON_KEY
);

const ProductDetailPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    fetchProduct();
  }, [productId]);

  const fetchProduct = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', productId)
        .single();

      if (error) throw error;
      setProduct(data);
    } catch (error) {
      console.error('Failed to fetch product:', error);
      toast.error('Product not found');
      navigate('/shop');
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = async () => {
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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900 mx-auto mb-4"></div>
          <p className="text-slate-600">Loading product...</p>
        </div>
      </div>
    );
  }

  if (!product) return null;

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <Button
          onClick={() => navigate('/shop')}
          variant="ghost"
          className="mb-6"
          data-testid="back-to-shop-btn"
        >
          ← Back to Shop
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div
              className="relative bg-white border border-slate-200 rounded-3xl overflow-hidden"
              data-testid="product-image"
            >
              {product.image_url ? (
                <img
                  src={product.image_url}
                  alt={`${product.model} ${product.storage}`}
                  className="w-full h-auto"
                />
              ) : (
                <div className="w-full h-80 flex items-center justify-center text-slate-400 text-sm">
                  No image available
                </div>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <span className="text-sm font-semibold text-emerald-600 bg-emerald-50 px-4 py-2 rounded-full" data-testid="product-detail-condition">
                {product.condition}
              </span>
            </div>

            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2" data-testid="product-detail-name">
                {product.model}
              </h1>
              <p className="text-slate-500">{product.storage} · {product.color}</p>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold text-slate-900" data-testid="product-detail-price">
                R{product.price?.toLocaleString()}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 bg-slate-100 p-6 rounded-2xl">
              <div>
                <p className="text-sm text-slate-600 mb-1">Model</p>
                <p className="font-semibold text-slate-900" data-testid="product-detail-model">{product.model}</p>
              </div>
              <div>
                <p className="text-sm text-slate-600 mb-1">Storage</p>
                <p className="font-semibold text-slate-900" data-testid="product-detail-storage">{product.storage}</p>
              </div>
              <div>
                <p className="text-sm text-slate-600 mb-1">Color</p>
                <p className="font-semibold text-slate-900" data-testid="product-detail-color">{product.color}</p>
              </div>
              <div>
                <p className="text-sm text-slate-600 mb-1">Condition</p>
                <p className="font-semibold text-emerald-600">{product.condition}</p>
              </div>
            </div>

            <Button
              onClick={handleAddToCart}
              className="w-full rounded-full bg-emerald-600 hover:bg-emerald-700 text-white py-6 text-lg font-semibold"
              data-testid="product-detail-add-to-cart-btn"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;