import heroAuto1 from '../assets/images/hero-auto-1.jpg';
import heroAuto2 from '../assets/images/hero-auto-2.jpg';
import heroAuto3 from '../assets/images/hero-auto-3.jpg';
import introAutoCoke from '../assets/images/intro-auto-coke.jpg';
import serviceAutoBranding from '../assets/images/service-auto-branding.jpg';
import serviceSidePanel from '../assets/images/service-side-panel.jpg';
import serviceRearPanel from '../assets/images/service-rear-panel.jpg';
import serviceCampaignPlanning from '../assets/images/service-campaign-planning.jpg';
import galleryEducation from '../assets/images/gallery-education.jpg';
import galleryFmcg from '../assets/images/gallery-fmcg.jpg';
import galleryEcommerce from '../assets/images/gallery-ecommerce.jpg';
import galleryRadio from '../assets/images/gallery-radio.jpg';
import galleryBrand from '../assets/images/gallery-brand.jpg';
import experienceAutoSbi from '../assets/images/experience-auto-sbi.jpg';

import logoRnr from '../assets/logos/logo-RNR.png';
import fizikemLogo from '../assets/logos/fizikem.svg';
import gsCaltexLogo from '../assets/logos/gs-caltex.svg';
import havellsLogo from '../assets/logos/havells.svg';
import medquestLogo from '../assets/logos/medquest.svg';
import unacademyLogo from '../assets/logos/unacademy.svg';

export const companyData = {
  name: 'RNR ADS',
  tagline: 'OUTDOOR ADVERTISING | HYDERABAD',
  description: 'Every day, as our ads travel around the city, they promote and expose your products and services. We help grow your brand by offering tailored solutions with high-visibility outdoor media.',
  phone: '+91 81432 52345',
  phoneRaw: '+918143252345',
  email: 'mrads.hyd@gmail.com',
  address: '413, 4th Floor, Kubera Towers, Narayanguda, Hyderabad - 29',
  hours: 'Mon - Sat 9:00 AM - 6:00 PM',
  whatsappUrl: 'https://wa.me/918143252345?text=Hello%20RNR%20Ads,%20I%20am%20interested%20in%20Auto%20Rickshaw%20Advertising%20in%20Hyderabad.',
  socials: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    youtube: 'https://youtube.com',
    linkedin: 'https://linkedin.com'
  },
  logos: {
    main: logoRnr,
    white: logoRnr
  }
};

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Auto Ads', path: '/auto-ads' },
  { label: 'Auto Branding', path: '/auto-branding' },
  { label: 'Clients', path: '/clients' },
  { label: 'Contact Us', path: '/contact' }
];

export const heroStats = [
  {
    icon: 'car',
    value: '5,000+',
    label: 'Advertising Vehicles'
  },
  {
    icon: 'map-pin',
    value: 'Hyderabad',
    label: 'City Coverage'
  },
  {
    icon: 'shield-check',
    value: '15+',
    label: 'Years Experience'
  }
];

export const heroSlides = [
  {
    id: 1,
    eyebrow: 'AUTO RICKSHAW ADVERTISING • HYDERABAD',
    headingStart: 'MAKE YOUR BRAND',
    headingHighlight: 'IMPOSSIBLE TO MISS.',
    description: 'Reach thousands of customers every day with powerful auto rickshaw advertising across Hyderabad.',
    image: heroAuto1,
    alt: 'Auto Rickshaw Advertising Hyderabad Bright Base Campaign'
  },
  {
    id: 2,
    eyebrow: 'TRANSIT MEDIA NETWORK • HYDERABAD',
    headingStart: 'YOUR BRAND.',
    headingHighlight: 'ON THE MOVE.',
    description: 'Turn everyday auto rickshaws into high-impact moving billboards across Hyderabad.',
    image: heroAuto2,
    alt: 'Rear Auto Rickshaw Advertising in Hitec City Hyderabad'
  },
  {
    id: 3,
    eyebrow: 'MAXIMUM VISIBILITY & REACH',
    headingStart: 'REAL BRANDS.',
    headingHighlight: 'REAL IMPACT.',
    description: 'Reach customers where they live, work and travel with strategic auto advertising.',
    image: heroAuto3,
    alt: 'Fleet of Branded Auto Rickshaws in Hyderabad'
  }
];

export const introData = {
  eyebrow: 'WELCOME TO RNR ADS',
  headingStart: 'YOUR BRAND.',
  headingHighlight: 'ON THE MOVE.',
  description: 'RNR Ads is a fast-growing outdoor advertising agency in Hyderabad, focused on auto rickshaw advertising. We help brands connect with thousands of potential customers across the city through high-visibility transit media.',
  image: introAutoCoke,
  alt: 'Coca-Cola Auto Rickshaw Advertising Hyderabad',
  floatingStat: {
    value: '5,000+',
    label1: 'Advertising Vehicles',
    label2: 'Across Hyderabad'
  }
};

export const servicesData = [
  {
    number: '01',
    title: 'Auto Branding',
    description: 'Turn everyday auto rickshaws into moving billboards that reach customers throughout Hyderabad.',
    image: serviceAutoBranding,
    alt: 'Auto Branding Solutions'
  },
  {
    number: '02',
    title: 'Side Panel Ads',
    description: 'High-impact side panel advertising designed to showcase your brand in busy areas.',
    image: serviceSidePanel,
    alt: 'Side Panel Advertising'
  },
  {
    number: '03',
    title: 'Rear Panel Ads',
    description: 'Eye-catching rear panel advertising for strong brand recall across traffic routes.',
    image: serviceRearPanel,
    alt: 'Rear Panel Advertising'
  },
  {
    number: '04',
    title: 'Campaign Planning',
    description: 'End-to-end campaign management from creative planning to execution and monitoring.',
    image: serviceCampaignPlanning,
    alt: 'Auto Advertising Campaign Planning'
  }
];

export const featuredGallery = [
  {
    id: 1,
    title: 'Education',
    category: 'Education Campaign',
    image: galleryEducation,
    alt: 'Education Auto Rickshaw Advertising'
  },
  {
    id: 2,
    title: 'FMCG',
    category: 'FMCG Brand Campaign',
    image: galleryFmcg,
    alt: 'FMCG Auto Advertising Freedom Oil'
  },
  {
    id: 3,
    title: 'E-Commerce',
    category: 'E-Commerce Retail',
    image: galleryEcommerce,
    alt: 'E-Commerce Meesho Auto Campaign'
  },
  {
    id: 4,
    title: 'Radio',
    category: 'Media & Entertainment',
    image: galleryRadio,
    alt: '93.5 Red FM Radio Auto Campaign'
  },
  {
    id: 5,
    title: 'Brand Campaign',
    category: 'Corporate Brand Campaign',
    image: galleryBrand,
    alt: 'Brand Motion Visibility Auto Ad'
  }
];

export const benefitsData = [
  {
    icon: 'users',
    title: 'Unmatched Reach',
    description: 'Over 5,000 vehicles provide citywide visibility across every corner of Hyderabad.'
  },
  {
    icon: 'eye',
    title: 'High Visibility',
    description: 'Reach customers in busy streets, junctions, and high-traffic commercial zones.'
  },
  {
    icon: 'wallet',
    title: 'Cost Effective',
    description: 'Maximum brand exposure and highest impressions within your advertising budget.'
  },
  {
    icon: 'award',
    title: 'Proven Results',
    description: 'Innovative campaigns designed to deliver measurable brand recall and outcomes.'
  }
];

export const experienceData = {
  eyebrowYears: '15+ YEARS',
  headingSuffix: 'OF MAKING BRANDS VISIBLE.',
  description: "With 15+ years in Hyderabad's auto advertising, RNR Ads delivers cutting-edge, cost-effective solutions to boost your brand's visibility and reputation across all communities.",
  image: experienceAutoSbi,
  alt: '15+ Years Auto Rickshaw Advertising Experience SBI Campaign Hyderabad'
};

export const clientsData = [
  { name: 'FizikEm', logo: fizikemLogo },
  { name: 'GS Caltex', logo: gsCaltexLogo },
  { name: 'Havells', logo: havellsLogo },
  { name: 'MedQuest Diagnostics', logo: medquestLogo },
  { name: 'Unacademy', logo: unacademyLogo }
];

export const advertisingOptions = [
  'Auto Branding',
  'Side Panel Advertising',
  'Rear Panel Advertising',
  'Full Auto Branding',
  'Campaign Planning'
];

/* ==========================================================================
   EXPANDED DATA FOR SUBPAGES (About, Auto Ads, Auto Branding, Clients, Contact)
   ========================================================================== */

export const aboutPageData = {
  mission: 'To empower businesses of all sizes with hyper-local, high-frequency transit advertising that transforms ordinary street commutes into powerful brand engagement across Hyderabad.',
  vision: 'To be South India’s most trusted, technologically advanced, and result-oriented outdoor transit advertising network, driving unmatched brand recall.',
  values: [
    {
      title: 'Citywide Network',
      desc: 'Direct tie-ups with 5,000+ auto drivers spanning East, West, North, and South Hyderabad zones.'
    },
    {
      title: 'End-to-End Execution',
      desc: 'In-house high-definition solvent printing, professional vinyl installation, and continuous maintenance.'
    },
    {
      title: 'Geo-Verification',
      desc: '100% photographic proof and route auditing so you know exactly where your fleet is driving impressions.'
    },
    {
      title: 'ROI Focused',
      desc: 'Customized route mapping to target your exact demographic at a fraction of billboard costs.'
    }
  ],
  milestones: [
    { year: '2011', title: 'Founded in Hyderabad', desc: 'Started with 100 auto rickshaws focusing on educational campaigns in central Hyderabad.' },
    { year: '2015', title: 'Expanded to 1,500 Autos', desc: 'Introduced high-grade laminated vinyl for extended 90-day monsoon campaigns.' },
    { year: '2019', title: 'Corporate Client Expansion', desc: 'Onboarded national giants like Havells, GS Caltex, Unacademy, and SBI.' },
    { year: '2026', title: '5,000+ Active Fleet Network', desc: 'Now delivering over 25 Million daily impressions across Greater Hyderabad.' }
  ]
};

export const autoAdsFormats = [
  {
    id: 'rear-hood',
    name: 'Rear Hood Advertising',
    dimensions: '24" x 18" (Standard) / 30" x 20" (Large)',
    visibility: 'High eye-level visibility for following cars, two-wheelers, and pedestrians in traffic.',
    bestFor: 'Brand awareness, call-to-actions, phone numbers, app downloads, admissions.',
    image: serviceRearPanel
  },
  {
    id: 'side-panel',
    name: 'Side Panel Advertising',
    dimensions: '36" x 12" (Left & Right Sides)',
    visibility: 'Side angle visibility for street pedestrians, market shoppers, and sidewalk commuters.',
    bestFor: 'Retail store openings, FMCG product launches, local clinic announcements.',
    image: serviceSidePanel
  },
  {
    id: 'full-hood',
    name: 'Full Auto Hood Wrap',
    dimensions: 'Complete 3-sided rear & side wrap coverage',
    visibility: 'Maximum 360-degree impact turning the entire vehicle into a branded moving capsule.',
    bestFor: 'High-budget corporate campaigns, movie promotions, flagship brand launches.',
    image: serviceAutoBranding
  },
  {
    id: 'driver-back',
    name: 'Inside Driver Back Panel',
    dimensions: '20" x 10" (Passenger facing)',
    visibility: 'Captive audience for 15–30 minute ride duration with 100% focused passenger attention.',
    bestFor: 'QR codes, discounts, OTT subscriptions, financial services, app installations.',
    image: serviceCampaignPlanning
  }
];

export const hyderabadCorridors = [
  { zone: 'IT & Financial District', areas: 'Hitec City, Gachibowli, Madhapur, Kondapur, Financial District' },
  { zone: 'Central Commercial Hub', areas: 'Ameerpet, Punjagutta, Somajiguda, Banjara Hills, Jubilee Hills' },
  { zone: 'Educational & Health Corridors', areas: 'Narayanguda, Himayatnagar, Nampally, Kacheguda, Abids' },
  { zone: 'North Hyderabad Belt', areas: 'Secunderabad, Begumpet, Kukatpally, Miyapur, Kompally' },
  { zone: 'South & Heritage Hubs', areas: 'Charminar, Dilsukhnagar, LB Nagar, Malakpet, Santosh Nagar' }
];

export const autoBrandingPackages = [
  {
    name: 'Starter Blitz',
    fleet: '50 Autos',
    reach: '2.5M+ Monthly Impressions',
    duration: '30 Days Minimum',
    popular: false,
    features: [
      'Targeted in 2 Key Hyderabad Zones',
      'Rear Hood High-Gloss Vinyl',
      'High-Resolution Solvent Print',
      '100% Photographic Proof of Execution',
      'Mid-campaign damage replacement'
    ]
  },
  {
    name: 'City Dominance',
    fleet: '250 Autos',
    reach: '12.5M+ Monthly Impressions',
    duration: '30 - 90 Days',
    popular: true,
    features: [
      'Comprehensive Greater Hyderabad Coverage',
      'Rear Hood + Side Panel Advertising',
      'UV Protected All-Weather Lamination',
      'Weekly Geo-Route Audit Reports',
      'Priority Vinyl Replacement Guarantee',
      'Dedicated Campaign Manager'
    ]
  },
  {
    name: 'Mega Impact Fleet',
    fleet: '500+ Autos',
    reach: '30M+ Monthly Impressions',
    duration: 'Quarterly / Annual',
    popular: false,
    features: [
      'Full 360 Auto Wraps + Inside Panels',
      'All 5 Hyderabad Zones Covered Simultaneously',
      'Cast Vinyl 1-Year Fade Resistance',
      'Live GPS fleet route reporting dashboard',
      'Free creative design & campaign adaptation',
      'VIP Executive account support'
    ]
  }
];

export const clientTestimonials = [
  {
    quote: "RNR Ads executed our Hyderabad admissions campaign across 200 autos seamlessly. The inquiry calls doubled within the first 10 days of deployment. Their photographic proof system gives complete peace of mind.",
    name: "Dr. K. Srinivas Rao",
    role: "Director of Admissions",
    company: "Bright Base Group of Institutions"
  },
  {
    quote: "Auto rickshaw advertising with RNR Ads has been the most cost-effective outdoor media for our FMCG edible oil promotions. You see our brand at every major traffic signal and residential colony in Hyderabad.",
    name: "Rameshwar Reddy",
    role: "Marketing Head",
    company: "Freedom Refined Sunflower Oil"
  },
  {
    quote: "For our hyper-local grocery and fashion campaign in Hyderabad, RNR Ads helped us dominate key pin codes with precision fleet routing. Exceptional professionalism and punctual installation.",
    name: "Pooja Varma",
    role: "Regional Growth Lead",
    company: "Meesho"
  }
];

export const contactFaqs = [
  {
    q: 'How many auto rickshaws should I book for an effective campaign?',
    a: 'For local area targeting (e.g. Kukatpally or Dilsukhnagar), 50 to 100 autos deliver strong frequency. For citywide Hyderabad dominance, 200 to 500 autos ensure continuous round-the-clock visibility.'
  },
  {
    q: 'How do you ensure the ads stay clean and in good condition?',
    a: 'We print on heavy-duty, outdoor-grade vinyl with UV protective lamination. Our field maintenance team inspects vehicles weekly and replaces damaged vinyl free of charge during the campaign period.'
  },
  {
    q: 'How do I know the autos are actually running in my target areas?',
    a: 'Before campaign kickoff, we provide complete vehicle registration numbers, driver agreements, and high-resolution photo proof of every branded vehicle with timestamp & location tags.'
  },
  {
    q: 'What is the lead time required from design approval to campaign launch?',
    a: 'Once your creative artwork is approved, our in-house printing and professional wrapping teams can roll out up to 100 branded autos in just 48 to 72 hours.'
  }
];
