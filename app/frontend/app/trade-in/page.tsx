'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { DollarSign, TrendingUp, Zap } from 'lucide-react';

export default function TradeInPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-purple-50 to-purple-100 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">Sell Your iPhone</h1>
          <p className="text-xl text-slate-600">Get the best trade-in value for your old iPhone</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">How It Works</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-emerald-600 text-white font-bold">1</div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Select Your Device</h3>
                <p className="text-slate-600">Choose your iPhone model and condition</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-emerald-600 text-white font-bold">2</div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Get Instant Quote</h3>
                <p className="text-slate-600">Receive an instant evaluation of your device value</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-emerald-600 text-white font-bold">3</div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Ship or Visit</h3>
                <p className="text-slate-600">Send your device or visit us in-store</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-emerald-600 text-white font-bold">4</div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Get Paid</h3>
                <p className="text-slate-600">Receive payment within 24 hours</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-slate-100 rounded-2xl p-6 text-center">
            <DollarSign className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-slate-900 mb-2">Best Prices</h3>
            <p className="text-slate-600">We pay more than the competition</p>
          </div>
          <div className="bg-slate-100 rounded-2xl p-6 text-center">
            <TrendingUp className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-slate-900 mb-2">Instant Quote</h3>
            <p className="text-slate-600">Know your price before you send</p>
          </div>
          <div className="bg-slate-100 rounded-2xl p-6 text-center">
            <Zap className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-slate-900 mb-2">Fast Payment</h3>
            <p className="text-slate-600">Get paid within 24 hours</p>
          </div>
        </div>
      </section>

      <section className="bg-emerald-600 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Sell?</h2>
          <Button className="rounded-full px-8 py-6 bg-white text-emerald-600 hover:bg-slate-100 text-lg font-semibold">
            Get Your Quote Now
          </Button>
        </div>
      </section>
    </div>
  );
}
