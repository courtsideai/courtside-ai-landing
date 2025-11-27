import { Button } from "@/components/ui/button";
import logo from "@/assets/courtside-logo-icon.png";
const Header = () => {
  return <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="/">
              <img alt="Courtside AI" className="h-10" src="/lovable-uploads/63e1d143-df02-4c3f-b665-a8bf33a4007e.png" />
            </a>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="/#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
              How It Works
            </a>
            <a href="/#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
              Features
            </a>
            <a href="/#comparison" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
              Comparison
            </a>
            <a href="/#faqs" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
              FAQs
            </a>
            <a href="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
              About
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" asChild>
              <a href="#maya">Try Maya</a>
            </Button>
            <Button variant="hero" size="sm" asChild>
              <a href="#waitlist">Get Started</a>
            </Button>
          </div>
        </div>
      </div>
    </header>;
};
export default Header;