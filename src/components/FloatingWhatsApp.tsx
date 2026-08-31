import React from 'react';
import { MessageCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantInfo';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside
      id="floating-whatsapp-btn"
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-40"
    >
      <a
        href={RESTAURANT_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Harry's Islamabad on WhatsApp"
        className="group relative flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-3 rounded-full shadow-2xl shadow-green-950/50 hover:shadow-green-900/60 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-stone-900"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageCircle className="w-5 h-5 fill-current text-white stroke-none" />
        <span className="text-xs sm:text-sm font-semibold tracking-wide hidden sm:inline-block">
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
};
