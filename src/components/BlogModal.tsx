import React from 'react';
import { BlogPost } from '../types';
import { X, Clock, User, Calendar, Tag, Share2, ArrowLeft } from 'lucide-react';

interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({ post, onClose }) => {
  if (!post) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white border border-slate-300 text-slate-900 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
        
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-200 flex items-center justify-between">
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 font-semibold cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[#0fa1a7]" />
            <span>Back to Insights</span>
          </button>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900 border border-slate-200 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Header Metadata */}
          <div className="space-y-3">
            <span className="bg-[#0fa1a7]/10 text-[#0fa1a7] border border-[#0fa1a7]/30 text-xs font-bold px-3 py-1 rounded-full inline-block">
              {post.category}
            </span>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-1 border-b border-slate-200 pb-4">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-[#0fa1a7]" />
                <span className="font-semibold text-slate-800">{post.author}</span> ({post.authorRole})
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
            <img src={post.image} alt={post.title} className="w-full h-64 object-cover" />
          </div>

          {/* Body Article Content */}
          <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-4">
            <p className="font-medium text-slate-900 text-base leading-relaxed">
              {post.excerpt}
            </p>
            <div className="whitespace-pre-line leading-relaxed text-slate-700 space-y-4">
              {post.content}
            </div>
          </div>

          {/* Tags */}
          <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-2">
            <Tag className="w-3.5 h-3.5 text-slate-400" />
            {post.tags.map((tag, idx) => (
              <span key={idx} className="bg-slate-100 border border-slate-200 text-slate-600 text-xs px-2.5 py-1 rounded-lg">
                #{tag}
              </span>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};
