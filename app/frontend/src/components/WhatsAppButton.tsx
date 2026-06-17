'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Verified business number: 074 337 6552
    const phoneNumber = '27743376552';
    const message = encodeURIComponent("Hello Teez-Flexx Mobiles, I'd like to check stock and book a device viewing.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1, transition: { delay: 1.2, type: 'spring' } }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white rounded-full shadow-2xl min-w-[52px] min-h-[52px] flex items-center justify-center touch-manipulation cursor-pointer hover:scale-110 transition-transform"
      onClick={handleWhatsAppClick}
      data-testid="whatsapp-button"
      title="Chat with Teez-Flexx Mobiles on WhatsApp"
      aria-label="Chat with Teez-Flexx Mobiles on WhatsApp"
    >
      <MessageCircle className="h-6 w-6 text-white fill-white" />
    </motion.div>
  );
};

export default WhatsAppButton;
