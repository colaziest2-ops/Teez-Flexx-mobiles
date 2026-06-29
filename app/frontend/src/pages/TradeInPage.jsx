import React, { useState } from 'react';
import { Check, MapPin, Clock, Shield, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

const OWNER_EMAIL = 'teezflexxmobiles@gmail.com';

const TradeInPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    phone_model: '',
    storage: '',
    condition: '',
    preferred_date: '',
    preferred_time: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const models = [
    'iPhone 11', 'iPhone 11 Pro', 'iPhone 11 Pro Max',
    'iPhone 12', 'iPhone 12 mini', 'iPhone 12 Pro', 'iPhone 12 Pro Max',
    'iPhone 13', 'iPhone 13 mini', 'iPhone 13 Pro', 'iPhone 13 Pro Max',
    'iPhone 14', 'iPhone 14 Plus', 'iPhone 14 Pro', 'iPhone 14 Pro Max',
    'iPhone 15', 'iPhone 15 Plus', 'iPhone 15 Pro', 'iPhone 15 Pro Max',
    'iPhone 16', 'iPhone 16 Plus', 'iPhone 16 Pro', 'iPhone 16 Pro Max',
    'iPhone 17', 'iPhone 17 Pro', 'iPhone 17 Pro Max'
  ];

  const storages = ['64GB', '128GB', '256GB', '512GB', '1TB'];
  const conditions = ['Excellent — No visible scratches, fully functional', 'Good — Minor scratches, fully functional', 'Fair — Visible wear and tear, fully functional'];
  const timeSlots = ['09:00 – 10:00', '10:00 – 11:00', '11:00 – 12:00', '13:00 – 14:00', '14:00 – 15:00', '15:00 – 16:00', '16:00 – 17:00'];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const subject = encodeURIComponent(`In-Person iPhone Offer Request — ${formData.phone_model}`);
    const body = encodeURIComponent(
`Hi Teez-Flexx Mobiles,

I would like to schedule an in-person offer for my iPhone.

Details:
• Name: ${formData.name}
• Email: ${formData.email}
• Phone: ${formData.phone}
• iPhone Model: ${formData.phone_model}
• Storage: ${formData.storage}
• Condition: ${formData.condition}
• Preferred Date: ${formData.preferred_date}
• Preferred Time: ${formData.preferred_time}
${formData.notes ? `• Additional Notes: ${formData.notes}` : ''}

Please confirm the appointment at your earliest convenience.

Thank you!`
    );

    window.location.href = `mailto:${OWNER_EMAIL}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center py-12 px-6">
        <div className="max-w-md text-center" data-testid="trade-in-success-message">
          <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Request Sent!</h2>
          <div className="bg-white border border-slate-200 rounded-3xl p-8 mb-6">
            <p className="text-slate-600">
              Your email has been prepared. If it didn't open automatically, you can email us directly at{' '}
              <a href={`mailto:${OWNER_EMAIL}`} className="text-emerald-600 font-semibold">{OWNER_EMAIL}</a>.
            </p>
          </div>
          <p className="text-slate-600 mb-8">
            We'll confirm your appointment time and give you a fair in-person offer when you bring your device in.
          </p>
          <Button
            onClick={() => { setSubmitted(false); setFormData({ name:'',email:'',phone:'',phone_model:'',storage:'',condition:'',preferred_date:'',preferred_time:'',notes:'' }); }}
            className="rounded-full"
            data-testid="trade-in-submit-another-btn"
          >
            Schedule Another Appointment
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-3xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4" data-testid="trade-in-page-title">
            Get an In-Person Offer
          </h1>
          <p className="text-slate-600 max-w-xl mx-auto">
            We assess your iPhone in person and give you a fair, honest offer on the spot. No online estimates — just a real valuation when you visit us.
          </p>
        </div>

        {/* How it works */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 text-center">
            <div className="bg-emerald-100 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="h-6 w-6 text-emerald-600" />
            </div>
            <p className="font-semibold text-slate-900 text-sm">Schedule a Visit</p>
            <p className="text-slate-500 text-xs mt-1">Choose a date and time that suits you</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-5 text-center">
            <div className="bg-emerald-100 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
              <MapPin className="h-6 w-6 text-emerald-600" />
            </div>
            <p className="font-semibold text-slate-900 text-sm">Bring Your iPhone</p>
            <p className="text-slate-500 text-xs mt-1">Visit us at 8 Coronation Road, Scottsville</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-5 text-center">
            <div className="bg-emerald-100 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Shield className="h-6 w-6 text-emerald-600" />
            </div>
            <p className="font-semibold text-slate-900 text-sm">Get a Fair Offer</p>
            <p className="text-slate-500 text-xs mt-1">We inspect and give you an honest offer on the day</p>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Schedule Your Appointment</h2>
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="text-slate-700 font-semibold">Full Name *</Label>
                <Input
                  id="name" name="name" required
                  value={formData.name} onChange={handleChange}
                  className="mt-2 bg-slate-50 border-slate-200 rounded-xl"
                  placeholder="John Doe"
                  data-testid="trade-in-name-input"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-slate-700 font-semibold">Email Address *</Label>
                <Input
                  id="email" name="email" type="email" required
                  value={formData.email} onChange={handleChange}
                  className="mt-2 bg-slate-50 border-slate-200 rounded-xl"
                  placeholder="you@example.com"
                  data-testid="trade-in-email-input"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <Label htmlFor="phone" className="text-slate-700 font-semibold">Contact Number *</Label>
              <Input
                id="phone" name="phone" required
                value={formData.phone} onChange={handleChange}
                className="mt-2 bg-slate-50 border-slate-200 rounded-xl"
                placeholder="+27 123 456 789"
                data-testid="trade-in-phone-input"
              />
            </div>

            {/* Model */}
            <div>
              <Label className="text-slate-700 font-semibold mb-2 block">iPhone Model *</Label>
              <Select value={formData.phone_model} onValueChange={(v) => handleSelectChange('phone_model', v)} required>
                <SelectTrigger className="bg-slate-50 border-slate-200 rounded-xl" data-testid="trade-in-model-select">
                  <SelectValue placeholder="Select your iPhone model" />
                </SelectTrigger>
                <SelectContent>
                  {models.map(model => (
                    <SelectItem key={model} value={model}>{model}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Storage + Condition */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label className="text-slate-700 font-semibold mb-2 block">Storage *</Label>
                <Select value={formData.storage} onValueChange={(v) => handleSelectChange('storage', v)} required>
                  <SelectTrigger className="bg-slate-50 border-slate-200 rounded-xl" data-testid="trade-in-storage-select">
                    <SelectValue placeholder="Select storage" />
                  </SelectTrigger>
                  <SelectContent>
                    {storages.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-slate-700 font-semibold mb-2 block">Condition *</Label>
                <Select value={formData.condition} onValueChange={(v) => handleSelectChange('condition', v)} required>
                  <SelectTrigger className="bg-slate-50 border-slate-200 rounded-xl" data-testid="trade-in-condition-select">
                    <SelectValue placeholder="Select condition" />
                  </SelectTrigger>
                  <SelectContent>
                    {conditions.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Preferred Date + Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="preferred_date" className="text-slate-700 font-semibold">Preferred Date *</Label>
                <Input
                  id="preferred_date" name="preferred_date" type="date" required
                  value={formData.preferred_date} onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="mt-2 bg-slate-50 border-slate-200 rounded-xl"
                />
              </div>
              <div>
                <Label className="text-slate-700 font-semibold mb-2 block">Preferred Time *</Label>
                <Select value={formData.preferred_time} onValueChange={(v) => handleSelectChange('preferred_time', v)} required>
                  <SelectTrigger className="bg-slate-50 border-slate-200 rounded-xl">
                    <SelectValue placeholder="Select a time slot" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Additional Notes */}
            <div>
              <Label htmlFor="notes" className="text-slate-700 font-semibold">Additional Notes (optional)</Label>
              <textarea
                id="notes" name="notes"
                value={formData.notes} onChange={handleChange}
                rows={3}
                className="mt-2 w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Any extra info about your iPhone, accessories included, etc."
              />
            </div>

            {/* Info box */}
            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5 flex gap-3">
              <Clock className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-emerald-800">
                After submitting, your email app will open with all your details pre-filled. Simply send it and we'll confirm your appointment within 24 hours.
              </p>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-emerald-600 hover:bg-emerald-700 text-white py-6 text-lg font-semibold"
              data-testid="trade-in-submit-btn"
            >
              {loading ? 'Preparing email...' : 'Schedule Appointment via Email'}
            </Button>
          </form>
        </div>

        {/* Location reminder */}
        <div className="mt-6 bg-white border border-slate-200 rounded-2xl p-5 flex gap-3">
          <MapPin className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-slate-900 text-sm">Visit us at</p>
            <p className="text-slate-500 text-sm">8 Coronation Road, Scottsville, Pietermaritzburg, 3201</p>
            <p className="text-slate-500 text-sm">Mon – Sat: 09:00 – 17:00</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TradeInPage;