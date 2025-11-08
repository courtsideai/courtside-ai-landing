const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-primary">
                <span className="text-lg font-bold text-primary-foreground">C</span>
              </div>
              <span className="text-xl font-bold text-foreground">Courtside AI</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Intelligent automation for modern venues and facilities.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-foreground transition-smooth">Features</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Pricing</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Case Studies</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-smooth">About</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Blog</a></li>
              <li><a href="#contact" className="hover:text-foreground transition-smooth">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-smooth">Privacy</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Terms</a></li>
              <li><a href="#" className="hover:text-foreground transition-smooth">Security</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/40 pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Courtside AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
