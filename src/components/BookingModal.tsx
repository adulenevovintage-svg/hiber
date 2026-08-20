import React, { useState, useEffect } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  Check, 
  Sparkles, 
  GraduationCap, 
  Phone, 
  User, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2,
  MessageSquare,
  Scissors,
  Crown
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { HAIR_SERVICES, MAKEUP_BEAUTY_SERVICES, ACADEMY_COURSES, BEAUTY_PACKAGES, BRAND_INFO } from '../data/salonData';
import { BookingFormData } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: 'salon' | 'academy';
  initialItemId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialType = 'salon',
  initialItemId
}) => {
  const [bookingType, setBookingType] = useState<'salon' | 'academy'>(initialType);
  const [selectedId, setSelectedId] = useState<string>(initialItemId || '');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('10:00 AM');
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    notes: '',
    addScalpMassage: false,
    addBotanicalMask: false,
  });
  const [step, setStep] = useState<number>(1);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  useEffect(() => {
    if (initialType) setBookingType(initialType);
    if (initialItemId) setSelectedId(initialItemId);
    
    // Set default tomorrow date
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setSelectedDate(tomorrow.toISOString().split('T')[0]);
  }, [initialType, initialItemId, isOpen]);

  if (!isOpen) return null;

  // Available options
  const allSalonServices = [...HAIR_SERVICES, ...MAKEUP_BEAUTY_SERVICES];
  
  const timeSlots = [
    '08:30 AM', '09:30 AM', '10:30 AM', '11:30 AM',
    '01:30 PM', '02:30 PM', '03:30 PM', '04:30 PM', '05:30 PM', '06:30 PM'
  ];

  const getSelectedItem = () => {
    if (bookingType === 'salon') {
      const found = allSalonServices.find(s => s.id === selectedId);
      if (found) return { name: found.name, price: found.price, duration: found.duration };
      const pkg = BEAUTY_PACKAGES.find(p => p.id === selectedId);
      if (pkg) return { name: pkg.title, price: pkg.price, duration: pkg.duration };
      return { name: allSalonServices[0].name, price: allSalonServices[0].price, duration: allSalonServices[0].duration };
    } else {
      const found = ACADEMY_COURSES.find(c => c.id === selectedId);
      if (found) return { name: found.title, price: found.price, duration: found.duration };
      return { name: ACADEMY_COURSES[0].title, price: ACADEMY_COURSES[0].price, duration: ACADEMY_COURSES[0].duration };
    }
  };

  const selectedItem = getSelectedItem();

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);

    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#d4af37', '#f3e5ab', '#ffffff', '#22c55e']
      });
    } catch (e) {
      // Confetti fallback
    }
  };

  const handleSendWhatsApp = () => {
    const message = encodeURIComponent(
      `Hello Hiber Beauty Salon & Academy! I would like to confirm my reservation in Bahir Dar:\n\n` +
      `👤 Name: ${formData.fullName}\n` +
      `📞 Phone: ${formData.phone}\n` +
      `✨ Type: ${bookingType === 'salon' ? 'Salon Appointment' : 'Academy Course Enrollment'}\n` +
      `💎 Service/Course: ${selectedItem.name}\n` +
      `📅 Preferred Date: ${selectedDate}\n` +
      `⏰ Time: ${selectedTime}\n` +
      `${formData.notes ? `📝 Special Notes: ${formData.notes}\n` : ''}` +
      `\nPlease let me know availability at Friendship Building 2nd Floor. Thank you!`
    );
    window.open(`https://wa.me/251975113940?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050505]/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#0e0e10] border border-[#d4af37]/60 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-[#050505] border border-white/10 text-[#a3a39e] hover:text-[#f5f5f0] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-1 pb-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#050505] border border-[#d4af37]/40 text-[10px] font-bold text-[#d4af37] uppercase tracking-[0.25em]">
            <Sparkles className="w-3 h-3 text-[#d4af37]" />
            HBA VIP Reservation Concierge
          </div>
          <h3 className="text-2xl font-serif-luxury font-bold text-[#f5f5f0]">
            {bookingType === 'salon' ? 'Book Your Luxury Salon Session' : 'Academy Course Enrollment'}
          </h3>
          <p className="text-xs text-[#a3a39e]">
            Bahir Dar • Kebele 4 Friendship Building 2nd Floor
          </p>
        </div>

        {/* Success Screen */}
        {isSuccess ? (
          <div className="text-center py-6 space-y-6 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 bg-[#d4af37]/15 border border-[#d4af37] text-[#d4af37] flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h4 className="text-2xl font-serif-luxury font-bold text-[#f5f5f0]">
                Booking Request Successfully Registered!
              </h4>
              <p className="text-xs sm:text-sm text-[#a3a39e] max-w-md mx-auto">
                Thank you, <span className="text-[#d4af37] font-bold">{formData.fullName}</span>. Your reservation for <span className="text-[#f5f5f0] font-semibold">{selectedItem.name}</span> on <span className="text-[#d4af37] font-semibold">{selectedDate} at {selectedTime}</span> has been logged.
              </p>
            </div>

            {/* Summary Ticket Card */}
            <div className="p-5 bg-[#050505] border border-[#d4af37]/40 text-left text-xs space-y-2 max-w-md mx-auto">
              <div className="flex justify-between pb-2 border-b border-white/10">
                <span className="text-[#a3a39e]">Location:</span>
                <span className="text-[#f5f5f0] font-medium">Friendship Building 2nd Floor, Bahir Dar</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-white/10">
                <span className="text-[#a3a39e]">Phone Registered:</span>
                <span className="text-[#f5f5f0] font-semibold">{formData.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#a3a39e]">Estimated Price / Tuition:</span>
                <span className="text-[#d4af37] font-bold text-sm">{selectedItem.price}</span>
              </div>
            </div>

            {/* Instant Actions */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <button
                onClick={handleSendWhatsApp}
                className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#050505] bg-[#d4af37] hover:brightness-110 shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                Send Instant Confirmation via WhatsApp
              </button>

              <button
                onClick={onClose}
                className="px-5 py-3 text-xs font-semibold text-[#a3a39e] bg-[#050505] border border-white/10 hover:text-[#f5f5f0] cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* Multi-Step Booking Form */
          <form onSubmit={handleConfirm} className="space-y-6">
            
            {/* Toggle Salon vs Academy */}
            <div className="flex justify-center">
              <div className="p-1 bg-[#050505] border border-white/10 inline-flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => {
                    setBookingType('salon');
                    setSelectedId(allSalonServices[0].id);
                  }}
                  className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                    bookingType === 'salon'
                      ? 'bg-[#d4af37] text-[#050505] font-bold shadow-md'
                      : 'text-[#a3a39e] hover:text-[#f5f5f0]'
                  }`}
                >
                  <Scissors className="w-3.5 h-3.5" />
                  Salon Appointment
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setBookingType('academy');
                    setSelectedId(ACADEMY_COURSES[0].id);
                  }}
                  className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                    bookingType === 'academy'
                      ? 'bg-[#d4af37] text-[#050505] font-bold shadow-md'
                      : 'text-[#a3a39e] hover:text-[#f5f5f0]'
                  }`}
                >
                  <GraduationCap className="w-3.5 h-3.5" />
                  Academy Course
                </button>
              </div>
            </div>

            {/* Service / Course Selection */}
            <div>
              <label className="text-xs font-semibold text-[#f5f5f0] block mb-1.5">
                Select {bookingType === 'salon' ? 'Service or Package' : 'Academy Course'} *
              </label>
              <select
                value={selectedId}
                onChange={(e) => setSelectedId(e.target.value)}
                className="w-full px-4 py-3 bg-[#050505] border border-white/10 text-[#f5f5f0] text-xs focus:outline-none focus:border-[#d4af37] transition-colors cursor-pointer"
              >
                {bookingType === 'salon' ? (
                  <>
                    <optgroup label="Hair Services">
                      {HAIR_SERVICES.map(s => (
                        <option key={s.id} value={s.id}>{s.name} ({s.price})</option>
                      ))}
                    </optgroup>
                    <optgroup label="Makeup & Nails">
                      {MAKEUP_BEAUTY_SERVICES.map(s => (
                        <option key={s.id} value={s.id}>{s.name} ({s.price})</option>
                      ))}
                    </optgroup>
                    <optgroup label="Beauty Packages">
                      {BEAUTY_PACKAGES.map(p => (
                        <option key={p.id} value={p.id}>{p.title} ({p.price})</option>
                      ))}
                    </optgroup>
                  </>
                ) : (
                  <optgroup label="Academy Courses">
                    {ACADEMY_COURSES.map(c => (
                      <option key={c.id} value={c.id}>{c.title} — {c.duration} ({c.price})</option>
                    ))}
                  </optgroup>
                )}
              </select>
            </div>

            {/* Date & Time Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-[#f5f5f0] block mb-1.5">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  required
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#050505] border border-white/10 text-[#f5f5f0] text-xs focus:outline-none focus:border-[#d4af37] transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-[#f5f5f0] block mb-1.5">
                  Preferred Time Slot *
                </label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#050505] border border-white/10 text-[#f5f5f0] text-xs focus:outline-none focus:border-[#d4af37] transition-colors cursor-pointer"
                >
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-[#f5f5f0] block mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Bethlehem Tesfaye"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#050505] border border-white/10 text-[#f5f5f0] placeholder:text-[#52525b] text-xs focus:outline-none focus:border-[#d4af37] transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-[#f5f5f0] block mb-1.5">
                  Phone Number (Ethiopia) *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="09XXXXXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#050505] border border-white/10 text-[#f5f5f0] placeholder:text-[#52525b] text-xs focus:outline-none focus:border-[#d4af37] transition-colors"
                />
              </div>
            </div>

            {/* Optional Notes */}
            <div>
              <label className="text-xs font-semibold text-[#f5f5f0] block mb-1.5">
                Special Requests or Notes (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="Mention specific stylist, bridal requirements, or hair condition..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-4 py-2 bg-[#050505] border border-white/10 text-[#f5f5f0] placeholder:text-[#52525b] text-xs focus:outline-none focus:border-[#d4af37] transition-colors resize-none"
              />
            </div>

            {/* Price Preview Card */}
            <div className="p-4 bg-[#050505] border border-[#d4af37]/30 flex items-center justify-between text-xs">
              <div>
                <span className="text-[#d4af37] font-bold block">{selectedItem.name}</span>
                <span className="text-[#a3a39e]">Estimated Duration: {selectedItem.duration}</span>
              </div>
              <div className="text-right">
                <span className="text-base font-bold text-[#d4af37]">{selectedItem.price}</span>
                <span className="text-[10px] text-[#a3a39e] block">Pay at Salon / Academy</span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3.5 font-bold text-xs uppercase tracking-wider text-[#050505] bg-[#d4af37] hover:brightness-110 shadow-xl flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              <Check className="w-4 h-4" />
              Confirm My Reservation Now
            </button>

          </form>
        )}

      </div>
    </div>
  );
};
