import React, { useState } from 'react';
import { 
  GraduationCap, 
  Sparkles, 
  Clock, 
  Calendar, 
  CheckCircle2, 
  Award, 
  ArrowRight, 
  BookOpen, 
  Briefcase, 
  X, 
  Flame,
  Users,
  Check
} from 'lucide-react';
import { ACADEMY_COURSES } from '../data/salonData';
import { AcademyCourse } from '../types';

interface AcademySectionProps {
  onEnrollCourse: (course: AcademyCourse) => void;
}

export const AcademySection: React.FC<AcademySectionProps> = ({ onEnrollCourse }) => {
  const [selectedCourseDetail, setSelectedCourseDetail] = useState<AcademyCourse | null>(null);
  const [selectedScheduleFilter, setSelectedScheduleFilter] = useState<string>('all');

  const scheduleFilters = [
    { id: 'all', label: 'All Academy Courses' },
    { id: 'Weekday Morning', label: 'Morning Batches' },
    { id: 'Weekday Afternoon', label: 'Afternoon Batches' },
    { id: 'Weekend Intensive', label: 'Weekend Intensive' },
    { id: 'Summer Class', label: 'Summer Crash Classes' },
  ];

  const filteredCourses = selectedScheduleFilter === 'all'
    ? ACADEMY_COURSES
    : ACADEMY_COURSES.filter(c => c.schedule === selectedScheduleFilter);

  return (
    <section id="academy" className="py-20 lg:py-28 bg-[#080808] relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 bg-[#d4af37]/4 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0e0e10] border border-[#d4af37]/30 text-[11px] font-semibold text-[#d4af37] uppercase tracking-[0.25em]">
            <GraduationCap className="w-4 h-4 text-[#d4af37]" />
            Accredited Vocational Mastery
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#f5f5f0] tracking-tight">
            Hiber Beauty Academy: <br />
            <span className="gold-gradient-text">Build Your Beauty Empire</span>
          </h2>

          <p className="text-base text-[#a3a39e] font-light leading-relaxed">
            Gain certified expertise from Ethiopia's premier beauty educators. Over 1,200 graduates now operate successful salons, bridal agencies, and freelance beauty brands across Ethiopia and abroad.
          </p>
        </div>

        {/* Schedule Filter Bar */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {scheduleFilters.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedScheduleFilter(tab.id)}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                selectedScheduleFilter === tab.id
                  ? 'bg-[#d4af37] text-[#050505] shadow-md font-bold'
                  : 'bg-[#0e0e10] text-[#a3a39e] border border-white/10 hover:border-[#d4af37]/40 hover:text-[#f5f5f0]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="group bg-[#0e0e10] border border-white/10 hover:border-[#d4af37]/60 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl"
            >
              {/* Image & Badges */}
              <div className="relative h-56 overflow-hidden bg-[#080808]">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e10] via-[#0e0e10]/30 to-transparent" />
                
                {course.popular && (
                  <div className="absolute top-3 right-3 bg-[#050505]/90 border border-[#d4af37]/60 text-[#d4af37] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 flex items-center gap-1 shadow-md">
                    <Flame className="w-3 h-3 text-[#d4af37]" />
                    High Demand
                  </div>
                )}

                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#f5f5f0] bg-[#050505]/85 px-2.5 py-1 border border-[#d4af37]/30">
                    {course.price}
                  </span>
                  <span className="text-[#e8e8e2] bg-[#050505]/85 px-2.5 py-1 flex items-center gap-1 border border-white/10">
                    <Clock className="w-3 h-3 text-[#d4af37]" />
                    {course.duration}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 bg-[#d4af37]/15 text-[#d4af37] font-bold">
                      {course.level}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-[#a3a39e]">
                      • {course.schedule}
                    </span>
                  </div>

                  <h3 className="font-serif-luxury text-lg font-bold text-[#f5f5f0] group-hover:text-[#d4af37] transition-colors">
                    {course.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#a3a39e] leading-relaxed line-clamp-3 font-light">
                    {course.description}
                  </p>
                </div>

                {/* Key Syllabus Snippets */}
                <div className="space-y-1.5 pt-2 border-t border-white/10">
                  <span className="text-[11px] font-semibold text-[#d4af37] block uppercase tracking-wider">
                    Core Curriculum Modules:
                  </span>
                  {course.syllabus.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#e8e8e2]">
                      <Check className="w-3 h-3 text-[#d4af37] shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                  {course.syllabus.length > 3 && (
                    <button 
                      onClick={() => setSelectedCourseDetail(course)}
                      className="text-[11px] text-[#d4af37] hover:underline pt-1 block cursor-pointer"
                    >
                      + {course.syllabus.length - 3} more modules (Click for full syllabus)
                    </button>
                  )}
                </div>

                {/* Actions */}
                <div className="pt-4 flex items-center gap-2">
                  <button
                    onClick={() => setSelectedCourseDetail(course)}
                    className="flex-1 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#e8e8e2] bg-[#141416] border border-white/15 hover:border-[#d4af37] hover:text-[#f5f5f0] transition-all cursor-pointer"
                  >
                    View Details
                  </button>

                  <button
                    onClick={() => onEnrollCourse(course)}
                    className="flex-1 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-[#050505] bg-[#d4af37] hover:bg-[#e5c358] transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                  >
                    <GraduationCap className="w-3.5 h-3.5" />
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Academy Experience Pillars Banner */}
        <div className="bg-[#0e0e10] border border-[#d4af37]/40 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            
            <div className="space-y-2">
              <div className="w-10 h-10 bg-[#050505] border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] mx-auto md:mx-0">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="font-serif-luxury font-bold text-base text-[#f5f5f0]">
                Live Model Practicals
              </h4>
              <p className="text-xs text-[#a3a39e] leading-relaxed font-light">
                80% hands-on salon floor experience with real bridal clients and mannequins under one-on-one master supervision.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 bg-[#050505] border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] mx-auto md:mx-0">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-serif-luxury font-bold text-base text-[#f5f5f0]">
                Government-Recognized Diplomas
              </h4>
              <p className="text-xs text-[#a3a39e] leading-relaxed font-light">
                Graduation ceremony with formal academic gowns, framed certificates, and permanent alumni membership.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 bg-[#050505] border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] mx-auto md:mx-0">
                <Briefcase className="w-5 h-5" />
              </div>
              <h4 className="font-serif-luxury font-bold text-base text-[#f5f5f0]">
                Tool Kit & Business Launch
              </h4>
              <p className="text-xs text-[#a3a39e] leading-relaxed font-light">
                Receive professional-grade beauty kits upon registration and learn client marketing, social media, and pricing.
              </p>
            </div>

          </div>
        </div>

      </div>

      {/* Course Detail Modal */}
      {selectedCourseDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050505]/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#0e0e10] border border-[#d4af37]/40 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto space-y-6">
            
            {/* Close */}
            <button
              onClick={() => setSelectedCourseDetail(null)}
              className="absolute top-4 right-4 p-2 bg-[#141416] border border-white/10 text-[#a3a39e] hover:text-[#f5f5f0] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Course Header */}
            <div className="space-y-2 pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#d4af37] font-semibold">
                  Course Syllabus & Details
                </span>
                <span className="text-xs px-2 py-0.5 bg-[#d4af37]/15 text-[#d4af37] font-bold uppercase">
                  {selectedCourseDetail.level}
                </span>
              </div>
              
              <h3 className="text-2xl font-serif-luxury font-bold text-[#f5f5f0]">
                {selectedCourseDetail.title}
              </h3>

              <div className="flex items-center gap-4 text-xs text-[#e8e8e2] pt-1">
                <span className="font-bold text-[#d4af37] text-sm">{selectedCourseDetail.price}</span>
                <span>• Duration: {selectedCourseDetail.duration}</span>
                <span>• Schedule: {selectedCourseDetail.schedule}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-[#a3a39e] leading-relaxed font-light">
              {selectedCourseDetail.description}
            </p>

            {/* Full Syllabus */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#d4af37]">
                Complete Syllabus Modules:
              </h4>
              <div className="space-y-2">
                {selectedCourseDetail.syllabus.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#e8e8e2] p-2.5 bg-[#141416] border border-white/10">
                    <span className="w-5 h-5 bg-[#050505] text-[#d4af37] flex items-center justify-center font-bold text-[10px] shrink-0 border border-white/10">
                      {idx + 1}
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Kit Inclusions & Diploma */}
            <div className="p-4 bg-[#050505] border border-[#d4af37]/30 space-y-2">
              <h5 className="text-xs font-bold text-[#d4af37] uppercase tracking-wider flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#d4af37]" />
                Included Kit & Certification:
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                {selectedCourseDetail.includes.map((inc, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#e8e8e2]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                    <span>{inc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3 justify-end border-t border-white/10">
              <button
                onClick={() => setSelectedCourseDetail(null)}
                className="w-full sm:w-auto px-5 py-2.5 text-xs uppercase tracking-wider font-semibold text-[#a3a39e] hover:text-[#f5f5f0] cursor-pointer"
              >
                Close
              </button>

              <button
                onClick={() => {
                  const course = selectedCourseDetail;
                  setSelectedCourseDetail(null);
                  onEnrollCourse(course);
                }}
                className="w-full sm:w-auto px-7 py-3 text-xs font-bold uppercase tracking-[0.15em] text-[#050505] bg-[#d4af37] hover:bg-[#e5c358] shadow-xl flex items-center justify-center gap-2 cursor-pointer"
              >
                <GraduationCap className="w-4 h-4" />
                Register for this Course
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
