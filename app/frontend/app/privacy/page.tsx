'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Database, Lock, Eye, Share2, UserX, Phone } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-brand-black">
      {/* Hero */}
      <section className="bg-brand-charcoal py-12 px-6 border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Privacy Policy</h1>
          <p className="text-brand-muted">POPIA Compliant • Last updated: {new Date().toLocaleDateString('en-ZA', { month: 'long', year: 'numeric' })}</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* POPIA Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6 mb-12"
        >
          <div className="flex items-start gap-4">
            <Shield className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-amber-500 mb-2">Protection of Personal Information Act (POPIA)</h3>
              <p className="text-sm text-brand-muted">
                Teez-Flexx Mobiles is committed to protecting your personal information in accordance with 
                South Africa's POPIA (Act 4 of 2013). This policy explains how we collect, use, store, 
                and protect your data.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Section 1: Information We Collect */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-brand-gold/20 rounded-lg flex items-center justify-center">
              <Database className="w-5 h-5 text-brand-gold" />
            </div>
            <h2 className="text-xl font-bold text-white">1. Information We Collect</h2>
          </div>
          <div className="bg-brand-charcoal rounded-2xl p-6 border border-white/10">
            <p className="text-brand-muted mb-4">We collect the following personal information when you:</p>
            <ul className="space-y-3 text-brand-muted">
              <li className="flex items-start gap-3">
                <span className="text-brand-gold mt-1">•</span>
                <span><strong className="text-white">Book an appointment:</strong> Name, phone number, email address, device details</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold mt-1">•</span>
                <span><strong className="text-white">Make a purchase:</strong> Contact details, delivery address, payment information (processed securely by payment providers)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold mt-1">•</span>
                <span><strong className="text-white">Contact us:</strong> Any information you voluntarily provide via WhatsApp, phone, or email</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold mt-1">•</span>
                <span><strong className="text-white">Browse our site:</strong> Non-identifiable usage data via analytics (see Section 5)</span>
              </li>
            </ul>
          </div>
        </motion.section>

        {/* Section 2: How We Use Your Information */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-brand-gold/20 rounded-lg flex items-center justify-center">
              <Eye className="w-5 h-5 text-brand-gold" />
            </div>
            <h2 className="text-xl font-bold text-white">2. How We Use Your Information</h2>
          </div>
          <div className="bg-brand-charcoal rounded-2xl p-6 border border-white/10">
            <p className="text-brand-muted mb-4">We use your personal information solely for:</p>
            <ul className="space-y-3 text-brand-muted">
              <li className="flex items-start gap-3">
                <span className="text-brand-gold mt-1">•</span>
                Processing and managing your appointments and bookings
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold mt-1">•</span>
                Fulfilling orders and arranging delivery/collection
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold mt-1">•</span>
                Communicating with you about your service, repair, or purchase
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold mt-1">•</span>
                Providing customer support and responding to inquiries
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold mt-1">•</span>
                Sending appointment reminders and service updates
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold mt-1">•</span>
                Complying with legal obligations (tax, warranty records)
              </li>
            </ul>
            <p className="text-brand-muted mt-4 pt-4 border-t border-white/10">
              <strong className="text-white">We do NOT:</strong> Sell your data, send marketing emails without consent, 
              or share your information with third parties for their marketing purposes.
            </p>
          </div>
        </motion.section>

        {/* Section 3: Data Security */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-brand-gold/20 rounded-lg flex items-center justify-center">
              <Lock className="w-5 h-5 text-brand-gold" />
            </div>
            <h2 className="text-xl font-bold text-white">3. Data Security & Storage</h2>
          </div>
          <div className="bg-brand-charcoal rounded-2xl p-6 border border-white/10">
            <ul className="space-y-3 text-brand-muted">
              <li className="flex items-start gap-3">
                <span className="text-brand-gold mt-1">•</span>
                Your data is stored on secure servers with industry-standard encryption
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold mt-1">•</span>
                Access to personal information is restricted to authorized personnel only
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold mt-1">•</span>
                We retain your data only as long as necessary for business and legal purposes
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold mt-1">•</span>
                Payment information is never stored on our servers — processed securely by trusted payment providers
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold mt-1">•</span>
                Regular security audits are conducted to ensure data protection
              </li>
            </ul>
          </div>
        </motion.section>

        {/* Section 4: Data Sharing */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-brand-gold/20 rounded-lg flex items-center justify-center">
              <Share2 className="w-5 h-5 text-brand-gold" />
            </div>
            <h2 className="text-xl font-bold text-white">4. Third-Party Sharing</h2>
          </div>
          <div className="bg-brand-charcoal rounded-2xl p-6 border border-white/10">
            <p className="text-brand-muted mb-4">We only share your information with:</p>
            <ul className="space-y-3 text-brand-muted">
              <li className="flex items-start gap-3">
                <span className="text-brand-gold mt-1">•</span>
                <span><strong className="text-white">Courier services:</strong> Delivery address and contact details for shipping (PostNet, etc.)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold mt-1">•</span>
                <span><strong className="text-white">Payment processors:</strong> Secure handling of payment transactions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold mt-1">•</span>
                <span><strong className="text-white">Legal authorities:</strong> When required by South African law or court order</span>
              </li>
            </ul>
            <p className="text-brand-muted mt-4 pt-4 border-t border-white/10">
              All third-party service providers are bound by confidentiality agreements and data protection obligations.
            </p>
          </div>
        </motion.section>

        {/* Section 5: Your Rights */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-brand-gold/20 rounded-lg flex items-center justify-center">
              <UserX className="w-5 h-5 text-brand-gold" />
            </div>
            <h2 className="text-xl font-bold text-white">5. Your Rights (POPIA)</h2>
          </div>
          <div className="bg-brand-charcoal rounded-2xl p-6 border border-white/10">
            <p className="text-brand-muted mb-4">Under POPIA, you have the right to:</p>
            <ul className="space-y-3 text-brand-muted">
              <li className="flex items-start gap-3">
                <span className="text-brand-gold mt-1">•</span>
                <strong className="text-white">Access:</strong> Request a copy of your personal information we hold
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold mt-1">•</span>
                <strong className="text-white">Correction:</strong> Request corrections to inaccurate or incomplete data
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold mt-1">•</span>
                <strong className="text-white">Deletion:</strong> Request deletion of your personal information (where legally permissible)
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold mt-1">•</span>
                <strong className="text-white">Objection:</strong> Object to processing of your data for legitimate reasons
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold mt-1">•</span>
                <strong className="text-white">Complaint:</strong> Lodge a complaint with the Information Regulator if you believe your rights have been violated
              </li>
            </ul>
          </div>
        </motion.section>

        {/* Section 6: Contact */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-brand-gold/20 rounded-lg flex items-center justify-center">
              <Phone className="w-5 h-5 text-brand-gold" />
            </div>
            <h2 className="text-xl font-bold text-white">6. Contact Us About Your Data</h2>
          </div>
          <div className="bg-brand-charcoal rounded-2xl p-6 border border-white/10">
            <p className="text-brand-muted mb-4">
              To exercise your privacy rights or ask questions about this policy:
            </p>
            <div className="space-y-2 text-brand-muted">
              <p><strong className="text-white">Phone/WhatsApp:</strong> <a href="tel:+27743376552" className="text-brand-gold hover:underline">074 337 6552</a></p>
              <p><strong className="text-white">Business:</strong> Teez-Flexx Mobiles</p>
              <p><strong className="text-white">Address:</strong> 8 Coronation Road, Scottsville, Pietermaritzburg, 3201</p>
            </div>
            <p className="text-brand-muted mt-4 pt-4 border-t border-white/10 text-sm">
              We will respond to all privacy-related requests within 30 days as required by POPIA.
            </p>
          </div>
        </motion.section>

        {/* Back Link */}
        <div className="text-center">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-brand-gold hover:text-brand-goldLight font-semibold transition-colors"
          >
            ← Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
