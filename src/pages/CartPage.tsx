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
      <div className="py-20 bg-[#F8F6F0] min-h-[70vh] flex items-center justify-center">
        <div className="max-w-md mx-auto text-center p-8 rounded-3xl bg-[#FFFFFF] border border-[#E8E4DA] space-y-5 shadow-sm">
          <div className="w-16 h-16 rounded-full bg-[#F8F6F0] flex items-center justify-center text-[#85877F] mx-auto">
            <ShoppingBag className="w-8 h-8" />
          </div>
          <h2 className="font-heading font-extrabold text-2xl text-[#252821]">
            Your Shopping Bag is Empty
          </h2>
          <p className="text-xs text-[#85877F] leading-relaxed">
            You haven't added any sports nutrition supplements yet. Discover our verified protein powders, creatines, and pre-workouts.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#263C32] text-[#FFFFFF] font-heading font-bold text-xs uppercase tracking-wider hover:bg-[#1C2D25] transition-colors shadow-sm"
          >
            <span>CONTINUE SHOPPING</span>
            <ArrowRight className="w-4 h-4 text-[#D5AD65]" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 bg-[#F8F6F0] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-left">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-[#85877F]">
          <Link to="/" className="hover:text-[#263C32]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#E8E4DA]" />
          <span className="text-[#263C32] font-semibold">Shopping Bag</span>
        </nav>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#E8E4DA] gap-4">
          <div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#252821] uppercase tracking-tight">
              SHOPPING BAG
            </h1>
            <p className="text-xs text-[#85877F] mt-1">
              {cart.length} item{cart.length === 1 ? '' : 's'} ready for delivery
            </p>
          </div>

          <button
            onClick={clearCart}
            className="text-xs text-[#85877F] hover:text-red-500 self-start sm:self-auto transition-colors font-medium"
          >
            Clear Entire Bag
          </button>
        </div>

        {/* Free Shipping Alert Bar */}
        <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#E8E4DA] flex items-center justify-between text-xs shadow-sm">
          <div className="flex items-center gap-3">
            <Truck className="w-5 h-5 text-[#263C32] shrink-0" />
            {neededForFreeShipping > 0 ? (
              <span className="text-[#85877F]">
                Add <strong className="text-[#263C32]">{formatCurrency(neededForFreeShipping)}</strong> more to unlock <strong>FREE Delivery</strong>!
              </span>
            ) : (
              <span className="text-[#263C32] font-bold">
                You've unlocked FREE India-Wide Delivery!
              </span>
            )}
          </div>
          <span className="font-mono text-[11px] text-[#85877F] hidden md:inline">Threshold: ₹{freeShippingThreshold}</span>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Items List */}
          <div className="lg:col-span-8 space-y-4">
            <div className="rounded-3xl bg-[#FFFFFF] border border-[#E8E4DA] divide-y divide-[#E8E4DA] shadow-sm">
              {cart.map((item) => (
                <div key={item.cartKey} className="p-5 flex flex-col sm:flex-row gap-5 items-start sm:items-center">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-24 h-24 object-cover rounded-2xl bg-[#F8F6F0] border border-[#E8E4DA] shrink-0"
                  />

                  <div className="flex-1 min-w-0 space-y-1.5">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#D5AD65] font-bold">
                      {item.product.brand}
                    </span>
                    <Link
                      to={`/product/${item.product.slug}`}
                      className="block font-title font-bold text-sm sm:text-base text-[#252821] hover:text-[#263C32] transition-colors"
                    >
                      {item.product.name}
                    </Link>
                    <div className="flex flex-wrap gap-3 text-xs text-[#85877F]">
                      <span>Flavour: <strong className="text-[#252821]">{item.selectedFlavor}</strong></span>
                      <span>•</span>
                      <span>Size: <strong className="text-[#252821]">{item.selectedWeight.label}</strong></span>
                    </div>
                  </div>

                  {/* Quantity Stepper */}
                  <div className="flex items-center gap-4 self-end sm:self-auto">
                    <div className="flex items-center border border-[#E8E4DA] rounded-xl bg-[#F8F6F0]">
                      <button
                        onClick={() => updateQuantity(item.cartKey, item.quantity - 1)}
                        className="px-3 py-1.5 text-xs text-[#252821] hover:bg-[#E8E4DA] rounded-l-xl transition-colors"
                      >
                        -
                      </button>
                      <span className="px-3 text-xs font-bold text-[#252821] font-mono">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.cartKey, item.quantity + 1)}
                        className="px-3 py-1.5 text-xs text-[#252821] hover:bg-[#E8E4DA] rounded-r-xl transition-colors"
                      >
                        +
                      </button>
                    </div>

                    <div className="text-right min-w-[90px]">
                      <p className="font-heading font-extrabold text-base text-[#263C32]">
                        {formatCurrency(item.unitPrice * item.quantity)}
                      </p>
                      {item.unitMrp > item.unitPrice && (
                        <p className="text-[11px] text-[#85877F] line-through font-mono">
                          {formatCurrency(item.unitMrp * item.quantity)}
                        </p>
                      )}
                    </div>

                    <button
                      onClick={() => removeFromCart(item.cartKey)}
                      className="p-2 text-[#85877F] hover:text-red-500 transition-colors"
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
                className="text-xs text-[#263C32] hover:underline font-bold flex items-center gap-1"
              >
                <span>← Continue Shopping</span>
              </Link>
            </div>
          </div>

          {/* Right: Order Summary */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-3xl bg-[#FFFFFF] border border-[#E8E4DA] space-y-6 shadow-sm">
              <h3 className="font-heading font-bold text-lg text-[#252821] uppercase tracking-tight pb-3 border-b border-[#E8E4DA]">
                Order Summary
              </h3>

              {/* Promo Code Input */}
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#85877F]">
                  Promo Code
                </span>
                {!appliedCoupon ? (
                  <form onSubmit={handleApplyCoupon} className="space-y-1.5">
                    <div className="flex gap-2">
                      <div className="relative flex-1">
                        <Tag className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#85877F]" />
                        <input
                          type="text"
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value)}
                          placeholder="e.g. SAIFIT10"
                          className="w-full bg-[#F8F6F0] text-[#252821] pl-9 pr-3 py-2 rounded-xl border border-[#E8E4DA] text-xs focus:border-[#263C32] focus:outline-none placeholder-[#85877F]"
                        />
                      </div>
                      <button
                        type="submit"
                        className="px-4 py-2 rounded-xl bg-[#263C32] text-xs font-bold text-[#FFFFFF] hover:bg-[#1C2D25] transition-colors"
                      >
                        Apply
                      </button>
                    </div>
                    {couponError && <p className="text-[11px] text-red-500">{couponError}</p>}
                  </form>
                ) : (
                  <div className="flex items-center justify-between p-3 rounded-2xl bg-[#F8F6F0] border border-[#263C32]/30 text-xs">
                    <div className="flex items-center gap-2">
                      <Tag className="w-4 h-4 text-[#263C32]" />
                      <span className="font-bold text-[#263C32]">{appliedCoupon.code}</span>
                      <span className="text-[#85877F]">(-{formatCurrency(discount)})</span>
                    </div>
                    <button
                      onClick={removeCoupon}
                      className="text-xs text-[#85877F] hover:text-red-500 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>

              {/* Cost Calculations */}
              <div className="space-y-2.5 text-xs pt-3 border-t border-[#E8E4DA]">
                <div className="flex justify-between text-[#85877F]">
                  <span>Items Subtotal</span>
                  <span className="text-[#252821] font-mono font-medium">{formatCurrency(subtotal)}</span>
                </div>

                {discount > 0 && (
                  <div className="flex justify-between text-[#263C32]">
                    <span>Coupon Discount</span>
                    <span className="font-mono font-bold">-{formatCurrency(discount)}</span>
                  </div>
                )}

                <div className="flex justify-between text-[#85877F]">
                  <span>Delivery Charges</span>
                  <span className="font-mono">
                    {shipping === 0 ? (
                      <strong className="text-[#263C32]">FREE</strong>
                    ) : (
                      formatCurrency(shipping)
                    )}
                  </span>
                </div>

                <div className="pt-3 border-t border-[#E8E4DA] flex justify-between items-baseline">
                  <span className="font-heading font-bold text-sm text-[#252821]">Final Total</span>
                  <span className="font-heading font-extrabold text-2xl text-[#263C32]">
                    {formatCurrency(total)}
                  </span>
                </div>
              </div>

              {/* CTAs */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={() => navigate('/checkout')}
                  className="w-full py-4 rounded-xl bg-[#263C32] hover:bg-[#1C2D25] text-[#FFFFFF] font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <span>PROCEED TO CHECKOUT</span>
                  <ArrowRight className="w-4 h-4 text-[#D5AD65]" />
                </button>

                <button
                  onClick={handleWhatsAppOrder}
                  className="w-full py-3.5 rounded-xl bg-[#FFFFFF] hover:bg-[#F8F6F0] border border-[#25D366] text-[#252821] text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                  <span>ORDER VIA WHATSAPP</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#25D366]" />
                </button>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-[#85877F] pt-2">
                <ShieldCheck className="w-4 h-4 text-[#263C32] shrink-0" />
                <span>Encrypted 256-bit checkout & tamper-evident delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
