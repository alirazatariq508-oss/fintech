import React from 'react';
import { Testimonial } from '../types';
import { Star, Quote, MapPin, CheckCircle } from 'lucide-react';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  return (
    <section className="py-20 bg-[#e2e8ef] text-slate-900 relative border-b border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-[#0fa1a7] text-xs font-bold border border-[#0fa1a7]/30 shadow-sm">
            <Quote className="w-3.5 h-3.5 text-[#0fa1a7]" />
            <span>Student Success Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Hear From Our Grads
          </h2>
          <p className="text-slate-700 text-sm">
            Discover how students, traders, and engineers transformed their career paths through Fintech Edge Institute.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-6 border border-slate-300 hover:border-[#0fa1a7] transition-all duration-300 shadow-md hover:shadow-xl flex flex-col justify-between text-slate-900"
            >
              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Content Quote */}
                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                  "{t.content}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-[#0fa1a7]"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1">
                      {t.name}
                      <CheckCircle className="w-3.5 h-3.5 text-[#0fa1a7]" />
                    </h4>
                    <p className="text-[11px] text-slate-600">
                      {t.role} • <span className="text-[#0fa1a7] font-semibold">{t.company}</span>
                    </p>
                  </div>
                </div>

                <div className="text-[10px] text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-slate-400" />
                  <span>{t.location}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
