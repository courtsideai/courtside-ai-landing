import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="AI-powered venue management" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">AI-Powered Automation</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="text-foreground text-7xl text-center">Courtside AI                         </span>
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent text-6xl">
              Your Facility On Autopilot
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Courtside AI streamlines facility operations with cutting-edge automation. 
            Save time, reduce costs, and deliver exceptional experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button variant="hero" size="lg" className="group" asChild>
              <a href="#waitlist">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="outline" size="lg">
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 max-w-3xl mx-auto">
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-bold text-foreground">100%</div>
              <div className="text-sm text-muted-foreground">Time Saved</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-bold text-foreground">24/7</div>
              <div className="text-sm text-muted-foreground">Automation</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-bold text-foreground">+15%</div>
              <div className="text-sm text-muted-foreground">After Hours Revenue</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-bold text-foreground">$4850</div>
              <div className="text-sm text-muted-foreground">Costs Saved</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>;
};
export default Hero;