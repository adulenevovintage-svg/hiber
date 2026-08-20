import React from 'react';
import { 
  Sparkles, 
  Calendar, 
  GraduationCap, 
  MapPin, 
  ShieldCheck, 
  ArrowRight, 
  Star, 
  CheckCircle2,
  Award,
  Leaf
} from 'lucide-react';
import { BRAND_INFO } from '../data/salonData';

interface HeroProps {
  onOpenBooking: (type?: 'salon' | 'academy') => void;
  onOpenQuiz: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenQuiz }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-36 pb-16 sm:pt-40 lg:pt-44 lg:pb-24 overflow-hidden bg-[#050505]">
      {/* Background Ambience & Lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/85 via-[#050505]/65 to-[#050505] z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[#d4af37]/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#d4af37]/6 rounded-full blur-[130px] pointer-events-none" />
      
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-25 transform scale-105 transition-transform duration-1000"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=85')`
        }}
      />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Location & Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#0e0e10] border border-[#d4af37]/30 shadow-sm backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
              <span className="text-[11px] font-semibold text-[#f5f5f0] tracking-[0.15em] uppercase">
                Bahir Dar's Premier Luxury Salon & Academy
              </span>
              <span className="hidden sm:inline text-[11px] text-[#787873]">• Kebele 4</span>
            </div>

            {/* Main Luxury Title */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-luxury font-bold text-[#f5f5f0] leading-[1.12] tracking-tight">
                Authentic Ethiopian <br className="hidden sm:block" />
                <span className="gold-gradient-text">Beauty Artistry</span> & <br className="hidden sm:block" />
                Master Academy
              </h1>
              
              <p className="text-lg sm:text-xl font-editorial italic text-[#a3a39e] font-normal tracking-wide">
                {BRAND_INFO.amharicTagline}
              </p>
            </div>

            {/* Editorial Description */}
            <p className="text-base text-[#a3a39e] leading-relaxed max-w-2xl font-light">
              Experience the pinnacle of luxury hair styling, royal bridal glam, and indigenous 
              Ethiopian botanical therapies (Nug, Abish, Rosemary, Honey). Or elevate your career with our 
              government-accredited professional beauty academy certifications in Bahir Dar.
            </p>

            {/* Core Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="flex items-center gap-2.5 text-xs text-[#e8e8e2] bg-[#0e0e10] border border-white/10 p-3">
                <Leaf className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>100% Organic Botanical Scalp & Hair Steam Care</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#e8e8e2] bg-[#0e0e10] border border-white/10 p-3">
                <Sparkles className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>Imperial Bridal Melse & Shuruba Styling</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#e8e8e2] bg-[#0e0e10] border border-white/10 p-3">
                <Award className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>Certified Academy Diplomas with Live Practice</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => onOpenBooking('salon')}
                className="px-7 py-3.5 font-serif-luxury font-bold text-xs text-[#050505] bg-[#d4af37] hover:bg-[#e5c358] shadow-[0_0_25px_rgba(212,175,55,0.35)] transition-all flex items-center justify-center gap-2 uppercase tracking-[0.18em] cursor-pointer group"
              >
                <Calendar className="w-4 h-4" />
                Book Salon Appointment
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onOpenBooking('academy')}
                className="px-6 py-3.5 font-semibold text-xs text-[#f5f5f0] bg-[#0e0e10] border border-[#d4af37]/50 hover:bg-[#d4af37]/15 hover:border-[#d4af37] transition-all flex items-center justify-center gap-2 cursor-pointer uppercase tracking-[0.15em]"
              >
                <GraduationCap className="w-4 h-4 text-[#d4af37]" />
                Explore Academy Courses
              </button>
            </div>

            {/* Hair Quiz Launcher Banner */}
            <div className="pt-2">
              <button
                onClick={onOpenQuiz}
                className="w-full sm:w-auto inline-flex items-center justify-between gap-4 px-4 py-2.5 bg-gradient-to-r from-[#d4af37]/10 via-[#0e0e10] to-[#0e0e10] border border-[#d4af37]/30 hover:border-[#d4af37] transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 bg-[#d4af37]/15 text-[#d4af37]">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-semibold text-[#f5f5f0]">
                      Not sure which natural treatment fits your hair?
                    </p>
                    <p className="text-[11px] text-[#a3a39e]">
                      Take our 1-minute Botanical Hair & Scalp Diagnosis Quiz
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#d4af37] group-hover:underline flex items-center gap-1">
                  Start Quiz <ArrowRight className="w-3 h-3" />
                </span>
              </button>
            </div>

          </div>

          {/* Right Column: Hero Visual Feature Card */}
          <div className="lg:col-span-5 relative">
            
            {/* Decorative Gold Frame */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-1 bg-gradient-to-tr from-[#bf953f] via-[#fcf6ba] to-[#aa771c] blur-xs opacity-40" />
              
              <div className="relative overflow-hidden bg-[#0e0e10] border border-[#d4af37]/40 shadow-2xl">
                <img 
                  src="https://cdn.phototourl.com/free/2026-08-20-3acccbf0-d4a6-4187-a6d6-915d936fb380.jpg" 
                  alt="Hiber Beauty Salon Kebele 4 Friendship Building" 
                  className="w-full h-[420px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />

                {/* Floating Top Badge */}
                <div className="absolute top-4 right-4 bg-[#050505]/90 backdrop-blur-md px-3 py-1.5 border border-[#d4af37]/40 flex items-center gap-1.5 shadow-lg">
                  <Star className="w-3.5 h-3.5 text-[#d4af37] fill-[#d4af37]" />
                  <span className="text-xs font-bold text-[#f5f5f0]">4.9 / 5.0</span>
                  <span className="text-[10px] text-[#a3a39e]">(850+ Reviews)</span>
                </div>

                {/* Bottom Content Card on Image */}
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#050505]/92 backdrop-blur-md border border-[#d4af37]/25 space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-serif-luxury font-bold text-sm text-[#f5f5f0]">
                        Kebele 4 Friendship Building
                      </h4>
                      <p className="text-xs text-[#a3a39e] flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-[#d4af37]" />
                        2nd Floor, In Front of St. George Church
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] uppercase tracking-wider text-[#d4af37] font-semibold block">
                        Open Everyday
                      </span>
                      <span className="text-xs text-[#e8e8e2] font-medium">8:00 AM – 8:30 PM</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-[#a3a39e]">
                    <span>Direct Hotline:</span>
                    <a 
                      href={`tel:${BRAND_INFO.phone1}`} 
                      className="font-bold text-[#d4af37] hover:underline"
                    >
                      {BRAND_INFO.phone1}
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Floating Student / Client Trust Indicator */}
            <div className="mt-6 p-4 bg-[#0e0e10] border border-white/10 flex items-center justify-between backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#d4af37]/15 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-[#f5f5f0] uppercase tracking-wide">1,200+ Certified Graduates</h5>
                  <p className="text-[11px] text-[#a3a39e]">Summer Classes & Diploma Batches Now Enrolling</p>
                </div>
              </div>
              <button
                onClick={() => onOpenBooking('academy')}
                className="text-xs font-bold text-[#d4af37] hover:text-[#f5f5f0] uppercase tracking-wider cursor-pointer"
              >
                View Batches
              </button>
            </div>

          </div>

        </div>

        {/* Global Key Metric Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-10 border-t border-white/10">
          {BRAND_INFO.stats.map((stat, index) => (
            <div 
              key={index}
              className="p-4 bg-[#080808] border border-white/5 hover:border-[#d4af37]/40 transition-colors text-center"
            >
              <div className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#f5f5f0]">
                {stat.value}
              </div>
              <div className="text-xs text-[#a3a39e] mt-1 font-medium tracking-wider uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
