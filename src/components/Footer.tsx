import React, { useState } from 'react';
import { 
  GraduationCap, 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  ArrowUpRight, 
  CheckCircle2, 
  Globe, 
  Shield, 
  Heart
} from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onOpenPromptModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenPromptModal }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-[#e2e8ef] text-slate-700 border-t border-slate-300 pt-16 pb-12 relative overflow-hidden">
      {/* Subtle Glow Background Accent */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0fa1a7]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div 
              onClick={() => setActiveTab('home')} 
              className="flex items-center gap-3 cursor-pointer group w-fit"
            >
              <img 
                src="/logo.png" 
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src.endsWith('/logo.png')) {
                    target.src = '/logo.svg';
                  }
                }}
                alt="Fintech Edge Institute Logo" 
                referrerPolicy="no-referrer"
                className="h-10 sm:h-12 w-auto object-contain max-h-12 group-hover:scale-105 transition-transform duration-200"
              />
            </div>

            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              Empowering the next generation of financial technologists, Web3 pioneers, and AI innovators through industry-driven self-paced education, hands-on projects, and 1-on-1 mentorship.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white text-slate-800 border border-slate-300 shadow-sm">
                <Globe className="w-3.5 h-3.5 text-[#0fa1a7]" />
                Global Platform
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                <Shield className="w-3.5 h-3.5 text-emerald-600" />
                Verified Certificates
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 border-l-2 border-[#0fa1a7] pl-2">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'Home Page', id: 'home' },
                { label: 'All Courses', id: 'courses' },
                { label: 'About Our Institute', id: 'about' },
                { label: 'Blog & Articles', id: 'blog' },
                { label: 'Contact Support', id: 'contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => setActiveTab(link.id)}
                    className="hover:text-[#0fa1a7] transition-colors flex items-center gap-1.5 cursor-pointer group text-slate-700"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#0fa1a7]" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 border-l-2 border-[#0fa1a7] pl-2">
              Contact Info
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-slate-700">
                <Mail className="w-4 h-4 text-[#0fa1a7] shrink-0 mt-1" />
                <a href="mailto:info@fintechedgeinstitute.com" className="hover:text-[#0fa1a7] break-all">
                  info@fintechedgeinstitute.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <Phone className="w-4 h-4 text-[#0fa1a7] shrink-0" />
                <a href="tel:+923111222595" className="hover:text-[#0fa1a7]">
                  +92 311 1222 595
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <MapPin className="w-4 h-4 text-[#0fa1a7] shrink-0 mt-1" />
                <span>Lahore, Punjab, Pakistan</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 border-l-2 border-[#0fa1a7] pl-2">
              Newsletter
            </h4>
            <p className="text-xs text-slate-600 mb-3">
              Subscribe for weekly Web3 airdrop guides, market research & course discounts.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                <span>Subscribed successfully! Thank you.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0fa1a7]"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 px-3 bg-[#0fa1a7] hover:bg-[#0d8a8f] text-white font-bold rounded-lg text-xs flex items-center justify-center transition-all cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}

            <div className="mt-4 pt-3 border-t border-slate-300">
              <button
                onClick={onOpenPromptModal}
                className="text-xs text-[#0fa1a7] hover:underline flex items-center gap-1.5 font-semibold cursor-pointer"
              >
                <span>Export Claude Website Prompt</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-slate-300 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p>© 2026 Fintech Edge Institute. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button onClick={() => setActiveTab('about')} className="hover:text-slate-900">Privacy Policy</button>
            <button onClick={() => setActiveTab('about')} className="hover:text-slate-900">Terms of Service</button>
            <button onClick={() => setActiveTab('contact')} className="hover:text-slate-900">Help & Support</button>
          </div>
          <div className="flex items-center gap-1 text-slate-600">
            <span>Powered by</span>
            <span className="font-semibold text-slate-800">EzyCourse</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
