import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Footer from "@/components/Footer";
import { themeStyle, HomeTheme } from "@/components/home/theme";
import { MissedCallCalculator, MobileCta, useReveal } from "@/components/home/Extras";
import { Nav, Hero, ProofStrip, Automation, OperatorStrip, Pitch, Platform, Maya, Compare, HowItWorks, Sports, Faqs, EarlyAccess } from "@/components/home/Sections";

// Preview of the rebuilt home page. /new → dark, /new/blue → light blue.
const HomeV2 = () => {
  const { theme: t } = useParams();
  const theme: HomeTheme = t === "blue" ? "blue" : "dark";
  const { hash } = useLocation();
  useReveal();

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
        document.querySelectorAll("main > section").forEach((sec) => sec.classList.add("reveal-in"));
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
        <Pitch />
        <OperatorStrip />
        <Automation />
        <Maya />
        <MissedCallCalculator />
        <Platform />
        <Sports />
        <Compare />
        <HowItWorks />
        <Faqs />
        <EarlyAccess />
      </main>
      <Footer />
      <MobileCta />
    </div>
  );
};

export default HomeV2;
