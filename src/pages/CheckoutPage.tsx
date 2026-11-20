import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { BRAND_CONFIG } from '../config/brandConfig';
import type { CustomerAddress, PaymentMethod, OrderRecord } from '../types';
import { formatCurrency } from '../utils/formatters';
import {
  ShieldCheck,
  CreditCard,
  QrCode,
  Truck,
  ArrowRight,
  Lock,
  ChevronRight,
  Tag
} from 'lucide-react';
import confetti from 'canvas-confetti';

const INDIAN_STATES = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
  'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
  'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
  'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
  'Delhi NCR', 'Chandigarh', 'Puducherry'
];

export const CheckoutPage: React.FC = () => {
  const {
    cart,
    subtotal,
    discount,
    shipping,
    total,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    clearCart,
    setIsCartDrawerOpen
  } = useCart();
  const navigate = useNavigate();

  // Ensure cart drawer is closed on checkout page
  useEffect(() => {
    setIsCartDrawerOpen(false);
  }, [setIsCartDrawerOpen]);

  const [form, setForm] = useState<CustomerAddress>({
    fullName: '',
    phone: '',
    email: '',
    addressLine1: '',
    addressLine2: '',
    landmark: '',
    city: 'Tiruchirappalli',
    state: 'Tamil Nadu',
    pincode: ''
  });

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('upi');
  const [upiId, setUpiId] = useState('');
  const [couponCode, setCouponCode] = useState('');
  const [couponError, setCouponError] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isProcessing, setIsProcessing] = useState(false);

  const codFee = paymentMethod === 'cod' ? BRAND_CONFIG.features.codFee : 0;
  const finalPayable = total + codFee;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponCode.trim()) return;

    const result = applyCoupon(couponCode);
    if (!result.success) {
      setCouponError(result.message);
    } else {
      setCouponError('');
      setCouponCode('');
    }
  };

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!form.fullName.trim()) errs.fullName = 'Please enter your full name';
    if (!form.phone.trim() || !/^[6-9]\d{9}$/.test(form.phone.replace(/[^0-9]/g, ''))) {
      errs.phone = 'Please enter a valid 10-digit Indian mobile number';
    }
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Please enter a valid email for dispatch updates';
    }
    if (!form.addressLine1.trim()) errs.addressLine1 = 'House / Flat / Street address is required';
    if (!form.city.trim()) errs.city = 'City is required';
    if (!form.state.trim()) errs.state = 'State is required';
    if (!form.pincode.trim() || !/^\d{6}$/.test(form.pincode.trim())) {
      errs.pincode = 'Please enter a valid 6-digit Indian PIN code';
    }

    if (paymentMethod === 'upi' && upiId.trim() && !upiId.includes('@')) {
      errs.upiId = 'Invalid UPI ID format (e.g. username@oksbi)';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    if (cart.length === 0) {
      navigate('/shop');
      return;
    }

    setIsProcessing(true);

    setTimeout(() => {
      const orderId = `SAI-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;
      const orderRecord: OrderRecord = {
        orderId,
        orderDate: new Date().toISOString(),
        customer: form,
        items: [...cart],
        pricing: {
          subtotal,
          discount,
          shipping,
          codFee,
          total: finalPayable,
          couponApplied: appliedCoupon?.code
        },
        paymentMethod,
        paymentStatus: paymentMethod === 'cod' ? 'authorized' : 'paid',
        estimatedDelivery: '3 to 5 Business Days'
      };

      try {
        const existingOrders = JSON.parse(localStorage.getItem('sai_fitness_orders') || '[]');
        existingOrders.unshift(orderRecord);
        localStorage.setItem('sai_fitness_orders', JSON.stringify(existingOrders));
        localStorage.setItem(`order_${orderId}`, JSON.stringify(orderRecord));
      } catch (err) {
        console.error(err);
      }

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // Fallback
      }

      clearCart();
      setIsProcessing(false);
      navigate(`/order-confirmation/${orderId}`);
    }, 1000);
  };

  if (cart.length === 0) {
    return (
      <div className="py-20 bg-[#FFFDF5] min-h-[60vh] flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-base text-[#252525]">Your shopping bag is empty.</p>
          <Link
            to="/shop"
            className="inline-block px-6 py-2.5 rounded-xl bg-[#F4BE38] hover:bg-[#EDDA5E] text-[#252525] font-bold text-xs"
          >
            RETURN TO SHOP
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
          <Link to="/cart" className="hover:text-[#F4BE38]">Bag</Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#EAE6DC]" />
          <span className="text-[#252525] font-semibold">Secure Checkout</span>
        </nav>

        {/* Title */}
        <div className="border-b border-[#EAE6DC] pb-6 flex items-center justify-between">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#F4BE38] font-bold">
              SAFE & ENCRYPTED DISPATCH
            </span>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#252525] uppercase tracking-tight">
              CHECKOUT
            </h1>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#858585] bg-[#FFFFFF] px-3.5 py-1.5 rounded-xl border border-[#EAE6DC] shadow-sm">
            <Lock className="w-4 h-4 text-[#F4BE38]" />
            <span>256-Bit SSL Encrypted</span>
          </div>
        </div>

        {/* 3-Step Checkout Visual Progress Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 p-2 bg-[#FFFFFF] rounded-2xl border border-[#EAE6DC] shadow-2xs text-xs font-heading font-bold">
          <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#FFF4D6] text-[#252525] border border-[#EDDA5E]">
            <span className="w-5 h-5 rounded-full bg-[#F4BE38] text-[#252525] flex items-center justify-center font-mono text-[10px] font-black shrink-0">
              1
            </span>
            <span className="truncate">1. Delivery Address</span>
          </div>
          <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#FFF4D6] text-[#252525] border border-[#EDDA5E]">
            <span className="w-5 h-5 rounded-full bg-[#F4BE38] text-[#252525] flex items-center justify-center font-mono text-[10px] font-black shrink-0">
              2
            </span>
            <span className="truncate">2. Payment Method</span>
          </div>
          <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#FFFDF5] text-[#858585] border border-[#EAE6DC]">
            <span className="w-5 h-5 rounded-full bg-[#EAE6DC] text-[#858585] flex items-center justify-center font-mono text-[10px] font-bold shrink-0">
              3
            </span>
            <span className="truncate">3. Dispatch & Tracking</span>
          </div>
        </div>

        {/* Form Layout */}
        <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Shipping Address & Payment Selection */}
          <div className="lg:col-span-7 space-y-8">
            {/* 1. Customer Shipping Address */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#FFFFFF] border border-[#EAE6DC] space-y-5 shadow-sm">
              <div className="flex items-center gap-2.5 pb-3 border-b border-[#EAE6DC]">
                <span className="w-6 h-6 rounded-full bg-[#F4BE38] text-[#252525] font-bold text-xs flex items-center justify-center font-mono">
                  1
                </span>
                <h3 className="font-heading font-bold text-base text-[#252525] uppercase tracking-wider">
                  Delivery Address
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="sm:col-span-2 space-y-1">
                  <label className="text-xs font-mono uppercase text-[#858585] font-semibold">Full Name *</label>
                  <input
                    type="text"
                    value={form.fullName}
                    onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                    placeholder="Enter athlete / recipient full name"
                    className="w-full bg-[#FFFDF5] text-[#252525] px-4 py-2.5 rounded-xl border border-[#EAE6DC] text-xs focus:border-[#F4BE38] focus:outline-none"
                  />
                  {errors.fullName && <p className="text-[11px] text-red-500">{errors.fullName}</p>}
                </div>

                {/* Mobile Phone */}
                <div className="space-y-1">
                  <label className="text-xs font-mono uppercase text-[#858585] font-semibold">Mobile Phone (for delivery SMS) *</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-mono text-[#858585]">+91</span>
                    <input
                      type="tel"
                      maxLength={10}
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="9894558995"
                      className="w-full bg-[#FFFDF5] text-[#252525] pl-12 pr-4 py-2.5 rounded-xl border border-[#EAE6DC] text-xs font-mono focus:border-[#F4BE38] focus:outline-none"
                    />
                  </div>
                  {errors.phone && <p className="text-[11px] text-red-500">{errors.phone}</p>}
                </div>

                {/* Email Address */}
                <div className="space-y-1">
                  <label className="text-xs font-mono uppercase text-[#858585] font-semibold">Email Address (for invoice & tracking) *</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="name@domain.com"
                    className="w-full bg-[#FFFDF5] text-[#252525] px-4 py-2.5 rounded-xl border border-[#EAE6DC] text-xs focus:border-[#F4BE38] focus:outline-none"
                  />
                  {errors.email && <p className="text-[11px] text-red-500">{errors.email}</p>}
                </div>

                {/* Address Line 1 */}
                <div className="sm:col-span-2 space-y-1">
                  <label className="text-xs font-mono uppercase text-[#858585] font-semibold">Address Line 1 (Flat / House No. / Building) *</label>
                  <input
                    type="text"
                    value={form.addressLine1}
                    onChange={(e) => setForm({ ...form, addressLine1: e.target.value })}
                    placeholder="Plot / Flat No, Street, Apartment Name"
                    className="w-full bg-[#FFFDF5] text-[#252525] px-4 py-2.5 rounded-xl border border-[#EAE6DC] text-xs focus:border-[#F4BE38] focus:outline-none"
                  />
                  {errors.addressLine1 && <p className="text-[11px] text-red-500">{errors.addressLine1}</p>}
                </div>

                {/* Address Line 2 & Landmark */}
                <div className="space-y-1">
                  <label className="text-xs font-mono uppercase text-[#858585] font-semibold">Area / Locality</label>
                  <input
                    type="text"
                    value={form.addressLine2}
                    onChange={(e) => setForm({ ...form, addressLine2: e.target.value })}
                    placeholder="e.g. W.B. Road, Tharanallur"
                    className="w-full bg-[#FFFDF5] text-[#252525] px-4 py-2.5 rounded-xl border border-[#EAE6DC] text-xs focus:border-[#F4BE38] focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono uppercase text-[#858585] font-semibold">Landmark (Optional)</label>
                  <input
                    type="text"
                    value={form.landmark}
                    onChange={(e) => setForm({ ...form, landmark: e.target.value })}
                    placeholder="e.g. Near Old Passport Office"
                    className="w-full bg-[#FFFDF5] text-[#252525] px-4 py-2.5 rounded-xl border border-[#EAE6DC] text-xs focus:border-[#F4BE38] focus:outline-none"
                  />
                </div>

                {/* City */}
                <div className="space-y-1">
                  <label className="text-xs font-mono uppercase text-[#858585] font-semibold">City *</label>
                  <input
                    type="text"
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    className="w-full bg-[#FFFDF5] text-[#252525] px-4 py-2.5 rounded-xl border border-[#EAE6DC] text-xs focus:border-[#F4BE38] focus:outline-none"
                  />
                  {errors.city && <p className="text-[11px] text-red-500">{errors.city}</p>}
                </div>

                {/* State Dropdown */}
                <div className="space-y-1">
                  <label className="text-xs font-mono uppercase text-[#858585] font-semibold">State *</label>
                  <select
                    value={form.state}
                    onChange={(e) => setForm({ ...form, state: e.target.value })}
                    className="w-full bg-[#FFFDF5] text-[#252525] px-3 py-2.5 rounded-xl border border-[#EAE6DC] text-xs focus:border-[#F4BE38] focus:outline-none"
                  >
                    {INDIAN_STATES.map((st) => (
                      <option key={st} value={st}>
                        {st}
                      </option>
                    ))}
                  </select>
                </div>

                {/* PIN Code */}
                <div className="space-y-1">
                  <label className="text-xs font-mono uppercase text-[#858585] font-semibold">PIN Code *</label>
                  <input
                    type="text"
                    maxLength={6}
                    value={form.pincode}
                    onChange={(e) => setForm({ ...form, pincode: e.target.value })}
                    placeholder="620008"
                    className="w-full bg-[#FFFDF5] text-[#252525] px-4 py-2.5 rounded-xl border border-[#EAE6DC] text-xs font-mono focus:border-[#F4BE38] focus:outline-none"
                  />
                  {errors.pincode && <p className="text-[11px] text-red-500">{errors.pincode}</p>}
                </div>
              </div>
            </div>

            {/* 2. Payment Method Selection */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#FFFFFF] border border-[#EAE6DC] space-y-5 shadow-sm">
              <div className="flex items-center gap-2.5 pb-3 border-b border-[#EAE6DC]">
                <span className="w-6 h-6 rounded-full bg-[#F4BE38] text-[#252525] font-bold text-xs flex items-center justify-center font-mono">
                  2
                </span>
                <h3 className="font-heading font-bold text-base text-[#252525] uppercase tracking-wider">
                  Payment Method
                </h3>
              </div>

              <div className="space-y-3">
                {/* Method 1: Instant UPI */}
                <label
                  className={`p-4 rounded-2xl border flex flex-col gap-3 cursor-pointer transition-all ${
                    paymentMethod === 'upi'
                      ? 'bg-[#FFF4D6] border-[#F4BE38] shadow-sm'
                      : 'bg-[#FFFFFF] border-[#EAE6DC] hover:border-[#858585]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === 'upi'}
                        onChange={() => setPaymentMethod('upi')}
                        className="accent-[#F4BE38] w-4 h-4 cursor-pointer"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <QrCode className="w-4 h-4 text-[#252525]" />
                          <span className="font-heading font-bold text-sm text-[#252525]">
                            UPI (Google Pay, PhonePe, Paytm, BHIM)
                          </span>
                        </div>
                        <p className="text-xs text-[#858585] mt-0.5">
                          Instant zero-fee transfer via any UPI mobile app
                        </p>
                      </div>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#F4BE38]/20 text-[#252525] font-mono text-[10px] font-bold">
                      RECOMMENDED
                    </span>
                  </div>

                  {paymentMethod === 'upi' && (
                    <div className="pt-3 border-t border-[#EAE6DC] space-y-2">
                      <label className="text-xs text-[#858585]">Your UPI ID (Optional for fast intent dispatch):</label>
                      <input
                        type="text"
                        value={upiId}
                        onChange={(e) => setUpiId(e.target.value)}
                        placeholder="yourname@oksbi"
                        className="w-full bg-[#FFFFFF] text-[#252525] px-4 py-2 rounded-xl border border-[#EAE6DC] text-xs font-mono focus:border-[#F4BE38] focus:outline-none"
                      />
                      {errors.upiId && <p className="text-[11px] text-red-500">{errors.upiId}</p>}
                    </div>
                  )}
                </label>

                {/* Method 2: Cards & NetBanking (Razorpay) */}
                <label
                  className={`p-4 rounded-2xl border flex flex-col gap-3 cursor-pointer transition-all ${
                    paymentMethod === 'razorpay'
                      ? 'bg-[#FFF4D6] border-[#F4BE38] shadow-sm'
                      : 'bg-[#FFFFFF] border-[#EAE6DC] hover:border-[#858585]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'razorpay'}
                      onChange={() => setPaymentMethod('razorpay')}
                      className="accent-[#F4BE38] w-4 h-4 cursor-pointer"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <CreditCard className="w-4 h-4 text-[#252525]" />
                        <span className="font-heading font-bold text-sm text-[#252525]">
                          Debit / Credit Card / Net Banking (Razorpay)
                        </span>
                      </div>
                      <p className="text-xs text-[#858585] mt-0.5">
                        Visa, Mastercard, RuPay & All Major Indian Banks
                      </p>
                    </div>
                  </div>
                </label>

                {/* Method 3: Cash on Delivery */}
                <label
                  className={`p-4 rounded-2xl border flex flex-col gap-3 cursor-pointer transition-all ${
                    paymentMethod === 'cod'
                      ? 'bg-[#FFF4D6] border-[#F4BE38] shadow-sm'
                      : 'bg-[#FFFFFF] border-[#EAE6DC] hover:border-[#858585]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === 'cod'}
                        onChange={() => setPaymentMethod('cod')}
                        className="accent-[#F4BE38] w-4 h-4 cursor-pointer"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <Truck className="w-4 h-4 text-[#252525]" />
                          <span className="font-heading font-bold text-sm text-[#252525]">
                            Cash on Delivery (COD)
                          </span>
                        </div>
                        <p className="text-xs text-[#858585] mt-0.5">
                          Pay cash or UPI upon delivery. Includes nominal ₹49 handling fee.
                        </p>
                      </div>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Right Column: Order Review */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-[#FFFFFF] border border-[#EAE6DC] space-y-6 shadow-sm sticky top-24">
              <div className="flex items-center justify-between pb-3 border-b border-[#EAE6DC]">
                <h3 className="font-heading font-black text-base text-[#252525] uppercase tracking-wider">
                  Order Summary ({cart.length})
                </h3>
                <span className="text-[10px] font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Verified Batch Codes
                </span>
              </div>

              {/* Items summary with Thumbnails */}
              <div className="space-y-3 max-h-72 overflow-y-auto divide-y divide-[#EAE6DC]/70 pr-1">
                {cart.map((item) => (
                  <div key={item.cartKey} className="pt-3 first:pt-0 flex items-center gap-3 text-xs">
                    {/* Thumbnail */}
                    <div className="w-12 h-12 rounded-xl bg-[#FFFDF5] border border-[#EAE6DC] p-1 shrink-0 flex items-center justify-center overflow-hidden">
                      <img
                        src={item.product.images[0] || '/images/products/placeholder-supplement.svg'}
                        alt={item.product.name}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/images/products/placeholder-supplement.svg';
                        }}
                      />
                    </div>

                    {/* Details */}
                    <div className="space-y-0.5 flex-1 min-w-0">
                      <span className="text-[9px] font-mono font-bold text-[#F4BE38] uppercase block truncate">
                        {item.product.brand}
                      </span>
                      <p className="font-heading font-bold text-xs text-[#252525] truncate">
                        {item.product.name}
                      </p>
                      <p className="text-[10px] font-mono text-[#858585]">
                        Qty: <strong>{item.quantity}</strong> • {item.selectedWeight.label} ({item.selectedFlavor})
                      </p>
                    </div>

                    {/* Line Total */}
                    <div className="text-right shrink-0">
                      <span className="font-mono font-black text-xs text-[#252525] block">
                        {formatCurrency(item.unitPrice * item.quantity)}
                      </span>
                      {item.unitMrp > item.unitPrice && (
                        <span className="text-[10px] text-[#858585] line-through font-mono block">
                          {formatCurrency(item.unitMrp * item.quantity)}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Promo Code Box inside Checkout */}
              <div className="pt-2 border-t border-[#EAE6DC]">
                {!appliedCoupon ? (
                  <div className="space-y-1.5">
                    <div className="flex gap-2">
                      <div className="relative flex-1">
                        <Tag className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#858585]" />
                        <input
                          type="text"
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value)}
                          placeholder="Promo code (e.g. SAIFIT10)"
                          className="w-full bg-[#FFFDF5] border border-[#EAE6DC] rounded-xl pl-9 pr-3 py-2 text-xs text-[#252525] placeholder-[#858585] focus:outline-none focus:border-[#F4BE38]"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={handleApplyCoupon}
                        className="px-3.5 py-2 rounded-xl bg-[#252525] hover:bg-[#333333] text-xs font-heading font-bold text-[#FFFFFF] transition-all active:scale-95 cursor-pointer"
                      >
                        Apply
                      </button>
                    </div>
                    {couponError && <p className="text-[11px] text-red-500">{couponError}</p>}
                    <button
                      type="button"
                      onClick={() => {
                        setCouponCode('SAIFIT10');
                        applyCoupon('SAIFIT10');
                      }}
                      className="text-[10px] font-mono text-[#858585] hover:text-[#252525] flex items-center gap-1 cursor-pointer"
                    >
                      <span>Have code</span>
                      <span className="px-1 py-0.5 rounded bg-[#FFF4D6] border border-[#EDDA5E] text-[#252525] font-bold">SAIFIT10</span>
                      <span>? Click to get 10% OFF</span>
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs">
                    <div className="flex items-center gap-1.5">
                      <Tag className="w-3.5 h-3.5 text-emerald-700" />
                      <span className="font-mono font-bold text-emerald-900">{appliedCoupon.code}</span>
                      <span className="text-emerald-700 font-semibold">(-{formatCurrency(discount)} OFF)</span>
                    </div>
                    <button
                      type="button"
                      onClick={removeCoupon}
                      className="text-[#858585] hover:text-red-500 text-[11px] font-bold cursor-pointer"
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>

              {/* Calculation Summary */}
              <div className="space-y-2 text-xs pt-3 border-t border-[#EAE6DC]">
                <div className="flex justify-between text-[#858585]">
                  <span>Item Subtotal</span>
                  <span className="font-mono font-semibold text-[#252525]">{formatCurrency(subtotal)}</span>
                </div>

                {discount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-semibold">
                    <span>Discount ({appliedCoupon?.code})</span>
                    <span className="font-mono font-bold">-{formatCurrency(discount)}</span>
                  </div>
                )}

                <div className="flex justify-between text-[#858585]">
                  <span>Delivery Charges</span>
                  <span className="font-mono">
                    {shipping === 0 ? (
                      <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60">
                        FREE
                      </span>
                    ) : (
                      formatCurrency(shipping)
                    )}
                  </span>
                </div>

                {codFee > 0 && (
                  <div className="flex justify-between text-[#858585]">
                    <span>Cash on Delivery Handling</span>
                    <span className="font-mono text-[#252525]">{formatCurrency(codFee)}</span>
                  </div>
                )}

                <div className="pt-3 border-t border-[#EAE6DC] flex justify-between items-baseline">
                  <div>
                    <span className="font-heading font-black text-sm text-[#252525] block">Total Payable</span>
                    <span className="text-[10px] font-mono text-[#858585]">Includes GST & All Taxes</span>
                  </div>
                  <span className="font-heading font-black text-2xl text-[#252525]">
                    {formatCurrency(finalPayable)}
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-4 rounded-2xl bg-[#F4BE38] hover:bg-[#EDDA5E] disabled:opacity-50 text-[#252525] font-heading font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl shadow-md active:scale-95 cursor-pointer"
              >
                <span>{isProcessing ? 'CONFIRMING ORDER...' : 'PLACE ORDER & CONFIRM'}</span>
                <ArrowRight className="w-4 h-4 text-[#252525]" />
              </button>

              <div className="p-3 rounded-2xl bg-[#FFF4D6] border border-[#EDDA5E]/80 flex items-start gap-2.5 text-[11px] text-[#858585]">
                <ShieldCheck className="w-4 h-4 text-[#F4BE38] shrink-0 mt-0.5" />
                <span>
                  You will receive instant SMS & WhatsApp tracking updates upon warehouse dispatch from our Trichy center.
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
