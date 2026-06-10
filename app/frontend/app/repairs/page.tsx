'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function RepairsPage() {
  const repairs = [
    {
      name: 'Screen Replacement',
      price: 'From R1,499',
      time: '1-2 hours',
      warranty: '6 months'
    },
    {
      name: 'Battery Replacement',
      price: 'From R799',
      time: '30 minutes',
      warranty: '1 year'
    },
    {
      name: 'Charging Port',
      price: 'From R999',
      time: '2-3 hours',
      warranty: '6 months'
    },
    {
      name: 'Speaker Repair',
      price: 'From R899',
      time: '1-2 hours',
      warranty: '6 months'
    },
    {
      name: 'Camera Repair',
      price: 'From R1,299',
      time: '2-3 hours',
      warranty: '6 months'
    },
    {
      name: 'Water Damage',
      price: 'From R1,999',
      time: '24-48 hours',
      warranty: '3 months'
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">iPhone Repairs</h1>
          <p className="text-xl text-slate-600">Professional repair services with warranty</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repairs.map((repair) => (
            <div key={repair.name} className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-slate-900 mb-4">{repair.name}</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-slate-600">Price</p>
                  <p className="text-2xl font-bold text-emerald-600">{repair.price}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600">Time</p>
                  <p className="font-semibold text-slate-900">{repair.time}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600">Warranty</p>
                  <p className="font-semibold text-slate-900">{repair.warranty}</p>
                </div>
              </div>
              <Button className="w-full mt-6 rounded-full bg-blue-600 hover:bg-blue-700">
                Book Repair
              </Button>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-100 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Why Choose Us?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Expert Technicians</h3>
              <p className="text-slate-600">Certified Apple-trained repair technicians with years of experience</p>
            </div>
            <div className="bg-white rounded-2xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Original Parts</h3>
              <p className="text-slate-600">All repairs use original or certified replacement parts</p>
            </div>
            <div className="bg-white rounded-2xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Fast Service</h3>
              <p className="text-slate-600">Most repairs completed within 24 hours</p>
            </div>
            <div className="bg-white rounded-2xl p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Warranty</h3>
              <p className="text-slate-600">All repairs come with warranty on parts and labor</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
