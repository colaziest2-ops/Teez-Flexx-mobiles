import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ShoppingBag, Calendar, ShoppingCart, MessageCircle } from 'lucide-react';

const tabs = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/shop', label: 'Shop', icon: ShoppingBag },
  { path: '/book', label: 'Book', icon: Calendar },
  { path: '/cart', label: 'Cart', icon: ShoppingCart },
];

export default function MobileTabBar() {
  const location = useLocation();
  const pathname = location.pathname;
  const [cartCount, setCartCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show on mobile
    const checkMobile = () => {
      setIsVisible(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Get cart count from localStorage
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem('teez_cart') || '[]');
      setCartCount(cart.reduce((sum: number, item: any) => sum + (item.quantity || 1), 0));
    };
    updateCartCount();

    // Listen for cart updates
    window.addEventListener('storage', updateCartCount);
    const interval = setInterval(updateCartCount, 1000);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('storage', updateCartCount);
      clearInterval(interval);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <nav 
      className="fixed bottom-0 left-0 right-0 z-40 bg-brand-charcoal border-t border-white/10 md:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="flex items-center justify-around px-2 py-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = pathname === tab.path || pathname.startsWith(`${tab.path}/`);
          
          return (
            <Link
              key={tab.path}
              to={tab.path}
              className="relative flex flex-col items-center py-2 px-3 min-w-[60px]"
            >
              <div className="relative">
                <Icon 
                  className={`w-6 h-6 transition-colors ${
                    isActive ? 'text-brand-gold' : 'text-brand-muted'
                  }`} 
                />
                {tab.path === '/cart' && cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-brand-gold text-brand-black text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount > 9 ? '9+' : cartCount}
                  </span>
                )}
              </div>
              <span 
                className={`text-xs mt-1 transition-colors ${
                  isActive ? 'text-brand-gold font-medium' : 'text-brand-muted'
                }`}
              >
                {tab.label}
              </span>
              {isActive && (
                <motion.div
                  layoutId="tab-indicator"
                  className="absolute -bottom-2 w-12 h-1 bg-brand-gold rounded-full"
                />
              )}
            </Link>
          );
        })}
        
        {/* WhatsApp Quick Action */}
        <a
          href="https://wa.me/27743376552"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center py-2 px-3 min-w-[60px]"
        >
          <MessageCircle className="w-6 h-6 text-green-500" />
          <span className="text-xs mt-1 text-green-500 font-medium">Chat</span>
        </a>
      </div>
    </nav>
  );
}
