import { Button } from "@/components/ui/button";
import logo from "@/assets/courtside-logo-square-light.svg";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center relative">
          {/* Left section - Logo */}
          <div className="flex items-center flex-1">
            <img src={logo} alt="Courtside AI" className="h-16" />
          </div>
          
          {/* Center section - Navigation */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
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

          {/* Right section - Buttons */}
          <div className="flex items-center gap-4 flex-1 justify-end">
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
