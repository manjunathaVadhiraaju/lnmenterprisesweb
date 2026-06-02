/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquare, Check, AlertCircle, ArrowRight, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data';
import { ContactFormInput } from '../types';

interface ContactProps {
  preSelectedService?: string;
  clearPreSelectedService?: () => void;
}

export default function Contact({ preSelectedService, clearPreSelectedService }: ContactProps) {
  const [formData, setFormData] = useState<ContactFormInput>({
    name: '',
    email: '',
    phone: '',
    serviceRequired: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState<Partial<ContactFormInput>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [lastSubmittedData, setLastSubmittedData] = useState<ContactFormInput | null>(null);

  // Set preselected service if dynamic handoff occurred
  useEffect(() => {
    if (preSelectedService) {
      setFormData(prev => ({ ...prev, serviceRequired: preSelectedService }));
    }
  }, [preSelectedService]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error
    if (formErrors[name as keyof ContactFormInput]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const errors: Partial<ContactFormInput> = {};
    if (!formData.name.trim()) errors.name = 'Your name is required';
    
    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please provide a valid email address';
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Mobile phone number is required';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      errors.phone = 'Please provide a valid 10-digit mobile number';
    }

    if (!formData.serviceRequired) {
      errors.serviceRequired = 'Please choose a business service category';
    }

    if (!formData.message.trim()) {
      errors.message = 'Please specify your requirement details';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const getWhatsAppMessage = (data: ContactFormInput) => {
    return `Hello LNM Enterprises! I am submitting an inquiry:\n\n` +
      `👤 Name: ${data.name}\n` +
      `📞 Phone/WhatsApp: ${data.phone}\n` +
      `✉️ Email: ${data.email}\n` +
      `🛠️ Service Required: ${data.serviceRequired}\n` +
      `📝 Detailed Info: ${data.message}`;
  };

  const getEmailHref = (data: ContactFormInput) => {
    const subject = encodeURIComponent(`LNM Enterprises Inquiry - ${data.name}`);
    const body = encodeURIComponent(
      `Hello LNM Enterprises team,\n\n` +
      `I would like to request a quote / support for the following details:\n\n` +
      `- Client Name: ${data.name}\n` +
      `- Phone/WhatsApp Number: ${data.phone}\n` +
      `- Service Category: ${data.serviceRequired}\n\n` +
      `Requirement Description:\n` +
      `${data.message}\n\n` +
      `Please get back to me as soon as possible.\n\n` +
      `Regards,\n` +
      `${data.name}`
    );
    return `mailto:${BUSINESS_INFO.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setLastSubmittedData({ ...formData });

    // Simulate reliable API transaction proxy
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Reset
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceRequired: '',
        message: ''
      });
      if (clearPreSelectedService) {
        clearPreSelectedService();
      }
    }, 1200);
  };

  const whatsAppPreFill = `Hello LNM Enterprises! I visited your website and would like a custom quote for the following service: ${formData.serviceRequired || 'General Consultation'}.`;

  return (
    <div className="py-16 bg-transparent select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center px-4 py-1.5 bg-white/10 rounded-full text-xs font-bold text-white uppercase tracking-widest border border-white/20 mb-3 animate-pulse">
            Get In Touch
          </span>
          <h1 className="text-4xl font-extrabold text-white font-display tracking-tight mb-4">
            Contact LNM Enterprises
          </h1>
          <p className="text-blue-100">
            Have questions about digital software compilation or bespoke bridal stitching? Fill out our form or visit our Ballari showroom.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Side: Business Info + Compliance Panel (5 columns) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Main Info Card */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/15 p-8 rounded-3xl space-y-6 text-white shadow-lg">
              <h3 className="text-xl font-bold text-white font-display border-b border-white/10 pb-3">
                Corporate Headquarters
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/20 text-blue-300 rounded-xl flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-blue-105 capitalize">Physical Address</span>
                    <strong className="text-sm text-white font-display">{BUSINESS_INFO.location}</strong>
                    <span className="block text-xs text-blue-100 mt-1">{BUSINESS_INFO.fullAddress}</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-500/20 text-purple-300 rounded-xl flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-3">
                    <span className="block text-xs font-mono text-blue-105 capitalize">Talk to our experts</span>
                    <div>
                      <span className="block text-[10px] text-amber-300 font-bold uppercase tracking-wider">Tailoring & WhatsApp Support</span>
                      <strong className="text-sm text-white font-mono block hover:text-amber-300">{BUSINESS_INFO.tailoringPhone}</strong>
                      <span className="block text-[9px] text-blue-105 uppercase mt-0.5">Calls & WhatsApp chats accepted</span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-amber-300 font-bold uppercase tracking-wider">Software & IT related support</span>
                      <strong className="text-sm text-white font-mono block hover:text-amber-300">{BUSINESS_INFO.softwarePhone}</strong>
                      <span className="block text-[9px] text-blue-105 uppercase mt-0.5">Voice calls only</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-pink-500/20 text-pink-300 rounded-xl flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-blue-105 capitalize">Business Email Enquiries</span>
                    <strong className="text-sm text-white block hover:text-amber-300">{BUSINESS_INFO.email}</strong>
                    <span className="block text-xs text-blue-100 mt-1">24/7 client response desk</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-500/20 text-amber-300 rounded-xl flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-blue-105 capitalize">Showroom Working Hours</span>
                    <strong className="text-sm text-white block">{BUSINESS_INFO.hours}</strong>
                    <span className="text-[10px] text-amber-300 block font-semibold mt-1">Visit for measurements & design consults</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Quick Action WhatsApp Trigger Block */}
            <div className="bg-gradient-to-tr from-green-500/15 to-emerald-500/15 border border-green-400/20 p-6 rounded-3xl flex flex-col justify-between text-white shadow-lg">
              <div className="mb-4">
                <span className="bg-emerald-600 text-white text-[10px] font-mono tracking-wider font-bold uppercase rounded-full px-3 py-1 inline-block mb-2 w-max">
                  LIVE CHAT SUPPORT
                </span>
                <p className="text-sm text-blue-105">
                  Prefer directly speaking to our tailors or coders? Chat immediately on WhatsApp with our active desk.
                </p>
              </div>
              
              <a
                id="contact-btn-whatsapp"
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(whatsAppPreFill)}`}
                target="_blank"
                rel="noreferrer"
                className="w-full text-center inline-flex items-center justify-center gap-2 p-3.5 rounded-full font-bold bg-emerald-600 text-white hover:bg-emerald-500 hover:scale-103 transition shadow-md shadow-emerald-500/10 cursor-pointer text-xs uppercase tracking-wider"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                Chat Now on WhatsApp
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right Side: Professional Validation Form (7 columns) */}
          <div className="lg:col-span-7">
            
            {submitSuccess ? (
              <div id="contact-form-success-alert" className="border border-green-500/30 rounded-3xl bg-white/15 backdrop-blur-lg p-8 sm:p-12 text-center shadow-xl space-y-6 text-white animate-fade-in">
                <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto border border-green-500/35">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-white font-display">Inquiry Compiled Successfully!</h3>
                  <p className="text-blue-100 text-sm max-w-lg mx-auto">
                    Since this is a client-side static landing page, your details have been securely prepared. <strong>To send this inquiry to us instantly</strong>, select one of our live dispatch routes below:
                  </p>
                </div>

                {lastSubmittedData && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto pt-2">
                    {/* Send via WhatsApp */}
                    <a
                      id="success-send-whatsapp"
                      href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(getWhatsAppMessage(lastSubmittedData))}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-3 px-5 py-4 rounded-2xl font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition hover:scale-102 duration-200 text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/10 text-left cursor-pointer"
                    >
                      <MessageSquare className="w-5 h-5 fill-white flex-shrink-0" />
                      <div className="text-left">
                        <span className="block text-[9px] opacity-75 font-mono">Option 1: Preferred</span>
                        <span className="block font-extrabold text-white text-xs">Send via WhatsApp</span>
                      </div>
                    </a>

                    {/* Send via Email */}
                    <a
                      id="success-send-email"
                      href={getEmailHref(lastSubmittedData)}
                      className="inline-flex items-center justify-center gap-3 px-5 py-4 rounded-2xl font-bold bg-blue-600 hover:bg-blue-500 text-white transition hover:scale-102 duration-200 text-xs uppercase tracking-wider shadow-lg shadow-blue-500/10 text-left cursor-pointer"
                    >
                      <Mail className="w-5 h-5 flex-shrink-0" />
                      <div className="text-left">
                        <span className="block text-[9px] opacity-75 font-mono">Option 2: Email Client</span>
                        <span className="block font-extrabold text-white text-xs">Send via Email Draft</span>
                      </div>
                    </a>
                  </div>
                )}

                <div className="bg-white/5 p-4 rounded-xl border border-white/10 max-w-sm mx-auto text-left space-y-2 text-xs">
                  <span className="block text-[10px] text-blue-105 font-mono uppercase">LNM Urgent Care Lines</span>
                  <div>
                    <span className="block text-[9px] text-amber-200/90 font-mono uppercase tracking-wide">Tailoring & WhatsApp Support</span>
                    <span className="block text-xs font-semibold text-blue-100 font-mono">{BUSINESS_INFO.tailoringPhone}</span>
                  </div>
                  <div>
                    <span className="block text-[9px] text-amber-200/90 font-mono uppercase tracking-wide">Software & IT Support (Calls Only)</span>
                    <span className="block text-xs font-semibold text-blue-100 font-mono">{BUSINESS_INFO.softwarePhone}</span>
                  </div>
                  <div className="border-t border-white/10 pt-1.5 mt-1.5">
                    <span className="block text-xs font-semibold text-blue-100">Email Address: {BUSINESS_INFO.email}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    id="contact-success-btn-reset"
                    onClick={() => setSubmitSuccess(false)}
                    className="px-6 py-2.5 rounded-full text-xs font-extrabold text-blue-955 bg-amber-500 hover:bg-white transition cursor-pointer uppercase tracking-wider"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form id="contact-inquiry-form" onSubmit={handleSubmit} className="border border-white/15 p-6 sm:p-8 rounded-3xl space-y-5 bg-white/10 backdrop-blur-lg shadow-xl relative text-white">
                
                <h3 className="text-xl font-bold text-white font-display">
                  Submit Digital Inquiry
                </h3>

                {/* Name */}
                <div className="space-y-1">
                  <label htmlFor="contact-form-name" className="block text-xs font-bold text-amber-200/90 uppercase tracking-wide">Your Full Name</label>
                  <input
                    id="contact-form-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-sm text-white placeholder-blue-200/50 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:bg-white/10 ${
                      formErrors.name ? 'border-red-400/55 focus:ring-red-300' : 'border-white/10'
                    }`}
                  />
                  {formErrors.name && (
                    <span className="text-red-300 text-xs flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {formErrors.name}
                    </span>
                  )}
                </div>

                {/* Email / Phone Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div className="space-y-1">
                    <label htmlFor="contact-form-email" className="block text-xs font-bold text-amber-200/90 uppercase tracking-wide">Email Address</label>
                    <input
                      id="contact-form-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. name@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-sm text-white placeholder-blue-200/50 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:bg-white/10 ${
                        formErrors.email ? 'border-red-400/55 focus:ring-red-300' : 'border-white/10'
                      }`}
                    />
                    {formErrors.email && (
                      <span className="text-red-300 text-xs flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {formErrors.email}
                      </span>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-1">
                    <label htmlFor="contact-form-phone" className="block text-xs font-bold text-amber-200/90 uppercase tracking-wide">Phone / WhatsApp Number</label>
                    <input
                      id="contact-form-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +91 9449254265"
                      className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-sm text-white placeholder-blue-200/50 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:bg-white/10 ${
                        formErrors.phone ? 'border-red-400/55 focus:ring-red-300' : 'border-white/10'
                      }`}
                    />
                    {formErrors.phone && (
                      <span className="text-red-300 text-xs flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {formErrors.phone}
                      </span>
                    )}
                  </div>
                </div>

                {/* Service Dropdown Selector */}
                <div className="space-y-1">
                  <label htmlFor="contact-form-service" className="block text-xs font-bold text-amber-200/90 uppercase tracking-wide">Required Service Area</label>
                  <select
                    id="contact-form-service"
                    name="serviceRequired"
                    value={formData.serviceRequired}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl bg-white/10 border text-sm text-white placeholder-blue-200/50 focus:outline-none focus:ring-2 focus:ring-amber-400 cursor-pointer ${
                      formErrors.serviceRequired ? 'border-red-400/55 focus:ring-red-300' : 'border-white/10'
                    }`}
                  >
                    <option value="" className="text-gray-900 bg-white">-- Choose custom service area --</option>
                    <optgroup label="Creative Fashion & Tailoring" className="text-gray-950 font-bold bg-slate-50">
                      <option value="Women's Tailoring & Custom Stitching" className="text-gray-900 bg-white">Women's Tailoring & Custom Stitching</option>
                      <option value="Designer Blouse Stitching" className="text-gray-900 bg-white">Designer Blouse Stitching</option>
                      <option value="Dress Stitching & Umbrella Frocks" className="text-gray-900 bg-white">Dress Stitching & Umbrella Frocks</option>
                      <option value="Baby Kuchu Saree Tassels & Beading" className="text-gray-900 bg-white">Baby Kuchu Saree Tassels & Beading</option>
                      <option value="Fashion Alterations & Customizations" className="text-gray-900 bg-white">Fashion Alterations & Customizations</option>
                    </optgroup>
                    <optgroup label="Computer Embroidery Services" className="text-gray-950 font-bold bg-slate-50">
                      <option value="Computer & Designer Embroidery" className="text-gray-900 bg-white">Computer & Designer Embroidery</option>
                      <option value="Custom Bridal & Logo Embroidery" className="text-gray-900 bg-white">Custom Bridal & Logo Embroidery</option>
                    </optgroup>
                    <optgroup label="Enterprise Digital Technologies" className="text-gray-950 font-bold bg-slate-50">
                      <option value="Android & iOS App Development" className="text-gray-900 bg-white">Android & iOS App Development</option>
                      <option value="Web Application & E-Commerce Development" className="text-gray-900 bg-white">Web Application & E-Commerce Development</option>
                    </optgroup>
                  </select>
                  {formErrors.serviceRequired && (
                    <span className="text-red-300 text-xs flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {formErrors.serviceRequired}
                    </span>
                  )}
                </div>

                {/* Requirements Description Message Textarea */}
                <div className="space-y-1">
                  <label htmlFor="contact-form-message" className="block text-xs font-bold text-amber-200/90 uppercase tracking-wide">Detailed Message (Garment fabric type, dress measurements, or digital parameters)</label>
                  <textarea
                    id="contact-form-message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Describe your design specifications or software requirements..."
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-sm text-white placeholder-blue-200/50 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:bg-white/10 ${
                      formErrors.message ? 'border-red-400/55 focus:ring-red-300' : 'border-white/10'
                    }`}
                  ></textarea>
                  {formErrors.message && (
                    <span className="text-red-300 text-xs flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {formErrors.message}
                    </span>
                  )}
                </div>

                {/* Privacy Policy Checklist disclaimer for Play Store Compliance */}
                <div className="p-3.5 bg-white/5 border border-white/10 rounded-xl text-blue-105 text-[11px] leading-relaxed">
                  By clicking Submit, you agree that LNM Enterprises may contact you over phone, email, or digital chat to refine measurements and execute scopes. Your data remains protected under our secure corporate <strong>Privacy Policy guidelines (HTTPS Standard)</strong>.
                </div>

                {/* Submit button */}
                <button
                  id="contact-form-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full text-center inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-blue-95d bg-amber-500 hover:bg-white hover:scale-103 shadow-lg shadow-amber-500/10 disabled:opacity-50 cursor-pointer uppercase tracking-wider text-xs font-extrabold"
                >
                  {isSubmitting ? 'Processing Transaction...' : 'Submit Custom Inquiry'}
                  <ArrowRight className="w-4 h-4 animate-pulse text-blue-95a" />
                </button>

              </form>
            )}

          </div>

        </div>

        {/* Embedded Google Maps Section */}
        <div className="mt-16 overflow-hidden rounded-3xl border border-white/15 shadow-xl relative">
          <div className="absolute top-4 left-4 z-10 bg-[#1e0d3c]/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-lg border border-white/10">
            <span className="block text-[10px] text-amber-300 font-bold uppercase tracking-wider font-mono">Verified Location</span>
            <span className="block text-sm font-extrabold text-white font-display">LNM Enterprises Studio</span>
            <span className="text-xs text-blue-100 block">Ballari, Karnataka - 583101</span>
          </div>

          <iframe
            id="google-maps-iframe-embed"
            title="LNM Enterprises Location on Map"
            src="https://maps.google.com/maps?q=Ballari,%20Karnataka,%20India&t=&z=14&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="400"
            className="border-0 bg-slate-900"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer"
          ></iframe>
        </div>

      </div>
    </div>
  );
}
