export interface Lesson {
  id: string;
  title: string;
  duration: string;
  isPreview?: boolean;
  type: 'video' | 'quiz' | 'assignment' | 'resource';
}

export interface Module {
  id: string;
  title: string;
  lessonsCount: number;
  duration: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  category: 'Web3 & Blockchain' | 'FinTech & AI' | 'Trading & Airdrops' | 'All Access';
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  rating: number;
  reviewCount: number;
  studentCount: number;
  durationHours: number;
  lessonsCount: number;
  priceUSD: number;
  originalPriceUSD: number;
  pricePKR: number;
  image: string;
  badge?: 'Best Seller' | 'Featured' | 'New' | 'Hot';
  instructor: {
    name: string;
    role: string;
    avatar: string;
  };
  whatYouWillLearn: string[];
  requirements: string[];
  modules: Module[];
  updatedDate: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: 'Web3 Marketing' | 'FinTech Trends' | 'Airdrop Guides' | 'Career';
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  courseTaken: string;
  content: string;
  location: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Courses' | 'Payment' | 'Coaching';
}
