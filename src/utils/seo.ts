export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  locale?: string;
  alternateUrls?: { [key: string]: string };
}

export const updateSEO = (seoData: SEOData) => {
  // Update title
  document.title = seoData.title;

  // Update or create meta tags
  const updateMetaTag = (name: string, content: string, property?: boolean) => {
    const attribute = property ? 'property' : 'name';
    let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
    
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(attribute, name);
      document.head.appendChild(element);
    }
    
    element.setAttribute('content', content);
  };

  // Basic meta tags
  updateMetaTag('description', seoData.description);
  if (seoData.keywords) updateMetaTag('keywords', seoData.keywords);
  if (seoData.author) updateMetaTag('author', seoData.author);
  
  // Enhanced meta tags for better SEO
  updateMetaTag('robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
  updateMetaTag('googlebot', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
  updateMetaTag('bingbot', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
  updateMetaTag('viewport', 'width=device-width, initial-scale=1.0, maximum-scale=5.0');
  updateMetaTag('theme-color', '#16a34a');
  updateMetaTag('msapplication-TileColor', '#16a34a');
  
  // Geo-location tags for local SEO
  updateMetaTag('geo.region', 'KE-30');
  updateMetaTag('geo.placename', 'Sindo, Homabay County');
  updateMetaTag('geo.position', '-0.4612339;34.1653058');
  updateMetaTag('ICBM', '-0.4612339, 34.1653058');
  updateMetaTag('DC.title', seoData.title);

  // Open Graph tags
  updateMetaTag('og:title', seoData.title, true);
  updateMetaTag('og:description', seoData.description, true);
  updateMetaTag('og:type', seoData.type || 'website', true);
  if (seoData.url) updateMetaTag('og:url', seoData.url, true);
  if (seoData.image) updateMetaTag('og:image', seoData.image, true);
  updateMetaTag('og:site_name', 'Vincom Computer Enterprise', true);
  updateMetaTag('og:locale', seoData.locale || 'en_US', true);
  
  // Enhanced Open Graph tags
  if (seoData.image) {
    updateMetaTag('og:image:width', '1200', true);
    updateMetaTag('og:image:height', '630', true);
    updateMetaTag('og:image:type', 'image/png', true);
    updateMetaTag('og:image:alt', seoData.title, true);
  }

  // Twitter Card tags
  updateMetaTag('twitter:card', 'summary_large_image');
  updateMetaTag('twitter:title', seoData.title);
  updateMetaTag('twitter:description', seoData.description);
  if (seoData.image) updateMetaTag('twitter:image', seoData.image);
  updateMetaTag('twitter:site', '@VincomComputer');
  updateMetaTag('twitter:creator', '@VincomComputer');

  // Article specific tags
  if (seoData.publishedTime) updateMetaTag('article:published_time', seoData.publishedTime, true);
  if (seoData.modifiedTime) updateMetaTag('article:modified_time', seoData.modifiedTime, true);
  if (seoData.author) updateMetaTag('article:author', seoData.author, true);
  if (seoData.section) updateMetaTag('article:section', seoData.section, true);
  if (seoData.tags) {
    // Remove existing article:tag elements
    document.querySelectorAll('meta[property="article:tag"]').forEach(el => el.remove());
    seoData.tags.forEach(tag => {
      const tagElement = document.createElement('meta');
      tagElement.setAttribute('property', 'article:tag');
      tagElement.setAttribute('content', tag);
      document.head.appendChild(tagElement);
    });
  }

  // Canonical URL
  if (seoData.url) {
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', seoData.url);
  }

  // Alternate URLs for different languages/regions
  if (seoData.alternateUrls) {
    Object.entries(seoData.alternateUrls).forEach(([lang, url]) => {
      let alternate = document.querySelector(`link[rel="alternate"][hreflang="${lang}"]`) as HTMLLinkElement;
      if (!alternate) {
        alternate = document.createElement('link');
        alternate.setAttribute('rel', 'alternate');
        alternate.setAttribute('hreflang', lang);
        document.head.appendChild(alternate);
      }
      alternate.setAttribute('href', url);
    });
  }

  // Preconnect to external domains for performance
  const preconnectDomains = [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    'https://images.unsplash.com',
    'https://i.pinimg.com'
  ];

  preconnectDomains.forEach(domain => {
    if (!document.querySelector(`link[rel="preconnect"][href="${domain}"]`)) {
      const preconnect = document.createElement('link');
      preconnect.setAttribute('rel', 'preconnect');
      preconnect.setAttribute('href', domain);
      if (domain.includes('gstatic')) {
        preconnect.setAttribute('crossorigin', '');
      }
      document.head.appendChild(preconnect);
    }
  });
};

export const addStructuredData = (data: any) => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
};

// Enhanced default SEO data
export const defaultSEO: SEOData = {
  title: 'Vincom Computer Enterprise - Complete Digital Services Center in Kenya',
  description: 'Leading cyber cafe and digital services center in Sindo, Homabay County. eCitizen services, computer training, printing, web development, business consultancy. Open 24/7. Call +254 726 564 132',
  keywords: 'cyber cafe Kenya, eCitizen services Homabay, computer training Sindo, printing services Kenya, digital services center, business registration Kenya, web development Kenya, government applications, KRA PIN, NHIF registration, passport services, computer classes Kenya, internet cafe Homabay',
  image: 'https://vincomcomputerenterprise.co.ke/assets/vincentlogo.png',
  url: 'https://vincomcomputerenterprise.co.ke',
  type: 'website',
  author: 'Vincom Computer Enterprise',
  locale: 'en_KE'
};

// Enhanced business structured data with more details
export const businessStructuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Vincom Computer Enterprise",
  "alternateName": ["Vincom Computer (K) Enterprise Ltd", "Vincom Cyber Cafe"],
  "description": "Leading digital services center and cyber cafe in Kenya providing eCitizen services, computer training, printing, web development, and business consultancy since 2012.",
  "url": "https://vincomcomputerenterprise.co.ke",
  "telephone": "+254726564132",
  "email": "info@vincomcomputerenterprise.co.ke",
  "foundingDate": "2012",
  "founder": {
    "@type": "Person",
    "name": "Vincent Mutunga"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Sindo Town",
    "addressLocality": "Sindo",
    "addressRegion": "Homabay County",
    "postalCode": "40308",
    "addressCountry": "KE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -0.4612339,
    "longitude": 34.1653058
  },
  "openingHours": "Mo-Su 00:00-23:59",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  },
  "priceRange": "KSh 30 - KSh 10,000",
  "currenciesAccepted": "KES",
  "paymentAccepted": ["Cash", "M-Pesa", "Airtel Money", "Bank Transfer"],
  "image": "https://vincomcomputerenterprise.co.ke/assets/vincentlogo.png",
  "logo": "https://vincomcomputerenterprise.co.ke/assets/vincentlogo.png",
  "sameAs": [
    "https://wa.me/254726564132"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "150",
    "bestRating": "5",
    "worstRating": "1"
  },
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": -0.4612339,
      "longitude": 34.1653058
    },
    "geoRadius": "100000"
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "Kenya"
    },
    {
      "@type": "State",
      "name": "Homabay County"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Digital Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "eCitizen Services",
          "description": "Complete government document processing including birth certificates, ID cards, passports, KRA PIN, NHIF registration",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Vincom Computer Enterprise"
          }
        },
        "price": "30",
        "priceCurrency": "KES"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Computer Training",
          "description": "Comprehensive computer training including basic skills, Microsoft Office, web design, and digital literacy",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Vincom Computer Enterprise"
          }
        },
        "price": "3000",
        "priceCurrency": "KES"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Printing Services",
          "description": "Professional printing, scanning, lamination, and document services",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Vincom Computer Enterprise"
          }
        },
        "price": "5",
        "priceCurrency": "KES"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web Development",
          "description": "Professional website and web application development services",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Vincom Computer Enterprise"
          }
        },
        "price": "11000",
        "priceCurrency": "KES"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Business Consultancy",
          "description": "Business registration, planning, and consultancy services",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Vincom Computer Enterprise"
          }
        },
        "price": "1500",
        "priceCurrency": "KES"
      }
    ]
  },
  "knowsAbout": [
    "eCitizen Services",
    "Computer Training",
    "Digital Literacy",
    "Printing Services",
    "Web Development",
    "Business Consultancy",
    "Government Applications",
    "Document Processing",
    "Cyber Cafe Services",
    "IT Support"
  ],
  "slogan": "Your Digital Gateway",
  "award": "Leading Digital Services Provider in Homabay County",
  "numberOfEmployees": "15",
  "yearlyRevenue": {
    "@type": "MonetaryAmount",
    "currency": "KES",
    "value": "5000000"
  }
};

// FAQ structured data
export const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What services does Vincom Computer Enterprise offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer comprehensive digital services including eCitizen government applications, computer training, professional printing, web development, business consultancy, and fleet booking services. We operate 24/7 to serve all your digital needs."
      }
    },
    {
      "@type": "Question",
      "name": "Where is Vincom Computer Enterprise located?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We are located in Sindo Town, Homabay County, Kenya. Our address is P.O Box 14-40308, Sindo. You can contact us at +254 726 564 132."
      }
    },
    {
      "@type": "Question",
      "name": "What are your operating hours?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We operate 24/7, 365 days a year. Our staff is always available to assist you with any digital service needs at any time."
      }
    },
    {
      "@type": "Question",
      "name": "How much do eCitizen services cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "eCitizen services start from KSh 30 for basic applications. Prices vary depending on the specific service and complexity. We offer transparent pricing with no hidden fees."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer computer training courses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer comprehensive computer training including basic computer skills, Microsoft Office, web design, graphic design, and digital marketing. Courses start from KSh 3,000 per month."
      }
    }
  ]
};

// Breadcrumb structured data generator
export const generateBreadcrumbStructuredData = (breadcrumbs: Array<{name: string, url: string}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  };
};

// Website structured data
export const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Vincom Computer Enterprise",
  "alternateName": "Vincom Cyber Cafe",
  "url": "https://vincomcomputerenterprise.co.ke",
  "description": "Leading digital services center and cyber cafe in Kenya",
  "publisher": {
    "@type": "Organization",
    "name": "Vincom Computer Enterprise"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://vincomcomputerenterprise.co.ke/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  },
  "sameAs": [
    "https://wa.me/254726564132"
  ]
};

// Organization structured data
export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Vincom Computer Enterprise",
  "alternateName": "Vincom Computer (K) Enterprise Ltd",
  "url": "https://vincomcomputerenterprise.co.ke",
  "logo": "https://vincomcomputerenterprise.co.ke/assets/vincentlogo.png",
  "description": "Leading digital services center in Kenya providing cyber cafe services, eCitizen applications, computer training, and business solutions since 2012.",
  "foundingDate": "2012",
  "founder": {
    "@type": "Person",
    "name": "Vincent Mutunga"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+254726564132",
    "contactType": "customer service",
    "availableLanguage": ["English", "Swahili"],
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Sindo Town",
    "addressLocality": "Sindo",
    "addressRegion": "Homabay County",
    "postalCode": "40308",
    "addressCountry": "KE"
  },
  "sameAs": [
    "https://wa.me/254726564132"
  ]
};