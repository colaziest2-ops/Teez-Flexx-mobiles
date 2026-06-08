import React from 'react';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactPage = () => {
  const handleWhatsApp = () => {
    const phoneNumber = '27123456789';
    const message = encodeURIComponent('Hi, I have a question about your services.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4" data-testid="contact-page-title">
            Get in Touch
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out through any of the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4" data-testid="contact-phone">
                  <div className="bg-emerald-100 p-3 rounded-xl">
                    <Phone className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">Phone</p>
                    <p className="text-slate-600">+27 123 456 789</p>
                    <p className="text-sm text-slate-500">Mon-Fri, 9AM-6PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4" data-testid="contact-email">
                  <div className="bg-emerald-100 p-3 rounded-xl">
                    <Mail className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">Email</p>
                    <p className="text-slate-600">info@teezflexx.co.za</p>
                    <p className="text-sm text-slate-500">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4" data-testid="contact-location">
                  <div className="bg-emerald-100 p-3 rounded-xl">
                    <MapPin className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">Location</p>
                    <p className="text-slate-600">123 Main Street</p>
                    <p className="text-slate-600">Cape Town, 8000</p>
                    <p className="text-slate-600">South Africa</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4" data-testid="contact-hours">
                  <div className="bg-emerald-100 p-3 rounded-xl">
                    <Clock className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">Business Hours</p>
                    <p className="text-slate-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-slate-600">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-slate-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-3xl p-8 text-white">
              <MessageCircle className="h-12 w-12 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Chat with us on WhatsApp</h3>
              <p className="text-emerald-100 mb-6">
                Get instant answers to your questions. Our team is ready to help!
              </p>
              <Button
                onClick={handleWhatsApp}
                className="rounded-full bg-white text-emerald-600 hover:bg-slate-50 w-full py-6 text-lg font-semibold"
                data-testid="contact-whatsapp-btn"
              >
                Start WhatsApp Chat
              </Button>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Visit Our Store</h2>
            <div className="aspect-video bg-slate-100 rounded-2xl mb-6 flex items-center justify-center">
              <MapPin className="h-16 w-16 text-slate-400" />
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Teez-Flexx Mobiles</h3>
                <p className="text-slate-600">123 Main Street, Cape Town, 8000</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">How to Find Us</h4>
                <ul className="space-y-2 text-slate-600">
                  <li>• Located in the heart of Cape Town CBD</li>
                  <li>• 5 minutes walk from Cape Town Station</li>
                  <li>• Parking available nearby</li>
                  <li>• Wheelchair accessible</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;