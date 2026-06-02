/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 * LICENSE: Apache-2.5
 */

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';
import Footer from './components/Footer';

import { Page } from './types';
import { WHY_CHOOSE_US, TESTIMONIALS, FAQS, BUSINESS_INFO } from './data';
import { Award, Users, Cpu, DollarSign, Smile, ShieldAlert, ArrowRight, MessageSquare, ChevronDown, Check, Star } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [preSelectedService, setPreSelectedService] = useState<string>('');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Parse location hashes on load and mount to handle direct URL navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#about') {
        setCurrentPage('about');
      } else if (hash === '#services') {
        setCurrentPage('services');
      } else if (hash === '#portfolio') {
        setCurrentPage('portfolio');
      } else if (hash === '#contact') {
        setCurrentPage('contact');
      } else if (hash === '#privacy-policy') {
        setCurrentPage('privacy-policy');
      } else if (hash === '#terms-and-conditions' || hash === '#terms-conditions') {
        setCurrentPage('terms-and-conditions');
      } else {
        setCurrentPage('home');
      }
    };

    // Trigger initial detection
    handleHashChange();

    // Listen for manual hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update hash dynamically when page state changes
  const handlePageChange = (page: Page) => {
    setCurrentPage(page);
    // Sync browser URL hash safely without reloading
    let targetHash = '';
    if (page === 'about') targetHash = '#about';
    else if (page === 'services') targetHash = '#services';
    else if (page === 'portfolio') targetHash = '#portfolio';
    else if (page === 'contact') targetHash = '#contact';
    else if (page === 'privacy-policy') targetHash = '#privacy-policy';
    else if (page === 'terms-and-conditions') targetHash = '#terms-and-conditions';
    
    if (window.location.hash !== targetHash) {
      window.history.pushState(null, '', targetHash || ' ');
    }
  };

  // Helper mapping icon names for "Why Choose Us"
  const getWhyIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award': return <Award className="w-5 h-5 text-white" />;
      case 'Users': return <Users className="w-5 h-5 text-white" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-white" />;
      case 'DollarSign': return <DollarSign className="w-5 h-5 text-white" />;
      case 'Smile': return <Smile className="w-5 h-5 text-white" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5 text-white" />;
      default: return <Award className="w-5 h-5 text-white" />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-700 via-purple-600 to-pink-500 selection:bg-amber-500 selection:text-blue-900 font-sans text-white relative">
      
      {/* Sticky Top Navbar */}
      <Navbar currentPage={currentPage} setCurrentPage={handlePageChange} />

      {/* Main Dynamically Rendered Core Container */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <div className="animate-fade-in space-y-0">
            
            {/* 1. Hero Section */}
            <Hero setCurrentPage={handlePageChange} />

            {/* 2. Visual Statistics section */}
            <Stats />

            {/* 3. Why Choose Us Section */}
            <section className="py-20 bg-black/15 border-b border-white/10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <span className="inline-flex items-center px-4 py-1.5 bg-white/10 rounded-full text-[10px] font-extrabold tracking-widest uppercase border border-white/20 text-white mb-4">
                    Our Standards
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
                    Why Customers Choose LNM Enterprises
                  </h2>
                  <p className="text-blue-100/90 mt-2 text-sm max-w-2xl mx-auto leading-relaxed">
                    Whether crafting highly customized festive garments or publishing verified apps on the Play Store, our structural standards are uncompromising.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {WHY_CHOOSE_US.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="group p-8 rounded-3xl bg-white/10 border border-white/20 hover:border-white/40 hover:bg-white/15 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 text-white shadow-lg backdrop-blur-lg"
                    >
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${item.color} flex items-center justify-center shadow-md mb-6 group-hover:scale-110 transition-transform`}>
                        {getWhyIcon(item.iconName)}
                      </div>
                      <h3 className="text-base font-extrabold text-white font-display mb-3 group-hover:text-amber-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-blue-105 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            </section>

            {/* 4. Services Preview Section (Compact Bento Grid) */}
            <section className="py-20 bg-black/5 border-b border-white/10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12">
                  <div className="text-center sm:text-left max-w-2xl">
                    <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-[10px] font-extrabold tracking-widest uppercase border border-white/20 text-white mb-2">Bespoke Catalogue</span>
                    <h2 className="text-3xl font-extrabold text-white font-display tracking-tight mt-1">Our Core Services Studio</h2>
                  </div>
                  <button
                    id="home-btn-all-services"
                    onClick={() => handlePageChange('services')}
                    className="inline-flex items-center gap-1.5 px-6 py-3.5 rounded-full text-xs font-bold text-blue-950 bg-amber-500 hover:bg-white shadow-lg shadow-amber-500/20 hover:scale-105 transition-all duration-300 cursor-pointer uppercase tracking-wider"
                  >
                    Browse All Services
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Grid representation */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  
                  {/* Card 1: Womens Tailoring */}
                  <div className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/25 p-8 space-y-6 flex flex-col justify-between shadow-lg hover:bg-white/15 hover:scale-[1.01] hover:shadow-2xl transition duration-300 text-white">
                    <div className="space-y-4">
                      <span className="text-[10px] font-mono font-bold text-amber-300 tracking-wider bg-white/10 px-2.5 py-1 rounded-full uppercase">Tailoring studio</span>
                      <h3 className="text-lg font-bold text-white font-display">Custom Womens Tailoring</h3>
                      <p className="text-xs text-blue-105 leading-normal">Bespoke dress stitching, umbrella flares, and princess cut necklines shaped by pro masters.</p>
                      <ul className="text-xs text-blue-100/90 space-y-2">
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-pink-400 rounded-full"></span> Blouse Stitching</li>
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-pink-400 rounded-full"></span> Dress & Frock Stitching</li>
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-pink-400 rounded-full"></span> Baby Kuchu design additions</li>
                      </ul>
                    </div>
                    <button 
                      id="home-card-btn-tailor"
                      onClick={() => handlePageChange('services')} 
                      className="text-xs font-extrabold text-amber-400 hover:text-amber-300 text-left cursor-pointer flex items-center gap-1 mt-4 transition-colors"
                    >
                      Inquire Garments <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Card 2: Computer Embroidery */}
                  <div className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/25 p-8 space-y-6 flex flex-col justify-between shadow-lg hover:bg-white/15 hover:scale-[1.01] hover:shadow-2xl transition duration-300 text-white">
                    <div className="space-y-4">
                      <span className="text-[10px] font-mono font-bold text-amber-300 tracking-wider bg-white/10 px-2.5 py-1 rounded-full uppercase">Digital Needles</span>
                      <h3 className="text-lg font-bold text-white font-display">Computerized Embroidery</h3>
                      <p className="text-xs text-blue-105 leading-normal">Intricate flower motifs, logo embroidery, and heavy bridal zardozi designed using digital blueprints.</p>
                      <ul className="text-xs text-blue-100/90 space-y-2">
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span> Computerized Embroidery Patterning</li>
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span> Custom Bridal Maggam designs</li>
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span> Corporate Branding & Logos</li>
                      </ul>
                    </div>
                    <button 
                      id="home-card-btn-emb"
                      onClick={() => handlePageChange('services')} 
                      className="text-xs font-extrabold text-amber-400 hover:text-amber-300 text-left cursor-pointer flex items-center gap-1 mt-4 transition-colors"
                    >
                      Inquire Embroidery <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Card 3: Mobile Apps & Tech */}
                  <div className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/25 p-8 space-y-6 flex flex-col justify-between shadow-lg hover:bg-white/15 hover:scale-[1.01] hover:shadow-2xl transition duration-300 text-white">
                    <div className="space-y-4">
                      <span className="text-[10px] font-mono font-bold text-amber-300 tracking-wider bg-white/10 px-2.5 py-1 rounded-full uppercase">Software Division</span>
                      <h3 className="text-lg font-bold text-white font-display">Android & Mobile Solutions</h3>
                      <p className="text-xs text-blue-105 leading-normal">Native mobile applications and e-commerce stores compliant with verified console requirements.</p>
                      <ul className="text-xs text-blue-100/90 space-y-2">
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span> Android & iOS Apps</li>
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span> E-Commerce & Web Systems</li>
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span> Play Store Compliance services</li>
                      </ul>
                    </div>
                    <button 
                      id="home-card-btn-tech"
                      onClick={() => handlePageChange('services')} 
                      className="text-xs font-extrabold text-amber-400 hover:text-amber-300 text-left cursor-pointer flex items-center gap-1 mt-4 transition-colors"
                    >
                      Inquire Technologies <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>

              </div>
            </section>

            {/* 5. Client Testimonials Section */}
            <section className="py-20 bg-black/15 border-b border-white/10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-[10px] font-extrabold tracking-widest uppercase border border-white/20 text-white mb-2">Our Reputation</span>
                  <h2 className="text-3xl font-extrabold text-white font-display tracking-tight">Review from Karnataka Clients</h2>
                  <p className="text-xs sm:text-sm text-blue-105 mt-2">Hear directly from local patrons who appreciate our rigorous attention to quality.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {TESTIMONIALS.map((t) => (
                    <div 
                      key={t.id} 
                      className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 sm:p-8 rounded-3xl flex flex-col justify-between hover:bg-white/15 transition-all shadow-lg text-white"
                    >
                      <div className="space-y-4">
                        {/* Rating Row */}
                        <div className="flex items-center text-amber-400 gap-0.5">
                          {[...Array(t.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-450" />
                          ))}
                        </div>
                        <p className="text-xs sm:text-sm text-blue-100 italic leading-relaxed">
                          &ldquo;{t.content}&rdquo;
                        </p>
                      </div>

                      {/* Author Client Meta info */}
                      <div className="flex items-center gap-3.5 pt-6 border-t border-white/10 mt-6">
                        <img
                          src={t.avatarUrl}
                          alt={t.name}
                          referrerPolicy="no-referrer"
                          className="w-10 h-10 rounded-full object-cover border border-white/20"
                        />
                        <div>
                          <strong className="block text-xs font-extrabold text-white font-display">{t.name}</strong>
                          <span className="block text-[10px] text-amber-200/90 font-sans font-medium">{t.role}</span>
                        </div>
                      </div>

                    </div>
                  ))}
                </div>

              </div>
            </section>

            {/* 6. Frequently Asked Questions Section (FAQ) */}
            <section className="py-20 bg-black/5 border-b border-white/10">
              <div className="max-w-4xl mx-auto px-4 sm:px-6">
                
                <div className="text-center mb-12">
                  <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-[10px] font-extrabold tracking-widest uppercase border border-white/20 text-white mb-2">Clear Answers</span>
                  <h2 className="text-3xl font-extrabold text-white font-display">Frequently Asked Questions</h2>
                </div>

                <div className="space-y-4">
                  {FAQS.map((faq, idx) => {
                    const isOpen = activeFaq === idx;
                    return (
                      <div 
                        id={`faq-item-${idx}`}
                        key={idx} 
                        className="bg-white/10 border border-white/15 rounded-2xl overflow-hidden transition-all duration-200"
                      >
                        <button
                          id={`faq-toggle-btn-${idx}`}
                          onClick={() => setActiveFaq(isOpen ? null : idx)}
                          className="w-full text-left px-6 py-4 flex items-center justify-between font-display text-xs sm:text-sm font-bold text-white hover:bg-white/5 focus:outline-none cursor-pointer"
                        >
                          <span>{faq.question}</span>
                          <ChevronDown className={`w-4 h-4 text-amber-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                        </button>
                        
                        {isOpen && (
                          <div id={`faq-answer-${idx}`} className="px-6 pb-5 pt-1 text-xs text-blue-50/95 leading-relaxed border-t border-white/10 bg-black/5">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

              </div>
            </section>

            {/* 7. Quick Highlight Callout Banner with gorgeous gradient overlay */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-tr from-amber-500 via-pink-600 to-indigo-700 text-white border border-white/30 shadow-2xl p-12 sm:p-16 text-center">
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                <div className="max-w-3xl mx-auto space-y-6 relative z-10">
                  <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-[10px] font-extrabold tracking-widest uppercase border border-white/25 text-white">
                    VERIFIED BALLARI WORKSHOP
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-extrabold font-display leading-tight tracking-tight text-white mb-4">
                    Design Your Next Dream Festive Fit, <br />or Deploy Your Verified Merchant Application.
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-50 max-w-2xl mx-auto">
                    Our professional developers and master designers collaborate hand-in-hand. Contact LNM Enterprises to bring your traditional and digital strategies to absolute realization.
                  </p>
                  <div className="flex justify-center pt-4">
                    <button
                      id="home-cta-bottom-btn"
                      onClick={() => handlePageChange('contact')}
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-extrabold bg-amber-500 hover:bg-white text-blue-950 transition-all duration-300 hover:scale-105 shadow-xl cursor-pointer text-xs uppercase select-none"
                    >
                      Initiate Proposal Launch
                      <ArrowRight className="w-4 h-4 text-blue-950" />
                    </button>
                  </div>
                </div>
              </div>
            </section>

          </div>
        )}

        {/* Render Other Context Pages */}
        {currentPage === 'about' && (
          <About setCurrentPage={handlePageChange} />
        )}

        {currentPage === 'services' && (
          <Services 
            setCurrentPage={handlePageChange} 
            setPreSelectedService={setPreSelectedService} 
          />
        )}

        {currentPage === 'portfolio' && (
          <Portfolio />
        )}

        {currentPage === 'contact' && (
          <Contact 
            preSelectedService={preSelectedService} 
            clearPreSelectedService={() => setPreSelectedService('')} 
          />
        )}

        {currentPage === 'privacy-policy' && (
          <PrivacyPolicy />
        )}

        {currentPage === 'terms-and-conditions' && (
          <TermsAndConditions />
        )}
      </main>

      {/* Floating Interactive WhatsApp Button for immediate access */}
      <a
        id="app-floating-whatsapp-btn"
        href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hello LNM Enterprises! I visited your business website and would like to ask some questions regarding tailoring/it services.`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-110 flex items-center justify-center cursor-pointer group"
        aria-label="Direct WhatsApp helpline"
      >
        <MessageSquare className="w-6 h-6 fill-white" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-[120px] transition-all duration-300 text-xs font-bold font-mono ml-0 group-hover:ml-2 whitespace-nowrap">
          WhatsApp Desk
        </span>
      </a>

      {/* Bottom Footer block map quick connections */}
      <Footer setCurrentPage={handlePageChange} currentPage={currentPage} />

    </div>
  );
}
