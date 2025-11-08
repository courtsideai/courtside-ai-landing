import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-primary">
              <span className="text-lg font-bold text-primary-foreground">C</span>
            </div>
            <span className="text-xl font-bold text-foreground">Courtside AI</span>
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
            <Button variant="ghost" size="sm" className="hidden md:inline-flex">
              Sign In
            </Button>
            <Button variant="hero" size="sm">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
