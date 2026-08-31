import React from 'react';
import { Phone, MapPin, Mail, Navigation, Clock, Calendar, ExternalLink, MessageCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantInfo';

// Facebook Icon SVG
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
      clipRule="evenodd"
    />
  </svg>
);

interface ReservationSectionProps {
  onOpenReservationModal: () => void;
}

export const ReservationSection: React.FC<ReservationSectionProps> = ({
  onOpenReservationModal,
}) => {
  return (
    <section
      id="contact"
      className="py-20 sm:py-28 bg-[#161619] border-t border-stone-800/80 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Banner */}
        <div className="bg-gradient-to-br from-stone-900 via-[#19191d] to-stone-900 rounded-3xl border border-stone-800/90 p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden mb-16">
          
          {/* Subtle Ambient Background Accent */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-[#C28E58]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-[#C28E58]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
            
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#C28E58] mb-3">
              <Calendar className="w-3.5 h-3.5" />
              <span>RESERVATIONS & GATHERINGS</span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#FAF8F5] tracking-tight mb-5 leading-tight">
              Let's Make It a Good One
            </h2>

            {/* Text */}
            <p className="text-base sm:text-lg text-stone-300 font-light max-w-xl mb-10 leading-relaxed">
              Join us at Harry's for great food and good company.
            </p>

            {/* Main Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-xl mb-8">
              <a
                id="call-to-reserve-btn"
                href={RESTAURANT_INFO.phoneTel}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#C28E58] hover:bg-[#a87442] text-stone-950 font-bold text-sm tracking-wide transition-all shadow-lg shadow-[#C28E58]/20 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-stone-950" />
                <span>Call {RESTAURANT_INFO.phone}</span>
              </a>

              <a
                id="whatsapp-reserve-btn"
                href={RESTAURANT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm tracking-wide transition-all shadow-lg shadow-green-900/30 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-current text-white stroke-none" />
                <span>WhatsApp Us</span>
              </a>

              <a
                id="get-directions-btn"
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-100 border border-stone-600 font-medium text-sm tracking-wide transition-all flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4 text-[#C28E58]" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Online Booking Trigger */}
            <button
              onClick={onOpenReservationModal}
              className="text-xs text-stone-400 hover:text-[#C28E58] underline underline-offset-4 transition-colors cursor-pointer"
            >
              Or fill our online table reservation form &rarr;
            </button>
          </div>
        </div>

        {/* Contact & Location Details 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          {/* 1. Address & Location */}
          <div className="bg-[#19191d] p-6 sm:p-8 rounded-2xl border border-stone-800/80 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#C28E58]/10 text-[#C28E58] flex items-center justify-center mb-5">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#FAF8F5] mb-2">
                Our Location
              </h3>
              <p className="text-sm text-stone-300 font-light leading-relaxed">
                F-10 Markaz, F-10/3,<br />
                Islamabad, 44000, Pakistan
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-800">
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#C28E58] hover:underline flex items-center gap-1.5"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* 2. Direct Contact & Email */}
          <div className="bg-[#19191d] p-6 sm:p-8 rounded-2xl border border-stone-800/80 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#C28E58]/10 text-[#C28E58] flex items-center justify-center mb-5">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#FAF8F5] mb-2">
                Get in Touch
              </h3>
              <p className="text-sm text-stone-300 font-light mb-2">
                Phone:{' '}
                <a href={RESTAURANT_INFO.phoneTel} className="font-mono text-white font-medium hover:text-[#C28E58] transition-colors">
                  {RESTAURANT_INFO.phone}
                </a>
              </p>
              <p className="text-sm text-stone-300 font-light">
                Email:{' '}
                <a href={`mailto:${RESTAURANT_INFO.email}`} className="text-white hover:text-[#C28E58] transition-colors">
                  {RESTAURANT_INFO.email}
                </a>
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-800 flex items-center justify-between">
              <a
                href={RESTAURANT_INFO.phoneTel}
                className="text-xs font-semibold text-[#C28E58] hover:underline"
              >
                Call: {RESTAURANT_INFO.phone}
              </a>
              <a
                href={RESTAURANT_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-stone-400 hover:text-white flex items-center gap-1.5"
              >
                <FacebookIcon className="w-3.5 h-3.5 text-[#1877F2]" />
                <span>Facebook</span>
              </a>
            </div>
          </div>

          {/* 3. Opening Hours & Patio Times */}
          <div className="bg-[#19191d] p-6 sm:p-8 rounded-2xl border border-stone-800/80 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#C28E58]/10 text-[#C28E58] flex items-center justify-center mb-5">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#FAF8F5] mb-2">
                Opening Hours
              </h3>
              <div className="space-y-1.5 text-xs sm:text-sm text-stone-300 font-light">
                <div className="flex justify-between">
                  <span className="text-stone-400">Monday – Sunday:</span>
                  <span className="font-medium text-white">{RESTAURANT_INFO.hours.weekdays}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">Patio Dining:</span>
                  <span className="font-medium text-[#C28E58]">Evening & Night</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">Takeaway & Dine-in:</span>
                  <span className="font-medium text-white">Available</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-800">
              <span className="text-xs text-emerald-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Open for lunch & dinner in F-10</span>
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
