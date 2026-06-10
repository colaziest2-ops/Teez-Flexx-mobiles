import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { toast } from 'sonner';
import { Check } from 'lucide-react';

const CheckoutPage = () => {
  const { cart, fetchCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    address: '',
    city: '',
    postal_code: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!user) {
    navigate('/login');
    return null;
  }

  const calculateTotal = () => {
    return cart.items.reduce((sum, item) => {
      return sum + (item.product?.price || 0) * item.quantity;
    }, 0);
  };

  if (!cart.items || cart.items.length === 0) {
    navigate('/cart');
    return null;
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      toast.success('Order placed successfully!');
      fetchCart();
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center py-12 px-6">
        <div className="max-w-md text-center" data-testid="checkout-success-message">
          <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Order Placed Successfully!</h2>
          <p className="text-slate-600 mb-8">
            Thank you for your order! We'll contact you shortly to arrange payment and delivery.
          </p>
          <Button onClick={() => navigate('/shop')} className="rounded-full" data-testid="checkout-continue-btn">
            Continue Shopping
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8" data-testid="checkout-page-title">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white border border-slate-200 rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Delivery Information</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-slate-700 font-semibold">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-2 bg-slate-50 border-slate-200 rounded-xl"
                      data-testid="checkout-name-input"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-slate-700 font-semibold">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-2 bg-slate-50 border-slate-200 rounded-xl"
                      data-testid="checkout-phone-input"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-slate-700 font-semibold">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 bg-slate-50 border-slate-200 rounded-xl"
                    data-testid="checkout-email-input"
                  />
                </div>

                <div>
                  <Label htmlFor="address" className="text-slate-700 font-semibold">Street Address *</Label>
                  <Input
                    id="address"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className="mt-2 bg-slate-50 border-slate-200 rounded-xl"
                    placeholder="123 Main Street"
                    data-testid="checkout-address-input"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="city" className="text-slate-700 font-semibold">City *</Label>
                    <Input
                      id="city"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      className="mt-2 bg-slate-50 border-slate-200 rounded-xl"
                      data-testid="checkout-city-input"
                    />
                  </div>
                  <div>
                    <Label htmlFor="postal_code" className="text-slate-700 font-semibold">Postal Code *</Label>
                    <Input
                      id="postal_code"
                      name="postal_code"
                      required
                      value={formData.postal_code}
                      onChange={handleChange}
                      className="mt-2 bg-slate-50 border-slate-200 rounded-xl"
                      data-testid="checkout-postal-input"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="notes" className="text-slate-700 font-semibold">Order Notes (Optional)</Label>
                  <Textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={3}
                    className="mt-2 bg-slate-50 border-slate-200 rounded-xl"
                    placeholder="Any special instructions?"
                    data-testid="checkout-notes-input"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-full bg-emerald-600 hover:bg-emerald-700 text-white py-6 text-lg font-semibold"
                  data-testid="checkout-submit-btn"
                >
                  {loading ? 'Processing...' : 'Place Order'}
                </Button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sticky top-24">
              <h3 className="font-bold text-xl mb-6">Order Summary</h3>
              <div className="space-y-4 mb-6">
                {cart.items.map((item) => {
                  if (!item.product) return null;
                  return (
                    <div key={item.product_id} className="flex gap-3" data-testid={`checkout-item-${item.product_id}`}>
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-16 object-cover rounded-xl"
                      />
                      <div className="flex-1">
                        <p className="font-semibold text-sm text-slate-900">{item.product.name}</p>
                        <p className="text-xs text-slate-500">Qty: {item.quantity}</p>
                        <p className="text-sm font-bold text-slate-900">
                          R{(item.product.price * item.quantity).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="border-t border-slate-200 pt-4 space-y-3">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span data-testid="checkout-subtotal">R{calculateTotal().toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Shipping</span>
                  <span className="text-emerald-600 font-semibold">FREE</span>
                </div>
                <div className="border-t border-slate-200 pt-3 flex justify-between">
                  <span className="font-bold text-slate-900 text-lg">Total</span>
                  <span className="font-bold text-slate-900 text-lg" data-testid="checkout-total">
                    R{calculateTotal().toLocaleString()}
                  </span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-slate-50 rounded-xl text-sm text-slate-600">
                <p>Payment will be arranged after order confirmation. We accept cash, EFT, and card payments.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;