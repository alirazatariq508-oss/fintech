import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  CheckCircle
} from 'lucide-react';
import { Course } from '../types';
import heroBgImage from '../assets/images/fintech_hero_bg_1786103291658.jpg';

interface CounterStatProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  triggerKey?: number;
}

const CounterStat: React.FC<CounterStatProps> = ({ end, suffix = '', prefix = '', duration = 600, className, triggerKey = 0 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(0);
    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Fast ease-out cubic curve
      const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
      const currentVal = Math.floor(easeOutCubic(progress) * end);
      setCount(currentVal);

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    animationFrameId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animationFrameId);
  }, [end, duration, triggerKey]);

  return (
    <span className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

interface HeroSectionProps {
  onExploreCourses: () => void;
  onSelectCourse: (course: Course) => void;
  featuredCourse: Course;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreCourses,
}) => {
  const [hoverKey1, setHoverKey1] = useState(0);
  const [hoverKey2, setHoverKey2] = useState(0);
  const [hoverKey3, setHoverKey3] = useState(0);
  const [hoverKey4, setHoverKey4] = useState(0);

  return (
    <section className="relative bg-[#f8fafc] text-slate-900 pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-slate-300 overflow-hidden">
      {/* Animated Background Image & Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Clear Background Image with object-cover */}
        <img
          src={heroBgImage}
          alt="Fintech Background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-85 transition-opacity duration-300"
        />
        {/* Subtle overlay for text contrast without white side shadows */}
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]" />
      </div>

      {/* Floating Animated Geometric/Glowing Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-[#0fa1a7]/20 via-teal-500/15 to-transparent blur-3xl pointer-events-none rounded-full animate-pulse" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-[#0fa1a7]/10 rounded-full blur-2xl pointer-events-none animate-bounce duration-[10000ms]" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-teal-400/10 rounded-full blur-2xl pointer-events-none animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-slate-900">
            Master <span className="text-[#0fa1a7]">FinTech</span>, Blockchain, <span className="text-[#0fa1a7]">Web3</span> & AI
          </h1>

          {/* Subtitle */}
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
            Bridge traditional financial systems with modern decentralized technologies through practical, industry-driven self-paced courses, hands-on projects, and direct 1-on-1 mentorship.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onExploreCourses}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#0fa1a7] hover:bg-[#0d8a8f] text-white font-extrabold text-sm shadow-lg shadow-[#0fa1a7]/20 transition-all duration-200 hover:scale-[1.02] flex items-center justify-center gap-3 cursor-pointer group"
            >
              <span>Explore All Courses</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Trust Badges */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>100% Practical Curriculum</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Lifetime Video Access</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Verified Certificates</span>
            </div>
          </div>

        </div>

        {/* Live Metrics Impact Strip */}
        <div className="mt-16 pt-8 border-t border-slate-300 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div 
            onMouseEnter={() => setHoverKey1(prev => prev + 1)}
            className="p-5 rounded-2xl bg-white border border-slate-300 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-[#0fa1a7] hover:bg-slate-50 transition-all duration-300 cursor-pointer group"
          >
            <div className="text-3xl sm:text-4xl font-extrabold text-[#0fa1a7] group-hover:scale-110 transition-transform duration-300">
              <CounterStat end={5000} suffix="+" duration={600} triggerKey={hoverKey1} />
            </div>
            <div className="text-xs text-slate-600 mt-1.5 font-bold group-hover:text-slate-900 transition-colors">Enrolled Students</div>
          </div>

          <div 
            onMouseEnter={() => setHoverKey2(prev => prev + 1)}
            className="p-5 rounded-2xl bg-white border border-slate-300 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-[#0fa1a7] hover:bg-slate-50 transition-all duration-300 cursor-pointer group"
          >
            <div className="text-3xl sm:text-4xl font-extrabold text-teal-600 group-hover:scale-110 transition-transform duration-300">
              <CounterStat end={98} suffix="%" duration={500} triggerKey={hoverKey2} />
            </div>
            <div className="text-xs text-slate-600 mt-1.5 font-bold group-hover:text-slate-900 transition-colors">Satisfaction Rate</div>
          </div>

          <div 
            onMouseEnter={() => setHoverKey3(prev => prev + 1)}
            className="p-5 rounded-2xl bg-white border border-slate-300 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-[#0fa1a7] hover:bg-slate-50 transition-all duration-300 cursor-pointer group"
          >
            <div className="text-3xl sm:text-4xl font-extrabold text-[#0fa1a7] group-hover:scale-110 transition-transform duration-300">
              <CounterStat end={20} suffix="+" duration={400} triggerKey={hoverKey3} />
            </div>
            <div className="text-xs text-slate-600 mt-1.5 font-bold group-hover:text-slate-900 transition-colors">Practical Modules</div>
          </div>

          <div 
            onMouseEnter={() => setHoverKey4(prev => prev + 1)}
            className="p-5 rounded-2xl bg-white border border-slate-300 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-[#0fa1a7] hover:bg-slate-50 transition-all duration-300 cursor-pointer group"
          >
            <div className="text-3xl sm:text-4xl font-extrabold text-amber-500 group-hover:scale-110 transition-transform duration-300">
              <CounterStat end={100} suffix="%" duration={500} triggerKey={hoverKey4} />
            </div>
            <div className="text-xs text-slate-600 mt-1.5 font-bold group-hover:text-slate-900 transition-colors">Industry Mentorship</div>
          </div>
        </div>

      </div>
    </section>
  );
};

