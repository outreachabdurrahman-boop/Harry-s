import React from 'react';
import { UtensilsCrossed, Sparkles, HeartHandshake } from 'lucide-react';
import { EXPERIENCE_ITEMS } from '../data/experience';

export const ExperienceSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-5 h-5 text-[#C28E58]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#C28E58]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-[#C28E58]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#C28E58]" />;
    }
  };

  return (
    <section id="experience" className="py-20 sm:py-28 bg-[#161619] border-t border-stone-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#C28E58] mb-3">
            <span className="w-6 h-[1px] bg-[#C28E58]" />
            <span>THE HARRY'S PROMISE</span>
            <span className="w-6 h-[1px] bg-[#C28E58]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAF8F5] tracking-tight mb-4">
            Made for Good Times
          </h2>
          <p className="text-sm sm:text-base text-stone-400 font-light leading-relaxed">
            We believe dining out is about more than just great flavors — it is about the feeling of comfort, the sound of laughter, and genuine moments shared around the table.
          </p>
        </div>

        {/* 3 Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6 lg:gap-8">
          {EXPERIENCE_ITEMS.map((item) => (
            <div
              key={item.number}
              id={`experience-card-${item.number}`}
              className="bg-[#19191d] rounded-2xl border border-stone-800/80 overflow-hidden flex flex-col hover:border-stone-700 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50"
            >
              {/* Card Image */}
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#19191d] via-black/30 to-transparent" />
                
                {/* Number Badge */}
                <div className="absolute top-4 left-4 font-mono text-xs font-bold text-stone-900 bg-[#C28E58] px-3 py-1 rounded-full shadow-md">
                  {item.number}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-7 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-[#C28E58]/10">
                    {getIcon(item.iconName)}
                  </div>
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#FAF8F5] group-hover:text-[#C28E58] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="text-xs text-[#C28E58] font-medium tracking-wide uppercase mb-3">
                  {item.subtitle}
                </div>

                <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed flex-grow">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
