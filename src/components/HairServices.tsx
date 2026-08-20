import React, { useState } from 'react';
import { 
  Scissors, 
  Sparkles, 
  Clock, 
  Check, 
  ArrowRight, 
  Calendar,
  Flame,
  Filter
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
    <section id="hair-services" className="py-20 lg:py-28 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0e0e10] border border-[#d4af37]/30 text-[11px] font-semibold text-[#d4af37] uppercase tracking-[0.25em]">
            <Scissors className="w-3.5 h-3.5" />
            Couture Hair Artistry
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#f5f5f0] tracking-tight">
            Master Hair Styling, Braiding & <br />
            <span className="gold-gradient-text">Specialized Scalp Care</span>
          </h2>

          <p className="text-base text-[#a3a39e] font-light">
            From intricate Ethiopian Shuruba to featherweight silk presses and organic herbal steam growth therapies, our master stylists elevate your crown with zero damage.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#d4af37] text-[#050505] shadow-md font-bold'
                  : 'bg-[#0e0e10] text-[#a3a39e] border border-white/10 hover:border-[#d4af37]/40 hover:text-[#f5f5f0]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-[#0e0e10] border border-white/10 hover:border-[#d4af37]/60 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl"
            >
              {/* Image & Badges */}
              <div className="relative h-56 overflow-hidden bg-[#080808]">
                <img 
                  src={service.image} 
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e10] via-[#0e0e10]/20 to-transparent" />
                
                {service.popular && (
                  <div className="absolute top-3 right-3 bg-[#050505]/90 border border-[#d4af37]/50 text-[#d4af37] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 flex items-center gap-1 shadow-md">
                    <Flame className="w-3 h-3 text-[#d4af37] fill-[#d4af37]" />
                    Popular
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

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-serif-luxury text-lg font-bold text-[#f5f5f0] group-hover:text-[#d4af37] transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#a3a39e] leading-relaxed line-clamp-3 font-light">
                    {service.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-1.5 pt-2 border-t border-white/10">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#e8e8e2]">
                      <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action CTA */}
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

        {/* Scalp Care Callout Banner */}
        <div className="mt-16 p-6 sm:p-8 bg-[#0e0e10] border border-[#d4af37]/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="font-serif-luxury text-xl font-bold text-[#d4af37]">
              Custom Scalp Analysis & Edge Restoration Consultations
            </h4>
            <p className="text-xs sm:text-sm text-[#a3a39e] max-w-xl font-light">
              Suffering from tension alopecia, dry flaky scalp, or post-braiding tenderness? Our trichology-trained stylists in Bahir Dar provide micro-camera scalp assessments.
            </p>
          </div>
          <button
            onClick={() => onSelectService(HAIR_SERVICES[5])}
            className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#050505] bg-[#d4af37] hover:bg-[#e5c358] shadow-lg cursor-pointer whitespace-nowrap"
          >
            Book Scalp Assessment
          </button>
        </div>

      </div>
    </section>
  );
};
