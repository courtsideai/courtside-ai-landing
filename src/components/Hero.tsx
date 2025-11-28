import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Phone } from "lucide-react";
import { useCounterAnimation } from "@/hooks/use-counter-animation";
import heroImage from "@/assets/hero-bg.jpg";
import courtsideIcon from "@/assets/courtside-icon.ico";
const Hero = () => {
  const revenueCount = useCounterAnimation(15, 2000);
  const savingsCount = useCounterAnimation(3050, 2000);
  const timeCount = useCounterAnimation(100, 2000);
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="AI-powered venue management" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badges */}
          <div className="flex flex-col items-center gap-3 animate-fade-in">
            {/* Brand Pill - Subtle */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/30 border border-muted-foreground/10 text-muted-foreground">
              <Sparkles className="h-3 w-3 opacity-70" />
              <span className="text-xs font-medium">AI-Powered Automation</span>
            </div>
            
            {/* Main Pill - Primary */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent">
              <span className="text-base">⚡</span>
              <span className="text-sm font-medium">AI-Powered Automation by Courtside AI</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-in" style={{
          animationDelay: "0.2s",
          animationFillMode: "both"
        }}>
            <span className="text-foreground">Your Facility On</span>
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent text-5xl sm:text-6xl md:text-7xl drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">
              Autopilot
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{
          animationDelay: "0.4s",
          animationFillMode: "both"
        }}>
            Courtside AI streamlines facility operations with cutting-edge automation. 
            Save time, reduce costs, and deliver exceptional experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in" style={{
          animationDelay: "0.6s",
          animationFillMode: "both"
        }}>
            <Button variant="hero" size="lg" className="group w-full sm:w-auto" asChild>
              <a href="#waitlist">Join Waitlist<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
              <a href="#maya" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Try Maya
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 max-w-3xl mx-auto animate-fade-in" style={{
          animationDelay: "0.8s",
          animationFillMode: "both"
        }}>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-bold text-foreground">+{revenueCount}%</div>
              <div className="text-sm text-muted-foreground">After Hours Revenue</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-bold text-foreground">${savingsCount}+</div>
              <div className="text-sm text-muted-foreground">Saved Monthly </div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-bold text-foreground">{timeCount}%</div>
              <div className="text-sm text-muted-foreground">Time Saved</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-bold text-foreground">24/7</div>
              <div className="text-sm text-muted-foreground">Automation</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>;
};
export default Hero;