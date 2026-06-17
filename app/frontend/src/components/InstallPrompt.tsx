'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Share, Smartphone } from 'lucide-react';

export default function InstallPrompt() {
  const [showPrompt, setShowPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Check if already installed
    const isStandaloneMode = window.matchMedia('(display-mode: standalone)').matches 
      || (window.navigator as any).standalone === true;
    setIsStandalone(isStandaloneMode);

    // Check if dismissed
    const dismissed = localStorage.getItem('teez_install_dismissed');
    if (dismissed || isStandaloneMode) return;

    // Detect iOS
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
    setIsIOS(iOS);

    // Show prompt after 3 seconds
    const timer = setTimeout(() => {
      setShowPrompt(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem('teez_install_dismissed', 'true');
  };

  if (isStandalone) return null;

  return (
    <AnimatePresence>
      {showPrompt && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-20 left-4 right-4 z-50 md:hidden"
        >
          <div className="bg-brand-charcoal border border-white/10 rounded-2xl p-4 shadow-2xl">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 bg-brand-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Smartphone className="w-6 h-6 text-brand-gold" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-white mb-1">Add to Home Screen</h3>
                {isIOS ? (
                  <p className="text-sm text-brand-muted">
                    Tap <Share className="w-4 h-4 inline mx-1 text-brand-gold" /> 
                    then &quot;Add to Home Screen&quot; for the full app experience.
                  </p>
                ) : (
                  <p className="text-sm text-brand-muted">
                    Install Teez-Flexx for quick access and offline browsing.
                  </p>
                )}
              </div>
              <button 
                onClick={handleDismiss}
                className="p-2 hover:bg-white/5 rounded-lg transition-colors"
                aria-label="Dismiss install prompt"
              >
                <X className="w-5 h-5 text-brand-muted" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
