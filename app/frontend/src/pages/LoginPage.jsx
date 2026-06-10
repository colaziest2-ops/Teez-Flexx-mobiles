import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/context/AuthContext';
import { toast } from 'sonner';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: ''
  });
  const [loading, setLoading] = useState(false);
  const { login, register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        await login(formData.email, formData.password);
        toast.success('Welcome back!');
      } else {
        await register(formData.email, formData.name, formData.phone, formData.password);
        toast.success('Account created successfully!');
      }
      navigate('/shop');
    } catch (error) {
      const message = error.response?.data?.detail || 'An error occurred';
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center py-12 px-6">
      <div className="max-w-md w-full bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-2" data-testid="auth-page-title">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h2>
          <p className="text-slate-600">
            {isLogin ? 'Sign in to your account' : 'Join Teez-Flexx Mobiles'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLogin && (
            <>
              <div>
                <Label htmlFor="name" className="text-slate-700 font-semibold">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 bg-slate-50 border-slate-200 rounded-xl focus:ring-emerald-500"
                  placeholder="John Doe"
                  data-testid="auth-name-input"
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-slate-700 font-semibold">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-2 bg-slate-50 border-slate-200 rounded-xl focus:ring-emerald-500"
                  placeholder="+27 123 456 789"
                  data-testid="auth-phone-input"
                />
              </div>
            </>
          )}
          
          <div>
            <Label htmlFor="email" className="text-slate-700 font-semibold">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-2 bg-slate-50 border-slate-200 rounded-xl focus:ring-emerald-500"
              placeholder="you@example.com"
              data-testid="auth-email-input"
            />
          </div>

          <div>
            <Label htmlFor="password" className="text-slate-700 font-semibold">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="mt-2 bg-slate-50 border-slate-200 rounded-xl focus:ring-emerald-500"
              placeholder="••••••••"
              data-testid="auth-password-input"
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-slate-900 hover:bg-slate-800 text-white py-6 text-lg font-semibold"
            data-testid="auth-submit-btn"
          >
            {loading ? 'Please wait...' : (isLogin ? 'Sign In' : 'Create Account')}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-slate-600">
            {isLogin ? "Don't have an account? " : 'Already have an account? '}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-emerald-600 font-semibold hover:text-emerald-700"
              data-testid="auth-toggle-btn"
            >
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;