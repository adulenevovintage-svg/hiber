export type ServiceCategory = 'all' | 'hair' | 'braiding' | 'coloring' | 'cutting' | 'treatments' | 'makeup' | 'bridal' | 'nails' | 'skincare';

export interface ServiceItem {
  id: string;
  name: string;
  category: ServiceCategory;
  price: string;
  duration: string;
  description: string;
  features: string[];
  popular?: boolean;
  image: string;
}

export interface BotanicalIngredient {
  id: string;
  name: string;
  amharicName?: string;
  iconType: string;
  keyNutrients: string;
  targetConcerns: string[];
  description: string;
  howWeUseIt: string;
  hairBenefit: string;
  image: string;
  badge?: string;
}

export interface AcademyCourse {
  id: string;
  title: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Master / Advanced' | 'All Levels';
  schedule: 'Weekday Morning' | 'Weekday Afternoon' | 'Weekend Intensive' | 'Summer Class';
  price: string;
  description: string;
  syllabus: string[];
  includes: string[];
  certification: string;
  image: string;
  popular?: boolean;
}

export interface GraduateStory {
  id: string;
  name: string;
  course: string;
  graduationYear: string;
  achievement: string;
  quote: string;
  image: string;
  salonLocation?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'bridal' | 'braids' | 'hair_styling' | 'makeup' | 'academy' | 'botanical';
  image: string;
  caption: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: 'Salon Client' | 'Bride' | 'Academy Graduate' | 'Regular Client';
  content: string;
  rating: number;
  service: string;
  date: string;
  image: string;
  verified: boolean;
}

export interface PackageDeal {
  id: string;
  title: string;
  tagline: string;
  price: string;
  originalValue: string;
  duration: string;
  servicesIncluded: string[];
  bestFor: string;
  featured?: boolean;
  badge?: string;
}

export interface FaqItem {
  id: string;
  category: 'salon' | 'natural_care' | 'academy' | 'bridal';
  question: string;
  answer: string;
}

export interface BookingFormData {
  serviceType: 'salon' | 'academy';
  serviceOrCourseId: string;
  fullName: string;
  phone: string;
  email?: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
  addons?: string[];
}
