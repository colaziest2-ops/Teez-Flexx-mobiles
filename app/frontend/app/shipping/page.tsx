'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Truck, 
  Package, 
  MapPin, 
  CreditCard, 
  AlertTriangle, 
  Clock,
  Shield,
  RefreshCw,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-brand-black">
      {/* Hero */}
      <section className="bg-brand-charcoal py-12 px-6 border-b border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Delivery & Shipping</h1>
          <p className="text-brand-muted">Nationwide courier and in-store collection options</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Delivery Options */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Delivery Options</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Free Courier */}
            <div className="bg-brand-charcoal rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-xl flex items-center justify-center">
                  <Truck className="w-6 h-6 text-brand-gold" />
                </div>
                <div>
                  <h3 className="font-bold text-white">Free Nationwide Courier</h3>
                  <p className="text-sm text-brand-muted">PostNet-to-PostNet</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-brand-muted">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                  Delivery within 3-5 business days
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                  Tracking number provided
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                  Risk on customer during transit
                </li>
              </ul>
            </div>

            {/* Cash on Delivery */}
            <div className="bg-brand-charcoal rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-xl flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-brand-gold" />
                </div>
                <div>
                  <h3 className="font-bold text-white">Cash on Delivery</h3>
                  <p className="text-sm text-brand-muted">Pietermaritzburg only</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-brand-muted">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                  Same-day delivery in PMB area
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                  Pay when you receive
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                  No upfront payment required
                </li>
              </ul>
            </div>

            {/* In-Store Collection */}
            <div className="bg-brand-charcoal rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-brand-gold" />
                </div>
                <div>
                  <h3 className="font-bold text-white">In-Store Collection</h3>
                  <p className="text-sm text-brand-muted">By appointment</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-brand-muted">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                  Book an appointment online
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                  Inspect device before purchase
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                  8 Coronation Road, Scottsville
                </li>
              </ul>
            </div>

            {/* Repair Collection */}
            <div className="bg-brand-charcoal rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-xl flex items-center justify-center">
                  <RefreshCw className="w-6 h-6 text-brand-gold" />
                </div>
                <div>
                  <h3 className="font-bold text-white">Repair Collection</h3>
                  <p className="text-sm text-brand-muted">Pickup & delivery service</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-brand-muted">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                  We collect your damaged device
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                  Repair and return to your address
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                  Available in major cities
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Payment Methods */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Payment Methods</h2>
          <div className="bg-brand-charcoal rounded-2xl p-6 border border-white/10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-black rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-brand-gold font-bold text-lg">R</span>
                </div>
                <h4 className="font-semibold text-white mb-1">Cash</h4>
                <p className="text-sm text-brand-muted">In-store purchases</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-black rounded-xl flex items-center justify-center mx-auto mb-3">
                  <CreditCard className="w-6 h-6 text-brand-gold" />
                </div>
                <h4 className="font-semibold text-white mb-1">Card</h4>
                <p className="text-sm text-brand-muted">All major cards accepted</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-black rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-brand-gold" />
                </div>
                <h4 className="font-semibold text-white mb-1">Instant EFT</h4>
                <p className="text-sm text-brand-muted">Online bank transfer</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Important Notice */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-amber-500 mb-2">Important Delivery Information</h3>
                <ul className="space-y-2 text-sm text-brand-muted">
                  <li>• Courier transit risk is on the customer unless otherwise stated</li>
                  <li>All devices are tested, cleaned, and in 100% working condition before shipping</li>
                  <li>Tracking information will be sent via WhatsApp once your order is dispatched</li>
                  <li>For in-store collection, please bring your ID and order reference</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Trade-ins */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Trade-ins Welcome</h2>
          <div className="bg-brand-charcoal rounded-2xl p-6 border border-white/10">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-brand-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <RefreshCw className="w-6 h-6 text-brand-gold" />
              </div>
              <div>
                <h3 className="font-bold text-white mb-2">Sell or Trade Your Old Device</h3>
                <p className="text-brand-muted mb-4">
                  Get the best value for your old iPhone when you upgrade. We accept devices in any condition 
                  — working or damaged. Trade-in value can be used towards your purchase or paid out in cash.
                </p>
                <Link 
                  href="/trade-in"
                  className="inline-flex items-center gap-2 text-brand-gold hover:text-brand-goldLight font-semibold transition-colors"
                >
                  Get a trade-in quote <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Trust Signals */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="text-center p-4">
              <Shield className="w-8 h-8 text-brand-gold mx-auto mb-2" />
              <p className="text-sm font-medium text-white">3-Month Warranty</p>
              <p className="text-xs text-brand-muted">On all devices</p>
            </div>
            <div className="text-center p-4">
              <Package className="w-8 h-8 text-brand-gold mx-auto mb-2" />
              <p className="text-sm font-medium text-white">Free Shipping</p>
              <p className="text-xs text-brand-muted">Nationwide courier</p>
            </div>
            <div className="text-center p-4">
              <Clock className="w-8 h-8 text-brand-gold mx-auto mb-2" />
              <p className="text-sm font-medium text-white">Same-Day Service</p>
              <p className="text-xs text-brand-muted">Diagnostics & repairs</p>
            </div>
            <div className="text-center p-4">
              <MapPin className="w-8 h-8 text-brand-gold mx-auto mb-2" />
              <p className="text-sm font-medium text-white">Local Business</p>
              <p className="text-xs text-brand-muted">Scottsville, PMB</p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
