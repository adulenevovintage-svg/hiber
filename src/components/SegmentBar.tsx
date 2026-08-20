import React from 'react';
import { 
  Layers, 
  Sparkles, 
  Scissors, 
  Smile, 
  Leaf, 
  Crown, 
  GraduationCap, 
  Award, 
  MapPin,
  Tag,
  ChevronRight
} from 'lucide-react';
import { SiteSegment } from '../types';

interface SegmentBarProps {
  activeSegment: SiteSegment;
  onSelectSegment: (segment: SiteSegment) => void;
}

export const SegmentBar: React.FC<SegmentBarProps> = ({ activeSegment, onSelectSegment }) => {
  const segments: { id: SiteSegment; name: string; icon: React.ReactNode; count?: string; tag?: string }[] = [
    { id: 'all', name: 'All Services & Academy', icon: <Layers className="w-3.5 h-3.5" />, tag: 'Full Tour' },
    { id: 'prices', name: 'Price Guide & Explore', icon: <Tag className="w-3.5 h-3.5" />, count: 'Transparent ETB', tag: 'Prices' },
    { id: 'about', name: 'About & Sanctuary', icon: <Sparkles className="w-3.5 h-3.5" />, tag: 'Story' },
    { id: 'hair', name: 'Hair & Braiding', icon: <Scissors className="w-3.5 h-3.5" />, count: '20+ Styles' },
    { id: 'makeup', name: 'Makeup, Nails & Skin', icon: <Smile className="w-3.5 h-3.5" />, count: '15+ Treatments' },
    { id: 'botanicals', name: 'Botanical Spa & Regrowth', icon: <Leaf className="w-3.5 h-3.5" />, count: '14 Super-Oils' },
    { id: 'bridal', name: 'Bridal & VIP Packages', icon: <Crown className="w-3.5 h-3.5" />, count: 'Imperial Glam' },
    { id: 'academy', name: 'Beauty Academy', icon: <GraduationCap className="w-3.5 h-3.5" />, count: '6 Diplomas', tag: 'Enroll' },
    { id: 'gallery', name: 'Graduates & Showcase', icon: <Award className="w-3.5 h-3.5" />, tag: 'Alumni' },
    { id: 'contact', name: 'Bahir Dar Location & FAQ', icon: <MapPin className="w-3.5 h-3.5" />, tag: 'Kebele 4' },
  ];

  return (
    <div className="sticky top-[82px] md:top-[98px] z-30 bg-white/95 backdrop-blur-md border-b border-[#e5ded2] shadow-xs">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2.5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5 w-full">
            {segments.map((seg) => {
              const isActive = activeSegment === seg.id;
              return (
                <button
                  key={seg.id}
                  onClick={() => onSelectSegment(seg.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer shrink-0 ${
                    isActive
                      ? 'bg-[#18181b] text-[#f5f5f0] shadow-sm font-bold'
                      : 'bg-[#faf7f2] text-[#5c5c58] hover:bg-[#ede6d8] hover:text-[#18181b] border border-[#e5dfd3]'
                  }`}
                >
                  <span className={isActive ? 'text-[#d4af37]' : 'text-[#996515]'}>
                    {seg.icon}
                  </span>
                  <span>{seg.name}</span>
                  {seg.count && (
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-medium ${
                      isActive ? 'bg-[#27272a] text-[#d4af37]' : 'bg-[#eadecc] text-[#785112]'
                    }`}>
                      {seg.count}
                    </span>
                  )}
                  {seg.tag && (
                    <span className={`text-[9.5px] uppercase tracking-wider px-1.5 py-0.2 rounded font-bold ${
                      isActive ? 'bg-[#d4af37] text-[#050505]' : 'bg-[#eadecc] text-[#785112]'
                    }`}>
                      {seg.tag}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
