'use client';

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Menu, X, User, LogOut, Shield } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const { cartCount } = useCart();
const navigate = useNavigate();
  
  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="sticky top-0 z-50 glass border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2" data-testid="header-logo-link">
            <div className="bg-slate-900 text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg">
              TF
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900 tracking-tight">Teez-Flexx</h1>
              <p className="text-xs text-slate-500">iPhone Specialists</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/shop" className="text-slate-600 hover:text-slate-900 font-medium transition-colors" data-testid="header-shop-link">
              Shop
            </Link>
            <Link to="/covers" className="text-slate-600 hover:text-slate-900 font-medium transition-colors" data-testid="header-covers-link">
              Covers
            </Link>
            <Link to="/repairs" className="text-slate-600 hover:text-slate-900 font-medium transition-colors" data-testid="header-repairs-link">
              Repairs
            </Link>
            <Link to="/about" className="text-slate-600 hover:text-slate-900 font-medium transition-colors" data-testid="header-about-link">
              About
            </Link>
            <Link to="/contact" className="text-slate-600 hover:text-slate-900 font-medium transition-colors" data-testid="header-contact-link">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative" data-testid="header-cart-link">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold" data-testid="header-cart-count">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>

            {user ? (
              <div className="flex items-center space-x-3">
                {user.is_admin && (
                  <Link to="/admin" data-testid="header-admin-link">
                    <Button variant="outline" size="sm" className="rounded-full">
                      <Shield className="h-4 w-4 mr-2" />
                      Admin
                    </Button>
                  </Link>
                )}
                <Button variant="ghost" size="icon" onClick={handleLogout} data-testid="header-logout-btn">
                  <LogOut className="h-5 w-5" />
                </Button>
              </div>
            ) : (
              <Link to="/login" data-testid="header-login-link">
                <Button variant="outline" size="sm" className="rounded-full">
                  <User className="h-4 w-4 mr-2" />
                  Login
                </Button>
              </Link>
            )}

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="header-mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col space-y-3" data-testid="header-mobile-menu">
            <Link to="/shop" className="text-slate-600 hover:text-slate-900 font-medium" onClick={() => setMobileMenuOpen(false)}>
              Shop
            </Link>
            <Link to="/covers" className="text-slate-600 hover:text-slate-900 font-medium" onClick={() => setMobileMenuOpen(false)}>
              Covers
            </Link>
            <Link to="/repairs" className="text-slate-600 hover:text-slate-900 font-medium" onClick={() => setMobileMenuOpen(false)}>
              Repairs
            </Link>
            <Link to="/about" className="text-slate-600 hover:text-slate-900 font-medium" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
            <Link to="/contact" className="text-slate-600 hover:text-slate-900 font-medium" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
