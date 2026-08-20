import React, { useState } from 'react';
import { 
  Scissors, 
  Clock, 
  Check, 
  Calendar, 
  Flame 
} from 'lucide-react';
import { HAIR_SERVICES } from '../data/salonData';
import { ServiceItem } from '../types';

interface HairServicesProps {
  onSelectService: (service: ServiceItem) => void;
}

export const HairServices: React.FC<HairServicesProps> = ({ onSelectService }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Hair Services' },
    { id: 'braiding', label: 'Braiding & Shuruba' },
    { id: 'hair', label: 'Styling & Silk Press' },
    { id: 'treatments', label: 'Botanical Treatments' },
    { id: 'coloring', label: 'Coloring & Dyeing' },
    { id: 'cutting', label: 'Precision Cuts' },
  ];

  const filteredServices = selectedCategory === 'all'
    ? HAIR_SERVICES
    : HAIR_SERVICES.filter(item => item.category === selectedCategory);

  return (
    <section id="hair-services" className="py-14 sm:py-20 lg:py-28 bg-[#fbf9f5] text-[#1a1a1a] relative border-b border-[#e8e2d8]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#d4af37]/40 shadow-sm text-[11px] font-semibold text-[#996515] uppercase tracking-[0.25em] rounded-full">
            <Scissors className="w-3.5 h-3.5" />
            Couture Hair Artistry
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#18181b] tracking-tight">
            Master Hair Styling, Braiding & <br />
            <span className="text-[#996515]">Specialized Scalp Care</span>
          </h2>

          <p className="text-xs sm:text-base text-[#5c5c58] font-normal leading-relaxed px-2 sm:px-0">
            From intricate Ethiopian Shuruba to featherweight silk presses and organic herbal steam growth therapies, our master stylists elevate your crown with zero damage.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center flex-wrap gap-1.5 sm:gap-2.5 mb-8 sm:mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 text-[10.5px] sm:text-xs uppercase tracking-wider font-semibold transition-all rounded-full cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#18181b] text-[#f5f5f0] shadow-md font-bold'
                  : 'bg-white text-[#6b6b66] border border-[#e2dcce] hover:border-[#996515]/60 hover:text-[#18181b] shadow-xs'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Service Cards Grid - 2 columns on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6 lg:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-white border border-[#e8e2d8] hover:border-[#bfa15f] hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden flex flex-col justify-between shadow-xs sm:shadow-sm"
            >
              {/* Image & Badges */}
              <div className="relative h-32 sm:h-52 lg:h-60 overflow-hidden bg-[#f0ede6]">
                <img 
                  src={service.image} 
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {service.popular && (
                  <div className="absolute top-1.5 sm:top-3 right-1.5 sm:right-3 bg-[#18181b]/95 border border-[#d4af37]/60 text-[#d4af37] text-[8.5px] sm:text-[10px] font-bold uppercase tracking-wider px-1.5 sm:px-2.5 py-0.5 sm:py-1 flex items-center gap-1 rounded shadow-md backdrop-blur-xs">
                    <Flame className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#d4af37] fill-[#d4af37]" />
                    <span className="hidden xs:inline sm:inline">Popular</span>
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

              {/* Card Body */}
              <div className="p-2.5 sm:p-5 lg:p-6 space-y-2 sm:space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-1 sm:space-y-2">
                  <h3 className="font-serif-luxury text-xs sm:text-base lg:text-lg font-bold text-[#18181b] group-hover:text-[#996515] transition-colors line-clamp-1 sm:line-clamp-none">
                    {service.name}
                  </h3>
                  <p className="text-[10.5px] sm:text-xs lg:text-sm text-[#5c5c58] leading-tight sm:leading-relaxed line-clamp-2 sm:line-clamp-3">
                    {service.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-1 sm:space-y-2 pt-2 sm:pt-3 border-t border-[#f0ebe1]">
                  {service.features.slice(0, 2).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs text-[#42423e]">
                      <Check className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-[#996515] shrink-0" />
                      <span className="truncate">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action CTA */}
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

        {/* Scalp Care Callout Banner */}
        <div className="mt-10 sm:mt-16 p-4 sm:p-8 bg-[#18181b] text-white rounded-xl sm:rounded-2xl border border-[#d4af37]/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="space-y-1.5 sm:space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-[10.5px] uppercase tracking-widest text-[#d4af37] font-semibold">
              Specialized Care
            </div>
            <h4 className="font-serif-luxury text-lg sm:text-2xl font-bold text-[#f5f5f0]">
              Custom Scalp Analysis & Edge Restoration Consultations
            </h4>
            <p className="text-xs sm:text-sm text-[#a3a39e] max-w-xl font-light">
              Suffering from tension alopecia, dry flaky scalp, or post-braiding tenderness? Our trichology-trained stylists in Bahir Dar provide micro-camera scalp assessments.
            </p>
          </div>
          <button
            onClick={() => onSelectService(HAIR_SERVICES[5])}
            className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg text-xs font-bold uppercase tracking-wider text-[#050505] bg-[#d4af37] hover:bg-[#e5c358] shadow-lg cursor-pointer whitespace-nowrap text-center"
          >
            Book Scalp Assessment
          </button>
        </div>

      </div>
    </section>
  );
};
