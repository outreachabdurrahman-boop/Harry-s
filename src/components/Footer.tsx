import React from 'react';
import { ArrowUp, MapPin, Phone, Mail } from 'lucide-react';
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

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Harry’s', href: '#about' },
    { name: 'Featured Menu', href: '#menu' },
    { name: 'Experience', href: '#experience' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact & Reservations', href: '#contact' },
  ];

  return (
    <footer className="bg-[#0e0e10] text-stone-400 border-t border-stone-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-stone-800">
          
          {/* Brand & Address Column */}
          <div className="md:col-span-5 space-y-4">
            <a href="#home" className="inline-block">
              <span className="font-serif text-3xl font-bold tracking-widest text-[#FAF8F5]">
                HARRY’S
              </span>
              <span className="block text-[10px] tracking-[0.25em] text-[#C28E58] uppercase font-sans font-medium">
                Restaurant & Patio • Islamabad
              </span>
            </a>

            <p className="text-sm text-stone-400 font-light max-w-sm leading-relaxed">
              A warm, welcoming dining destination in F-10 Markaz, Islamabad. Made for great food, relaxed gatherings, and memorable times with family and friends.
            </p>

            <div className="pt-2 space-y-2 text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-stone-300">
                <MapPin className="w-4 h-4 text-[#C28E58] shrink-0" />
                <span>{RESTAURANT_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2 text-stone-300">
                <Phone className="w-4 h-4 text-[#C28E58] shrink-0" />
                <a href={RESTAURANT_INFO.phoneTel} className="font-mono hover:text-[#C28E58] transition-colors">
                  {RESTAURANT_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2 text-stone-300">
                <Mail className="w-4 h-4 text-[#C28E58] shrink-0" />
                <a href={`mailto:${RESTAURANT_INFO.email}`} className="hover:text-[#C28E58] transition-colors">
                  {RESTAURANT_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-serif text-base font-semibold text-[#FAF8F5] uppercase tracking-wider text-xs">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-stone-400 hover:text-[#C28E58] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Connect Column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-serif text-base font-semibold text-[#FAF8F5] uppercase tracking-wider text-xs">
              Connect With Us
            </h4>
            <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed">
              Stay connected for our latest menu specials, seasonal events, and patio evenings in Islamabad.
            </p>

            <div>
              <a
                href={RESTAURANT_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 border border-stone-800 text-stone-200 hover:text-white transition-all text-xs font-medium group"
              >
                <FacebookIcon className="w-4 h-4 text-[#1877F2] group-hover:scale-110 transition-transform" />
                <span>Follow on Facebook</span>
              </a>
            </div>

            <div className="pt-2 text-xs text-stone-500">
              Opening Hours: 12:00 PM – 12:00 AM Daily
            </div>
          </div>

        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>
            © {new Date().getFullYear()} Harry's Restaurant & Patio. All rights reserved. F-10 Markaz, Islamabad.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="flex items-center gap-2 text-stone-400 hover:text-[#C28E58] transition-colors p-1 cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
