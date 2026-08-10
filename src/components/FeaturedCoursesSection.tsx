import React, { useState } from 'react';
import { Course } from '../types';
import { ArrowRight } from 'lucide-react';

interface FeaturedCoursesSectionProps {
  courses: Course[];
  onSelectCourse: (course: Course) => void;
  onViewAllCourses: () => void;
}

export const FeaturedCoursesSection: React.FC<FeaturedCoursesSectionProps> = ({
  courses,
  onSelectCourse,
  onViewAllCourses,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Trading & Airdrops', 'Web3 & Blockchain', 'FinTech & AI', 'All Access'];

  const filteredCourses = selectedCategory === 'All'
    ? courses
    : courses.filter((c) => c.category === selectedCategory);

  return (
    <section className="py-20 bg-[#e2e8ef] text-slate-900 relative border-b border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Explore Our Featured Courses
            </h2>
            <p className="text-slate-700 text-sm max-w-xl">
              Gain verifiable skills in crypto airdrops, Web3 growth, smart contracts, and financial artificial intelligence.
            </p>
          </div>

          <button
            onClick={onViewAllCourses}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-[#0fa1a7] font-bold text-xs border border-slate-300 shadow-sm transition-all cursor-pointer w-fit"
          >
            <span>View Full Catalog</span>
            <ArrowRight className="w-4 h-4 text-[#0fa1a7]" />
          </button>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#0fa1a7] text-white font-bold shadow-md shadow-[#0fa1a7]/20'
                  : 'bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="group relative bg-white rounded-2xl border border-slate-300 hover:border-[#0fa1a7] overflow-hidden shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-2 hover:z-10 transition-all duration-300 flex flex-col justify-between text-slate-900"
            >
              <div>
                {/* Thumbnail Header */}
                <div 
                  className="relative h-48 overflow-hidden cursor-pointer"
                  onClick={() => onSelectCourse(course)}
                >
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-80" />
                </div>

                {/* Course Details */}
                <div className="p-5 space-y-3">
                  {/* Course Title */}
                  <h3
                    onClick={() => onSelectCourse(course)}
                    className="text-base font-bold text-slate-900 group-hover:text-[#0fa1a7] transition-colors line-clamp-2 cursor-pointer leading-snug"
                  >
                    {course.title}
                  </h3>

                  {/* Tagline Excerpt */}
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {course.tagline}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
