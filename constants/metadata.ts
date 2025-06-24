import type { Metadata } from "next"

// Environment-specific base URL
const getBaseUrl = () => {
  if (process.env.NODE_ENV === 'production') {
    return 'https://nowai.healthcare'
  }
  return process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
}

// Base metadata configuration with improvements
const baseMetadata: Partial<Metadata> = {
  metadataBase: new URL(getBaseUrl()),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_VERIFICATION_CODE,
    yandex: process.env.YANDEX_VERIFICATION_CODE,
    yahoo: process.env.YAHOO_VERIFICATION_CODE,
  },
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: 'Healthcare Technology',
}

// Improved homepage metadata
export const homeMetadata: Metadata = {
  ...baseMetadata,
  title: {
    default: "N:OW AI - Healthcare AI Automation Solutions | Transform Your Practice",
    template: "%s | N:OW AI"
  },
  description:
    "Transform your healthcare practice with AI-powered automation solutions. Reduce administrative burden by 70%, improve patient care, and increase efficiency with N:OW AI's cutting-edge healthcare technology.",
  keywords: [
    "healthcare AI",
    "medical automation",
    "healthcare technology",
    "AI for doctors",
    "medical practice automation",
    "healthcare efficiency",
    "patient care AI",
    "medical AI solutions",
    "healthcare workflow automation",
    "clinical AI tools",
    "EHR automation",
    "medical billing AI",
    "patient scheduling AI",
    "clinical documentation AI"
  ],
  icons: {
    icon: "/favicons/favicon.ico",
    apple: "/favicons/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: getBaseUrl(),
    siteName: "N:OW AI",
    title: "N:OW AI - Healthcare AI Automation Solutions",
    description:
      "Transform your healthcare practice with AI-powered automation solutions. Reduce administrative burden by 70% and improve patient care.",
    images: [
      {
        url: "/main-hero-image.png",
        width: 1200,
        height: 630,
        alt: "N:OW AI Healthcare Automation Platform Dashboard",
      },
      {
        url: "/main-hero-image.png",
        width: 1200,
        height: 1200,
        alt: "N:OW AI Healthcare Automation Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nowai_healthcare",
    creator: "@nowai_healthcare",
    title: "N:OW AI - Healthcare AI Automation Solutions",
    description: "Transform your healthcare practice with AI-powered automation solutions. Reduce admin burden by 70%.",
    images: [
      {
        url: "/main-hero-image.png",
        alt: "N:OW AI Healthcare Automation Platform",
      },
    ],
  },
  alternates: {
    canonical: getBaseUrl(),
    languages: {
      'en-US': getBaseUrl(),
      'x-default': getBaseUrl(),
    },
  },
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'N:OW AI',
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': '#0066cc',
    'theme-color': '#0066cc',
  },
}

// About page metadata with improvements
export const aboutMetadata: Metadata = {
  ...baseMetadata,
  title: "About N:OW AI - Leading Healthcare AI Innovation Since 2023 | Our Story",
  description:
    "Learn about N:OW AI's mission to revolutionize healthcare through AI automation. Meet our team of 50+ healthcare and AI experts dedicated to improving patient outcomes and reducing administrative burden by 70%.",
  keywords: [
    "about N:OW AI",
    "healthcare AI company",
    "medical AI team",
    "healthcare innovation",
    "AI healthcare mission",
    "medical technology company",
    "healthcare automation experts",
    "AI in medicine",
    "healthcare transformation",
    "medical AI leadership",
    "healthcare AI founders",
    "medical technology team"
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${getBaseUrl()}/about`,
    siteName: "N:OW AI",
    title: "About N:OW AI - Leading Healthcare AI Innovation",
    description: "Learn about our mission to revolutionize healthcare through AI automation and meet our expert team of 50+ healthcare professionals.",
    images: [
      {
        url: "/main-hero-image.png",
        width: 1200,
        height: 630,
        alt: "N:OW AI Team of Healthcare AI Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nowai_healthcare",
    creator: "@nowai_healthcare",
    title: "About N:OW AI - Leading Healthcare AI Innovation",
    description: "Learn about our mission to revolutionize healthcare through AI automation.",
    images: [
      {
        url: "/main-hero-image.png",
        alt: "N:OW AI Healthcare AI Team",
      },
    ],
  },
  alternates: {
    canonical: `${getBaseUrl()}/about`,
  },
}

// Pricing page with enhanced conversion-focused metadata
export const pricingMetadata: Metadata = {
  ...baseMetadata,
  title: "N:OW AI Pricing - From $499/month | ROI Calculator & Free Trial",
  description:
    "Discover N:OW AI's flexible pricing plans starting at $499/month. Choose from Starter, Professional, or Enterprise plans. 14-day free trial available. Calculate your ROI - most practices save $50,000+ annually.",
  keywords: [
    "healthcare AI pricing",
    "medical automation cost",
    "AI healthcare plans",
    "healthcare technology pricing",
    "medical AI subscription",
    "healthcare automation cost",
    "AI for doctors pricing",
    "medical practice AI cost",
    "healthcare efficiency pricing",
    "clinical AI pricing",
    "medical AI ROI",
    "healthcare automation savings"
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${getBaseUrl()}/pricing`,
    siteName: "N:OW AI",
    title: "N:OW AI Pricing - Affordable Healthcare AI Solutions",
    description: "Flexible pricing plans starting at $499/month. 14-day free trial with ROI calculator. Most practices save $50,000+ annually.",
    images: [
      {
        url: "/main-hero-image.png",
        width: 1200,
        height: 630,
        alt: "N:OW AI Pricing Plans Comparison",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nowai_healthcare",
    creator: "@nowai_healthcare",
    title: "N:OW AI Pricing - From $499/month with Free Trial",
    description: "Flexible pricing plans with 14-day free trial. Calculate your ROI today.",
    images: [
      {
        url: "/main-hero-image.png",
        alt: "N:OW AI Affordable Pricing Plans",
      },
    ],
  },
  alternates: {
    canonical: `${getBaseUrl()}/pricing`,
  },
}

// Enhanced demo page metadata
export const demoMetadata: Metadata = {
  ...baseMetadata,
  title: "N:OW AI Interactive Demo - See 70% Admin Reduction | Free 15-Min Demo",
  description:
    "Experience N:OW AI's healthcare automation platform with our interactive demo. See real-time AI scheduling, documentation, and billing automation. Book a personalized 15-minute demo today.",
  keywords: [
    "healthcare AI demo",
    "medical automation demo",
    "AI healthcare preview",
    "healthcare technology demo",
    "medical AI trial",
    "healthcare automation preview",
    "AI for doctors demo",
    "medical practice automation demo",
    "healthcare workflow demo",
    "clinical AI demonstration",
    "interactive healthcare demo",
    "live AI demo"
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${getBaseUrl()}/demo`,
    siteName: "N:OW AI",
    title: "N:OW AI Demo - See Healthcare AI Automation in Action",
    description:
      "Experience our healthcare automation platform with an interactive demo. See 70% admin reduction in real-time.",
    images: [
      {
        url: "/main-hero-image.png",
        width: 1200,
        height: 630,
        alt: "N:OW AI Platform Interactive Demo Screenshot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nowai_healthcare",
    creator: "@nowai_healthcare",
    title: "N:OW AI Demo - See Healthcare AI in Action",
    description: "Experience our healthcare automation platform with an interactive demo.",
    images: [
      {
        url: "/main-hero-image.png",
        alt: "N:OW AI Platform Demo",
      },
    ],
  },
  alternates: {
    canonical: `${getBaseUrl()}/demo`,
  },
}

// Improved blog post metadata generator with better SEO
export const generateBlogPostMetadata = (
  title: string,
  description: string,
  slug: string,
  publishDate: string,
  author: string,
  tags: string[],
  readingTime: string,
  featuredImage?: string,
  lastModified?: string,
): Metadata => ({
  ...baseMetadata,
  title: `${title} | N:OW AI Healthcare Blog`,
  description: description.length > 160 ? `${description.substring(0, 157)}...` : description,
  keywords: [
    ...tags,
    "healthcare AI",
    "medical automation",
    "healthcare technology",
    "AI in medicine",
    "healthcare innovation",
  ],
  authors: [{ name: author }],
  creator: author,
  publisher: "N:OW AI",
  openGraph: {
    type: "article",
    locale: "en_US",
    url: `${getBaseUrl()}/blog/${slug}`,
    siteName: "N:OW AI",
    title,
    description,
    publishedTime: publishDate,
    modifiedTime: lastModified || publishDate,
    authors: [author],
    tags: tags,
    section: "Healthcare AI",
    images: [
      {
        url: featuredImage || `/images/blog/${slug}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${title} - N:OW AI Healthcare Blog`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nowai_healthcare",
    creator: "@nowai_healthcare",
    title: title.length > 70 ? `${title.substring(0, 67)}...` : title,
    description: description.length > 200 ? `${description.substring(0, 197)}...` : description,
    images: [
      {
        url: featuredImage || `/images/blog/${slug}/twitter-image.jpg`,
        alt: title,
      },
    ],
  },
  alternates: {
    canonical: `${getBaseUrl()}/blog/${slug}`,
  },
  other: {
    "article:reading_time": readingTime,
    "article:author": author,
    "article:published_time": publishDate,
    "article:modified_time": lastModified || publishDate,
    "article:section": "Healthcare AI",
    "article:tag": tags.join(", "),
  },
})

// Enhanced Schema.org structured data
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "SoftwareCompany"],
  name: "N:OW AI",
  legalName: "N:OW AI Healthcare Solutions Inc.",
  description: "Healthcare AI automation solutions for modern medical practices. Reduce administrative burden by 70% with our AI-powered platform.",
  url: getBaseUrl(),
  logo: {
    "@type": "ImageObject",
    url: `${getBaseUrl()}/images/logo.png`,
    width: 400,
    height: 100,
    caption: "N:OW AI Logo"
  },
  image: `${getBaseUrl()}/images/logo.png`,
  foundingDate: "2023",
  founders: [
    {
      "@type": "Person",
      name: "Dr. Sarah Johnson",
      jobTitle: "CEO & Co-Founder"
    }
  ],
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    value: 50
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+1-555-NOW-AI-01",
      contactType: "customer service",
      availableLanguage: ["English"],
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
        timeZone: "America/Los_Angeles"
      }
    },
    {
      "@type": "ContactPoint",
      telephone: "+1-555-NOW-AI-02",
      contactType: "sales",
      availableLanguage: ["English"]
    }
  ],
  sameAs: [
    "https://twitter.com/nowai_healthcare",
    "https://linkedin.com/company/nowai-healthcare",
    "https://facebook.com/nowai.healthcare",
    "https://youtube.com/c/nowai-healthcare"
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Healthcare Innovation Blvd, Suite 400",
    addressLocality: "San Francisco",
    addressRegion: "CA",
    postalCode: "94105",
    addressCountry: "US"
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "247",
    bestRating: "5",
    worstRating: "1"
  },
  review: [
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5"
      },
      author: {
        "@type": "Person",
        name: "Dr. Michael Chen"
      },
      reviewBody: "N:OW AI reduced our administrative tasks by 75%. Game-changer for our practice."
    }
  ]
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "N:OW AI",
  description: "Healthcare AI automation solutions for medical practices",
  url: getBaseUrl(),
  inLanguage: "en-US",
  copyrightYear: new Date().getFullYear(),
  copyrightHolder: {
    "@type": "Organization",
    name: "N:OW AI Healthcare Solutions Inc."
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${getBaseUrl()}/search?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  },
  mainEntity: {
    "@type": "Organization",
    "@id": `${getBaseUrl()}/#organization`
  }
}

export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "N:OW AI Healthcare Automation Platform",
  description: "AI-powered healthcare automation solutions for medical practices. Automate scheduling, documentation, billing, and more.",
  url: getBaseUrl(),
  applicationCategory: ["HealthApplication", "BusinessApplication"],
  operatingSystem: ["Web-based", "Cloud"],
  softwareVersion: "2.1.0",
  datePublished: "2023-01-15",
  dateModified: new Date().toISOString().split('T')[0],
  publisher: {
    "@type": "Organization",
    name: "N:OW AI",
    url: getBaseUrl()
  },
  offers: [
    {
      "@type": "Offer",
      name: "Starter Plan",
      price: "299",
      priceCurrency: "USD",
      billingDuration: "P1M",
      priceValidUntil: "2025-12-31",
      availability: "https://schema.org/InStock",
      category: "SaaS Subscription"
    },
    {
      "@type": "Offer",
      name: "Professional Plan",
      price: "599",
      priceCurrency: "USD",
      billingDuration: "P1M",
      priceValidUntil: "2025-12-31",
      availability: "https://schema.org/InStock",
      category: "SaaS Subscription"
    }
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "247",
    bestRating: "5",
    worstRating: "1"
  },
  featureList: [
    "AI-powered patient scheduling",
    "Automated clinical documentation",
    "Smart billing and coding",
    "Workflow optimization",
    "Analytics and reporting"
  ],
  screenshot: `${getBaseUrl()}/images/screenshots/dashboard.jpg`,
  softwareHelp: `${getBaseUrl()}/support`,
  downloadUrl: `${getBaseUrl()}/demo`,
  installUrl: `${getBaseUrl()}/signup`
}

// FAQ Schema for better rich snippets
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does N:OW AI cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "N:OW AI pricing starts at $299/month for the Starter plan. We offer Professional ($599/month) and Enterprise (custom pricing) plans. All plans include a 14-day free trial."
      }
    },
    {
      "@type": "Question",
      name: "How much time can N:OW AI save my practice?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most healthcare practices save 70% of their administrative time using N:OW AI, which translates to 20-30 hours per week for a typical practice."
      }
    },
    {
      "@type": "Question",
      name: "Is N:OW AI HIPAA compliant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, N:OW AI is fully HIPAA compliant with enterprise-grade security, encryption, and data protection measures."
      }
    }
  ]
}

// Breadcrumb schema generator
export const generateBreadcrumbSchema = (breadcrumbs: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",  
    position: index + 1,
    name: crumb.name,
    item: crumb.url
  }))
})

// Local Business schema for healthcare practices
export const healthcareBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "SoftwareCompany"],
  name: "N:OW AI",
  description: "Healthcare AI automation solutions provider",
  url: getBaseUrl(),
  telephone: "+1-555-NOW-AI-01",
  email: "hello@nowai.healthcare",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Healthcare Innovation Blvd",
    addressLocality: "San Francisco", 
    addressRegion: "CA",
    postalCode: "94105",
    addressCountry: "US"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "37.7749",
    longitude: "-122.4194"
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00"
    }
  ],
  priceRange: "$299-$999",
  paymentAccepted: ["Credit Card", "ACH Transfer"],
  currenciesAccepted: "USD"
}

// Helper function to generate page-specific metadata
export const generatePageMetadata = (
  page: string,
  title: string,
  description: string,
  additionalKeywords: string[] = [],
): Metadata => ({
  ...baseMetadata,
  title,
  description: description.length > 160 ? `${description.substring(0, 157)}...` : description,
  keywords: [
    ...additionalKeywords,
    "healthcare AI",
    "medical automation", 
    "healthcare technology",
    "N:OW AI"
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${getBaseUrl()}/${page}`,
    siteName: "N:OW AI",
    title,
    description,
    images: [
      {
        url: `/main-hero-image.png`,
        width: 1200,
        height: 630,
        alt: `${title} - N:OW AI`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nowai_healthcare",
    creator: "@nowai_healthcare", 
    title: title.length > 70 ? `${title.substring(0, 67)}...` : title,
    description: description.length > 200 ? `${description.substring(0, 197)}...` : description,
    images: [
      {
        url: `/images/twitter/twitter-${page}.jpg`,
        alt: title,
      },
    ],
  },
  alternates: {
    canonical: `${getBaseUrl()}/${page}`,
  },
})

// Export configurations that need to be updated with the new pattern
export const contactMetadata: Metadata = generatePageMetadata(
  'contact',
  'Contact N:OW AI - Get Healthcare AI Support | Schedule Consultation',
  'Contact N:OW AI for healthcare AI automation support, sales inquiries, or technical assistance. Schedule a consultation or reach our expert team directly.',
  [
    'contact N:OW AI',
    'healthcare AI support',
    'medical automation help',
    'AI healthcare consultation',
    'healthcare technology support',
  ]
)

export const bookCallMetadata: Metadata = generatePageMetadata(
  'book-call',
  'Book a Call with N:OW AI - Healthcare AI Consultation | Schedule Meeting',
  'Schedule a personalized consultation with N:OW AI experts. Discuss your healthcare automation needs, get custom solutions, and see how AI can transform your practice.',
  [
    'book call N:OW AI',
    'healthcare AI consultation',
    'medical automation meeting',
    'AI healthcare appointment',
    'healthcare technology consultation',
  ]
)

export const solutionsMetadata: Metadata = generatePageMetadata(
  'solutions',
  'N:OW AI Solutions - Healthcare AI Automation Tools | Medical AI Products',
  'Explore N:OW AI\'s comprehensive healthcare automation solutions. AI-powered patient scheduling, clinical documentation, billing automation, and more medical AI tools.',
  [
    'healthcare AI solutions',
    'medical automation tools',
    'AI healthcare products',
    'healthcare technology solutions',
    'medical AI software',
  ]
)

export const industriesMetadata: Metadata = generatePageMetadata(
  'industries',
  'Healthcare Industries - AI Solutions by Specialty | N:OW AI',
  'N:OW AI serves diverse healthcare specialties with tailored AI automation solutions. From primary care to specialized practices, discover industry-specific healthcare AI tools.',
  [
    'healthcare industries AI',
    'medical specialties automation',
    'AI for healthcare sectors',
    'specialty healthcare AI',
    'medical practice AI by industry',
  ]
)

export const resourcesMetadata: Metadata = generatePageMetadata(
  'resources',
  'Healthcare AI Resources - Guides, Tools & Insights | N:OW AI',
  'Access comprehensive healthcare AI resources including implementation guides, ROI calculators, whitepapers, and industry insights. Free tools for healthcare automation.',
  [
    'healthcare AI resources',
    'medical automation guides',
    'AI healthcare tools',
    'healthcare technology resources',
    'medical AI insights',
  ]
)

export const blogMetadata: Metadata = generatePageMetadata(
  'blog',
  'Healthcare AI Blog - Latest Insights & Trends | N:OW AI',
  'Stay updated with the latest healthcare AI trends, automation insights, and industry news. Expert articles on medical AI, healthcare technology, and practice optimization.',
  [
    'healthcare AI blog',
    'medical automation news',
    'AI healthcare insights',
    'healthcare technology blog',
    'medical AI articles',
  ]
)

export const newsletterMetadata: Metadata = generatePageMetadata(
  'newsletter',
  'Healthcare AI Newsletter - Stay Updated | N:OW AI Insights',
  'Subscribe to N:OW AI\'s healthcare automation newsletter. Get weekly insights on medical AI trends, practice optimization tips, and industry updates delivered to your inbox.',
  [
    'healthcare AI newsletter',
    'medical automation newsletter',
    'AI healthcare updates',
    'healthcare technology newsletter',
    'medical AI insights',
  ]
)