import Header from './components/Header';
import Hero from './components/Hero';
// import ShopSection from './components/ShopSection';
import AboutSection from './components/AboutSection';
import ReviewSection from './components/ReviewSection';
// import StoresSection from './components/StoresSection';
import ContactSection from './components/ContactSection';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      {/* <ShopSection /> */}
      <AboutSection />
      <ReviewSection />
      {/* <StoresSection /> */}
      <Newsletter />
      <ContactSection />
      <Footer />
    </main>
  );
}
