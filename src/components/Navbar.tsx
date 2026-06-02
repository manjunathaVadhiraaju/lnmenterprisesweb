/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Page } from '../types';
import { BUSINESS_INFO } from '../data';

interface NavbarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Normal pages in header
  const navItems = [
    { label: 'Home', id: 'home' as Page },
    { label: 'About Us', id: 'about' as Page },
    { label: 'Services', id: 'services' as Page },
    { label: 'Portfolio', id: 'portfolio' as Page },
    { label: 'Contact Us', id: 'contact' as Page },
  ];

  const handleNavClick = (id: Page) => {
    setCurrentPage(id);
    setIsOpen(false);
    // Smooth scroll to top when changing context pages
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          
          {/* Logo Brand Brand */}
          <div className="flex items-center">
            <button 
              id="nav-logo-btn"
              onClick={() => handleNavClick('home')} 
              className="flex items-center gap-3 group focus:outline-none cursor-pointer text-left"
            >
              <div id="nav-logo-icon" className="w-10 h-10 bg-gradient-to-tr from-amber-400 via-orange-500 to-yellow-300 rounded-lg flex items-center justify-center font-extrabold text-xl text-blue-950 shadow-lg shadow-orange-500/30 transition-all duration-300 group-hover:scale-105 group-hover:rotate-3">
                LNM
              </div>
              <div className="text-left">
                <span id="nav-brand-title" className="block text-xl font-black uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-200 to-amber-400 group-hover:from-amber-400 group-hover:to-orange-400 duration-300 transition-all">
                  Enterprises
                </span>
                <span id="nav-brand-subtitle" className="block text-[9px] text-amber-200/90 font-mono tracking-wider uppercase">
                  Tailoring & Tech Solutions
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  id={`nav-link-desktop-${item.id}`}
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-white/20 text-amber-300 font-extrabold border-b-2 border-amber-500 rounded-b-none'
                      : 'text-white/80 hover:text-amber-400 hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            
            {/* Quick Action Button */}
            <button
              id="nav-cta-get-quote"
              onClick={() => handleNavClick('contact')}
              className="ml-4 px-5 py-2.5 bg-amber-500 rounded-full text-blue-950 font-bold hover:bg-white transition-all duration-300 hover:scale-105 shadow-lg shadow-amber-500/25 cursor-pointer flex items-center gap-1.5 text-xs uppercase tracking-wider"
            >
              Get Free Quote
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center md:hidden">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-white hover:text-amber-400 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div id="mobile-menu-drawer" className="md:hidden bg-purple-900/95 backdrop-blur-xl border-b border-white/20 shadow-2xl transition-all duration-300">
          <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  id={`nav-link-mobile-${item.id}`}
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left block px-4 py-3 rounded-lg text-base font-bold transition-all ${
                    isActive
                      ? 'bg-amber-500 text-blue-950 font-extrabold shadow-sm'
                      : 'text-white hover:bg-white/10 hover:text-amber-400'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            
            {/* Split row for legal policies in mobile links */}
            <div className="pt-4 border-t border-white/10 flex flex-col px-4 gap-2">
              <span className="text-[10px] text-amber-300/80 font-mono catalog-subtitle uppercase tracking-wider block mb-1">
                Legal Links (Google Play compliant)
              </span>
              <button
                id="nav-link-mobile-privacy"
                onClick={() => handleNavClick('privacy-policy')}
                className={`text-sm text-left font-semibold ${currentPage === 'privacy-policy' ? 'text-amber-400 font-bold' : 'text-white/70 hover:text-amber-400'}`}
              >
                Privacy Policy
              </button>
              <button
                id="nav-link-mobile-terms"
                onClick={() => handleNavClick('terms-and-conditions')}
                className={`text-sm text-left font-semibold ${currentPage === 'terms-and-conditions' ? 'text-amber-400 font-bold' : 'text-white/70 hover:text-amber-400'}`}
              >
                Terms & Conditions
              </button>
            </div>

            <div className="px-4 pt-4">
              <button
                id="mobile-menu-cta-contact"
                onClick={() => handleNavClick('contact')}
                className="w-full text-center px-4 py-3 rounded-lg text-blue-950 font-bold bg-amber-500 hover:bg-white shadow-lg uppercase tracking-wider text-xs"
              >
                Get Custom Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
