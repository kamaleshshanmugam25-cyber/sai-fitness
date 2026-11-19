import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ToastProvider } from './context/ToastContext';
import { WishlistProvider } from './context/WishlistContext';
import { CartProvider } from './context/CartContext';

import { AnnouncementBar } from './components/common/AnnouncementBar';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { CartDrawer } from './components/cart/CartDrawer';
import { WhatsAppFloating } from './components/common/WhatsAppFloating';

import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { CategoryPage } from './pages/CategoryPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { SearchResultsPage } from './pages/SearchResultsPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { OrderConfirmationPage } from './pages/OrderConfirmationPage';
import { WishlistPage } from './pages/WishlistPage';
import { BrandsPage } from './pages/BrandsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { ShippingReturnsPage } from './pages/ShippingReturnsPage';

// Scroll to top helper
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <WishlistProvider>
          <CartProvider>
            <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] flex flex-col font-sans selection:bg-[#0284C7] selection:text-white">
              <ScrollToTop />
              
              {/* Top Announcement Bar */}
              <AnnouncementBar />

              {/* Sticky Luxury Navbar */}
              <Navbar />

              {/* Slide-over Cart Drawer */}
              <CartDrawer />

              {/* Floating WhatsApp Quick Action Button */}
              <WhatsAppFloating />

              {/* Main Routing Outlet */}
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/shop" element={<ShopPage />} />
                  <Route path="/category/:slug" element={<CategoryPage />} />
                  <Route path="/product/:slug" element={<ProductDetailPage />} />
                  <Route path="/search" element={<SearchResultsPage />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/checkout" element={<CheckoutPage />} />
                  <Route path="/order-confirmation/:orderId" element={<OrderConfirmationPage />} />
                  <Route path="/wishlist" element={<WishlistPage />} />
                  <Route path="/brands" element={<BrandsPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                  <Route path="/terms" element={<TermsPage />} />
                  <Route path="/shipping-returns" element={<ShippingReturnsPage />} />
                  {/* Fallback to Home */}
                  <Route path="*" element={<HomePage />} />
                </Routes>
              </main>

              {/* Luxury Footer */}
              <Footer />
            </div>
          </CartProvider>
        </WishlistProvider>
      </ToastProvider>
    </BrowserRouter>
  );
}

export default App;
