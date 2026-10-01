import { Instagram, Linkedin } from "lucide-react";
import xIcon from "@/assets/x-icon.ico";

const Footer = () => {
  return <footer className="border-t border-white/10 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <img alt="Courtside AI" className="h-12" src="/lovable-uploads/aef6f963-0b6d-481b-bc94-2a5efd80b3c2.png" />
            </div>
            <p className="text-sm text-gray-400">
              Intelligent automation for modern venues and facilities.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/#platform" className="hover:text-white transition-smooth">Features</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/about" className="hover:text-white transition-smooth">About</a></li>
              <li><a href="/#contact" className="hover:text-white transition-smooth">Contact</a></li>
              <li><a href="/support" className="hover:text-white transition-smooth">Support</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/privacy" className="hover:text-white transition-smooth">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white transition-smooth">Terms of Service</a></li>
              <li><a href="/delete-account" className="hover:text-white transition-smooth">Delete Account</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 pb-0">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-300">
              © 2026 Courtside AI. Proudly Canadian
            </p>
            
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/courtsideai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-smooth"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href="https://linkedin.com/company/courtsideai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-smooth"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a 
                href="https://twitter.com/courtsideai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-smooth"
                aria-label="X (Twitter)"
              >
                <img src={xIcon} alt="X" className="h-4 w-4 invert opacity-60 hover:opacity-100 transition-smooth" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;