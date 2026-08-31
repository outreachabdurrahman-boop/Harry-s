import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantInfo';

interface NavbarProps {
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['home', 'about', 'menu', 'experience', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Menu', href: '#menu', id: 'menu' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#121214]/95 backdrop-blur-md border-b border-stone-800/80 py-3 shadow-lg shadow-black/20'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              id="nav-logo"
              className="flex flex-col group focus:outline-none"
              onClick={(e) => {
                e.preventDefault();
                handleNavLinkClick('#home');
              }}
            >
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-widest text-[#FAF8F5] group-hover:text-[#C28E58] transition-colors">
                HARRY’S
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#C28E58] uppercase font-sans font-medium -mt-1">
                Restaurant & Patio
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    id={`nav-link-${link.id}`}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavLinkClick(link.href);
                    }}
                    className={`px-3.5 py-2 text-sm font-medium transition-colors rounded-full ${
                      isActive
                        ? 'text-[#C28E58] bg-stone-900/60 font-semibold'
                        : 'text-stone-300 hover:text-white hover:bg-stone-800/40'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Right CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href={RESTAURANT_INFO.phoneTel}
                className="text-xs text-stone-300 hover:text-[#C28E58] flex items-center gap-1.5 transition-colors"
                title="Call Harry's"
              >
                <Phone className="w-3.5 h-3.5 text-[#C28E58]" />
                <span className="font-mono">{RESTAURANT_INFO.phone}</span>
              </a>
              <button
                id="navbar-reserve-cta"
                onClick={onOpenReservation}
                className="bg-[#C28E58] hover:bg-[#a87442] text-stone-950 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-md shadow-[#C28E58]/20 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                Reserve a Table
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                id="mobile-menu-toggle-btn"
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
                className="p-2.5 rounded-lg text-stone-200 hover:text-white hover:bg-stone-800/80 transition-colors focus:outline-none focus:ring-2 focus:ring-[#C28E58]"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown / Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-overlay"
          className="fixed inset-0 z-30 bg-black/70 backdrop-blur-md md:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed top-[68px] left-0 right-0 bg-[#141416] border-b border-stone-800 shadow-2xl px-6 py-8 flex flex-col space-y-4 max-h-[calc(100vh-70px)] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-stone-800">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C28E58]">
                Navigation
              </span>
              <span className="text-xs text-stone-400 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#C28E58]" /> F-10 Markaz, Islamabad
              </span>
            </div>

            <nav className="flex flex-col space-y-1 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  id={`mobile-nav-${link.id}`}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavLinkClick(link.href);
                  }}
                  className={`text-lg py-3 px-4 rounded-xl font-medium transition-colors ${
                    activeSection === link.id
                      ? 'bg-stone-800/80 text-[#C28E58] font-semibold'
                      : 'text-stone-200 hover:bg-stone-900/60 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="pt-4 border-t border-stone-800 flex flex-col gap-3">
              <button
                id="mobile-menu-reserve-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full bg-[#C28E58] hover:bg-[#a87442] text-stone-950 font-semibold py-3.5 px-6 rounded-xl text-center transition-colors shadow-lg cursor-pointer"
              >
                Reserve a Table
              </button>

              <div className="flex items-center justify-between text-xs text-stone-400 px-2 pt-2">
                <a
                  href={RESTAURANT_INFO.phoneTel}
                  className="flex items-center gap-2 hover:text-[#C28E58]"
                >
                  <Phone className="w-4 h-4 text-[#C28E58]" />
                  <span>{RESTAURANT_INFO.phone}</span>
                </a>
                <a
                  href={RESTAURANT_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C28E58] transition-colors"
                >
                  Facebook Page
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
