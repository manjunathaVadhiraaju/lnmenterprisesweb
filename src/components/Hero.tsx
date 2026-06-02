/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle, Flame, Sparkles, Smartphone, Globe, Scissors, Download, X } from 'lucide-react';
import { Page } from '../types';
import { BUSINESS_INFO } from '../data';

interface HeroProps {
  setCurrentPage: (page: Page) => void;
}

export default function Hero({ setCurrentPage }: HeroProps) {
  const [showDownloadModal, setShowDownloadModal] = useState(false);

  const quickStats = [
    { label: 'Tailored Fits', desc: '100% Perfect Cut' },
    { label: 'Embroidery Cycles', desc: 'Computerized Motifs' },
    { label: 'Software Builds', desc: 'Verified Compliance' }
  ];

  return (
    <div className="relative overflow-hidden bg-transparent border-b border-white/10 select-none">
      
      {/* Absolute Dynamic Vector Background Background Grid & Gradient */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-400/20 blur-[120px] mix-blend-screen animate-pulse"></div>
      <div className="absolute bottom-10 right-1/4 w-[600px] h-[600px] rounded-full bg-purple-400/20 blur-[130px] mix-blend-screen animate-pulse-slow"></div>
      <div className="absolute top-1/2 right-10 w-[300px] h-[300px] rounded-full bg-pink-400/20 blur-[100px] animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Block: Bold Typography Headline + Call to actions (7 columns) */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 shadow-lg mx-auto lg:mx-0">
              <Sparkles className="w-4 h-4 text-amber-400 animate-spin-slow" />
              <span className="text-xs font-bold text-white tracking-wide font-display">
                Tailoring Innovation with Technology
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display text-white tracking-tight leading-[1.1] sm:leading-none">
                LNM Enterprises <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                  Custom Fashion & Digital Software
                </span>
              </h1>
              
              <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
                Providing masterfully stitched women&apos;s tailoring, customized computerized embroidery, e-commerce platforms, native Android/iOS app development, and beautiful corporate portfolio websites in Ballari, Karnataka.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                id="hero-btn-get-quote"
                onClick={() => {
                  setCurrentPage('contact');
                  window.scrollTo({ top: 900, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto text-center px-8 py-4 rounded-xl text-sm font-bold text-blue-950 bg-amber-500 hover:bg-white transition-all duration-300 shadow-xl hover:scale-105 cursor-pointer uppercase tracking-wider"
              >
                Get Free Quote
              </button>
              
              <button
                id="hero-btn-contact"
                onClick={() => {
                  setCurrentPage('contact');
                  window.scrollTo({ top: 900, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto text-center px-8 py-4 rounded-xl text-sm font-bold text-white bg-white/10 border border-white/30 backdrop-blur-sm hover:bg-white/20 transition shadow-sm cursor-pointer uppercase tracking-wider"
              >
                Contact Us
              </button>

              <button
                id="hero-btn-download-app"
                onClick={() => setShowDownloadModal(true)}
                className="w-full sm:w-auto text-center px-6 py-4 rounded-xl text-sm font-bold text-white bg-white/5 hover:bg-white/15 transition flex items-center justify-center gap-2 cursor-pointer border border-white/15 uppercase tracking-wider"
              >
                <Download className="w-4 h-4 text-amber-400" />
                Download App
              </button>
            </div>

            {/* Quick trust metrics row */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10 max-w-lg mx-auto lg:mx-0">
              {quickStats.map((stat, i) => (
                <div key={i} className="text-left space-y-1">
                  <span className="block text-xs font-bold text-white">{stat.label}</span>
                  <span className="block text-[10px] text-amber-200/90 font-mono font-medium">{stat.desc}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Block: Elegant Duality Card representation (5 columns) */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-2xl"></div>
            
            {/* Glassmorphic bento showcasing tailoring & tech */}
            <div className="relative bg-white/15 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/20 max-w-md mx-auto space-y-6 shadow-2xl text-white">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xl font-bold text-white font-display">Services Hub</span>
                <span className="text-xs text-amber-300 font-bold font-mono">Ballari, KA</span>
              </div>

              {/* Row 1: Fashion */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4 hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-pink-500/20 border border-pink-400/20 text-white flex items-center justify-center shadow-md">
                  <Scissors className="w-5 h-5 text-pink-300" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-white font-display">Fashion & Embroidery</h3>
                  <p className="text-xs text-blue-100 leading-normal">
                    Custom blouses, traditional Anarkalis, saree baby kuchu tassel designs, and robotic digital embroidery patterns.
                  </p>
                </div>
              </div>

              {/* Row 2: Tech */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4 hover:bg-white/10 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-400/20 text-white flex items-center justify-center shadow-md">
                  <Smartphone className="w-5 h-5 text-blue-300" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-white font-display">Technology & Software</h3>
                  <p className="text-xs text-blue-100 leading-normal">
                    Android & iOS catalog applications, ecommerce portals, enterprise portals, and Play Store release support.
                  </p>
                </div>
              </div>

              {/* Secure statement */}
              <div className="text-center text-[10px] text-amber-200/90 font-mono font-medium pt-2 border-t border-white/10 flex items-center justify-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-green-400" />
                <span>Google Play Console Organization verified layout</span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Download Alert Modal dialog */}
      {showDownloadModal && (
        <div id="download-app-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
          <div className="relative w-full max-w-sm bg-white rounded-2xl shadow-2xl p-6 text-center space-y-4 border border-gray-100 animate-fade-in">
            <button
              id="download-modal-close-btn"
              onClick={() => setShowDownloadModal(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mx-auto">
              <Smartphone className="w-6 h-6 animate-bounce" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-slate-900 font-display">LNM Mobile App</h3>
              <p className="text-xs text-gray-500">
                Our Android catalog application is undergoing official organization audit mapping on Google Play Console.
              </p>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl text-left text-[11px] text-gray-600 leading-normal">
              <strong>Beta Release Setup:</strong> Once verified, you can download catalogs, upload measurement notes, and track computer embroidery tasks live. Please submit your inquiry through the Contact form to join the Android Beta testing list immediately!
            </div>
            <button
              id="download-modal-cta-contact"
              onClick={() => {
                setShowDownloadModal(false);
                setCurrentPage('contact');
              }}
              className="w-full py-2.5 rounded-lg text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 cursor-pointer"
            >
              Join Mobile Beta List
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
