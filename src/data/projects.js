import harborlineImg from '../assets/img/harborline.png'
import teestoneImg from '../assets/img/teestone.png'
import oliveImg from '../assets/img/oliveandash.png'
import clearviewImg from '../assets/img/clearview.png'
import bodylineImg from '../assets/img/bodyline.png'
import kindredImg from '../assets/img/kindred.png'
// import ridgeviewImg from '../assets/projects/ridgeview-realty.png'
// import brightPathImg from '../assets/projects/bright-path-academy.png'




export const categories = ['All', 'Business', 'Hotel', 'Restaurant', 'Healthcare', 'Gym', 'E-commerce']

export const projects = [
  {
    slug: 'harborline-legal',
    name: 'Harborline Legal',
    industry: 'Business',
    palette: 'blue',
    description: 'A corporate law firm site that replaced a dated brochure page with a credibility-first experience.',
    challenge: 'Harborline\u2019s old site looked outdated and gave prospective clients no reason to trust the firm over larger competitors.',
    solution: 'We designed a calm, editorial layout that foregrounds case results, attorney credentials, and a frictionless consultation form.',
    results: '+64% consultation requests in the first quarter, 2.1x average time on site.',
    tech: ['React', 'Tailwind CSS', 'Sanity CMS'],
    year: '2025',
    url: 'https://harborlinelegal.netlify.app/',
    image: harborlineImg
  },
  {
    slug: 'Teestone',
    name: 'Teestone Hotels and Apartments',
    industry: 'Hotel',
    palette: 'navy',
    description: 'A boutique hotel booking experience built to convert lookers into direct bookings.',
    challenge: 'The Teestone relied almost entirely on OTA listings, losing 18% of booking value to commission fees.',
    solution: 'A visually immersive site with a fast, transparent direct-booking flow and dynamic rate comparison against OTAs.',
    results: 'Direct bookings up 41% year over year, OTA commission spend down $86k annually.',
    tech: ['React', 'Framer Motion', 'Stripe'],
    year: '2025',
    url: 'https://teestone.netlify.app/',
    image: teestoneImg
  },
  {
    slug: 'olive-and-ash',
    name: 'Olive & Ash',
    industry: 'Restaurant',
    palette: 'amber',
    description: 'A warm, appetite-driven site for a farm-to-table restaurant group with three locations.',
    challenge: 'Menus and hours were scattered across four different platforms, confusing guests and hurting local search.',
    solution: 'One unified site with location-aware menus, live reservation availability, and mouth-watering photography direction.',
    results: 'Online reservations up 58%, local search visibility more than doubled.',
    tech: ['React', 'Tailwind CSS', 'OpenTable API'],
    year: '2024',
    url: 'https://oliveandash.netlify.app/',
    image: oliveImg
  },
  {
    slug: 'clearview-health',
    name: 'Clearview Health Partners',
    industry: 'Healthcare',
    palette: 'teal',
    description: 'A multi-provider healthcare site focused on making it effortless to find the right specialist and book.',
    challenge: 'Patients struggled to find the right provider, leading to high call-center volume and abandoned bookings.',
    solution: 'A guided provider-matching flow, plain-language service pages, and integrated online scheduling.',
    results: 'Online bookings up 73%, inbound call volume down 30%.',
    tech: ['React', 'React Router', 'Cal.com'],
    year: '2025',
    url: 'https://clearviewhealthpartners.netlify.app/',
    image: clearviewImg
  },
  {
    slug: 'bodyline-gym',
    name: 'Bodyline Gym',
    industry: 'Gym',
    palette: 'orange',
    description: 'A high-energy gym website built to sell memberships before a visitor ever walks in the door.',
    challenge: 'Bodyline had strong word-of-mouth but a site that undersold the facility and made trial sign-ups hard to find.',
    solution: 'A bold, motion-driven design with a persistent trial-pass CTA and a transparent membership comparison table.',
    results: 'Trial sign-ups up 96%, membership conversion rate up 22%.',
    tech: ['React', 'Framer Motion', 'Lucide Icons'],
    year: '2024',
    url: 'https://bodylinegymx.netlify.app/',
    image: bodylineImg
  },
  {
    slug: 'kindred-market',
    name: 'Kindred Market',
    industry: 'E-commerce',
    palette: 'blue',
    description: 'A direct-to-consumer skincare storefront rebuilt for speed, trust, and repeat purchases.',
    challenge: 'A slow, generic storefront theme was costing Kindred sales, especially on mobile.',
    solution: 'A custom storefront with sub-second load times, trust-building product storytelling, and a streamlined one-page checkout.',
    results: 'Conversion rate up 3.4x, mobile checkout completion up 47%.',
    tech: ['React', 'Shopify Hydrogen', 'Tailwind CSS'],
    year: '2025',
    url: 'https://kindredmarket.netlify.app/',
    image: kindredImg
  },
  {
    slug: 'ridgeview-realty',
    name: 'Ridgeview Realty Group',
    industry: 'Business',
    palette: 'navy',
    description: 'A real estate group site built around neighborhood storytelling and effortless listing search.',
    challenge: 'Listings were buried behind a clunky MLS widget, and the brand looked interchangeable with every other agency.',
    solution: 'A custom listing search experience paired with neighborhood guides that build local authority.',
    results: 'Listing inquiries up 52%, average session duration up 2.3x.',
    tech: ['React', 'Mapbox', 'Tailwind CSS'],
    year: '2024',
  },
  {
    slug: 'bright-path-academy',
    name: 'Bright Path Academy',
    industry: 'Business',
    palette: 'teal',
    description: 'An admissions-focused website for a growing independent school.',
    challenge: 'Parents couldn\u2019t find admissions information quickly, and the enquiry form was buried three clicks deep.',
    solution: 'A parent-first information architecture with a persistent enquiry CTA and a virtual campus tour.',
    results: 'Admissions enquiries up 38% during the following enrollment cycle.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    year: '2024',
  },
]

export const featuredSlugs = [
  'harborline-legal',
  'Teestone',
  'olive-and-ash',
  'clearview-health',
  'bodyline-gym',
  'kindred-market',
]
