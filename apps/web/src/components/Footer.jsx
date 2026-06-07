import React from 'react';
import { Link } from 'react-router-dom';
import { Scissors, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Scissors className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold" style={{letterSpacing: '-0.02em'}}>StitchGo</span>
            </div>
            <p className="text-sm text-secondary-foreground/80 leading-relaxed max-w-[30ch]">
              Connecting customers with skilled tailors through seamless courier service. Perfect alterations, delivered to your door.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <span className="text-sm font-semibold tracking-wide uppercase mb-4 block">Quick Links</span>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-all duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-all duration-200">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/find-tailors" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-all duration-200">
                  Find Tailors
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-all duration-200">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <span className="text-sm font-semibold tracking-wide uppercase mb-4 block">Company</span>
            <ul className="space-y-3">
              <li>
                <Link to="/contact" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-all duration-200">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/my-orders" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-all duration-200">
                  My Orders
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-all duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-all duration-200">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <span className="text-sm font-semibold tracking-wide uppercase mb-4 block">Contact</span>
            <ul className="space-y-3">
              <li className="text-sm text-secondary-foreground/80">
                support@stitchgo.com
              </li>
              <li className="text-sm text-secondary-foreground/80">
                +1 (555) 123-4567
              </li>
              <li className="text-sm text-secondary-foreground/80">
                Mon-Fri: 9am - 6pm EST
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-all duration-200" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-all duration-200" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-all duration-200" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-all duration-200" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-12 pt-8">
          <p className="text-sm text-center text-secondary-foreground/80">
            © {currentYear} StitchGo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;