import React from 'react';
import { ArrowRight, Sparkles, GraduationCap, ShieldCheck } from 'lucide-react';

interface CtaSectionProps {
  onExploreCourses: () => void;
  onOpenPromptModal: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({
  onExploreCourses,
  onOpenPromptModal,
}) => {
  return (
    <section className="py-16 bg-[#e2e8ef] text-slate-900 relative overflow-hidden border-b border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-gradient-to-r from-[#0fa1a7] via-teal-600 to-teal-700 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xl relative overflow-hidden">
          
          <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mx-auto text-white border border-white/20 shadow-lg">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight">
            Ready to Build Your Career in FinTech, Web3 & AI?
          </h2>

          <p className="text-teal-100 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Join over 5,000+ students mastering real-world decentralized skills, automated Python trading, and high-reward crypto airdrops with 1-on-1 mentorship.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onExploreCourses}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-950 text-white font-extrabold text-sm transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer group"
            >
              <span>Explore Course Catalog</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenPromptModal}
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold text-sm border border-white/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Get Claude AI Prompt</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
