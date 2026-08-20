import React from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Instagram, 
  Sparkles, 
  GraduationCap, 
  Award, 
  Heart,
  ChevronRight,
  Send
} from 'lucide-react';
import { BRAND_INFO } from '../data/salonData';

interface FooterProps {
  onOpenBooking: (type?: 'salon' | 'academy') => void;
  onOpenQuiz: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenQuiz }) => {
  return (
    <footer className="bg-[#050505] border-t border-[#d4af37]/25 text-[#a3a39e] relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-48 bg-[#d4af37]/4 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Identity & Circular Logo */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3.5 sm:gap-4 group">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-full border-2 border-[#d4af37] bg-[#050505] p-0.5 shadow-sm group-hover:border-[#f3e5ab] transition-all duration-300">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#0e0e10] flex items-center justify-center">
                  <img 
                    src="https://cdn.phototourl.com/free/2026-08-20-a9185eaf-ea0f-49bc-822e-833cb3bae4f5.jpg" 
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
              Bahir Dar's premier destination for luxury hair styling, authentic botanical hair regrowth therapies, imperial bridal artistry, and accredited professional beauty academy diplomas.
            </p>

            {/* Social Media Channels Prominently Highlighted */}
            <div className="space-y-2 pt-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#f5f5f0] block">
                Official Social Media Channels:
              </span>

              {/* Instagram */}
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2.5 p-2.5 bg-[#0e0e10] border border-white/10 hover:border-[#d4af37] text-xs text-[#e8e8e2] hover:text-[#d4af37] transition-all group"
              >
                <div className="w-7 h-7 bg-gradient-to-tr from-[#f59e0b] to-[#ec4899] flex items-center justify-center text-white shrink-0">
                  <Instagram className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-[#71716e]">Instagram</span>
                  <span className="font-semibold">{BRAND_INFO.instagram}</span>
                </div>
              </a>

              {/* TikTok */}
              <a 
                href="https://tiktok.com" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2.5 p-2.5 bg-[#0e0e10] border border-white/10 hover:border-[#d4af37] text-xs text-[#e8e8e2] hover:text-[#d4af37] transition-all group"
              >
                <div className="w-7 h-7 bg-[#000000] border border-white/20 flex items-center justify-center text-white shrink-0 font-bold text-xs">
                  TT
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-[#71716e]">TikTok</span>
                  <span className="font-semibold">{BRAND_INFO.tiktok}</span>
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
              <li><a href="#hair-services" className="hover:text-[#d4af37] transition-colors">Braiding & Shuruba</a></li>
              <li><a href="#hair-services" className="hover:text-[#d4af37] transition-colors">Silk Press & Styling</a></li>
              <li><a href="#makeup-services" className="hover:text-[#d4af37] transition-colors">Bridal Melse Glam</a></li>
              <li><a href="#makeup-services" className="hover:text-[#d4af37] transition-colors">Gel & Acrylic Nails</a></li>
              <li><a href="#botanicals" className="hover:text-[#d4af37] transition-colors">14 Botanical Super-Oils</a></li>
              <li><a href="#hair-growth" className="hover:text-[#d4af37] transition-colors">Edge Regrowth Steam</a></li>
              <li><a href="#bridal-packages" className="hover:text-[#d4af37] transition-colors">Luxury Packages</a></li>
            </ul>
          </div>

          {/* Academy Courses Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif-luxury font-bold text-sm text-[#f5f5f0] uppercase tracking-wider flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-[#d4af37]" />
              Beauty Academy
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#academy" className="hover:text-[#d4af37] transition-colors">Master Makeup Artistry (3 Mos)</a></li>
              <li><a href="#academy" className="hover:text-[#d4af37] transition-colors">Master Hairstyling & Cuts (4 Mos)</a></li>
              <li><a href="#academy" className="hover:text-[#d4af37] transition-colors">Traditional Braiding & Shuruba</a></li>
              <li><a href="#academy" className="hover:text-[#d4af37] transition-colors">Natural Product Formulation</a></li>
              <li><a href="#academy" className="hover:text-[#d4af37] transition-colors">Nail Technology & Esthetics</a></li>
              <li><a href="#academy" className="hover:text-[#d4af37] transition-colors">Summer Intensive Bootcamps</a></li>
              <li><a href="#gallery" className="hover:text-[#d4af37] transition-colors">Graduate Ceremony Showcase</a></li>
            </ul>
          </div>

          {/* Direct Contacts & Location Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif-luxury font-bold text-sm text-[#f5f5f0] uppercase tracking-wider">
              Bahir Dar Location & Contacts
            </h4>
            
            <div className="space-y-3 text-xs">
              {/* Address */}
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span className="text-[#e8e8e2] leading-relaxed">
                  {BRAND_INFO.location}
                </span>
              </div>

              {/* Phones Prominently Listed */}
              <div className="p-3 bg-[#0e0e10] border border-[#d4af37]/40 space-y-1.5">
                <span className="text-[10px] uppercase font-bold text-[#d4af37] tracking-wider block">
                  Official Hotline Contacts
                </span>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                  <a href={`tel:${BRAND_INFO.phone1}`} className="font-bold text-[#f5f5f0] hover:text-[#d4af37] text-sm">
                    {BRAND_INFO.phone1}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                  <a href={`tel:${BRAND_INFO.phone2}`} className="font-bold text-[#f5f5f0] hover:text-[#d4af37] text-sm">
                    {BRAND_INFO.phone2}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-2 text-[#a3a39e]">
                <Clock className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>{BRAND_INFO.hours}</span>
              </div>
            </div>

            {/* Quick Action Button */}
            <div className="pt-2">
              <button
                onClick={() => onOpenBooking('salon')}
                className="w-full py-2.5 text-xs font-bold uppercase tracking-wider text-[#050505] bg-[#d4af37] hover:brightness-110 shadow-md cursor-pointer transition-all"
              >
                Book Appointment Online
              </button>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & Accreditation */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71716e]">
          <p>© {new Date().getFullYear()} HIBER BEAUTY SALON & ACADEMY. All rights reserved. Bahir Dar, Ethiopia.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-[#d4af37]">
              <Award className="w-3.5 h-3.5" />
              Government-Accredited Academy
            </span>
            <span>•</span>
            <button onClick={onOpenQuiz} className="hover:text-[#d4af37] cursor-pointer">
              Hair Diagnosis
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
