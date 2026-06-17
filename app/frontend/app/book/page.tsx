'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone, 
  Wrench, 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  ChevronRight, 
  ChevronLeft,
  Check,
  AlertCircle,
  MapPin,
  Package
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface BookingData {
  serviceType: 'viewing' | 'repair' | '';
  name: string;
  phone: string;
  email: string;
  deviceModel: string;
  issueDescription: string;
  preferredDate: string;
  preferredTime: string;
  termsAccepted: boolean;
}

const timeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
];

export default function BookPage() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const [bookingData, setBookingData] = useState<BookingData>({
    serviceType: '',
    name: '',
    phone: '',
    email: '',
    deviceModel: '',
    issueDescription: '',
    preferredDate: '',
    preferredTime: '',
    termsAccepted: false,
  });

  const updateBookingData = (field: keyof BookingData, value: string | boolean) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return bookingData.serviceType !== '';
      case 2:
        return bookingData.name.length >= 2 && 
               bookingData.phone.length >= 10 && 
               bookingData.deviceModel.length >= 2 &&
               (bookingData.serviceType === 'viewing' || bookingData.issueDescription.length >= 5);
      case 3:
        return bookingData.preferredDate !== '' && 
               bookingData.preferredTime !== '' && 
               bookingData.termsAccepted;
      default:
        return false;
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Generate booking reference
    const ref = 'TF-' + Date.now().toString(36).toUpperCase();
    setBookingRef(ref);
    
    try {
      // Submit to API endpoint
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...bookingData,
          reference: ref,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit booking');
      }

      // Store in localStorage as backup/reference for customer
      const bookings = JSON.parse(localStorage.getItem('teez_bookings') || '[]');
      bookings.push({ ...bookingData, reference: ref, createdAt: new Date().toISOString() });
      localStorage.setItem('teez_bookings', JSON.stringify(bookings));

      // Show appropriate message
      if (result._devNote) {
        toast.warning('Booking saved! Email notification requires RESEND_API_KEY setup.');
      } else {
        toast.success('Booking confirmed! Check your email for confirmation.');
      }
      
      setStep(4); // Success step
    } catch (error) {
      console.error('Booking submission error:', error);
      toast.error('Failed to submit booking. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetBooking = () => {
    setBookingData({
      serviceType: '',
      name: '',
      phone: '',
      email: '',
      deviceModel: '',
      issueDescription: '',
      preferredDate: '',
      preferredTime: '',
      termsAccepted: false,
    });
    setStep(1);
    setBookingRef('');
  };

  const stepVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <div className="min-h-screen bg-brand-black">
      {/* Hero */}
      <section className="bg-brand-charcoal py-12 px-6 border-b border-white/10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Book a Service</h1>
          <p className="text-brand-muted">Schedule your device viewing or repair appointment</p>
        </div>
      </section>

      {/* Progress Steps */}
      <div className="max-w-3xl mx-auto px-6 mt-8">
        <div className="flex items-center justify-center space-x-4">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${
                  step >= s
                    ? 'bg-brand-gold text-brand-black'
                    : 'bg-brand-charcoal text-brand-muted border border-white/10'
                }`}
              >
                {step > s ? <Check className="w-5 h-5" /> : s}
              </div>
              {s < 3 && (
                <div
                  className={`w-12 h-0.5 mx-2 transition-colors ${
                    step > s ? 'bg-brand-gold' : 'bg-white/10'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Form Container */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-brand-charcoal rounded-2xl p-6 sm:p-8 border border-white/10"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Select Service Type</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  onClick={() => updateBookingData('serviceType', 'viewing')}
                  className={`p-6 rounded-xl border-2 transition-all text-left min-h-[110px] touch-manipulation ${
                    bookingData.serviceType === 'viewing'
                      ? 'border-brand-gold bg-brand-gold/10'
                      : 'border-white/10 hover:border-white/20'
                  }`}
                >
                  <Smartphone className="w-8 h-8 text-brand-gold mb-3" />
                  <h3 className="font-bold text-white">In-Store Device Viewing</h3>
                  <p className="text-sm text-brand-muted mt-1">Browse and purchase pre-owned iPhones</p>
                </button>

                <button
                  onClick={() => updateBookingData('serviceType', 'repair')}
                  className={`p-6 rounded-xl border-2 transition-all text-left min-h-[110px] touch-manipulation ${
                    bookingData.serviceType === 'repair'
                      ? 'border-brand-gold bg-brand-gold/10'
                      : 'border-white/10 hover:border-white/20'
                  }`}
                >
                  <Wrench className="w-8 h-8 text-brand-gold mb-3" />
                  <h3 className="font-bold text-white">Device Repair / Service</h3>
                  <p className="text-sm text-brand-muted mt-1">Screen, battery, and diagnostic services</p>
                </button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-brand-charcoal rounded-2xl p-6 sm:p-8 border border-white/10"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Your Details</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Full Name *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-muted" />
                    <input
                      type="text"
                      value={bookingData.name}
                      onChange={(e) => updateBookingData('name', e.target.value)}
                      className="w-full bg-brand-black border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white text-base min-h-[48px] focus:outline-none focus:border-brand-gold"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Phone Number *</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-muted" />
                      <input
                        type="tel"
                        value={bookingData.phone}
                        onChange={(e) => updateBookingData('phone', e.target.value)}
                        className="w-full bg-brand-black border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white text-base min-h-[48px] focus:outline-none focus:border-brand-gold"
                        placeholder="e.g., 074 337 6552"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Email (optional)</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-muted" />
                      <input
                        type="email"
                        value={bookingData.email}
                        onChange={(e) => updateBookingData('email', e.target.value)}
                        className="w-full bg-brand-black border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white text-base min-h-[48px] focus:outline-none focus:border-brand-gold"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Device Model *</label>
                  <input
                    type="text"
                    value={bookingData.deviceModel}
                    onChange={(e) => updateBookingData('deviceModel', e.target.value)}
                    className="w-full bg-brand-black border border-white/10 rounded-lg px-4 py-3 text-white text-base min-h-[48px] focus:outline-none focus:border-brand-gold"
                    placeholder={bookingData.serviceType === 'repair' ? "e.g., iPhone 13 Pro" : "e.g., iPhone 14 Pro Max 128GB"}
                  />
                </div>

                {bookingData.serviceType === 'repair' && (
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Describe the Issue *</label>
                    <textarea
                      value={bookingData.issueDescription}
                      onChange={(e) => updateBookingData('issueDescription', e.target.value)}
                      rows={4}
                      className="w-full bg-brand-black border border-white/10 rounded-lg px-4 py-3 text-white text-base min-h-[120px] focus:outline-none focus:border-brand-gold resize-none"
                      placeholder="Describe the problem with your device..."
                    />
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-brand-charcoal rounded-2xl p-6 sm:p-8 border border-white/10"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Schedule & Confirm</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Preferred Date *</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-muted" />
                    <input
                      type="date"
                      value={bookingData.preferredDate}
                      onChange={(e) => updateBookingData('preferredDate', e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full bg-brand-black border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white text-base min-h-[48px] focus:outline-none focus:border-brand-gold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-3">Preferred Time *</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => updateBookingData('preferredTime', time)}
                        className={`p-3 rounded-lg border text-sm font-medium transition-all min-h-[48px] touch-manipulation ${
                          bookingData.preferredTime === time
                            ? 'border-brand-gold bg-brand-gold/10 text-brand-gold'
                            : 'border-white/10 text-white hover:border-white/20'
                        }`}
                      >
                        <Clock className="w-4 h-4 inline mr-1" />
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Terms Box */}
                <div className="bg-brand-black rounded-xl p-4 border border-white/10">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <AlertCircle className="w-5 h-5 text-brand-gold" />
                    </div>
                    <div className="text-sm text-brand-muted">
                      <p className="mb-2"><strong className="text-white">Terms & Conditions:</strong></p>
                      <ul className="space-y-1 list-disc list-inside">
                        <li>All devices are tested and cleaned before sale</li>
                        <li>3-month warranty excludes physical and water damage</li>
                        <li>Courier transit risk is on the customer</li>
                        <li>Repair quotes are subject to change after hardware evaluation</li>
                        <li>Please bring ID for in-store purchases</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={bookingData.termsAccepted}
                    onChange={(e) => updateBookingData('termsAccepted', e.target.checked)}
                    className="w-5 h-5 mt-0.5 rounded border-white/10 bg-brand-black text-brand-gold focus:ring-brand-gold min-h-[24px] min-w-[24px] touch-manipulation"
                  />
                  <span className="text-sm text-brand-muted">
                    I have read and accept the terms and conditions *
                  </span>
                </label>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-brand-charcoal rounded-2xl p-6 sm:p-8 border border-white/10 text-center"
            >
              <div className="w-16 h-16 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-brand-gold" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Booking Confirmed!</h2>
              <p className="text-brand-muted mb-6">Your appointment has been scheduled successfully.</p>
              
              <div className="bg-brand-black rounded-xl p-4 border border-white/10 mb-6">
                <p className="text-sm text-brand-muted mb-1">Reference Number</p>
                <p className="text-2xl font-bold text-brand-gold font-mono">{bookingRef}</p>
              </div>

              <div className="text-left bg-brand-black rounded-xl p-4 border border-white/10 mb-6 space-y-2">
                <p className="text-sm"><span className="text-brand-muted">Service:</span> <span className="text-white">{bookingData.serviceType === 'viewing' ? 'In-Store Device Viewing' : 'Device Repair'}</span></p>
                <p className="text-sm"><span className="text-brand-muted">Date:</span> <span className="text-white">{bookingData.preferredDate}</span></p>
                <p className="text-sm"><span className="text-brand-muted">Time:</span> <span className="text-white">{bookingData.preferredTime}</span></p>
                <p className="text-sm"><span className="text-brand-muted">Device:</span> <span className="text-white">{bookingData.deviceModel}</span></p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={resetBooking}
                  className="flex-1 bg-brand-gold text-brand-black hover:bg-brand-goldLight font-bold min-h-[48px]"
                >
                  Book Another Service
                </Button>
                <Button
                  onClick={() => window.location.href = '/'}
                  variant="outline"
                  className="flex-1 border-white/10 text-white hover:bg-white/5 min-h-[48px]"
                >
                  Return Home
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Buttons */}
        {step < 4 && (
          <div className="flex justify-between mt-6">
            <Button
              variant="outline"
              onClick={() => setStep(step - 1)}
              disabled={step === 1}
              className="border-white/10 text-white hover:bg-white/5 min-h-[48px] disabled:opacity-30"
            >
              <ChevronLeft className="w-4 h-4 mr-2" /> Back
            </Button>
            
            {step < 3 ? (
              <Button
                onClick={() => setStep(step + 1)}
                disabled={!canProceed()}
                className="bg-brand-gold text-brand-black hover:bg-brand-goldLight font-bold min-h-[48px] disabled:opacity-50"
              >
                Continue <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={!canProceed() || isSubmitting}
                className="bg-brand-gold text-brand-black hover:bg-brand-goldLight font-bold min-h-[48px] disabled:opacity-50"
              >
                {isSubmitting ? 'Confirming...' : 'Confirm Booking'}
              </Button>
            )}
          </div>
        )}
      </div>

      {/* Contact Info */}
      <section className="max-w-3xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="p-4 bg-brand-charcoal rounded-xl border border-white/10">
            <MapPin className="w-5 h-5 text-brand-gold mx-auto mb-2" />
            <p className="text-sm text-brand-muted">8 Coronation Road, Scottsville, PMB 3201</p>
          </div>
          <div className="p-4 bg-brand-charcoal rounded-xl border border-white/10">
            <Phone className="w-5 h-5 text-brand-gold mx-auto mb-2" />
            <p className="text-sm text-brand-muted">074 337 6552</p>
          </div>
          <div className="p-4 bg-brand-charcoal rounded-xl border border-white/10">
            <Package className="w-5 h-5 text-brand-gold mx-auto mb-2" />
            <p className="text-sm text-brand-muted">In-store by appointment only</p>
          </div>
        </div>
      </section>
    </div>
  );
}
