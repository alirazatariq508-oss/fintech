import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Course Enrollment',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', phone: '', subject: 'Course Enrollment', message: '' });
      }, 5000);
    }
  };

  return (
    <div className="py-16 bg-slate-50 min-h-screen text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0fa1a7]/10 text-[#0fa1a7] text-xs font-bold border border-[#0fa1a7]/30">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>We Are Here To Help</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Contact Fintech Edge Institute
          </h1>
          <p className="text-slate-600 text-sm">
            Have questions regarding course curriculum, bank transfer payments, or 1-on-1 mentorship sessions? Get in touch with our team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Direct Info Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-4">
                Get In Touch
              </h3>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0fa1a7]/10 text-[#0fa1a7] flex items-center justify-center shrink-0 border border-[#0fa1a7]/20">
                    <Mail className="w-5 h-5 text-[#0fa1a7]" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Email Support</div>
                    <a href="mailto:info@fintechedgeinstitute.com" className="font-bold text-slate-900 hover:text-[#0fa1a7] text-xs sm:text-sm break-all">
                      info@fintechedgeinstitute.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0fa1a7]/10 text-[#0fa1a7] flex items-center justify-center shrink-0 border border-[#0fa1a7]/20">
                    <Phone className="w-5 h-5 text-[#0fa1a7]" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Phone & WhatsApp</div>
                    <a href="tel:+923111222595" className="font-bold text-slate-900 hover:text-[#0fa1a7] text-xs sm:text-sm">
                      +92 311 1222 595
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0fa1a7]/10 text-[#0fa1a7] flex items-center justify-center shrink-0 border border-[#0fa1a7]/20">
                    <MapPin className="w-5 h-5 text-[#0fa1a7]" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Institute Location</div>
                    <div className="font-bold text-slate-900 text-xs sm:text-sm">
                      Lahore, Punjab, Pakistan
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 text-xs text-slate-500">
                Support Hours: Monday – Saturday, 9:00 AM – 7:00 PM (PKT).
              </div>
            </div>
          </div>

          {/* Form Area */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-slate-900">Send Us A Message</h3>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="text-base font-bold text-slate-900">Message Sent Successfully!</h4>
                  <p className="text-xs text-emerald-700">
                    Thank you for contacting Fintech Edge Institute. A team mentor will respond to your email shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700">Your Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Usama Khan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0fa1a7]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0fa1a7]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700">Phone / WhatsApp Number</label>
                      <input
                        type="text"
                        placeholder="+92 300 0000000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0fa1a7]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700">Subject</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 text-slate-800 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#0fa1a7]"
                      >
                        <option value="Course Enrollment">Course Enrollment</option>
                        <option value="All Access Bundle Inquiry">All Access Bundle Inquiry</option>
                        <option value="Payment / Bank Transfer">Payment / Bank Transfer</option>
                        <option value="Mentorship Booking">1-on-1 Mentorship Booking</option>
                        <option value="Other Inquiry">Other Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Message</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Write your message or query here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0fa1a7]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#0fa1a7] hover:bg-[#0d8a8f] text-white font-extrabold text-xs transition-all shadow-md shadow-[#0fa1a7]/20 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Send Inquiry Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
