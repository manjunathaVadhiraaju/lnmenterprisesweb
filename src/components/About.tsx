/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Target, Heart, Award, Sparkles, HelpCircle, ArrowRight } from 'lucide-react';
import { Page } from '../types';

interface AboutProps {
  setCurrentPage: (page: Page) => void;
}

export default function About({ setCurrentPage }: AboutProps) {
  const values = [
    {
      title: 'Quality',
      desc: 'Double-stitched enforcement, meticulous fabrics, clean codebases, and perfect structural performance.',
      icon: Award,
      bg: 'bg-white/10 group-hover:bg-amber-500/25',
      iconColor: 'text-amber-300'
    },
    {
      title: 'Innovation',
      desc: 'Seamlessly merging needle craftsmanship with computerized microcontrollers and robust web applications.',
      icon: Sparkles,
      bg: 'bg-white/10 group-hover:bg-purple-500/25',
      iconColor: 'text-purple-300'
    },
    {
      title: 'Customer Satisfaction',
      desc: 'Flexible adjustments, attentive design templates, and interactive support channels available on-demand.',
      icon: Heart,
      bg: 'bg-white/10 group-hover:bg-pink-500/25',
      iconColor: 'text-pink-300'
    },
    {
      title: 'Integrity & Transparency',
      desc: 'Honest upfront pricing margins with zero hidden fees. Pure dedication to regional development.',
      icon: Target,
      bg: 'bg-white/10 group-hover:bg-blue-500/25',
      iconColor: 'text-blue-300'
    }
  ];

  return (
    <div className="py-16 bg-transparent select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center px-4 py-1.5 bg-white/10 rounded-full text-xs font-bold text-white uppercase tracking-widest border border-white/20 mb-3">
            Who We Are
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-white tracking-tight mb-4">
            Combining Handcraft & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-250">Digital Innovation</span>
          </h1>
          <p className="text-lg text-blue-100">
            LNM Enterprises bridges the gap between old-world traditional design precision and high-performance modern software engineering.
          </p>
        </div>

        {/* Dynamic Multi-Grid Representation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20">
          
          {/* Text Content Block */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              The Story of LNM Enterprises
            </h2>
            <div className="text-blue-105 space-y-4 text-base leading-relaxed">
              <p>
                Founded in the historic city of <strong>Ballari, Karnataka</strong>, LNM Enterprises began as a customized tailoring and maggam stitching workshop dedicated to classic Indian ladies’ wear, bride catalogs, and digital embroidery templates.
              </p>
              <p>
                Recognizing that our customers also required digital business transformation—such as e-commerce stores to sell their fashion garments, mobile applications to manage local logistics, and high-performance website platforms—we expanded LNM's footprint by integrating a specialized <strong>Technology Division</strong>.
              </p>
              <p>
                Today, we operate as a full-service collaborative hub. Whether you are looking for local intricate saree baby kuchu, royal bridal computer embroidery, customized dress tailoring, or publication-ready Android/iOS smartphone applications on Google Play Console, LNM is your trusted regional partner.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                id="about-btn-view-services"
                onClick={() => setCurrentPage('services')}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-xs font-extrabold text-blue-950 bg-amber-500 hover:bg-white shadow-lg shadow-amber-500/10 hover:scale-105 transition-all duration-300 cursor-pointer uppercase tracking-wider"
              >
                Explore Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              <button
                id="about-btn-contact"
                onClick={() => setCurrentPage('contact')}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-xs font-extrabold text-white bg-white/10 border border-white/20 hover:bg-white/20 transition-all cursor-pointer uppercase tracking-wider"
              >
                Inquire & Find Us
              </button>
            </div>
          </div>

          {/* Visual Overlay Graphic Container - Glassmorphic Bento Style */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-xl"></div>
            <div className="relative bg-white/15 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-2xl space-y-6 text-white">
              <div className="border-b border-white/10 pb-4">
                <span className="text-xs font-mono text-amber-300 font-bold uppercase tracking-wider block">
                  Quick Organization Facts
                </span>
                <span className="text-xl font-bold text-white font-display">
                  LNM Enterprises Verified
                </span>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-300 mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="block text-sm font-semibold text-white">Headquarters Address</span>
                    <span className="text-sm text-blue-105">Ballari, Karnataka, India – 583101</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-300 mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="block text-sm font-semibold text-white">Core Services</span>
                    <span className="text-sm text-blue-105">Womens Tailoring, Computer Embroidery, Web & Android Software</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-pink-300 mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="block text-sm font-semibold text-white">Reach & Support</span>
                    <span className="text-sm text-blue-105">Pan-India digital deployment & localized walkthrough showroom</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-305 mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="block text-sm font-semibold text-white">Credentials</span>
                    <span className="text-sm text-blue-105">Standard Google verification compliant operations</span>
                  </div>
                </li>
              </ul>

              <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                <span className="block text-xl font-extrabold text-amber-400">Verification Safe</span>
                <span className="block text-[11px] text-amber-200/90 font-mono tracking-wide uppercase mt-1">
                  100% Google Play compliant website structure
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Vision & Mission Split Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 text-white">
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:bg-white/15 hover:shadow-2xl transition duration-300">
            <div className="absolute top-0 right-0 p-3.5 bg-blue-500/20 text-blue-300 rounded-bl-xl border-l border-b border-white/10">
              <Target className="w-6 h-6 animate-pulse" />
            </div>
            <h3 className="text-xl font-bold text-white font-display mb-3">Our Mission</h3>
            <p className="text-blue-105 text-sm leading-relaxed">
              To combine custom, meticulous handicraft techniques with cutting-edge micro-systems and high-performance programming interfaces, ensuring small enterprises, boutique designers, and corporate agencies receive world-class solutions.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:bg-white/15 hover:shadow-2xl transition duration-300">
            <div className="absolute top-0 right-0 p-3.5 bg-purple-500/20 text-purple-300 rounded-bl-xl border-l border-b border-white/10">
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>
            <h3 className="text-xl font-bold text-white font-display mb-3">Our Vision</h3>
            <p className="text-blue-105 text-sm leading-relaxed">
              To build a trustworthy ecosystem where fashion customization, computerized embroidery, and web/mobile application architectures are easily accessible under an unified regional hub, helping India grow Digitally & Culturally.
            </p>
          </div>
        </div>

        {/* Core Values Bento Grid */}
        <div className="mb-8">
          <h3 className="text-center text-xl font-bold text-white font-display tracking-tight uppercase mb-8">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const ValueIcon = v.icon;
              return (
                <div 
                  key={i} 
                  className="group bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/15 shadow-lg hover:border-white/35 hover:bg-white/15 hover:-translate-y-1 transition duration-300 text-white"
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors ${v.bg}`}>
                    <ValueIcon className={`w-6 h-6 ${v.iconColor}`} />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2 font-display">{v.title}</h4>
                  <p className="text-xs text-blue-105 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
