import React, { useState } from 'react';
import { 
  Leaf, 
  Sparkles, 
  Droplet, 
  Heart, 
  ShieldCheck, 
  Zap, 
  Sun, 
  ArrowRight, 
  X, 
  Check, 
  Calendar,
  CheckCircle2,
  Info,
  ChevronDown,
  ChevronUp,
  Plus
} from 'lucide-react';
import { BOTANICAL_INGREDIENTS } from '../data/salonData';
import { BotanicalIngredient } from '../types';

interface NaturalBotanicalsSectionProps {
  onOpenBooking: (type?: 'salon', itemId?: string) => void;
  onOpenQuiz: () => void;
}

export const NaturalBotanicalsSection: React.FC<NaturalBotanicalsSectionProps> = ({ 
  onOpenBooking, 
  onOpenQuiz 
}) => {
  const [selectedIngredient, setSelectedIngredient] = useState<BotanicalIngredient | null>(null);
  const [filterTag, setFilterTag] = useState<string>('all');
  const [showAllIngredients, setShowAllIngredients] = useState<boolean>(false);

  const filterOptions = [
    { id: 'all', label: 'All 14 Super-Ingredients' },
    { id: 'growth', label: 'Hair Growth & Edges' },
    { id: 'moisture', label: 'Deep Hydration & Softness' },
    { id: 'strength', label: 'Anti-Breakage & Strength' },
    { id: 'scalp', label: 'Scalp Detox & Dandruff' },
  ];

  const getFilteredIngredients = () => {
    if (filterTag === 'all') return BOTANICAL_INGREDIENTS;
    if (filterTag === 'growth') {
      return BOTANICAL_INGREDIENTS.filter(item => 
        ['niger-seed', 'fenugreek', 'rosemary', 'onion', 'coffee', 'ginger'].includes(item.id)
      );
    }
    if (filterTag === 'moisture') {
      return BOTANICAL_INGREDIENTS.filter(item => 
        ['avocado', 'aloe-vera', 'honey', 'banana', 'coconut-oil', 'olive-oil'].includes(item.id)
      );
    }
    if (filterTag === 'strength') {
      return BOTANICAL_INGREDIENTS.filter(item => 
        ['fenugreek', 'hibiscus', 'coconut-oil', 'banana', 'sesame'].includes(item.id)
      );
    }
    if (filterTag === 'scalp') {
      return BOTANICAL_INGREDIENTS.filter(item => 
        ['coffee', 'rosemary', 'ginger', 'aloe-vera', 'onion'].includes(item.id)
      );
    }
    return BOTANICAL_INGREDIENTS;
  };

  const filteredList = getFilteredIngredients();
  const displayedList = showAllIngredients ? filteredList : filteredList.slice(0, 3);

  return (
    <section id="botanicals" className="py-20 lg:py-28 bg-[#f4f7f2] text-[#1e2922] relative overflow-hidden border-b border-[#d8e2d5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#2d5a3f]/30 shadow-sm text-[11px] font-semibold text-[#235338] uppercase tracking-[0.25em] rounded-full">
            <Leaf className="w-3.5 h-3.5 text-[#2d5a3f]" />
            100% Organic & Chemical-Free
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#18261e] tracking-tight">
            The Botanical Hair Bar: <br />
            <span className="text-[#996515]">Indigenous Ethiopian Super-Ingredients</span>
          </h2>

          <p className="text-base text-[#4a5c50] font-normal leading-relaxed">
            We honor centuries of Ethiopian natural beauty wisdom by formulating pure, freshly pressed botanical oils, herbal infusions, and fruit butters under micro-steam for transformative hair density, softness, and scalp health.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-2.5 mb-10">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => {
                setFilterTag(opt.id);
              }}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold transition-all rounded-full cursor-pointer ${
                filterTag === opt.id
                  ? 'bg-[#1e2e24] text-[#f5f7f4] shadow-md font-bold'
                  : 'bg-white text-[#4f6356] border border-[#d2ded0] hover:border-[#2d5a3f] hover:text-[#18261e] shadow-xs'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Ingredients Grid - Displays at most 3 initially */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {displayedList.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedIngredient(item)}
              className="group p-4 sm:p-5 bg-white border border-[#dce5da] hover:border-[#2d5a3f] transition-all duration-300 cursor-pointer flex flex-col justify-between hover:-translate-y-1 shadow-sm hover:shadow-lg rounded-xl"
            >
              <div>
                {/* Image & Badge */}
                <div className="relative h-44 sm:h-48 overflow-hidden mb-4 bg-[#eef3ec] rounded-lg">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  {item.badge && (
                    <span className="absolute top-2.5 right-2.5 bg-white/95 border border-[#2d5a3f]/30 text-[#1e4830] text-[9.5px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded shadow-xs">
                      {item.badge}
                    </span>
                  )}

                  {item.amharicName && (
                    <span className="absolute bottom-2.5 left-2.5 text-xs font-bold text-white bg-black/75 px-2.5 py-0.5 rounded backdrop-blur-xs">
                      {item.amharicName}
                    </span>
                  )}
                </div>

                {/* Name & Short description */}
                <div className="space-y-1.5">
                  <h3 className="font-serif-luxury font-bold text-base sm:text-lg text-[#18261e] group-hover:text-[#2d5a3f] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#566b5e] line-clamp-2 leading-relaxed">
                    {item.hairBenefit}
                  </p>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-3.5 mt-3.5 border-t border-[#edf2ec] flex items-center justify-between text-xs text-[#2d5a3f] font-bold">
                <span className="text-[11px] uppercase tracking-wider">View Active Benefits</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* See More / See Less Toggle Button */}
        {filteredList.length > 3 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAllIngredients(!showAllIngredients)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-[#2d5a3f]/40 hover:border-[#2d5a3f] text-[#235338] hover:bg-[#eef3ec] font-bold text-xs uppercase tracking-[0.14em] shadow-sm transition-all cursor-pointer group"
            >
              {showAllIngredients ? (
                <>
                  <span>Show Less Botanicals</span>
                  <ChevronUp className="w-4 h-4 text-[#2d5a3f] group-hover:-translate-y-0.5 transition-transform" />
                </>
              ) : (
                <>
                  <span>See More Botanicals ({filteredList.length} Total Recipes)</span>
                  <ChevronDown className="w-4 h-4 text-[#2d5a3f] group-hover:translate-y-0.5 transition-transform" />
                </>
              )}
            </button>
          </div>
        )}

        {/* Hair Quiz Callout Card */}
        <div className="mt-16 bg-[#18261e] text-white rounded-2xl border border-[#d4af37]/40 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#d4af37]/20 border border-[#d4af37]/50 rounded-full text-[11px] font-bold uppercase tracking-wider text-[#d4af37]">
                <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                Personalized Botanical Prescription
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#f5f5f0]">
                Discover Which Super-Ingredients Your Hair Needs Right Now
              </h3>
              
              <p className="text-xs sm:text-sm text-[#c8d4cc] max-w-2xl leading-relaxed font-light">
                Take our 3-question diagnostic quiz. We will analyze your hair texture (4C, 4B, transition, relaxed), scalp dryness, and growth goals to formulate your custom in-salon steam infusion.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button
                onClick={onOpenQuiz}
                className="px-6 py-3.5 rounded-lg font-bold text-xs uppercase tracking-[0.15em] text-[#050505] bg-[#d4af37] hover:bg-[#e5c358] shadow-xl flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                Take 1-Min Hair Quiz
              </button>

              <button
                onClick={() => onOpenBooking('salon', 'hair-treat-steam')}
                className="px-6 py-3 rounded-lg font-semibold text-xs tracking-wider text-[#f5f5f0] bg-white/10 border border-[#d4af37]/40 hover:bg-[#d4af37]/20 flex items-center justify-center gap-2 cursor-pointer uppercase"
              >
                <Calendar className="w-4 h-4 text-[#d4af37]" />
                Book Steam Mask Directly
              </button>
            </div>

          </div>
        </div>

      </div>

      {/* Interactive Ingredient Modal */}
      {selectedIngredient && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050505]/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#0e0e10] border border-[#d4af37]/40 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto space-y-6">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedIngredient(null)}
              className="absolute top-4 right-4 p-2 bg-[#141416] border border-white/10 text-[#a3a39e] hover:text-[#f5f5f0] hover:border-[#d4af37] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex flex-col sm:flex-row gap-5 items-start">
              <div className="w-24 h-24 sm:w-28 sm:h-28 overflow-hidden border border-[#d4af37]/40 shrink-0">
                <img 
                  src={selectedIngredient.image} 
                  alt={selectedIngredient.name} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#d4af37] font-semibold">
                    Botanical Profile
                  </span>
                  {selectedIngredient.badge && (
                    <span className="px-2 py-0.5 bg-[#d4af37]/20 border border-[#d4af37]/50 text-[10px] text-[#d4af37] font-bold uppercase">
                      {selectedIngredient.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-serif-luxury font-bold text-[#f5f5f0]">
                  {selectedIngredient.name}
                </h3>
                {selectedIngredient.amharicName && (
                  <p className="text-sm font-medium text-[#d4af37]">
                    {selectedIngredient.amharicName}
                  </p>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-[#e8e8e2] leading-relaxed font-light">
              {selectedIngredient.description}
            </p>

            {/* Deep Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-3.5 bg-[#141416] border border-white/10 space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#d4af37]">
                  Key Active Nutrients
                </span>
                <p className="text-xs text-[#f5f5f0] font-medium">
                  {selectedIngredient.keyNutrients}
                </p>
              </div>

              <div className="p-3.5 bg-[#141416] border border-white/10 space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#d4af37]">
                  Target Hair Concerns
                </span>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {selectedIngredient.targetConcerns.map((concern, idx) => (
                    <span key={idx} className="text-[10px] px-2 py-0.5 bg-[#050505] text-[#e8e8e2] border border-white/10">
                      {concern}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* How Hiber Applies It */}
            <div className="p-4 bg-[#050505] border border-[#d4af37]/30 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#d4af37] uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-[#d4af37]" />
                How We Formulate It at Hiber Salon Bahir Dar
              </div>
              <p className="text-xs text-[#e8e8e2] leading-relaxed font-light">
                {selectedIngredient.howWeUseIt}. Combined with therapeutic ozone steam for 30 minutes to facilitate molecular absorption deep into the hair cortex.
              </p>
            </div>

            {/* Modal Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3 justify-end border-t border-white/10">
              <button
                onClick={() => setSelectedIngredient(null)}
                className="w-full sm:w-auto px-5 py-2.5 text-xs uppercase tracking-wider font-semibold text-[#a3a39e] hover:text-[#f5f5f0] cursor-pointer"
              >
                Close
              </button>

              <button
                onClick={() => {
                  setSelectedIngredient(null);
                  onOpenBooking('salon', 'hair-treat-steam');
                }}
                className="w-full sm:w-auto px-6 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-[#050505] bg-[#d4af37] hover:bg-[#e5c358] flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                Book Steam Mask with {selectedIngredient.name}
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
