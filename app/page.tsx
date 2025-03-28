'use client';

import Header from './components/Header';
import Hero from './components/Hero';
import ShopSection from './components/ShopSection';
import AboutSection from './components/AboutSection';
import ReviewSection from './components/ReviewSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { useCartStore } from './store/cartStore';

export default function Home() {
  const isOpen = useCartStore((state) => state.isOpen);

  return (
    <>
      {/* Header should stay visible always */}
      <Header />

      {/* Wrap the rest of the page with blur effect when cart is open */}
      <div className={`transition-all duration-300 ${isOpen ? 'blur-sm opacity-30 pointer-events-none' : ''}`}>
        <Hero />
        <ShopSection />
        <AboutSection />
        <ReviewSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}
