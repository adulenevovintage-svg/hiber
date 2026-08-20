import React, { useState } from 'react';
import { 
  Sparkles, 
  GraduationCap, 
  Maximize2, 
  X, 
  ArrowRight, 
  MapPin, 
  Star,
  Award,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { GALLERY_ITEMS, GRADUATE_STORIES } from '../data/salonData';
import { GalleryItem } from '../types';

export const GraduatesGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const filters = [
    { id: 'all', label: 'All Masterpieces' },
    { id: 'academy', label: 'Academy Graduates & Classes' },
    { id: 'bridal', label: 'Bridal & Melse Glam' },
    { id: 'braids', label: 'Shuruba & Braiding' },
    { id: 'botanical', label: 'Natural Botanical Treatments' },
    { id: 'hair_styling', label: 'Silk Press & Hair Cuts' },
  ];

  const filteredGallery = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  const openLightbox = (item: GalleryItem) => {
    setLightboxItem(item);
  };

  const handleNextLightbox = () => {
    if (!lightboxItem) return;
    const currentIndex = filteredGallery.findIndex(i => i.id === lightboxItem.id);
    const nextIndex = (currentIndex + 1) % filteredGallery.length;
    setLightboxItem(filteredGallery[nextIndex]);
  };

  const handlePrevLightbox = () => {
    if (!lightboxItem) return;
    const currentIndex = filteredGallery.findIndex(i => i.id === lightboxItem.id);
    const prevIndex = (currentIndex - 1 + filteredGallery.length) % filteredGallery.length;
    setLightboxItem(filteredGallery[prevIndex]);
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#fdfcf9] text-[#1a1a1a] relative overflow-hidden border-b border-[#e5dfd3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#d4af37]/40 shadow-sm text-[11px] font-semibold text-[#996515] uppercase tracking-[0.25em] rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-[#996515]" />
            Real Transformations & Graduates
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#18181b] tracking-tight">
            Artistry in Motion: <br />
            <span className="text-[#996515]">Graduates & Salon Masterwork</span>
          </h2>

          <p className="text-base text-[#5c5c58] font-normal leading-relaxed">
            Witness the elegance of authentic Ethiopian beauty craftsmanship—from joyful academy graduation ceremonies in caps and gowns to flawless bridal glams and precision Shuruba.
          </p>
        </div>

        {/* Graduate Success Stories Spotlight */}
        <div className="mb-20 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-[#996515]" />
              <h3 className="font-serif-luxury text-xl font-bold text-[#18181b]">
                Featured Academy Alumni Spotlight
              </h3>
            </div>
            <span className="text-xs text-[#6b6b66] font-semibold hidden sm:inline uppercase tracking-wider">
              1,200+ Certified Graduates Nationwide
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {GRADUATE_STORIES.map((grad) => (
              <div
                key={grad.id}
                className="p-6 bg-white border border-[#e8e2d8] hover:border-[#bfa15f] hover:shadow-xl transition-all rounded-2xl flex flex-col justify-between shadow-sm group"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#d4af37] shrink-0 shadow-xs">
                      <img 
                        src={grad.image} 
                        alt={grad.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div>
                      <h4 className="font-serif-luxury font-bold text-base text-[#18181b]">
                        {grad.name}
                      </h4>
                      <p className="text-xs text-[#996515] font-bold">
                        {grad.course}
                      </p>
                      <span className="text-[10px] text-[#71716e] block mt-0.5 uppercase tracking-wider font-medium">
                        Class of {grad.graduationYear}
                      </span>
                    </div>
                  </div>

                  <p className="font-editorial italic text-sm text-[#3b3b38] leading-relaxed">
                    "{grad.quote}"
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#f0ebe1] flex items-center justify-between text-xs">
                  <span className="text-[#5c5c58] flex items-center gap-1 font-medium">
                    <Award className="w-3.5 h-3.5 text-[#996515]" />
                    {grad.achievement}
                  </span>
                  {grad.salonLocation && (
                    <span className="text-[#996515] font-bold flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#996515]" />
                      {grad.salonLocation}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-2.5 mb-10">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold transition-all rounded-full cursor-pointer ${
                activeFilter === f.id
                  ? 'bg-[#18181b] text-[#f5f5f0] shadow-md font-bold'
                  : 'bg-white text-[#6b6b66] border border-[#ded7cc] hover:border-[#996515]/60 hover:text-[#18181b] shadow-xs'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item)}
              className="group relative overflow-hidden rounded-2xl bg-[#f0ede6] border border-[#e2dcce] hover:border-[#996515] transition-all duration-300 cursor-pointer h-72 sm:h-80 shadow-md hover:shadow-xl"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Hover Dark Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Expand Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/70 border border-[#d4af37]/60 flex items-center justify-center text-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-xs">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Title & Caption */}
              <div className="absolute bottom-4 left-4 right-4 space-y-1 transform group-hover:-translate-y-1 transition-transform">
                <span className="text-[10px] uppercase tracking-wider text-[#d4af37] font-bold block">
                  {item.category.replace('_', ' ')}
                </span>
                <h4 className="font-serif-luxury font-bold text-base text-white">
                  {item.title}
                </h4>
                <p className="text-xs text-[#d1d1cc] line-clamp-2 font-light">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          
          {/* Close */}
          <button
            onClick={() => setLightboxItem(null)}
            className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors z-50 cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev / Next Controls */}
          <button
            onClick={handlePrevLightbox}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors z-50 cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNextLightbox}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors z-50 cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content */}
          <div className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center space-y-4">
            <div className="overflow-hidden rounded-2xl border border-[#d4af37]/40 shadow-2xl max-h-[65vh] bg-black">
              <img 
                src={lightboxItem.image} 
                alt={lightboxItem.title} 
                className="max-h-[65vh] w-auto object-contain mx-auto"
              />
            </div>

            <div className="text-center max-w-xl space-y-1">
              <h4 className="font-serif-luxury font-bold text-xl text-[#f5f5f0]">
                {lightboxItem.title}
              </h4>
              <p className="text-xs sm:text-sm text-[#a3a39e] font-light">
                {lightboxItem.caption}
              </p>
            </div>
          </div>

        </div>
      )}

    </section>
  );
};
