import React, { useState } from 'react';
import { 
  Crown, 
  Check, 
  Calendar, 
  Clock, 
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
    <section id="bridal-packages" className="py-14 sm:py-20 lg:py-28 bg-[#fdfaf5] text-[#1a1816] relative overflow-hidden border-b border-[#e9dfd1]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#d4af37]/40 shadow-sm text-[11px] font-semibold text-[#996515] uppercase tracking-[0.25em] rounded-full">
            <Crown className="w-3.5 h-3.5 text-[#996515]" />
            Imperial Bridal & Curated Bundles
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#18181b] tracking-tight">
            Featured Bridal & Luxury <br />
            <span className="text-[#996515]">Treatment Packages</span>
          </h2>

          <p className="text-xs sm:text-base text-[#5c5c58] font-normal leading-relaxed px-2 sm:px-0">
            Simplified all-in-one luxury packages crafted for Bahir Dar's most celebrated occasions. Experience royal Habesha bridal glam or full-body rejuvenation with zero stress.
          </p>

          {/* Quick Dropdown Control Buttons */}
          <div className="pt-2 sm:pt-3 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <button
              onClick={() => setShowAllPackages(!showAllPackages)}
              className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white border border-[#dcd4c5] hover:border-[#18181b] rounded-full text-[11px] sm:text-xs font-semibold text-[#18181b] flex items-center gap-1.5 shadow-xs cursor-pointer transition-all"
            >
              {showAllPackages ? 'Show Top 2 Featured' : `Explore All (${BEAUTY_PACKAGES.length}) Packages`}
              {showAllPackages ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>

            <button
              onClick={() => setShowPriceTable(!showPriceTable)}
              className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white border border-[#dcd4c5] hover:border-[#18181b] rounded-full text-[11px] sm:text-xs font-semibold text-[#6b6b66] hover:text-[#18181b] flex items-center gap-1.5 shadow-xs cursor-pointer transition-all"
            >
              <Tag className="w-3.5 h-3.5 text-[#996515]" />
              {showPriceTable ? 'Hide Price Table' : 'Drop Down Price Comparison'}
              {showPriceTable ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>

            <button
              onClick={() => setShowBridalAddons(!showBridalAddons)}
              className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white border border-[#dcd4c5] hover:border-[#18181b] rounded-full text-[11px] sm:text-xs font-semibold text-[#6b6b66] hover:text-[#18181b] flex items-center gap-1.5 shadow-xs cursor-pointer transition-all"
            >
              <Users className="w-3.5 h-3.5 text-[#996515]" />
              {showBridalAddons ? 'Hide Bridal Party Add-ons' : 'Drop Down Bridal Add-ons'}
              {showBridalAddons ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Collapsible 1: Package Price & Duration Comparison Table */}
        {showPriceTable && (
          <div className="mb-8 sm:mb-12 max-w-4xl mx-auto bg-white border border-[#d4af37]/40 rounded-2xl p-4 sm:p-6 shadow-sm animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex items-center justify-between pb-3 border-b border-[#f0ebe1] mb-4">
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4 text-[#996515]" />
                <h4 className="font-serif-luxury font-bold text-sm sm:text-base text-[#18181b]">
                  Package Price & Inclusions Comparison Guide
                </h4>
              </div>
              <span className="text-[11px] sm:text-xs text-[#71716e]">Bahir Dar Friendship Bldg 1st Fl</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-[#f0ebe1] text-[#71716e] uppercase tracking-wider">
                    <th className="py-2.5 px-2 sm:px-3">Package Title</th>
                    <th className="py-2.5 px-2 sm:px-3">Special Rate</th>
                    <th className="py-2.5 px-2 sm:px-3">Original Value</th>
                    <th className="py-2.5 px-2 sm:px-3">Duration</th>
                    <th className="py-2.5 px-2 sm:px-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f5f1ea]">
                  {BEAUTY_PACKAGES.map((pkg) => (
                    <tr key={pkg.id} className="hover:bg-[#faf8f4] transition-colors">
                      <td className="py-2.5 sm:py-3 px-2 sm:px-3">
                        <span className="font-bold text-[#18181b] block text-xs">{pkg.title}</span>
                        <span className="text-[10px] sm:text-[11px] text-[#6b6b66]">{pkg.tagline}</span>
                      </td>
                      <td className="py-2.5 sm:py-3 px-2 sm:px-3 font-bold text-[#996515] text-xs sm:text-sm whitespace-nowrap">
                        {pkg.price}
                      </td>
                      <td className="py-2.5 sm:py-3 px-2 sm:px-3 line-through text-[#8c8c88] whitespace-nowrap text-[11px]">
                        {pkg.originalValue}
                      </td>
                      <td className="py-2.5 sm:py-3 px-2 sm:px-3 text-[#5c5c58] whitespace-nowrap text-[11px]">
                        {pkg.duration}
                      </td>
                      <td className="py-2.5 sm:py-3 px-2 sm:px-3 text-right whitespace-nowrap">
                        <button
                          onClick={() => onSelectPackage(pkg)}
                          className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md sm:rounded-lg text-[11px] sm:text-xs font-bold text-[#050505] bg-[#d4af37] hover:bg-[#e5c358] cursor-pointer transition-colors shadow-2xs"
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
          <div className="mb-8 sm:mb-12 max-w-4xl mx-auto bg-white border border-[#e5ded0] rounded-2xl p-4 sm:p-6 shadow-sm animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex items-center gap-2 pb-3 border-b border-[#f0ebe1] mb-4">
              <Crown className="w-4 h-4 text-[#996515]" />
              <h4 className="font-serif-luxury font-bold text-sm sm:text-base text-[#18181b]">
                Bridal Party & Ceremony À La Carte Add-ons
              </h4>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {bridalAddons.map((item, idx) => (
                <div key={idx} className="p-2.5 sm:p-3.5 bg-[#faf8f4] border border-[#e8e2d8] rounded-xl flex flex-col justify-between gap-1.5 sm:gap-3">
                  <div>
                    <h5 className="font-bold text-[11px] sm:text-xs text-[#18181b]">{item.name}</h5>
                    <span className="text-[9.5px] sm:text-[11px] text-[#6b6b66]">• Duration: {item.duration}</span>
                  </div>
                  <span className="font-bold text-[10px] sm:text-xs text-[#996515] whitespace-nowrap bg-white px-2 py-0.5 sm:py-1 rounded border border-[#dcd4c5] w-fit">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Main Packages Grid (2 per row on mobile) */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6 lg:gap-8 mb-10 sm:mb-16">
          {displayedPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`p-3 sm:p-6 lg:p-8 flex flex-col justify-between transition-all duration-300 relative rounded-xl sm:rounded-2xl shadow-xs sm:shadow-md ${
                pkg.featured
                  ? 'bg-white border-2 border-[#d4af37] shadow-lg ring-1 sm:ring-2 ring-[#d4af37]/15'
                  : 'bg-white border border-[#e6ddd0] hover:border-[#bfa15f] hover:shadow-lg'
              }`}
            >
              {/* Badge */}
              {pkg.badge && (
                <div className="absolute -top-3 right-3 sm:right-6 bg-[#18181b] border border-[#d4af37]/60 text-[#d4af37] text-[8.5px] sm:text-[10px] font-bold uppercase tracking-wider px-2 sm:px-3.5 py-0.5 sm:py-1 rounded-full shadow-md">
                  {pkg.badge}
                </div>
              )}

              <div className="space-y-2.5 sm:space-y-6">
                
                {/* Title & Pricing */}
                <div className="space-y-1 sm:space-y-2 pb-2.5 sm:pb-4 border-b border-[#f0ebe1]">
                  <h3 className="text-xs sm:text-xl lg:text-2xl font-serif-luxury font-bold text-[#18181b] line-clamp-1 sm:line-clamp-none">
                    {pkg.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-[#5c5c58] line-clamp-2">
                    {pkg.tagline}
                  </p>

                  <div className="pt-1.5 sm:pt-3 flex flex-wrap items-baseline gap-1 sm:gap-2">
                    <span className="text-sm sm:text-2xl lg:text-3xl font-serif-luxury font-bold text-[#996515]">
                      {pkg.price}
                    </span>
                    <span className="text-[10px] sm:text-xs line-through text-[#8c8c88]">
                      {pkg.originalValue}
                    </span>
                    <span className="text-[9.5px] sm:text-xs text-[#5c5c58] ml-auto flex items-center gap-0.5 sm:gap-1 font-medium">
                      <Clock className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-[#996515]" />
                      {pkg.duration}
                    </span>
                  </div>
                </div>

                {/* Included Services */}
                <div className="space-y-1.5 sm:space-y-3">
                  <span className="text-[9.5px] sm:text-xs font-bold uppercase tracking-wider text-[#996515] block">
                    Inclusions:
                  </span>
                  
                  <div className="space-y-1 sm:space-y-2">
                    {pkg.servicesIncluded.slice(0, 3).map((service, idx) => (
                      <div key={idx} className="flex items-start gap-1 sm:gap-2 text-[10px] sm:text-xs text-[#3b3b38]">
                        <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#996515] shrink-0 mt-0.5" />
                        <span className="truncate">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Best For Tag */}
                <div className="p-2 sm:p-3 bg-[#f9f6f0] border border-[#ebe4d7] rounded-lg text-[9.5px] sm:text-xs text-[#5c5c58]">
                  <span className="font-bold text-[#18181b]">Ideal For: </span>
                  <span className="line-clamp-1">{pkg.bestFor}</span>
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-3 sm:pt-6 mt-3 sm:mt-6 border-t border-[#f0ebe1]">
                <button
                  onClick={() => onSelectPackage(pkg)}
                  className={`w-full py-2 sm:py-3.5 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-bold uppercase tracking-[0.1em] sm:tracking-[0.15em] transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs ${
                    pkg.featured
                      ? 'text-[#050505] bg-[#d4af37] hover:bg-[#e5c358] shadow-sm font-bold'
                      : 'text-[#18181b] bg-[#f5f1ea] border border-[#dcd4c5] hover:border-[#18181b] hover:bg-[#18181b] hover:text-[#f5f5f0]'
                  }`}
                >
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="truncate">Book ({pkg.price})</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Explore More Toggle Button (If not already expanded) */}
        {!showAllPackages && BEAUTY_PACKAGES.length > 2 && (
          <div className="text-center mb-10 sm:mb-16">
            <button
              onClick={() => setShowAllPackages(true)}
              className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-white border border-[#d4af37] text-xs font-bold uppercase tracking-wider text-[#18181b] hover:bg-[#faf5eb] transition-all shadow-xs cursor-pointer inline-flex items-center gap-2"
            >
              <Plus className="w-4 h-4 text-[#996515]" />
              Drop Down Remaining Packages ({BEAUTY_PACKAGES.length - 2} More)
            </button>
          </div>
        )}

        {/* Bridal Concierge Callout */}
        <div className="bg-[#18181b] text-white rounded-xl sm:rounded-2xl border border-[#d4af37]/40 p-4 sm:p-8 lg:p-10 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#d4af37]/20 border border-[#d4af37]/50 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#d4af37]">
              <Crown className="w-3.5 h-3.5 text-[#d4af37]" />
              VIP Bridal Suite & On-Location Travel
            </div>
            <h3 className="text-xl sm:text-3xl font-serif-luxury font-bold text-[#f5f5f0]">
              Planning Your Wedding in Bahir Dar or Surrounding Regions?
            </h3>
            <p className="text-xs sm:text-sm text-[#a3a39e] max-w-2xl leading-relaxed font-light">
              Our senior bridal team travels to resorts across Lake Tana and regional venues. We coordinate complete bridal hair trials, Shuruba, Habesha jewelry pinning, and full bridal party glams.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={() => onSelectPackage(BEAUTY_PACKAGES[1])}
              className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-[0.15em] text-[#050505] bg-[#d4af37] hover:bg-[#e5c358] shadow-xl cursor-pointer text-center"
            >
              Book Bridal Consultation
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

