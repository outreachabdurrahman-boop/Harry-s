import React, { useState } from 'react';
import { Camera, Eye } from 'lucide-react';
import { GALLERY_PHOTOS } from '../data/gallery';
import { GalleryPhoto } from '../types';

interface GallerySectionProps {
  onPhotoClick: (photo: GalleryPhoto) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onPhotoClick }) => {
  const [filter, setFilter] = useState<'all' | 'food' | 'interior' | 'drinks' | 'patio'>('all');

  const filteredPhotos = filter === 'all'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter(p => p.category === filter);

  const filterTabs = [
    { id: 'all', label: 'All Photos' },
    { id: 'food', label: 'Food & Grill' },
    { id: 'patio', label: 'Patio & Ambience' },
    { id: 'interior', label: 'Interior' },
    { id: 'drinks', label: 'Drinks & Sweets' },
  ];

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#121214] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#C28E58] mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>VISUAL GLIMPSE</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAF8F5] tracking-tight mb-4">
            Gallery & Atmosphere
          </h2>
          <p className="text-sm sm:text-base text-stone-400 font-light leading-relaxed">
            Take a visual tour through Harry’s — where artisanal dishes, relaxed patio breeze, and heartwarming company blend into memorable experiences.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex items-center justify-center gap-2 flex-wrap">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                id={`gallery-filter-${tab.id}`}
                onClick={() => setFilter(tab.id as any)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  filter === tab.id
                    ? 'bg-[#C28E58] text-stone-950 font-semibold shadow-md shadow-[#C28E58]/20'
                    : 'bg-stone-900 text-stone-400 hover:text-white hover:bg-stone-800 border border-stone-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Modern Responsive Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredPhotos.map((photo, index) => {
            // Give subtle visual rhythm: 1st and 6th span slightly on desktop if needed, or uniform clean masonry grid
            return (
              <div
                key={photo.id}
                id={`gallery-item-${photo.id}`}
                onClick={() => onPhotoClick(photo)}
                className="group relative rounded-2xl overflow-hidden bg-stone-900 border border-stone-800/90 aspect-[4/3] sm:aspect-square cursor-pointer shadow-lg hover:shadow-2xl hover:border-stone-600 transition-all duration-300"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Hover Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-5">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#C28E58] font-semibold">
                    {photo.categoryLabel}
                  </span>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#FAF8F5] leading-snug mt-0.5">
                    {photo.title}
                  </h3>

                  <div className="mt-2 flex items-center gap-1.5 text-xs text-stone-300">
                    <Eye className="w-3.5 h-3.5 text-[#C28E58]" />
                    <span>View full photo</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gallery Footer Note */}
        <div className="mt-10 text-center">
          <p className="text-xs text-stone-400">
            Follow us on Facebook at{' '}
            <a
              href="https://www.facebook.com/isb.harrys"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C28E58] hover:underline font-medium"
            >
              @isb.harrys
            </a>{' '}
            for daily stories, seasonal specials, and events.
          </p>
        </div>

      </div>
    </section>
  );
};
