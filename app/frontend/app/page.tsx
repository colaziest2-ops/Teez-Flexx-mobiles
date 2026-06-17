'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Wrench, ShoppingBag, TrendingUp, Shield, Clock, Award, MapPin, Phone, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  const services = [
    {
      id: 'diagnostic',
      title: 'Get a Diagnostic',
      description: 'Expert phone diagnostics and repair services with same-day turnaround',
      icon: Wrench,
      color: 'bg-gradient-to-br from-blue-50 to-blue-100',
      iconColor: 'text-blue-600',
      path: '/diagnostic',
      image: 'https://images.unsplash.com/photo-1550041473-d296a3a8a18a?w=800'
    },
    {
      id: 'buy',
      title: 'Buy an iPhone',
      description: 'Browse our collection of new and refurbished iPhones at great prices',
      icon: ShoppingBag,
      color: 'bg-gradient-to-br from-emerald-50 to-emerald-100',
      iconColor: 'text-emerald-600',
      path: '/shop',
      image: 'https://images.unsplash.com/photo-1605636808063-ba999ff935eb?w=800'
    },
    {
      id: 'sell',
      title: 'Sell Your iPhone',
      description: 'Get an instant quote and the best trade-in value for your old iPhone',
      icon: TrendingUp,
      color: 'bg-gradient-to-br from-purple-50 to-purple-100',
      iconColor: 'text-purple-600',
      path: '/trade-in',
      image: 'https://images.pexels.com/photos/8473866/pexels-photo-8473866.jpeg?w=800'
    }
  ];

  const trustSignals = [
    { icon: Clock, text: 'Same-day diagnostics' },
    { icon: Shield, text: 'Warranty on all repairs' },
    { icon: Award, text: 'Best prices for trade-ins' }
  ];

  const featuredCovers = [
    {
      image: 'https://images.unsplash.com/photo-1535157412991-2ef801c1748b?w=800',
      title: 'Colorful Collection'
    },
    {
      image: 'https://images.unsplash.com/photo-1576107324820-c10884700b6b?w=800',
      title: 'Premium Cases'
    },
    {
      image: 'https://images.unsplash.com/photo-1623393835885-560a7c576aa2?w=800',
      title: 'Clear Protection'
    },
    {
      image: 'https://images.unsplash.com/photo-1623393884989-cb3663e431c5?w=800',
      title: 'Designer Styles'
    }
  ];

  return (
    <div className="min-h-screen bg-brand-black">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal to-brand-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-gold/10 via-transparent to-transparent" />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6" 
            data-testid="home-hero-title"
          >
            Teez-Flexx <span className="text-brand-gold">Mobiles</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl text-brand-muted mb-4 font-medium"
          >
            Repair • Buy • Sell • Custom Covers
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base text-brand-muted max-w-2xl mx-auto mb-8"
          >
            South Africa&apos;s trusted iPhone specialist. Quality pre-owned devices, professional repairs, and fair trade-in prices.
          </motion.p>
          
          {/* Trust Strip */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 text-sm"
          >
            <span className="flex items-center gap-2 text-brand-muted">
              <Shield className="w-4 h-4 text-brand-gold" />
              Nationwide Delivery
            </span>
            <span className="flex items-center gap-2 text-brand-muted">
              <Award className="w-4 h-4 text-brand-gold" />
              iPhone Specialists
            </span>
            <span className="flex items-center gap-2 text-brand-muted">
              <Clock className="w-4 h-4 text-brand-gold" />
              100% Tested
            </span>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-6 -mt-10 mb-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Link href={service.path}>
                  <div
                    className="group bg-brand-charcoal border border-white/10 rounded-3xl p-8 shadow-lg hover:shadow-xl hover:scale-[1.02] hover:border-brand-gold/30 transition-all duration-300 cursor-pointer h-full"
                    data-testid={`service-card-${service.id}`}
                  >
                    <div className="relative h-48 rounded-2xl overflow-hidden mb-6 bg-brand-black">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4 bg-brand-gold/20 backdrop-blur-sm p-3 rounded-xl">
                        <Icon className="h-6 w-6 text-brand-gold" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-brand-muted mb-6">{service.description}</p>
                    <Button
                      className="w-full rounded-full bg-brand-gold hover:bg-brand-goldLight text-brand-black font-bold min-h-[48px]"
                      data-testid={`service-button-${service.id}`}
                    >
                      Get Started <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Trust Signals Banner */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-brand-charcoal rounded-3xl p-12 border border-white/10">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {trustSignals.map((signal, index) => {
              const Icon = signal.icon;
              return (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center space-x-3 text-white" 
                  data-testid={`trust-signal-${index}`}
                >
                  <div className="w-10 h-10 bg-brand-gold/20 rounded-full flex items-center justify-center">
                    <Icon className="h-5 w-5 text-brand-gold" />
                  </div>
                  <span className="font-semibold text-lg">{signal.text}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Custom Covers Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Custom Phone Covers</h2>
          <p className="text-brand-muted">Protect your iPhone in style with our premium covers</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {featuredCovers.map((cover, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
            >
              <Link href="/covers">
                <div
                  className="group bg-brand-charcoal border border-white/10 rounded-2xl overflow-hidden hover:shadow-lg cursor-pointer hover:scale-105 hover:border-brand-gold/30 transition-all duration-300"
                  data-testid={`featured-cover-${index}`}
                >
                  <div className="aspect-square overflow-hidden bg-brand-black">
                    <img
                      src={cover.image}
                      alt={cover.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-white text-center">{cover.title}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-brand-charcoal rounded-3xl p-12 border border-white/10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">Why Choose Teez-Flexx?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-brand-gold/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-brand-gold text-2xl font-bold">✓</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Certified Experts</h3>
              <p className="text-brand-muted">Trained professionals with years of experience</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-brand-gold/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-brand-gold text-2xl font-bold">✓</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Quality Assured</h3>
              <p className="text-brand-muted">All devices tested and verified before sale</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-brand-gold/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-brand-gold text-2xl font-bold">✓</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Best Support</h3>
              <p className="text-brand-muted">24/7 customer support via WhatsApp</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-brand-gold/20 to-brand-gold/5 rounded-3xl p-8 md:p-12 border border-brand-gold/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready to upgrade your iPhone?</h2>
              <p className="text-brand-muted">Visit our store or book an appointment today</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book">
                <Button className="bg-brand-gold hover:bg-brand-goldLight text-brand-black font-bold min-h-[48px]">
                  Book Appointment
                </Button>
              </Link>
              <a 
                href="https://wa.me/27743376552" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="border-white/10 text-white hover:bg-white/5 min-h-[48px]">
                  <Phone className="w-4 h-4 mr-2" />
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 mt-8 pt-8 border-t border-white/10">
            <div className="flex items-center gap-2 text-brand-muted">
              <MapPin className="w-4 h-4 text-brand-gold" />
              8 Coronation Road, Scottsville, PMB 3201
            </div>
            <div className="flex items-center gap-2 text-brand-muted">
              <Phone className="w-4 h-4 text-brand-gold" />
              074 337 6552
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
