import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Smartphone, Battery, Droplet, Wrench, Zap, Speaker } from 'lucide-react';
import { Button } from '@/components/ui/button';

const RepairsPage = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Smartphone,
      title: 'Screen Replacement',
      description: 'Cracked or damaged screen? We use high-quality parts for excellent display performance.',
      price: 'From R1,200',
      duration: 'Same day'
    },
    {
      icon: Battery,
      title: 'Battery Replacement',
      description: 'Poor battery life? Replace your battery with a high-quality replacement battery (OEM standard).',
      price: 'From R800',
      duration: '1-2 hours'
    },
    {
      icon: Droplet,
      title: 'Water Damage Repair',
      description: 'Phone got wet? Our specialists can recover and repair water-damaged devices.',
      price: 'From R1,500',
      duration: '2-3 days'
    },
    {
      icon: Wrench,
      title: 'Charging Port Repair',
      description: 'Charging issues? We fix or replace faulty charging ports.',
      price: 'From R600',
      duration: 'Same day'
    },
    {
      icon: Zap,
      title: 'Power Button Repair',
      description: 'Stuck or broken power button? Quick and affordable repair service.',
      price: 'From R500',
      duration: 'Same day'
    },
    {
      icon: Speaker,
      title: 'Speaker & Microphone',
      description: 'Audio issues? We repair or replace speakers and microphones.',
      price: 'From R700',
      duration: '1-2 days'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4" data-testid="repairs-page-title">
            iPhone Repair Services
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Professional iPhone repairs using quality parts. Most repairs completed same-day with warranty included.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-lg transition-all"
                data-testid={`repair-service-${index}`}
              >
                <div className="bg-emerald-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="h-7 w-7 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3" data-testid={`repair-service-title-${index}`}>
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-4">{service.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                  <div>
                    <p className="text-sm text-slate-500">Starting from</p>
                    <p className="text-lg font-bold text-emerald-600" data-testid={`repair-service-price-${index}`}>
                      {service.price}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-500">Turnaround</p>
                    <p className="font-semibold text-slate-900">{service.duration}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center" data-testid="warranty-info">
            <div className="text-4xl font-bold text-emerald-600 mb-2">90 Days</div>
            <p className="text-slate-600">Warranty on all repairs</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center" data-testid="parts-info">
            <div className="text-4xl font-bold text-emerald-600 mb-2">100%</div>
            <p className="text-slate-600">High-quality parts used</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center" data-testid="service-info">
            <div className="text-4xl font-bold text-emerald-600 mb-2">Hundreds</div>
            <p className="text-slate-600">of repairs completed</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Repair?</h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            Book a diagnostic to get an accurate quote and repair timeline. Our technicians are ready to help!
          </p>
          <Button
            onClick={() => navigate('/diagnostic')}
            className="rounded-full bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg font-semibold"
            data-testid="book-diagnostic-btn"
          >
            Book a Diagnostic
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RepairsPage;