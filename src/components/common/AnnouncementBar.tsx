import React, { useState, useEffect } from 'react';
import { Phone, Star } from 'lucide-react';
import { BRAND_CONFIG } from '../../config/brandConfig';

export const AnnouncementBar: React.FC = () => {
  const [announcementIndex, setAnnouncementIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnnouncementIndex((prev) => (prev + 1) % BRAND_CONFIG.announcements.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#333333] text-[#FFFFFF] text-xs py-2 px-4 select-none relative z-40 border-b border-[#252525]">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 text-[11px] sm:text-xs">
        {/* Left: Google Rating & Reviews */}
        <a
          href={BRAND_CONFIG.address.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-1.5 text-[#F4BE38] hover:text-[#EDDA5E] transition-colors font-mono font-bold"
        >
          <div className="flex items-center">
            <Star className="w-3.5 h-3.5 fill-[#F4BE38] text-[#F4BE38]" />
          </div>
          <span>{BRAND_CONFIG.googleRating} ⭐</span>
          <span className="text-[#FFFDF5]/80 font-normal">({BRAND_CONFIG.googleReviewsDisplay} Google Reviews)</span>
        </a>

        {/* Center: Dynamic Animated Announcement / Tagline */}
        <div className="flex-1 flex items-center justify-center text-center text-[#FFFDF5] font-semibold tracking-wide truncate">
          <span className="transition-opacity duration-300">
            {BRAND_CONFIG.announcements[announcementIndex]}
          </span>
        </div>

        {/* Right: Direct Phone & Instagram */}
        <div className="flex items-center gap-3">
          <a
            href={BRAND_CONFIG.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 text-[#FFFDF5]/80 hover:text-[#F4BE38] transition-colors font-mono text-[11px]"
          >
            <span>{BRAND_CONFIG.instagramHandle}</span>
          </a>

          <a
            href={`tel:${BRAND_CONFIG.phone}`}
            className="flex items-center gap-1 text-[#FFFFFF] hover:text-[#F4BE38] transition-colors font-mono font-bold"
          >
            <Phone className="w-3 h-3 text-[#F4BE38]" />
            <span>{BRAND_CONFIG.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
