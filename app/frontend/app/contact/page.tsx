'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Contact form - implement email service');
  };

  return (
    <div className="min-h-screen">
      <section className="bg-slate-100 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">Contact Us</h1>
          <p className="text-xl text-slate-600">Get in touch with our team</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">WhatsApp</h3>
                <p className="text-slate-600">+27 XX XXX XXXX (24/7 Support)</p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Email</h3>
                <p className="text-slate-600">info@teezflexx.co.za</p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Address</h3>
                <p className="text-slate-600">123 Main Street<br />Johannesburg, South Africa</p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Hours</h3>
                <p className="text-slate-600">Monday - Friday: 9AM - 6PM<br />Saturday: 10AM - 4PM<br />Sunday: Closed</p>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border border-slate-200 rounded-lg px-4 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border border-slate-200 rounded-lg px-4 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full border border-slate-200 rounded-lg px-4 py-2 min-h-[200px]"
                  required
                />
              </div>
              <Button type="submit" className="w-full rounded-full bg-emerald-600 hover:bg-emerald-700 py-3">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
