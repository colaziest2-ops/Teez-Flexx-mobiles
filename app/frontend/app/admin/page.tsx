'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AdminPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-slate-100 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Admin Dashboard</h1>
          <p className="text-slate-600">Connect to Supabase for admin functionality</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Products</h3>
            <p className="text-3xl font-bold text-emerald-600">--</p>
            <p className="text-sm text-slate-600">Connect to Supabase</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Orders</h3>
            <p className="text-3xl font-bold text-emerald-600">--</p>
            <p className="text-sm text-slate-600">Connect to Supabase</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Users</h3>
            <p className="text-3xl font-bold text-emerald-600">--</p>
            <p className="text-sm text-slate-600">Connect to Supabase</p>
          </div>
        </div>

        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Getting Started</h2>
          <ol className="space-y-3 text-blue-800">
            <li>1. Set up your Supabase project</li>
            <li>2. Configure environment variables</li>
            <li>3. Connect Supabase client</li>
            <li>4. Implement admin authentication</li>
            <li>5. Build admin tables and forms</li>
          </ol>
        </div>
      </section>
    </div>
  );
}
