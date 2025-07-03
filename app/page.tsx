import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
// import ToolsSection from "@/components/ToolsSection";
// import TestimonialsSection from "@/components/TestimonialsSection";
// import PricingSection from "@/components/PricingSection";
// import FAQSection from "@/components/FAQSection";
// import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />                    {/* ✅ add this */}
      <HeroSection />
      <FeaturesSection />
      {/* <ToolsSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <Footer /> */}
    </main>
  );
}
