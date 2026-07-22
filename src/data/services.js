import {
  LayoutTemplate,
  Rocket,
  ShoppingCart,
  RefreshCw,
  Wrench,
  TrendingUp,
} from 'lucide-react'

export const services = [
  {
    slug: 'business-websites',
    icon: LayoutTemplate,
    title: 'Business Websites',
    short: 'A credible, conversion-ready home for your business online.',
    description:
      'A custom-built website that positions your business as the obvious choice — built to earn trust in the first five seconds and turn visitors into enquiries.',
    benefits: [
      'Custom design tailored to your brand, not a recycled template',
      'Clear calls-to-action that guide visitors toward booking or buying',
      'Fast-loading pages built to keep visitors from bouncing',
      'Content structured around what your customers actually search for',
    ],
    priceLabel: 'From ₦250,000',
    priceNote: 'one-time, 3–4 week delivery',
  },
  {
    slug: 'landing-pages',
    icon: Rocket,
    title: 'Landing Pages',
    short: 'Focused, high-converting pages for campaigns and launches.',
    description:
      'A single-purpose page engineered around one goal — a sign-up, a booking, a sale — so every headline, image, and button is working toward the same outcome.',
    benefits: [
      'Built around one clear conversion goal',
      'Copy and layout tested against proven conversion patterns',
      'Ready in days, not weeks, for time-sensitive campaigns',
      'Fully trackable so you know exactly what is working',
    ],
    priceLabel: 'From ₦120,000',
    priceNote: 'one-time, 5–7 day delivery',
  },
  {
    slug: 'ecommerce-websites',
    icon: ShoppingCart,
    title: 'E-commerce Websites',
    short: 'Online stores designed to sell, not just display products.',
    description:
      'A storefront built to make buying effortless — from product discovery to checkout — so more browsers become buyers and more buyers come back.',
    benefits: [
      'Streamlined checkout that reduces cart abandonment',
      'Product pages designed to answer objections before they arise',
      'Secure payment and inventory integrations',
      'Built to scale as your catalogue grows',
    ],
    priceLabel: 'From ₦450,000',
    priceNote: 'one-time, 5–8 week delivery',
  },
  {
    slug: 'website-redesign',
    icon: RefreshCw,
    title: 'Website Redesign',
    short: 'A modern upgrade for a site that no longer represents you.',
    description:
      'We keep what works, rebuild what doesn\u2019t, and modernise your online presence without losing the search rankings and traffic you\u2019ve already earned.',
    benefits: [
      'Full audit of your current site\u2019s performance and gaps',
      'Preserved SEO equity through careful migration',
      'A brand-consistent visual refresh across every page',
      'Improved speed and mobile experience',
    ],
    priceLabel: 'From ₦180,000',
    priceNote: 'one-time, 3–5 week delivery',
  },
  {
    slug: 'website-maintenance',
    icon: Wrench,
    title: 'Website Maintenance',
    short: 'Ongoing care so your site stays fast, secure, and current.',
    description:
      'Your website keeps working while you run your business — updates, backups, monitoring, and small content changes handled for you every month.',
    benefits: [
      'Regular security updates and backups',
      'Uptime monitoring with fast response to issues',
      'Monthly content and image updates included',
      'A direct line to a real person when you need help',
    ],
    priceLabel: 'From ₦60,000/mo',
    priceNote: 'cancel anytime',
  },
  {
    slug: 'seo-optimization',
    icon: TrendingUp,
    title: 'SEO Optimization',
    short: 'Get found by the customers already searching for you.',
    description:
      'On-page and technical SEO that improves how search engines understand and rank your site, so organic traffic becomes a growing source of new business.',
    benefits: [
      'Keyword strategy built around local and industry search intent',
      'Technical SEO audit and fixes',
      'Optimised page structure, metadata, and content',
      'Monthly reporting so you can see the impact',
    ],
    priceLabel: 'From ₦60,000/mo',
    priceNote: '3-month minimum',
  },
]
