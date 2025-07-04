import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
// import ToolsSection from "@/components/ToolsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/FooterSection";

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
