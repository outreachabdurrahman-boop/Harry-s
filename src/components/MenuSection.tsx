import React, { useState } from 'react';
import { Utensils, Flame, Sparkles, BookOpen } from 'lucide-react';
import { MENU_ITEMS, MENU_CATEGORIES } from '../data/menu';
import { MenuCategoryId } from '../types';

interface MenuSectionProps {
  onOpenFullMenu: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onOpenFullMenu }) => {
  const [activeCategory, setActiveCategory] = useState<MenuCategoryId>('all');

  // Filter items based on active tab. If 'all', show featured 8 items across distinct categories
  const displayedItems = activeCategory === 'all'
    ? MENU_ITEMS.slice(0, 8)
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 sm:py-28 bg-[#121214] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#C28E58] mb-3">
            <Utensils className="w-3.5 h-3.5" />
            <span>CULINARY SELECTION</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAF8F5] tracking-tight mb-4">
            Featured Menu
          </h2>
          <p className="text-sm sm:text-base text-stone-400 font-light leading-relaxed">
            From smoky charbroiled steaks and handcrafted smash burgers to indulgent pastas and artisan desserts, each dish is made to order with authentic passion.
          </p>

          {/* Category Tabs */}
          <div className="mt-8 flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap">
            {MENU_CATEGORIES.map((tab) => (
              <button
                key={tab.id}
                id={`menu-tab-${tab.id}`}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3.5 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-[#C28E58] text-stone-950 font-semibold shadow-md shadow-[#C28E58]/20 scale-105'
                    : 'bg-stone-900/80 text-stone-300 hover:text-white hover:bg-stone-800 border border-stone-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
          {displayedItems.map((dish) => (
            <div
              key={dish.id}
              id={`dish-card-${dish.id}`}
              className="bg-[#17171a] rounded-2xl border border-stone-800/80 p-5 sm:p-6 flex flex-col sm:flex-row gap-5 hover:border-stone-700/90 transition-all duration-300 group hover:shadow-xl hover:shadow-black/40"
            >
              {/* Dish Image */}
              <div className="relative w-full sm:w-36 h-48 sm:h-36 rounded-xl overflow-hidden shrink-0 border border-stone-800">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {dish.badge && (
                  <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-stone-950/80 backdrop-blur-sm text-[#C28E58] border border-[#C28E58]/30 text-[10px] font-semibold tracking-wide">
                    {dish.badge}
                  </span>
                )}
              </div>

              {/* Dish Details */}
              <div className="flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-start justify-between gap-3 mb-1.5">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#FAF8F5] group-hover:text-[#C28E58] transition-colors">
                      {dish.name}
                    </h3>
                    <span className="font-serif text-base sm:text-lg font-bold text-[#C28E58] shrink-0">
                      {dish.price}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed line-clamp-2">
                    {dish.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-800/70 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-stone-400 uppercase tracking-wider font-mono font-medium">
                    {dish.categoryName}
                  </span>

                  <div className="flex items-center gap-2">
                    {dish.isSpicy && (
                      <span className="flex items-center gap-1 text-[11px] text-red-400 bg-red-950/40 px-2 py-0.5 rounded border border-red-900/30">
                        <Flame className="w-3 h-3" /> Spicy
                      </span>
                    )}
                    {dish.isVeg && (
                      <span className="flex items-center gap-1 text-[11px] text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-900/30">
                        <Sparkles className="w-3 h-3" /> Veg
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Menu Button */}
        <div className="mt-12 sm:mt-16 text-center">
          <button
            id="view-full-menu-btn"
            onClick={onOpenFullMenu}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-stone-900 hover:bg-stone-800 text-[#FAF8F5] border border-stone-700 hover:border-[#C28E58] font-medium text-sm sm:text-base tracking-wide transition-all shadow-lg hover:shadow-[#C28E58]/10 group cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-[#C28E58] group-hover:scale-110 transition-transform" />
            <span>View Full Menu & Prices</span>
          </button>
        </div>

      </div>
    </section>
  );
};
