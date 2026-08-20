import React, { useState } from 'react';
import { 
  Crown, 
  Sparkles, 
  Check, 
  Calendar, 
  Heart, 
  Clock, 
  ShieldCheck, 
  Flame,
  Gift,
  ChevronDown,
  ChevronUp,
  Tag,
  Users,
  Plus
} from 'lucide-react';
import { BEAUTY_PACKAGES } from '../data/salonData';
import { PackageDeal } from '../types';

interface BridalAndPackagesProps {
  onSelectPackage: (pkg: PackageDeal) => void;
}

export const BridalAndPackages: React.FC<BridalAndPackagesProps> = ({ onSelectPackage }) => {
  const [showAllPackages, setShowAllPackages] = useState<boolean>(false);
  const [showPriceTable, setShowPriceTable] = useState<boolean>(false);
  const [showBridalAddons, setShowBridalAddons] = useState<boolean>(false);

  // Strictly display top 2 to 3 featured packages by default
  const displayedPackages = showAllPackages ? BEAUTY_PACKAGES : BEAUTY_PACKAGES.slice(0, 2);

  const bridalAddons = [
    { name: "Traditional Henna Art (Hands & Feet)", price: "800 – 1,500 ETB", duration: "1.5 hrs" },
    { name: "Bridesmaid Soft Glam Makeup", price: "1,200 ETB / person", duration: "45 mins" },
    { name: "Mother of Bride / Groom Styling & Hair", price: "1,500 ETB / person", duration: "1 hr" },
    { name: "Melse Gold Crown & Jewelry Pinning Assistance", price: "500 ETB", duration: "30 mins" },
    { name: "On-Location Hotel / Resort Lake Tana Travel Team", price: "Custom Quote", duration: "Full Day" }
  ];

  return (
    <section id="bridal-packages" className="py-20 lg:py-28 bg-[#fdfaf5] text-[#1a1816] relative overflow-hidden border-b border-[#e9dfd1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#d4af37]/40 shadow-sm text-[11px] font-semibold text-[#996515] uppercase tracking-[0.25em] rounded-full">
            <Crown className="w-3.5 h-3.5 text-[#996515]" />
            Imperial Bridal & Curated Bundles
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#18181b] tracking-tight">
            Featured Bridal & Luxury <br />
            <span className="text-[#996515]">Treatment Packages</span>
          </h2>

          <p className="text-base text-[#5c5c58] font-normal leading-relaxed">
            Simplified all-in-one luxury packages crafted for Bahir Dar's most celebrated occasions. Experience royal Habesha bridal glam or full-body rejuvenation with zero stress.
          </p>

          {/* Quick Dropdown Control Buttons */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setShowAllPackages(!showAllPackages)}
              className="px-4 py-2 bg-white border border-[#dcd4c5] hover:border-[#18181b] rounded-full text-xs font-semibold text-[#18181b] flex items-center gap-1.5 shadow-xs cursor-pointer transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#996515]" />
              {showAllPackages ? 'Show Top 2 Featured' : `Explore All (${BEAUTY_PACKAGES.length}) Packages`}
              {showAllPackages ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>

            <button
              onClick={() => setShowPriceTable(!showPriceTable)}
              className="px-4 py-2 bg-white border border-[#dcd4c5] hover:border-[#18181b] rounded-full text-xs font-semibold text-[#6b6b66] hover:text-[#18181b] flex items-center gap-1.5 shadow-xs cursor-pointer transition-all"
            >
              <Tag className="w-3.5 h-3.5 text-[#996515]" />
              {showPriceTable ? 'Hide Price Table' : 'Drop Down Price Comparison'}
              {showPriceTable ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>

            <button
              onClick={() => setShowBridalAddons(!showBridalAddons)}
              className="px-4 py-2 bg-white border border-[#dcd4c5] hover:border-[#18181b] rounded-full text-xs font-semibold text-[#6b6b66] hover:text-[#18181b] flex items-center gap-1.5 shadow-xs cursor-pointer transition-all"
            >
              <Users className="w-3.5 h-3.5 text-[#996515]" />
              {showBridalAddons ? 'Hide Bridal Party Add-ons' : 'Drop Down Bridal Add-ons'}
              {showBridalAddons ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Collapsible 1: Package Price & Duration Comparison Table */}
        {showPriceTable && (
          <div className="mb-12 max-w-4xl mx-auto bg-white border border-[#d4af37]/40 rounded-2xl p-5 sm:p-6 shadow-sm animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex items-center justify-between pb-3 border-b border-[#f0ebe1] mb-4">
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4 text-[#996515]" />
                <h4 className="font-serif-luxury font-bold text-base text-[#18181b]">
                  Package Price & Inclusions Comparison Guide
                </h4>
              </div>
              <span className="text-xs text-[#71716e]">Bahir Dar Friendship Bldg 1st Fl</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-[#f0ebe1] text-[#71716e] uppercase tracking-wider">
                    <th className="py-2.5 px-3">Package Title</th>
                    <th className="py-2.5 px-3">Special Rate</th>
                    <th className="py-2.5 px-3">Original Value</th>
                    <th className="py-2.5 px-3">Duration</th>
                    <th className="py-2.5 px-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f5f1ea]">
                  {BEAUTY_PACKAGES.map((pkg) => (
                    <tr key={pkg.id} className="hover:bg-[#faf8f4] transition-colors">
                      <td className="py-3 px-3">
                        <span className="font-bold text-[#18181b] block">{pkg.title}</span>
                        <span className="text-[11px] text-[#6b6b66]">{pkg.tagline}</span>
                      </td>
                      <td className="py-3 px-3 font-bold text-[#996515] text-sm whitespace-nowrap">
                        {pkg.price}
                      </td>
                      <td className="py-3 px-3 line-through text-[#8c8c88] whitespace-nowrap">
                        {pkg.originalValue}
                      </td>
                      <td className="py-3 px-3 text-[#5c5c58] whitespace-nowrap">
                        {pkg.duration}
                      </td>
                      <td className="py-3 px-3 text-right whitespace-nowrap">
                        <button
                          onClick={() => onSelectPackage(pkg)}
                          className="px-3 py-1.5 rounded-lg text-xs font-bold text-[#050505] bg-[#d4af37] hover:bg-[#e5c358] cursor-pointer transition-colors shadow-2xs"
                        >
                          Book
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Collapsible 2: Bridal Party & Ceremony Add-ons */}
        {showBridalAddons && (
          <div className="mb-12 max-w-4xl mx-auto bg-white border border-[#e5ded0] rounded-2xl p-5 sm:p-6 shadow-sm animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex items-center gap-2 pb-3 border-b border-[#f0ebe1] mb-4">
              <Crown className="w-4 h-4 text-[#996515]" />
              <h4 className="font-serif-luxury font-bold text-base text-[#18181b]">
                Bridal Party & Ceremony À La Carte Add-ons
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {bridalAddons.map((item, idx) => (
                <div key={idx} className="p-3.5 bg-[#faf8f4] border border-[#e8e2d8] rounded-xl flex items-center justify-between gap-3">
                  <div>
                    <h5 className="font-bold text-xs text-[#18181b]">{item.name}</h5>
                    <span className="text-[11px] text-[#6b6b66]">• Duration: {item.duration}</span>
                  </div>
                  <span className="font-bold text-xs text-[#996515] whitespace-nowrap bg-white px-2.5 py-1 rounded border border-[#dcd4c5]">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Main Packages Grid (2-3 Featured or Expanded) */}
        <div className={`grid grid-cols-1 ${displayedPackages.length === 2 ? 'md:grid-cols-2 max-w-5xl mx-auto' : 'md:grid-cols-2 lg:grid-cols-3'} gap-8 mb-16`}>
          {displayedPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative rounded-2xl shadow-md ${
                pkg.featured
                  ? 'bg-white border-2 border-[#d4af37] shadow-xl ring-2 ring-[#d4af37]/15'
                  : 'bg-white border border-[#e6ddd0] hover:border-[#bfa15f] hover:shadow-lg'
              }`}
            >
              {/* Badge */}
              {pkg.badge && (
                <div className="absolute -top-3.5 right-6 bg-[#18181b] border border-[#d4af37]/60 text-[#d4af37] text-[10px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#d4af37]" />
                  {pkg.badge}
                </div>
              )}

              <div className="space-y-6">
                
                {/* Title & Pricing */}
                <div className="space-y-2 pb-4 border-b border-[#f0ebe1]">
                  <h3 className="text-2xl font-serif-luxury font-bold text-[#18181b]">
                    {pkg.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5c5c58]">
                    {pkg.tagline}
                  </p>

                  <div className="pt-3 flex items-baseline gap-3">
                    <span className="text-3xl font-serif-luxury font-bold text-[#996515]">
                      {pkg.price}
                    </span>
                    <span className="text-sm line-through text-[#8c8c88]">
                      {pkg.originalValue}
                    </span>
                    <span className="text-xs text-[#5c5c58] ml-auto flex items-center gap-1 font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#996515]" />
                      {pkg.duration}
                    </span>
                  </div>
                </div>

                {/* Included Services */}
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#996515] block">
                    What's Included in this Experience:
                  </span>
                  
                  <div className="space-y-2.5">
                    {pkg.servicesIncluded.map((service, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#3b3b38]">
                        <Check className="w-4 h-4 text-[#996515] shrink-0 mt-0.5" />
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Best For Tag */}
                <div className="p-3.5 bg-[#f9f6f0] border border-[#ebe4d7] rounded-xl text-xs text-[#5c5c58]">
                  <span className="font-bold text-[#18181b]">Ideal For: </span>
                  {pkg.bestFor}
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-[#f0ebe1]">
                <button
                  onClick={() => onSelectPackage(pkg)}
                  className={`w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-[0.15em] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm ${
                    pkg.featured
                      ? 'text-[#050505] bg-[#d4af37] hover:bg-[#e5c358] shadow-md font-bold'
                      : 'text-[#18181b] bg-[#f5f1ea] border border-[#dcd4c5] hover:border-[#18181b] hover:bg-[#18181b] hover:text-[#f5f5f0]'
                  }`}
                >
                  <Calendar className="w-4 h-4" />
                  Reserve This Package ({pkg.price})
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Explore More Toggle Button (If not already expanded) */}
        {!showAllPackages && BEAUTY_PACKAGES.length > 2 && (
          <div className="text-center mb-16">
            <button
              onClick={() => setShowAllPackages(true)}
              className="px-6 py-3 rounded-xl bg-white border border-[#d4af37] text-xs font-bold uppercase tracking-wider text-[#18181b] hover:bg-[#faf5eb] transition-all shadow-xs cursor-pointer inline-flex items-center gap-2"
            >
              <Plus className="w-4 h-4 text-[#996515]" />
              Drop Down Remaining Packages ({BEAUTY_PACKAGES.length - 2} More)
            </button>
          </div>
        )}

        {/* Bridal Concierge Callout */}
        <div className="bg-[#18181b] text-white rounded-2xl border border-[#d4af37]/40 p-6 sm:p-10 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#d4af37]/20 border border-[#d4af37]/50 rounded-full text-[11px] font-bold uppercase tracking-wider text-[#d4af37]">
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
              className="px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-[0.15em] text-[#050505] bg-[#d4af37] hover:bg-[#e5c358] shadow-xl cursor-pointer"
            >
              Book Bridal Consultation
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

