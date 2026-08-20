import React from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Instagram, 
  Sparkles, 
  GraduationCap, 
  Send,
  ArrowUp
} from 'lucide-react';
import { BRAND_INFO } from '../data/salonData';

interface FooterProps {
  onOpenBooking: (type?: 'salon' | 'academy') => void;
  onOpenQuiz: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenQuiz }) => {
  const scrollToTarget = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#121214] text-[#d1ceca] relative overflow-hidden border-t border-[#d4af37]/30">
      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-48 bg-[#d4af37]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Identity & Circular Logo */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3.5 sm:gap-4 group">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-full border-2 border-[#d4af37] bg-white p-0.5 shadow-sm group-hover:border-[#f3e5ab] transition-all duration-300">
                <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center">
                  <img 
                    src={BRAND_INFO.logoUrl} 
                    alt="Hiber Beauty Salon & Academy Official Logo" 
                    className="w-full h-full object-cover rounded-full transform transition-transform duration-500 ease-out group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <div>
                <h3 className="font-serif-luxury font-bold text-xl sm:text-2xl text-[#f5f5f0] tracking-wider uppercase group-hover:text-[#d4af37] transition-colors leading-tight">
                  Hiber
                </h3>
                <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#d4af37] font-semibold mt-0.5">
                  Beauty Salon & Academy
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#a3a39e] leading-relaxed font-light">
              Bahir Dar's premier sanctuary for luxury hair styling, authentic botanical scalp therapies, imperial bridal artistry, and accredited vocational beauty diplomas.
            </p>

            {/* Social Media Channels */}
            <div className="space-y-2 pt-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#f5f5f0] block">
                Official Social Media Channels:
              </span>

              {/* Instagram */}
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2.5 p-2.5 bg-[#1a1a1d] border border-white/10 hover:border-[#d4af37] text-xs text-[#e8e8e2] hover:text-[#d4af37] transition-all rounded-xl group"
              >
                <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white shrink-0 shadow-xs">
                  <Instagram className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-[11px] leading-tight">Instagram @hiber_salon_bahirdar</span>
                  <span className="text-[10px] text-[#8c8c88]">Daily Bridal Transformations & Clips</span>
                </div>
              </a>

              {/* Telegram */}
              <a 
                href="https://t.me" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2.5 p-2.5 bg-[#1a1a1d] border border-white/10 hover:border-[#d4af37] text-xs text-[#e8e8e2] hover:text-[#d4af37] transition-all rounded-xl group"
              >
                <div className="w-7 h-7 rounded-lg bg-[#229ED9] flex items-center justify-center text-white shrink-0 shadow-xs">
                  <Send className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-[11px] leading-tight">Telegram @hiberbeautyacademy</span>
                  <span className="text-[10px] text-[#8c8c88]">Academy Admissions & Registration</span>
                </div>
              </a>

              {/* TikTok */}
              <a 
                href="https://tiktok.com" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2.5 p-2.5 bg-[#1a1a1d] border border-white/10 hover:border-[#d4af37] text-xs text-[#e8e8e2] hover:text-[#d4af37] transition-all rounded-xl group"
              >
                <div className="w-7 h-7 rounded-lg bg-[#000000] border border-white/20 flex items-center justify-center text-white shrink-0 shadow-xs">
                  <span className="font-bold text-xs tracking-tighter">TT</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-[11px] leading-tight">TikTok @hiberbeautysalon</span>
                  <span className="text-[10px] text-[#8c8c88]">Tutorials, Silk Presses & Shuruba</span>
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif-luxury font-bold text-sm text-[#f5f5f0] uppercase tracking-wider">
              Salon Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => scrollToTarget('hair-services')} className="hover:text-[#d4af37] transition-colors cursor-pointer text-left">
                  Braiding & Shuruba
                </button>
              </li>
              <li>
                <button onClick={() => scrollToTarget('hair-services')} className="hover:text-[#d4af37] transition-colors cursor-pointer text-left">
                  Silk Press & Styling
                </button>
              </li>
              <li>
                <button onClick={() => scrollToTarget('makeup-services')} className="hover:text-[#d4af37] transition-colors cursor-pointer text-left">
                  Bridal Melse Glam
                </button>
              </li>
              <li>
                <button onClick={() => scrollToTarget('makeup-services')} className="hover:text-[#d4af37] transition-colors cursor-pointer text-left">
                  Gel & Acrylic Nails
                </button>
              </li>
              <li>
                <button onClick={() => scrollToTarget('botanicals')} className="hover:text-[#d4af37] transition-colors cursor-pointer text-left">
                  14 Botanical Super-Oils
                </button>
              </li>
              <li>
                <button onClick={() => scrollToTarget('bridal-packages')} className="hover:text-[#d4af37] transition-colors cursor-pointer text-left">
                  VIP Bridal Packages
                </button>
              </li>
              <li>
                <button onClick={() => scrollToTarget('price-explorer')} className="hover:text-[#d4af37] transition-colors cursor-pointer text-left text-[#d4af37] font-semibold">
                  Complete Price Guide
                </button>
              </li>
            </ul>
          </div>

          {/* Academy Courses Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif-luxury font-bold text-sm text-[#f5f5f0] uppercase tracking-wider flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-[#d4af37]" />
              Beauty Academy
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => scrollToTarget('academy')} className="hover:text-[#d4af37] transition-colors cursor-pointer text-left">
                  Master Makeup Artistry (3 Mos)
                </button>
              </li>
              <li>
                <button onClick={() => scrollToTarget('academy')} className="hover:text-[#d4af37] transition-colors cursor-pointer text-left">
                  Master Hairstyling & Cuts (4 Mos)
                </button>
              </li>
              <li>
                <button onClick={() => scrollToTarget('academy')} className="hover:text-[#d4af37] transition-colors cursor-pointer text-left">
                  Traditional Braiding & Shuruba
                </button>
              </li>
              <li>
                <button onClick={() => scrollToTarget('academy')} className="hover:text-[#d4af37] transition-colors cursor-pointer text-left">
                  Natural Formulation & Scalp Care
                </button>
              </li>
              <li>
                <button onClick={() => scrollToTarget('academy')} className="hover:text-[#d4af37] transition-colors cursor-pointer text-left">
                  Nail Technology & Esthetics
                </button>
              </li>
              <li>
                <button onClick={() => scrollToTarget('academy')} className="hover:text-[#d4af37] transition-colors cursor-pointer text-left">
                  Summer Intensive Bootcamps
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Contacts & Location Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif-luxury font-bold text-sm text-[#f5f5f0] uppercase tracking-wider">
              Visit Sanctuary & Salon
            </h4>
            
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2 text-[#a3a39e]">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>{BRAND_INFO.location}</span>
              </div>

              <div className="flex items-center gap-2 text-[#a3a39e]">
                <Clock className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>{BRAND_INFO.hours}</span>
              </div>

              <div className="pt-2 space-y-1.5">
                <span className="text-[11px] font-bold text-[#f5f5f0] uppercase tracking-wider block">
                  Direct Hotlines:
                </span>
                <div className="flex flex-col gap-1">
                  <a 
                    href={`tel:${BRAND_INFO.phone1}`} 
                    className="flex items-center gap-2 text-[#d4af37] font-semibold text-sm hover:underline"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    {BRAND_INFO.phone1}
                  </a>
                  <a 
                    href={`tel:${BRAND_INFO.phone2}`} 
                    className="flex items-center gap-2 text-[#d4af37] font-semibold text-sm hover:underline"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    {BRAND_INFO.phone2}
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenBooking('salon')}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-[0.14em] text-[#050505] bg-[#d4af37] hover:bg-[#e5c358] transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Book Appointment Now
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Rights Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8c8c88]">
          <p>© {new Date().getFullYear()} Hiber Beauty Salon & Academy. All Rights Reserved. Bahir Dar, Ethiopia.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <button onClick={() => onOpenQuiz()} className="hover:text-[#d4af37] transition-colors cursor-pointer">
              Hair Quiz
            </button>
            <span>•</span>
            <button onClick={() => scrollToTarget('price-explorer')} className="hover:text-[#d4af37] transition-colors cursor-pointer">
              Price Guide
            </button>
            <span>•</span>
            <button onClick={() => scrollToTarget('contact-location')} className="hover:text-[#d4af37] transition-colors cursor-pointer">
              Contact & Map
            </button>
            <span>•</span>
            <button 
              onClick={scrollToTop} 
              className="hover:text-[#d4af37] transition-colors cursor-pointer flex items-center gap-1 font-bold text-[#d4af37]"
              title="Back to Top of Page"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
