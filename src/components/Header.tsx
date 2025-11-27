import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/#how-it-works", label: "How It Works" },
    { href: "/#features", label: "Features" },
    { href: "/#comparison", label: "Comparison" },
    { href: "/#faqs", label: "FAQs" },
    { href: "/about", label: "About" },
  ];

  return <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 h-16 items-center">
          {/* Logo - Left */}
          <div className="flex items-center">
            <a href="/">
              <img alt="Courtside AI" className="h-10" src="/lovable-uploads/63e1d143-df02-4c3f-b665-a8bf33a4007e.png" />
            </a>
          </div>
          
          {/* Navigation - Center */}
          <nav className="hidden md:flex items-center justify-center gap-8">
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

          {/* CTA Buttons - Right */}
          <div className="flex items-center justify-end gap-4">
            {/* Desktop CTA buttons */}
            <div className="hidden md:flex items-center gap-4">
              <Button variant="outline" size="sm" asChild>
                <a href="#maya">Try Maya</a>
              </Button>
              <Button variant="hero" size="sm" asChild>
                <a href="#waitlist">Get Started</a>
              </Button>
            </div>

            {/* Mobile hamburger menu */}
            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px]">
                  <nav className="flex flex-col gap-6 mt-8">
                    {navLinks.map((link) => (
                      <SheetClose asChild key={link.href}>
                        <a
                          href={link.href}
                          className="text-lg font-medium text-foreground hover:text-primary transition-smooth"
                          onClick={() => setIsOpen(false)}
                        >
                          {link.label}
                        </a>
                      </SheetClose>
                    ))}
                    
                    <div className="flex flex-col gap-3 mt-4 pt-6 border-t border-border">
                      <SheetClose asChild>
                        <Button variant="outline" size="default" asChild>
                          <a href="#maya" onClick={() => setIsOpen(false)}>Try Maya</a>
                        </Button>
                      </SheetClose>
                      <SheetClose asChild>
                        <Button variant="hero" size="default" asChild>
                          <a href="#waitlist" onClick={() => setIsOpen(false)}>Get Started</a>
                        </Button>
                      </SheetClose>
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>;
};
export default Header;