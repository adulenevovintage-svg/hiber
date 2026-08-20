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
  Check,
  ChevronDown,
  ChevronUp,
  Tag,
  Plus
} from 'lucide-react';
import { ACADEMY_COURSES } from '../data/salonData';
import { AcademyCourse } from '../types';

interface AcademySectionProps {
  onEnrollCourse: (course: AcademyCourse) => void;
}

export const AcademySection: React.FC<AcademySectionProps> = ({ onEnrollCourse }) => {
  const [selectedCourseDetail, setSelectedCourseDetail] = useState<AcademyCourse | null>(null);
  const [selectedScheduleFilter, setSelectedScheduleFilter] = useState<string>('all');
  const [showAllCourses, setShowAllCourses] = useState<boolean>(false);
  const [showTuitionGuide, setShowTuitionGuide] = useState<boolean>(false);

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

  // Strictly list at most 2 to 3 courses by default for simplicity
  const displayedCourses = showAllCourses || selectedScheduleFilter !== 'all' 
    ? filteredCourses 
    : filteredCourses.slice(0, 3);

  return (
    <section id="academy" className="py-20 lg:py-28 bg-[#faf7f2] text-[#191919] relative overflow-hidden border-b border-[#e5ded2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#d4af37]/40 shadow-sm text-[11px] font-semibold text-[#996515] uppercase tracking-[0.25em] rounded-full">
            <GraduationCap className="w-4 h-4 text-[#996515]" />
            Accredited Vocational Mastery
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#18181b] tracking-tight">
            Featured Academy Courses & <br />
            <span className="text-[#996515]">Enrollment Programs</span>
          </h2>

          <p className="text-base text-[#5c5c58] font-normal leading-relaxed">
            Gain certified hands-on expertise from Ethiopia's premier beauty educators. Master live practical skills with included beauty kits and flexible morning, afternoon, or weekend batches.
          </p>

          {/* Quick Dropdown & Explore Buttons */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setShowAllCourses(!showAllCourses)}
              className="px-4 py-2 bg-white border border-[#dcd4c5] hover:border-[#18181b] rounded-full text-xs font-semibold text-[#18181b] flex items-center gap-1.5 shadow-xs cursor-pointer transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#996515]" />
              {showAllCourses ? 'Show Top 3 Flagship Programs' : `Explore All (${ACADEMY_COURSES.length}) Diploma Courses`}
              {showAllCourses ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>

            <button
              onClick={() => setShowTuitionGuide(!showTuitionGuide)}
              className="px-4 py-2 bg-white border border-[#dcd4c5] hover:border-[#18181b] rounded-full text-xs font-semibold text-[#6b6b66] hover:text-[#18181b] flex items-center gap-1.5 shadow-xs cursor-pointer transition-all"
            >
              <Tag className="w-3.5 h-3.5 text-[#996515]" />
              {showTuitionGuide ? 'Hide Tuition Guide' : 'Drop Down Course Tuitions & Schedules'}
              {showTuitionGuide ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Collapsible Tuition & Schedule Comparison Table */}
        {showTuitionGuide && (
          <div className="mb-12 max-w-4xl mx-auto bg-white border border-[#d4af37]/40 rounded-2xl p-5 sm:p-6 shadow-sm animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex items-center justify-between pb-3 border-b border-[#f0ebe1] mb-4">
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4 text-[#996515]" />
                <h4 className="font-serif-luxury font-bold text-base text-[#18181b]">
                  Academy Tuition Fees & Schedule Overview
                </h4>
              </div>
              <span className="text-xs text-[#71716e]">Installment payment available</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-[#f0ebe1] text-[#71716e] uppercase tracking-wider">
                    <th className="py-2.5 px-3">Diploma Course</th>
                    <th className="py-2.5 px-3">Duration</th>
                    <th className="py-2.5 px-3">Batch Schedule</th>
                    <th className="py-2.5 px-3">Total Tuition</th>
                    <th className="py-2.5 px-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f5f1ea]">
                  {ACADEMY_COURSES.map((course) => (
                    <tr key={course.id} className="hover:bg-[#faf8f4] transition-colors">
                      <td className="py-3 px-3">
                        <span className="font-bold text-[#18181b] block">{course.title}</span>
                        <span className="text-[11px] text-[#6b6b66]">{course.certification}</span>
                      </td>
                      <td className="py-3 px-3 text-[#5c5c58] whitespace-nowrap">
                        {course.duration}
                      </td>
                      <td className="py-3 px-3 text-[#5c5c58] whitespace-nowrap">
                        {course.schedule}
                      </td>
                      <td className="py-3 px-3 font-bold text-[#996515] text-sm whitespace-nowrap">
                        {course.price}
                      </td>
                      <td className="py-3 px-3 text-right whitespace-nowrap">
                        <button
                          onClick={() => onEnrollCourse(course)}
                          className="px-3 py-1.5 rounded-lg text-xs font-bold text-[#050505] bg-[#d4af37] hover:bg-[#e5c358] cursor-pointer transition-colors shadow-2xs"
                        >
                          Enroll
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Schedule Filter Bar */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-2.5 mb-12">
          {scheduleFilters.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setSelectedScheduleFilter(tab.id);
                if (tab.id !== 'all') setShowAllCourses(true);
              }}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold transition-all rounded-full cursor-pointer ${
                selectedScheduleFilter === tab.id
                  ? 'bg-[#18181b] text-[#f5f5f0] shadow-md font-bold'
                  : 'bg-white text-[#6b6b66] border border-[#ded7cc] hover:border-[#996515]/60 hover:text-[#18181b] shadow-xs'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Course Cards Grid (2 per row on mobile) */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6 lg:gap-8 mb-12">
          {displayedCourses.map((course) => (
            <div
              key={course.id}
              className="group bg-white border border-[#e8e2d8] hover:border-[#bfa15f] hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden flex flex-col justify-between shadow-xs sm:shadow-sm"
            >
              {/* Image & Badges */}
              <div className="relative h-28 sm:h-56 overflow-hidden bg-[#f0ede6]">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {course.popular && (
                  <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-[#18181b]/95 border border-[#d4af37]/60 text-[#d4af37] text-[8.5px] sm:text-[10px] font-bold uppercase tracking-wider px-2 sm:px-2.5 py-0.5 sm:py-1 flex items-center gap-1 rounded shadow-md backdrop-blur-xs">
                    <Flame className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#d4af37]" />
                    <span className="hidden sm:inline">High Demand</span>
                  </div>
                )}

                <div className="absolute bottom-1.5 left-2 right-2 sm:bottom-3 sm:left-4 sm:right-4 flex items-center justify-between text-[10px] sm:text-xs">
                  <span className="font-bold text-[#18181b] bg-white/95 px-2 sm:px-3 py-0.5 sm:py-1 rounded-md shadow-sm border border-[#d4af37]/30 text-[9.5px] sm:text-xs">
                    {course.price}
                  </span>
                  <span className="text-white bg-black/75 backdrop-blur-xs px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md flex items-center gap-1 text-[9.5px] sm:text-xs">
                    <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#d4af37]" />
                    {course.duration}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-3 sm:p-6 space-y-2 sm:space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-1 sm:space-y-2">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-[9px] sm:text-[10px] uppercase tracking-wider px-1.5 sm:px-2 py-0.5 bg-[#f5f1ea] text-[#996515] border border-[#dcd4c5] font-bold rounded">
                      {course.level}
                    </span>
                    <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#6b6b66] font-medium truncate">
                      • {course.schedule}
                    </span>
                  </div>

                  <h3 className="font-serif-luxury text-xs sm:text-lg font-bold text-[#18181b] group-hover:text-[#996515] transition-colors line-clamp-1 sm:line-clamp-none">
                    {course.title}
                  </h3>

                  <p className="text-[10.5px] sm:text-sm text-[#5c5c58] leading-tight sm:leading-relaxed line-clamp-2 sm:line-clamp-3">
                    {course.description}
                  </p>
                </div>

                {/* Key Syllabus Snippets */}
                <div className="space-y-1 sm:space-y-2 pt-2 sm:pt-3 border-t border-[#f0ebe1] hidden sm:block">
                  <span className="text-[11px] font-bold text-[#996515] block uppercase tracking-wider">
                    Core Curriculum Modules:
                  </span>
                  {course.syllabus.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#42423e]">
                      <Check className="w-3 h-3 text-[#996515] shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                  {course.syllabus.length > 3 && (
                    <button 
                      onClick={() => setSelectedCourseDetail(course)}
                      className="text-[11px] font-semibold text-[#996515] hover:underline pt-1 block cursor-pointer"
                    >
                      + {course.syllabus.length - 3} more modules (Click for full syllabus)
                    </button>
                  )}
                </div>

                {/* Actions */}
                <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center gap-1.5 sm:gap-2">
                  <button
                    onClick={() => setSelectedCourseDetail(course)}
                    className="w-full sm:flex-1 py-1.5 sm:py-2.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#18181b] bg-[#f5f1ea] border border-[#dcd4c5] hover:border-[#18181b] hover:bg-white rounded-lg transition-all cursor-pointer text-center"
                  >
                    Details
                  </button>

                  <button
                    onClick={() => onEnrollCourse(course)}
                    className="w-full sm:flex-1 py-1.5 sm:py-2.5 text-[10px] sm:text-xs font-bold uppercase tracking-[0.1em] sm:tracking-[0.15em] text-[#050505] bg-[#d4af37] hover:bg-[#e5c358] transition-all flex items-center justify-center gap-1 cursor-pointer rounded-lg shadow-xs"
                  >
                    <GraduationCap className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    Enroll
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Dropdown Toggle Button for remaining courses */}
        {!showAllCourses && selectedScheduleFilter === 'all' && ACADEMY_COURSES.length > 3 && (
          <div className="text-center mb-16">
            <button
              onClick={() => setShowAllCourses(true)}
              className="px-6 py-3 rounded-xl bg-white border border-[#d4af37] text-xs font-bold uppercase tracking-wider text-[#18181b] hover:bg-[#faf5eb] transition-all shadow-xs cursor-pointer inline-flex items-center gap-2"
            >
              <Plus className="w-4 h-4 text-[#996515]" />
              Drop Down Remaining Courses ({ACADEMY_COURSES.length - 3} More)
            </button>
          </div>
        )}

        {/* Academy Experience Pillars Banner */}
        <div className="bg-[#18181b] text-white rounded-2xl border border-[#d4af37]/40 p-6 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-lg bg-[#d4af37]/20 border border-[#d4af37]/50 flex items-center justify-center text-[#d4af37] mx-auto md:mx-0">
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
              <div className="w-10 h-10 rounded-lg bg-[#d4af37]/20 border border-[#d4af37]/50 flex items-center justify-center text-[#d4af37] mx-auto md:mx-0">
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
              <div className="w-10 h-10 rounded-lg bg-[#d4af37]/20 border border-[#d4af37]/50 flex items-center justify-center text-[#d4af37] mx-auto md:mx-0">
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white text-[#18181b] border border-[#d4af37]/40 shadow-2xl rounded-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto space-y-6">
            
            {/* Close */}
            <button
              onClick={() => setSelectedCourseDetail(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#f5f1ea] border border-[#dcd4c5] text-[#5c5c58] hover:text-[#18181b] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Course Header */}
            <div className="space-y-2 pb-4 border-b border-[#f0ebe1]">
              <div className="flex items-center gap-2">
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#996515] font-bold">
                  Course Syllabus & Details
                </span>
                <span className="text-xs px-2 py-0.5 bg-[#f5f1ea] text-[#996515] border border-[#dcd4c5] font-bold uppercase rounded">
                  {selectedCourseDetail.level}
                </span>
              </div>
              
              <h3 className="text-2xl font-serif-luxury font-bold text-[#18181b]">
                {selectedCourseDetail.title}
              </h3>

              <div className="flex items-center gap-4 text-xs text-[#5c5c58] pt-1 font-medium">
                <span className="font-bold text-[#996515] text-sm">{selectedCourseDetail.price}</span>
                <span>• Duration: {selectedCourseDetail.duration}</span>
                <span>• Schedule: {selectedCourseDetail.schedule}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-[#5c5c58] leading-relaxed">
              {selectedCourseDetail.description}
            </p>

            {/* Full Syllabus */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#996515]">
                Complete Syllabus Modules:
              </h4>
              <div className="space-y-2">
                {selectedCourseDetail.syllabus.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#3b3b38] p-2.5 bg-[#faf7f2] border border-[#ebe4d7] rounded-lg">
                    <span className="w-5 h-5 rounded-full bg-white text-[#996515] flex items-center justify-center font-bold text-[10px] shrink-0 border border-[#dcd4c5] shadow-xs">
                      {idx + 1}
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Kit Inclusions & Diploma */}
            <div className="p-4 bg-[#fdfaf5] border border-[#e2d6c3] rounded-xl space-y-2">
              <h5 className="text-xs font-bold text-[#996515] uppercase tracking-wider flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#996515]" />
                Included Kit & Certification:
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                {selectedCourseDetail.includes.map((inc, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#3b3b38]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#996515] shrink-0" />
                    <span>{inc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3 justify-end border-t border-[#f0ebe1]">
              <button
                onClick={() => setSelectedCourseDetail(null)}
                className="w-full sm:w-auto px-5 py-2.5 text-xs uppercase tracking-wider font-semibold text-[#6b6b66] hover:text-[#18181b] cursor-pointer"
              >
                Close
              </button>

              <button
                onClick={() => {
                  const course = selectedCourseDetail;
                  setSelectedCourseDetail(null);
                  onEnrollCourse(course);
                }}
                className="w-full sm:w-auto px-7 py-3 text-xs font-bold uppercase tracking-[0.15em] text-[#050505] bg-[#d4af37] hover:bg-[#e5c358] shadow-lg rounded-xl flex items-center justify-center gap-2 cursor-pointer"
              >
                <GraduationCap className="w-4 h-4" />
                Register for this Course ({selectedCourseDetail.price})
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
