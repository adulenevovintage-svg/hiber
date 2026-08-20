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
    <section className="py-20 lg:py-28 bg-[#fdfaf5] text-[#191919] relative overflow-hidden border-b border-[#e9dfd1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#d4af37]/40 shadow-sm text-[11px] font-semibold text-[#996515] uppercase tracking-[0.25em] rounded-full">
            <Star className="w-3.5 h-3.5 text-[#996515] fill-[#996515]" />
            Verified Words of Praise
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#18181b] tracking-tight">
            Loved by Brides, Clients & <br />
            <span className="text-[#996515]">Academy Graduates Nationwide</span>
          </h2>

          <p className="text-base text-[#5c5c58] font-normal leading-relaxed">
            Read real stories from our clients who found their signature beauty confidence and academy students who launched successful independent careers.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 sm:gap-2.5 mb-12 flex-wrap">
          {[
            { id: 'all', label: 'All Reviews' },
            { id: 'bride', label: 'Bridal Reviews' },
            { id: 'client', label: 'Salon Clients' },
            { id: 'graduate', label: 'Academy Alumni' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold transition-all rounded-full cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-[#18181b] text-[#f5f5f0] shadow-md font-bold'
                  : 'bg-white text-[#6b6b66] border border-[#ded7cc] hover:border-[#996515]/60 hover:text-[#18181b] shadow-xs'
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
              className="p-6 sm:p-8 bg-white border border-[#e8e2d8] hover:border-[#bfa15f] hover:shadow-xl transition-all rounded-2xl shadow-sm flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Stars & Role */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#d4af37] fill-[#d4af37]" />
                    ))}
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 bg-[#f5f1ea] text-[#996515] border border-[#dcd4c5] rounded">
                    {item.role}
                  </span>
                </div>

                {/* Review Text */}
                <p className="font-editorial italic text-base sm:text-lg text-[#2d2d2a] leading-relaxed">
                  "{item.content}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-[#f0ebe1] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full overflow-hidden border border-[#d4af37]/60 shadow-xs">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif-luxury font-bold text-sm text-[#18181b] flex items-center gap-1.5">
                      {item.name}
                      {item.verified && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#16a34a]" />
                      )}
                    </h4>
                    <p className="text-xs text-[#6b6b66]">
                      {item.service}
                    </p>
                  </div>
                </div>

                <span className="text-[11px] text-[#8c8c88] uppercase font-medium">
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
