'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '27123456789';
    const message = encodeURIComponent('Hi, I have a question about your services.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div
      className="fixed bottom-6 right-6 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full p-4 shadow-lg cursor-pointer transition-all hover:scale-110 z-40"
      onClick={handleWhatsAppClick}
      data-testid="whatsapp-button"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-white" />
    </div>
  );
};

export default WhatsAppButton;
