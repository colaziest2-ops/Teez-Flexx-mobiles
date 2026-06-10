'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { Trash2, Plus, Minus } from 'lucide-react';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Your cart is empty</h1>
          <p className="text-slate-600 mb-6">Start shopping to add items to your cart</p>
          <Link href="/shop">
            <Button className="rounded-full bg-emerald-600 hover:bg-emerald-700">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <section className="bg-slate-100 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-900">Shopping Cart</h1>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-4 mb-8">
          {cart.map((item) => (
            <div key={item.id} className="bg-white border border-slate-200 rounded-lg p-4 flex gap-4">
              <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
              <div className="flex-1">
                <h3 className="font-semibold text-slate-900">{item.name}</h3>
                <p className="text-emerald-600 font-bold">R{item.price.toLocaleString()}</p>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-8 text-center">{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <button onClick={() => removeFromCart(item.id)}>
                <Trash2 className="h-4 w-4 text-red-600" />
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white border border-slate-200 rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <span className="text-lg font-semibold">Total:</span>
            <span className="text-3xl font-bold text-emerald-600">R{total.toLocaleString()}</span>
          </div>
          <Link href="/checkout" className="block">
            <Button className="w-full rounded-full bg-emerald-600 hover:bg-emerald-700 py-3 text-lg">
              Proceed to Checkout
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
