/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceDetail, PortfolioItem, Testimonial, StatItem } from './types';

export const BUSINESS_INFO = {
  name: 'LNM Enterprises',
  tagline: 'Tailoring Innovation with Technology',
  location: 'Ballari, Karnataka – 583101',
  fullAddress: '1st Cross, Anjinappa Nagar, Rupanagudi Road, Ballari – 583101, Karnataka, India (Landmark: Near Varabassappa Anganwadi Government School)',
  phone: '+91 9483725426', // Main fallback
  tailoringPhone: '+91 9483725426', // Tailoring & WhatsApp Support
  softwarePhone: '+91 9449254265',  // Software Development Support (Calls Only)
  email: 'a99manjunatha@gmail.com',
  hours: 'Monday – Saturday: 9:00 AM – 7:00 PM (Sunday Closed)',
  whatsappNumber: '919483725426', // International format for WhatsApp API
  privacyPolicyUrl: 'https://ais-pre-r6bpid7jtorpcaeobr6goh-335822337361.asia-southeast1.run.app/#privacy-policy',
  termsConditionsUrl: 'https://ais-pre-r6bpid7jtorpcaeobr6goh-335822337361.asia-southeast1.run.app/#terms-and-conditions',
  socials: {
    facebook: 'https://facebook.com/lnmenterprises',
    instagram: 'https://instagram.com/lnmenterprises',
    youtube: 'https://youtube.com/lnmenterprises',
    linkedin: 'https://linkedin.com/company/lnmenterprises'
  }
};

export const SERVICES: ServiceDetail[] = [
  // --- TAILORING CATEGORY ---
  {
    id: 't-womens-tailoring',
    title: "Women's Tailoring & Custom Stitching",
    category: 'tailoring',
    description: 'Expert, custom tailoring solutions matching your personal fit, ranging from designer blouses to traditional South Indian festive attire.',
    longDescription: 'Our tailoring studio features veteran designers who specialize in creating masterfully fitting custom garments. We combine years of traditional expertise with precise modern patterns to craft garments that flatter and make you stand out.',
    features: [
      'Perfect Fit Guarantee with physical trial facilities',
      'Extensive catalogs for contemporary and classic necklines',
      'Timely Delivery - Express stitching available within 24 hours',
      'Custom embellishment fittings and matching accessory creation'
    ],
    icon: 'Scissors',
    pricing: 'Starts from ₹300'
  },
  {
    id: 't-blouse-stitching',
    title: 'Designer Blouse Stitching',
    category: 'tailoring',
    description: 'Bespoke custom blouses, featuring designer patterns, halter necks, boat necks, backless designs, and specialized padding options.',
    longDescription: 'We specialize in matching standard and heavy designer blouses with any saree fabric. Our craft includes perfect padding alignment, premium linings, secure zip/hook installations, and structural comfort.',
    features: [
      'Tailored matching for Bridal Sarees, Kanjeevarams, and Silks',
      'Options: Padded, High-neck, Boat-neck, Backless, Princess Cut',
      'Durable reinforced stitching and premium interlining cloths',
      'Custom shoulder-drop lock-in straps'
    ],
    icon: 'Sparkles',
    pricing: 'Starts from ₹450'
  },
  {
    id: 't-dresses-stitching',
    title: 'Dress Stitching & Umbrella Frocks',
    category: 'tailoring',
    description: 'Custom Salwar suits, Anarkalis, Patialas, and high-volume umbrella cut dresses designed to swirl beautifully.',
    longDescription: 'From casual everyday cotton kurtis to premium georgette and silk umbrella flared gowns, we design comfortable fits using your fabrics or curated materials we supply.',
    features: [
      'Umbrella cut with wide circular flares (3 to 6 meters)',
      'Custom waist adjustments, invisible side zippers, and pockets',
      'Stitching for Anarkalis, Palazzo sets, and Patiala Kameez',
      'High-grade lining and overlocking standard on all seams'
    ],
    icon: 'Shirt',
    pricing: 'Starts from ₹600'
  },
  {
    id: 't-baby-kuchu',
    title: 'Baby Kuchu Saree Tassels & Beading',
    category: 'tailoring',
    description: 'Traditional and designer Baby Kuchu tassel work, tailored by hand for saree pallus using premium silk thread and beads.',
    longDescription: 'Kuchu beading adds absolute royalty to your Kanjeevaram and Banarasi sarees. Our artisans create beautiful, intricate knot designs from simple single-step styles to double/triple crochet layered tassels.',
    features: [
      'Handcrafted silk thread tassel designs (Simple, Ring, and Bridal models)',
      'High-grade gold, glass, and pearl bead integrations',
      'Extremely durable knotting that stays neat after dry cleans',
      'Customized color contrast pairings to match saree body colors'
    ],
    icon: 'Palette',
    pricing: 'Starts from ₹350'
  },
  {
    id: 't-fashion-alterations',
    title: 'Fashion Alterations & Customizations',
    category: 'tailoring',
    description: 'Precise modifications and repairs to fix tight waists, shorten hemlines, and restyle vintage outfits to contemporary trends.',
    longDescription: 'We rescue and resize garments. If you bought premium branded clothes online that do not fit correctly, or want to convert an old silk saree into a stylish modern long gown, we provide expert alterations.',
    features: [
      'Invisible alterations that preserve original hem styles',
      'Upcycling: Saree to Lehenga/Frock conversions',
      'Waist adjustments, sleeve attachments, and length corrections',
      'Stitching reinforcing on readymade dresses'
    ],
    icon: 'RotateCcw',
    pricing: 'Starts from ₹100'
  },

  // --- EMBROIDERY CATEGORY ---
  {
    id: 'e-computer-embroidery',
    title: 'Computer & Designer Embroidery',
    category: 'embroidery',
    description: 'Automated embroidery patterns executed on high-end computer embroidery machines with digital precision.',
    longDescription: 'Combining digital high-tech vectors with physical embroidery stitching permits flawless replication of intricate designs. Excellent for repeating structural patterns on necklines, sleeves, and bridal designs.',
    features: [
      'State-of-the-art multi-needle computerized embroidery machines',
      'Thousands of ready-designed floral, geometric, and traditional files',
      'Uniform precision down to fractions of a millimeter',
      'Metallic gold, silver, and multi-element color threads'
    ],
    icon: 'Cpu',
    pricing: 'Starts from ₹1,200/neckline'
  },
  {
    id: 'e-bridal-embroidery',
    title: 'Custom Bridal & Logo Embroidery',
    category: 'embroidery',
    description: 'Personalized monogramming, corporate corporate logo applications, and stellar bridal Maggam & computer designs.',
    longDescription: 'Represent your brand or shine on your wedding day. We do custom logo stitching for corporate uniforms and high-end heavy embroidery motifs combining computerized accuracy with physical hand finish.',
    features: [
      'Custom design digitization from PDF/JPEG drafts',
      'Heavy bridal back-neck patterns containing matching beadworks',
      'Uniform and sportswear custom logo embroidery',
      'Durable colors that do not bleed under laundry treatments'
    ],
    icon: 'Crown',
    pricing: 'Logo setup starts at ₹500'
  },

  // --- TECHNOLOGY CATEGORY ---
  {
    id: 's-mobile-apps',
    title: 'Android & iOS App Development',
    category: 'tech',
    description: 'Tailored native and hybrid smartphone applications published on Google Play Console and Apple App Store.',
    longDescription: 'We develop beautiful, lightning-fast mobile apps that streamline business workflows, power e-commerce sales, and represent your brand on mobile platforms. Specializing in high-performance Flutter and native layouts.',
    features: [
      'Fully responsive UI/UX designed with premium interactive effects',
      'Google Play Console compliance & expert store publication support',
      'Offline caching capabilities, localized language options, and payment gateway widgets',
      'Push Notifications, Firebase Auth, and real-time backend integrations'
    ],
    icon: 'Smartphone',
    pricing: 'Custom Quote Available'
  },
  {
    id: 's-website-dev',
    title: 'Web Application & E-Commerce Development',
    category: 'tech',
    description: 'High-speed business websites, enterprise web applications, and digital online stores with headless architectures.',
    longDescription: 'We build websites that generate sales. Combining robust modern stacks (React, Vite, Node, Tailwind CSS) allows us to design high-performance sites that score 95+ on Google Lighthouse and scale infinitely.',
    features: [
      'Modular SEO-optimized layouts to rank on Google search results',
      'Fully integrated digital payment checkouts, catalogs, and inventory trackers',
      'Mobile-first responsive grids that adapt perfectly to tabs and monitors',
      'Zero maintenance headless setups compatible with serverless hosting'
    ],
    icon: 'Globe',
    pricing: 'Custom Quote Available'
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  // Fashion Portfolio
  {
    id: 'p-fashion-1',
    title: 'Bridal Kanjeevaram Saree Blouse',
    category: 'tailoring',
    description: 'Stunning royal matching blouse with heavy beadwork additions and customized princess silhouette sizing.',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80',
    tags: ['Bridal', 'Silk Saree', 'Perfect Fit'],
    client: 'Suhasini Gowda',
    date: 'April 2026'
  },
  {
    id: 'p-fashion-2',
    title: 'Traditional Kasuti Silk Long Dress',
    category: 'tailoring',
    description: 'A custom floor-length fusion silk dress designed from heritage fabrics with baby-beaded highlights.',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80',
    tags: ['Anarkali', 'Silk', 'Traditional'],
    client: 'Ananya Hegde',
    date: 'March 2026'
  },
  {
    id: 'p-fashion-3',
    title: 'Umbrella Flare Lehenga Set',
    category: 'tailoring',
    description: 'Custom-stitched lehenga with premium satin layers and 5-meter broad concentric umbrella circular flare.',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80',
    tags: ['Lehenga', 'Umbrella Cut', 'Festive'],
    client: 'Rakshitha S.',
    date: 'May 2026'
  },

  // Embroidery Portfolio
  {
    id: 'p-emb-1',
    title: 'Peacock Motif Maggam Embroidery',
    category: 'embroidery',
    description: 'Computerized vector peacock design with manual beads, metallic zardosi cords, and silk embroidery threads.',
    image: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=600&q=80',
    tags: ['Peacock Motif', '电脑绣花', 'Maggam Work'],
    client: 'Divya Reddy',
    date: 'May 2026'
  },
  {
    id: 'p-emb-2',
    title: 'Corporate Logo Team Uniforms',
    category: 'embroidery',
    description: 'Computer-aided vector logo matching with continuous high-density stitching on premium breathable cotton polo shirts.',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80',
    tags: ['Corporate', 'Uniforms', 'High-Density Thread'],
    client: 'Bellary Tech Solutions',
    date: 'February 2026'
  },

  // Tech Portfolio
  {
    id: 'p-tech-1',
    title: "Sree Raghavendra E-Market App",
    category: 'tech',
    description: 'Interactive Android/iOS mobile shopping catalog built using Flutter and integrated with secure online UPI payments.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80',
    tags: ['Flutter App', 'Android', 'iOS', 'Razorpay UPI'],
    client: 'Sree Raghavendra Stores',
    date: 'May 2026'
  },
  {
    id: 'p-tech-2',
    title: 'Karnataka Smart Logistics Portal',
    category: 'tech',
    description: 'Modern enterprise dashboard for freight cargo management, tracking live geolocated vehicles and generating manifests.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
    tags: ['React JS', 'Tailwind', 'Real-time Stats', 'Express API'],
    client: 'KSL Transport Corp',
    date: 'January 2026'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Priya Shastry',
    role: 'Local Resident & Saree Collector (Ballari)',
    content: 'The custom computer embroidery work LNM Enterprises did on my wedding blouse was absolutely spectacular. They matched the designer pattern perfectly, and the fit of their tailoring is second to none!',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: 't-2',
    name: 'Megha Ramiah',
    role: 'Founder, Megha Ethnic Fashions',
    content: 'We outsource our computerized embroidery and umbrella dress bulk stitching to LNM. The finish is professional, consistent, and they always meet strict shipment deadlines. Highly recommended for business-to-consumer alterations too!',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: 't-3',
    name: 'Karthik S. Gowda',
    role: 'IT Director, Bellary Logistics Group',
    content: 'LNM Enterprises developed our Android app and logistics tracking website. Combining digital software expertise with a brick-and-mortar embroidery tailoring presence makes them a uniquely agile organization! They manage Play Store listings seamlessly.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80'
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Quality Workmanship',
    description: 'Double-needle structural seams, premium linings, and high-tensile threads paired with expert digital compilation.',
    iconName: 'Award',
    color: 'from-amber-400 to-yellow-600'
  },
  {
    title: 'Experienced Professionals',
    description: 'Our team comprises master cutters with 15+ years of experience in fashion, alongside senior certified computer software developers.',
    iconName: 'Users',
    color: 'from-blue-400 to-blue-600'
  },
  {
    title: 'Modern Technology',
    description: 'State-of-the-art Japanese computerized embroidery machinery cooperating with React, Flutter, and serverless architectures.',
    iconName: 'Cpu',
    color: 'from-purple-400 to-purple-600'
  },
  {
    title: 'Affordable & Transparent Price',
    description: 'We believe premium crafts should not break the bank. We offer free design catalogs and precise up-front quotes.',
    iconName: 'DollarSign',
    color: 'from-green-400 to-green-600'
  },
  {
    title: '100% Customer Satisfaction',
    description: 'Comprehensive alteration service if you are not fully satisfied with your garment fit or digital software parameters.',
    iconName: 'Smile',
    color: 'from-pink-400 to-pink-600'
  },
  {
    title: 'Reliable Support',
    description: 'An enduring presence in Ballari with continuous Google Maps tracking, responsive call numbers, and WhatsApp links.',
    iconName: 'ShieldAlert',
    color: 'from-cyan-400 to-cyan-600'
  }
];

export const STATS: StatItem[] = [
  {
    id: 's1',
    label: 'Projects Completed',
    value: 1250,
    suffix: '+',
    iconName: 'Briefcase'
  },
  {
    id: 's2',
    label: 'Happy Customers',
    value: 980,
    suffix: '+',
    iconName: 'Users'
  },
  {
    id: 's3',
    label: 'Years of Experience',
    value: 8,
    suffix: '+',
    iconName: 'Calendar'
  },
  {
    id: 's4',
    label: 'Services Delivered',
    value: 2000,
    suffix: '+',
    iconName: 'Activity'
  }
];

export const FAQS = [
  {
    question: 'Where is LNM Enterprises physically located and can I visit?',
    answer: 'Yes! We are located at Ballari, Karnataka, India – 583101. Our full physical tailoring, embroidery showroom, and technology workshop is open Monday through Saturday from 9:00 AM to 7:00 PM.'
  },
  {
    question: 'How do you handle clothing measurements for remote customers?',
    answer: 'You can either send a perfect-fitting sample garment to our Ballari address via courier, or we can assist you over a WhatsApp video call to take precise measurements yourself.'
  },
  {
    question: 'How long does computerized embroidery work take?',
    answer: 'Standard bridal saree embroidery or computer templates require 3-5 business days depending on design density. Express delivery can be requested within 48 hours for urgent requirements.'
  },
  {
    question: 'Can you help upload our corporate app to the Google Play Console?',
    answer: 'Absolutely! Our Technology Division handles end-to-end mobile app deployment, including complying with the latest Play Console organizational verification audits, privacy policy links, and user safety assessments.'
  }
];
