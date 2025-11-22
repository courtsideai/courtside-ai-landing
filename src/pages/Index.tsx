import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import Waitlist from "@/components/Waitlist";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Benefits />
        <Waitlist />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
