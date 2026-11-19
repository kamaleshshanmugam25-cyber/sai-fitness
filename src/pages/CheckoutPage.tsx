import React, { useState } from 'react';
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
  ChevronRight
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
  const { cart, subtotal, discount, shipping, total, appliedCoupon, clearCart } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState<CustomerAddress>({
    fullName: '',
    phone: '',
    email: '',
    addressLine1: '',
    addressLine2: '',
    landmark: '',
    city: 'Bengaluru',
    state: 'Karnataka',
    pincode: ''
  });

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('upi');
  const [upiId, setUpiId] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isProcessing, setIsProcessing] = useState(false);

  const codFee = paymentMethod === 'cod' ? BRAND_CONFIG.features.codFee : 0;
  const finalPayable = total + codFee;

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
      <div className="py-20 bg-[#F8F6F0] min-h-[60vh] flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-base text-[#252821]">Your shopping bag is empty.</p>
          <Link
            to="/shop"
            className="inline-block px-6 py-2.5 rounded-xl bg-[#263C32] text-[#FFFFFF] font-bold text-xs"
          >
            RETURN TO SHOP
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
          <Link to="/cart" className="hover:text-[#263C32]">Bag</Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#E8E4DA]" />
          <span className="text-[#263C32] font-semibold">Secure Checkout</span>
        </nav>

        {/* Title */}
        <div className="border-b border-[#E8E4DA] pb-6 flex items-center justify-between">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#263C32] font-bold">
              SAFE & ENCRYPTED DISPATCH
            </span>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#252821] uppercase tracking-tight">
              CHECKOUT
            </h1>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#85877F] bg-[#FFFFFF] px-3.5 py-1.5 rounded-xl border border-[#E8E4DA] shadow-sm">
            <Lock className="w-4 h-4 text-[#263C32]" />
            <span>256-Bit SSL Encrypted</span>
          </div>
        </div>

        {/* Form Layout */}
        <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Shipping Address & Payment Selection */}
          <div className="lg:col-span-7 space-y-8">
            {/* 1. Customer Shipping Address */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#FFFFFF] border border-[#E8E4DA] space-y-5 shadow-sm">
              <div className="flex items-center gap-2.5 pb-3 border-b border-[#E8E4DA]">
                <span className="w-6 h-6 rounded-full bg-[#263C32] text-[#FFFFFF] font-bold text-xs flex items-center justify-center font-mono">
                  1
                </span>
                <h3 className="font-heading font-bold text-base text-[#252821] uppercase tracking-wider">
                  Delivery Address
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="sm:col-span-2 space-y-1">
                  <label className="text-xs font-mono uppercase text-[#85877F] font-semibold">Full Name *</label>
                  <input
                    type="text"
                    value={form.fullName}
                    onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                    placeholder="Enter athlete / recipient full name"
                    className="w-full bg-[#F8F6F0] text-[#252821] px-4 py-2.5 rounded-xl border border-[#E8E4DA] text-xs focus:border-[#263C32] focus:outline-none"
                  />
                  {errors.fullName && <p className="text-[11px] text-red-500">{errors.fullName}</p>}
                </div>

                {/* Mobile Phone */}
                <div className="space-y-1">
                  <label className="text-xs font-mono uppercase text-[#85877F] font-semibold">Mobile Phone (for delivery SMS) *</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-mono text-[#85877F]">+91</span>
                    <input
                      type="tel"
                      maxLength={10}
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="9876543210"
                      className="w-full bg-[#F8F6F0] text-[#252821] pl-12 pr-4 py-2.5 rounded-xl border border-[#E8E4DA] text-xs font-mono focus:border-[#263C32] focus:outline-none"
                    />
                  </div>
                  {errors.phone && <p className="text-[11px] text-red-500">{errors.phone}</p>}
                </div>

                {/* Email Address */}
                <div className="space-y-1">
                  <label className="text-xs font-mono uppercase text-[#85877F] font-semibold">Email Address (for invoice & tracking) *</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="name@domain.com"
                    className="w-full bg-[#F8F6F0] text-[#252821] px-4 py-2.5 rounded-xl border border-[#E8E4DA] text-xs focus:border-[#263C32] focus:outline-none"
                  />
                  {errors.email && <p className="text-[11px] text-red-500">{errors.email}</p>}
                </div>

                {/* Address Line 1 */}
                <div className="sm:col-span-2 space-y-1">
                  <label className="text-xs font-mono uppercase text-[#85877F] font-semibold">Address Line 1 (Flat / House No. / Building) *</label>
                  <input
                    type="text"
                    value={form.addressLine1}
                    onChange={(e) => setForm({ ...form, addressLine1: e.target.value })}
                    placeholder="Plot / Flat No, Street, Apartment Name"
                    className="w-full bg-[#F8F6F0] text-[#252821] px-4 py-2.5 rounded-xl border border-[#E8E4DA] text-xs focus:border-[#263C32] focus:outline-none"
                  />
                  {errors.addressLine1 && <p className="text-[11px] text-red-500">{errors.addressLine1}</p>}
                </div>

                {/* Address Line 2 & Landmark */}
                <div className="space-y-1">
                  <label className="text-xs font-mono uppercase text-[#85877F] font-semibold">Area / Locality</label>
                  <input
                    type="text"
                    value={form.addressLine2}
                    onChange={(e) => setForm({ ...form, addressLine2: e.target.value })}
                    placeholder="e.g. Koramangala 4th Block"
                    className="w-full bg-[#F8F6F0] text-[#252821] px-4 py-2.5 rounded-xl border border-[#E8E4DA] text-xs focus:border-[#263C32] focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono uppercase text-[#85877F] font-semibold">Landmark (Optional)</label>
                  <input
                    type="text"
                    value={form.landmark}
                    onChange={(e) => setForm({ ...form, landmark: e.target.value })}
                    placeholder="e.g. Near Sony Signal"
                    className="w-full bg-[#F8F6F0] text-[#252821] px-4 py-2.5 rounded-xl border border-[#E8E4DA] text-xs focus:border-[#263C32] focus:outline-none"
                  />
                </div>

                {/* City */}
                <div className="space-y-1">
                  <label className="text-xs font-mono uppercase text-[#85877F] font-semibold">City *</label>
                  <input
                    type="text"
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    className="w-full bg-[#F8F6F0] text-[#252821] px-4 py-2.5 rounded-xl border border-[#E8E4DA] text-xs focus:border-[#263C32] focus:outline-none"
                  />
                  {errors.city && <p className="text-[11px] text-red-500">{errors.city}</p>}
                </div>

                {/* State Dropdown */}
                <div className="space-y-1">
                  <label className="text-xs font-mono uppercase text-[#85877F] font-semibold">State *</label>
                  <select
                    value={form.state}
                    onChange={(e) => setForm({ ...form, state: e.target.value })}
                    className="w-full bg-[#F8F6F0] text-[#252821] px-3 py-2.5 rounded-xl border border-[#E8E4DA] text-xs focus:border-[#263C32] focus:outline-none"
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
                  <label className="text-xs font-mono uppercase text-[#85877F] font-semibold">PIN Code *</label>
                  <input
                    type="text"
                    maxLength={6}
                    value={form.pincode}
                    onChange={(e) => setForm({ ...form, pincode: e.target.value })}
                    placeholder="560034"
                    className="w-full bg-[#F8F6F0] text-[#252821] px-4 py-2.5 rounded-xl border border-[#E8E4DA] text-xs font-mono focus:border-[#263C32] focus:outline-none"
                  />
                  {errors.pincode && <p className="text-[11px] text-red-500">{errors.pincode}</p>}
                </div>
              </div>
            </div>

            {/* 2. Payment Method Selection */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#FFFFFF] border border-[#E8E4DA] space-y-5 shadow-sm">
              <div className="flex items-center gap-2.5 pb-3 border-b border-[#E8E4DA]">
                <span className="w-6 h-6 rounded-full bg-[#263C32] text-[#FFFFFF] font-bold text-xs flex items-center justify-center font-mono">
                  2
                </span>
                <h3 className="font-heading font-bold text-base text-[#252821] uppercase tracking-wider">
                  Payment Method
                </h3>
              </div>

              <div className="space-y-3">
                {/* Method 1: Instant UPI */}
                <label
                  className={`p-4 rounded-2xl border flex flex-col gap-3 cursor-pointer transition-all ${
                    paymentMethod === 'upi'
                      ? 'bg-[#F8F6F0] border-[#263C32] shadow-sm'
                      : 'bg-[#FFFFFF] border-[#E8E4DA] hover:border-[#85877F]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === 'upi'}
                        onChange={() => setPaymentMethod('upi')}
                        className="accent-[#263C32] w-4 h-4 cursor-pointer"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <QrCode className="w-4 h-4 text-[#263C32]" />
                          <span className="font-heading font-bold text-sm text-[#252821]">
                            UPI (Google Pay, PhonePe, Paytm, BHIM)
                          </span>
                        </div>
                        <p className="text-xs text-[#85877F] mt-0.5">
                          Instant zero-fee transfer via any UPI mobile app
                        </p>
                      </div>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#D5AD65]/15 text-[#263C32] font-mono text-[10px] font-bold">
                      RECOMMENDED
                    </span>
                  </div>

                  {paymentMethod === 'upi' && (
                    <div className="pt-3 border-t border-[#E8E4DA] space-y-2">
                      <label className="text-xs text-[#85877F]">Your UPI ID (Optional for fast intent dispatch):</label>
                      <input
                        type="text"
                        value={upiId}
                        onChange={(e) => setUpiId(e.target.value)}
                        placeholder="yourname@oksbi"
                        className="w-full bg-[#FFFFFF] text-[#252821] px-4 py-2 rounded-xl border border-[#E8E4DA] text-xs font-mono focus:border-[#263C32] focus:outline-none"
                      />
                      {errors.upiId && <p className="text-[11px] text-red-500">{errors.upiId}</p>}
                    </div>
                  )}
                </label>

                {/* Method 2: Cards & NetBanking (Razorpay) */}
                <label
                  className={`p-4 rounded-2xl border flex flex-col gap-3 cursor-pointer transition-all ${
                    paymentMethod === 'razorpay'
                      ? 'bg-[#F8F6F0] border-[#263C32] shadow-sm'
                      : 'bg-[#FFFFFF] border-[#E8E4DA] hover:border-[#85877F]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === 'razorpay'}
                      onChange={() => setPaymentMethod('razorpay')}
                      className="accent-[#263C32] w-4 h-4 cursor-pointer"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <CreditCard className="w-4 h-4 text-[#263C32]" />
                        <span className="font-heading font-bold text-sm text-[#252821]">
                          Debit / Credit Card / Net Banking (Razorpay)
                        </span>
                      </div>
                      <p className="text-xs text-[#85877F] mt-0.5">
                        Visa, Mastercard, RuPay & All Major Indian Banks
                      </p>
                    </div>
                  </div>
                </label>

                {/* Method 3: Cash on Delivery */}
                <label
                  className={`p-4 rounded-2xl border flex flex-col gap-3 cursor-pointer transition-all ${
                    paymentMethod === 'cod'
                      ? 'bg-[#F8F6F0] border-[#263C32] shadow-sm'
                      : 'bg-[#FFFFFF] border-[#E8E4DA] hover:border-[#85877F]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === 'cod'}
                        onChange={() => setPaymentMethod('cod')}
                        className="accent-[#263C32] w-4 h-4 cursor-pointer"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <Truck className="w-4 h-4 text-[#263C32]" />
                          <span className="font-heading font-bold text-sm text-[#252821]">
                            Cash on Delivery (COD)
                          </span>
                        </div>
                        <p className="text-xs text-[#85877F] mt-0.5">
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
            <div className="p-6 rounded-3xl bg-[#FFFFFF] border border-[#E8E4DA] space-y-6 shadow-sm sticky top-24">
              <h3 className="font-heading font-bold text-lg text-[#252821] uppercase tracking-wider pb-3 border-b border-[#E8E4DA]">
                Items in This Order ({cart.length})
              </h3>

              {/* Items summary */}
              <div className="space-y-3 max-h-60 overflow-y-auto divide-y divide-[#E8E4DA] pr-1">
                {cart.map((item) => (
                  <div key={item.cartKey} className="pt-3 first:pt-0 flex items-center justify-between text-xs">
                    <div className="space-y-0.5 max-w-[220px]">
                      <p className="font-title font-bold text-[#252821] truncate">{item.product.name}</p>
                      <p className="text-[11px] text-[#85877F]">
                        {item.quantity} × {item.selectedWeight.label} ({item.selectedFlavor})
                      </p>
                    </div>
                    <span className="font-mono font-bold text-[#263C32]">
                      {formatCurrency(item.unitPrice * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Calculation Summary */}
              <div className="space-y-2 text-xs pt-4 border-t border-[#E8E4DA]">
                <div className="flex justify-between text-[#85877F]">
                  <span>Subtotal</span>
                  <span className="font-mono text-[#252821]">{formatCurrency(subtotal)}</span>
                </div>

                {discount > 0 && (
                  <div className="flex justify-between text-[#263C32]">
                    <span>Discount ({appliedCoupon?.code})</span>
                    <span className="font-mono font-bold">-{formatCurrency(discount)}</span>
                  </div>
                )}

                <div className="flex justify-between text-[#85877F]">
                  <span>Delivery Charges</span>
                  <span className="font-mono">
                    {shipping === 0 ? <strong className="text-[#263C32]">FREE</strong> : formatCurrency(shipping)}
                  </span>
                </div>

                {codFee > 0 && (
                  <div className="flex justify-between text-[#85877F]">
                    <span>Cash on Delivery Handling</span>
                    <span className="font-mono text-[#252821]">{formatCurrency(codFee)}</span>
                  </div>
                )}

                <div className="pt-3 border-t border-[#E8E4DA] flex justify-between items-baseline">
                  <span className="font-heading font-bold text-sm text-[#252821]">Total Payable</span>
                  <span className="font-heading font-extrabold text-2xl text-[#263C32]">
                    {formatCurrency(finalPayable)}
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-4 rounded-xl bg-[#263C32] hover:bg-[#1C2D25] disabled:opacity-50 text-[#FFFFFF] font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <span>{isProcessing ? 'CONFIRMING ORDER...' : 'PLACE ORDER & CONFIRM'}</span>
                <ArrowRight className="w-4 h-4 text-[#D5AD65]" />
              </button>

              <div className="p-3 rounded-xl bg-[#F8F6F0] border border-[#E8E4DA] flex items-start gap-2.5 text-[11px] text-[#85877F]">
                <ShieldCheck className="w-4 h-4 text-[#263C32] shrink-0 mt-0.5" />
                <span>
                  You will receive instant SMS & WhatsApp tracking updates upon warehouse dispatch.
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
