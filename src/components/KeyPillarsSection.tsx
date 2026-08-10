import React from 'react';
import { 
  BookOpen, 
  Code2, 
  Users, 
  Clock, 
  Briefcase, 
  CheckCircle2 
} from 'lucide-react';

export const KeyPillarsSection: React.FC = () => {
  const pillars = [
    {
      icon: BookOpen,
      title: 'Industry-Driven Curriculum',
      description: 'Curriculum designed directly by active FinTech engineers, Web3 founders, and crypto researchers to mirror real market demands.',
      color: 'from-cyan-500 to-blue-600',
    },
    {
      icon: Code2,
      title: 'Hands-On Project Learning',
      description: 'Gain practical experience by executing live on-chain interactions, building Python trading scripts, and setting up real wallet routes.',
      color: 'from-teal-400 to-emerald-500',
    },
    {
      icon: Users,
      title: 'Mentors from the Industry',
      description: 'Learn directly from seasoned mentors with 1-on-1 coaching sessions, wallet reviews, and private Telegram strategy channels.',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      icon: Clock,
      title: 'Flexible Learning Models',
      description: 'Self-paced HD video tutorials accessible 24/7 on desktop and mobile so you can master skills at your own schedule.',
      color: 'from-amber-400 to-orange-500',
    },
    {
      icon: Briefcase,
      title: 'Career & Placement Support',
      description: 'CV optimization, portfolio building, and direct introduction to our partner network of Web3 startups and FinTech platforms.',
      color: 'from-purple-500 to-cyan-500',
    },
  ];

  return (
    <section className="py-20 bg-[#e2e8ef] text-slate-900 relative border-b border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Built for Real-World Industry Success
          </h2>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            We bridge the gap between theoretical knowledge and practical execution in decentralized finance, blockchain protocols, and financial technology.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl p-6 border border-slate-300 hover:border-[#0fa1a7] transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 text-slate-900"
              >
                {/* Number Watermark */}
                <span className="absolute top-4 right-6 text-4xl font-extrabold text-slate-200 group-hover:text-[#0fa1a7]/20 transition-colors pointer-events-none">
                  0{idx + 1}
                </span>

                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-xl bg-[#0fa1a7] flex items-center justify-center text-white font-bold mb-5 shadow-md group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#0fa1a7] transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {pillar.description}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-200 flex items-center gap-1.5 text-xs font-bold text-[#0fa1a7]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0fa1a7]" />
                  <span>Guaranteed Skill Outcome</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
