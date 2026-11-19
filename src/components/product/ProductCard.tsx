import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Star, ShieldCheck, Eye, MessageCircle } from 'lucide-react';
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

  const isFavorited = isInWishlist(product.id);
  const defaultFlavor = product.flavors[0]?.name || 'Standard';
  const defaultWeight = product.weights[0];
  const unitPrice = Math.round(product.sellingPrice * defaultWeight.priceMultiplier);
  const unitMrp = Math.round(product.mrp * defaultWeight.mrpMultiplier);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, defaultFlavor, defaultWeight, 1);
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
      <div className="group relative bg-[#FFFFFF] border border-[#E2E8F0] rounded-2xl overflow-hidden hover:border-[#BAE6FD] transition-all duration-300 flex flex-col justify-between hover:shadow-xl shadow-sm text-left">
        {/* Top Badges & Actions */}
        <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between pointer-events-none">
          <div className="flex flex-col gap-1 items-start">
            {product.isBestseller && (
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-[#0F172A] text-[#FFFFFF] shadow-sm">
                BESTSELLER
              </span>
            )}
            {product.discountPercentage > 0 && (
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-extrabold tracking-wider uppercase bg-[#E0F2FE] text-[#0284C7] border border-[#BAE6FD] shadow-sm">
                - {product.discountPercentage} %
              </span>
            )}
          </div>

          <div className="pointer-events-auto flex items-center gap-1.5">
            <button
              onClick={handleQuickViewClick}
              aria-label="Quick preview"
              className="p-2 rounded-full bg-[#FFFFFF]/90 hover:bg-[#FFFFFF] text-[#64748B] hover:text-[#0284C7] border border-[#E2E8F0] transition-all shadow-sm opacity-0 group-hover:opacity-100"
            >
              <Eye className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={handleWishlistClick}
              aria-label={isFavorited ? 'Remove from wishlist' : 'Add to wishlist'}
              className="p-2 rounded-full bg-[#FFFFFF]/90 hover:bg-[#FFFFFF] text-[#64748B] hover:text-[#EF4444] border border-[#E2E8F0] transition-colors shadow-sm"
            >
              <Heart
                className={`w-4 h-4 transition-colors ${
                  isFavorited ? 'fill-[#EF4444] text-[#EF4444]' : ''
                }`}
              />
            </button>
          </div>
        </div>

        {/* Product Image Link */}
        <Link to={`/product/${product.slug}`} className="block relative aspect-square overflow-hidden bg-[#F8FAFC] p-6">
          <img
            src={product.images[0]}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover object-center rounded-xl group-hover:scale-105 transition-transform duration-500"
          />
        </Link>

        {/* Card Details Body */}
        <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
          <div className="space-y-1.5">
            {/* Brand & Importer badge */}
            <div className="flex items-center justify-between text-[11px]">
              <span className="font-mono uppercase tracking-wider font-bold text-[#0284C7]">
                {product.brand}
              </span>
              <span className="flex items-center gap-1 text-[10px] text-[#64748B]">
                <ShieldCheck className="w-3 h-3 text-[#0284C7]" />
                <span>Genuine</span>
              </span>
            </div>

            {/* Title */}
            <Link
              to={`/product/${product.slug}`}
              className="block font-heading font-extrabold text-sm text-[#0F172A] group-hover:text-[#0284C7] transition-colors line-clamp-2 leading-snug min-h-[40px]"
            >
              {product.name}
            </Link>

            {/* Default Variant Preview */}
            <div className="text-[11px] text-[#64748B] flex items-center gap-2">
              <span>{defaultWeight.label}</span>
              <span>•</span>
              <span className="truncate">{defaultFlavor}</span>
            </div>

            {/* Ratings */}
            {product.reviewCount > 0 && (
              <div className="flex items-center gap-1.5 text-xs pt-0.5">
                <div className="flex items-center text-[#F59E0B]">
                  <Star className="w-3.5 h-3.5 fill-[#F59E0B]" />
                  <span className="font-bold text-[11px] ml-1 text-[#0F172A]">{product.rating}</span>
                </div>
                <span className="text-[11px] text-[#64748B]">
                  ({product.reviewCount.toLocaleString('en-IN')})
                </span>
              </div>
            )}
          </div>

          {/* Pricing & Actions */}
          <div className="pt-2.5 border-t border-[#E2E8F0] space-y-3">
            <div className="flex items-baseline justify-between">
              <div className="flex items-baseline gap-2">
                <span className="font-heading font-extrabold text-base text-[#0F172A]">
                  {formatCurrency(unitPrice)}
                </span>
                {unitMrp > unitPrice && (
                  <span className="text-xs text-[#94A3B8] line-through font-mono">
                    {formatCurrency(unitMrp)}
                  </span>
                )}
              </div>

              <button
                onClick={handleWhatsAppEnquiry}
                title="Quick WhatsApp Enquiry"
                className="p-1.5 rounded-md text-[#25D366] hover:bg-[#F0FDF4] border border-[#25D366]/40 transition-colors"
                aria-label="Enquire on WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Action button: Wave Nutrition Blue Pill */}
            <button
              onClick={handleQuickAdd}
              className="w-full py-2.5 px-3 rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-[#FFFFFF] font-heading font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-sm active:scale-98"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-[#FFFFFF]" />
              <span>ADD TO CART</span>
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
