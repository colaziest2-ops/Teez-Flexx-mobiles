import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '27123456789';
    const message = encodeURIComponent('Hi, I have a question about your services.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div
      className="whatsapp-float"
      onClick={handleWhatsAppClick}
      data-testid="whatsapp-button"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-white" />
    </div>
  );
};

export default WhatsAppButton;