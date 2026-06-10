'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Login functionality - connect to Supabase Auth');
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <div className="bg-white border border-slate-200 rounded-2xl p-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-6 text-center">Sign In</h1>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full border border-slate-200 rounded-lg px-4 py-3"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full border border-slate-200 rounded-lg px-4 py-3"
                required
              />
            </div>

            <Button type="submit" className="w-full rounded-full bg-emerald-600 hover:bg-emerald-700 py-3">
              Sign In
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-slate-600">Don't have an account? <Link href="/signup" className="text-emerald-600 hover:text-emerald-700 font-semibold">Sign Up</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}
