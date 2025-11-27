import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoCarousel from "@/components/LogoCarousel";
import MayaIntro from "@/components/MayaIntro";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Comparison from "@/components/Comparison";
import Waitlist from "@/components/Waitlist";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <LogoCarousel />
        <MayaIntro />
        <HowItWorks />
        <Features />
        <Comparison />
        <FAQ />
        <Waitlist />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
