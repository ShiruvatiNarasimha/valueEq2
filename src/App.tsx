import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import TestimonialSection from "./components/TestimonialSection";
import PricingSection from "./components/PricingSection";
import CTASection from "./components/CTASection";
import GlobalDataSection from "./components/GlobalDataSection";
import CompanyOverviewSection from "./components/CompanyOverviewSection";
import FinancialsSection from "./components/FinancialsSection";
import ValuationSection from "./components/ValuationSection";
import PeerGroupSection from "./components/PeerGroupSection";
import FAQSection from "./components/Question";
import CompanyAnalysis from "./components/CompanyAnalysis";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <GlobalDataSection />
      <CompanyOverviewSection />
      <FinancialsSection />
      <ValuationSection />
      <PeerGroupSection />
      <CompanyAnalysis />
      <FeatureSection />
      <TestimonialSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
