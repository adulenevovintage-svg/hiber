import React, { useState } from 'react';
import { 
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
    <section id="makeup-services" className="py-14 sm:py-20 lg:py-28 bg-[#f5f2eb] text-[#1a1a1a] relative border-b border-[#e2dacf]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#d4af37]/40 shadow-sm text-[11px] font-semibold text-[#996515] uppercase tracking-[0.25em] rounded-full">
            <Smile className="w-3.5 h-3.5" />
            Flawless Radiance & Nail Luxury
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#18181b] tracking-tight">
            Professional Makeup, Brow Sculpting, <br />
            <span className="text-[#996515]">Nail Art & Skincare Facials</span>
          </h2>

          <p className="text-xs sm:text-base text-[#5c5c58] font-normal leading-relaxed px-2 sm:px-0">
            Indulge in camera-ready bridal makeup, sculpted brow lamination, Russian gel manicures, and rejuvenating Ethiopian honey facials crafted for every skin tone.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center flex-wrap gap-1.5 sm:gap-2.5 mb-8 sm:mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 text-[10.5px] sm:text-xs uppercase tracking-wider font-semibold transition-all rounded-full cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#18181b] text-[#f5f5f0] shadow-md font-bold'
                  : 'bg-white text-[#6b6b66] border border-[#ded7cc] hover:border-[#996515]/60 hover:text-[#18181b] shadow-xs'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Service Cards - 2 per row on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6 lg:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-white border border-[#e8e2d8] hover:border-[#bfa15f] hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden flex flex-col justify-between shadow-xs sm:shadow-sm"
            >
              {/* Service Image */}
              <div className="relative h-32 sm:h-52 lg:h-60 overflow-hidden bg-[#f0ede6]">
                <img 
                  src={service.image} 
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {service.popular && (
                  <div className="absolute top-1.5 sm:top-3 right-1.5 sm:right-3 bg-[#18181b]/95 border border-[#d4af37]/60 text-[#d4af37] text-[8.5px] sm:text-[10px] font-bold uppercase tracking-wider px-1.5 sm:px-2.5 py-0.5 sm:py-1 flex items-center gap-1 rounded shadow-md backdrop-blur-xs">
                    <Crown className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#d4af37]" />
                    <span className="hidden xs:inline sm:inline">Favorite</span>
                  </div>
                )}

                <div className="absolute bottom-1.5 sm:bottom-3 left-1.5 sm:left-4 right-1.5 sm:right-4 flex items-center justify-between text-[9.5px] sm:text-xs">
                  <span className="font-bold text-[#18181b] bg-white/95 px-1.5 sm:px-3 py-0.5 sm:py-1 rounded sm:rounded-md shadow-xs sm:shadow-sm border border-[#d4af37]/30 whitespace-nowrap">
                    {service.price}
                  </span>
                  <span className="text-white bg-black/75 backdrop-blur-xs px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded sm:rounded-md flex items-center gap-1 whitespace-nowrap">
                    <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#d4af37]" />
                    {service.duration}
                  </span>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-2.5 sm:p-5 lg:p-6 space-y-2 sm:space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-1 sm:space-y-2">
                  <h3 className="font-serif-luxury text-xs sm:text-base lg:text-lg font-bold text-[#18181b] group-hover:text-[#996515] transition-colors line-clamp-1 sm:line-clamp-none">
                    {service.name}
                  </h3>
                  <p className="text-[10.5px] sm:text-xs lg:text-sm text-[#5c5c58] leading-tight sm:leading-relaxed line-clamp-2 sm:line-clamp-3">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-1 sm:space-y-2 pt-2 sm:pt-3 border-t border-[#f0ebe1]">
                  {service.features.slice(0, 2).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs text-[#42423e]">
                      <Check className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-[#996515] shrink-0" />
                      <span className="truncate">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Booking Button */}
                <div className="pt-2 sm:pt-4">
                  <button
                    onClick={() => onSelectService(service)}
                    className="w-full py-1.5 sm:py-2.5 text-[10px] sm:text-xs font-bold uppercase tracking-[0.1em] sm:tracking-[0.15em] text-[#18181b] bg-[#f5f1ea] border border-[#dcd4c5] hover:border-[#18181b] hover:bg-[#18181b] hover:text-[#f5f5f0] rounded sm:rounded-lg transition-all flex items-center justify-center gap-1 sm:gap-2 cursor-pointer shadow-2xs"
                  >
                    <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#996515]" />
                    Book Service
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bridal Party & Group Glam Banner */}
        <div className="mt-10 sm:mt-16 p-4 sm:p-8 bg-[#18181b] text-white rounded-xl sm:rounded-2xl border border-[#d4af37]/40 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 shadow-xl">
          <div className="space-y-1.5 sm:space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-[10.5px] uppercase tracking-widest text-[#d4af37] font-semibold">
              Special Occasions & Graduations
            </div>
            <h4 className="font-serif-luxury text-lg sm:text-2xl font-bold text-[#f5f5f0]">
              Bridal Party & Group Beauty Packages Available in Bahir Dar
            </h4>
            <p className="text-xs sm:text-sm text-[#a3a39e] max-w-2xl font-light">
              Book our VIP bridal suite for yourself, bridesmaids, mother of the bride, and flower girls. Includes champagne/coffee service, coordinated Shuruba, and HD photography makeup.
            </p>
          </div>
          <button
            onClick={() => onSelectService(MAKEUP_BEAUTY_SERVICES[0])}
            className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg text-xs font-bold uppercase tracking-wider text-[#050505] bg-[#d4af37] hover:bg-[#e5c358] shadow-lg cursor-pointer whitespace-nowrap text-center"
          >
            Inquire Group Glam
          </button>
        </div>

      </div>
    </section>
  );
};
