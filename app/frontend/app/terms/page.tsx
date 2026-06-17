'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, AlertTriangle, Truck, Clock, FileText, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-brand-black">
      {/* Hero */}
      <section className="bg-brand-charcoal py-12 px-6 border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Terms & Conditions</h1>
          <p className="text-brand-muted">Last updated: {new Date().toLocaleDateString('en-ZA', { month: 'long', year: 'numeric' })}</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Introduction */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="bg-brand-charcoal rounded-2xl p-6 border border-white/10">
            <p className="text-brand-muted leading-relaxed">
              These Terms and Conditions govern your use of the Teez-Flexx Mobiles website and services. 
              By accessing our website, booking appointments, or purchasing products, you agree to be bound 
              by these terms. Please read them carefully before using our services.
            </p>
          </div>
        </motion.section>

        {/* Section 1: Device Inspection */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-brand-gold/20 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-brand-gold" />
            </div>
            <h2 className="text-xl font-bold text-white">1. Device Inspection on Arrival</h2>
          </div>
          <div className="bg-brand-charcoal rounded-2xl p-6 border border-white/10">
            <ul className="space-y-3 text-brand-muted">
              <li className="flex items-start gap-3">
                <span className="text-brand-gold mt-1">•</span>
                All devices brought in for repair or trade-in will undergo a thorough inspection upon arrival.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold mt-1">•</span>
                The customer must disclose any known issues, previous repairs, or modifications to the device.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold mt-1">•</span>
                Failure to disclose relevant information may void warranty and affect repair quotes.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold mt-1">•</span>
                We reserve the right to refuse service to devices that have been tampered with or modified with non-genuine parts.
              </li>
            </ul>
          </div>
        </motion.section>

        {/* Section 2: No Self-Diagnostics */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-brand-gold/20 rounded-lg flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-brand-gold" />
            </div>
            <h2 className="text-xl font-bold text-white">2. No Self-Diagnostics</h2>
          </div>
          <div className="bg-brand-charcoal rounded-2xl p-6 border border-white/10">
            <ul className="space-y-3 text-brand-muted">
              <li className="flex items-start gap-3">
                <span className="text-brand-gold mt-1">•</span>
                Initial quotes provided online or over the phone are estimates based on customer description.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold mt-1">•</span>
                Final repair costs can only be determined after our technicians perform a complete diagnostic inspection.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold mt-1">•</span>
                Additional issues discovered during repair will be communicated to the customer before proceeding.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold mt-1">•</span>
                Customers will be notified of any price changes and must approve additional work before we continue.
              </li>
            </ul>
          </div>
        </motion.section>

        {/* Section 3: Courier Transit Responsibility */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-brand-gold/20 rounded-lg flex items-center justify-center">
              <Truck className="w-5 h-5 text-brand-gold" />
            </div>
            <h2 className="text-xl font-bold text-white">3. Courier Transit & Packaging Responsibility</h2>
          </div>
          <div className="bg-brand-charcoal rounded-2xl p-6 border border-white/10">
            <ul className="space-y-3 text-brand-muted">
              <li className="flex items-start gap-3">
                <span className="text-brand-gold mt-1">•</span>
                Risk during courier transit is the responsibility of the customer unless otherwise stated.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold mt-1">•</span>
                Customers must ensure devices are properly packaged before sending via courier.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold mt-1">•</span>
                We recommend using insured courier services and tracking all shipments.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold mt-1">•</span>
                Teez-Flexx Mobiles is not liable for devices lost or damaged in transit to or from our premises.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold mt-1">•</span>
                For high-value devices, we strongly recommend in-store drop-off and collection by appointment.
              </li>
            </ul>
          </div>
        </motion.section>

        {/* Section 4: Quote Changes */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-brand-gold/20 rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5 text-brand-gold" />
            </div>
            <h2 className="text-xl font-bold text-white">4. Quotes Subject to Change</h2>
          </div>
          <div className="bg-brand-charcoal rounded-2xl p-6 border border-white/10">
            <ul className="space-y-3 text-brand-muted">
              <li className="flex items-start gap-3">
                <span className="text-brand-gold mt-1">•</span>
                All repair quotes are subject to change after physical evaluation of the device.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold mt-1">•</span>
                Hidden damage, water damage not initially disclosed, or additional component failures may affect the final price.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold mt-1">•</span>
                If additional costs are identified, the customer will be contacted for approval before proceeding.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold mt-1">•</span>
                If the customer declines additional work, a diagnostic fee may still apply.
              </li>
            </ul>
          </div>
        </motion.section>

        {/* Section 5: Warranty */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-brand-gold/20 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-brand-gold" />
            </div>
            <h2 className="text-xl font-bold text-white">5. 3-Month Warranty Terms</h2>
          </div>
          <div className="bg-brand-charcoal rounded-2xl p-6 border border-white/10">
            <ul className="space-y-3 text-brand-muted">
              <li className="flex items-start gap-3">
                <span className="text-brand-gold mt-1">•</span>
                All pre-owned devices come with a 3-month warranty covering functional defects.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold mt-1">•</span>
                Warranty does NOT cover: physical damage, water damage, unauthorized modifications, or software issues caused by user actions.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold mt-1">•</span>
                Accessories (chargers, cables, cases) are not covered under the device warranty.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold mt-1">•</span>
                Repairs performed by Teez-Flexx carry a 30-day warranty on the specific repair work only.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-gold mt-1">•</span>
                Warranty claims require proof of purchase and the original receipt.
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
              <MessageSquare className="w-5 h-5 text-brand-gold" />
            </div>
            <h2 className="text-xl font-bold text-white">6. Questions or Concerns?</h2>
          </div>
          <div className="bg-brand-charcoal rounded-2xl p-6 border border-white/10">
            <p className="text-brand-muted mb-4">
              If you have any questions about these Terms & Conditions, please contact us:
            </p>
            <div className="space-y-2 text-brand-muted">
              <p><strong className="text-white">Phone:</strong> <a href="tel:+27743376552" className="text-brand-gold hover:underline">074 337 6552</a></p>
              <p><strong className="text-white">WhatsApp:</strong> <a href="https://wa.me/27743376552" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:underline">074 337 6552</a></p>
              <p><strong className="text-white">Address:</strong> 8 Coronation Road, Scottsville, Pietermaritzburg, 3201</p>
            </div>
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
