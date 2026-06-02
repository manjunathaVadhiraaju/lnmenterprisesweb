/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldCheck, Mail, MapPin, FileLock } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export default function PrivacyPolicy() {
  const lastUpdated = 'June 02, 2026';

  return (
    <div className="py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Policy Header Block */}
        <div className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm mb-8 space-y-4">
          <div className="flex items-center gap-3 text-blue-600">
            <ShieldCheck className="w-8 h-8 stroke-[1.5]" />
            <span className="text-xs uppercase font-mono tracking-widest bg-blue-50 px-2.5 py-1 rounded-md font-semibold">
              Legal Compliance Document
            </span>
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-gray-900 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xs text-gray-400 font-mono mt-1">
              Last Updated: {lastUpdated} | URL reference: {BUSINESS_INFO.privacyPolicyUrl}
            </p>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed">
            At LNM Enterprises, accessible from our application portal, website directories, and Play Store applications, protecting user privacy is our prime objective. This Privacy Policy document outlines the precise classifications of information gathered, tracked, and stored by LNM Enterprises and how we handle it.
          </p>
        </div>

        {/* Policy Contents Container */}
        <div className="bg-white border border-gray-100 p-8 sm:p-12 rounded-3xl shadow-sm space-y-8 text-gray-700 text-sm leading-relaxed">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900 font-display flex items-center gap-2">
              <span className="w-5 h-5 rounded bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-mono">1</span>
              Introduction
            </h2>
            <p>
              This Privacy Policy applies to our website (LNM Enterprises), our corporate smartphone applications deployed on the Google Play Store or Apple App Store, and all interactive design systems we operate. By interacting with our digital interfaces, portals, or placing customized physical tailoring orders, you hereby consent to our Privacy Policy and agree to its terms.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900 font-display flex items-center gap-2">
              <span className="w-5 h-5 rounded bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-mono">2</span>
              Information We Collect
            </h2>
            <p>
              The personal information that you are requested to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask for it. This includes online form submissions, physically tracking garment sizing, or establishing user authorization tokens in our client apps.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900 font-display flex items-center gap-2">
              <span className="w-5 h-5 rounded bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-mono">3</span>
              Personal Information
            </h2>
            <p>
              When you submit a design inquiry, place a computer embroidery order, or request a technology development consultation, we collect relative personal fields:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-4 text-gray-600">
              <li>Contact details: Name, Email Address, and Phone Number.</li>
              <li>Design parameters: Dress styles, fabrics, specific customized measurements, or physical sketches.</li>
              <li>Software scope: Business specifications, Google Play Console credentials (where explicitly volunteered for deployment), or billing tokens.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900 font-display flex items-center gap-2">
              <span className="w-5 h-5 rounded bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-mono">4</span>
              Device Information
            </h2>
            <p>
              Like most online providers, our servers automatically collect device identifiers when you browse LNM Enterprises. This incorporates IP (Internet Protocol) addresses, browser type, ISP (Internet Service Provider) details, date and time markers, referring/exit pages, and click behavior to analyze digital security and server health.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900 font-display flex items-center gap-2">
              <span className="w-5 h-5 rounded bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-mono">5</span>
              App Permissions
            </h2>
            <p>
              Our mobile applications published on Google Play can request standard device permissions to ensure seamless service delivery. These can include:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-4 text-gray-600">
              <li><strong>Network Permissions:</strong> To fetch the latest garment patterns, embroidery catalogs, or server-side API responses.</li>
              <li><strong>Storage Permission:</strong> To download design catalogs or upload reference photos of blouses, dresses, or logos you require custom stitched.</li>
              <li><strong>Push Notifications:</strong> To alert you instantly when physical measurements are finished or when your mobile app builds are ready for verification.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900 font-display flex items-center gap-2">
              <span className="w-5 h-5 rounded bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-mono">6</span>
              Cookies and Tracking Technologies
            </h2>
            <p>
              LNM Enterprises uses standard client-side browser storage and cookies to maintain sessions, remember your name inputs, or cache portfolio pictures for high-speed offline capabilities. You can choose to disable cookies in your browser settings, though this may prevent certain custom portfolio view states from rendering.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900 font-display flex items-center gap-2">
              <span className="w-5 h-5 rounded bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-mono">7</span>
              Third-Party Services
            </h2>
            <p>
              We may utilize third-party widgets such as integrated payment pathways (e.g., Razorpay, UPI standard gateways) and Google Maps embedded iframes to check locations. These partners operate under their own independent privacy codes. We advise you to consult their respective policies.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900 font-display flex items-center gap-2">
              <span className="w-5 h-5 rounded bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-mono">8</span>
              Data Security
            </h2>
            <p>
              We implement professional-grade security mechanisms (HTTPS security envelopes, encrypted databases, restricted local workflows) to prevent unauthorized access, manipulation, or disclosure of your personal measurements and digital project parameters. No method of internet transmission is 100% secure, but we enforce the best industry security parameters.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900 font-display flex items-center gap-2">
              <span className="w-5 h-5 rounded bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-mono">9</span>
              Children&apos;s Privacy
            </h2>
            <p>
              Another priority of ours is adding protection for children while using the internet. LNM Enterprises does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think your child provided this on our forms, we strongly encourage you to contact us immediately to purge the record.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900 font-display flex items-center gap-2">
              <span className="w-5 h-5 rounded bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-mono">10</span>
              User Rights
            </h2>
            <p>
              Under standard consumer laws (and global GDPR/CCPA equivalents), you hold the right to inspect, update, or completely erase any personal record we hold. Please write to our email below to trigger secure removal.
            </p>
          </section>

          {/* Section 11 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900 font-display flex items-center gap-2">
              <span className="w-5 h-5 rounded bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-mono">11</span>
              Policy Updates
            </h2>
            <p>
              We may revise this Privacy Policy periodically. We recommend checking this page to stay updated on our data collection methods, secure storage upgrades, and local deployment policies.
            </p>
          </section>

          {/* Section 12 */}
          <section className="space-y-4 border-t border-gray-100 pt-6">
            <h2 className="text-lg font-bold text-gray-900 font-display flex items-center gap-2">
              <span className="w-5 h-5 rounded bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-mono">12</span>
              Contact Information
            </h2>
            <p>
              If you have any questions, requires data deletion, or needs verification certificates regarding our terms, please contact our legal desk:
            </p>
            
            <div className="bg-slate-50 p-6 rounded-xl border border-gray-150 space-y-2 max-w-lg">
              <div className="flex items-center gap-2.5 text-xs text-gray-600 font-semibold">
                <FileLock className="w-4 h-4 text-blue-600" />
                <span>Organization Name: LNM Enterprises</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-gray-600">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span>Address: {BUSINESS_INFO.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-gray-650">
                <Mail className="w-4 h-4 text-blue-600" />
                <span>Email Protocol: <strong className="text-blue-600 underline font-semibold">{BUSINESS_INFO.email}</strong></span>
              </div>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}
