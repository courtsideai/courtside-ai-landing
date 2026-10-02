import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import Footer from "@/components/Footer";
import { Nav } from "@/components/home/Sections";
import { btnPrimary, btnSecondary, gradText, themeStyle } from "@/components/home/theme";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "Page not found | Courtside AI";
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div style={themeStyle("dark")} className="flex min-h-screen flex-col bg-[var(--bg)] text-[var(--fg)]">
      <Nav theme="dark" prefix="/" />
      <main className="relative flex flex-1 items-center overflow-hidden px-4 pb-24 pt-36 sm:px-6">
        <div className="pointer-events-none absolute inset-0 opacity-70" style={{ backgroundImage: "radial-gradient(50% 50% at 50% 30%, var(--glow), transparent)" }} />
        <div className="container relative mx-auto max-w-2xl space-y-6 text-center">
          <p className={`text-7xl font-bold tracking-tight sm:text-8xl ${gradText}`}>404</p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">This court isn't on the schedule.</h1>
          <p className="text-lg text-[var(--muted)]">The page you're looking for doesn't exist or has moved. Here's where you probably meant to go.</p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <a href="/" className={`group ${btnPrimary}`}>Go to homepage <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
            <a href="/venues" className={btnSecondary}><MapPin className="mr-2 h-4 w-4" />Book a court</a>
            <a href="/#early-access" className={btnSecondary}>Get started</a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
