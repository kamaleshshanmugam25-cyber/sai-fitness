import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { BRAND_CONFIG } from '../config/brandConfig';
import { formatCurrency } from '../utils/formatters';
import { generateCartWhatsAppUrl } from '../utils/whatsapp';
import {
  ShoppingBag,
  Trash2,
  ArrowRight,
  ShieldCheck,
  Tag,
  ExternalLink,
  ChevronRight,
  Truck
} from 'lucide-react';

export const CartPage: React.FC = () => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    clearCart,
    subtotal,
    discount,
    shipping,
    total,
    appliedCoupon,
    applyCoupon,
    removeCoupon
  } = useCart();

  const [couponCode, setCouponCode] = useState('');
  const [couponError, setCouponError] = useState('');
  const navigate = useNavigate();

  const freeShippingThreshold = BRAND_CONFIG.features.freeShippingThreshold;
  const neededForFreeShipping = Math.max(0, freeShippingThreshold - (subtotal - discount));

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponCode.trim()) return;

    const res = applyCoupon(couponCode);
    if (!res.success) {
      setCouponError(res.message);
    } else {
      setCouponError('');
      setCouponCode('');
    }
  };

  const handleWhatsAppOrder = () => {
    const url = generateCartWhatsAppUrl(cart, subtotal, shipping, discount, total);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  if (cart.length === 0) {
    return (
      <div className="py-20 bg-[#FFFDF5] min-h-[70vh] flex items-center justify-center">
        <div className="max-w-md mx-auto text-center p-8 rounded-3xl bg-[#FFFFFF] border border-[#EAE6DC] space-y-5 shadow-sm">
          <div className="w-16 h-16 rounded-full bg-[#FFF4D6] flex items-center justify-center text-[#858585] mx-auto">
            <ShoppingBag className="w-8 h-8" />
          </div>
          <h2 className="font-heading font-extrabold text-2xl text-[#252525]">
            Your Shopping Bag is Empty
          </h2>
          <p className="text-xs text-[#858585] leading-relaxed">
            You haven't added any sports nutrition supplements yet. Discover our verified protein powders, creatines, and pre-workouts.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#F4BE38] hover:bg-[#EDDA5E] text-[#252525] font-heading font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
          >
            <span>CONTINUE SHOPPING</span>
            <ArrowRight className="w-4 h-4 text-[#252525]" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 bg-[#FFFDF5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-left">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-[#858585]">
          <Link to="/" className="hover:text-[#F4BE38]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#EAE6DC]" />
          <span className="text-[#252525] font-semibold">Shopping Bag</span>
        </nav>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#EAE6DC] gap-4">
          <div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#252525] uppercase tracking-tight">
              SHOPPING BAG
            </h1>
            <p className="text-xs text-[#858585] mt-1">
              {cart.length} item{cart.length === 1 ? '' : 's'} ready for delivery
            </p>
          </div>

          <button
            onClick={clearCart}
            className="text-xs text-[#858585] hover:text-red-500 self-start sm:self-auto transition-colors font-medium"
          >
            Clear Entire Bag
          </button>
        </div>

        {/* Free Shipping Alert Bar */}
        <div className="p-4 rounded-2xl bg-[#FFF4D6] border border-[#EAE6DC] flex items-center justify-between text-xs shadow-sm">
          <div className="flex items-center gap-3">
            <Truck className="w-5 h-5 text-[#F4BE38] shrink-0" />
            {neededForFreeShipping > 0 ? (
              <span className="text-[#858585]">
                Add <strong className="text-[#252525]">{formatCurrency(neededForFreeShipping)}</strong> more to unlock <strong>FREE Delivery</strong>!
              </span>
            ) : (
              <span className="text-[#252525] font-bold">
                You've unlocked FREE India-Wide Delivery!
              </span>
            )}
          </div>
          <span className="font-mono text-[11px] text-[#858585] hidden md:inline">Threshold: ₹{freeShippingThreshold}</span>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Items List */}
          <div className="lg:col-span-8 space-y-4">
            <div className="rounded-3xl bg-[#FFFFFF] border border-[#EAE6DC] divide-y divide-[#EAE6DC] shadow-sm">
              {cart.map((item) => (
                <div key={item.cartKey} className="p-5 flex flex-col sm:flex-row gap-5 items-start sm:items-center">
                  <img
                    src={item.product.images[0] || '/images/products/placeholder-supplement.svg'}
                    alt={item.product.name}
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.onerror = null;
                      target.src = '/images/products/placeholder-supplement.svg';
                    }}
                    className="w-24 h-24 object-contain rounded-2xl bg-[#FFFFFF] border border-[#EAE6DC] shrink-0 p-2"
                  />

                  <div className="flex-1 min-w-0 space-y-1.5">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#F4BE38] font-bold">
                      {item.product.brand}
                    </span>
                    <Link
                      to={`/product/${item.product.slug}`}
                      className="block font-title font-bold text-sm sm:text-base text-[#252525] hover:text-[#F4BE38] transition-colors"
                    >
                      {item.product.name}
                    </Link>
                    <div className="flex flex-wrap gap-3 text-xs text-[#858585]">
                      <span>Flavour: <strong className="text-[#252525]">{item.selectedFlavor}</strong></span>
                      <span>•</span>
                      <span>Size: <strong className="text-[#252525]">{item.selectedWeight.label}</strong></span>
                    </div>
                  </div>

                  {/* Quantity Stepper */}
                  <div className="flex items-center gap-4 self-end sm:self-auto">
                    <div className="flex items-center border border-[#EAE6DC] rounded-xl bg-[#FFFDF5]">
                      <button
                        onClick={() => updateQuantity(item.cartKey, item.quantity - 1)}
                        className="px-3 py-1.5 text-xs text-[#252525] hover:bg-[#FFF4D6] rounded-l-xl transition-colors"
                      >
                        -
                      </button>
                      <span className="px-3 text-xs font-bold text-[#252525] font-mono">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.cartKey, item.quantity + 1)}
                        className="px-3 py-1.5 text-xs text-[#252525] hover:bg-[#FFF4D6] rounded-r-xl transition-colors"
                      >
                        +
                      </button>
                    </div>

                    <div className="text-right min-w-[90px]">
                      <p className="font-heading font-extrabold text-base text-[#252525]">
                        {formatCurrency(item.unitPrice * item.quantity)}
                      </p>
                      {item.unitMrp > item.unitPrice && (
                        <p className="text-[11px] text-[#858585] line-through font-mono">
                          {formatCurrency(item.unitMrp * item.quantity)}
                        </p>
                      )}
                    </div>

                    <button
                      onClick={() => removeFromCart(item.cartKey)}
                      className="p-2 text-[#858585] hover:text-red-500 transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center pt-2">
              <Link
                to="/shop"
                className="text-xs text-[#252525] hover:underline font-bold flex items-center gap-1"
              >
                <span>← Continue Shopping</span>
              </Link>
            </div>
          </div>

          {/* Right: Order Summary */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-3xl bg-[#FFFFFF] border border-[#EAE6DC] space-y-6 shadow-sm">
              <h3 className="font-heading font-bold text-lg text-[#252525] uppercase tracking-tight pb-3 border-b border-[#EAE6DC]">
                Order Summary
              </h3>

              {/* Promo Code Input */}
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#858585]">
                  Promo Code
                </span>
                {!appliedCoupon ? (
                  <form onSubmit={handleApplyCoupon} className="space-y-1.5">
                    <div className="flex gap-2">
                      <div className="relative flex-1">
                        <Tag className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#858585]" />
                        <input
                          type="text"
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value)}
                          placeholder="e.g. SAIFIT10"
                          className="w-full bg-[#FFFDF5] text-[#252525] pl-9 pr-3 py-2 rounded-xl border border-[#EAE6DC] text-xs focus:border-[#F4BE38] focus:outline-none placeholder-[#858585]"
                        />
                      </div>
                      <button
                        type="submit"
                        className="px-4 py-2 rounded-xl bg-[#F4BE38] hover:bg-[#EDDA5E] text-xs font-bold text-[#252525] transition-colors"
                      >
                        Apply
                      </button>
                    </div>
                    {couponError && <p className="text-[11px] text-red-500">{couponError}</p>}
                  </form>
                ) : (
                  <div className="flex items-center justify-between p-3 rounded-2xl bg-[#FFF4D6] border border-[#EDDA5E] text-xs">
                    <div className="flex items-center gap-2">
                      <Tag className="w-4 h-4 text-[#252525]" />
                      <span className="font-bold text-[#252525]">{appliedCoupon.code}</span>
                      <span className="text-[#858585]">(-{formatCurrency(discount)})</span>
                    </div>
                    <button
                      onClick={removeCoupon}
                      className="text-xs text-[#858585] hover:text-red-500 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>

              {/* Cost Calculations */}
              <div className="space-y-2.5 text-xs pt-3 border-t border-[#EAE6DC]">
                <div className="flex justify-between text-[#858585]">
                  <span>Items Subtotal</span>
                  <span className="text-[#252525] font-mono font-medium">{formatCurrency(subtotal)}</span>
                </div>

                {discount > 0 && (
                  <div className="flex justify-between text-[#252525] font-semibold">
                    <span>Coupon Discount</span>
                    <span className="font-mono font-bold">-{formatCurrency(discount)}</span>
                  </div>
                )}

                <div className="flex justify-between text-[#858585]">
                  <span>Delivery Charges</span>
                  <span className="font-mono">
                    {shipping === 0 ? (
                      <strong className="text-[#252525]">FREE</strong>
                    ) : (
                      formatCurrency(shipping)
                    )}
                  </span>
                </div>

                <div className="pt-3 border-t border-[#EAE6DC] flex justify-between items-baseline">
                  <span className="font-heading font-bold text-sm text-[#252525]">Final Total</span>
                  <span className="font-heading font-extrabold text-2xl text-[#252525]">
                    {formatCurrency(total)}
                  </span>
                </div>
              </div>

              {/* CTAs */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={() => navigate('/checkout')}
                  className="w-full py-4 rounded-xl bg-[#F4BE38] hover:bg-[#EDDA5E] text-[#252525] font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <span>PROCEED TO CHECKOUT</span>
                  <ArrowRight className="w-4 h-4 text-[#252525]" />
                </button>

                <button
                  onClick={handleWhatsAppOrder}
                  className="w-full py-3.5 rounded-xl bg-[#FFFFFF] hover:bg-[#FFF4D6]/30 border border-[#25D366] text-[#252525] text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                  <span>ORDER VIA WHATSAPP</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#25D366]" />
                </button>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-[#858585] pt-2">
                <ShieldCheck className="w-4 h-4 text-[#F4BE38] shrink-0" />
                <span>Encrypted 256-bit checkout & tamper-evident delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
