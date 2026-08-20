import React from 'react';
import { 
  Sparkles, 
  Award, 
  MapPin, 
  Users, 
  ShieldCheck, 
  Heart,
  CheckCircle2
} from 'lucide-react';
import { WHY_CHOOSE_HIBER } from '../data/salonData';

export const WhyChooseHiber: React.FC = () => {
  const iconMap = [
    <Sparkles className="w-5 h-5 text-[#d4af37]" />,
    <Award className="w-5 h-5 text-[#d4af37]" />,
    <MapPin className="w-5 h-5 text-[#d4af37]" />,
    <Users className="w-5 h-5 text-[#d4af37]" />,
    <ShieldCheck className="w-5 h-5 text-[#d4af37]" />,
    <Heart className="w-5 h-5 text-[#d4af37]" />,
  ];

  return (
    <section id="why-hiber" className="py-20 lg:py-28 bg-[#080808] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-96 bg-[#d4af37]/4 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0e0e10] border border-[#d4af37]/30 text-[11px] font-semibold text-[#d4af37] uppercase tracking-[0.25em]">
            <Award className="w-3.5 h-3.5 text-[#d4af37]" />
            The Hiber Distinction
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#f5f5f0] tracking-tight">
            Why Discerning Clients & Students <br />
            <span className="gold-gradient-text">Choose Hiber in Bahir Dar</span>
          </h2>

          <p className="text-base text-[#a3a39e] font-light leading-relaxed">
            We hold ourselves to international luxury standards while preserving Ethiopia's richest botanical traditions. Here is what sets our salon and academy apart.
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {WHY_CHOOSE_HIBER.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 bg-[#0e0e10] border border-white/10 hover:border-[#d4af37]/60 transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#050505] border border-[#d4af37]/40 flex items-center justify-center shadow-md">
                  {iconMap[idx]}
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif-luxury font-bold text-lg text-[#f5f5f0] group-hover:text-[#d4af37] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#a3a39e] leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10 flex items-center gap-2 text-xs text-[#d4af37] font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Hiber Standard</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
