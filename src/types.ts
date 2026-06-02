/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Page = 'home' | 'about' | 'services' | 'portfolio' | 'contact' | 'privacy-policy' | 'terms-and-conditions';

export type ServiceCategory = 'tailoring' | 'embroidery' | 'tech';

export interface ServiceDetail {
  id: string;
  title: string;
  category: ServiceCategory;
  description: string;
  longDescription: string;
  features: string[];
  icon: string; // Dynamic rendering via lucide-react mapping
  pricing?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: ServiceCategory;
  description: string;
  image: string;
  tags: string[];
  client?: string;
  date?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatarUrl: string;
}

export interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix: string;
  iconName: string;
}

export interface ContactFormInput {
  name: string;
  email: string;
  phone: string;
  serviceRequired: string;
  message: string;
}
