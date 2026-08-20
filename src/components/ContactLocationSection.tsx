import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Send, 
  Instagram, 
  MessageSquare, 
  Sparkles, 
  CheckCircle2,
  Calendar,
  Building2,
  Share2
} from 'lucide-react';
import { BRAND_INFO } from '../data/salonData';

interface ContactLocationSectionProps {
  onOpenBooking: () => void;
}

export const ContactLocationSection: React.FC<ContactLocationSectionProps> = ({ onOpenBooking }) => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    subject: 'Salon Appointment Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', phone: '', subject: 'Salon Appointment Inquiry', message: '' });
    }, 4000);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Hiber Beauty Salon & Academy! I would like to inquire about your services and academy courses in Bahir Dar.`
    );
    window.open(`https://wa.me/251975113940?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#050505] relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#d4af37]/4 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0e0e10] border border-[#d4af37]/30 text-[11px] font-semibold text-[#d4af37] uppercase tracking-[0.25em]">
            <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
            Visit Us in Bahir Dar
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#f5f5f0] tracking-tight">
            Prime Location, VIP Hospitality & <br />
            <span className="gold-gradient-text">Direct Contact Channels</span>
          </h2>

          <p className="text-base text-[#a3a39e] font-light leading-relaxed">
            Conveniently situated in Kebele 4, Friendship Building 2nd Floor, directly in front of St. George Church in Bahir Dar. Our concierge is ready to assist you.
          </p>
        </div>

        {/* Main Grid: Location Info + Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct Contacts & Map Card */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Location Details Card */}
            <div className="p-6 sm:p-8 bg-[#0e0e10] border border-[#d4af37]/40 shadow-xl space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#050505] border border-[#d4af37] flex items-center justify-center text-[#d4af37] shrink-0 shadow-md">
                  <Building2 className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d4af37]">
                    Bahir Dar Headquarters
                  </span>
                  <h3 className="text-xl font-serif-luxury font-bold text-[#f5f5f0]">
                    Friendship Building, 2nd Floor
                  </h3>
                  <p className="text-xs sm:text-sm text-[#a3a39e]">
                    Kebele 4, Directly in front of St. George Church, Bahir Dar, Ethiopia
                  </p>
                </div>
              </div>

              {/* Contact Numbers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                <div className="p-4 bg-[#050505] border border-white/10 space-y-1">
                  <span className="text-[10px] uppercase font-bold text-[#a3a39e] tracking-wider block">
                    Hotline & Reservations 1
                  </span>
                  <a 
                    href={`tel:${BRAND_INFO.phone1}`} 
                    className="text-base font-bold text-[#d4af37] hover:underline flex items-center gap-1.5"
                  >
                    <Phone className="w-4 h-4 text-[#d4af37]" />
                    {BRAND_INFO.phone1}
                  </a>
                </div>

                <div className="p-4 bg-[#050505] border border-white/10 space-y-1">
                  <span className="text-[10px] uppercase font-bold text-[#a3a39e] tracking-wider block">
                    Academy & Salon Line 2
                  </span>
                  <a 
                    href={`tel:${BRAND_INFO.phone2}`} 
                    className="text-base font-bold text-[#d4af37] hover:underline flex items-center gap-1.5"
                  >
                    <Phone className="w-4 h-4 text-[#d4af37]" />
                    {BRAND_INFO.phone2}
                  </a>
                </div>
              </div>

              {/* Hours & WhatsApp */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between p-3 bg-[#050505] border border-white/10 text-xs">
                  <span className="text-[#a3a39e] flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#d4af37]" />
                    Opening Hours:
                  </span>
                  <span className="font-semibold text-[#f5f5f0]">{BRAND_INFO.hours}</span>
                </div>

                <button
                  onClick={handleWhatsAppDirect}
                  className="w-full py-3 text-xs font-bold uppercase tracking-wider text-[#050505] bg-[#d4af37] hover:brightness-110 shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  Chat Directly on WhatsApp (+251 975 113940)
                </button>
              </div>

            </div>

            {/* Visual Stylized Map Card */}
            <div className="p-6 bg-[#0e0e10] border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#d4af37]" />
                  <h4 className="font-serif-luxury font-bold text-sm text-[#f5f5f0]">
                    Neighborhood Landmarks & Transit
                  </h4>
                </div>
                <span className="text-[10px] uppercase tracking-wider text-[#22c55e] font-bold">
                  Prime City Center
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs text-[#a3a39e]">
                <div className="p-2.5 bg-[#050505] border border-white/10">
                  <span className="font-semibold text-[#f5f5f0] block">St. George Church</span>
                  <span className="text-[11px]">Directly Across Street</span>
                </div>
                <div className="p-2.5 bg-[#050505] border border-white/10">
                  <span className="font-semibold text-[#f5f5f0] block">Friendship Building</span>
                  <span className="text-[11px]">2nd Floor Main Entrance</span>
                </div>
                <div className="p-2.5 bg-[#050505] border border-white/10">
                  <span className="font-semibold text-[#f5f5f0] block">Kebele 4 Square</span>
                  <span className="text-[11px]">2 Mins Walk</span>
                </div>
                <div className="p-2.5 bg-[#050505] border border-white/10">
                  <span className="font-semibold text-[#f5f5f0] block">Lake Tana Shore</span>
                  <span className="text-[11px]">5 Mins Drive</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Message / Inquiry Form */}
          <div className="lg:col-span-6 bg-[#0e0e10] border border-[#d4af37]/40 p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
            <div className="space-y-6">
              
              <div className="space-y-1 pb-4 border-b border-white/10">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#d4af37]">
                  Online Concierge
                </span>
                <h3 className="text-2xl font-serif-luxury font-bold text-[#f5f5f0]">
                  Send an Inquiry or Book a Call
                </h3>
                <p className="text-xs text-[#a3a39e]">
                  Have questions about course fees, bridal timelines, or natural hair steam sessions? We reply promptly during business hours.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 bg-[#050505] border border-[#22c55e]/50 text-center space-y-3 animate-in zoom-in-95 duration-300">
                  <div className="w-12 h-12 rounded-full bg-[#22c55e]/20 text-[#86efac] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif-luxury font-bold text-lg text-[#f5f5f0]">
                    Thank You! Message Received
                  </h4>
                  <p className="text-xs text-[#a3a39e] max-w-sm mx-auto">
                    Our Bahir Dar reception team will call or WhatsApp you shortly at <span className="text-[#d4af37] font-bold">{formState.phone || 'your phone'}</span>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-[#f5f5f0] block mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Mahlet Kebede"
                      className="w-full px-4 py-3 bg-[#050505] border border-white/10 text-[#f5f5f0] placeholder:text-[#52525b] text-xs focus:outline-none focus:border-[#d4af37] transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-[#f5f5f0] block mb-1.5">
                        Phone Number (Ethiopia) *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="09XXXXXXXX"
                        className="w-full px-4 py-3 bg-[#050505] border border-white/10 text-[#f5f5f0] placeholder:text-[#52525b] text-xs focus:outline-none focus:border-[#d4af37] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-[#f5f5f0] block mb-1.5">
                        Inquiry Topic *
                      </label>
                      <select
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        className="w-full px-4 py-3 bg-[#050505] border border-white/10 text-[#f5f5f0] text-xs focus:outline-none focus:border-[#d4af37] transition-colors cursor-pointer"
                      >
                        <option>Salon Appointment Inquiry</option>
                        <option>Academy Course & Summer Batch Enrollment</option>
                        <option>Bridal Glam & Melse Reservation</option>
                        <option>Natural Botanical Hair Care Prescription</option>
                        <option>Other Question</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#f5f5f0] block mb-1.5">
                      Your Message or Preferred Date
                    </label>
                    <textarea
                      rows={3}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Tell us what service you're looking for, wedding date, or academy questions..."
                      className="w-full px-4 py-3 bg-[#050505] border border-white/10 text-[#f5f5f0] placeholder:text-[#52525b] text-xs focus:outline-none focus:border-[#d4af37] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 font-bold text-xs uppercase tracking-wider text-[#050505] bg-[#d4af37] hover:brightness-110 shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all"
                  >
                    <Send className="w-4 h-4" />
                    Submit Inquiry to Hiber Team
                  </button>
                </form>
              )}

            </div>

            {/* Quick Instant Booking Shortcut */}
            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-[#a3a39e]">
                Ready to book your exact time slot right now?
              </span>
              <button
                onClick={onOpenBooking}
                className="text-xs font-bold text-[#d4af37] hover:underline cursor-pointer uppercase tracking-wider"
              >
                Open Booking Portal
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
