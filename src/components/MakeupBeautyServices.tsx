import React, { useState } from 'react';
import { 
  Sparkles, 
  Clock, 
  Check, 
  Calendar, 
  Flame, 
  Heart,
  Eye,
  Smile,
  Crown
} from 'lucide-react';
import { MAKEUP_BEAUTY_SERVICES } from '../data/salonData';
import { ServiceItem } from '../types';

interface MakeupBeautyServicesProps {
  onSelectService: (service: ServiceItem) => void;
}

export const MakeupBeautyServices: React.FC<MakeupBeautyServicesProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Makeup & Beauty' },
    { id: 'bridal', label: 'Bridal & Henna Glam' },
    { id: 'makeup', label: 'Editorial Makeup & Brows' },
    { id: 'nails', label: 'Luxury Nail Lounge' },
    { id: 'skincare', label: 'Facials & Skincare' },
  ];

  const filteredServices = activeCategory === 'all'
    ? MAKEUP_BEAUTY_SERVICES
    : MAKEUP_BEAUTY_SERVICES.filter(item => item.category === activeCategory);

  return (
    <section id="makeup-services" className="py-20 lg:py-28 bg-[#080808] relative">
      {/* Background Accent */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-5xl h-72 bg-[#d4af37]/4 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0e0e10] border border-[#d4af37]/30 text-[11px] font-semibold text-[#d4af37] uppercase tracking-[0.25em]">
            <Sparkles className="w-3.5 h-3.5" />
            Flawless Radiance & Nail Luxury
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#f5f5f0] tracking-tight">
            Professional Makeup, Brow Sculpting, <br />
            <span className="gold-gradient-text">Nail Art & Skincare Facials</span>
          </h2>

          <p className="text-base text-[#a3a39e] font-light">
            Indulge in camera-ready bridal makeup, sculpted brow lamination, Russian gel manicures, and rejuvenating Ethiopian honey facials crafted for every skin tone.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#d4af37] text-[#050505] shadow-md font-bold'
                  : 'bg-[#0e0e10] text-[#a3a39e] border border-white/10 hover:border-[#d4af37]/40 hover:text-[#f5f5f0]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-[#0e0e10] border border-white/10 hover:border-[#d4af37]/60 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl"
            >
              {/* Service Image */}
              <div className="relative h-60 overflow-hidden bg-[#080808]">
                <img 
                  src={service.image} 
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e10] via-[#0e0e10]/20 to-transparent" />

                {service.popular && (
                  <div className="absolute top-3 right-3 bg-[#050505]/90 border border-[#d4af37]/50 text-[#d4af37] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 flex items-center gap-1 shadow-md">
                    <Crown className="w-3 h-3 text-[#d4af37]" />
                    Client Favorite
                  </div>
                )}

                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#f5f5f0] bg-[#050505]/85 px-2.5 py-1 border border-[#d4af37]/30">
                    {service.price}
                  </span>
                  <span className="text-[#e8e8e2] bg-[#050505]/85 px-2.5 py-1 flex items-center gap-1 border border-white/10">
                    <Clock className="w-3 h-3 text-[#d4af37]" />
                    {service.duration}
                  </span>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-serif-luxury text-lg font-bold text-[#f5f5f0] group-hover:text-[#d4af37] transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#a3a39e] leading-relaxed line-clamp-3 font-light">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-1.5 pt-2 border-t border-white/10">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#e8e8e2]">
                      <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Booking Button */}
                <div className="pt-4">
                  <button
                    onClick={() => onSelectService(service)}
                    className="w-full py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-[#f5f5f0] bg-[#141416] border border-white/15 hover:border-[#d4af37] hover:bg-[#d4af37] hover:text-[#050505] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    Book Service
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bridal Party & Group Glam Banner */}
        <div className="mt-16 p-6 sm:p-8 bg-[#0e0e10] border border-[#d4af37]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#d4af37]">
              Special Occasions & Graduations
            </span>
            <h4 className="font-serif-luxury text-xl font-bold text-[#f5f5f0]">
              Bridal Party & Group Beauty Packages Available in Bahir Dar
            </h4>
            <p className="text-xs sm:text-sm text-[#a3a39e] max-w-2xl font-light">
              Book our VIP bridal suite for yourself, bridesmaids, mother of the bride, and flower girls. Includes champagne/coffee service, coordinated Shuruba, and HD photography makeup.
            </p>
          </div>
          <button
            onClick={() => onSelectService(MAKEUP_BEAUTY_SERVICES[0])}
            className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#050505] bg-[#d4af37] hover:bg-[#e5c358] shadow-lg cursor-pointer whitespace-nowrap"
          >
            Inquire Group Glam
          </button>
        </div>

      </div>
    </section>
  );
};
