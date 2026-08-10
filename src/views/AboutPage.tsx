import React from 'react';
import { 
  GraduationCap, 
  Target, 
  Eye, 
  Award, 
  Users, 
  CheckCircle, 
  Globe, 
  Sparkles 
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="py-16 bg-slate-50 min-h-screen text-slate-900 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#0fa1a7]/10 text-[#0fa1a7] text-xs font-bold border border-[#0fa1a7]/30">
            <GraduationCap className="w-4 h-4" />
            <span>About Fintech Edge Institute</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Bridging Financial Tech & Web3 Innovation
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Fintech Edge Institute is a premier education institute based in Lahore, Pakistan, delivering world-class practical training in decentralized finance, blockchain protocols, Web3 marketing, and AI algorithms.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-slate-200 space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-[#0fa1a7] text-white flex items-center justify-center font-bold">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Our Core Mission</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To equip ambitious students, developers, and financial professionals with verified hands-on skills to navigate, build, and earn safely in the rapidly expanding Web3 and FinTech ecosystems.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200 space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center font-bold">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Our Strategic Vision</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To establish a global learning hub and incubator where practical knowledge directly converts into remote careers, startup ventures, and financial independence.
            </p>
          </div>
        </div>

        {/* Impact Numbers */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-[#0fa1a7]">5,000+</div>
            <div className="text-xs text-slate-500 mt-1 font-medium">Students Enrolled</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-teal-600">98%</div>
            <div className="text-xs text-slate-500 mt-1 font-medium">Satisfaction Rate</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-amber-500">20+</div>
            <div className="text-xs text-slate-500 mt-1 font-medium">Practical Modules</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-[#0fa1a7]">100%</div>
            <div className="text-xs text-slate-500 mt-1 font-medium">Direct Mentorship</div>
          </div>
        </div>

        {/* Mentors Team */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Leadership & Industry Mentors</h2>
            <p className="text-xs sm:text-sm text-slate-600">Guided by active founders, Web3 growth managers, and financial analysts.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Mentors Team', role: 'Lead Web3 On-Chain Analyst', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80' },
              { name: 'Fintech Edge Marketers', role: 'Head of Web3 Growth', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80' },
              { name: 'Tech Lead Fellows', role: 'Blockchain & AI Architect', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80' },
            ].map((m, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 text-center space-y-3 shadow-sm hover:border-[#0fa1a7] transition-all">
                <img src={m.img} alt={m.name} className="w-20 h-20 rounded-2xl object-cover mx-auto border-2 border-[#0fa1a7] shadow-md" />
                <h4 className="text-base font-bold text-slate-900">{m.name}</h4>
                <p className="text-xs text-[#0fa1a7] font-semibold">{m.role}</p>
                <p className="text-xs text-slate-600">Dedicated to guiding student roadmaps and conducting 1-on-1 wallet audits.</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
