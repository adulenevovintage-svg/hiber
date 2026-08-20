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
    <section id="hair-growth" className="py-20 lg:py-28 bg-[#fdfcf9] text-[#19241d] relative overflow-hidden border-b border-[#e5dfd3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#2d5a3f]/30 shadow-sm text-[11px] font-semibold text-[#235338] uppercase tracking-[0.25em] rounded-full">
            <HeartPulse className="w-3.5 h-3.5 text-[#2d5a3f]" />
            Clinical Trichology & Organic Health
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#18261e] tracking-tight">
            Hair-Growth, Health & <br />
            <span className="text-[#996515]">Strengthening Therapies</span>
          </h2>

          <p className="text-base text-[#526458] font-normal leading-relaxed">
            Stop hair breakage and reverse edge loss. Our evidence-based organic hair wellness protocols combine ancestral Ethiopian botanicals with modern ozone steam and scalp stimulation.
          </p>
        </div>

        {/* Protocol Interactive Selector & Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Left Column: Protocol Tabs */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#6b7c71] font-bold block mb-2">
              Select a Specialized Treatment Protocol:
            </span>
            
            {protocols.map((p, index) => (
              <div
                key={p.id}
                onClick={() => setActiveProtocol(index)}
                className={`p-4 border transition-all cursor-pointer flex items-center justify-between rounded-xl ${
                  activeProtocol === index
                    ? 'bg-white border-[#2d5a3f] shadow-md ring-2 ring-[#2d5a3f]/20'
                    : 'bg-white/80 border-[#e1dad0] hover:border-[#b4c7b8] shadow-2xs'
                }`}
              >
                <div className="space-y-1">
                  <h4 className={`text-sm font-bold ${activeProtocol === index ? 'text-[#1e4830]' : 'text-[#18261e]'}`}>
                    {p.title}
                  </h4>
                  <p className="text-xs text-[#5f7366] line-clamp-1 font-normal">
                    {p.tagline}
                  </p>
                </div>

                <div className="text-right shrink-0 ml-3">
                  <span className="text-xs font-bold text-[#996515] block">
                    {p.price}
                  </span>
                  <span className="text-[10px] text-[#788a7e]">
                    {p.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Active Protocol Deep Details */}
          <div className="lg:col-span-7 bg-white border border-[#d6dfd4] p-6 sm:p-8 flex flex-col justify-between shadow-lg rounded-2xl">
            <div className="space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#edf2ec]">
                <div>
                  <span className="text-[11px] font-bold text-[#2d5a3f] uppercase tracking-[0.2em]">
                    Protocol #{activeProtocol + 1}
                  </span>
                  <h3 className="text-2xl font-serif-luxury font-bold text-[#18261e] mt-0.5">
                    {protocols[activeProtocol].title}
                  </h3>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-[#f4f7f2] border border-[#2d5a3f]/30 text-xs font-bold text-[#1e4830] rounded-md">
                    {protocols[activeProtocol].price}
                  </span>
                  <span className="text-xs text-[#526458] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#2d5a3f]" />
                    {protocols[activeProtocol].duration}
                  </span>
                </div>
              </div>

              <p className="text-sm text-[#3b4c41] leading-relaxed">
                {protocols[activeProtocol].description}
              </p>

              <div className="space-y-3">
                <h5 className="text-xs font-bold text-[#1e4830] uppercase tracking-wider">
                  Proven Clinical & Botanical Benefits:
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {protocols[activeProtocol].benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#26372d] p-2.5 bg-[#f6f9f5] border border-[#e1ebe0] rounded-lg">
                      <CheckCircle2 className="w-4 h-4 text-[#2d5a3f] shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-[#f8faf7] border border-[#d6dfd4] rounded-lg text-xs text-[#26372d] flex items-center justify-between">
                <span className="font-bold text-[#1e4830]">Recommended Frequency:</span>
                <span className="text-[#526458]">{protocols[activeProtocol].recommendedFrequency}</span>
              </div>

            </div>

            <div className="pt-6 mt-6 border-t border-[#edf2ec] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#526458]">
                Performed in Bahir Dar by certified hair practitioners
              </span>
              <button
                onClick={() => onOpenBooking('salon', 'hair-treat-steam')}
                className="w-full sm:w-auto px-6 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-[#050505] bg-[#d4af37] hover:bg-[#e5c358] shadow-md rounded-lg cursor-pointer"
              >
                Book This Protocol
              </button>
            </div>

          </div>

        </div>

        {/* 4-Week Rebirth Timeline */}
        <div className="mt-8 p-6 sm:p-8 bg-white border border-[#dce5db] shadow-md rounded-2xl">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-1">
            <h4 className="font-serif-luxury text-xl font-bold text-[#18261e]">
              Our Signature 4-Week Crown Restoration Journey
            </h4>
            <p className="text-xs text-[#526458]">
              A structured transformation system tailored for clients recovering from breakage and post-braid stress.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {timelineSteps.map((step, idx) => (
              <div 
                key={idx} 
                className="p-4 bg-[#f8faf7] border border-[#e2ece0] rounded-xl space-y-2 relative shadow-2xs"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#1e4830] px-2.5 py-0.5 bg-[#e4ede3] rounded-md">
                    {step.week}
                  </span>
                  <span className="text-[10px] text-[#718579] uppercase font-semibold">Phase 0{idx + 1}</span>
                </div>
                <h5 className="text-sm font-bold text-[#18261e]">{step.title}</h5>
                <p className="text-xs text-[#526458] leading-relaxed">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
