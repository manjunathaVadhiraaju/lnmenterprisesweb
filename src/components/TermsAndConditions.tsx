/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Scale, Milestone, HelpCircle, ShieldAlert } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export default function TermsAndConditions() {
  const lastUpdated = 'June 02, 2026';

  return (
    <div className="py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Terms Header Block */}
        <div className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm mb-8 space-y-4">
          <div className="flex items-center gap-3 text-purple-600">
            <Scale className="w-8 h-8 stroke-[1.5]" />
            <span className="text-xs uppercase font-mono tracking-widest bg-purple-50 px-2.5 py-1 rounded-md font-semibold">
              Legal Framework Rules
            </span>
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-gray-900 tracking-tight">
              Terms & Conditions
            </h1>
            <p className="text-xs text-gray-400 font-mono mt-1">
              Last Updated: {lastUpdated} | URL reference: {BUSINESS_INFO.termsConditionsUrl}
            </p>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed">
            Welcome to LNM Enterprises. These Terms and Conditions outline the legal regulations, mutual commitments, and contractual guidelines for utilizing the physical showrooms, software directories, and digital applications operated by LNM Enterprises.
          </p>
        </div>

        {/* Terms Clauses Container */}
        <div className="bg-white border border-gray-100 p-8 sm:p-12 rounded-3xl shadow-sm space-y-8 text-gray-700 text-sm leading-relaxed">
          
          {/* Clause 1 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900 font-display flex items-center gap-2">
              <span className="w-5 h-5 rounded bg-purple-50 text-purple-600 flex items-center justify-center text-xs font-mono">1</span>
              Acceptance of Terms
            </h2>
            <p>
              By accessing LNM Enterprises, installing our localized smartphone releases, or placing customized garment tailoring or computer embroidering contracts, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not accept these instructions, you are advised to refrain from using our assets.
            </p>
          </section>

          {/* Clause 2 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900 font-display flex items-center gap-2">
              <span className="w-5 h-5 rounded bg-purple-50 text-purple-600 flex items-center justify-center text-xs font-mono">2</span>
              Use of the Website & Applications
            </h2>
            <p>
              LNM Enterprises grants you a limited, non-exclusive, revocable, and non-transferable license to access our portfolio showcases, submit genuine custom quote inquiries, and trace app deployment modules. You may not use these services for fraudulent, deceptive, harmful, or illegal activities.
            </p>
          </section>

          {/* Clause 3 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900 font-display flex items-center gap-2">
              <span className="w-5 h-5 rounded bg-purple-50 text-purple-600 flex items-center justify-center text-xs font-mono">3</span>
              User Responsibilities
            </h2>
            <p>
              When volunteering contact parameters (e.g. submitting a contact request or sharing app specification briefs), you agree to provide accurate, honest, and complete information. You are solely responsible for ensuring the secure custody of your own details and device accesses.
            </p>
          </section>

          {/* Clause 4 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900 font-display flex items-center gap-2">
              <span className="w-5 h-5 rounded bg-purple-50 text-purple-600 flex items-center justify-center text-xs font-mono">4</span>
              Intellectual Property Rights
            </h2>
            <p>
              Unless otherwise specified, all proprietary media, logo vectors (&apos;LNM&apos;, &apos;LNM Enterprises&apos;), custom styling assets, dynamic software algorithms, source files, and photographic project portraits housed within this application are the intellectual property of LNM Enterprises. All rights are reserved under regional and global copyright treaties.
            </p>
          </section>

          {/* Clause 5 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900 font-display flex items-center gap-2">
              <span className="w-5 h-5 rounded bg-purple-50 text-purple-600 flex items-center justify-center text-xs font-mono">5</span>
              Service Availability & Custom Stitching
            </h2>
            <p>
              While digital software services are accessible globally, physical tailoring, computer embroidery motif fittings, and face-to-face appointments are executed primarily inside our region in <strong>Ballari, Karnataka</strong>. Measurements, stitching, and on-schedule shipment handovers are subject to raw material availability and local peak-season backlogs.
            </p>
          </section>

          {/* Clause 6 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900 font-display flex items-center gap-2">
              <span className="w-5 h-5 rounded bg-purple-50 text-purple-600 flex items-center justify-center text-xs font-mono">6</span>
              Limitation of Liability
            </h2>
            <p>
              LNM Enterprises, its officers, managers, tailors, or lead software designers, shall not be held liable for any indirect, circumstantial, or punitive losses occurring from the use or inability to compile custom graphics, or delays in physical blouse delivery where events arise from natural incidents (monsoons, logistical delays, power cuts).
            </p>
          </section>

          {/* Clause 7 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900 font-display flex items-center gap-2">
              <span className="w-5 h-5 rounded bg-purple-50 text-purple-600 flex items-center justify-center text-xs font-mono">7</span>
              Third-Party Links
            </h2>
            <p>
              Our layouts may feature references or links to external frameworks, third-party UPI checkers, or client directories. LNM Enterprises possesses zero oversight over external contents or privacy structures, and we negate liability associated with external services.
            </p>
          </section>

          {/* Clause 8 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900 font-display flex items-center gap-2">
              <span className="w-5 h-5 rounded bg-purple-50 text-purple-600 flex items-center justify-center text-xs font-mono">8</span>
              Modification of Terms
            </h2>
            <p>
              LNM Enterprises preserves full authority to revise, restructure, or swap these Terms at any interval. When changes occur, notice will be updated on this portal. Continued operation of our digital portals denotes formal compliance with updated rules.
            </p>
          </section>

          {/* Clause 9 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900 font-display flex items-center gap-2">
              <span className="w-5 h-5 rounded bg-purple-50 text-purple-600 flex items-center justify-center text-xs font-mono">9</span>
              Governing Law
            </h2>
            <p>
              Any litigation, dispute, or legal claims relating to LNM Enterprises, our computer embroidery transactions, or digital software releases shall be ruled under the exclusive courts of <strong>Ballari, Karnataka, India</strong>, and the laws of the State of Karnataka, without regard to conflicts of law protocols.
            </p>
          </section>

          {/* Clause 10 */}
          <section className="space-y-4 border-t border-gray-105 pt-6">
            <h2 className="text-lg font-bold text-gray-900 font-display flex items-center gap-2">
              <span className="w-5 h-5 rounded bg-purple-50 text-purple-600 flex items-center justify-center text-xs font-mono">10</span>
              Contact Information
            </h2>
            <p>
              For complete contractual inquiries or to resolve technical integration anomalies, please initiate communication:
            </p>
            <div className="bg-slate-50 p-6 rounded-xl border border-gray-150 space-y-2 max-w-lg">
              <span className="block text-xs font-bold text-gray-900">LNM Enterprises legal helpline</span>
              <span className="text-xs text-gray-650 block">Registration Domain: Ballari, Karnataka, India – 583101</span>
              <span className="text-xs text-gray-650 block">Digital Email: {BUSINESS_INFO.email}</span>
              <div className="text-xs text-gray-650 border-t border-gray-200/60 pt-1.5 space-y-1">
                <span className="block"><strong>Tailoring Support:</strong> {BUSINESS_INFO.tailoringPhone}</span>
                <span className="block"><strong>Software Tech Support:</strong> {BUSINESS_INFO.softwarePhone} (Calls Only)</span>
              </div>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}
