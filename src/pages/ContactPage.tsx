import React, { useState } from 'react';
import { BRAND_CONFIG } from '../config/brandConfig';
import { generateGeneralSupportWhatsAppUrl } from '../utils/whatsapp';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Supplement Recommendation',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in your name, email, and message.');
      return;
    }

    setError('');
    setSubmitted(true);
  };

  const handleOpenWhatsApp = () => {
    const url = generateGeneralSupportWhatsAppUrl(form.subject || 'General Enquiry');
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="py-16 bg-[#F8F6F0] min-h-screen text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="font-mono text-xs uppercase tracking-widest text-[#263C32] font-bold">
            GET IN TOUCH
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#252821] uppercase tracking-tight">
            CONTACT & NUTRITION ADVISORY
          </h1>
          <p className="text-xs sm:text-sm text-[#85877F] leading-relaxed">
            Reach our sports nutritionists for genuine batch code authentication, stacking advice, or order tracking queries.
          </p>
        </div>

        {/* 2-Column: Left Contact Details + Right Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Info & WhatsApp Box */}
          <div className="lg:col-span-5 space-y-6">
            {/* Info Cards */}
            <div className="p-6 rounded-3xl bg-[#FFFFFF] border border-[#E8E4DA] space-y-6 shadow-sm">
              <h3 className="font-heading font-bold text-lg text-[#252821] pb-3 border-b border-[#E8E4DA]">
                Store & Hub Location
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#F8F6F0] border border-[#E8E4DA] flex items-center justify-center text-[#263C32] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-[#252821]">{BRAND_CONFIG.address.hub}</h4>
                    <p className="text-[#85877F] mt-0.5 leading-relaxed">
                      {BRAND_CONFIG.address.street}, {BRAND_CONFIG.address.city}, {BRAND_CONFIG.address.state} - {BRAND_CONFIG.address.pincode}, {BRAND_CONFIG.address.country}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#F8F6F0] border border-[#E8E4DA] flex items-center justify-center text-[#263C32] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-[#252821]">Direct Phone Support</h4>
                    <a href={`tel:${BRAND_CONFIG.phone}`} className="text-[#263C32] font-mono font-bold hover:underline">
                      {BRAND_CONFIG.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#F8F6F0] border border-[#E8E4DA] flex items-center justify-center text-[#263C32] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-[#252821]">Customer Support Email</h4>
                    <a href={`mailto:${BRAND_CONFIG.email}`} className="text-[#85877F] hover:text-[#252821]">
                      {BRAND_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#F8F6F0] border border-[#E8E4DA] flex items-center justify-center text-[#263C32] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-[#252821]">Operational Hours</h4>
                    <p className="text-[#85877F] mt-0.5 leading-relaxed">
                      {BRAND_CONFIG.businessHours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Instant WhatsApp Card */}
            <div className="p-6 rounded-3xl bg-[#263C32] text-[#FFFFFF] space-y-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FFFFFF]/10 text-[#25D366] flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-[#FFFFFF]">WhatsApp Support Desk</h4>
                  <p className="text-xs text-[#D5AD65]">Typical response: under 5 minutes</p>
                </div>
              </div>

              <p className="text-xs text-[#E8E4DA] leading-relaxed">
                Connect directly with our team to verify batch scratch codes, ask questions regarding whey isolate mixability, or place an assisted order.
              </p>

              <button
                onClick={handleOpenWhatsApp}
                className="w-full py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-[#FFFFFF] font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>CHAT ON WHATSAPP: {BRAND_CONFIG.whatsappDisplay}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-[#FFFFFF] border border-[#E8E4DA] space-y-6 shadow-sm">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-[#263C32] font-bold">
                  SEND AN INQUIRY
                </span>
                <h3 className="font-heading font-bold text-xl text-[#252821]">
                  Direct Message to Our Advisory Desk
                </h3>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-[#F8F6F0] border border-[#263C32]/30 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-[#263C32] mx-auto" />
                  <h4 className="font-heading font-bold text-lg text-[#252821]">Message Received!</h4>
                  <p className="text-xs text-[#85877F] max-w-sm mx-auto">
                    Thank you, {form.name}. Our team will review your enquiry and respond to {form.email} within 4 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: '',
                        email: '',
                        phone: '',
                        subject: 'Supplement Recommendation',
                        message: ''
                      });
                    }}
                    className="mt-2 px-6 py-2.5 rounded-xl bg-[#263C32] text-[#FFFFFF] text-xs font-bold"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-mono uppercase text-[#85877F] font-semibold">Your Name *</label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="e.g. Rahul Verma"
                        className="w-full bg-[#F8F6F0] text-[#252821] px-4 py-2.5 rounded-xl border border-[#E8E4DA] text-xs focus:border-[#263C32] focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-mono uppercase text-[#85877F] font-semibold">Email Address *</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="name@domain.com"
                        className="w-full bg-[#F8F6F0] text-[#252821] px-4 py-2.5 rounded-xl border border-[#E8E4DA] text-xs focus:border-[#263C32] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-mono uppercase text-[#85877F] font-semibold">Contact Phone Number</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full bg-[#F8F6F0] text-[#252821] px-4 py-2.5 rounded-xl border border-[#E8E4DA] text-xs focus:border-[#263C32] focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-mono uppercase text-[#85877F] font-semibold">Topic of Inquiry</label>
                      <select
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className="w-full bg-[#F8F6F0] text-[#252821] px-3 py-2.5 rounded-xl border border-[#E8E4DA] text-xs focus:border-[#263C32] focus:outline-none"
                      >
                        <option value="Supplement Recommendation">Supplement Stack Advice</option>
                        <option value="Batch Code Verification">Batch Code & Authenticity</option>
                        <option value="Order Tracking">Existing Order Status</option>
                        <option value="Bulk Order">Gym / Bulk Inquiry</option>
                        <option value="Other">Other Enquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono uppercase text-[#85877F] font-semibold">Your Message *</label>
                    <textarea
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Describe your training goal, target body weight, or order question..."
                      className="w-full bg-[#F8F6F0] text-[#252821] p-4 rounded-xl border border-[#E8E4DA] text-xs focus:border-[#263C32] focus:outline-none resize-none"
                    />
                  </div>

                  {error && <p className="text-xs text-red-500">{error}</p>}

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#263C32] hover:bg-[#1C2D25] text-[#FFFFFF] font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
                  >
                    <Send className="w-4 h-4 text-[#D5AD65]" />
                    <span>SEND MESSAGE TO NUTRITION DESK</span>
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
