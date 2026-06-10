'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Zap, CheckCircle, Clock } from 'lucide-react';

export default function DiagnosticPage() {
  const diagnosticServices = [
    {
      name: 'Battery Health',
      price: 'FREE',
      icon: Zap,
      description: 'Check your battery health and capacity'
    },
    {
      name: 'Screen Test',
      price: 'FREE',
      icon: CheckCircle,
      description: 'Test for dead pixels and responsiveness'
    },
    {
      name: 'Full Diagnostics',
      price: 'R199',
      icon: Clock,
      description: 'Complete system check and report'
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">iPhone Diagnostics</h1>
          <p className="text-xl text-slate-600">Professional device diagnostics and health checks</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {diagnosticServices.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.name} className="bg-white border border-slate-200 rounded-2xl p-8 text-center hover:shadow-lg transition-all">
                <Icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{service.name}</h3>
                <p className="text-slate-600 mb-6">{service.description}</p>
                <div className="text-3xl font-bold text-blue-600 mb-6">{service.price}</div>
                <Button className="w-full rounded-full bg-blue-600 hover:bg-blue-700">
                  Book Now
                </Button>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-slate-100 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">What We Check</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Hardware</h3>
              <ul className="space-y-2 text-slate-600">
                <li>✓ Battery capacity and health</li>
                <li>✓ Screen responsiveness</li>
                <li>✓ Camera functionality</li>
                <li>✓ Face ID and Touch ID</li>
                <li>✓ Speaker and microphone</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Software</h3>
              <ul className="space-y-2 text-slate-600">
                <li>✓ iOS version and security</li>
                <li>✓ Storage and memory</li>
                <li>✓ Connectivity (WiFi, Bluetooth)</li>
                <li>✓ Performance metrics</li>
                <li>✓ Malware and security scan</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready for a Diagnostic?</h2>
        <Button className="rounded-full px-8 py-6 bg-emerald-600 hover:bg-emerald-700 text-lg">
          Schedule Appointment
        </Button>
      </section>
    </div>
  );
}
