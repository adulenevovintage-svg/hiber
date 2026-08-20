import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  Check, 
  ArrowRight, 
  ArrowLeft, 
  Leaf, 
  Droplet, 
  Calendar,
  RotateCcw
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface NaturalHairQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookPrescription: (treatmentName: string) => void;
}

export const NaturalHairQuizModal: React.FC<NaturalHairQuizModalProps> = ({
  isOpen,
  onClose,
  onBookPrescription
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [answers, setAnswers] = useState<{
    hairType?: string;
    porosity?: string;
    mainConcern?: string;
    stylingHabit?: string;
  }>({});

  if (!isOpen) return null;

  const handleSelect = (key: 'hairType' | 'porosity' | 'mainConcern' | 'stylingHabit', value: string) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
  };

  const handleNext = () => {
    if (currentStep === 3) {
      // Fire celebratory confetti for diagnosis completion!
      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#d4af37', '#f3e5ab', '#ffffff', '#22c55e']
        });
      } catch (e) {
        // Safe fallback
      }
    }
    setCurrentStep(prev => prev + 1);
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(1);
  };

  // Generate dynamic prescription
  const getPrescription = () => {
    if (answers.mainConcern === 'edges' || answers.mainConcern === 'thinning') {
      return {
        name: "Niger Seed (Nug) & Red Onion Sulfur Scalp Therapy",
        amharic: "የኑግ እና የቀይ ሽንኩርት የእድገት ህክምና",
        ingredients: ["Niger Seed (Nug)", "Red Onion Sulfur", "Wild Ginger Root", "Fresh Rosemary"],
        frequency: "Every 2 weeks under ozone steam",
        tips: "Avoid excessive edge gel tension; apply our rosemary hydrosol daily before sleep.",
        serviceId: "hair-treat-steam"
      };
    } else if (answers.porosity === 'low' || answers.mainConcern === 'dryness') {
      return {
        name: "Whipped Avocado Butter & Raw Honey Thermal Infusion",
        amharic: "የአቮካዶ እና የንፁህ ማር ጥልቅ የቅባት ህክምና",
        ingredients: ["Bahir Dar Avocado", "Ethiopian Raw Honey", "Warm Olive Oil", "Aloe Vera Gel"],
        frequency: "Every 2-3 weeks",
        tips: "Always apply leave-in conditioner while hair is warm and damp to lock hydration.",
        serviceId: "hair-treat-steam"
      };
    } else {
      return {
        name: "Fenugreek (Abish) & Ethiopian Coffee Strengthening Mask",
        amharic: "የአብሽ እና የቡና የጥንካሬ ማስክ",
        ingredients: ["Fenugreek (Abish)", "Highland Coffee Scrub", "Virgin Coconut Oil", "Hibiscus"],
        frequency: "Monthly deep strengthening session",
        tips: "Balance protein with moisture; alternate with our honey steam bath.",
        serviceId: "hair-treat-steam"
      };
    }
  };

  const prescription = getPrescription();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050505]/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-[#0e0e10] border border-[#d4af37]/60 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto space-y-6">
        
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-[#050505] border border-white/10 text-[#a3a39e] hover:text-[#f5f5f0] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#050505] border border-[#d4af37]/40 text-[10px] font-bold text-[#d4af37] uppercase tracking-[0.25em]">
            <Sparkles className="w-3 h-3 text-[#d4af37]" />
            Botanical Diagnostic Engine
          </div>
          <h3 className="text-2xl font-serif-luxury font-bold text-[#f5f5f0]">
            {currentStep <= 3 ? 'Personalized Hair & Scalp Analysis' : 'Your Custom Botanical Prescription'}
          </h3>
          {currentStep <= 3 && (
            <p className="text-xs text-[#a3a39e]">
              Step {currentStep} of 3 • Takes less than 1 minute
            </p>
          )}
        </div>

        {/* Step 1: Hair Texture & Pattern */}
        {currentStep === 1 && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <label className="text-sm font-semibold text-[#f5f5f0] block">
              1. What is your natural hair pattern or current texture?
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[
                { id: '4c', label: 'Type 4C Coils', desc: 'Tight, dense zig-zag pattern, prone to shrinkage' },
                { id: '4a-4b', label: 'Type 4A / 4B Curls', desc: 'S-shaped bouncy coils with moderate density' },
                { id: 'relaxed', label: 'Relaxed / Chemically Treated', desc: 'Chemically straightened, needs protein' },
                { id: 'locs', label: 'Locs / Natural Braided', desc: 'Established locs or regular protective styling' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => handleSelect('hairType', opt.id)}
                  className={`p-3.5 text-left border transition-all cursor-pointer ${
                    answers.hairType === opt.id
                      ? 'bg-[#050505] border-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                      : 'bg-[#050505]/60 border-white/10 hover:border-[#d4af37]/40'
                  }`}
                >
                  <div className="text-xs font-bold text-[#f5f5f0] flex items-center justify-between">
                    {opt.label}
                    {answers.hairType === opt.id && <Check className="w-3.5 h-3.5 text-[#d4af37]" />}
                  </div>
                  <div className="text-[11px] text-[#a3a39e] mt-1">{opt.desc}</div>
                </button>
              ))}
            </div>

            <div className="pt-2 flex justify-end">
              <button
                disabled={!answers.hairType}
                onClick={handleNext}
                className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#050505] bg-[#d4af37] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer flex items-center gap-1.5 transition-all"
              >
                Next Question <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Porosity & Moisture Absorption */}
        {currentStep === 2 && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <label className="text-sm font-semibold text-[#f5f5f0] block">
              2. How does your hair respond to water and oils (Porosity)?
            </label>

            <div className="space-y-2.5">
              {[
                { id: 'low', label: 'Low Porosity (Water beads on surface)', desc: 'Takes long to get wet and long to dry. Products feel like they sit on top without absorbing.' },
                { id: 'normal', label: 'Medium / Balanced Porosity', desc: 'Absorbs moisture easily and retains hydration with standard oils.' },
                { id: 'high', label: 'High Porosity (Soaks moisture instantly but dries out fast)', desc: 'Tends to feel dry again within hours; frequently gets frizzy.' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => handleSelect('porosity', opt.id)}
                  className={`w-full p-3.5 text-left border transition-all cursor-pointer ${
                    answers.porosity === opt.id
                      ? 'bg-[#050505] border-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                      : 'bg-[#050505]/60 border-white/10 hover:border-[#d4af37]/40'
                  }`}
                >
                  <div className="text-xs font-bold text-[#f5f5f0] flex items-center justify-between">
                    {opt.label}
                    {answers.porosity === opt.id && <Check className="w-3.5 h-3.5 text-[#d4af37]" />}
                  </div>
                  <div className="text-[11px] text-[#a3a39e] mt-1">{opt.desc}</div>
                </button>
              ))}
            </div>

            <div className="pt-2 flex items-center justify-between">
              <button
                onClick={() => setCurrentStep(1)}
                className="text-xs text-[#a3a39e] hover:text-[#f5f5f0] flex items-center gap-1 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Back
              </button>
              <button
                disabled={!answers.porosity}
                onClick={handleNext}
                className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#050505] bg-[#d4af37] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer flex items-center gap-1.5 transition-all"
              >
                Next Question <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Main Concern */}
        {currentStep === 3 && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <label className="text-sm font-semibold text-[#f5f5f0] block">
              3. What is your #1 hair or scalp priority right now?
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[
                { id: 'edges', label: 'Thinning Edges / Temple Loss', desc: 'Need rapid stimulation and gentle recovery' },
                { id: 'breakage', label: 'Excessive Snapping & Shedding', desc: 'Need protein bond reconstruction' },
                { id: 'dryness', label: 'Severe Dryness & Brittle Curls', desc: 'Need deep ozone hydration steam' },
                { id: 'growth', label: 'Accelerate Length & Density', desc: 'Need follicle awakening herbs' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => handleSelect('mainConcern', opt.id)}
                  className={`p-3.5 text-left border transition-all cursor-pointer ${
                    answers.mainConcern === opt.id
                      ? 'bg-[#050505] border-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                      : 'bg-[#050505]/60 border-white/10 hover:border-[#d4af37]/40'
                  }`}
                >
                  <div className="text-xs font-bold text-[#f5f5f0] flex items-center justify-between">
                    {opt.label}
                    {answers.mainConcern === opt.id && <Check className="w-3.5 h-3.5 text-[#d4af37]" />}
                  </div>
                  <div className="text-[11px] text-[#a3a39e] mt-1">{opt.desc}</div>
                </button>
              ))}
            </div>

            <div className="pt-2 flex items-center justify-between">
              <button
                onClick={() => setCurrentStep(2)}
                className="text-xs text-[#a3a39e] hover:text-[#f5f5f0] flex items-center gap-1 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Back
              </button>
              <button
                disabled={!answers.mainConcern}
                onClick={handleNext}
                className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#050505] bg-[#d4af37] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer flex items-center gap-1.5 shadow-lg transition-all"
              >
                Generate Prescription <Sparkles className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Final Custom Prescription Result */}
        {currentStep === 4 && (
          <div className="space-y-6 animate-in zoom-in-95 duration-300">
            
            <div className="p-5 bg-[#050505] border border-[#d4af37]/60 space-y-4">
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#d4af37]">
                  Recommended In-Salon Therapy
                </span>
                <h4 className="text-xl font-serif-luxury font-bold text-[#f5f5f0]">
                  {prescription.name}
                </h4>
                <p className="text-xs font-medium text-[#d4af37]">
                  {prescription.amharic}
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold text-[#f5f5f0] block">
                  Active Indigenous Super-Ingredients Formulated:
                </span>
                <div className="flex flex-wrap gap-2">
                  {prescription.ingredients.map((ing, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs px-2.5 py-1 bg-[#0e0e10] border border-[#d4af37]/40 text-[#d4af37] font-medium flex items-center gap-1"
                    >
                      <Leaf className="w-3 h-3 text-[#d4af37]" />
                      {ing}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-[#0e0e10] border border-white/10 text-xs text-[#e8e8e2] space-y-1">
                <div className="font-semibold text-[#d4af37]">
                  Home Regimen & Salon Advice:
                </div>
                <p className="text-[11px] text-[#a3a39e] leading-relaxed font-light">
                  {prescription.tips}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-[#a3a39e] hover:text-[#f5f5f0] border border-white/10 hover:border-[#d4af37]/40 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Retake Quiz
              </button>

              <button
                onClick={() => {
                  onClose();
                  onBookPrescription(prescription.name);
                }}
                className="w-full sm:flex-1 py-3 text-xs font-bold uppercase tracking-wider text-[#050505] bg-[#d4af37] hover:brightness-110 shadow-xl flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <Calendar className="w-4 h-4" />
                Book This Prescribed Treatment
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
