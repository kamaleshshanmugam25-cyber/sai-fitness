import React, { useState } from 'react';
import { ZoomIn } from 'lucide-react';

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({ images, productName }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const activeImage = images[selectedIndex] || images[0];

  return (
    <div className="space-y-4">
      {/* Main Image Frame */}
      <div
        className="relative aspect-square rounded-2xl bg-[#FFFFFF] border border-[#E8E4DA] overflow-hidden cursor-zoom-in group shadow-sm p-6"
        onClick={() => setIsZoomed(!isZoomed)}
      >
        <img
          src={activeImage}
          alt={`${productName} view ${selectedIndex + 1}`}
          className={`w-full h-full object-cover object-center rounded-xl transition-transform duration-500 ${
            isZoomed ? 'scale-150' : 'group-hover:scale-105'
          }`}
        />
        <div className="absolute top-4 right-4 p-2 rounded-lg bg-[#FFFFFF]/80 text-[#85877F] hover:text-[#263C32] backdrop-blur-sm border border-[#E8E4DA] pointer-events-none">
          <ZoomIn className="w-4 h-4" />
        </div>
      </div>

      {/* Thumbnail Selector Strip */}
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-1">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => {
                setSelectedIndex(idx);
                setIsZoomed(false);
              }}
              className={`relative w-20 h-20 rounded-xl overflow-hidden bg-[#FFFFFF] border-2 transition-all shrink-0 p-1 ${
                selectedIndex === idx
                  ? 'border-[#263C32] shadow-sm'
                  : 'border-[#E8E4DA] hover:border-[#85877F]'
              }`}
            >
              <img
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                className="w-full h-full object-cover object-center rounded-lg"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
