import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Star, ShieldCheck, Eye, MessageCircle, Check } from 'lucide-react';
import type { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { formatCurrency } from '../../utils/formatters';
import { generateProductWhatsAppUrl } from '../../utils/whatsapp';
import { QuickViewModal } from './QuickViewModal';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const isFavorited = isInWishlist(product.id);
  const defaultFlavor = product.flavors[0]?.name || 'Standard';
  const defaultWeight = product.weights[0];
  const unitPrice = Math.round(product.sellingPrice * defaultWeight.priceMultiplier);
  const unitMrp = Math.round(product.mrp * defaultWeight.mrpMultiplier);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, defaultFlavor, defaultWeight, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1400);
  };

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  const handleQuickViewClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsQuickViewOpen(true);
  };

  const handleWhatsAppEnquiry = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const url = generateProductWhatsAppUrl(product, defaultFlavor, defaultWeight, unitPrice);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <div className="group relative bg-[#FFFFFF] border border-[#EAE6DC] hover:border-[#F4BE38]/80 rounded-2xl overflow-hidden hover:-translate-y-[6px] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col justify-between shadow-sm hover:shadow-[0_20px_25px_-5px_rgba(37,37,37,0.08),0_8px_10px_-6px_rgba(37,37,37,0.04)] text-left will-change-transform">
        {/* Top Badges & Actions */}
        <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between pointer-events-none">
          <div className="flex flex-col gap-1 items-start">
            {product.isBestseller && (
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-[#252525] text-[#FFFFFF] shadow-sm">
                BESTSELLER
              </span>
            )}
            {product.discountPercentage > 0 && (
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-extrabold tracking-wider uppercase bg-[#FFF4D6] text-[#252525] border border-[#EDDA5E]/50 shadow-sm">
                - {product.discountPercentage} %
              </span>
            )}
          </div>

          <div className="pointer-events-auto flex items-center gap-1.5">
            {/* Quick View Button: Slides Upward on hover */}
            <button
              onClick={handleQuickViewClick}
              aria-label="Quick preview"
              className="p-2 rounded-full bg-[#FFFFFF]/95 hover:bg-[#FFFFFF] text-[#858585] hover:text-[#252525] hover:border-[#F4BE38]/60 border border-[#EAE6DC] shadow-sm translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-110 active:scale-95"
            >
              <Eye className="w-3.5 h-3.5" />
            </button>

            {/* Wishlist Heart: Scales smoothly */}
            <button
              onClick={handleWishlistClick}
              aria-label={isFavorited ? 'Remove from wishlist' : 'Add to wishlist'}
              className="p-2 rounded-full bg-[#FFFFFF]/95 hover:bg-[#FFFFFF] text-[#858585] hover:text-[#EF4444] border border-[#EAE6DC] shadow-sm transition-all duration-200 hover:scale-120 active:scale-90"
            >
              <Heart
                className={`w-4 h-4 transition-transform duration-200 ${
                  isFavorited ? 'fill-[#EF4444] text-[#EF4444] scale-110' : 'hover:scale-110'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Product Image Link */}
        <Link to={`/product/${product.slug}`} className="block relative aspect-square overflow-hidden bg-[#FFFFFF] p-5 flex items-center justify-center">
          <img
            src={product.images[0] || '/images/products/placeholder-supplement.svg'}
            alt={product.name}
            loading="lazy"
            onError={(e) => {
              const target = e.currentTarget;
              target.onerror = null;
              target.src = '/images/products/placeholder-supplement.svg';
            }}
            className="w-full h-full object-contain object-center group-hover:scale-[1.05] group-hover:-translate-y-1 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
          />
        </Link>

        {/* Card Details Body */}
        <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
          <div className="space-y-1.5">
            {/* Brand & Importer badge */}
            <div className="flex items-center justify-between text-[11px]">
              <span className="font-mono uppercase tracking-wider font-bold text-[#F4BE38] group-hover:text-[#252525] transition-colors">
                {product.brand}
              </span>
              <span className="flex items-center gap-1 text-[10px] text-[#858585]">
                <ShieldCheck className="w-3 h-3 text-[#F4BE38]" />
                <span>Genuine</span>
              </span>
            </div>

            {/* Title in Deep Charcoal */}
            <Link
              to={`/product/${product.slug}`}
              className="block font-heading font-extrabold text-sm text-[#252525] group-hover:text-[#F4BE38] transition-colors duration-200 line-clamp-2 leading-snug min-h-[40px]"
            >
              {product.name}
            </Link>

            {/* Default Variant Preview in Muted Grey */}
            <div className="text-[11px] text-[#858585] flex items-center gap-2">
              <span>{defaultWeight.label}</span>
              <span>•</span>
              <span className="truncate">{defaultFlavor}</span>
            </div>

            {/* Ratings in Premium Yellow */}
            {product.reviewCount > 0 && (
              <div className="flex items-center gap-1.5 text-xs pt-0.5">
                <div className="flex items-center text-[#F4BE38]">
                  <Star className="w-3.5 h-3.5 fill-[#F4BE38]" />
                  <span className="font-bold text-[11px] ml-1 text-[#252525]">{product.rating}</span>
                </div>
                <span className="text-[11px] text-[#858585]">
                  ({product.reviewCount.toLocaleString('en-IN')})
                </span>
              </div>
            )}
          </div>

          {/* Pricing & Actions */}
          <div className="pt-2.5 border-t border-[#EAE6DC] space-y-3">
            <div className="flex items-baseline justify-between">
              <div className="flex items-baseline gap-2">
                <span className="font-heading font-extrabold text-base text-[#252525]">
                  {formatCurrency(unitPrice)}
                </span>
                {unitMrp > unitPrice && (
                  <span className="text-xs text-[#858585] line-through font-mono">
                    {formatCurrency(unitMrp)}
                  </span>
                )}
              </div>

              <button
                onClick={handleWhatsAppEnquiry}
                title="Quick WhatsApp Enquiry"
                className="p-1.5 rounded-md text-[#25D366] hover:bg-[#FFF4D6] border border-[#25D366]/40 transition-all duration-200 hover:scale-105 active:scale-95"
                aria-label="Enquire on WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Action button: Premium Yellow with Golden Yellow hover */}
            <button
              onClick={handleQuickAdd}
              className={`btn-shine w-full py-2.5 px-3 rounded-full text-[#252525] font-heading font-bold text-xs flex items-center justify-center gap-2 transition-all duration-180 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-sm hover:-translate-y-0.5 active:scale-95 ${
                justAdded
                  ? 'bg-[#EDDA5E] hover:bg-[#EDDA5E]'
                  : 'bg-[#F4BE38] hover:bg-[#EDDA5E]'
              }`}
            >
              {justAdded ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#252525]" />
                  <span>ADDED TO CART</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-3.5 h-3.5 text-[#252525]" />
                  <span>ADD TO CART</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Quick View Modal */}
      {isQuickViewOpen && (
        <QuickViewModal product={product} onClose={() => setIsQuickViewOpen(false)} />
      )}
    </>
  );
};
