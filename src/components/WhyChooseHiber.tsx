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
    <section id="why-hiber" className="py-20 lg:py-28 bg-[#f8f6f0] text-[#191919] relative overflow-hidden border-b border-[#e5dfd3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#d4af37]/40 shadow-sm text-[11px] font-semibold text-[#996515] uppercase tracking-[0.25em] rounded-full">
            <Award className="w-3.5 h-3.5 text-[#996515]" />
            The Hiber Distinction
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#18181b] tracking-tight">
            Why Discerning Clients & Students <br />
            <span className="text-[#996515]">Choose Hiber in Bahir Dar</span>
          </h2>

          <p className="text-base text-[#5c5c58] font-normal leading-relaxed">
            We hold ourselves to international luxury standards while preserving Ethiopia's richest botanical traditions. Here is what sets our salon and academy apart.
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6 lg:gap-8">
          {WHY_CHOOSE_HIBER.map((pillar, idx) => (
            <div
              key={idx}
              className="p-3 sm:p-6 lg:p-8 bg-white border border-[#e8e2d8] hover:border-[#bfa15f] hover:shadow-xl transition-all duration-300 rounded-xl sm:rounded-2xl shadow-xs sm:shadow-sm flex flex-col justify-between group"
            >
              <div className="space-y-2 sm:space-y-4">
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#faf7f0] border border-[#dcd4c5] flex items-center justify-center shadow-xs">
                  {iconMap[idx]}
                </div>

                <div className="space-y-1 sm:space-y-2">
                  <h3 className="font-serif-luxury font-bold text-xs sm:text-lg text-[#18181b] group-hover:text-[#996515] transition-colors line-clamp-1 sm:line-clamp-none">
                    {pillar.title}
                  </h3>
                  <p className="text-[10.5px] sm:text-sm text-[#5c5c58] leading-tight sm:leading-relaxed line-clamp-3 sm:line-clamp-none">
                    {pillar.description}
                  </p>
                </div>
              </div>

              <div className="pt-2 sm:pt-4 mt-2 sm:mt-4 border-t border-[#f0ebe1] flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-[#996515] font-bold">
                <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                <span className="truncate">Verified Standard</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
