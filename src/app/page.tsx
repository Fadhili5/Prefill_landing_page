import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import CompetitiveSection from "@/components/sections/CompetitiveSection";
import DemoVideoSection from "@/components/sections/DemoVideoSection";
import PricingSection from "@/components/sections/PricingSection";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import { Header } from "@/components/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";

export default function Home() {
  return (
    <div className="bg-[#F9FAFB] text-slate-900">
      <ScrollProgress />
      <Header />
      <main className="space-y-24 pb-24">
        <HeroSection />
        <ProblemSection />
        <HowItWorksSection />
        <FeaturesSection />
        <CompetitiveSection />
        <DemoVideoSection />
        <PricingSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}

