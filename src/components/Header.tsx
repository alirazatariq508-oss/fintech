import React, { useState } from 'react';
import { 
  GraduationCap, 
  Search, 
  User, 
  Menu, 
  X, 
  Sparkles, 
  BookOpen, 
  PhoneCall, 
  Info, 
  Layers
} from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenPromptModal: () => void;
  onOpenAuthModal: (mode: 'login' | 'signup') => void;
  user: { name: string; email: string } | null;
  onLogout: () => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenPromptModal,
  onOpenAuthModal,
  user,
  onLogout,
  searchQuery,
  setSearchQuery,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: BookOpen },
    { id: 'courses', label: 'All Courses', icon: Layers },
    { id: 'about', label: 'About Us', icon: Info },
    { id: 'blog', label: 'Blog & Insights', icon: BookOpen },
    { id: 'contact', label: 'Contact Us', icon: PhoneCall },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#e2e8ef]/95 backdrop-blur-md border-b border-slate-300 text-slate-900 transition-all duration-200 shadow-sm">


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <div 
          onClick={() => setActiveTab('home')} 
          className="flex items-center gap-3 cursor-pointer group"
        >
          <img 
            src="/logo.png" 
            onError={(e) => {
              const target = e.currentTarget;
              if (target.src.endsWith('/logo.png')) {
                target.src = '/fintech-logo.png';
              }
            }}
            alt="Fintech Edge Institute Logo" 
            referrerPolicy="no-referrer"
            className="h-10 sm:h-12 w-auto object-contain max-h-12 group-hover:scale-105 transition-transform duration-200"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/90 p-1.5 rounded-full border border-slate-300 shadow-sm">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#0fa1a7] text-white font-bold shadow-md shadow-[#0fa1a7]/20'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Actions Section */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Quick Search Trigger */}
          <div className="relative">
            {searchOpen ? (
              <div className="flex items-center gap-2 bg-white border border-[#0fa1a7]/50 rounded-xl px-3 py-1.5 shadow-sm">
                <Search className="w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') setActiveTab('courses');
                  }}
                  autoFocus
                  className="bg-transparent text-xs text-slate-900 focus:outline-none w-36"
                />
                <button 
                  onClick={() => setSearchOpen(false)}
                  className="text-slate-400 hover:text-slate-700 text-xs"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 hover:text-slate-900 transition-colors shadow-sm"
                title="Search courses"
              >
                <Search className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* User profile if logged in */}
          {user && (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-white border border-slate-300 px-3 py-1.5 rounded-xl shadow-sm">
                <div className="w-6 h-6 rounded-full bg-[#0fa1a7] text-white font-bold text-xs flex items-center justify-center">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <span className="text-xs font-medium text-slate-800 max-w-[100px] truncate">
                  {user.name}
                </span>
              </div>
              <button
                onClick={onLogout}
                className="text-xs text-slate-600 hover:text-red-500 font-medium transition-colors cursor-pointer"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white border border-slate-300 text-slate-800 hover:text-black"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#e2e8ef] border-b border-slate-300 px-4 pt-3 pb-6 space-y-3">
          <div className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium flex items-center gap-3 ${
                  activeTab === item.id
                    ? 'bg-[#0fa1a7] text-white font-bold'
                    : 'text-slate-800 hover:bg-white'
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </button>
            ))}
          </div>

          {user ? (
            <div className="pt-3 border-t border-slate-300">
              <div className="flex items-center justify-between p-3 bg-white border border-slate-300 rounded-xl">
                <span className="text-sm font-medium text-slate-900">{user.name}</span>
                <button
                  onClick={onLogout}
                  className="text-xs text-red-500 font-semibold"
                >
                  Log Out
                </button>
              </div>
            </div>
          ) : (
            <div className="pt-3 border-t border-slate-300 grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  onOpenAuthModal('login');
                  setMobileMenuOpen(false);
                }}
                className="py-2.5 text-center text-sm font-semibold bg-white rounded-xl text-slate-800 border border-slate-300"
              >
                Log In
              </button>
              <button
                onClick={() => {
                  onOpenAuthModal('signup');
                  setMobileMenuOpen(false);
                }}
                className="py-2.5 text-center text-sm font-bold bg-[#0fa1a7] text-white rounded-xl"
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
};
