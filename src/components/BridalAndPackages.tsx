import React from 'react';
import { 
  Crown, 
  Sparkles, 
  Check, 
  Calendar, 
  Heart, 
  Clock, 
  ShieldCheck, 
  Flame,
  Gift
} from 'lucide-react';
import { BEAUTY_PACKAGES } from '../data/salonData';
import { PackageDeal } from '../types';

interface BridalAndPackagesProps {
  onSelectPackage: (pkg: PackageDeal) => void;
}

export const BridalAndPackages: React.FC<BridalAndPackagesProps> = ({ onSelectPackage }) => {
  return (
    <section id="bridal-packages" className="py-20 lg:py-28 bg-[#050505] relative overflow-hidden">
      {/* Subtle Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#d4af37]/4 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-[#d4af37]/4 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0e0e10] border border-[#d4af37]/30 text-[11px] font-semibold text-[#d4af37] uppercase tracking-[0.25em]">
            <Crown className="w-3.5 h-3.5 text-[#d4af37]" />
            Imperial Bridal & Luxury Bundles
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#f5f5f0] tracking-tight">
            Bridal Splendor & Curated <br />
            <span className="gold-gradient-text">Beauty Treatment Packages</span>
          </h2>

          <p className="text-base text-[#a3a39e] font-light leading-relaxed">
            From regal Habesha wedding ceremonies and traditional Melse celebrations to all-inclusive head-to-toe beauty packages, indulge in pure luxury tailored for Bahir Dar's most memorable moments.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {BEAUTY_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative shadow-2xl ${
                pkg.featured
                  ? 'bg-[#0e0e10] border-2 border-[#d4af37] shadow-[0_0_35px_rgba(212,175,55,0.15)]'
                  : 'bg-[#0e0e10] border border-white/10 hover:border-[#d4af37]/50'
              }`}
            >
              {/* Badge */}
              {pkg.badge && (
                <div className="absolute -top-3.5 right-6 bg-[#050505] border border-[#d4af37] text-[#d4af37] text-[10px] font-bold uppercase tracking-wider px-3.5 py-1 shadow-lg flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#d4af37]" />
                  {pkg.badge}
                </div>
              )}

              <div className="space-y-6">
                
                {/* Title & Pricing */}
                <div className="space-y-2 pb-4 border-b border-white/10">
                  <h3 className="text-2xl font-serif-luxury font-bold text-[#f5f5f0]">
                    {pkg.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#a3a39e] font-light">
                    {pkg.tagline}
                  </p>

                  <div className="pt-3 flex items-baseline gap-3">
                    <span className="text-3xl font-serif-luxury font-bold text-[#d4af37]">
                      {pkg.price}
                    </span>
                    <span className="text-sm line-through text-[#71716e]">
                      {pkg.originalValue}
                    </span>
                    <span className="text-xs text-[#a3a39e] ml-auto flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                      {pkg.duration}
                    </span>
                  </div>
                </div>

                {/* Included Services */}
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#d4af37] block">
                    What's Included in this Experience:
                  </span>
                  
                  <div className="space-y-2.5">
                    {pkg.servicesIncluded.map((service, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#e8e8e2]">
                        <Check className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Best For Tag */}
                <div className="p-3 bg-[#141416] border border-white/10 text-xs text-[#a3a39e]">
                  <span className="font-semibold text-[#f5f5f0]">Ideal For: </span>
                  {pkg.bestFor}
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-white/10">
                <button
                  onClick={() => onSelectPackage(pkg)}
                  className={`w-full py-3.5 text-xs font-bold uppercase tracking-[0.15em] transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    pkg.featured
                      ? 'text-[#050505] bg-[#d4af37] hover:bg-[#e5c358] shadow-lg'
                      : 'text-[#f5f5f0] bg-[#141416] border border-white/15 hover:border-[#d4af37] hover:bg-[#d4af37] hover:text-[#050505]'
                  }`}
                >
                  <Calendar className="w-4 h-4" />
                  Reserve This Package
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bridal Concierge Callout */}
        <div className="bg-[#0e0e10] border border-[#d4af37]/40 p-6 sm:p-10 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#d4af37]/15 text-[11px] font-bold uppercase tracking-wider text-[#d4af37]">
              <Crown className="w-3.5 h-3.5 text-[#d4af37]" />
              VIP Bridal Suite & On-Location Travel
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#f5f5f0]">
              Planning Your Wedding in Bahir Dar or Surrounding Regions?
            </h3>
            <p className="text-xs sm:text-sm text-[#a3a39e] max-w-2xl leading-relaxed font-light">
              Our senior bridal team travels to resorts across Lake Tana and regional venues. We coordinate complete bridal hair trials, Shuruba, Habesha jewelry pinning, and full bridal party glams.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={() => onSelectPackage(BEAUTY_PACKAGES[1])}
              className="px-7 py-3.5 font-bold text-xs uppercase tracking-[0.15em] text-[#050505] bg-[#d4af37] hover:bg-[#e5c358] shadow-xl cursor-pointer"
            >
              Book Bridal Consultation
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
