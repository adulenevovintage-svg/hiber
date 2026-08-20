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
    <section id="contact" className="py-20 lg:py-28 bg-[#fbf9f5] text-[#191919] relative overflow-hidden border-b border-[#e5ded2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#d4af37]/40 shadow-sm text-[11px] font-semibold text-[#996515] uppercase tracking-[0.25em] rounded-full">
            <MapPin className="w-3.5 h-3.5 text-[#996515]" />
            Visit Us in Bahir Dar
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#18181b] tracking-tight">
            Prime Location, VIP Hospitality & <br />
            <span className="text-[#996515]">Direct Contact Channels</span>
          </h2>

          <p className="text-base text-[#5c5c58] font-normal leading-relaxed">
            Conveniently situated in Kebele 4, Friendship Building 2nd Floor, directly in front of St. George Church in Bahir Dar. Our concierge is ready to assist you.
          </p>
        </div>

        {/* Main Grid: Location Info + Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct Contacts & Map Card */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Location Details Card */}
            <div className="p-6 sm:p-8 bg-white border border-[#e8e2d8] rounded-2xl shadow-sm space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#faf7f0] border border-[#dcd4c5] flex items-center justify-center text-[#996515] shrink-0 shadow-xs">
                  <Building2 className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#996515]">
                    Bahir Dar Headquarters
                  </span>
                  <h3 className="text-xl font-serif-luxury font-bold text-[#18181b]">
                    Friendship Building, 2nd Floor
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5c5c58]">
                    Kebele 4, Directly in front of St. George Church, Bahir Dar, Ethiopia
                  </p>
                </div>
              </div>

              {/* Contact Numbers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#f0ebe1]">
                <div className="p-4 bg-[#faf7f2] border border-[#ebe4d7] rounded-xl space-y-1">
                  <span className="text-[10px] uppercase font-bold text-[#71716e] tracking-wider block">
                    Hotline & Reservations 1
                  </span>
                  <a 
                    href={`tel:${BRAND_INFO.phone1}`} 
                    className="text-base font-bold text-[#996515] hover:underline flex items-center gap-1.5"
                  >
                    <Phone className="w-4 h-4 text-[#996515]" />
                    {BRAND_INFO.phone1}
                  </a>
                </div>

                <div className="p-4 bg-[#faf7f2] border border-[#ebe4d7] rounded-xl space-y-1">
                  <span className="text-[10px] uppercase font-bold text-[#71716e] tracking-wider block">
                    Academy & Salon Line 2
                  </span>
                  <a 
                    href={`tel:${BRAND_INFO.phone2}`} 
                    className="text-base font-bold text-[#996515] hover:underline flex items-center gap-1.5"
                  >
                    <Phone className="w-4 h-4 text-[#996515]" />
                    {BRAND_INFO.phone2}
                  </a>
                </div>
              </div>

              {/* Hours & WhatsApp */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between p-3.5 bg-[#faf7f2] border border-[#ebe4d7] rounded-xl text-xs">
                  <span className="text-[#5c5c58] flex items-center gap-2 font-medium">
                    <Clock className="w-4 h-4 text-[#996515]" />
                    Opening Hours:
                  </span>
                  <span className="font-bold text-[#18181b]">{BRAND_INFO.hours}</span>
                </div>

                <button
                  onClick={handleWhatsAppDirect}
                  className="w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#15803d] hover:bg-[#166534] shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  Chat Directly on WhatsApp (+251 975 113940)
                </button>
              </div>

            </div>

            {/* Visual Stylized Map Card */}
            <div className="p-6 bg-white border border-[#e8e2d8] rounded-2xl shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#996515]" />
                  <h4 className="font-serif-luxury font-bold text-sm text-[#18181b]">
                    Neighborhood Landmarks & Transit
                  </h4>
                </div>
                <span className="text-[10px] uppercase tracking-wider text-[#16a34a] font-bold bg-[#f0fdf4] px-2.5 py-0.5 rounded-full border border-[#bbf7d0]">
                  Prime City Center
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs text-[#5c5c58]">
                <div className="p-3 bg-[#faf7f2] border border-[#ebe4d7] rounded-xl">
                  <span className="font-bold text-[#18181b] block">St. George Church</span>
                  <span className="text-[11px] text-[#71716e]">Directly Across Street</span>
                </div>
                <div className="p-3 bg-[#faf7f2] border border-[#ebe4d7] rounded-xl">
                  <span className="font-bold text-[#18181b] block">Friendship Building</span>
                  <span className="text-[11px] text-[#71716e]">2nd Floor Main Entrance</span>
                </div>
                <div className="p-3 bg-[#faf7f2] border border-[#ebe4d7] rounded-xl">
                  <span className="font-bold text-[#18181b] block">Kebele 4 Square</span>
                  <span className="text-[11px] text-[#71716e]">2 Mins Walk</span>
                </div>
                <div className="p-3 bg-[#faf7f2] border border-[#ebe4d7] rounded-xl">
                  <span className="font-bold text-[#18181b] block">Lake Tana Shore</span>
                  <span className="text-[11px] text-[#71716e]">5 Mins Drive</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Message / Inquiry Form */}
          <div className="lg:col-span-6 bg-white border border-[#e8e2d8] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm">
            <div className="space-y-6">
              
              <div className="space-y-1 pb-4 border-b border-[#f0ebe1]">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#996515]">
                  Online Concierge
                </span>
                <h3 className="text-2xl font-serif-luxury font-bold text-[#18181b]">
                  Send an Inquiry or Book a Call
                </h3>
                <p className="text-xs text-[#5c5c58]">
                  Have questions about course fees, bridal timelines, or natural hair steam sessions? We reply promptly during business hours.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 bg-[#f0fdf4] border border-[#bbf7d0] rounded-xl text-center space-y-3 animate-in zoom-in-95 duration-300">
                  <div className="w-12 h-12 rounded-full bg-[#22c55e]/20 text-[#16a34a] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif-luxury font-bold text-lg text-[#15803d]">
                    Thank You! Message Received
                  </h4>
                  <p className="text-xs text-[#166534] max-w-sm mx-auto">
                    Our Bahir Dar reception team will call or WhatsApp you shortly at <span className="font-bold">{formState.phone || 'your phone'}</span>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-[#18181b] block mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Mahlet Kebede"
                      className="w-full px-4 py-3 bg-[#faf7f2] border border-[#dcd4c5] rounded-xl text-[#18181b] placeholder:text-[#8c8c88] text-xs focus:outline-none focus:border-[#996515] focus:bg-white transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-[#18181b] block mb-1.5">
                        Phone Number (Ethiopia) *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="09XXXXXXXX"
                        className="w-full px-4 py-3 bg-[#faf7f2] border border-[#dcd4c5] rounded-xl text-[#18181b] placeholder:text-[#8c8c88] text-xs focus:outline-none focus:border-[#996515] focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-[#18181b] block mb-1.5">
                        Inquiry Topic *
                      </label>
                      <select
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        className="w-full px-4 py-3 bg-[#faf7f2] border border-[#dcd4c5] rounded-xl text-[#18181b] text-xs focus:outline-none focus:border-[#996515] focus:bg-white transition-colors cursor-pointer font-medium"
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
                    <label className="text-xs font-bold text-[#18181b] block mb-1.5">
                      Your Message or Preferred Date
                    </label>
                    <textarea
                      rows={3}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Tell us what service you're looking for, wedding date, or academy questions..."
                      className="w-full px-4 py-3 bg-[#faf7f2] border border-[#dcd4c5] rounded-xl text-[#18181b] placeholder:text-[#8c8c88] text-xs focus:outline-none focus:border-[#996515] focus:bg-white transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-[#050505] bg-[#d4af37] hover:bg-[#e5c358] shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all"
                  >
                    <Send className="w-4 h-4" />
                    Submit Inquiry to Hiber Team
                  </button>
                </form>
              )}

            </div>

            {/* Quick Instant Booking Shortcut */}
            <div className="pt-6 mt-6 border-t border-[#f0ebe1] flex items-center justify-between">
              <span className="text-xs text-[#5c5c58]">
                Ready to book your exact time slot right now?
              </span>
              <button
                onClick={onOpenBooking}
                className="text-xs font-bold text-[#996515] hover:underline cursor-pointer uppercase tracking-wider"
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
