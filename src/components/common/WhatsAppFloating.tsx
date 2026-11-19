import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles, ShieldCheck } from 'lucide-react';
import { BRAND_CONFIG } from '../../config/brandConfig';
import { generateGeneralSupportWhatsAppUrl } from '../../utils/whatsapp';

export const WhatsAppFloating: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenWhatsApp = (topic?: string) => {
    const url = generateGeneralSupportWhatsAppUrl(topic);
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Popover Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-[#FFFFFF] border border-[#E8E4DA] rounded-2xl shadow-2xl p-5 text-[#252821] animate-in fade-in slide-in-from-bottom-4 duration-200 text-left">
          <div className="flex items-start justify-between pb-3 border-b border-[#E8E4DA]">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#25D366]/15 text-[#25D366] flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm text-[#252821]">SAI FITNESS Advisory</h4>
                <div className="flex items-center gap-1.5 text-[11px] text-[#25D366]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                  <span>Online • Certified Sports Nutritionist</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#85877F] hover:text-[#252821] p-1 rounded-md transition-colors"
              aria-label="Close WhatsApp card"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-3 text-xs text-[#85877F] space-y-2">
            <p>
              Have questions about authentic batch codes, stack recommendations, or want to order directly via WhatsApp?
            </p>
            <div className="p-2.5 rounded-xl bg-[#F8F6F0] border border-[#E8E4DA] flex items-center gap-2 text-[11px] text-[#252821]">
              <ShieldCheck className="w-4 h-4 text-[#263C32] shrink-0" />
              <span>Official WhatsApp: {BRAND_CONFIG.whatsappDisplay}</span>
            </div>
          </div>

          <div className="space-y-2 pt-1">
            <button
              onClick={() => handleOpenWhatsApp('Supplement Stack Guidance')}
              className="w-full text-left p-2.5 rounded-xl bg-[#F8F6F0] hover:bg-[#EFEEE7] border border-[#E8E4DA] text-xs text-[#252821] flex items-center justify-between group transition-colors"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#D5AD65]" />
                <span>Recommend a Supplement Stack for My Goal</span>
              </span>
              <Send className="w-3 h-3 text-[#85877F] group-hover:text-[#263C32] transition-colors" />
            </button>

            <button
              onClick={() => handleOpenWhatsApp('Authenticity & Batch Verification')}
              className="w-full text-left p-2.5 rounded-xl bg-[#F8F6F0] hover:bg-[#EFEEE7] border border-[#E8E4DA] text-xs text-[#252821] flex items-center justify-between group transition-colors"
            >
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#263C32]" />
                <span>Verify Importer Batch Code</span>
              </span>
              <Send className="w-3 h-3 text-[#85877F] group-hover:text-[#263C32] transition-colors" />
            </button>

            <button
              onClick={() => handleOpenWhatsApp('General WhatsApp Order Enquiry')}
              className="w-full py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-[#FFFFFF] font-heading font-bold text-xs flex items-center justify-center gap-2 transition-colors mt-2 shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>CHAT ON WHATSAPP NOW</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group p-3.5 rounded-full bg-[#25D366] text-[#FFFFFF] shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
        aria-label="Open WhatsApp conversation"
      >
        <div className="relative flex items-center justify-center">
          <MessageCircle className="w-6 h-6" />
        </div>
      </button>
    </div>
  );
};
