import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Calendar, 
  Zap, 
  Droplets, 
  Clock,
  HeartPulse,
  Flame,
  Award
} from 'lucide-react';

interface HairGrowthTherapiesProps {
  onOpenBooking: (type?: 'salon', itemId?: string) => void;
}

export const HairGrowthTherapies: React.FC<HairGrowthTherapiesProps> = ({ onOpenBooking }) => {
  const [activeProtocol, setActiveProtocol] = useState<number>(0);

  const protocols = [
    {
      id: "protocol-1",
      title: "Ozone Herbal Steam Infusion",
      tagline: "High-absorption thermal penetration for dry, brittle strands",
      description: "Opens stubborn low-porosity cuticles using warm ozone micro-vapor while infusing freshly pressed Niger Seed (Nug) and rosemary active compounds directly to the cortex.",
      benefits: [
        "Increases moisture retention by up to 300%",
        "Reduces mid-shaft snapping and split ends",
        "Deeply softens dense 4C curls and coiled textures",
        "Prevents fungal buildup and flaking"
      ],
      recommendedFrequency: "Every 2 to 3 weeks",
      duration: "60 mins",
      price: "800 ETB"
    },
    {
      id: "protocol-2",
      title: "Traction Edge & Temple Regrowth Therapy",
      tagline: "Targeted rehabilitation for thinning hairlines & damaged edges",
      description: "Combines red onion sulfur extract, wild ginger root, and high-frequency micro-current stimulation to awaken dormant follicles along tension-stressed edges.",
      benefits: [
        "Triggers rapid anagen growth phase in dormant follicles",
        "Soothes tension soreness from tight braiding",
        "Fortifies fragile baby hairs against future pulling",
        "Includes take-home 50ml active botanical growth dropper"
      ],
      recommendedFrequency: "Weekly for 4 weeks",
      duration: "45 mins",
      price: "950 ETB"
    },
    {
      id: "protocol-3",
      title: "Fenugreek (Abish) Protein Reconstruction",
      tagline: "Natural vegetable protein repair for over-processed, heat-damaged hair",
      description: "Restores broken keratin bonds using whipped Ethiopian Abish mucilage, pure forest honey, and avocado butter—providing immense elasticity without protein stiffness.",
      benefits: [
        "Fills in cuticle porosity gaps and fractures",
        "Restores natural curl elasticity and bounce",
        "Protects against humidity frizz and shedding",
        "Zero synthetic chemicals or formaldehyde"
      ],
      recommendedFrequency: "Monthly intensive treatment",
      duration: "75 mins",
      price: "1,100 ETB"
    },
    {
      id: "protocol-4",
      title: "Yirgacheffe Coffee Scalp Detox & DHT Block",
      tagline: "Exfoliation and root energizer to prevent hormonal thinning",
      description: "Finely ground organic Ethiopian highland coffee beans exfoliate dead skin cells while caffeine stimulates micro-vascular circulation and suppresses follicle-shrinking DHT.",
      benefits: [
        "Purifies pores from heavy grease and silicone buildup",
        "Accelerates scalp cell turnover and oxygenation",
        "Infuses roots with antioxidant polyphenols",
        "Leaves hair noticeably thicker at the base"
      ],
      recommendedFrequency: "Every 4 weeks",
      duration: "50 mins",
      price: "750 ETB"
    }
  ];

  const timelineSteps = [
    {
      week: "Week 1",
      title: "Scalp Purification & Porosity Reset",
      detail: "Clarifying scrub with Ethiopian coffee & aloe vera to unblock dormant follicles."
    },
    {
      week: "Week 2",
      title: "Deep Botanical Steam Infusion",
      detail: "Ozone micro-steam with warm Nug & Rosemary oil for intense cortex hydration."
    },
    {
      week: "Week 3",
      title: "Abish Protein Reconstruction",
      detail: "Fenugreek & Honey whipping treatment to restore broken keratin bonds and tensile strength."
    },
    {
      week: "Week 4",
      title: "Density Seal & Retention Check",
      detail: "Precision split-end dusting, edge serum sealing, and microscopic scalp evaluation."
    }
  ];

  return (
    <section id="hair-growth" className="py-20 lg:py-28 bg-[#080808] relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#d4af37]/4 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0e0e10] border border-[#d4af37]/30 text-[11px] font-semibold text-[#d4af37] uppercase tracking-[0.25em]">
            <HeartPulse className="w-3.5 h-3.5 text-[#d4af37]" />
            Clinical Trichology & Organic Health
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#f5f5f0] tracking-tight">
            Hair-Growth, Health & <br />
            <span className="gold-gradient-text">Strengthening Therapies</span>
          </h2>

          <p className="text-base text-[#a3a39e] font-light leading-relaxed">
            Stop hair breakage and reverse edge loss. Our evidence-based organic hair wellness protocols combine ancestral Ethiopian botanicals with modern ozone steam and scalp stimulation.
          </p>
        </div>

        {/* Protocol Interactive Selector & Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Left Column: Protocol Tabs */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#a3a39e] font-semibold block mb-2">
              Select a Specialized Treatment Protocol:
            </span>
            
            {protocols.map((p, index) => (
              <div
                key={p.id}
                onClick={() => setActiveProtocol(index)}
                className={`p-4 border transition-all cursor-pointer flex items-center justify-between ${
                  activeProtocol === index
                    ? 'bg-[#0e0e10] border-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.15)]'
                    : 'bg-[#080808] border-white/10 hover:border-white/20'
                }`}
              >
                <div className="space-y-1">
                  <h4 className={`text-sm font-bold ${activeProtocol === index ? 'text-[#d4af37]' : 'text-[#f5f5f0]'}`}>
                    {p.title}
                  </h4>
                  <p className="text-xs text-[#a3a39e] line-clamp-1 font-light">
                    {p.tagline}
                  </p>
                </div>

                <div className="text-right shrink-0 ml-3">
                  <span className="text-xs font-bold text-[#d4af37] block">
                    {p.price}
                  </span>
                  <span className="text-[10px] text-[#71716e]">
                    {p.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Active Protocol Deep Details */}
          <div className="lg:col-span-7 bg-[#0e0e10] border border-[#d4af37]/40 p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
            <div className="space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/10">
                <div>
                  <span className="text-[11px] font-semibold text-[#d4af37] uppercase tracking-[0.2em]">
                    Protocol #{activeProtocol + 1}
                  </span>
                  <h3 className="text-2xl font-serif-luxury font-bold text-[#f5f5f0] mt-0.5">
                    {protocols[activeProtocol].title}
                  </h3>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-[#050505] border border-[#d4af37]/30 text-xs font-bold text-[#d4af37]">
                    {protocols[activeProtocol].price}
                  </span>
                  <span className="text-xs text-[#a3a39e] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                    {protocols[activeProtocol].duration}
                  </span>
                </div>
              </div>

              <p className="text-sm text-[#e8e8e2] leading-relaxed font-light">
                {protocols[activeProtocol].description}
              </p>

              <div className="space-y-3">
                <h5 className="text-xs font-bold text-[#d4af37] uppercase tracking-wider">
                  Proven Clinical & Botanical Benefits:
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {protocols[activeProtocol].benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#e8e8e2] p-2.5 bg-[#141416] border border-white/10">
                      <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-[#050505] border border-[#d4af37]/30 text-xs text-[#e8e8e2] flex items-center justify-between">
                <span className="font-semibold text-[#d4af37]">Recommended Plan:</span>
                <span className="text-[#a3a39e]">{protocols[activeProtocol].recommendedFrequency}</span>
              </div>

            </div>

            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-[#a3a39e]">
                Performed in Bahir Dar by certified hair practitioners
              </span>
              <button
                onClick={() => onOpenBooking('salon', 'hair-treat-steam')}
                className="px-6 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-[#050505] bg-[#d4af37] hover:bg-[#e5c358] shadow-lg cursor-pointer"
              >
                Book This Protocol
              </button>
            </div>

          </div>

        </div>

        {/* 4-Week Rebirth Timeline */}
        <div className="mt-8 p-6 sm:p-8 bg-[#0e0e10] border border-white/10">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-1">
            <h4 className="font-serif-luxury text-xl font-bold text-[#f5f5f0]">
              Our Signature 4-Week Crown Restoration Journey
            </h4>
            <p className="text-xs text-[#a3a39e] font-light">
              A structured transformation system tailored for clients recovering from breakage and post-braid stress.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {timelineSteps.map((step, idx) => (
              <div 
                key={idx} 
                className="p-4 bg-[#141416] border border-white/10 space-y-2 relative"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#d4af37] px-2 py-0.5 bg-[#d4af37]/15">
                    {step.week}
                  </span>
                  <span className="text-[10px] text-[#71716e] uppercase">Phase 0{idx + 1}</span>
                </div>
                <h5 className="text-sm font-bold text-[#f5f5f0]">{step.title}</h5>
                <p className="text-xs text-[#a3a39e] leading-relaxed font-light">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
