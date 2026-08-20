import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { HairServices } from './components/HairServices';
import { MakeupBeautyServices } from './components/MakeupBeautyServices';
import { NaturalBotanicalsSection } from './components/NaturalBotanicalsSection';
import { HairGrowthTherapies } from './components/HairGrowthTherapies';
import { BridalAndPackages } from './components/BridalAndPackages';
import { AcademySection } from './components/AcademySection';
import { PriceExplorerSection } from './components/PriceExplorerSection';
import { GraduatesGallery } from './components/GraduatesGallery';
import { WhyChooseHiber } from './components/WhyChooseHiber';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactLocationSection } from './components/ContactLocationSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { NaturalHairQuizModal } from './components/NaturalHairQuizModal';
import { SideProgress } from './components/SideProgress';
import { Phone, MessageSquare, ArrowUp } from 'lucide-react';
import { BRAND_INFO } from './data/salonData';
import { ServiceItem, AcademyCourse, PackageDeal } from './types';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState<boolean>(false);
  const [bookingType, setBookingType] = useState<'salon' | 'academy'>('salon');
  const [bookingItemId, setBookingItemId] = useState<string | undefined>(undefined);
  const [quizModalOpen, setQuizModalOpen] = useState<boolean>(false);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 380) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleOpenBooking = (type: 'salon' | 'academy' = 'salon', itemId?: string) => {
    setBookingType(type);
    setBookingItemId(itemId);
    setBookingModalOpen(true);
  };

  const handleSelectService = (service: ServiceItem) => {
    handleOpenBooking('salon', service.id);
  };

  const handleSelectPackage = (pkg: PackageDeal) => {
    handleOpenBooking('salon', pkg.id);
  };

  const handleEnrollCourse = (course: AcademyCourse) => {
    handleOpenBooking('academy', course.id);
  };

  const handleBookPrescription = (treatmentName: string) => {
    handleOpenBooking('salon', 'hair-treat-steam');
  };

  const handleWhatsAppFloating = () => {
    const text = encodeURIComponent(
      `Hello Hiber Beauty Salon & Academy! I would like to book an appointment / inquire about academy courses in Bahir Dar.`
    );
    window.open(`https://wa.me/251975113940?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#fcfaf7] text-[#18181b] font-sans antialiased selection:bg-[#d4af37]/30 selection:text-[#18181b]">
      {/* Side Progress Section Indicator */}
      <SideProgress />

      {/* Navigation Bar */}
      <Navbar 
        onOpenBooking={handleOpenBooking}
        onOpenQuiz={() => setQuizModalOpen(true)}
      />

      {/* Main Sanctuary & Academy Content Stream */}
      <main>
        {/* 1. Hero Showcase with Grand Centerpiece Logo */}
        <Hero 
          onOpenBooking={handleOpenBooking}
          onOpenQuiz={() => setQuizModalOpen(true)}
        />

        {/* 2. About & Royal Sanctuary */}
        <AboutSection />

        {/* 3. Hair Services, Braids & Silk Presses */}
        <HairServices onSelectService={handleSelectService} />

        {/* 4. Makeup, Russian Gel Nails & Esthetics */}
        <MakeupBeautyServices onSelectService={handleSelectService} />

        {/* 5. 100% Organic Ethiopian Botanical Hair Bar */}
        <NaturalBotanicalsSection 
          onOpenBooking={handleOpenBooking} 
          onOpenQuiz={() => setQuizModalOpen(true)} 
        />

        {/* 6. Hair Growth Steam Therapies & Specialized Protocols */}
        <HairGrowthTherapies onOpenBooking={handleOpenBooking} />

        {/* 7. VIP Bridal & Melse Packages */}
        <BridalAndPackages onSelectPackage={handleSelectPackage} />

        {/* 8. Accredited Beauty Academy Diplomas & Programs */}
        <AcademySection onEnrollCourse={handleEnrollCourse} />

        {/* 9. Comprehensive Searchable Price & Rate Card Guide */}
        <PriceExplorerSection 
          onSelectService={handleSelectService}
          onSelectPackage={handleSelectPackage}
          onEnrollCourse={handleEnrollCourse}
        />

        {/* 10. Graduation Ceremony & Real Client Transformations */}
        <GraduatesGallery />

        {/* 11. Why Choose Hiber Sanctuary */}
        <WhyChooseHiber />

        {/* 12. Client Reviews & Academy Testimonials */}
        <TestimonialsSection />

        {/* 13. Frequently Asked Questions */}
        <FaqSection />

        {/* 14. Location Map & Direct Contact */}
        <ContactLocationSection onOpenBooking={() => handleOpenBooking('salon')} />
      </main>

      {/* Luxury Footer */}
      <Footer 
        onOpenBooking={handleOpenBooking}
        onOpenQuiz={() => setQuizModalOpen(true)}
      />

      {/* Booking & Course Enrollment Modal */}
      <BookingModal 
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialType={bookingType}
        initialItemId={bookingItemId}
      />

      {/* Botanical Hair Diagnosis Quiz Modal */}
      <NaturalHairQuizModal 
        isOpen={quizModalOpen}
        onClose={() => setQuizModalOpen(false)}
        onBookPrescription={handleBookPrescription}
      />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        {/* Back To Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            aria-label="Back to Top of Page"
            title="Back to Top"
            className="group flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#18181b]/90 hover:bg-[#27272a] text-[#f5ecd5] border border-[#d4af37]/70 shadow-[0_8px_25px_rgba(0,0,0,0.35)] backdrop-blur-md transition-all duration-300 hover:scale-105 cursor-pointer animate-in fade-in slide-in-from-bottom-3"
          >
            <span className="text-[11px] font-bold tracking-widest uppercase text-[#d4af37] hidden sm:inline-block">Top</span>
            <div className="w-6 h-6 rounded-full bg-[#d4af37] text-[#0f0f10] flex items-center justify-center group-hover:-translate-y-0.5 transition-transform">
              <ArrowUp className="w-3.5 h-3.5 stroke-[2.5]" />
            </div>
          </button>
        )}

        {/* WhatsApp Direct */}
        <button
          onClick={handleWhatsAppFloating}
          aria-label="Direct WhatsApp Reservation"
          title="Direct WhatsApp Chat"
          className="w-13 h-13 rounded-full bg-[#25d366] text-white flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform cursor-pointer"
        >
          <MessageSquare className="w-6 h-6 fill-white" />
        </button>

        {/* Call Salon Direct */}
        <a
          href={`tel:${BRAND_INFO.phone1}`}
          aria-label="Call Hiber Salon Hotline"
          title="Call Hiber Reception"
          className="w-12 h-12 rounded-full bg-[#18181b] border border-[#d4af37] text-[#f3e5ab] flex items-center justify-center shadow-xl hover:scale-110 transition-transform cursor-pointer"
        >
          <Phone className="w-5 h-5 text-[#d4af37]" />
        </a>
      </div>
    </div>
  );
}
