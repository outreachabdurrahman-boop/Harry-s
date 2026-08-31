import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { GalleryPhoto } from '../types';

interface LightboxModalProps {
  photo: GalleryPhoto | null;
  photos: GalleryPhoto[];
  onClose: () => void;
  onSelectPhoto: (photo: GalleryPhoto) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  photo,
  photos,
  onClose,
  onSelectPhoto,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!photo) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [photo, photos]);

  if (!photo) return null;

  const currentIndex = photos.findIndex((p) => p.id === photo.id);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % photos.length;
    onSelectPhoto(photos[nextIndex]);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
    onSelectPhoto(photos[prevIndex]);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full bg-[#141416] rounded-2xl overflow-hidden border border-stone-800 shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="p-4 bg-stone-950/80 border-b border-stone-800/80 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-medium text-[#C28E58] bg-stone-900 px-2.5 py-1 rounded-full border border-stone-800">
              {currentIndex + 1} / {photos.length}
            </span>
            <span className="text-xs text-stone-300 font-medium">
              {photo.categoryLabel}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close photo preview"
            className="p-1.5 text-stone-400 hover:text-white hover:bg-stone-800 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Main Photo Display */}
        <div className="relative bg-black flex items-center justify-center min-h-[300px] max-h-[65vh] sm:max-h-[72vh] overflow-hidden">
          <img
            src={photo.src}
            alt={photo.alt}
            className="max-h-[65vh] sm:max-h-[72vh] w-auto max-w-full object-contain mx-auto select-none"
          />

          {/* Navigation Controls */}
          <button
            onClick={handlePrev}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-stone-900/80 hover:bg-stone-800 text-stone-200 hover:text-white border border-stone-700/60 shadow-lg transition-all cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-stone-900/80 hover:bg-stone-800 text-stone-200 hover:text-white border border-stone-700/60 shadow-lg transition-all cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Caption bar */}
        <div className="p-4 sm:p-5 bg-stone-900/90 border-t border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h4 className="font-serif text-base sm:text-lg font-bold text-[#FAF8F5]">
              {photo.title}
            </h4>
            {photo.caption && (
              <p className="text-xs sm:text-sm text-stone-400 font-light mt-0.5">
                {photo.caption}
              </p>
            )}
          </div>
          <div className="text-xs text-stone-400 flex items-center gap-1 shrink-0">
            <MapPin className="w-3.5 h-3.5 text-[#C28E58]" />
            <span>Harry's • F-10 Markaz, Islamabad</span>
          </div>
        </div>
      </div>
    </div>
  );
};
