import React from 'react';
import { Award, Users, Clock, Shield } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: Award,
      title: 'Quality First',
      description: 'We use only genuine quality parts and ensure every repair meets the highest standards.'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Your satisfaction is our priority. We provide transparent pricing and excellent service.'
    },
    {
      icon: Clock,
      title: 'Fast Service',
      description: 'Most repairs completed same-day or next-day. We value your time.'
    },
    {
      icon: Shield,
      title: 'Warranty Included',
      description: 'Every repair comes with a 90-day warranty for your peace of mind.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4" data-testid="about-page-title">
            About Teez-Flexx Mobiles
          </h1>
          <p className="text-slate-600 max-w-3xl mx-auto text-lg">
            South Africa's trusted iPhone specialist. We've been serving customers across South Africa with professional repair services, quality devices, and fair trade-in prices since 2015.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800"
              alt="iPhone specialist"
              className="w-full h-96 object-cover rounded-3xl shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
            <p className="text-slate-600 mb-4">
              Founded in 2015, Teez-Flexx Mobiles started with a simple mission: to provide South Africans with reliable iPhone repair services and access to quality devices at fair prices.
            </p>
            <p className="text-slate-600 mb-4">
              Over the years, we've grown from a small repair shop to a full-service iPhone specialist, helping thousands of customers repair, buy, and sell their devices.
            </p>
            <p className="text-slate-600">
              Today, we're proud to be one of South Africa's most trusted names in the iPhone industry, known for our expertise, transparency, and commitment to customer satisfaction.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-slate-200 rounded-3xl p-8 text-center"
                  data-testid={`value-card-${index}`}
                >
                  <div className="bg-emerald-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-3xl p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div data-testid="stat-years">
              <div className="text-5xl font-bold mb-2">9+</div>
              <p className="text-emerald-100">Years in Business</p>
            </div>
            <div data-testid="stat-customers">
              <div className="text-5xl font-bold mb-2">15K+</div>
              <p className="text-emerald-100">Happy Customers</p>
            </div>
            <div data-testid="stat-repairs">
              <div className="text-5xl font-bold mb-2">20K+</div>
              <p className="text-emerald-100">Devices Serviced</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;