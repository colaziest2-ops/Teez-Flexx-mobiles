import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Wrench, ShoppingBag, TrendingUp, Shield, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HomePage = () => {
  const navigate = useNavigate();

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
    <div className="min-h-screen">
      <section className="hero-gradient py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6" data-testid="home-hero-title">
            Teez-Flexx Mobiles
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 mb-4 font-medium">
            Repair • Buy • Sell • Custom Covers
          </p>
          <p className="text-base text-slate-500 max-w-2xl mx-auto">
            South Africa's trusted iPhone specialist. Professional repairs, quality devices, and fair trade-in prices.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="service-card bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl cursor-pointer"
                onClick={() => navigate(service.path)}
                data-testid={`service-card-${service.id}`}
              >
                <div className="relative h-48 rounded-2xl overflow-hidden mb-6">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute top-4 left-4 ${service.color} p-3 rounded-xl`}>
                    <Icon className={`h-6 w-6 ${service.iconColor}`} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.description}</p>
                <Button
                  className="w-full rounded-full bg-slate-900 hover:bg-slate-800 text-white"
                  data-testid={`service-button-${service.id}`}
                >
                  Get Started
                </Button>
              </div>
            );
          })}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-emerald-600 rounded-3xl p-12 text-white text-center">
          <div className="flex flex-wrap justify-center gap-12">
            {trustSignals.map((signal, index) => {
              const Icon = signal.icon;
              return (
                <div key={index} className="flex items-center space-x-3" data-testid={`trust-signal-${index}`}>
                  <Icon className="h-6 w-6" />
                  <span className="font-semibold text-lg">{signal.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Custom Phone Covers</h2>
          <p className="text-slate-600">Protect your iPhone in style with our premium covers</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {featuredCovers.map((cover, index) => (
            <div
              key={index}
              className="product-card bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg cursor-pointer"
              onClick={() => navigate('/covers')}
              data-testid={`featured-cover-${index}`}
            >
              <div className="aspect-square">
                <img
                  src={cover.image}
                  alt={cover.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <p className="font-semibold text-slate-900">{cover.title}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button
            onClick={() => navigate('/covers')}
            className="rounded-full bg-slate-900 hover:bg-slate-800 text-white px-8 py-6 text-lg"
            data-testid="view-all-covers-btn"
          >
            View All Covers
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;