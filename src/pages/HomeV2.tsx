import { useParams } from "react-router-dom";
import Footer from "@/components/Footer";
import { themeStyle, HomeTheme } from "@/components/home/theme";
import { VenuesSection } from "@/components/home/Venues";
import { Nav, Hero, ProofStrip, Automation, OperatorStrip, Problem, Platform, Maya, OpenApi, Compare, HowItWorks, Sports, Faqs, EarlyAccess } from "@/components/home/Sections";

// Preview of the rebuilt home page. /new → dark, /new/blue → light blue.
const HomeV2 = () => {
  const { theme: t } = useParams();
  const theme: HomeTheme = t === "blue" ? "blue" : "dark";
  return (
    <div style={themeStyle(theme)} className="min-h-screen scroll-smooth bg-[var(--bg)] text-[var(--fg)]">
      <Nav theme={theme} />
      <main>
        <Hero theme={theme} />
        <ProofStrip />
        <OperatorStrip />
        <Problem />
        <Automation />
        <Maya />
        <Platform />
        <OpenApi />
        <Sports />
        <Compare />
        <VenuesSection />
        <HowItWorks />
        <Faqs />
        <EarlyAccess />
      </main>
      <Footer />
    </div>
  );
};

export default HomeV2;
