import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center py-12 px-6">
        <div className="text-center max-w-md">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Please Login</h2>
          <p className="text-slate-600 mb-6">You need to be logged in to view your cart</p>
          <Button onClick={() => navigate('/login')} className="rounded-full" data-testid="cart-login-btn">
            Go to Login
          </Button>
        </div>
      </div>
    );
  }

  const calculateTotal = () => {
    return cart.items.reduce((sum, item) => {
      return sum + (item.product?.price || 0) * item.quantity;
    }, 0);
  };

  if (!cart.items || cart.items.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center py-12 px-6">
        <div className="text-center max-w-md" data-testid="empty-cart-message">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Cart is Empty</h2>
          <p className="text-slate-600 mb-6">Add some products to get started</p>
          <Button onClick={() => navigate('/shop')} className="rounded-full" data-testid="empty-cart-shop-btn">
            Start Shopping
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8" data-testid="cart-page-title">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cart.items.map((item) => {
              if (!item.product) return null;
              return (
                <div
                  key={item.product_id}
                  className="bg-white border border-slate-200 rounded-2xl p-6 flex gap-6"
                  data-testid={`cart-item-${item.product_id}`}
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-24 h-24 object-cover rounded-xl cursor-pointer"
                    onClick={() => navigate(`/product/${item.product_id}`)}
                  />
                  <div className="flex-1">
                    <h3
                      className="font-bold text-lg text-slate-900 mb-2 cursor-pointer hover:text-slate-700"
                      onClick={() => navigate(`/product/${item.product_id}`)}
                      data-testid={`cart-item-name-${item.product_id}`}
                    >
                      {item.product.name}
                    </h3>
                    <p className="text-slate-600 text-sm mb-3">{item.product.condition}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 bg-slate-100 rounded-full px-4 py-2">
                        <button
                          onClick={() => updateQuantity(item.product_id, Math.max(1, item.quantity - 1))}
                          className="text-slate-600 hover:text-slate-900"
                          data-testid={`cart-decrease-${item.product_id}`}
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="font-semibold text-slate-900" data-testid={`cart-quantity-${item.product_id}`}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product_id, item.quantity + 1)}
                          className="text-slate-600 hover:text-slate-900"
                          data-testid={`cart-increase-${item.product_id}`}
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.product_id)}
                        className="text-red-600 hover:text-red-700"
                        data-testid={`cart-remove-${item.product_id}`}
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-slate-900" data-testid={`cart-item-price-${item.product_id}`}>
                      R{(item.product.price * item.quantity).toLocaleString()}
                    </p>
                    <p className="text-sm text-slate-500">R{item.product.price.toLocaleString()} each</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sticky top-24">
              <h3 className="font-bold text-xl mb-6">Order Summary</h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span data-testid="cart-subtotal">R{calculateTotal().toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Shipping</span>
                  <span className="text-emerald-600 font-semibold">FREE</span>
                </div>
                <div className="border-t border-slate-200 pt-3 flex justify-between">
                  <span className="font-bold text-slate-900 text-lg">Total</span>
                  <span className="font-bold text-slate-900 text-lg" data-testid="cart-total">
                    R{calculateTotal().toLocaleString()}
                  </span>
                </div>
              </div>
              <Button
                onClick={() => navigate('/checkout')}
                className="w-full rounded-full bg-emerald-600 hover:bg-emerald-700 text-white py-6 text-lg font-semibold"
                data-testid="cart-checkout-btn"
              >
                Proceed to Checkout
              </Button>
              <Button
                onClick={() => navigate('/shop')}
                variant="outline"
                className="w-full rounded-full mt-3"
                data-testid="cart-continue-shopping-btn"
              >
                Continue Shopping
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;