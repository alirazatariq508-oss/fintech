import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { KeyPillarsSection } from '../components/KeyPillarsSection';
import { FeaturedCoursesSection } from '../components/FeaturedCoursesSection';
import { BundleSection } from '../components/BundleSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { BlogSection } from '../components/BlogSection';
import { FaqSection } from '../components/FaqSection';
import { CtaSection } from '../components/CtaSection';

import { Course, BlogPost, Testimonial, FaqItem } from '../types';

interface HomePageProps {
  courses: Course[];
  blogs: BlogPost[];
  testimonials: Testimonial[];
  faqs: FaqItem[];
  onSelectCourse: (course: Course) => void;
  onSelectBlog: (blog: BlogPost) => void;
  onExploreCourses: () => void;
  onViewAllBlogs: () => void;
  onOpenPromptModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  courses,
  blogs,
  testimonials,
  faqs,
  onSelectCourse,
  onSelectBlog,
  onExploreCourses,
  onViewAllBlogs,
  onOpenPromptModal,
}) => {
  const featuredCourse = courses.find((c) => c.id === 'airdrop-mastery-course') || courses[0];
  const bundleCourse = courses.find((c) => c.id === 'all-access-bundle-coaching') || courses[courses.length - 1];

  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <HeroSection
        onExploreCourses={onExploreCourses}
        onSelectCourse={onSelectCourse}
        featuredCourse={featuredCourse}
      />

      {/* 2. Key Pillars / Why Choose Us */}
      <KeyPillarsSection />

      {/* 3. Top Featured Courses Catalog */}
      <FeaturedCoursesSection
        courses={courses}
        onSelectCourse={onSelectCourse}
        onViewAllCourses={onExploreCourses}
      />

      {/* 4. All Access VIP Bundle & Coaching Banner */}
      <BundleSection
        bundleCourse={bundleCourse}
        onSelectCourse={onSelectCourse}
      />

      {/* 5. Student Testimonials / Reviews */}
      <TestimonialsSection testimonials={testimonials} />

      {/* 6. Latest Web3 & FinTech Insights (Blog) */}
      <BlogSection
        blogs={blogs}
        onSelectBlog={onSelectBlog}
        onViewAllBlogs={onViewAllBlogs}
      />

      {/* 7. FAQ Accordions */}
      <FaqSection faqs={faqs} />

      {/* 8. Conversion CTA Banner */}
      <CtaSection
        onExploreCourses={onExploreCourses}
        onOpenPromptModal={onOpenPromptModal}
      />
    </div>
  );
};
