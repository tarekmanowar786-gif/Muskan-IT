
import { Product, PortfolioItem, Service } from './types';

export const WHATSAPP_NUMBER = '+8801400933707';
export const WHATSAPP_LINK = `https://wa.me/8801400933707`;

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Social Media Management Pro',
    description: 'Complete 30-day organic growth package for businesses.',
    price: 499,
    discountPrice: 350,
    image: 'https://picsum.photos/seed/smm/600/600',
    badge: 'Best Seller',
    rating: 5,
    category: 'Marketing'
  },
  {
    id: '2',
    name: 'SEO Power Booster',
    description: 'High-quality backlinks and keyword optimization.',
    price: 299,
    image: 'https://picsum.photos/seed/seo/600/600',
    badge: 'New',
    rating: 4.8,
    category: 'SEO'
  },
  {
    id: '3',
    name: 'Premium UI/UX Design Kit',
    description: 'Modern Figma assets for startup branding.',
    price: 150,
    discountPrice: 99,
    image: 'https://picsum.photos/seed/ui/600/600',
    badge: 'Discount',
    rating: 4.9,
    category: 'Design'
  },
  {
    id: '4',
    name: 'Email Marketing Automation',
    description: 'Custom drip campaigns and list segmentation.',
    price: 199,
    image: 'https://picsum.photos/seed/email/600/600',
    rating: 4.7,
    category: 'Marketing'
  },
  {
    id: '5',
    name: 'Facebook Ad Campaign',
    description: 'Targeted lead generation for high conversion.',
    price: 399,
    discountPrice: 299,
    image: 'https://picsum.photos/seed/fb/600/600',
    badge: 'Best Seller',
    rating: 5,
    category: 'Ads'
  },
  {
    id: '6',
    name: 'Google Ads Audit',
    description: 'Strategic analysis to reduce ad spend.',
    price: 99,
    image: 'https://picsum.photos/seed/google/600/600',
    rating: 4.6,
    category: 'Ads'
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 1,
    title: 'FinTech App Growth',
    category: 'Digital Marketing',
    image: 'https://picsum.photos/seed/p1/800/600',
    description: 'Increased active users by 400% in 6 months.'
  },
  {
    id: 2,
    title: 'Eco-Brand Launch',
    category: 'Branding',
    image: 'https://picsum.photos/seed/p2/800/600',
    description: 'Sustainable product launch campaign.'
  },
  {
    id: 3,
    title: 'E-commerce SEO',
    category: 'SEO',
    image: 'https://picsum.photos/seed/p3/800/600',
    description: 'Organic search ranking improvement.'
  }
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: 'Social Media Marketing',
    description: 'Engage your audience across all platforms with data-driven content.',
    icon: 'Megaphone'
  },
  {
    id: 2,
    title: 'Search Engine Optimization',
    description: 'Rank higher on Google and drive organic traffic to your store.',
    icon: 'Search'
  },
  {
    id: 3,
    title: 'PPC Management',
    description: 'Maximize ROI with precision-targeted Google and Facebook ads.',
    icon: 'Target'
  }
];
