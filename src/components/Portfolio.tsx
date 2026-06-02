/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../data';
import { ServiceCategory, PortfolioItem } from '../types';
import { X, Search, Calendar, User, Eye, ArrowUpRight } from 'lucide-react';

export default function Portfolio() {
  const [filter, setFilter] = useState<ServiceCategory | 'all'>('all');
  const [lightboxItem, setLightboxItem] = useState<PortfolioItem | null>(null);

  // Filters setup
  const filteredList = PORTFOLIO_ITEMS.filter(item => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  const categories = [
    { id: 'all' as const, label: 'All Projects' },
    { id: 'tailoring' as const, label: 'Tailoring & Garments' },
    { id: 'embroidery' as const, label: 'Embroidery Samples' },
    { id: 'tech' as const, label: 'Technology Solutions' },
  ];

  return (
    <div className="py-16 bg-transparent select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center px-4 py-1.5 bg-white/10 rounded-full text-xs font-bold text-white uppercase tracking-widest border border-white/20 mb-3 animate-pulse">
            Our Work Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight mb-4 animate-fade-in">
            LNM Enterprises Portfolio
          </h2>
          <p className="text-blue-100">
            Browse through our fine hand-stitched garments, digital embroidery designs, and scalable website application assets.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = filter === cat.id;
            return (
              <button
                id={`portfolio-filter-${cat.id}`}
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer border ${
                  isActive
                    ? 'bg-amber-500 text-blue-950 border-amber-500 shadow-lg shadow-amber-500/20'
                    : 'bg-white/10 text-white border-white/10 hover:bg-white/20 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredList.map((item) => (
            <div
              id={`portfolio-item-card-${item.id}`}
              key={item.id}
              onClick={() => setLightboxItem(item)}
              className="group bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/15 shadow-lg hover:border-white/30 hover:bg-white/15 hover:-translate-y-1 transition duration-300 cursor-pointer flex flex-col justify-between text-white"
            >
              
              {/* Image with Hover zoom effect */}
              <div className="relative aspect-4/3 w-full bg-black/10 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                />
                
                {/* Dark preview layer on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white text-glow shadow-lg transition-transform duration-300 scale-90 group-hover:scale-100">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="absolute top-3 left-3">
                  <span className={`text-[10px] font-mono tracking-wider font-bold uppercase px-2 py-0.5 rounded-md text-white ${
                    item.category === 'tailoring' ? 'bg-pink-500' : item.category === 'embroidery' ? 'bg-purple-500' : 'bg-blue-500'
                  }`}>
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Text Meta info */}
              <div className="p-6 space-y-3">
                <div className="flex flex-wrap gap-1">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-bold text-amber-300 bg-white/10 px-2 py-0.5 rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-350 transition-colors font-display">
                    {item.title}
                  </h3>
                  <p className="text-blue-105 text-xs sm:text-sm line-clamp-2 mt-1">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="px-6 py-3 border-t border-white/10 bg-black/15 flex items-center justify-between text-blue-105 text-xs">
                {item.client ? (
                  <span className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5" />
                    <span className="truncate max-w-[120px]">{item.client}</span>
                  </span>
                ) : (
                  <span></span>
                )}
                {item.date && (
                  <span className="flex items-center gap-1.5 font-mono">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.date}
                  </span>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Lightbox Gallery Modal Popup */}
        {lightboxItem && (
          <div 
            id="portfolio-lightbox-modal"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in"
            onClick={() => setLightboxItem(null)}
          >
            <div 
              id="portfolio-lightbox-content"
              className="relative w-full max-w-4xl bg-[#2e1d52] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              
              {/* Close Button */}
              <button 
                id="portfolio-lightbox-close-btn"
                onClick={() => setLightboxItem(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/40 hover:bg-black/65 text-white backdrop-blur-md transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Side: Big Image */}
              <div className="w-full md:w-3/5 bg-slate-950 flex items-center justify-center min-h-[300px] md:min-h-[400px]">
                <img
                  src={lightboxItem.image}
                  alt={lightboxItem.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover max-h-[500px]"
                />
              </div>

              {/* Right Side: Description card details */}
              <div className="w-full md:w-2/5 p-6 sm:p-8 flex flex-col justify-between bg-[#241348] text-white">
                <div className="space-y-4">
                  <div>
                    <span className={`text-[10px] font-mono tracking-wider font-bold uppercase px-2.5 py-1 rounded-full ${
                      lightboxItem.category === 'tailoring' 
                        ? 'bg-pink-500/25 text-pink-300' 
                        : lightboxItem.category === 'embroidery' 
                        ? 'bg-purple-500/25 text-purple-300' 
                        : 'bg-blue-500/25 text-blue-300'
                    }`}>
                      {lightboxItem.category}
                    </span>
                    <h3 className="text-2xl font-black text-white mt-3 font-display">
                      {lightboxItem.title}
                    </h3>
                  </div>

                  <p className="text-sm text-blue-100 leading-relaxed">
                    {lightboxItem.description}
                  </p>

                  <div className="space-y-2 border-t border-white/10 pt-4">
                    {lightboxItem.client && (
                      <div className="flex items-center gap-3 text-xs text-blue-100">
                        <User className="w-4 h-4 text-amber-200/80" />
                        <div>
                          <span className="font-semibold block text-[10px] text-blue-105 capitalize">Client Partner</span>
                          <span>{lightboxItem.client}</span>
                        </div>
                      </div>
                    )}
                    {lightboxItem.date && (
                      <div className="flex items-center gap-3 text-xs text-blue-100">
                        <Calendar className="w-4 h-4 text-amber-200/80" />
                        <div>
                          <span className="font-semibold block text-[10px] text-blue-105 capitalize">Completed Date</span>
                          <span className="font-mono">{lightboxItem.date}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 mt-6 flex flex-col gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {lightboxItem.tags.map((tag, idx) => (
                      <span key={idx} className="bg-white/10 text-amber-200 border border-white/5 px-2.5 py-1 rounded-md text-[10px] font-mono">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-[10px] text-blue-105 text-center block mt-3">
                    Click anywhere outside to close
                  </span>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
