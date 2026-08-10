import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { HomePage } from './views/HomePage';
import { CoursesPage } from './views/CoursesPage';
import { AboutPage } from './views/AboutPage';
import { BlogPage } from './views/BlogPage';
import { ContactPage } from './views/ContactPage';

import { CourseModal } from './components/CourseModal';
import { ClaudePromptModal } from './components/ClaudePromptModal';
import { AuthModal } from './components/AuthModal';
import { BlogModal } from './components/BlogModal';

import { COURSES_DATA } from './data/courses';
import { BLOGS_DATA } from './data/blogs';
import { TESTIMONIALS_DATA, FAQS_DATA } from './data/faqs';
import { Course, BlogPost } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  const [promptModalOpen, setPromptModalOpen] = useState<boolean>(false);
  const [authModalOpen, setAuthModalOpen] = useState<boolean>(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  const handleEnrollCourse = (course: Course) => {
    if (!user) {
      setSelectedCourse(null);
      setAuthMode('login');
      setAuthModalOpen(true);
    } else {
      alert(`Success! You have initiated enrollment in "${course.title}". Check your email (${user.email}) for portal access.`);
      setSelectedCourse(null);
    }
  };

  return (
    <div className="min-h-screen bg-[#e2e8ef] text-slate-900 flex flex-col font-sans antialiased selection:bg-[#0fa1a7] selection:text-white">
      
      {/* Global Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenPromptModal={() => setPromptModalOpen(true)}
        onOpenAuthModal={(mode) => {
          setAuthMode(mode);
          setAuthModalOpen(true);
        }}
        user={user}
        onLogout={() => setUser(null)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomePage
            courses={COURSES_DATA}
            blogs={BLOGS_DATA}
            testimonials={TESTIMONIALS_DATA}
            faqs={FAQS_DATA}
            onSelectCourse={(course) => setSelectedCourse(course)}
            onSelectBlog={(blog) => setSelectedBlog(blog)}
            onExploreCourses={() => setActiveTab('courses')}
            onViewAllBlogs={() => setActiveTab('blog')}
            onOpenPromptModal={() => setPromptModalOpen(true)}
          />
        )}

        {activeTab === 'courses' && (
          <CoursesPage
            courses={COURSES_DATA}
            onSelectCourse={(course) => setSelectedCourse(course)}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        )}

        {activeTab === 'about' && <AboutPage />}

        {activeTab === 'blog' && (
          <BlogPage
            blogs={BLOGS_DATA}
            onSelectBlog={(blog) => setSelectedBlog(blog)}
          />
        )}

        {activeTab === 'contact' && <ContactPage />}
      </main>

      {/* Global Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenPromptModal={() => setPromptModalOpen(true)}
      />

      {/* Modals */}
      <CourseModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
        onEnroll={handleEnrollCourse}
      />

      <BlogModal
        post={selectedBlog}
        onClose={() => setSelectedBlog(null)}
      />

      <ClaudePromptModal
        isOpen={promptModalOpen}
        onClose={() => setPromptModalOpen(false)}
      />

      <AuthModal
        isOpen={authModalOpen}
        initialMode={authMode}
        onClose={() => setAuthModalOpen(false)}
        onSuccess={(u) => setUser(u)}
      />

    </div>
  );
}
