import Navbar from "@/components/Landing Page/Navbar";
import HeroSection from "@/components/Landing Page/HeroSection";
import FeaturesSection from "@/components/Landing Page/FeaturesSection";
// import ToolsSection from "@/components/ToolsSection";
import TestimonialsSection from "@/components/Landing Page/TestimonialsSection";
import PricingSection from "@/components/Landing Page/PricingSection";
import FAQSection from "@/components/Landing Page/FAQSection";
import Footer from "@/components/Landing Page/FooterSection";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar /> 
      <HeroSection />
      <FeaturesSection />
      {/* <ToolsSection /> */}
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
