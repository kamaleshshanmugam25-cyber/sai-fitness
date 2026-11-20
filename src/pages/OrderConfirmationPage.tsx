import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import type { OrderRecord } from '../types';
import { BRAND_CONFIG } from '../config/brandConfig';
import { formatCurrency, formatDate } from '../utils/formatters';
import { Printer, MessageCircle, ArrowRight } from 'lucide-react';

export const OrderConfirmationPage: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const [order, setOrder] = useState<OrderRecord | null>(null);

  useEffect(() => {
    if (!orderId) return;
    try {
      const stored = localStorage.getItem(`order_${orderId}`);
      if (stored) {
        setOrder(JSON.parse(stored));
      } else {
        const allOrders = JSON.parse(localStorage.getItem('sai_fitness_orders') || '[]');
        const found = allOrders.find((o: OrderRecord) => o.orderId === orderId);
        if (found) setOrder(found);
      }
    } catch (e) {
      console.error(e);
    }
  }, [orderId]);

  const handlePrint = () => {
    window.print();
  };

  const handleWhatsAppStatus = () => {
    if (!order) return;
    const phone = BRAND_CONFIG.whatsappNumber;
    const text = `Hello Sai Fitness, I placed Order #${order.orderId} for ₹${order.pricing.total.toLocaleString('en-IN')}. Please confirm dispatch tracking details.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  if (!order) {
    return (
      <div className="py-20 bg-[#FFFDF5] min-h-[60vh] flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-base text-[#252525]">Order record loading or not found.</p>
          <Link
            to="/shop"
            className="px-6 py-2.5 rounded-xl bg-[#F4BE38] hover:bg-[#EDDA5E] text-[#252525] font-bold text-xs"
          >
            RETURN TO SHOP
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 bg-[#FFFDF5] min-h-screen text-left">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Success Header Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#FFFFFF] border border-[#EDDA5E] text-center space-y-4 shadow-xl">
          <div className="w-16 h-16 rounded-full bg-[#252525] p-0.5 border-2 border-[#F4BE38] mx-auto shadow-md overflow-hidden">
            <img
              src="/images/logo.png"
              alt="Sai Fitness Official Logo"
              className="w-full h-full object-contain rounded-full"
            />
          </div>

          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-widest text-[#F4BE38] font-bold">
              ORDER CONFIRMED
            </span>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#252525] uppercase tracking-tight">
              THANK YOU FOR YOUR ORDER
            </h1>
            <p className="text-xs sm:text-sm text-[#858585] max-w-lg mx-auto">
              Your order confirmation and tracking credentials have been recorded. Our warehouse team is preparing your tamper-evident shipment.
            </p>
          </div>

          <div className="pt-2 inline-flex flex-wrap items-center justify-center gap-3">
            <span className="px-3.5 py-1.5 rounded-xl bg-[#FFFDF5] border border-[#EAE6DC] text-xs font-mono text-[#252525]">
              Order ID: <strong className="text-[#252525]">{order.orderId}</strong>
            </span>
            <span className="px-3.5 py-1.5 rounded-xl bg-[#FFFDF5] border border-[#EAE6DC] text-xs font-mono text-[#252525]">
              Date: <strong>{formatDate(order.orderDate)}</strong>
            </span>
            <span className="px-3.5 py-1.5 rounded-xl bg-[#FFFDF5] border border-[#EAE6DC] text-xs font-mono text-emerald-700">
              Payment: <strong>{order.paymentMethod.toUpperCase()} ({order.paymentStatus.toUpperCase()})</strong>
            </span>
          </div>
        </div>

        {/* Action Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2.5 rounded-xl bg-[#FFFFFF] hover:bg-[#FFF4D6] text-xs font-bold text-[#252525] border border-[#EAE6DC] flex items-center gap-2 transition-colors shadow-sm"
            >
              <Printer className="w-4 h-4 text-[#252525]" />
              <span>Print Tax Invoice</span>
            </button>

            <button
              onClick={handleWhatsAppStatus}
              className="px-4 py-2.5 rounded-xl bg-[#FFFFFF] hover:bg-[#FFF4D6] text-xs font-bold text-[#25D366] border border-[#25D366] flex items-center gap-2 transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Track on WhatsApp</span>
            </button>
          </div>

          <Link
            to="/shop"
            className="text-xs text-[#252525] hover:underline font-bold flex items-center gap-1"
          >
            <span>Continue Shopping</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#252525]" />
          </Link>
        </div>

        {/* Detailed Receipt Card */}
        <div className="p-8 rounded-3xl bg-[#FFFFFF] border border-[#EAE6DC] space-y-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 border-b border-[#EAE6DC]">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#F4BE38] font-bold mb-2">
                Delivery Address:
              </h4>
              <p className="font-heading font-bold text-sm text-[#252525]">{order.customer.fullName}</p>
              <p className="text-xs text-[#858585] mt-1 leading-relaxed">
                {order.customer.addressLine1}
                {order.customer.addressLine2 && `, ${order.customer.addressLine2}`}
                <br />
                {order.customer.city}, {order.customer.state} - {order.customer.pincode}
              </p>
              <p className="text-xs text-[#858585] mt-1 font-mono">
                Phone: +91 {order.customer.phone} | Email: {order.customer.email}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#F4BE38] font-bold mb-2">
                Shipping Logistics:
              </h4>
              <div className="space-y-1 text-xs text-[#858585]">
                <p className="text-[#252525] font-semibold">SAI FITNESS Express Logistics</p>
                <p>Estimated Delivery: {order.estimatedDelivery}</p>
                <p className="text-[11px]">Corrugated multi-layer carton with security tamper seal</p>
              </div>
            </div>
          </div>

          {/* Ordered Line Items */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#F4BE38] font-bold">
              Ordered Supplements ({order.items.length})
            </h4>

            <div className="divide-y divide-[#EAE6DC]">
              {order.items.map((item, idx) => (
                <div key={idx} className="py-3 flex items-center justify-between text-xs">
                  <div className="space-y-0.5">
                    <p className="font-title font-bold text-[#252525]">{item.product.name}</p>
                    <p className="text-[#858585] text-[11px]">
                      {item.selectedWeight.label} • {item.selectedFlavor} • Qty: {item.quantity}
                    </p>
                  </div>
                  <span className="font-mono font-bold text-[#252525]">
                    {formatCurrency(item.unitPrice * item.quantity)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Total Breakdown */}
          <div className="pt-4 border-t border-[#EAE6DC] space-y-2 text-xs">
            <div className="flex justify-between text-[#858585]">
              <span>Subtotal</span>
              <span className="font-mono text-[#252525]">{formatCurrency(order.pricing.subtotal)}</span>
            </div>

            {order.pricing.discount > 0 && (
              <div className="flex justify-between text-[#252525] font-semibold">
                <span>Discount ({order.pricing.couponApplied})</span>
                <span className="font-mono font-bold">-{formatCurrency(order.pricing.discount)}</span>
              </div>
            )}

            <div className="flex justify-between text-[#858585]">
              <span>Delivery Charges</span>
              <span className="font-mono">
                {order.pricing.shipping === 0 ? <strong className="text-[#252525]">FREE</strong> : formatCurrency(order.pricing.shipping)}
              </span>
            </div>

            {order.pricing.codFee > 0 && (
              <div className="flex justify-between text-[#858585]">
                <span>Cash on Delivery Handling</span>
                <span className="font-mono text-[#252525]">{formatCurrency(order.pricing.codFee)}</span>
              </div>
            )}

            <div className="pt-3 border-t border-[#EAE6DC] flex justify-between items-baseline">
              <span className="font-heading font-bold text-sm text-[#252525]">Total Paid / Due</span>
              <span className="font-heading font-extrabold text-2xl text-[#252525]">
                {formatCurrency(order.pricing.total)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
