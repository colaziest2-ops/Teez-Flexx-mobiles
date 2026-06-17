'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Home, ShoppingBag, Phone } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-black flex items-center justify-center px-6 py-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-lg w-full text-center"
      >
        <div className="text-8xl sm:text-9xl font-bold text-brand-gold mb-4">404</div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3">Page Not Found</h1>
        <p className="text-brand-muted text-lg mb-8">
          Oops! This page took a wrong turn. Let&apos;s get you back.
        </p>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <Link href="/" className="bg-brand-charcoal border border-white/10 rounded-2xl p-5 hover:border-brand-gold/30 transition-all">
            <Home className="w-6 h-6 text-brand-gold mx-auto mb-3" />
            <span className="text-white font-medium">Home</span>
          </Link>
          <Link href="/shop" className="bg-brand-charcoal border border-white/10 rounded-2xl p-5 hover:border-brand-gold/30 transition-all">
            <ShoppingBag className="w-6 h-6 text-brand-gold mx-auto mb-3" />
            <span className="text-white font-medium">Shop</span>
          </Link>
        </div>

        <a 
          href="tel:+27743376552"
          className="inline-flex items-center gap-2 bg-brand-gold text-brand-black font-semibold py-3 px-6 rounded-xl hover:bg-brand-goldLight transition-colors"
        >
          <Phone className="w-5 h-5" />
          Call Us: 074 337 6552
        </a>
      </motion.div>
    </div>
  );
}
