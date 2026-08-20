import React, { useState } from 'react';
import { 
  Sparkles, 
  GraduationCap, 
  MapPin, 
  CheckCircle2, 
  Award, 
  HeartHandshake, 
  Leaf, 
  Scissors,
  Building2,
  ShieldAlert,
  Users
} from 'lucide-react';
import { BRAND_INFO } from '../data/salonData';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'salon' | 'academy'>('salon');

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#080808] relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#d4af37]/4 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#d4af37]/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0e0e10] border border-[#d4af37]/30 text-[11px] font-semibold text-[#d4af37] uppercase tracking-[0.25em]">
            <Sparkles className="w-3.5 h-3.5" />
            The Hiber Heritage & Vision
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#f5f5f0] tracking-tight">
            Where Ethiopian Beauty Royalty Meets <br />
            <span className="gold-gradient-text">World-Class Professional Training</span>
          </h2>

          <p className="text-base text-[#a3a39e] font-light leading-relaxed">
            Founded in the heart of Bahir Dar, Hiber Beauty Salon & Academy represents a new standard of luxury self-care and professional vocational empowerment. We unite indigenous botanical hair traditions with high-precision modern salon techniques.
          </p>
        </div>

        {/* Dual Pillar Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="p-1 bg-[#0e0e10] border border-white/10 inline-flex items-center gap-1.5">
            <button
              onClick={() => setActiveTab('salon')}
              className={`px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer uppercase tracking-wider ${
                activeTab === 'salon'
                  ? 'bg-[#d4af37] text-[#050505] shadow-lg font-bold'
                  : 'text-[#a3a39e] hover:text-[#f5f5f0]'
              }`}
            >
              <Scissors className="w-4 h-4" />
              The Luxury Salon Experience
            </button>

            <button
              onClick={() => setActiveTab('academy')}
              className={`px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer uppercase tracking-wider ${
                activeTab === 'academy'
                  ? 'bg-[#d4af37] text-[#050505] shadow-lg font-bold'
                  : 'text-[#a3a39e] hover:text-[#f5f5f0]'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              The Professional Academy
            </button>
          </div>
        </div>

        {/* Tab 1: The Luxury Salon Experience */}
        {activeTab === 'salon' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center animate-in fade-in duration-300">
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
                  Personalized Self-Care Sanctuary
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#f5f5f0]">
                  A Refined Haven for Authentic Hair, Bridal & Skincare
                </h3>
                <p className="text-sm sm:text-base text-[#a3a39e] leading-relaxed font-light">
                  Stepping into our 2nd-floor salon at Friendship Building offers an immediate escape into serene luxury. Our master stylists specialize in high-end Shuruba, delicate knotless braids, flawless silk presses, bespoke hair coloring, and 100% natural organic steam hair therapies.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-[#0e0e10] border border-white/10 hover:border-[#d4af37]/40 transition-colors space-y-1.5">
                  <div className="w-8 h-8 bg-[#d4af37]/15 flex items-center justify-center text-[#d4af37]">
                    <Leaf className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-[#f5f5f0]">Indigenous Botanicals</h4>
                  <p className="text-xs text-[#a3a39e]">
                    Formulated with fresh Nug, Abish, Rosemary, Honey, and Coffee for proven follicle restoration.
                  </p>
                </div>

                <div className="p-4 bg-[#0e0e10] border border-white/10 hover:border-[#d4af37]/40 transition-colors space-y-1.5">
                  <div className="w-8 h-8 bg-[#d4af37]/15 flex items-center justify-center text-[#d4af37]">
                    <Award className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-[#f5f5f0]">Hospital-Grade Hygiene</h4>
                  <p className="text-xs text-[#a3a39e]">
                    Medical autoclave tool sterilization, sealed single-use files, and immaculate workstations.
                  </p>
                </div>

                <div className="p-4 bg-[#0e0e10] border border-white/10 hover:border-[#d4af37]/40 transition-colors space-y-1.5">
                  <div className="w-8 h-8 bg-[#d4af37]/15 flex items-center justify-center text-[#d4af37]">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-[#f5f5f0]">Bridal VIP Suites</h4>
                  <p className="text-xs text-[#a3a39e]">
                    Private dressing suites for brides, crown placements, Melse coordination, and bridal parties.
                  </p>
                </div>

                <div className="p-4 bg-[#0e0e10] border border-white/10 hover:border-[#d4af37]/40 transition-colors space-y-1.5">
                  <div className="w-8 h-8 bg-[#d4af37]/15 flex items-center justify-center text-[#d4af37]">
                    <HeartHandshake className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-[#f5f5f0]">Scalp-First Philosophy</h4>
                  <p className="text-xs text-[#a3a39e]">
                    Zero-tension braiding, heat-protection shields, and deep moisture locking without harsh chemicals.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-3 text-xs text-[#d4af37] font-semibold">
                <MapPin className="w-4 h-4" />
                <span>Friendship Building 2nd Floor, Kebele 4 (In front of St. George Church)</span>
              </div>
            </div>

            {/* 4 Sanctuary Showcase Portraits with Immersive 3D Cutout & Seamless Obsidian Background Blending */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              
              {/* Portrait 1 - Bridal Glamour & Crown */}
              <div className="group relative flex flex-col items-center justify-end h-88 sm:h-96 lg:h-[420px] transition-all duration-700">
                {/* 3D Radiant Gold Aura Behind Model */}
                <div className="absolute top-1/4 w-44 h-44 rounded-full bg-[#d4af37]/15 blur-[65px] group-hover:bg-[#d4af37]/30 group-hover:scale-125 transition-all duration-700 pointer-events-none" />
                
                {/* Immersive Cutout Container */}
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://cdn.phototourl.com/free/2026-08-20-10e5647e-6559-4757-812f-2dba26a71411.jpg" 
                    alt="Hiber Luxury Hair & Styling Artistry"
                    className="w-full h-full object-cover object-top filter contrast-[1.08] brightness-[1.02] transform group-hover:scale-108 group-hover:-translate-y-1 transition-all duration-700 ease-out [mask-image:radial-gradient(ellipse_at_50%_35%,black_45%,rgba(0,0,0,0.8)_65%,transparent_98%)] [-webkit-mask-image:radial-gradient(ellipse_at_50%_35%,black_45%,rgba(0,0,0,0.8)_65%,transparent_98%)]"
                    referrerPolicy="no-referrer"
                  />

                  {/* Multi-directional Smooth Black Feathering */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-transparent pointer-events-none" />
                  <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#050505] via-[#050505]/70 to-transparent pointer-events-none" />
                  <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#050505] to-transparent pointer-events-none" />
                  <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#050505] to-transparent pointer-events-none" />
                </div>

                {/* 3D Floating Caption Chip */}
                <div className="absolute bottom-2 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0e0e10]/90 border border-[#d4af37]/40 shadow-[0_10px_25px_rgba(0,0,0,0.9)] backdrop-blur-md group-hover:border-[#d4af37] group-hover:bg-[#141416] transition-all duration-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                  <span className="text-[11px] font-serif-luxury font-bold tracking-wider text-[#f5f5f0] uppercase group-hover:text-[#d4af37] transition-colors">
                    Bridal Glamour & Crowns
                  </span>
                  <span className="text-[8.5px] tracking-widest uppercase text-[#d4af37] font-semibold px-1.5 py-0.5 bg-[#d4af37]/15 rounded-sm">
                    VIP
                  </span>
                </div>
              </div>

              {/* Portrait 2 - Artisan Braiding & Shuruba */}
              <div className="group relative flex flex-col items-center justify-end h-88 sm:h-96 lg:h-[420px] transition-all duration-700">
                <div className="absolute top-1/4 w-44 h-44 rounded-full bg-[#d4af37]/15 blur-[65px] group-hover:bg-[#d4af37]/30 group-hover:scale-125 transition-all duration-700 pointer-events-none" />
                
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://cdn.phototourl.com/free/2026-08-20-b13cd102-55f8-4ca5-9db0-a7329f02e770.jpg" 
                    alt="Hiber Master Hair Braiding & Shuruba"
                    className="w-full h-full object-cover object-top filter contrast-[1.08] brightness-[1.02] transform group-hover:scale-108 group-hover:-translate-y-1 transition-all duration-700 ease-out [mask-image:radial-gradient(ellipse_at_50%_35%,black_45%,rgba(0,0,0,0.8)_65%,transparent_98%)] [-webkit-mask-image:radial-gradient(ellipse_at_50%_35%,black_45%,rgba(0,0,0,0.8)_65%,transparent_98%)]"
                    referrerPolicy="no-referrer"
                  />

                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-transparent pointer-events-none" />
                  <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#050505] via-[#050505]/70 to-transparent pointer-events-none" />
                  <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#050505] to-transparent pointer-events-none" />
                  <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#050505] to-transparent pointer-events-none" />
                </div>

                <div className="absolute bottom-2 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0e0e10]/90 border border-[#d4af37]/40 shadow-[0_10px_25px_rgba(0,0,0,0.9)] backdrop-blur-md group-hover:border-[#d4af37] group-hover:bg-[#141416] transition-all duration-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                  <span className="text-[11px] font-serif-luxury font-bold tracking-wider text-[#f5f5f0] uppercase group-hover:text-[#d4af37] transition-colors">
                    Artisan Braiding & Shuruba
                  </span>
                  <span className="text-[8.5px] tracking-widest uppercase text-[#d4af37] font-semibold px-1.5 py-0.5 bg-[#d4af37]/15 rounded-sm">
                    Master
                  </span>
                </div>
              </div>

              {/* Portrait 3 - Silk Press & Custom Color */}
              <div className="group relative flex flex-col items-center justify-end h-88 sm:h-96 lg:h-[420px] transition-all duration-700">
                <div className="absolute top-1/4 w-44 h-44 rounded-full bg-[#d4af37]/15 blur-[65px] group-hover:bg-[#d4af37]/30 group-hover:scale-125 transition-all duration-700 pointer-events-none" />
                
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://cdn.phototourl.com/free/2026-08-20-95999e57-852d-4749-84c5-9981a705ec0c.jpg" 
                    alt="Hiber Salon Styling Suite & Hair Transformations"
                    className="w-full h-full object-cover object-top filter contrast-[1.08] brightness-[1.02] transform group-hover:scale-108 group-hover:-translate-y-1 transition-all duration-700 ease-out [mask-image:radial-gradient(ellipse_at_50%_35%,black_45%,rgba(0,0,0,0.8)_65%,transparent_98%)] [-webkit-mask-image:radial-gradient(ellipse_at_50%_35%,black_45%,rgba(0,0,0,0.8)_65%,transparent_98%)]"
                    referrerPolicy="no-referrer"
                  />

                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-transparent pointer-events-none" />
                  <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#050505] via-[#050505]/70 to-transparent pointer-events-none" />
                  <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#050505] to-transparent pointer-events-none" />
                  <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#050505] to-transparent pointer-events-none" />
                </div>

                <div className="absolute bottom-2 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0e0e10]/90 border border-[#d4af37]/40 shadow-[0_10px_25px_rgba(0,0,0,0.9)] backdrop-blur-md group-hover:border-[#d4af37] group-hover:bg-[#141416] transition-all duration-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                  <span className="text-[11px] font-serif-luxury font-bold tracking-wider text-[#f5f5f0] uppercase group-hover:text-[#d4af37] transition-colors">
                    Silk Press & Color
                  </span>
                  <span className="text-[8.5px] tracking-widest uppercase text-[#d4af37] font-semibold px-1.5 py-0.5 bg-[#d4af37]/15 rounded-sm">
                    Luxury
                  </span>
                </div>
              </div>

              {/* Portrait 4 - Organic Follicle Therapy */}
              <div className="group relative flex flex-col items-center justify-end h-88 sm:h-96 lg:h-[420px] transition-all duration-700">
                <div className="absolute top-1/4 w-44 h-44 rounded-full bg-[#d4af37]/15 blur-[65px] group-hover:bg-[#d4af37]/30 group-hover:scale-125 transition-all duration-700 pointer-events-none" />
                
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://cdn.phototourl.com/free/2026-08-20-1938a745-7a62-440f-945c-e4edbb402b72.jpg" 
                    alt="Hiber Natural Botanical & Hair Care Treatments"
                    className="w-full h-full object-cover object-top filter contrast-[1.08] brightness-[1.02] transform group-hover:scale-108 group-hover:-translate-y-1 transition-all duration-700 ease-out [mask-image:radial-gradient(ellipse_at_50%_35%,black_45%,rgba(0,0,0,0.8)_65%,transparent_98%)] [-webkit-mask-image:radial-gradient(ellipse_at_50%_35%,black_45%,rgba(0,0,0,0.8)_65%,transparent_98%)]"
                    referrerPolicy="no-referrer"
                  />

                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-transparent pointer-events-none" />
                  <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#050505] via-[#050505]/70 to-transparent pointer-events-none" />
                  <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#050505] to-transparent pointer-events-none" />
                  <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#050505] to-transparent pointer-events-none" />
                </div>

                <div className="absolute bottom-2 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0e0e10]/90 border border-[#d4af37]/40 shadow-[0_10px_25px_rgba(0,0,0,0.9)] backdrop-blur-md group-hover:border-[#d4af37] group-hover:bg-[#141416] transition-all duration-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                  <span className="text-[11px] font-serif-luxury font-bold tracking-wider text-[#f5f5f0] uppercase group-hover:text-[#d4af37] transition-colors">
                    Organic Follicle Therapy
                  </span>
                  <span className="text-[8.5px] tracking-widest uppercase text-[#d4af37] font-semibold px-1.5 py-0.5 bg-[#d4af37]/15 rounded-sm">
                    Organic
                  </span>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Tab 2: The Professional Academy */}
        {activeTab === 'academy' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center animate-in fade-in duration-300">
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
                  Accredited Vocational Excellence
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#f5f5f0]">
                  Empowering the Next Generation of Beauty Masters & Salon Owners
                </h3>
                <p className="text-sm sm:text-base text-[#a3a39e] leading-relaxed font-light">
                  Hiber Beauty Academy is Bahir Dar's benchmark beauty school. Over 1,200 successful graduates have earned accredited diplomas in Makeup Artistry, Master Hairstyling, Traditional Braiding, Natural Product Formulation, and Nail Tech.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-[#0e0e10] border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#f5f5f0]">80% Practical Hands-on Training</h4>
                    <p className="text-xs text-[#a3a39e]">
                      Students train directly on live models and state-of-the-art mannequin heads under the supervision of industry veterans.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-[#0e0e10] border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#f5f5f0]">Government-Accredited Certification</h4>
                    <p className="text-xs text-[#a3a39e]">
                      Graduates receive recognized diplomas along with a grand graduation ceremony with caps, gowns, and portfolio photography.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-[#0e0e10] border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#f5f5f0]">Entrepreneurship & Salon Business Mastery</h4>
                    <p className="text-xs text-[#a3a39e]">
                      We teach client consultation, social media marketing, pricing strategy, and salon setup so you can launch immediately.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-[#0e0e10] border border-[#d4af37]/30 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-[#d4af37] uppercase tracking-wider block">
                    Now Enrolling: Summer Intensive Batches
                  </span>
                  <span className="text-xs text-[#a3a39e]">Morning, afternoon, and weekend sessions available</span>
                </div>
                <a 
                  href="#academy" 
                  className="px-4 py-2 text-xs font-bold text-[#050505] bg-[#d4af37] hover:bg-[#e5c358] uppercase tracking-wider"
                >
                  View Courses
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="overflow-hidden border border-[#d4af37]/30 shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80" 
                    alt="Hiber Academy Graduation Ceremony"
                    className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="overflow-hidden border border-[#d4af37]/30 shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80" 
                    alt="Academy Makeup Class"
                    className="w-full h-44 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <div className="overflow-hidden border border-[#d4af37]/30 shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80" 
                    alt="Proud Graduate with Diploma"
                    className="w-full h-44 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="overflow-hidden border border-[#d4af37]/30 shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=600&q=80" 
                    alt="Braiding Class Live Practice"
                    className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
