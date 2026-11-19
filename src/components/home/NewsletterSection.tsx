import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle2 } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim() || !emailRegex.test(email.trim())) {
      setStatus('error');
      setFeedback('Please enter a valid email address.');
      return;
    }

    setStatus('loading');

    setTimeout(() => {
      try {
        const existing = JSON.parse(localStorage.getItem('sai_newsletter_subscribers') || '[]');
        if (!existing.includes(email.trim())) {
          existing.push(email.trim());
          localStorage.setItem('sai_newsletter_subscribers', JSON.stringify(existing));
        }
      } catch (err) {
        console.error(err);
      }

      setStatus('success');
      setFeedback('Thank you for subscribing to Sai Fitness Dispatch. You will receive batch restock alerts and exclusive promotional offers in your inbox.');
      setEmail('');
    }, 500);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#F8F6F0] border-b border-[#E8E4DA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="w-12 h-12 rounded-2xl bg-[#FFFFFF] border border-[#E8E4DA] flex items-center justify-center text-[#263C32] mx-auto shadow-sm">
          <Mail className="w-6 h-6" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs uppercase tracking-widest text-[#263C32] font-bold">
            SAI FITNESS DISPATCH
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#252821] uppercase tracking-tight">
            BE FIRST TO KNOW ON NEW DROPS & OFFERS
          </h2>
          <p className="text-xs sm:text-sm text-[#85877F] max-w-xl mx-auto leading-relaxed">
            Get early access to authentic batch restocks, exclusive subscriber discount codes, and fitness nutrition guides.
          </p>
        </div>

        {status === 'success' ? (
          <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#263C32]/30 max-w-lg mx-auto flex items-center gap-3 text-left shadow-sm">
            <CheckCircle2 className="w-5 h-5 text-[#263C32] shrink-0" />
            <p className="text-xs text-[#252821]">{feedback}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-2">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'error') setStatus('idle');
                }}
                placeholder="Enter your email address..."
                className="flex-1 bg-[#FFFFFF] text-[#252821] px-4 py-3.5 rounded-xl border border-[#E8E4DA] focus:border-[#263C32] focus:outline-none text-xs placeholder-[#85877F] shadow-sm"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-6 py-3.5 rounded-xl bg-[#263C32] hover:bg-[#1C2D25] disabled:opacity-50 text-[#FFFFFF] font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shrink-0 shadow-sm"
              >
                <span>{status === 'loading' ? 'SUBSCRIBING...' : 'SUBSCRIBE'}</span>
                <ArrowRight className="w-4 h-4 text-[#D5AD65]" />
              </button>
            </div>
            {status === 'error' && (
              <p className="text-xs text-red-500 text-left pl-1">{feedback}</p>
            )}
            <p className="text-[11px] text-[#85877F] text-left pl-1">
              Zero spam. You may unsubscribe at any time.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};
