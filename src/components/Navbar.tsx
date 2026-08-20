import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  GraduationCap, 
  Menu, 
  X, 
  Sparkles, 
  ChevronRight,
  Phone
} from 'lucide-react';
import { BRAND_INFO } from '../data/salonData';

interface NavbarProps {
  onOpenBooking: (type?: 'salon' | 'academy', itemId?: string) => void;
  onOpenQuiz: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenBooking, 
  onOpenQuiz 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', targetId: 'about' },
    { name: 'Hair & Braids', targetId: 'hair-services' },
    { name: 'Makeup & Nails', targetId: 'makeup-services' },
    { name: 'Botanical Hair Spa', targetId: 'botanicals' },
    { name: 'Bridal & VIP', targetId: 'bridal-packages' },
    { name: 'Academy', targetId: 'academy', highlight: true },
    { name: 'Price Guide', targetId: 'price-explorer' },
    { name: 'Contact & Location', targetId: 'contact-location' },
  ];

  const scrollToTarget = (targetId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-400 transform ${
        isScrolled 
          ? 'translate-y-0 opacity-100 shadow-md' 
          : '-translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      {/* Luxury Navigation Bar (Appears on Scroll) */}
      <div className="bg-white/95 backdrop-blur-md px-4 sm:px-6 lg:px-8 border-b border-[#e5dfd3] py-2.5 sm:py-3 text-[#18181b]">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Typographic Brand Wordmark */}
          <button 
            onClick={scrollToTop} 
            className="flex flex-col justify-center text-left cursor-pointer group shrink-0"
          >
            <span className="font-serif-luxury font-bold text-xl sm:text-2xl tracking-wider text-[#18181b] uppercase group-hover:text-[#996515] transition-colors leading-none">
              HIBER
            </span>
            <span className="text-[8.5px] sm:text-[9.5px] uppercase tracking-[0.24em] text-[#996515] font-bold mt-0.5 whitespace-nowrap">
              Beauty Salon & Academy
            </span>
          </button>

          {/* Desktop Smooth Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1.5 lg:gap-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToTarget(link.targetId)}
                className={`text-[11.5px] lg:text-xs tracking-[0.08em] uppercase font-semibold transition-all px-3 py-1.5 rounded-full whitespace-nowrap cursor-pointer ${
                  link.highlight
                    ? 'text-[#996515] bg-[#f8f1e2] border border-[#d4af37]/60 hover:bg-[#ede2c8]'
                    : 'text-[#4a4a46] hover:text-[#18181b] hover:bg-[#ede6d8]'
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Action CTAs & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={() => onOpenBooking('academy')}
              className="hidden sm:flex px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#18181b] border border-[#d4af37] hover:bg-[#faf4e6] transition-all items-center gap-1.5 cursor-pointer whitespace-nowrap rounded-lg shadow-xs"
            >
              <GraduationCap className="w-3.5 h-3.5 text-[#996515]" />
              Academy
            </button>

            <button
              onClick={() => onOpenBooking('salon')}
              className="px-3.5 sm:px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#050505] bg-[#d4af37] hover:bg-[#e5c358] transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap rounded-lg shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>

            {/* Mobile / Tablet Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#faf7f2] border border-[#dcd4c5] text-[#18181b] hover:text-[#996515] transition-colors xl:hidden shrink-0 cursor-pointer pointer-events-auto"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Slide-Down Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white/98 backdrop-blur-xl border-b border-[#e5ded2] px-6 py-6 transition-all shadow-2xl pointer-events-auto">
          <div className="flex flex-col space-y-4">
            
            <div className="pb-3 border-b border-[#f0ebe1] flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.2em] text-[#71716e] font-bold">
                Navigation & Services
              </span>
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuiz();
                }} 
                className="text-xs text-[#996515] flex items-center gap-1 font-bold"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#996515]" />
                Hair Quiz
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToTarget(link.targetId)}
                  className={`text-xs font-semibold py-2.5 px-3.5 rounded-xl transition-colors flex items-center justify-between uppercase tracking-wider text-left cursor-pointer ${
                    link.highlight
                      ? 'text-[#996515] bg-[#fbf6eb] border border-[#d4af37]/60'
                      : 'text-[#2d2d2a] bg-[#faf7f2] hover:bg-[#ede6d8]'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#996515]" />
                </button>
              ))}
            </div>

            {/* Mobile Action Buttons */}
            <div className="pt-4 border-t border-[#f0ebe1] space-y-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking('salon');
                }}
                className="w-full py-3 rounded-xl text-xs font-bold text-[#050505] bg-[#d4af37] shadow-sm flex items-center justify-center gap-2 cursor-pointer uppercase tracking-[0.15em]"
              >
                <Calendar className="w-4 h-4" />
                Book Salon Appointment
              </button>
              
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking('academy');
                }}
                className="w-full py-2.5 rounded-xl text-xs font-bold text-[#18181b] border border-[#d4af37] hover:bg-[#faf4e6] flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
              >
                <GraduationCap className="w-4 h-4 text-[#996515]" />
                Enroll in Academy Courses
              </button>
            </div>

            {/* Mobile Direct Contacts */}
            <div className="pt-3 border-t border-[#f0ebe1] flex flex-col gap-1.5 text-xs text-[#5c5c58]">
              <div className="flex items-center justify-between">
                <span>Call Bahir Dar Salon:</span>
                <div className="flex gap-3 text-[#996515] font-bold">
                  <a href={`tel:${BRAND_INFO.phone1}`}>{BRAND_INFO.phone1}</a>
                  <span>•</span>
                  <a href={`tel:${BRAND_INFO.phone2}`}>{BRAND_INFO.phone2}</a>
                </div>
              </div>
              <p className="text-[11px] text-[#71716e]">{BRAND_INFO.location}</p>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};
