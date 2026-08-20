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
    <section className="py-20 lg:py-28 bg-[#faf7f2] text-[#191919] relative overflow-hidden border-b border-[#e5ded2]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#d4af37]/40 shadow-sm text-[11px] font-semibold text-[#996515] uppercase tracking-[0.25em] rounded-full">
            <HelpCircle className="w-3.5 h-3.5 text-[#996515]" />
            Frequently Asked Questions
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#18181b] tracking-tight">
            Everything You Need to Know About <br />
            <span className="text-[#996515]">Our Salon & Academy</span>
          </h2>

          <p className="text-base text-[#5c5c58] font-normal leading-relaxed">
            Have questions about our botanical formulas, academy course requirements, or bridal suite bookings? Find instant answers below.
          </p>
        </div>

        {/* Categories */}
        <div className="flex items-center justify-center gap-2 sm:gap-2.5 flex-wrap mb-10">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setCategoryFilter(c.id)}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold transition-all rounded-full cursor-pointer ${
                categoryFilter === c.id
                  ? 'bg-[#18181b] text-[#f5f5f0] shadow-md font-bold'
                  : 'bg-white text-[#6b6b66] border border-[#ded7cc] hover:border-[#996515]/60 hover:text-[#18181b] shadow-xs'
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
                className="bg-white border border-[#e8e2d8] hover:border-[#bfa15f] transition-all rounded-xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <h3 className="font-serif-luxury text-base sm:text-lg font-bold text-[#18181b]">
                    {faq.question}
                  </h3>
                  <div className={`p-2 rounded-full bg-[#f5f1ea] border border-[#dcd4c5] text-[#996515] transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 bg-[#18181b] text-[#d4af37] border-[#18181b]' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#5c5c58] leading-relaxed border-t border-[#f0ebe1] animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? */}
        <div className="mt-12 text-center p-6 bg-white border border-[#e8e2d8] rounded-2xl shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left space-y-1">
            <h4 className="font-serif-luxury font-bold text-sm text-[#18181b]">
              Still have specific questions?
            </h4>
            <p className="text-xs text-[#6b6b66]">
              Call our friendly Bahir Dar reception team directly for instant guidance.
            </p>
          </div>

          <div className="flex gap-3">
            <a
              href="tel:0975113940"
              className="px-4 py-2.5 text-xs font-bold text-[#050505] bg-[#d4af37] hover:bg-[#e5c358] uppercase tracking-wider rounded-lg shadow-sm flex items-center gap-1.5 transition-all"
            >
              Call 0975113940
            </a>
            <a
              href="tel:0912442905"
              className="px-4 py-2.5 text-xs font-semibold text-[#18181b] bg-[#f5f1ea] border border-[#dcd4c5] hover:bg-white hover:border-[#18181b] flex items-center gap-1.5 uppercase tracking-wider rounded-lg transition-all"
            >
              Call 0912442905
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
