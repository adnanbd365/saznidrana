
import React from 'react';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Search, 
  BarChart3, 
  Target, 
  TrendingUp, 
  CheckCircle2, 
  Code2, 
  Share2,
  PieChart,
  ShoppingBag,
  Zap
} from 'lucide-react';

export const SERVICES = [
  {
    title: "Facebook & Instagram Marketing",
    description: "End-to-end campaign management, audience targeting, and creative optimization for Meta platforms.",
    icon: <Facebook className="w-6 h-6" />
  },
  {
    title: "Google Ads Management",
    description: "Strategic Search, Display, and Video ads to drive high-quality traffic and conversions.",
    icon: <Search className="w-6 h-6" />
  },
  {
    title: "Twitter (X) Marketing",
    description: "Leveraging X's unique ecosystem for real-time engagement and brand awareness.",
    icon: <Twitter className="w-6 h-6" />
  },
  {
    title: "Technical Tracking (Pixel & CAPI)",
    description: "Advanced setup of Facebook Pixel, Conversion API, and GTM for accurate data attribution.",
    icon: <Code2 className="w-6 h-6" />
  },
  {
    title: "E-Commerce Growth",
    description: "Full-funnel marketing strategies designed specifically for Shopify and WooCommerce brands.",
    icon: <ShoppingBag className="w-6 h-6" />
  },
  {
    title: "Search Engine Optimization",
    description: "Technical SEO and content strategies to rank your business at the top of organic search.",
    icon: <TrendingUp className="w-6 h-6" />
  }
];

export const SKILLS = [
  "Google Tag Manager",
  "Google Ads Manager",
  "Google Analytics 4",
  "Facebook Ads Manager",
  "Conversion API (CAPI)",
  "Social Media Strategy",
  "Performance Marketing",
  "Retargeting Campaigns",
  "Keyword Research",
  "A/B Testing"
];

export const WHY_CHOOSE_ME = [
  {
    title: "5+ Years Experience",
    description: "Proven track record across multiple industries and markets.",
    icon: <CheckCircle2 className="w-5 h-5 text-blue-500" />
  },
  {
    title: "Result-Oriented",
    description: "Focus on ROAS, CPA, and ROI, not just vanity metrics.",
    icon: <Target className="w-5 h-5 text-blue-500" />
  },
  {
    title: "100% Satisfaction",
    description: "Client happiness is my primary metric for success.",
    icon: <Zap className="w-5 h-5 text-blue-500" />
  },
  {
    title: "Transparent Communication",
    description: "Detailed reporting and regular updates on every project.",
    icon: <Share2 className="w-5 h-5 text-blue-500" />
  }
];
