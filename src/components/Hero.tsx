import React from 'react';
import { 
  Calendar, 
  GraduationCap, 
  MapPin, 
  ArrowRight, 
  ChevronDown,
  Phone,
  Tag,
  Scissors,
  Smile,
  Leaf,
  Crown
} from 'lucide-react';
import { BRAND_INFO } from '../data/salonData';

interface HeroProps {
  onOpenBooking: (type?: 'salon' | 'academy') => void;
  onOpenQuiz: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onOpenBooking, 
  onOpenQuiz 
}) => {
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[85vh] sm:min-h-[88vh] flex items-center justify-center pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-18 overflow-hidden bg-[#050505] text-[#f5f5f0]">
      
      {/* Ambient Lighting & Luxury Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/95 via-[#050505]/80 to-[#050505] z-10 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[580px] lg:w-[720px] h-[340px] sm:h-[580px] lg:h-[720px] bg-[#d4af37]/12 rounded-full blur-[120px] sm:blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[280px] sm:w-[450px] h-[280px] sm:h-[450px] bg-[#bf953f]/8 rounded-full blur-[140px] pointer-events-none" />

      {/* Subtle Cinematic Background Texture */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20 transform scale-105 transition-transform duration-1000"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=85')`
        }}
      />

      {/* Centralized Welcome Container - Starts Directly from Middle Logo */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-6">
        
        {/* 1. Grand Centerpiece Royal Emblem (First Element at Top) */}
        <div className="flex flex-col items-center justify-center">
          
          {/* Clean Official Emblem */}
          <div className="relative w-32 h-32 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-60 lg:h-60 rounded-full overflow-hidden select-none">
            <img 
              src={BRAND_INFO.logoUrl} 
              alt="Hiber Beauty Salon & Academy Official Emblem" 
              className="w-full h-full object-cover scale-115 rounded-full pointer-events-none"
              referrerPolicy="no-referrer"
            />
          </div>

        </div>

        {/* 2. Main Centered Typography Hierarchy */}
        <div className="space-y-2 sm:space-y-2.5 max-w-3xl mx-auto">
          
          {/* Amharic Master Name */}
          <h2 className="text-base sm:text-xl md:text-2xl font-serif-luxury font-bold text-[#d4af37] tracking-wide">
            {BRAND_INFO.amharicTagline}
          </h2>

          {/* English Luxury Headline */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif-luxury font-bold text-[#f5f5f0] leading-[1.15] sm:leading-[1.1] tracking-tight break-words">
            HIBER BEAUTY SALON <br className="hidden sm:inline" />
            <span className="gold-gradient-text">& ACADEMY</span>
          </h1>

          {/* Location & Sanctuary Tag */}
          <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#121214]/90 border border-[#d4af37]/40 shadow-sm backdrop-blur-md mt-1">
            <span className="text-[10px] sm:text-xs font-semibold text-[#f5f5f0] tracking-[0.2em] uppercase">
              Bahir Dar's Premier Sanctuary & Master Academy
            </span>
          </div>

          {/* Balanced Concise Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-[#d1ceca] font-normal leading-relaxed max-w-2xl mx-auto px-2 sm:px-0 pt-1">
            Welcome to Bahir Dar's premier sanctuary for royal Ethiopian hair styling, organic scalp spa therapies, VIP bridal glam, and accredited vocational diplomas.
          </p>

        </div>

        {/* 3. Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3.5 max-w-xl mx-auto pt-1">
          
          {/* Primary: Book Salon */}
          <button
            onClick={() => onOpenBooking('salon')}
            className="w-full sm:w-auto px-6 py-3 font-serif-luxury font-bold text-xs sm:text-sm text-[#050505] bg-[#d4af37] hover:bg-[#e5c358] shadow-[0_0_20px_rgba(212,175,55,0.35)] transition-all flex items-center justify-center gap-2 uppercase tracking-[0.14em] rounded-xl cursor-pointer group"
          >
            <Calendar className="w-4 h-4" />
            Book Salon Visit
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Secondary: Explore Price Guide */}
          <button
            onClick={() => scrollToSection('price-explorer')}
            className="w-full sm:w-auto px-5 py-3 font-semibold text-xs sm:text-sm text-[#f5f5f0] bg-[#121214] border border-[#d4af37]/50 hover:bg-[#d4af37]/15 hover:border-[#d4af37] transition-all flex items-center justify-center gap-2 rounded-xl cursor-pointer uppercase tracking-[0.12em]"
          >
            <Tag className="w-4 h-4 text-[#d4af37]" />
            Price Guide & Rates
          </button>

          {/* Tertiary: Academy Diplomas */}
          <button
            onClick={() => scrollToSection('academy')}
            className="w-full sm:w-auto px-5 py-3 font-semibold text-xs sm:text-sm text-[#d1ceca] hover:text-white bg-transparent border border-white/15 hover:border-white/40 transition-all flex items-center justify-center gap-2 rounded-xl cursor-pointer uppercase tracking-[0.12em]"
          >
            <GraduationCap className="w-4 h-4 text-[#d4af37]" />
            Academy Courses
          </button>

        </div>

        {/* 4. Quick Category Jump Discovery Pills */}
        <div className="pt-1 sm:pt-2">
          <p className="text-[10px] sm:text-[11px] font-semibold text-[#8c8c88] uppercase tracking-[0.2em] mb-2 sm:mb-2.5">
            Quickly Explore By Category
          </p>

          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 max-w-3xl mx-auto">
            
            <button
              onClick={() => scrollToSection('hair-services')}
              className="px-3 py-1.5 rounded-full bg-[#141416] border border-white/10 hover:border-[#d4af37] text-xs text-[#e8e8e2] hover:text-[#d4af37] transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Scissors className="w-3.5 h-3.5 text-[#d4af37]" />
              Hair & Shuruba Braids
            </button>

            <button
              onClick={() => scrollToSection('botanicals')}
              className="px-3 py-1.5 rounded-full bg-[#141416] border border-white/10 hover:border-[#d4af37] text-xs text-[#e8e8e2] hover:text-[#d4af37] transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Leaf className="w-3.5 h-3.5 text-[#d4af37]" />
              Botanical Scalp Spa
            </button>

            <button
              onClick={() => scrollToSection('makeup-services')}
              className="px-3 py-1.5 rounded-full bg-[#141416] border border-white/10 hover:border-[#d4af37] text-xs text-[#e8e8e2] hover:text-[#d4af37] transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Smile className="w-3.5 h-3.5 text-[#d4af37]" />
              Makeup & Nails
            </button>

            <button
              onClick={() => scrollToSection('bridal-packages')}
              className="px-3 py-1.5 rounded-full bg-[#141416] border border-white/10 hover:border-[#d4af37] text-xs text-[#e8e8e2] hover:text-[#d4af37] transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Crown className="w-3.5 h-3.5 text-[#d4af37]" />
              VIP Bridal Packages
            </button>

            <button
              onClick={onOpenQuiz}
              className="px-3 py-1.5 rounded-full bg-[#141416] border border-[#d4af37]/40 hover:border-[#d4af37] text-xs text-[#d4af37] hover:bg-[#d4af37]/10 transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              Free Hair Diagnosis Quiz
            </button>

          </div>
        </div>

        {/* 5. Minimalist Centered Location & Contact Strip */}
        <div className="pt-3 sm:pt-4 border-t border-white/10 max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-[11px] sm:text-xs text-[#a3a39e]">
          
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
            Kebele 4, Friendship Bldg 2nd Fl (In front of St. George)
          </span>

          <span className="hidden md:inline text-white/20">•</span>

          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
            4.9 / 5.0 Rating (850+ Clients)
          </span>

          <span className="hidden md:inline text-white/20">•</span>

          <a 
            href={`tel:${BRAND_INFO.phone1}`} 
            className="flex items-center gap-1.5 text-[#d4af37] font-semibold hover:underline"
          >
            <Phone className="w-3.5 h-3.5" />
            {BRAND_INFO.phone1} / {BRAND_INFO.phone2}
          </a>

        </div>

        {/* 6. Subtle Scroll Down Trigger */}
        <div className="pt-1">
          <button 
            onClick={() => scrollToSection('about')}
            className="inline-flex flex-col items-center gap-1 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#8c8c88] hover:text-[#d4af37] transition-colors cursor-pointer"
          >
            <span>Explore Sanctuary & Services</span>
            <ChevronDown className="w-3.5 h-3.5 animate-bounce text-[#d4af37]" />
          </button>
        </div>

      </div>
    </section>
  );
};
