import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import logo from "@/assets/courtside-logo-icon.png";

const Header = () => {
  const [widgetReady, setWidgetReady] = useState(false);
  const [widgetButtonRef, setWidgetButtonRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const checkWidget = () => {
      // Check global API
      if ((window as any).RetellWebCallWidget) {
        setWidgetReady(true);
        return true;
      }
      
      // Check DOM for widget button
      const selectors = [
        '[data-retell-widget-button]',
        'button[data-widget="callback"]',
        '.retell-callback-button',
        'button[class*="retell"]'
      ];
      
      for (const selector of selectors) {
        const btn = document.querySelector(selector);
        if (btn) {
          setWidgetButtonRef(btn as HTMLElement);
          setWidgetReady(true);
          return true;
        }
      }
      return false;
    };

    // Try immediate check
    if (checkWidget()) return;

    // Set up observer for delayed loading
    const observer = new MutationObserver(() => {
      if (checkWidget()) {
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Cleanup
    return () => observer.disconnect();
  }, []);

  const handleCallClick = () => {
    // Method 1: Try openWidget API
    if ((window as any).RetellWebCallWidget?.openWidget) {
      (window as any).RetellWebCallWidget.openWidget();
      return;
    }
    
    // Method 2: Try open API
    if ((window as any).RetellWebCallWidget?.open) {
      (window as any).RetellWebCallWidget.open();
      return;
    }
    
    // Method 3: Use stored reference
    if (widgetButtonRef) {
      widgetButtonRef.click();
      return;
    }
    
    // Method 4: Try all selectors
    const selectors = [
      '[data-retell-widget-button]',
      'button[data-widget="callback"]',
      '.retell-callback-button',
      'button[class*="retell"]',
      '[id*="retell"]'
    ];
    
    for (const selector of selectors) {
      const btn = document.querySelector(selector);
      if (btn) {
        (btn as HTMLElement).click();
        return;
      }
    }
    
    // All methods failed - show user feedback
    toast({
      title: "Widget Loading",
      description: "The call widget is still loading. Please wait a moment and try again.",
      variant: "destructive"
    });
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
