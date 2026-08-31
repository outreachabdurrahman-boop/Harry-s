import React, { useState } from 'react';
import { X, Search, Utensils, Sparkles, Phone } from 'lucide-react';
import { MENU_ITEMS, MENU_CATEGORIES } from '../data/menu';
import { MenuCategoryId } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantInfo';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenReservation: () => void;
}

export const MenuModal: React.FC<MenuModalProps> = ({ isOpen, onClose, onOpenReservation }) => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategoryId>('all');
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) return null;

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6">
      <div 
        className="relative bg-[#141417] border border-stone-800 w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-stone-800 flex items-center justify-between bg-stone-900/60 shrink-0">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C28E58]">
              <Utensils className="w-3.5 h-3.5" />
              <span>Full Dining Menu</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF8F5]">Harry's Complete Menu</h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close menu modal"
            className="p-2 rounded-full text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="p-4 sm:p-6 border-b border-stone-800/80 bg-[#161619] shrink-0 space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search dishes, ingredients, steaks, pastas, drinks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-stone-900 border border-stone-700/80 text-sm text-stone-100 placeholder:text-stone-500 focus:outline-none focus:border-[#C28E58] focus:ring-1 focus:ring-[#C28E58]"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {MENU_CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === category.id
                    ? 'bg-[#C28E58] text-stone-950 font-semibold'
                    : 'bg-stone-800/70 text-stone-300 hover:bg-stone-700 hover:text-white'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Items List */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 flex-grow divide-y divide-stone-800/60">
          {filteredItems.length === 0 ? (
            <div className="py-12 text-center text-stone-400">
              <p className="text-base">No dishes found matching "{searchQuery}".</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="mt-3 text-xs text-[#C28E58] hover:underline"
              >
                Reset filters
              </button>
            </div>
          ) : (
            filteredItems.map((item) => (
              <div key={item.id} className="pt-4 first:pt-0 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover shrink-0 border border-stone-800"
                    loading="lazy"
                  />
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="font-serif font-bold text-base sm:text-lg text-stone-100">{item.name}</h4>
                      {item.badge && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#C28E58]/15 text-[#C28E58] font-medium border border-[#C28E58]/30">
                          {item.badge}
                        </span>
                      )}
                      {item.isSpicy && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-950/60 text-red-400 font-medium border border-red-800/40">
                          Spicy
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-stone-400 font-light mt-1 max-w-xl leading-relaxed">
                      {item.description}
                    </p>
                    <span className="inline-block sm:hidden text-xs text-[#C28E58] font-semibold mt-1">
                      {item.price}
                    </span>
                  </div>
                </div>

                <div className="hidden sm:flex flex-col items-end shrink-0 pl-4">
                  <span className="font-serif text-base font-bold text-[#C28E58]">
                    {item.price}
                  </span>
                  <span className="text-[10px] text-stone-500 uppercase font-mono">
                    {item.categoryName}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer info & CTA */}
        <div className="p-4 sm:p-5 bg-stone-900/90 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-stone-400 text-center sm:text-left flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#C28E58]" />
            <span>Prices are inclusive of applicable sales tax • F-10 Markaz, Islamabad</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={RESTAURANT_INFO.phoneTel}
              className="flex-1 sm:flex-initial px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-xs text-stone-200 flex items-center justify-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C28E58]" />
              <span>Call {RESTAURANT_INFO.phone}</span>
            </a>
            <button
              onClick={() => {
                onClose();
                onOpenReservation();
              }}
              className="flex-1 sm:flex-initial px-5 py-2 rounded-xl bg-[#C28E58] hover:bg-[#a87442] text-stone-950 font-semibold text-xs transition-colors cursor-pointer"
            >
              Book Table
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
