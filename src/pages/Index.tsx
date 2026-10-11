import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import AboutSection from "@/components/AboutSection";
import WholesaleSection from "@/components/WholesaleSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

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
    </>
  );
};

export default Index;
