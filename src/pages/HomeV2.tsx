import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Footer from "@/components/Footer";
import { themeStyle, HomeTheme } from "@/components/home/theme";
import { VenuesSection } from "@/components/home/Venues";
import { Nav, Hero, ProofStrip, Automation, OperatorStrip, Problem, Platform, Maya, OpenApi, Compare, HowItWorks, Sports, Faqs, EarlyAccess } from "@/components/home/Sections";

// Preview of the rebuilt home page. /new → dark, /new/blue → light blue.
const HomeV2 = () => {
  const { theme: t } = useParams();
  const theme: HomeTheme = t === "blue" ? "blue" : "dark";
  const { hash } = useLocation();

  // Links from other pages (e.g. /#early-access) land here before the sections exist,
  // so the browser can't jump to the anchor itself. Scroll once the page has rendered.
  useEffect(() => {
    if (!hash) return;
    const id = decodeURIComponent(hash.slice(1));
    let tries = 0;
    const timer = setInterval(() => {
      const el = document.getElementById(id);
      if (el || ++tries > 20) {
        clearInterval(timer);
        el?.scrollIntoView({ block: "start" });
      }
    }, 50);
    return () => clearInterval(timer);
  }, [hash]);
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
