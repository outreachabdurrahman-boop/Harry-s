import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { MenuSection } from './components/MenuSection';
import { ExperienceSection } from './components/ExperienceSection';
import { GallerySection } from './components/GallerySection';
import { ReservationSection } from './components/ReservationSection';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';
import { MenuModal } from './components/MenuModal';
import { LightboxModal } from './components/LightboxModal';
import { GALLERY_PHOTOS } from './data/gallery';
import { GalleryPhoto } from './types';
import { Phone, Calendar } from 'lucide-react';
import { RESTAURANT_INFO } from './data/restaurantInfo';

export default function App() {
  const [reservationModalOpen, setReservationModalOpen] = useState(false);
  const [menuModalOpen, setMenuModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  const handleOpenReservation = () => {
    setReservationModalOpen(true);
  };

  const handleCloseReservation = () => {
    setReservationModalOpen(false);
  };

  const handleOpenMenuModal = () => {
    setMenuModalOpen(true);
  };

  const handleCloseMenuModal = () => {
    setMenuModalOpen(false);
  };

  const handleSelectPhoto = (photo: GalleryPhoto) => {
    setSelectedPhoto(photo);
  };

  const handleCloseLightbox = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="min-h-screen bg-[#121214] text-[#FAF8F5] flex flex-col selection:bg-[#C28E58] selection:text-white">
      {/* Fixed Navigation */}
      <Navbar onOpenReservation={handleOpenReservation} />

      {/* Main Single-Page Content */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero onOpenReservation={handleOpenReservation} />

        {/* 2. About Harry's */}
        <About />

        {/* 3. Featured Menu */}
        <MenuSection onOpenFullMenu={handleOpenMenuModal} />

        {/* 4. Restaurant Experience */}
        <ExperienceSection />

        {/* 5. Image Gallery */}
        <GallerySection onPhotoClick={handleSelectPhoto} />

        {/* 6. Contact / Reservation Section */}
        <ReservationSection onOpenReservationModal={handleOpenReservation} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Quick Action Pill for Mobile */}
      <div className="fixed bottom-4 left-4 right-4 z-30 md:hidden">
        <div className="bg-stone-900/95 backdrop-blur-md border border-stone-700/80 rounded-2xl p-2 shadow-2xl flex items-center justify-between gap-2">
          <a
            href={RESTAURANT_INFO.phoneTel}
            className="flex-1 py-2.5 px-3 rounded-xl bg-stone-800 text-stone-200 text-xs font-medium flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
          >
            <Phone className="w-3.5 h-3.5 text-[#C28E58]" />
            <span>Call</span>
          </a>
          <button
            onClick={handleOpenReservation}
            className="flex-1 py-2.5 px-3 rounded-xl bg-[#C28E58] text-stone-950 text-xs font-bold flex items-center justify-center gap-1.5 active:scale-95 transition-transform shadow-md cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Table</span>
          </button>
        </div>
      </div>

      {/* Table Reservation Modal */}
      <ReservationModal
        isOpen={reservationModalOpen}
        onClose={handleCloseReservation}
      />

      {/* Complete Menu Modal */}
      <MenuModal
        isOpen={menuModalOpen}
        onClose={handleCloseMenuModal}
        onOpenReservation={() => {
          setMenuModalOpen(false);
          setReservationModalOpen(true);
        }}
      />

      {/* Gallery Lightbox Modal */}
      <LightboxModal
        photo={selectedPhoto}
        photos={GALLERY_PHOTOS}
        onClose={handleCloseLightbox}
        onSelectPhoto={handleSelectPhoto}
      />
    </div>
  );
}
