import logo from "@/assets/courtside-logo-horizontal.svg";
const Footer = () => {
  return <footer className="border-t border-white/10 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <img alt="Courtside AI" className="h-8" src="/lovable-uploads/aef6f963-0b6d-481b-bc94-2a5efd80b3c2.png" />
            </div>
            <p className="text-sm text-gray-400">
              Intelligent automation for modern venues and facilities.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#features" className="hover:text-white transition-smooth">Features</a></li>
              <li><a href="#" className="hover:text-white transition-smooth">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-smooth">Case Studies</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-smooth">About</a></li>
              <li><a href="#" className="hover:text-white transition-smooth">Blog</a></li>
              <li><a href="#contact" className="hover:text-white transition-smooth">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-smooth">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-smooth">Terms</a></li>
              <li><a href="#" className="hover:text-white transition-smooth">Security</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Courtside AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;