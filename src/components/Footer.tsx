"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "./SocialIcons";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-card-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-gradient">Solvex</span>
              <span className="text-2xl font-semibold text-foreground">Technology</span>
            </Link>
            <p className="text-foreground/70 text-sm mb-6">
              Your Partner in Digital Growth. We transform ideas into reality with modern digital solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/solvextechnology" target="_blank" rel="noopener noreferrer" className="text-foreground/50 hover:text-primary transition-colors"><Facebook size={20} /></a>
              <a href="https://twitter.com/solvextech" target="_blank" rel="noopener noreferrer" className="text-foreground/50 hover:text-primary transition-colors"><Twitter size={20} /></a>
              <a href="https://instagram.com/solvextechnology" target="_blank" rel="noopener noreferrer" className="text-foreground/50 hover:text-primary transition-colors"><Instagram size={20} /></a>
              <a href="https://linkedin.com/company/solvextechnology" target="_blank" rel="noopener noreferrer" className="text-foreground/50 hover:text-primary transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-4 text-lg">Services</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/services/web-development" className="text-foreground/70 hover:text-primary transition-colors">Web Development</Link></li>
              <li><Link href="/services/mobile-app" className="text-foreground/70 hover:text-primary transition-colors">Mobile App Development</Link></li>
              <li><Link href="/solutions" className="text-foreground/70 hover:text-primary transition-colors">Business Solutions</Link></li>
              <li><Link href="/branding" className="text-foreground/70 hover:text-primary transition-colors">Branding & Rebranding</Link></li>
              <li><Link href="/services/custom-software" className="text-foreground/70 hover:text-primary transition-colors">Custom Software</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-4 text-lg">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="text-foreground/70 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/portfolio" className="text-foreground/70 hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link href="/blog" className="text-foreground/70 hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-foreground/70 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-4 text-lg">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary shrink-0" size={18} />
                <span className="text-foreground/70">Kaushalya Bhawan, Sonbarsa, Sitamarhi, Bihar, 843330</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary shrink-0" size={18} />
                <a href="mailto:support@solvextechnology.in" className="text-foreground/70 hover:text-primary transition-colors">support@solvextechnology.in</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={18} />
                <a href="tel:+919311910636" className="text-foreground/70 hover:text-primary transition-colors">+91 9311910636</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-card-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/50 text-sm">
            &copy; {new Date().getFullYear()} Solvex Technology. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-foreground/50 justify-center">
            <Link href="/legal/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/legal/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="/legal/refund" className="hover:text-primary transition-colors">Refund Policy</Link>
            <Link href="/legal/disclaimer" className="hover:text-primary transition-colors">Disclaimer</Link>
            <Link href="/legal/cookies" className="hover:text-primary transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
