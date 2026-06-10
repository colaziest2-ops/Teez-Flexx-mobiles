'use client';

import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import { useState } from 'react';

export default function CheckoutPage() {
  const { cart } = useCart();
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone: '',
    address: '',
    paymentMethod: 'card'
  });

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle checkout
    alert('Order submitted! In a real app, this would process the payment.');
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Link href="/shop">
          <Button>Back to Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <section className="bg-slate-100 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-900">Checkout</h1>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Billing Information</h2>
                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full border border-slate-200 rounded-lg px-4 py-2"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border border-slate-200 rounded-lg px-4 py-2"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full border border-slate-200 rounded-lg px-4 py-2"
                    required
                  />
                  <textarea
                    placeholder="Delivery Address"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full border border-slate-200 rounded-lg px-4 py-2"
                    required
                  />
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Payment Method</h2>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="radio" name="payment" value="card" checked={formData.paymentMethod === 'card'} onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })} />
                    <span className="ml-2">Credit/Debit Card</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="payment" value="transfer" onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })} />
                    <span className="ml-2">Bank Transfer</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="payment" value="cash" onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })} />
                    <span className="ml-2">Cash on Delivery</span>
                  </label>
                </div>
              </div>

              <Button type="submit" className="w-full rounded-full bg-emerald-600 hover:bg-emerald-700 py-3 text-lg">
                Complete Order
              </Button>
            </form>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-6 h-fit sticky top-24">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Order Summary</h2>
            <div className="space-y-4 mb-6">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <span>{item.name} x{item.quantity}</span>
                  <span className="font-semibold">R{(item.price * item.quantity).toLocaleString()}</span>
                </div>
              ))}
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between text-xl font-bold">
                <span>Total:</span>
                <span className="text-emerald-600">R{total.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
