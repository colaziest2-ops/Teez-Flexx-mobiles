import React, { useState } from 'react';
import axios from 'axios';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const TradeInPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    phone_model: '',
    storage: '',
    condition: ''
  });
  const [quote, setQuote] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const models = [
    'iPhone 11', 'iPhone 11 Pro', 'iPhone 11 Pro Max',
    'iPhone 12', 'iPhone 12 mini', 'iPhone 12 Pro', 'iPhone 12 Pro Max',
    'iPhone 13', 'iPhone 13 mini', 'iPhone 13 Pro', 'iPhone 13 Pro Max',
    'iPhone 14', 'iPhone 14 Plus', 'iPhone 14 Pro', 'iPhone 14 Pro Max',
    'iPhone 15', 'iPhone 15 Plus', 'iPhone 15 Pro', 'iPhone 15 Pro Max',
    'iPhone 16', 'iPhone 16 Plus', 'iPhone 16 Pro', 'iPhone 16 Pro Max',
    'iPhone 17', 'iPhone 17 Air', 'iPhone 17 Pro', 'iPhone 17 Pro Max', 'iPhone 17e'
  ];

  const storages = ['64GB', '128GB', '256GB', '512GB', '1TB'];
  const conditions = ['Excellent', 'Good', 'Fair'];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(`${API}/trade-in`, formData);
      setQuote(response.data.quote_amount);
      setSubmitted(true);
      toast.success('Trade-in request submitted successfully!');
    } catch (error) {
      toast.error('Failed to submit request. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted && quote) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center py-12 px-6">
        <div className="max-w-md text-center" data-testid="trade-in-success-message">
          <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Your Quote is Ready!</h2>
          <div className="bg-white border border-slate-200 rounded-3xl p-8 mb-6">
            <p className="text-slate-600 mb-2">Your {formData.phone_model} is worth</p>
            <p className="text-5xl font-bold text-emerald-600" data-testid="trade-in-quote-amount">R{quote.toLocaleString()}</p>
          </div>
          <p className="text-slate-600 mb-8">
            We'll contact you shortly to arrange the trade-in. Keep your phone ready!
          </p>
          <Button onClick={() => { setSubmitted(false); setQuote(null); }} className="rounded-full" data-testid="trade-in-submit-another-btn">
            Get Another Quote
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4" data-testid="trade-in-page-title">
            Sell Your iPhone
          </h1>
          <p className="text-slate-600">
            Get an instant quote for your old iPhone. Best trade-in prices in South Africa!
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="text-slate-700 font-semibold">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 bg-slate-50 border-slate-200 rounded-xl"
                  placeholder="John Doe"
                  data-testid="trade-in-name-input"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-slate-700 font-semibold">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 bg-slate-50 border-slate-200 rounded-xl"
                  placeholder="you@example.com"
                  data-testid="trade-in-email-input"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="phone" className="text-slate-700 font-semibold">Phone Number *</Label>
              <Input
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="mt-2 bg-slate-50 border-slate-200 rounded-xl"
                placeholder="+27 123 456 789"
                data-testid="trade-in-phone-input"
              />
            </div>

            <div>
              <Label className="text-slate-700 font-semibold mb-2 block">iPhone Model *</Label>
              <Select value={formData.phone_model} onValueChange={(value) => handleSelectChange('phone_model', value)} required>
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label className="text-slate-700 font-semibold mb-2 block">Storage *</Label>
                <Select value={formData.storage} onValueChange={(value) => handleSelectChange('storage', value)} required>
                  <SelectTrigger className="bg-slate-50 border-slate-200 rounded-xl" data-testid="trade-in-storage-select">
                    <SelectValue placeholder="Select storage" />
                  </SelectTrigger>
                  <SelectContent>
                    {storages.map(storage => (
                      <SelectItem key={storage} value={storage}>{storage}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-slate-700 font-semibold mb-2 block">Condition *</Label>
                <Select value={formData.condition} onValueChange={(value) => handleSelectChange('condition', value)} required>
                  <SelectTrigger className="bg-slate-50 border-slate-200 rounded-xl" data-testid="trade-in-condition-select">
                    <SelectValue placeholder="Select condition" />
                  </SelectTrigger>
                  <SelectContent>
                    {conditions.map(condition => (
                      <SelectItem key={condition} value={condition}>{condition}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl">
              <h4 className="font-bold mb-3">Condition Guide:</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><strong>Excellent:</strong> No visible scratches, fully functional</li>
                <li><strong>Good:</strong> Minor scratches, fully functional</li>
                <li><strong>Fair:</strong> Visible wear and tear, fully functional</li>
              </ul>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-emerald-600 hover:bg-emerald-700 text-white py-6 text-lg font-semibold"
              data-testid="trade-in-submit-btn"
            >
              {loading ? 'Calculating...' : 'Get Instant Quote'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TradeInPage;