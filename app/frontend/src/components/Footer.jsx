import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-white text-slate-900 w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg">
                TF
              </div>
              <div>
                <h3 className="text-lg font-bold">Teez-Flexx</h3>
                <p className="text-xs text-slate-400">iPhone Specialists</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm">
              South Africa's trusted iPhone specialist for repairs, sales, and trade-ins.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><Link to="/shop" className="hover:text-white transition-colors">Shop iPhones</Link></li>
              <li><Link to="/covers" className="hover:text-white transition-colors">Phone Covers</Link></li>
              <li><Link to="/diagnostic" className="hover:text-white transition-colors">Get Diagnostic</Link></li>
              <li><Link to="/trade-in" className="hover:text-white transition-colors">Sell Your iPhone</Link></li>
              <li><Link to="/repairs" className="hover:text-white transition-colors">Repair Services</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+27 123 456 789</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@teezflexx.co.za</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1" />
                <span>Cape Town, South Africa</span>
              </li>
            </ul>
            <div className="flex space-x-3 mt-4">
              <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-slate-700 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-slate-700 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Teez-Flexx Mobiles. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;