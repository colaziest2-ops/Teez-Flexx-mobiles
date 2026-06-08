import React, { useState } from 'react';
import axios from 'axios';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const DiagnosticPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    phone_model: '',
    issue_description: '',
    preferred_date: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(`${API}/diagnostic`, formData);
      setSubmitted(true);
      toast.success('Diagnostic request submitted successfully!');
    } catch (error) {
      toast.error('Failed to submit request. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center py-12 px-6">
        <div className="max-w-md text-center" data-testid="diagnostic-success-message">
          <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Request Submitted!</h2>
          <p className="text-slate-600 mb-8">
            We've received your diagnostic request. Our team will contact you shortly to schedule an appointment.
          </p>
          <Button onClick={() => setSubmitted(false)} className="rounded-full" data-testid="diagnostic-submit-another-btn">
            Submit Another Request
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4" data-testid="diagnostic-page-title">
            Get a Diagnostic
          </h1>
          <p className="text-slate-600">
            Tell us about your iPhone issue and we'll get back to you with a quote and appointment
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
                  data-testid="diagnostic-name-input"
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
                  data-testid="diagnostic-email-input"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  data-testid="diagnostic-phone-input"
                />
              </div>
              <div>
                <Label htmlFor="phone_model" className="text-slate-700 font-semibold">iPhone Model *</Label>
                <Input
                  id="phone_model"
                  name="phone_model"
                  required
                  value={formData.phone_model}
                  onChange={handleChange}
                  className="mt-2 bg-slate-50 border-slate-200 rounded-xl"
                  placeholder="iPhone 14 Pro"
                  data-testid="diagnostic-model-input"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="issue_description" className="text-slate-700 font-semibold">Describe the Issue *</Label>
              <Textarea
                id="issue_description"
                name="issue_description"
                required
                value={formData.issue_description}
                onChange={handleChange}
                rows={5}
                className="mt-2 bg-slate-50 border-slate-200 rounded-xl"
                placeholder="Please describe what's wrong with your phone (e.g., cracked screen, battery issues, won't turn on, etc.)"
                data-testid="diagnostic-issue-input"
              />
            </div>

            <div>
              <Label htmlFor="preferred_date" className="text-slate-700 font-semibold">Preferred Appointment Date (Optional)</Label>
              <Input
                id="preferred_date"
                name="preferred_date"
                type="date"
                value={formData.preferred_date}
                onChange={handleChange}
                className="mt-2 bg-slate-50 border-slate-200 rounded-xl"
                data-testid="diagnostic-date-input"
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-slate-900 hover:bg-slate-800 text-white py-6 text-lg font-semibold"
              data-testid="diagnostic-submit-btn"
            >
              {loading ? 'Submitting...' : 'Submit Diagnostic Request'}
            </Button>
          </form>

          <div className="mt-8 p-6 bg-slate-50 rounded-2xl">
            <h3 className="font-bold text-lg mb-3">What Happens Next?</h3>
            <ol className="space-y-2 text-slate-600">
              <li>1. We'll review your diagnostic request</li>
              <li>2. Our technician will contact you within 24 hours</li>
              <li>3. We'll provide a quote and schedule your repair</li>
              <li>4. Most repairs completed same-day or next-day</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiagnosticPage;