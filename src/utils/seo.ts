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

  // Open Graph tags
  updateMetaTag('og:title', seoData.title, true);
  updateMetaTag('og:description', seoData.description, true);
  updateMetaTag('og:type', seoData.type || 'website', true);
  if (seoData.url) updateMetaTag('og:url', seoData.url, true);
  if (seoData.image) updateMetaTag('og:image', seoData.image, true);
  updateMetaTag('og:site_name', 'Vincom Computer (K) Enterprise Ltd', true);

  // Twitter Card tags
  updateMetaTag('twitter:card', 'summary_large_image');
  updateMetaTag('twitter:title', seoData.title);
  updateMetaTag('twitter:description', seoData.description);
  if (seoData.image) updateMetaTag('twitter:image', seoData.image);
  updateMetaTag('twitter:site', '@VincomComputer');

  // Article specific tags
  if (seoData.publishedTime) updateMetaTag('article:published_time', seoData.publishedTime, true);
  if (seoData.modifiedTime) updateMetaTag('article:modified_time', seoData.modifiedTime, true);
  if (seoData.author) updateMetaTag('article:author', seoData.author, true);
  if (seoData.section) updateMetaTag('article:section', seoData.section, true);
  if (seoData.tags) {
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
};

export const addStructuredData = (data: any) => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
};

// Default SEO data for the website
export const defaultSEO: SEOData = {
  title: 'Vincom Computer (K) Enterprise Ltd - Complete Digital Services Center in Kenya',
  description: 'Your trusted digital gateway in Kenya. eCitizen services, printing, computer training, business consultancy, web development, and more. Available 24/7 in Sindo, Homabay County.',
  keywords: 'eCitizen services Kenya, digital services Homabay, computer training Sindo, printing services Kenya, business registration Kenya, web development Kenya, government applications Kenya, KRA PIN, NHIF registration, passport services',
  image: '/assets/vincentlogo.png',
  url: 'https://vincomcomputerenterprise.co.ke',
  type: 'website',
  author: 'Vincom Computer (K) Enterprise Ltd'
};

// Business structured data
export const businessStructuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Vincom Computer (K) Enterprise Ltd",
  "alternateName": "Vincom Computer Enterprise",
  "description": "Complete digital services center providing eCitizen services, printing, computer training, business consultancy, and web development in Kenya.",
  "url": "https://vincomcomputerenterprise.co.ke",
  "telephone": "+254726564132",
  "email": "info@vincomcomputerenterprise.co.ke",
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
  "priceRange": "$$",
  "image": "/assets/vincentlogo.png",
  "logo": "/assets/vincentlogo.png",
  "sameAs": [
    "https://wa.me/254726564132"
  ],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": -0.4612339,
      "longitude": 34.1653058
    },
    "geoRadius": "50000"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Digital Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "eCitizen Services",
          "description": "Government document processing including birth certificates, ID cards, passports"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Printing Services",
          "description": "Professional printing, scanning, and document services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Computer Training",
          "description": "Digital literacy and computer skills training programs"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Business Consultancy",
          "description": "Business registration, planning, and consultancy services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web Development",
          "description": "Professional website and web application development"
        }
      }
    ]
  }
};