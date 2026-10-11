import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import AboutSection from "@/components/AboutSection";
import WholesaleSection from "@/components/WholesaleSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import FloatingCartButton from "@/components/FloatingCartButton";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProductsSection />
        <AboutSection />
        <WholesaleSection />
        <ContactSection />
      </main>
      <Footer />
      <CartDrawer />
      <FloatingCartButton />
    </>
  );
};

export default Index;
