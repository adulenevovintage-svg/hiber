import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { HairServices } from './components/HairServices';
import { MakeupBeautyServices } from './components/MakeupBeautyServices';
import { NaturalBotanicalsSection } from './components/NaturalBotanicalsSection';
import { HairGrowthTherapies } from './components/HairGrowthTherapies';
import { BridalAndPackages } from './components/BridalAndPackages';
import { AcademySection } from './components/AcademySection';
import { GraduatesGallery } from './components/GraduatesGallery';
import { WhyChooseHiber } from './components/WhyChooseHiber';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactLocationSection } from './components/ContactLocationSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { NaturalHairQuizModal } from './components/NaturalHairQuizModal';
import { Phone, MessageSquare, Sparkles, Calendar, ArrowUp } from 'lucide-react';
import { BRAND_INFO } from './data/salonData';
import { ServiceItem, AcademyCourse, PackageDeal } from './types';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState<boolean>(false);
  const [bookingType, setBookingType] = useState<'salon' | 'academy'>('salon');
  const [bookingItemId, setBookingItemId] = useState<string | undefined>(undefined);
  const [quizModalOpen, setQuizModalOpen] = useState<boolean>(false);

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
    <div className="min-h-screen bg-[#050505] text-[#f5f5f0] font-sans antialiased selection:bg-[#d4af37]/25 selection:text-[#faf8f5]">
      {/* Navigation Bar */}
      <Navbar 
        onOpenBooking={handleOpenBooking}
        onOpenQuiz={() => setQuizModalOpen(true)}
      />

      {/* Main Luxury Sections */}
      <main>
        {/* 1. Hero */}
        <Hero 
          onOpenBooking={handleOpenBooking}
          onOpenQuiz={() => setQuizModalOpen(true)}
        />

        {/* 2. About Hiber Salon & Academy */}
        <AboutSection />

        {/* 3. Hair Services (Braiding, Styling, Coloring, Cuts, Steam) */}
        <HairServices 
          onSelectService={handleSelectService}
        />

        {/* 4. Makeup, Nails, Brows & Facial Skincare */}
        <MakeupBeautyServices 
          onSelectService={handleSelectService}
        />

        {/* 5. Natural Botanical Hair Bar (All 14 Ethiopian Super-Ingredients) */}
        <NaturalBotanicalsSection 
          onOpenBooking={handleOpenBooking}
          onOpenQuiz={() => setQuizModalOpen(true)}
        />

        {/* 6. Hair-growth, Health & Strengthening Intensive Therapies */}
        <HairGrowthTherapies 
          onOpenBooking={handleOpenBooking}
        />

        {/* 7. Bridal Splendor & Curated Treatment Packages */}
        <BridalAndPackages 
          onSelectPackage={handleSelectPackage}
        />

        {/* 8. Hiber Beauty Academy (Courses, Syllabus, Certification) */}
        <AcademySection 
          onEnrollCourse={handleEnrollCourse}
        />

        {/* 9. Real Graduates & Salon Masterpiece Gallery */}
        <GraduatesGallery />

        {/* 10. Why Discerning Clients & Students Choose Hiber */}
        <WhyChooseHiber />

        {/* 11. Client & Graduate Testimonials */}
        <TestimonialsSection />

        {/* 12. Frequently Asked Questions */}
        <FaqSection />

        {/* 13. Contact, Location & Inquiry Concierge */}
        <ContactLocationSection 
          onOpenBooking={() => handleOpenBooking('salon')}
        />
      </main>

      {/* Luxury Footer with Required Contacts & Socials */}
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

      {/* Floating Fast Action Floating Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        {/* WhatsApp Direct */}
        <button
          onClick={handleWhatsAppFloating}
          aria-label="Direct WhatsApp Reservation"
          className="w-13 h-13 rounded-full bg-[#25d366] text-white flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform cursor-pointer"
        >
          <MessageSquare className="w-6 h-6 fill-white" />
        </button>

        {/* Call Salon Direct */}
        <a
          href={`tel:${BRAND_INFO.phone1}`}
          aria-label="Call Hiber Salon Hotline"
          className="w-12 h-12 rounded-full bg-[#18181b] border border-[#d4af37] text-[#f3e5ab] flex items-center justify-center shadow-xl hover:scale-110 transition-transform cursor-pointer"
        >
          <Phone className="w-5 h-5 text-[#d4af37]" />
        </a>
      </div>
    </div>
  );
}
