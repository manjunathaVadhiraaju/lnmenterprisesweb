/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Facebook, Instagram, Youtube, Linkedin, Star, MapPin, Mail, Phone, ChevronRight } from 'lucide-react';
import { Page } from '../types';
import { BUSINESS_INFO } from '../data';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
  currentPage: Page;
}

export default function Footer({ setCurrentPage, currentPage }: FooterProps) {
  
  const handlePageTransition = (id: Page) => {
    setCurrentPage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const mainLinks = [
    { label: 'Home Feed', id: 'home' as Page },
    { label: 'Corporate Overview', id: 'about' as Page },
    { label: 'Services Catalogue', id: 'services' as Page },
    { label: 'Design Portfolio', id: 'portfolio' as Page },
    { label: 'Contact Helpdesk', id: 'contact' as Page },
  ];

  const legalLinks = [
    { label: 'Privacy Policy Regulation', id: 'privacy-policy' as Page },
    { label: 'Terms & Conditions Framework', id: 'terms-and-conditions' as Page }
  ];

  return (
    <footer className="bg-blue-950/80 backdrop-blur-md text-white/80 pt-16 pb-8 border-t border-white/20 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Column 1: Brand & Desc (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <button 
              onClick={() => handlePageTransition('home')}
              className="flex items-center gap-3 text-left focus:outline-none cursor-pointer"
            >
              <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center font-bold text-lg text-blue-900 shadow-lg shadow-amber-500/20">
                LNM
              </div>
              <div>
                <span className="block text-lg font-bold text-white font-display tracking-tight leading-none group-hover:text-amber-450 transition-colors">
                  LNM Enterprises
                </span>
                <span className="block text-[10px] text-amber-200/90 font-mono tracking-wider mt-1">
                  Established Ballari, Karnataka
                </span>
              </div>
            </button>

            <p className="text-xs text-blue-105/95 leading-relaxed">
              We specialize in blending the absolute best of physical tailoring design, computerized thread embroidery accuracy, and publication-safe Android & Web platform development catalogs. Built to comply with official organizational verification mandates.
            </p>

            {/* Social Icons row */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                id="footer-social-facebook"
                href={BUSINESS_INFO.socials.facebook} 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-blue-600 hover:scale-105 hover:text-white flex items-center justify-center transition-all text-white/80"
                aria-label="Facebook Profile"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                id="footer-social-instagram"
                href={BUSINESS_INFO.socials.instagram} 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-pink-600 hover:scale-105 hover:text-white flex items-center justify-center transition-all text-white/80"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                id="footer-social-youtube"
                href={BUSINESS_INFO.socials.youtube} 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-red-650 hover:scale-105 hover:text-white flex items-center justify-center transition-all text-white/80"
                aria-label="YouTube Channel"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a 
                id="footer-social-linkedin"
                href={BUSINESS_INFO.socials.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-blue-700 hover:scale-105 hover:text-white flex items-center justify-center transition-all text-white/80"
                aria-label="LinkedIn Company"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2.5 cols) */}
          <div className="lg:col-span-2.5 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-white/90 font-bold font-mono">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {mainLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    id={`footer-nav-link-${link.id}`}
                    onClick={() => handlePageTransition(link.id)}
                    className="group text-xs text-white/70 hover:text-amber-400 flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <ChevronRight className="w-3 h-3 text-amber-450 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal compliance links (2.5 cols) */}
          <div className="lg:col-span-2.5 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-white/90 font-bold font-mono">
              Compliance Rules
            </h4>
            <ul className="space-y-2">
              {legalLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    id={`footer-nav-link-${link.id}`}
                    onClick={() => handlePageTransition(link.id)}
                    className="group text-xs text-white/70 hover:text-amber-400 flex items-center gap-1 cursor-pointer transition-colors text-left"
                  >
                    <ChevronRight className="w-3 h-3 text-amber-450 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
            <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-[10px] text-white/70 leading-normal">
              Our Privacy Policy and Terms reflect secure <strong>HTTPS standard servers</strong> suitable for mobile app safety review.
            </div>
          </div>

          {/* Column 4: Address Contact details (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-white/90 font-bold font-mono">
              Office Contacts
            </h4>
            
            <div className="space-y-3 text-xs text-white/70">
              
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <span>{BUSINESS_INFO.fullAddress}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-amber-450 transition-colors">
                  {BUSINESS_INFO.email}
                </a>
              </div>

              <div className="pt-2 border-t border-white/5 space-y-1.5">
                <div>
                  <span className="block text-[9px] uppercase font-mono tracking-wider text-amber-400 font-bold">Tailoring & WhatsApp</span>
                  <div className="flex items-center gap-2.5 mt-0.5">
                    <Phone className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                    <a href={`tel:${BUSINESS_INFO.tailoringPhone}`} className="hover:text-amber-450 transition-colors font-mono">
                      {BUSINESS_INFO.tailoringPhone}
                    </a>
                  </div>
                </div>

                <div>
                  <span className="block text-[9px] uppercase font-mono tracking-wider text-amber-400 font-bold">Software Support (Calls)</span>
                  <div className="flex items-center gap-2.5 mt-0.5">
                    <Phone className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                    <a href={`tel:${BUSINESS_INFO.softwarePhone}`} className="hover:text-amber-450 transition-colors font-mono">
                      {BUSINESS_INFO.softwarePhone}
                    </a>
                  </div>
                </div>
              </div>

            </div>

            <div className="border-t border-white/10 pt-3">
              <span className="block text-[9px] text-white/50 font-mono tracking-wide uppercase">Business Hours</span>
              <span className="block text-xs font-semibold text-white/90">Mon - Sat: 9:00 AM - 7:00 PM</span>
            </div>
          </div>

        </div>

        {/* Lower row: copyright disclaimer */}
        <div className="pt-8 mt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/50">
          
          <div className="text-center sm:text-left space-y-1">
            <p className="font-sans">
              © 2026 LNM Enterprises. All Rights Reserved. Custom Web Platforms & Embroidery Studios.
            </p>
            <p className="text-[10px] text-amber-200/50 font-mono">
              Designed & maintained under Ballari Municipal jurisdiction, Karnataka, India.
            </p>
          </div>

          {/* Play Console Compliancy Stamp Badge */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/15">
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500 animate-spin-slow" />
            <span className="text-[9px] font-mono tracking-wider font-semibold text-amber-200/85 uppercase">
              Play Console Audit verified
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
}
