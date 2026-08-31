import React from 'react';
import { Heart, Sparkles, Coffee, Clock, MapPin, Phone } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantInfo';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#161619] border-t border-b border-stone-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & Story */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#C28E58] mb-3">
              <span className="w-6 h-[1px] bg-[#C28E58]" />
              <span>OUR STORY</span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAF8F5] tracking-tight mb-6 leading-tight">
              Welcome to Harry's
            </h2>

            {/* Main Intro Paragraph */}
            <p className="text-base sm:text-lg text-stone-300 font-light leading-relaxed mb-6">
              Harry's is a welcoming destination in F-10 Markaz, Islamabad, bringing together delicious food, a relaxed atmosphere and a place to enjoy time with friends and family.
            </p>

            <p className="text-sm sm:text-base text-stone-400 font-light leading-relaxed mb-8">
              Whether you are stopping by for a sizzling charcoal-grilled steak on our airy patio, catching up over artisanal coffees and handcrafted burgers, or celebrating an unforgettable milestone, Harry's is crafted to make every visit warm, comfortable, and memorable.
            </p>

            {/* Key Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-stone-900/70 border border-stone-800 flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-[#C28E58]/10 text-[#C28E58] shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-stone-200 text-sm">Artisanal Dining</h4>
                  <p className="text-xs text-stone-400 mt-0.5">Freshly prepared recipes crafted with care and passion.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-stone-900/70 border border-stone-800 flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-[#C28E58]/10 text-[#C28E58] shrink-0">
                  <Coffee className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-stone-200 text-sm">Patio & Indoor Ambience</h4>
                  <p className="text-xs text-stone-400 mt-0.5">Spacious seating with Islamabad evening vibes.</p>
                </div>
              </div>
            </div>

            {/* Quick Contact & Hours Strip */}
            <div className="pt-4 border-t border-stone-800/80 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-stone-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#C28E58]" />
                <span>F-10 Markaz, Islamabad</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#C28E58]" />
                <span>12:00 PM – 12:00 AM Daily</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-[#C28E58]" />
                <a href={RESTAURANT_INFO.phoneTel} className="hover:text-[#C28E58] transition-colors">
                  {RESTAURANT_INFO.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: One Large Restaurant Image with Subtle Accents */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer Glow / Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-stone-700/60 aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
                  alt="Harry's restaurant interior and hospitable dining ambience"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
                
                {/* Floating Badge in Image */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-stone-900/90 backdrop-blur-md p-4 rounded-xl border border-stone-700/70 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#C28E58] flex items-center justify-center text-stone-950 font-serif font-bold text-lg shrink-0">
                      H
                    </div>
                    <div>
                      <div className="font-serif text-sm sm:text-base font-semibold text-[#FAF8F5]">Harry’s Patio & Bistro</div>
                      <div className="text-xs text-stone-400">Islamabad's Favorite Gathering Spot</div>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center gap-1 text-[#C28E58] text-xs font-semibold">
                    <Heart className="w-3.5 h-3.5 fill-[#C28E58]" />
                    <span>Pure Hospitality</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
