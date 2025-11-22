import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import logo from "@/assets/courtside-logo-icon.png";

const Header = () => {
  const handleCallClick = () => {
    if (typeof window !== 'undefined' && (window as any).RetellWebCallWidget) {
      (window as any).RetellWebCallWidget.openWidget();
    } else {
      const retellButton = document.querySelector('[data-retell-widget-button]');
      if (retellButton) {
        (retellButton as HTMLElement).click();
      } else {
        console.warn('Retell widget not loaded yet');
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <img src={logo} alt="Courtside AI" className="h-8" />
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
              Features
            </a>
            <a href="#benefits" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
              Benefits
            </a>
            <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleCallClick}
            >
              <Phone className="h-4 w-4" />
              Call Us
            </Button>
            <Button variant="hero" size="sm" asChild>
              <a href="#waitlist">Get Started</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
