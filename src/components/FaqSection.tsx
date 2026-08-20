import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  Sparkles, 
  Calendar, 
  GraduationCap, 
  Crown,
  Leaf
} from 'lucide-react';
import { FAQS } from '../data/salonData';

export const FaqSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<string | null>(FAQS[0].id);
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'salon', label: 'Salon & Location' },
    { id: 'natural_care', label: 'Botanical Hair Treatments' },
    { id: 'academy', label: 'Academy Courses & Diplomas' },
    { id: 'bridal', label: 'Bridal Reservations' },
  ];

  const filteredFaqs = categoryFilter === 'all'
    ? FAQS
    : FAQS.filter(f => f.category === categoryFilter);

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#080808] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#d4af37]/4 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0e0e10] border border-[#d4af37]/30 text-[11px] font-semibold text-[#d4af37] uppercase tracking-[0.25em]">
            <HelpCircle className="w-3.5 h-3.5 text-[#d4af37]" />
            Frequently Asked Questions
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#f5f5f0] tracking-tight">
            Everything You Need to Know About <br />
            <span className="gold-gradient-text">Our Salon & Academy</span>
          </h2>

          <p className="text-base text-[#a3a39e] font-light leading-relaxed">
            Have questions about our botanical formulas, academy course requirements, or bridal suite bookings? Find instant answers below.
          </p>
        </div>

        {/* Categories */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setCategoryFilter(c.id)}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                categoryFilter === c.id
                  ? 'bg-[#d4af37] text-[#050505] shadow-md font-bold'
                  : 'bg-[#0e0e10] text-[#a3a39e] border border-white/10 hover:border-[#d4af37]/40 hover:text-[#f5f5f0]'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-[#0e0e10] border border-white/10 hover:border-[#d4af37]/40 transition-all overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <h3 className="font-serif-luxury text-base sm:text-lg font-bold text-[#f5f5f0]">
                    {faq.question}
                  </h3>
                  <div className={`p-2 bg-[#050505] border border-white/10 text-[#d4af37] transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 bg-[#d4af37]/20 border-[#d4af37]/50' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#a3a39e] leading-relaxed border-t border-white/10 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? */}
        <div className="mt-12 text-center p-6 bg-[#0e0e10] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left space-y-1">
            <h4 className="font-serif-luxury font-bold text-sm text-[#f5f5f0]">
              Still have specific questions?
            </h4>
            <p className="text-xs text-[#a3a39e]">
              Call our friendly Bahir Dar reception team directly for instant guidance.
            </p>
          </div>

          <div className="flex gap-3">
            <a
              href="tel:0975113940"
              className="px-4 py-2 text-xs font-bold text-[#050505] bg-[#d4af37] uppercase tracking-wider hover:brightness-110 flex items-center gap-1.5"
            >
              Call 0975113940
            </a>
            <a
              href="tel:0912442905"
              className="px-4 py-2 text-xs font-semibold text-[#d4af37] bg-[#050505] border border-[#d4af37]/40 hover:bg-[#d4af37]/10 flex items-center gap-1.5 uppercase tracking-wider"
            >
              Call 0912442905
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
