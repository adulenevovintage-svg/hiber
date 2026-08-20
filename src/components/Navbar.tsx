import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Calendar, 
  GraduationCap, 
  Menu, 
  X, 
  Sparkles, 
  Clock, 
  ChevronRight,
  Instagram
} from 'lucide-react';
import { BRAND_INFO } from '../data/salonData';

interface NavbarProps {
  onOpenBooking: (type?: 'salon' | 'academy', itemId?: string) => void;
  onOpenQuiz: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenQuiz }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Hair Services', href: '#hair-services' },
    { name: 'Makeup & Nails', href: '#makeup-services' },
    { name: 'Botanical Hair Bar', href: '#botanicals' },
    { name: 'Hair Growth', href: '#hair-growth' },
    { name: 'Bridal & Packages', href: '#bridal-packages' },
    { name: 'Academy', href: '#academy', highlight: true },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Why Hiber', href: '#why-hiber' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      {/* Top Luxury Announcement & Quick Contact Bar */}
      <div className="bg-[#050505]/95 border-b border-[#d4af37]/20 text-[11px] py-1.5 px-4 text-[#a3a39e] backdrop-blur-md hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-[#e8e8e2]">
              <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
              {BRAND_INFO.location}
            </span>
            <span className="flex items-center gap-1.5 text-[#a3a39e]">
              <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
              {BRAND_INFO.hours}
            </span>
          </div>

          <div className="flex items-center gap-5">
            <button 
              onClick={onOpenQuiz}
              className="flex items-center gap-1 text-[#f5f5f0] hover:text-[#d4af37] transition-colors cursor-pointer font-medium"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              Free Botanical Hair Diagnosis
            </button>
            <span className="text-[#27272a]">|</span>
            <div className="flex items-center gap-3">
              <a 
                href={`tel:${BRAND_INFO.phone1}`} 
                className="flex items-center gap-1 text-[#f5f5f0] hover:text-[#d4af37] font-semibold transition-colors"
              >
                <Phone className="w-3 h-3 text-[#d4af37]" />
                {BRAND_INFO.phone1}
              </a>
              <span className="text-[#3f3f46]">/</span>
              <a 
                href={`tel:${BRAND_INFO.phone2}`} 
                className="flex items-center gap-1 text-[#f5f5f0] hover:text-[#d4af37] font-semibold transition-colors"
              >
                {BRAND_INFO.phone2}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Brand & Action Header */}
      <div className={`transition-all duration-300 px-3 sm:px-6 lg:px-8 border-b border-white/10 ${
        isScrolled 
          ? 'bg-[#050505]/98 backdrop-blur-md shadow-xl py-2 sm:py-2.5' 
          : 'bg-[#050505]/95 backdrop-blur-md py-2.5 sm:py-3.5'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 sm:gap-6">
          {/* Logo & Brand Identity (Refined Smaller Proportions) */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3.5 group min-w-0">
            {/* Crisp Circular Logo */}
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-13 md:h-13 shrink-0 rounded-full border-2 border-[#d4af37] bg-[#050505] p-0.5 shadow-sm group-hover:border-[#f3e5ab] transition-all duration-300">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#0e0e10] flex items-center justify-center">
                <img 
                  src="https://cdn.phototourl.com/free/2026-08-20-a9185eaf-ea0f-49bc-822e-833cb3bae4f5.jpg" 
                  alt="Hiber Beauty Salon & Academy Official Logo" 
                  className="w-full h-full object-cover rounded-full transform transition-transform duration-500 ease-out group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            
            <div className="flex flex-col justify-center min-w-0">
              <span className="font-serif-luxury font-bold text-lg sm:text-xl md:text-2xl tracking-wider text-[#f5f5f0] uppercase group-hover:text-[#d4af37] transition-colors leading-none">
                Hiber
              </span>
              <span className="text-[8px] sm:text-[9.5px] uppercase tracking-[0.18em] sm:tracking-[0.22em] text-[#d4af37] font-semibold mt-1 whitespace-nowrap">
                Beauty Salon & Academy
              </span>
            </div>
          </a>

          {/* Action CTAs & Quick Buttons */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={() => onOpenBooking('academy')}
              className="hidden sm:flex px-3 sm:px-3.5 py-1.5 sm:py-2 text-[10.5px] sm:text-[11px] font-semibold uppercase tracking-[0.14em] text-[#f5f5f0] border border-[#d4af37]/40 hover:border-[#d4af37] hover:bg-[#d4af37]/10 transition-all items-center gap-1.5 cursor-pointer whitespace-nowrap"
            >
              <GraduationCap className="w-3.5 h-3.5 text-[#d4af37]" />
              Academy Enroll
            </button>

            <button
              onClick={() => onOpenBooking('salon')}
              className="px-3 sm:px-4 py-1.5 sm:py-2 text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.14em] text-[#050505] bg-[#d4af37] hover:bg-[#e5c358] transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">Book Appointment</span>
              <span className="xs:hidden">Book</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 rounded bg-[#0e0e10] border border-white/10 text-[#f5f5f0] hover:text-[#d4af37] hover:border-[#d4af37]/40 transition-colors lg:hidden shrink-0"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Dedicated Clean Navigation Bar Below Header */}
      <nav className="bg-[#08080a]/95 border-b border-white/10 backdrop-blur-md px-3 sm:px-6 lg:px-8 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-start lg:justify-between overflow-x-auto no-scrollbar py-2 sm:py-2.5 gap-1 sm:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-[11px] sm:text-[11.5px] tracking-[0.12em] uppercase font-medium transition-all duration-200 whitespace-nowrap px-2.5 sm:px-3 py-1 rounded-sm shrink-0 flex items-center gap-1.5 ${
                link.highlight 
                  ? 'text-[#d4af37] bg-[#d4af37]/10 border border-[#d4af37]/40 hover:bg-[#d4af37]/20 font-semibold' 
                  : 'text-[#a3a39e] hover:text-[#f5f5f0] hover:bg-white/5'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile Slide-Over Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#050505]/98 backdrop-blur-xl border-b border-[#d4af37]/25 px-6 py-6 transition-all shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-4">
            <div className="pb-3 border-b border-[#1c1c1f] flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.2em] text-[#a3a39e] font-medium">Navigation Menu</span>
              <button 
                onClick={onOpenQuiz} 
                className="text-xs text-[#d4af37] flex items-center gap-1 font-semibold"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                Hair Quiz
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-xs font-medium py-2 px-3 rounded transition-colors flex items-center justify-between uppercase tracking-wider ${
                    link.highlight
                      ? 'text-[#d4af37] bg-[#d4af37]/10 border border-[#d4af37]/30'
                      : 'text-[#e8e8e2] hover:bg-[#0e0e10]'
                  }`}
                >
                  {link.name}
                  <ChevronRight className="w-3.5 h-3.5 text-[#71717a]" />
                </a>
              ))}
            </div>

            {/* Mobile Action Buttons */}
            <div className="pt-4 border-t border-[#1c1c1f] space-y-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking('salon');
                }}
                className="w-full py-3 rounded text-xs font-bold text-[#050505] bg-[#d4af37] shadow-md flex items-center justify-center gap-2 cursor-pointer uppercase tracking-[0.15em]"
              >
                <Calendar className="w-4 h-4" />
                Book Salon Appointment
              </button>
              
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking('academy');
                }}
                className="w-full py-2.5 rounded text-xs font-semibold text-[#f5f5f0] border border-[#d4af37]/50 hover:bg-[#d4af37]/10 flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
              >
                <GraduationCap className="w-4 h-4 text-[#d4af37]" />
                Enroll in Academy Courses
              </button>
            </div>

            {/* Mobile Direct Contacts */}
            <div className="pt-3 border-t border-[#1c1c1f] flex flex-col gap-2 text-xs text-[#a3a39e]">
              <div className="flex items-center justify-between">
                <span>Call Bahir Dar Salon:</span>
                <div className="flex gap-3 text-[#d4af37] font-semibold">
                  <a href={`tel:${BRAND_INFO.phone1}`}>{BRAND_INFO.phone1}</a>
                  <span>•</span>
                  <a href={`tel:${BRAND_INFO.phone2}`}>{BRAND_INFO.phone2}</a>
                </div>
              </div>
              <p className="text-[11px] text-[#71717a]">{BRAND_INFO.location}</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
