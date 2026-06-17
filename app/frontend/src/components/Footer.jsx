import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-charcoal border-t border-white/10 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-brand-gold text-brand-black w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg">
                TF
              </div>
              <div>
                <h3 className="text-lg font-bold">Teez-Flexx</h3>
                <p className="text-xs text-brand-muted">iPhone Specialists</p>
              </div>
            </div>
            <p className="text-brand-muted text-sm">
              South Africa&apos;s trusted iPhone specialist for repairs, sales, trade-ins, and custom covers.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-brand-muted text-sm">
              <li><Link to="/shop" className="hover:text-brand-gold transition-colors">Shop Pre-Owned iPhones</Link></li>
              <li><Link to="/book" className="hover:text-brand-gold transition-colors">Book Appointment</Link></li>
              <li><Link to="/covers" className="hover:text-brand-gold transition-colors">Phone Covers</Link></li>
              <li><Link to="/repairs" className="hover:text-brand-gold transition-colors">Repair Services</Link></li>
              <li><Link to="/trade-in" className="hover:text-brand-gold transition-colors">Sell Your iPhone</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-brand-muted text-sm">
              <li><Link to="/about" className="hover:text-brand-gold transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-brand-gold transition-colors">Contact</Link></li>
              <li><Link to="/shipping" className="hover:text-brand-gold transition-colors">Delivery Info</Link></li>
              <li><Link to="/privacy" className="hover:text-brand-gold transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-brand-gold transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-3 text-brand-muted text-sm">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-brand-gold" />
                <span>074 337 6552</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 text-brand-gold" />
                <span>8 Coronation Road<br />Scottsville, Pietermaritzburg<br />3201, South Africa</span>
              </li>
              <li className="flex items-center space-x-2">
                <MessageCircle className="h-4 w-4 text-brand-gold" />
                <span>WhatsApp: 074 337 6552</span>
              </li>
            </ul>
            <div className="flex space-x-3 mt-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-brand-black border border-white/10 p-2 rounded-lg hover:border-brand-gold/30 hover:text-brand-gold transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center"
                aria-label="Teez-Flexx Mobiles Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com/tf_mobiles" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-brand-black border border-white/10 p-2 rounded-lg hover:border-brand-gold/30 hover:text-brand-gold transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center"
                aria-label="@tf_mobiles on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://wa.me/27743376552" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-brand-black border border-white/10 p-2 rounded-lg hover:border-brand-gold/30 hover:text-brand-gold transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center"
                aria-label="Chat with Teez-Flexx Mobiles on WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-brand-muted text-sm">
          <p>&copy; {new Date().getFullYear()} Teez-Flexx Mobiles. All rights reserved.</p>
          <p className="mt-2 text-xs">Included: Charger • Screen Protector & Case • 3-Month Warranty</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;