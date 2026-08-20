import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Crown, 
  Scissors, 
  Palette, 
  Leaf, 
  Activity, 
  Gift, 
  GraduationCap, 
  Tag, 
  Image as ImageIcon, 
  ShieldCheck, 
  Star, 
  HelpCircle, 
  MapPin 
} from 'lucide-react';

interface SectionInfo {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const SECTIONS: SectionInfo[] = [
  { id: 'hero', label: 'Welcome', icon: <Sparkles className="w-3.5 h-3.5" /> },
  { id: 'about', label: 'About Sanctuary', icon: <Crown className="w-3.5 h-3.5" /> },
  { id: 'services', label: 'Hair & Braids', icon: <Scissors className="w-3.5 h-3.5" /> },
  { id: 'makeup-beauty', label: 'Makeup & Beauty', icon: <Palette className="w-3.5 h-3.5" /> },
  { id: 'botanicals', label: 'Natural Botanicals', icon: <Leaf className="w-3.5 h-3.5" /> },
  { id: 'hair-growth', label: 'Growth Therapies', icon: <Activity className="w-3.5 h-3.5" /> },
  { id: 'bridal-packages', label: 'Bridal & Packages', icon: <Gift className="w-3.5 h-3.5" /> },
  { id: 'academy', label: 'Master Academy', icon: <GraduationCap className="w-3.5 h-3.5" /> },
  { id: 'prices', label: 'Price Explorer', icon: <Tag className="w-3.5 h-3.5" /> },
  { id: 'gallery', label: 'Graduates & Gallery', icon: <ImageIcon className="w-3.5 h-3.5" /> },
  { id: 'why-choose', label: 'Why Hiber', icon: <ShieldCheck className="w-3.5 h-3.5" /> },
  { id: 'testimonials', label: 'Testimonials', icon: <Star className="w-3.5 h-3.5" /> },
  { id: 'faq', label: 'FAQ', icon: <HelpCircle className="w-3.5 h-3.5" /> },
  { id: 'contact', label: 'Location & Contact', icon: <MapPin className="w-3.5 h-3.5" /> },
];

export const SideProgress: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = window.scrollY;
      const progress = (currentScroll / totalScroll) * 100;
      setScrollProgress(progress);

      // Determine active section
      const sectionElements = SECTIONS.map(s => document.getElementById(s.id)).filter(Boolean);
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside 
      aria-label="Section Navigation Progress" 
      className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center py-6 px-2.5 bg-white/80 backdrop-blur-md border border-[#d4af37]/40 rounded-full shadow-2xl shadow-black/5"
    >
      {/* Vertical Progress Bar Track */}
      <div className="absolute top-6 bottom-6 w-0.5 bg-[#e5dfd3] rounded-full -z-10 overflow-hidden">
        <div 
          className="w-full bg-gradient-to-b from-[#d4af37] via-[#996515] to-[#d4af37] transition-all duration-150"
          style={{ height: `${scrollProgress}%` }}
        />
      </div>

      {/* Section Dots & Tooltips */}
      <div className="flex flex-col gap-3.5 items-center">
        {SECTIONS.map((sec) => {
          const isActive = activeSection === sec.id;
          const isHovered = hoveredSection === sec.id;

          return (
            <div 
              key={sec.id}
              className="relative flex items-center justify-end group cursor-pointer"
              onMouseEnter={() => setHoveredSection(sec.id)}
              onMouseLeave={() => setHoveredSection(null)}
              onClick={() => scrollToSection(sec.id)}
            >
              {/* Floating Label Tooltip */}
              <div className={`absolute right-9 px-3 py-1.5 bg-[#18181b] text-[#f5f5f0] text-xs font-semibold rounded-lg shadow-xl border border-[#d4af37]/40 whitespace-nowrap transition-all duration-300 pointer-events-none flex items-center gap-2 ${
                isHovered || isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
              }`}>
                <span className="text-[#d4af37]">{sec.icon}</span>
                <span>{sec.label}</span>
                <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-[#18181b] border-t border-r border-[#d4af37]/40 rotate-45" />
              </div>

              {/* Indicator Dot Button */}
              <button
                aria-label={`Scroll to ${sec.label}`}
                className={`w-3.5 h-3.5 rounded-full transition-all duration-300 flex items-center justify-center border ${
                  isActive
                    ? 'bg-[#d4af37] border-[#996515] scale-125 shadow-md shadow-[#d4af37]/50 ring-2 ring-[#d4af37]/20'
                    : isHovered
                    ? 'bg-white border-[#d4af37] scale-110 shadow-sm'
                    : 'bg-[#f0ebe1] border-[#dcd4c5] hover:border-[#d4af37]'
                }`}
              >
                {isActive && <div className="w-1 h-1 rounded-full bg-white animate-pulse" />}
              </button>
            </div>
          );
        })}
      </div>

      {/* Percentage Pill at bottom */}
      <div className="mt-4 pt-4 border-t border-[#e5dfd3] text-[9px] font-bold text-[#996515] uppercase tracking-tighter">
        {Math.round(scrollProgress)}%
      </div>
    </aside>
  );
};
