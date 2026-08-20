import React, { useState } from 'react';
import { 
  DollarSign, 
  Search, 
  ChevronDown, 
  ChevronUp, 
  Scissors, 
  Crown, 
  Sparkles, 
  Leaf, 
  Smile, 
  GraduationCap, 
  Calendar, 
  Check, 
  Clock, 
  Filter,
  ArrowRight,
  ShieldCheck,
  Tag
} from 'lucide-react';
import { 
  HAIR_SERVICES, 
  MAKEUP_BEAUTY_SERVICES, 
  BEAUTY_PACKAGES, 
  ACADEMY_COURSES 
} from '../data/salonData';
import { ServiceItem, PackageDeal, AcademyCourse } from '../types';

interface PriceExplorerSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onSelectPackage: (pkg: PackageDeal) => void;
  onEnrollCourse: (course: AcademyCourse) => void;
}

export const PriceExplorerSection: React.FC<PriceExplorerSectionProps> = ({
  onSelectService,
  onSelectPackage,
  onEnrollCourse,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    packages: true,
    academy: true,
    hair: false,
    braids: false,
    botanicals: false,
    makeup: false,
    nails: false,
  });

  const toggleSection = (key: string) => {
    setOpenSections(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const expandAll = () => {
    setOpenSections({
      packages: true,
      academy: true,
      hair: true,
      braids: true,
      botanicals: true,
      makeup: true,
      nails: true,
    });
  };

  const collapseAll = () => {
    setOpenSections({
      packages: false,
      academy: false,
      hair: false,
      braids: false,
      botanicals: false,
      makeup: false,
      nails: false,
    });
  };

  // Grouped data
  const hairServices = HAIR_SERVICES.filter(s => s.category === 'hair' || s.category === 'cutting' || s.category === 'coloring');
  const braidServices = HAIR_SERVICES.filter(s => s.category === 'braiding');
  const botanicalServices = HAIR_SERVICES.filter(s => s.category === 'treatments');
  const makeupServices = MAKEUP_BEAUTY_SERVICES.filter(s => s.category === 'makeup' || s.category === 'bridal');
  const nailServices = MAKEUP_BEAUTY_SERVICES.filter(s => s.category === 'nails' || s.category === 'skincare');

  const filterBySearch = <T extends { name?: string; title?: string; description?: string }>(items: T[]): T[] => {
    if (!searchQuery.trim()) return items;
    const q = searchQuery.toLowerCase();
    return items.filter(item => 
      (item.name && item.name.toLowerCase().includes(q)) ||
      (item.title && item.title.toLowerCase().includes(q)) ||
      (item.description && item.description.toLowerCase().includes(q))
    );
  };

  const filteredPackages = filterBySearch(BEAUTY_PACKAGES);
  const filteredAcademy = filterBySearch(ACADEMY_COURSES);
  const filteredHair = filterBySearch(hairServices);
  const filteredBraids = filterBySearch(braidServices);
  const filteredBotanicals = filterBySearch(botanicalServices);
  const filteredMakeup = filterBySearch(makeupServices);
  const filteredNails = filterBySearch(nailServices);

  const totalResults = 
    filteredPackages.length + 
    filteredAcademy.length + 
    filteredHair.length + 
    filteredBraids.length + 
    filteredBotanicals.length + 
    filteredMakeup.length + 
    filteredNails.length;

  return (
    <section id="price-explorer" className="py-20 lg:py-28 bg-[#faf7f2] text-[#18181b] relative border-b border-[#e5ded2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#d4af37]/40 shadow-sm text-[11px] font-semibold text-[#996515] uppercase tracking-[0.25em] rounded-full">
            <Tag className="w-3.5 h-3.5 text-[#996515]" />
            Complete Price Guide & Catalog
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#18181b] tracking-tight">
            Explore All Services, Packages & <br />
            <span className="text-[#996515]">Transparent Price Dropdowns</span>
          </h2>

          <p className="text-base text-[#5c5c58] font-normal leading-relaxed">
            Every treatment and diploma at Hiber is priced with 100% transparency. Click any category below to drop down full rate cards, durations, and inclusions.
          </p>

          {/* Search & Bulk Expand Bar */}
          <div className="pt-4 flex flex-col sm:flex-row items-center gap-3 justify-center max-w-xl mx-auto">
            <div className="relative w-full">
              <Search className="w-4 h-4 text-[#8c8c88] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search prices (e.g. silk press, bridal, diploma, steam)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#dcd4c5] focus:border-[#996515] rounded-xl text-xs text-[#18181b] placeholder:text-[#8c8c88] shadow-xs outline-none transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8c8c88] hover:text-[#18181b] cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={expandAll}
                className="px-3.5 py-2.5 bg-white border border-[#dcd4c5] hover:border-[#18181b] rounded-xl text-xs font-semibold text-[#18181b] hover:bg-[#faf6ee] transition-colors cursor-pointer shadow-xs whitespace-nowrap"
              >
                Drop Down All
              </button>
              <button
                onClick={collapseAll}
                className="px-3.5 py-2.5 bg-white border border-[#dcd4c5] hover:border-[#18181b] rounded-xl text-xs font-semibold text-[#6b6b66] hover:bg-[#faf6ee] transition-colors cursor-pointer shadow-xs whitespace-nowrap"
              >
                Collapse All
              </button>
            </div>
          </div>

          {searchQuery && (
            <p className="text-xs text-[#6b6b66] pt-1">
              Found <span className="font-bold text-[#18181b]">{totalResults}</span> matches for "{searchQuery}"
            </p>
          )}
        </div>

        {/* Accordion Categories Container */}
        <div className="max-w-4xl mx-auto space-y-4">

          {/* 1. Bundled Packages (Top 2-3 + Dropdown) */}
          <div className="bg-white border border-[#e5ded0] rounded-2xl shadow-xs overflow-hidden transition-all duration-200">
            <button
              onClick={() => toggleSection('packages')}
              className="w-full p-5 sm:p-6 flex items-center justify-between text-left hover:bg-[#faf8f4] transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-[#faf5eb] border border-[#d4af37]/50 flex items-center justify-center text-[#996515] shrink-0">
                  <Crown className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-serif-luxury text-lg sm:text-xl font-bold text-[#18181b]">
                      Luxury Packages & Bridal Bundles
                    </h3>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#faf5eb] text-[#996515] font-bold border border-[#d4af37]/40">
                      {filteredPackages.length} Bundles
                    </span>
                  </div>
                  <p className="text-xs text-[#6b6b66] mt-0.5">
                    Multi-service savings from 1,900 ETB to 9,500 ETB
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-[#996515] shrink-0">
                <span className="hidden sm:inline">{openSections.packages ? 'Hide Options' : 'Drop Down Prices'}</span>
                {openSections.packages ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </div>
            </button>

            {openSections.packages && (
              <div className="p-5 sm:p-6 pt-0 border-t border-[#f0ebe1] bg-[#fdfbf7] space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  {filteredPackages.map((pkg) => (
                    <div
                      key={pkg.id}
                      className="p-5 bg-white border border-[#e5ded0] rounded-xl shadow-xs flex flex-col justify-between space-y-4 hover:border-[#d4af37] transition-all"
                    >
                      <div className="space-y-2">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="font-serif-luxury font-bold text-base text-[#18181b]">
                            {pkg.title}
                          </h4>
                          {pkg.badge && (
                            <span className="text-[9.5px] px-2 py-0.5 bg-[#18181b] text-[#d4af37] font-bold uppercase rounded shrink-0">
                              {pkg.badge}
                            </span>
                          )}
                        </div>

                        <p className="text-xs text-[#6b6b66] line-clamp-2">
                          {pkg.tagline}
                        </p>

                        <div className="flex items-baseline gap-2 pt-1">
                          <span className="text-xl font-serif-luxury font-bold text-[#996515]">
                            {pkg.price}
                          </span>
                          <span className="text-xs line-through text-[#8c8c88]">
                            {pkg.originalValue}
                          </span>
                          <span className="text-[11px] text-[#6b6b66] ml-auto flex items-center gap-1 font-medium">
                            <Clock className="w-3 h-3 text-[#996515]" />
                            {pkg.duration}
                          </span>
                        </div>

                        <div className="space-y-1.5 pt-2 border-t border-[#f5f1ea]">
                          {pkg.servicesIncluded.slice(0, 3).map((svc, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs text-[#42423e]">
                              <Check className="w-3.5 h-3.5 text-[#996515] shrink-0" />
                              <span className="truncate">{svc}</span>
                            </div>
                          ))}
                          {pkg.servicesIncluded.length > 3 && (
                            <span className="text-[10.5px] text-[#996515] font-semibold block">
                              + {pkg.servicesIncluded.length - 3} more luxury inclusions
                            </span>
                          )}
                        </div>
                      </div>

                      <button
                        onClick={() => onSelectPackage(pkg)}
                        className="w-full py-2.5 text-xs font-bold uppercase tracking-wider text-[#050505] bg-[#d4af37] hover:bg-[#e5c358] rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        Book Package ({pkg.price})
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 2. Academy Diplomas & Enrollment Contents */}
          <div className="bg-white border border-[#e5ded0] rounded-2xl shadow-xs overflow-hidden transition-all duration-200">
            <button
              onClick={() => toggleSection('academy')}
              className="w-full p-5 sm:p-6 flex items-center justify-between text-left hover:bg-[#faf8f4] transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-[#faf5eb] border border-[#d4af37]/50 flex items-center justify-center text-[#996515] shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-serif-luxury text-lg sm:text-xl font-bold text-[#18181b]">
                      Academy Diplomas & Tuitions
                    </h3>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#faf5eb] text-[#996515] font-bold border border-[#d4af37]/40">
                      {filteredAcademy.length} Courses
                    </span>
                  </div>
                  <p className="text-xs text-[#6b6b66] mt-0.5">
                    Accredited certificate courses from 8,000 ETB to 18,000 ETB (Installment plans available)
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-[#996515] shrink-0">
                <span className="hidden sm:inline">{openSections.academy ? 'Hide Options' : 'Drop Down Tuitions'}</span>
                {openSections.academy ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </div>
            </button>

            {openSections.academy && (
              <div className="p-5 sm:p-6 pt-0 border-t border-[#f0ebe1] bg-[#fdfbf7] space-y-4">
                <div className="space-y-3 pt-4">
                  {filteredAcademy.map((course) => (
                    <div
                      key={course.id}
                      className="p-4 sm:p-5 bg-white border border-[#e5ded0] rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-[#d4af37] transition-all shadow-xs"
                    >
                      <div className="space-y-1.5 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="font-serif-luxury font-bold text-base text-[#18181b]">
                            {course.title}
                          </h4>
                          <span className="text-[10px] px-2 py-0.5 bg-[#faf5eb] text-[#996515] font-bold rounded border border-[#d4af37]/30">
                            {course.level}
                          </span>
                          <span className="text-[10px] text-[#6b6b66]">
                            • {course.schedule}
                          </span>
                        </div>

                        <p className="text-xs text-[#5c5c58] max-w-2xl line-clamp-2">
                          {course.description}
                        </p>

                        <div className="flex flex-wrap items-center gap-4 text-xs text-[#6b6b66] pt-1">
                          <span className="font-bold text-[#996515] text-sm">{course.price}</span>
                          <span>Duration: {course.duration}</span>
                          <span>• Includes Free Professional Beauty Kit</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
                        <button
                          onClick={() => onEnrollCourse(course)}
                          className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#050505] bg-[#d4af37] hover:bg-[#e5c358] rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                        >
                          <GraduationCap className="w-3.5 h-3.5" />
                          Enroll Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 3. Hair Styling, Precision Cuts & Coloring */}
          <div className="bg-white border border-[#e5ded0] rounded-2xl shadow-xs overflow-hidden transition-all duration-200">
            <button
              onClick={() => toggleSection('hair')}
              className="w-full p-5 sm:p-6 flex items-center justify-between text-left hover:bg-[#faf8f4] transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-[#faf5eb] border border-[#d4af37]/50 flex items-center justify-center text-[#996515] shrink-0">
                  <Scissors className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-serif-luxury text-lg sm:text-xl font-bold text-[#18181b]">
                      Hair Design, Cuts & Coloring
                    </h3>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#faf5eb] text-[#996515] font-bold border border-[#d4af37]/40">
                      {filteredHair.length} Services
                    </span>
                  </div>
                  <p className="text-xs text-[#6b6b66] mt-0.5">
                    Silk press, curling, layers, extensions & balayage (400 – 4,500 ETB)
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-[#996515] shrink-0">
                <span className="hidden sm:inline">{openSections.hair ? 'Hide Options' : 'Drop Down Rates'}</span>
                {openSections.hair ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </div>
            </button>

            {openSections.hair && (
              <div className="p-5 sm:p-6 pt-0 border-t border-[#f0ebe1] bg-[#fdfbf7] space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                  {filteredHair.map((service) => (
                    <div
                      key={service.id}
                      className="p-4 bg-white border border-[#e5ded0] rounded-xl flex items-center justify-between gap-3 hover:border-[#d4af37] transition-all shadow-xs"
                    >
                      <div className="space-y-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-xs sm:text-sm text-[#18181b] truncate">
                            {service.name}
                          </h4>
                          {service.popular && (
                            <span className="text-[9px] px-1.5 py-0.2 bg-[#18181b] text-[#d4af37] font-bold rounded">
                              Popular
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-[#6b6b66] line-clamp-1">
                          {service.description}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-[#6b6b66]">
                          <span className="font-bold text-[#996515]">{service.price}</span>
                          <span>• {service.duration}</span>
                        </div>
                      </div>

                      <button
                        onClick={() => onSelectService(service)}
                        className="px-3.5 py-2 text-xs font-bold text-[#18181b] bg-[#faf5eb] hover:bg-[#d4af37] hover:text-[#050505] border border-[#d4af37]/40 rounded-lg transition-all shrink-0 cursor-pointer"
                      >
                        Book
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 4. Traditional Braids & Shuruba */}
          <div className="bg-white border border-[#e5ded0] rounded-2xl shadow-xs overflow-hidden transition-all duration-200">
            <button
              onClick={() => toggleSection('braids')}
              className="w-full p-5 sm:p-6 flex items-center justify-between text-left hover:bg-[#faf8f4] transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-[#faf5eb] border border-[#d4af37]/50 flex items-center justify-center text-[#996515] shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-serif-luxury text-lg sm:text-xl font-bold text-[#18181b]">
                      Ethiopian Braiding & Shuruba Artistry
                    </h3>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#faf5eb] text-[#996515] font-bold border border-[#d4af37]/40">
                      {filteredBraids.length} Styles
                    </span>
                  </div>
                  <p className="text-xs text-[#6b6b66] mt-0.5">
                    Authentic Habesha Shuruba, knotless, Fulani & stitch braids (800 – 2,500 ETB)
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-[#996515] shrink-0">
                <span className="hidden sm:inline">{openSections.braids ? 'Hide Options' : 'Drop Down Rates'}</span>
                {openSections.braids ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </div>
            </button>

            {openSections.braids && (
              <div className="p-5 sm:p-6 pt-0 border-t border-[#f0ebe1] bg-[#fdfbf7] space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                  {filteredBraids.map((service) => (
                    <div
                      key={service.id}
                      className="p-4 bg-white border border-[#e5ded0] rounded-xl flex items-center justify-between gap-3 hover:border-[#d4af37] transition-all shadow-xs"
                    >
                      <div className="space-y-1 min-w-0">
                        <h4 className="font-bold text-xs sm:text-sm text-[#18181b] truncate">
                          {service.name}
                        </h4>
                        <p className="text-[11px] text-[#6b6b66] line-clamp-1">
                          {service.description}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-[#6b6b66]">
                          <span className="font-bold text-[#996515]">{service.price}</span>
                          <span>• {service.duration}</span>
                        </div>
                      </div>

                      <button
                        onClick={() => onSelectService(service)}
                        className="px-3.5 py-2 text-xs font-bold text-[#18181b] bg-[#faf5eb] hover:bg-[#d4af37] hover:text-[#050505] border border-[#d4af37]/40 rounded-lg transition-all shrink-0 cursor-pointer"
                      >
                        Book
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 5. Botanical Hair Spa & Regrowth Steam */}
          <div className="bg-white border border-[#e5ded0] rounded-2xl shadow-xs overflow-hidden transition-all duration-200">
            <button
              onClick={() => toggleSection('botanicals')}
              className="w-full p-5 sm:p-6 flex items-center justify-between text-left hover:bg-[#faf8f4] transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-[#faf5eb] border border-[#d4af37]/50 flex items-center justify-center text-[#996515] shrink-0">
                  <Leaf className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-serif-luxury text-lg sm:text-xl font-bold text-[#18181b]">
                      Botanical Scalp & Hair Spa Therapies
                    </h3>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#faf5eb] text-[#996515] font-bold border border-[#d4af37]/40">
                      {filteredBotanicals.length} Therapies
                    </span>
                  </div>
                  <p className="text-xs text-[#6b6b66] mt-0.5">
                    Fresh Nug, Abish, rosemary steam masks & coffee scrubs (650 – 1,800 ETB)
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-[#996515] shrink-0">
                <span className="hidden sm:inline">{openSections.botanicals ? 'Hide Options' : 'Drop Down Rates'}</span>
                {openSections.botanicals ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </div>
            </button>

            {openSections.botanicals && (
              <div className="p-5 sm:p-6 pt-0 border-t border-[#f0ebe1] bg-[#fdfbf7] space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                  {filteredBotanicals.map((service) => (
                    <div
                      key={service.id}
                      className="p-4 bg-white border border-[#e5ded0] rounded-xl flex items-center justify-between gap-3 hover:border-[#d4af37] transition-all shadow-xs"
                    >
                      <div className="space-y-1 min-w-0">
                        <h4 className="font-bold text-xs sm:text-sm text-[#18181b] truncate">
                          {service.name}
                        </h4>
                        <p className="text-[11px] text-[#6b6b66] line-clamp-1">
                          {service.description}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-[#6b6b66]">
                          <span className="font-bold text-[#996515]">{service.price}</span>
                          <span>• {service.duration}</span>
                        </div>
                      </div>

                      <button
                        onClick={() => onSelectService(service)}
                        className="px-3.5 py-2 text-xs font-bold text-[#18181b] bg-[#faf5eb] hover:bg-[#d4af37] hover:text-[#050505] border border-[#d4af37]/40 rounded-lg transition-all shrink-0 cursor-pointer"
                      >
                        Book
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 6. Makeup, Bridal Art & Nails */}
          <div className="bg-white border border-[#e5ded0] rounded-2xl shadow-xs overflow-hidden transition-all duration-200">
            <button
              onClick={() => toggleSection('makeup')}
              className="w-full p-5 sm:p-6 flex items-center justify-between text-left hover:bg-[#faf8f4] transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-[#faf5eb] border border-[#d4af37]/50 flex items-center justify-center text-[#996515] shrink-0">
                  <Smile className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-serif-luxury text-lg sm:text-xl font-bold text-[#18181b]">
                      Makeup, Bridal Glam, Nails & Henna
                    </h3>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#faf5eb] text-[#996515] font-bold border border-[#d4af37]/40">
                      {filteredMakeup.length + filteredNails.length} Services
                    </span>
                  </div>
                  <p className="text-xs text-[#6b6b66] mt-0.5">
                    Russian manicures, soft glam, bridal makeup, brow mapping (150 – 8,000 ETB)
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-[#996515] shrink-0">
                <span className="hidden sm:inline">{openSections.makeup ? 'Hide Options' : 'Drop Down Rates'}</span>
                {openSections.makeup ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </div>
            </button>

            {openSections.makeup && (
              <div className="p-5 sm:p-6 pt-0 border-t border-[#f0ebe1] bg-[#fdfbf7] space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                  {[...filteredMakeup, ...filteredNails].map((service) => (
                    <div
                      key={service.id}
                      className="p-4 bg-white border border-[#e5ded0] rounded-xl flex items-center justify-between gap-3 hover:border-[#d4af37] transition-all shadow-xs"
                    >
                      <div className="space-y-1 min-w-0">
                        <h4 className="font-bold text-xs sm:text-sm text-[#18181b] truncate">
                          {service.name}
                        </h4>
                        <p className="text-[11px] text-[#6b6b66] line-clamp-1">
                          {service.description}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-[#6b6b66]">
                          <span className="font-bold text-[#996515]">{service.price}</span>
                          <span>• {service.duration}</span>
                        </div>
                      </div>

                      <button
                        onClick={() => onSelectService(service)}
                        className="px-3.5 py-2 text-xs font-bold text-[#18181b] bg-[#faf5eb] hover:bg-[#d4af37] hover:text-[#050505] border border-[#d4af37]/40 rounded-lg transition-all shrink-0 cursor-pointer"
                      >
                        Book
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Pricing Guarantee Banner */}
        <div className="mt-12 max-w-4xl mx-auto p-5 bg-white border border-[#d4af37]/40 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#faf5eb] border border-[#d4af37] flex items-center justify-center text-[#996515] shrink-0 mx-auto sm:mx-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#18181b]">
                Hiber Transparent Price Promise
              </h4>
              <p className="text-xs text-[#6b6b66]">
                All prices in Ethiopian Birr (ETB). No hidden chair fees. Pay conveniently at our Friendship Building salon or via Telebirr / CBE.
              </p>
            </div>
          </div>

          <a
            href="tel:0975113940"
            className="px-5 py-2.5 rounded-xl bg-[#18181b] text-white hover:bg-[#27272a] text-xs font-bold uppercase tracking-wider shrink-0 transition-colors"
          >
            Call 0975113940
          </a>
        </div>

      </div>
    </section>
  );
};
