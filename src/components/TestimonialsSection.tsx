import React, { useState } from 'react';
import { 
  Star, 
  Quote, 
  CheckCircle2, 
  Sparkles, 
  GraduationCap, 
  Crown,
  Heart
} from 'lucide-react';
import { TESTIMONIALS } from '../data/salonData';

export const TestimonialsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredReviews = activeFilter === 'all'
    ? TESTIMONIALS
    : TESTIMONIALS.filter(t => t.role.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <section className="py-20 lg:py-28 bg-[#050505] relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#d4af37]/4 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0e0e10] border border-[#d4af37]/30 text-[11px] font-semibold text-[#d4af37] uppercase tracking-[0.25em]">
            <Star className="w-3.5 h-3.5 text-[#d4af37] fill-[#d4af37]" />
            Verified Words of Praise
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#f5f5f0] tracking-tight">
            Loved by Brides, Clients & <br />
            <span className="gold-gradient-text">Academy Graduates Nationwide</span>
          </h2>

          <p className="text-base text-[#a3a39e] font-light leading-relaxed">
            Read real stories from our clients who found their signature beauty confidence and academy students who launched successful independent careers.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {[
            { id: 'all', label: 'All Reviews' },
            { id: 'bride', label: 'Bridal Reviews' },
            { id: 'client', label: 'Salon Clients' },
            { id: 'graduate', label: 'Academy Alumni' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-[#d4af37] text-[#050505] shadow-md font-bold'
                  : 'bg-[#0e0e10] text-[#a3a39e] border border-white/10 hover:border-[#d4af37]/40 hover:text-[#f5f5f0]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredReviews.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 bg-[#0e0e10] border border-white/10 hover:border-[#d4af37]/50 transition-all flex flex-col justify-between shadow-xl space-y-6"
            >
              <div className="space-y-4">
                {/* Stars & Role */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#d4af37] fill-[#d4af37]" />
                    ))}
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 bg-[#d4af37]/15 text-[#d4af37] border border-[#d4af37]/30">
                    {item.role}
                  </span>
                </div>

                {/* Review Text */}
                <p className="font-editorial italic text-base sm:text-lg text-[#e8e8e2] leading-relaxed">
                  "{item.content}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full overflow-hidden border border-[#d4af37]/50">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif-luxury font-bold text-sm text-[#f5f5f0] flex items-center gap-1.5">
                      {item.name}
                      {item.verified && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#22c55e]" />
                      )}
                    </h4>
                    <p className="text-xs text-[#a3a39e]">
                      {item.service}
                    </p>
                  </div>
                </div>

                <span className="text-[11px] text-[#71716e] uppercase">
                  {item.date}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
