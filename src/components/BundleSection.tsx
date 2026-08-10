import React from 'react';
import { Course } from '../types';
import { 
  CheckCircle, 
  Crown, 
  Zap, 
  Users, 
  ShieldCheck, 
  Sparkles, 
  Gift
} from 'lucide-react';

interface BundleSectionProps {
  bundleCourse: Course;
  onSelectCourse: (course: Course) => void;
}

export const BundleSection: React.FC<BundleSectionProps> = ({
  bundleCourse,
  onSelectCourse,
}) => {
  return (
    <section className="py-20 bg-[#e2e8ef] text-slate-900 relative overflow-hidden border-b border-slate-300">
      
      {/* Background Decorative Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#0fa1a7]/10 via-teal-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Card Container */}
        <div className="bg-white rounded-3xl border-2 border-[#0fa1a7]/40 p-8 sm:p-12 shadow-xl relative overflow-hidden text-slate-900">
          
          {/* Top Banner Ribbon */}
          <div className="absolute top-0 right-0 bg-[#0fa1a7] text-white font-extrabold text-xs px-6 py-1.5 rounded-bl-2xl uppercase tracking-wider flex items-center gap-1.5 shadow-md">
            <Crown className="w-4 h-4 fill-white text-white" />
            <span>VIP Unlimited Access</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0fa1a7]/10 text-[#0fa1a7] text-xs font-bold border border-[#0fa1a7]/30">
                <Sparkles className="w-3.5 h-3.5 text-[#0fa1a7]" />
                <span>All Access Bundle & Coaching</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Get <span className="text-[#0fa1a7]">Unlimited Access</span> to Every Course + 1-on-1 Mentorship
              </h2>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Why buy individual courses when you can unlock our complete educational vault? Gain lifetime access to every existing and future course, plus weekly live mentorship calls, private wallet audits, and exclusive VIP community membership.
              </p>

              {/* Included Perks Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-medium text-slate-800 pt-2">
                <div className="flex items-center gap-2.5 bg-slate-100 p-2.5 rounded-xl border border-slate-300">
                  <CheckCircle className="w-4 h-4 text-[#0fa1a7] shrink-0" />
                  <span>Unlimited Lifetime Course Vault Access</span>
                </div>
                <div className="flex items-center gap-2.5 bg-slate-100 p-2.5 rounded-xl border border-slate-300">
                  <CheckCircle className="w-4 h-4 text-[#0fa1a7] shrink-0" />
                  <span>Monthly 1-on-1 Private Coaching Session</span>
                </div>
                <div className="flex items-center gap-2.5 bg-slate-100 p-2.5 rounded-xl border border-slate-300">
                  <CheckCircle className="w-4 h-4 text-[#0fa1a7] shrink-0" />
                  <span>VIP Telegram Emergency Airdrop Channel</span>
                </div>
                <div className="flex items-center gap-2.5 bg-slate-100 p-2.5 rounded-xl border border-slate-300">
                  <CheckCircle className="w-4 h-4 text-[#0fa1a7] shrink-0" />
                  <span>CV & Portfolio Review + Job Referral</span>
                </div>
              </div>



            </div>

            {/* Right Card Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#0fa1a7]/30 shadow-xl">
                <img
                  src={bundleCourse.image}
                  alt="VIP Bundle"
                  className="w-full h-72 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-slate-200 shadow-md text-slate-900 space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-[#0fa1a7]">
                    <span className="flex items-center gap-1">
                      <Gift className="w-4 h-4 text-[#0fa1a7]" />
                      Bonus Included
                    </span>
                    <span className="text-emerald-600 font-extrabold">100% Satisfaction Guarantee</span>
                  </div>
                  <p className="text-[11px] text-slate-700 leading-snug">
                    Includes all 5 flagship courses, future curriculum drops, 1-on-1 strategy call booking code, and verified certification.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
