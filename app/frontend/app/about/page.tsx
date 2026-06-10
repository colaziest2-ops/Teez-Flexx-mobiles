'use client';

import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-slate-100 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">About Teez-Flexx Mobiles</h1>
          <p className="text-xl text-slate-600">South Africa's trusted iPhone specialist</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
        <p className="text-slate-600 mb-4">
          Founded in 2020, Teez-Flexx Mobiles has become South Africa's most trusted iPhone specialist. 
          We're dedicated to providing quality devices, professional repairs, and fair trade-in prices.
        </p>
        <p className="text-slate-600 mb-4">
          With multiple locations across South Africa and a dedicated team of certified technicians, 
          we've helped thousands of customers find the perfect iPhone and keep their devices in top condition.
        </p>

        <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Our Mission</h2>
        <p className="text-slate-600">
          To make premium iPhones accessible and affordable for every South African, 
          with world-class repair services and customer support.
        </p>

        <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">Why Choose Us?</h2>
        <ul className="space-y-4">
          <li className="flex gap-3">
            <span className="text-emerald-600 font-bold">✓</span>
            <span className="text-slate-600">Certified Apple technicians</span>
          </li>
          <li className="flex gap-3">
            <span className="text-emerald-600 font-bold">✓</span>
            <span className="text-slate-600">Original parts and warranty</span>
          </li>
          <li className="flex gap-3">
            <span className="text-emerald-600 font-bold">✓</span>
            <span className="text-slate-600">Best prices in South Africa</span>
          </li>
          <li className="flex gap-3">
            <span className="text-emerald-600 font-bold">✓</span>
            <span className="text-slate-600">24/7 WhatsApp support</span>
          </li>
        </ul>
      </section>
    </div>
  );
}
