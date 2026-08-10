import React, { useState } from 'react';
import { Course } from '../types';
import { 
  X, 
  Star, 
  Clock, 
  BookOpen, 
  CheckCircle, 
  Play, 
  Lock, 
  ShieldCheck, 
  Gift, 
  Award,
  ChevronDown,
  User,
  Zap,
  Globe
} from 'lucide-react';

interface CourseModalProps {
  course: Course | null;
  onClose: () => void;
  onEnroll: (course: Course) => void;
}

export const CourseModal: React.FC<CourseModalProps> = ({ course, onClose, onEnroll }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'syllabus' | 'instructor'>('overview');
  const [expandedModule, setExpandedModule] = useState<string | null>('m1');

  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white border border-slate-300 text-slate-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
        
        {/* Sticky Header Close */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-white bg-[#0fa1a7] px-2.5 py-0.5 rounded-full">
              {course.category}
            </span>
            <span className="text-xs text-slate-600 font-medium">{course.level} Level</span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900 border border-slate-200 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Hero Banner Area */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            <div className="md:col-span-7 space-y-3">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                {course.title}
              </h1>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {course.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 pt-2">
                <div className="flex items-center gap-1 bg-amber-500/10 text-amber-600 px-2.5 py-1 rounded-md border border-amber-500/20 font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-500" />
                  <span>{course.rating} ({course.reviewCount} reviews)</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#0fa1a7]" />
                  <span>{course.durationHours} Total Hours</span>
                </div>
                <div className="flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5 text-[#0fa1a7]" />
                  <span>{course.lessonsCount} HD Lessons</span>
                </div>
              </div>
            </div>

            {/* Media Image Frame */}
            <div className="md:col-span-5 relative rounded-2xl overflow-hidden border border-slate-200 shadow-md">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-slate-900/30 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-[#0fa1a7] text-white flex items-center justify-center shadow-lg">
                  <Play className="w-5 h-5 fill-white ml-0.5" />
                </div>
              </div>
            </div>

          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
            {[
              { id: 'overview', label: 'Overview & Benefits' },
              { id: 'syllabus', label: `Curriculum (${course.modules.length} Modules)` },
              { id: 'instructor', label: 'Instructor & Mentor' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#0fa1a7] text-white shadow'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content: Overview */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#0fa1a7]" />
                  What You Will Learn
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {course.whatYouWillLearn.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs text-slate-800">
                      <CheckCircle className="w-4 h-4 text-[#0fa1a7] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Prerequisites</h3>
                <ul className="list-disc list-inside text-xs text-slate-600 space-y-1">
                  {course.requirements.map((req, idx) => (
                    <li key={idx}>{req}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Tab Content: Syllabus */}
          {activeTab === 'syllabus' && (
            <div className="space-y-4">
              <h3 className="text-base font-bold text-slate-900 mb-1">Detailed Course Curriculum</h3>
              <p className="text-xs text-slate-600 mb-4">
                Structured step-by-step video modules designed for drip-learning and self-paced progress.
              </p>

              <div className="space-y-3">
                {course.modules.map((mod) => {
                  const isExpanded = expandedModule === mod.id;
                  return (
                    <div key={mod.id} className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
                      <button
                        onClick={() => setExpandedModule(isExpanded ? null : mod.id)}
                        className="w-full p-4 flex items-center justify-between text-xs sm:text-sm font-bold text-slate-900 hover:text-[#0fa1a7] cursor-pointer text-left"
                      >
                        <span>{mod.title}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-[10px] text-slate-500 font-normal">{mod.lessonsCount} lessons • {mod.duration}</span>
                          <ChevronDown className={`w-4 h-4 text-[#0fa1a7] transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                        </div>
                      </button>

                      {isExpanded && (
                        <div className="p-4 pt-0 border-t border-slate-200 space-y-2">
                          {mod.lessons.map((lesson) => (
                            <div key={lesson.id} className="flex items-center justify-between p-2.5 bg-white rounded-lg border border-slate-200 text-xs text-slate-800">
                              <div className="flex items-center gap-2.5">
                                {lesson.isPreview ? (
                                  <Play className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                                ) : (
                                  <Lock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                                )}
                                <span>{lesson.title}</span>
                              </div>
                              <div className="flex items-center gap-2 text-[10px] text-slate-500">
                                {lesson.isPreview && (
                                  <span className="bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded font-bold">
                                    Free Preview
                                  </span>
                                )}
                                <span>{lesson.duration}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Tab Content: Instructor */}
          {activeTab === 'instructor' && (
            <div className="flex items-start gap-4 bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <img
                src={course.instructor.avatar}
                alt={course.instructor.name}
                className="w-16 h-16 rounded-2xl object-cover border-2 border-[#0fa1a7] shrink-0"
              />
              <div className="space-y-1">
                <h4 className="text-base font-bold text-slate-900">{course.instructor.name}</h4>
                <p className="text-xs text-[#0fa1a7] font-bold">{course.instructor.role}</p>
                <p className="text-xs text-slate-700 pt-2 leading-relaxed">
                  Leading expert mentor at Fintech Edge Institute with extensive field experience in decentralized finance, blockchain architecture, and quantitative algorithms.
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Footer Checkout Bar */}
        <div className="sticky bottom-0 bg-white border-t border-slate-200 p-6 rounded-b-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-2xl font-extrabold text-[#0fa1a7]">
              ${course.priceUSD} <span className="text-xs font-normal text-slate-500">/ Rs {course.pricePKR.toLocaleString()}</span>
            </div>
            <div className="text-xs text-slate-600 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Lifetime access + Verified Certificate</span>
            </div>
          </div>

          <button
            onClick={() => onEnroll(course)}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#0fa1a7] hover:bg-[#0d8a8f] text-white font-extrabold text-sm transition-all shadow-lg shadow-[#0fa1a7]/20 cursor-pointer"
          >
            Enroll in Course Now
          </button>
        </div>

      </div>
    </div>
  );
};
