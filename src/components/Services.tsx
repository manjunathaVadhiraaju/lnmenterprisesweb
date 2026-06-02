/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { Page, ServiceCategory, ServiceDetail } from '../types';
import { SERVICES } from '../data';

interface ServicesProps {
  setCurrentPage: (page: Page) => void;
  setPreSelectedService: (serviceTitle: string) => void;
}

export default function Services({ setCurrentPage, setPreSelectedService }: ServicesProps) {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | 'all'>('all');

  // Filter list
  const filteredServices = SERVICES.filter(item => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  const categoryTabs = [
    { id: 'all' as const, label: 'All Services', count: SERVICES.length },
    { id: 'tailoring' as const, label: "Women's Tailoring", count: SERVICES.filter(s => s.category === 'tailoring').length },
    { id: 'embroidery' as const, label: 'Computer Embroidery', count: SERVICES.filter(s => s.category === 'embroidery').length },
    { id: 'tech' as const, label: 'Technology Solutions', count: SERVICES.filter(s => s.category === 'tech').length }
  ];

  const handleInquiryRedirect = (service: ServiceDetail) => {
    setPreSelectedService(service.title);
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="py-16 bg-transparent select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center px-4 py-1.5 bg-white/10 rounded-full text-xs font-bold text-white uppercase tracking-widest border border-white/20 mb-3">
            What We Do Best
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight mb-4">
            Bespoke Services Crafted for You
          </h2>
          <p className="text-blue-100">
            We deliver state-of-the-art results across fashion design, computerized thread embroidery systems, and fully compliant software architectures.
          </p>
        </div>

        {/* Dynamic Category Filtering Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 pb-4 border-b border-white/10">
          {categoryTabs.map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                id={`services-filter-tab-${tab.id}`}
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer border ${
                  isActive
                    ? 'bg-amber-500 text-blue-950 border-amber-500 shadow-lg shadow-amber-500/20'
                    : 'bg-white/10 text-white border-white/15 hover:bg-white/20'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${isActive ? 'bg-blue-950/40 text-amber-300 font-extrabold' : 'bg-black/20 text-blue-100'}`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Services Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            // Dynamically retrieve Lucide Icon with fallback to Sparkles
            const LucideIcon = (Icons as any)[service.icon] || Icons.Sparkles;

            return (
              <div
                id={`service-card-${service.id}`}
                key={service.id}
                className="group flex flex-col justify-between h-full bg-white/10 backdrop-blur-lg rounded-3xl border border-white/15 shadow-lg hover:border-white/30 hover:bg-white/15 hover:-translate-y-1 transition duration-300 overflow-hidden text-white"
              >
                <div className="p-6 sm:p-8 space-y-4">
                  {/* Category Pill + Icon */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-amber-300 group-hover:scale-110 transition-transform">
                      <LucideIcon className="w-6 h-6 text-amber-300 group-hover:text-amber-450 transition-colors" />
                    </div>
                    <span className={`text-[10px] font-mono font-bold tracking-widest uppercase px-2.5 py-1 rounded-full ${
                      service.category === 'tailoring' 
                        ? 'bg-pink-500/20 text-pink-300 border border-pink-400/20'
                        : service.category === 'embroidery'
                        ? 'bg-purple-500/20 text-purple-300 border border-purple-400/20'
                        : 'bg-blue-500/20 text-blue-300 border border-blue-400/20'
                    }`}>
                      {service.category}
                    </span>
                  </div>

                  {/* Text Title */}
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-white font-display group-hover:text-amber-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-blue-105 text-xs sm:text-sm line-clamp-3">
                      {service.description}
                    </p>
                  </div>

                  {/* Bullet features */}
                  <div className="pt-2 border-t border-white/15">
                    <span className="text-[11px] font-bold text-amber-200/90 uppercase tracking-wider block mb-2">Key Features</span>
                    <ul className="space-y-1.5">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start text-xs text-blue-100 gap-2">
                          <Icons.CheckCircle className="w-3.5 h-3.5 text-green-450 mt-0.5 flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer and Call to Actions inside card */}
                <div className="px-6 py-4 bg-black/15 border-t border-white/10 flex items-center justify-between">
                  {service.pricing ? (
                    <div>
                      <span className="block text-[10px] text-blue-105 font-mono flex items-center uppercase">Price benchmark</span>
                      <span className="text-sm font-bold text-amber-300">{service.pricing}</span>
                    </div>
                  ) : (
                    <div>
                      <span className="block text-[10px] text-blue-105 font-mono uppercase">Consultation</span>
                      <span className="text-sm font-semibold text-blue-100">Custom Scope</span>
                    </div>
                  )}

                  <button
                    id={`service-card-btn-${service.id}`}
                    onClick={() => handleInquiryRedirect(service)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold text-blue-950 bg-amber-500 hover:bg-white shadow-md transition duration-300 cursor-pointer uppercase tracking-wider select-none font-sans"
                  >
                    Request Quote
                    <Icons.ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Digital Value Add Statement Badge */}
        <div className="mt-16 text-center max-w-4xl mx-auto p-6 rounded-3xl bg-white/5 border border-white/20 select-none">
          <p className="text-sm text-blue-100 max-w-2xl mx-auto">
            Need an customized package combining fashion tailoring with e-commerce app deployment? We specialize in cross-disciplinary projects to modernize traditional Indian retail channels.
          </p>
          <button 
            id="services-consultation-btn"
            onClick={() => {
              setPreSelectedService('Digital & Fashion Consultation Package');
              setCurrentPage('contact');
            }} 
            className="text-xs font-bold text-amber-400 hover:text-amber-300 underline mt-2 inline-flex items-center gap-1 cursor-pointer uppercase tracking-wider"
          >
            Schedule Joint Consultation
            <Icons.ExternalLink className="w-3 h-3" />
          </button>
        </div>

      </div>
    </div>
  );
}
