import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, User, LogOut, Shield } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const { cartCount } = useCart();
  const location = useLocation();
  const pathname = location.pathname;
  
  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };

  return (
    <header className="sticky top-0 z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3" data-testid="header-logo-link">
            <img
              src="/Teez_Flexx-Mobiles.jpeg"
              alt="Teez-Flexx Mobiles"
              width={48}
              height={48}
              className="rounded-xl object-cover w-12 h-12"
            />
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">Teez-Flexx</h1>
              <p className="text-xs text-brand-muted">iPhone Specialists</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/shop" className="text-brand-muted hover:text-brand-gold font-medium transition-colors min-h-[48px] flex items-center touch-manipulation" data-testid="header-shop-link">
              Shop
            </Link>
            <Link to="/covers" className="text-brand-muted hover:text-brand-gold font-medium transition-colors min-h-[48px] flex items-center touch-manipulation" data-testid="header-covers-link">
              Covers
            </Link>
            <Link to="/repairs" className="text-brand-muted hover:text-brand-gold font-medium transition-colors min-h-[48px] flex items-center touch-manipulation" data-testid="header-repairs-link">
              Repairs
            </Link>
            <Link to="/book" className="text-brand-muted hover:text-brand-gold font-medium transition-colors min-h-[48px] flex items-center touch-manipulation" data-testid="header-book-link">
              Book
            </Link>
            <Link to="/about" className="text-brand-muted hover:text-brand-gold font-medium transition-colors min-h-[48px] flex items-center touch-manipulation" data-testid="header-about-link">
              About
            </Link>
            <Link to="/contact" className="text-brand-muted hover:text-brand-gold font-medium transition-colors min-h-[48px] flex items-center touch-manipulation" data-testid="header-contact-link">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative min-h-[48px] min-w-[48px] flex items-center justify-center touch-manipulation" data-testid="header-cart-link">
              <Button variant="ghost" size="icon" className="relative min-h-[48px] min-w-[48px]">
                <ShoppingCart className="h-5 w-5 text-white" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-brand-gold text-brand-black text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold" data-testid="header-cart-count">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>

            {user ? (
              <div className="flex items-center space-x-3">
                {user.is_admin && (
                  <Link to="/admin" data-testid="header-admin-link">
                    <Button variant="outline" size="sm" className="rounded-full border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black">
                      <Shield className="h-4 w-4 mr-2" />
                      Admin
                    </Button>
                  </Link>
                )}
                <Button variant="ghost" size="icon" onClick={handleLogout} className="min-h-[48px] min-w-[48px] text-white" data-testid="header-logout-btn">
                  <LogOut className="h-5 w-5" />
                </Button>
              </div>
            ) : (
              <Link to="/login" data-testid="header-login-link">
                <Button variant="outline" size="sm" className="rounded-full border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black">
                  <User className="h-4 w-4 mr-2" />
                  Login
                </Button>
              </Link>
            )}

            <button
              className="md:hidden min-h-[48px] min-w-[48px] flex items-center justify-center text-white touch-manipulation"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="header-mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col space-y-1" data-testid="header-mobile-menu">
            <Link to="/shop" className="text-brand-muted hover:text-brand-gold font-medium min-h-[48px] flex items-center touch-manipulation" onClick={() => setMobileMenuOpen(false)}>
              Shop
            </Link>
            <Link to="/covers" className="text-brand-muted hover:text-brand-gold font-medium min-h-[48px] flex items-center touch-manipulation" onClick={() => setMobileMenuOpen(false)}>
              Covers
            </Link>
            <Link to="/repairs" className="text-brand-muted hover:text-brand-gold font-medium min-h-[48px] flex items-center touch-manipulation" onClick={() => setMobileMenuOpen(false)}>
              Repairs
            </Link>
            <Link to="/book" className="text-brand-muted hover:text-brand-gold font-medium min-h-[48px] flex items-center touch-manipulation" onClick={() => setMobileMenuOpen(false)}>
              Book
            </Link>
            <Link to="/about" className="text-brand-muted hover:text-brand-gold font-medium min-h-[48px] flex items-center touch-manipulation" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
            <Link to="/contact" className="text-brand-muted hover:text-brand-gold font-medium min-h-[48px] flex items-center touch-manipulation" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
