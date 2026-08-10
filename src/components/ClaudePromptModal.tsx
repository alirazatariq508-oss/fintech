import React, { useState } from 'react';
import { CLAUDE_PROMPT_TEXT } from '../data/claudePrompt';
import { 
  X, 
  Copy, 
  Check, 
  Download, 
  Code2, 
  Sparkles, 
  Palette, 
  Layers, 
  Wand2, 
  FileText
} from 'lucide-react';

interface ClaudePromptModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClaudePromptModal: React.FC<ClaudePromptModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'full' | 'colors' | 'pages' | 'animations'>('full');

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(CLAUDE_PROMPT_TEXT);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([CLAUDE_PROMPT_TEXT], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "fintech-edge-institute-claude-prompt.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white border border-slate-300 text-slate-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl relative">
        
        {/* Header Bar */}
        <div className="bg-slate-100 px-6 py-4 border-b border-slate-200 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0fa1a7]/10 text-[#0fa1a7] border border-[#0fa1a7]/30 flex items-center justify-center shadow-sm">
              <Code2 className="w-5 h-5 text-[#0fa1a7]" />
            </div>
            <div>
              <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                Claude AI Master Prompt
                <span className="bg-[#0fa1a7] text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase">
                  Ready to Copy
                </span>
              </h2>
              <p className="text-xs text-slate-600">
                Give this complete prompt to Claude to generate an identical Fintech Edge Institute website.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-200 text-slate-600 hover:text-slate-900 border border-slate-300 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action Toolbar */}
        <div className="bg-slate-50 p-4 px-6 border-b border-slate-200 flex flex-wrap items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-2 overflow-x-auto">
            <button
              onClick={() => setActiveTab('full')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'full' ? 'bg-[#0fa1a7] text-white' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              Full Prompt Text
            </button>
            <button
              onClick={() => setActiveTab('colors')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'colors' ? 'bg-[#0fa1a7] text-white' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
              }`}
            >
              <Palette className="w-3.5 h-3.5" />
              Color System
            </button>
            <button
              onClick={() => setActiveTab('pages')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'pages' ? 'bg-[#0fa1a7] text-white' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              Pages & Sections
            </button>
            <button
              onClick={() => setActiveTab('animations')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'animations' ? 'bg-[#0fa1a7] text-white' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
              }`}
            >
              <Wand2 className="w-3.5 h-3.5" />
              Animations & Motion
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="px-3.5 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-800 text-xs font-bold border border-slate-300 flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
              title="Download text file"
            >
              <Download className="w-3.5 h-3.5 text-[#0fa1a7]" />
              Download TXT
            </button>

            <button
              onClick={handleCopy}
              className="px-5 py-2 rounded-xl bg-[#0fa1a7] hover:bg-[#0d8a8f] text-white font-extrabold text-xs flex items-center gap-1.5 shadow-md shadow-[#0fa1a7]/20 transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-white" />
                  <span>Prompt Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-white" />
                  <span>Copy Prompt to Clipboard</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Prompt Content View */}
        <div className="p-6 overflow-y-auto flex-1 font-mono text-xs leading-relaxed text-slate-800 bg-slate-900 text-slate-100 select-all">
          {activeTab === 'full' && (
            <pre className="whitespace-pre-wrap font-mono text-xs text-slate-200 selection:bg-[#0fa1a7] selection:text-white">
              {CLAUDE_PROMPT_TEXT}
            </pre>
          )}

          {activeTab === 'colors' && (
            <div className="space-y-4 font-sans text-xs">
              <h3 className="text-sm font-bold text-white mb-2">Exact Color Scheme Specifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 bg-slate-800 rounded-xl border border-slate-700 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-md bg-[#e2e8ef] border border-slate-500" />
                    <div>
                      <div className="font-bold text-white">Main Canvas Background</div>
                      <div className="text-[10px] text-slate-400">Light Gray/Blue Canvas</div>
                    </div>
                  </div>
                  <code className="text-[#0fa1a7] font-mono">#e2e8ef</code>
                </div>

                <div className="p-3 bg-slate-800 rounded-xl border border-slate-700 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-md bg-[#0fa1a7]" />
                    <div>
                      <div className="font-bold text-white">Teal Accent & Buttons</div>
                      <div className="text-[10px] text-slate-400">Primary Button Color</div>
                    </div>
                  </div>
                  <code className="text-[#0fa1a7] font-mono">#0fa1a7</code>
                </div>

                <div className="p-3 bg-slate-800 rounded-xl border border-slate-700 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-md bg-[#0f172a]" />
                    <div>
                      <div className="font-bold text-white">Dark Slate Text</div>
                      <div className="text-[10px] text-slate-400">Primary Text Color</div>
                    </div>
                  </div>
                  <code className="text-[#0fa1a7] font-mono">#0f172a</code>
                </div>

                <div className="p-3 bg-slate-800 rounded-xl border border-slate-700 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-md bg-[#ffffff] border border-slate-500" />
                    <div>
                      <div className="font-bold text-white">White Cards Background</div>
                      <div className="text-[10px] text-slate-400">Section Cards & Containers</div>
                    </div>
                  </div>
                  <code className="text-[#0fa1a7] font-mono">#ffffff</code>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'pages' && (
            <div className="space-y-4 font-sans text-xs">
              <h3 className="text-sm font-bold text-white mb-2">Website Architecture & Pages</h3>
              <div className="space-y-2">
                <div className="p-3 bg-slate-800 rounded-xl border border-slate-700">
                  <div className="font-bold text-[#0fa1a7]">1. Home Page (/)</div>
                  <p className="text-slate-300 mt-1">Header Navbar, Hero Banner, Key Pillars (Why Choose Us), Top Featured Courses with Category Filters, All-Access VIP Bundle Banner, Student Testimonials, Latest Insights Blog, FAQ Accordion, Final CTA, Footer.</p>
                </div>
                <div className="p-3 bg-slate-800 rounded-xl border border-slate-700">
                  <div className="font-bold text-[#0fa1a7]">2. All Courses Catalog (/courses)</div>
                  <p className="text-slate-300 mt-1">Search bar, category filters, skill level selector, dual USD/PKR prices, and course preview triggers.</p>
                </div>
                <div className="p-3 bg-slate-800 rounded-xl border border-slate-700">
                  <div className="font-bold text-[#0fa1a7]">3. Course Detail View (/course/:slug)</div>
                  <p className="text-slate-300 mt-1">Hero video preview, curriculum drip modules breakdown, lesson checklists, instructor bio, ratings, and sticky checkout box.</p>
                </div>
                <div className="p-3 bg-slate-800 rounded-xl border border-slate-700">
                  <div className="font-bold text-[#0fa1a7]">4. About Us (/about)</div>
                  <p className="text-slate-300 mt-1">Mission, vision, learning philosophy, impact metrics, and mentorship team profiles.</p>
                </div>
                <div className="p-3 bg-slate-800 rounded-xl border border-slate-700">
                  <div className="font-bold text-[#0fa1a7]">5. Blog & Community (/blog)</div>
                  <p className="text-slate-300 mt-1">Airdrop guides, Web3 growth articles, AI models in FinTech, and full reader view.</p>
                </div>
                <div className="p-3 bg-slate-800 rounded-xl border border-slate-700">
                  <div className="font-bold text-[#0fa1a7]">6. Contact Us (/contact)</div>
                  <p className="text-slate-300 mt-1">Validated contact form, direct email (info@fintechedgeinstitute.com), phone (+923111222595), and Lahore address.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'animations' && (
            <div className="space-y-4 font-sans text-xs">
              <h3 className="text-sm font-bold text-white mb-2">Hover Effects & Motion Guidelines</h3>
              <div className="space-y-2 text-slate-300">
                <div className="p-3 bg-slate-800 rounded-xl border border-slate-700">
                  <span className="font-bold text-[#0fa1a7]">Card Hover Effect:</span> Slight lift (-4px translate-y), scale(1.02), subtle teal glow shadow.
                </div>
                <div className="p-3 bg-slate-800 rounded-xl border border-slate-700">
                  <span className="font-bold text-[#0fa1a7]">CTA Buttons:</span> Background color #0fa1a7, hover: bg-#0d8a8f, icon shift right on hover.
                </div>
                <div className="p-3 bg-slate-800 rounded-xl border border-slate-700">
                  <span className="font-bold text-[#0fa1a7]">Accordion Expansion:</span> Smooth height transition with 180deg icon rotation.
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="bg-slate-100 p-4 px-6 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600 shrink-0">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#0fa1a7]" />
            <span>Copy & Paste directly into Claude 3.5 Sonnet or Opus!</span>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold cursor-pointer"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
};
