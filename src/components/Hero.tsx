import React from 'react';
import { MapPin, ChevronDown, Calendar, Utensils } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantInfo';

interface HeroProps {
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation }) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Image with Dark Elegant Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=85"
          alt="Harry's Restaurant & Patio Atmosphere in F-10 Islamabad"
          className="w-full h-full object-cover object-center scale-105 animate-pulse duration-[8000ms]"
          loading="eager"
          fetchPriority="high"
        />
        {/* Gradient and Tone Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-[#121214]/75 to-[#121214]/60" />
        <div className="absolute inset-0 bg-black/40 backdrop-brightness-90" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Small Location Pill */}
        <div
          id="hero-location-badge"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-900/80 border border-stone-700/60 backdrop-blur-sm text-stone-300 text-xs sm:text-sm mb-6 shadow-sm animate-fade-in"
        >
          <MapPin className="w-3.5 h-3.5 text-[#C28E58]" />
          <span className="font-medium tracking-wide">{RESTAURANT_INFO.shortLocation}</span>
          <span className="w-1 h-1 rounded-full bg-stone-500" />
          <span className="text-stone-400 text-xs">Open Daily 12 PM – 12 AM</span>
        </div>

        {/* Large Heading */}
        <h1
          id="hero-main-heading"
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#FAF8F5] leading-[1.08] mb-6 text-balance"
        >
          GOOD FOOD.<br />
          <span className="text-[#C28E58] italic font-normal">GOOD MOMENTS.</span>
        </h1>

        {/* Supporting Text */}
        <p
          id="hero-supporting-text"
          className="max-w-2xl text-base sm:text-lg md:text-xl text-stone-300 font-light leading-relaxed mb-10 text-balance px-2"
        >
          {RESTAURANT_INFO.subtitle}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5 w-full max-w-md">
          <button
            id="hero-explore-menu-btn"
            onClick={() => scrollToSection('menu')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-transparent hover:bg-stone-800/80 text-[#FAF8F5] border border-stone-500/80 hover:border-stone-300 font-medium text-sm sm:text-base tracking-wide transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Utensils className="w-4 h-4 text-[#C28E58]" />
            <span>Explore Menu</span>
          </button>

          <button
            id="hero-reserve-table-btn"
            onClick={onOpenReservation}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#C28E58] hover:bg-[#a87442] text-stone-950 font-semibold text-sm sm:text-base tracking-wide transition-all duration-200 shadow-lg shadow-[#C28E58]/25 hover:shadow-[#C28E58]/40 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-stone-950" />
            <span>Reserve a Table</span>
          </button>
        </div>

        {/* Highlights Row */}
        <div className="mt-14 pt-8 border-t border-stone-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 w-full max-w-3xl text-center">
          <div>
            <div className="text-xl sm:text-2xl font-serif font-bold text-[#FAF8F5]">F-10 Markaz</div>
            <div className="text-xs text-stone-400 mt-0.5">Prime Location</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-serif font-bold text-[#FAF8F5]">Open Patio</div>
            <div className="text-xs text-stone-400 mt-0.5">Breeze & Ambience</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-serif font-bold text-[#FAF8F5]">Live Grill</div>
            <div className="text-xl sm:text-2xl font-serif font-bold text-[#FAF8F5] hidden">40+</div>
            <div className="text-xs text-stone-400 mt-0.5">Charbroiled Steaks</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-serif font-bold text-[#C28E58]">0331 9146686</div>
            <div className="text-xs text-stone-400 mt-0.5">Quick Reservations</div>
          </div>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <button
        onClick={() => scrollToSection('about')}
        aria-label="Scroll down to About section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-stone-400 hover:text-[#C28E58] transition-colors p-2 cursor-pointer animate-bounce hidden sm:flex flex-col items-center gap-1"
      >
        <span className="text-[10px] tracking-widest uppercase text-stone-500 font-mono">Explore</span>
        <ChevronDown className="w-4 h-4" />
      </button>
    </section>
  );
};
