import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { updateSEO, addStructuredData, defaultSEO, businessStructuredData, faqStructuredData, websiteStructuredData, organizationStructuredData, generateBreadcrumbStructuredData, SEOData } from '../utils/seo';

export const useSEO = (seoData?: Partial<SEOData>) => {
  const location = useLocation();

  useEffect(() => {
    // Clean up previous structured data scripts
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => {
      if (script.textContent?.includes('@context')) {
        script.remove();
      }
    });

    // Merge default SEO with page-specific data
    const finalSEOData: SEOData = {
      ...defaultSEO,
      ...seoData,
      url: `${defaultSEO.url}${location.pathname}`
    };

    // Update SEO tags
    updateSEO(finalSEOData);

    // Add core structured data on all pages
    addStructuredData(websiteStructuredData);
    addStructuredData(organizationStructuredData);

    // Add business structured data on homepage and contact page
    if (location.pathname === '/' || location.pathname === '/contact') {
      addStructuredData(businessStructuredData);
    }

    // Add FAQ structured data on FAQ page
    if (location.pathname === '/faq') {
      addStructuredData(faqStructuredData);
    }

    // Generate and add breadcrumb structured data
    const breadcrumbs = generateBreadcrumbs(location.pathname);
    if (breadcrumbs.length > 1) {
      addStructuredData(generateBreadcrumbStructuredData(breadcrumbs));
    }

    // Add page-specific structured data
    addPageSpecificStructuredData(location.pathname);

  }, [location.pathname, seoData]);
};

// Generate breadcrumbs based on current path
const generateBreadcrumbs = (pathname: string) => {
  const breadcrumbs = [
    { name: 'Home', url: 'https://vincomcomputerenterprise.co.ke/' }
  ];

  const pathSegments = pathname.split('/').filter(segment => segment);
  
  pathSegments.forEach((segment, index) => {
    const url = `https://vincomcomputerenterprise.co.ke/${pathSegments.slice(0, index + 1).join('/')}`;
    const name = segment.charAt(0).toUpperCase() + segment.slice(1);
    breadcrumbs.push({ name, url });
  });

  return breadcrumbs;
};

// Add page-specific structured data
const addPageSpecificStructuredData = (pathname: string) => {
  switch (pathname) {
    case '/services':
      addStructuredData({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Digital Services",
        "description": "Comprehensive digital services including eCitizen applications, computer training, printing, and business consultancy",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Vincom Computer Enterprise"
        },
        "areaServed": "Kenya",
        "availableChannel": {
          "@type": "ServiceChannel",
          "availableLanguage": ["English", "Swahili"],
          "servicePhone": "+254726564132",
          "serviceUrl": "https://vincomcomputerenterprise.co.ke/services"
        }
      });
      break;

    case '/about':
      addStructuredData({
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About Vincom Computer Enterprise",
        "description": "Learn about Kenya's leading digital services center, established in 2012",
        "mainEntity": {
          "@type": "Organization",
          "name": "Vincom Computer Enterprise",
          "foundingDate": "2012",
          "numberOfEmployees": "15+",
          "slogan": "Your Digital Gateway"
        }
      });
      break;

    case '/contact':
      addStructuredData({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Vincom Computer Enterprise",
        "description": "Contact us for all your digital service needs. Available 24/7",
        "mainEntity": {
          "@type": "LocalBusiness",
          "name": "Vincom Computer Enterprise",
          "telephone": "+254726564132",
          "email": "info@vincomcomputerenterprise.co.ke"
        }
      });
      break;

    case '/pricing':
      addStructuredData({
        "@context": "https://schema.org",
        "@type": "PriceSpecification",
        "name": "Digital Services Pricing",
        "description": "Transparent pricing for all digital services",
        "priceCurrency": "KES",
        "eligibleRegion": "Kenya"
      });
      break;

    case '/portfolio':
      addStructuredData({
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        "name": "Digital Portfolio",
        "description": "Showcase of digital projects and success stories",
        "creator": {
          "@type": "Organization",
          "name": "Vincom Computer Enterprise"
        }
      });
      break;

    case '/blog':
      addStructuredData({
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Vincom Computer Enterprise Blog",
        "description": "Digital insights, tips, and guides",
        "publisher": {
          "@type": "Organization",
          "name": "Vincom Computer Enterprise"
        }
      });
      break;
  }
};

// Enhanced page-specific SEO configurations
export const pageSEOConfigs = {
  home: {
    title: 'Vincom Computer Enterprise - Leading Cyber Cafe & Digital Services Center in Kenya',
    description: 'Top-rated cyber cafe in Sindo, Homabay County. eCitizen services, computer training, printing, web development, business consultancy. Open 24/7. Serving 5000+ customers since 2012. Call +254 726 564 132',
    keywords: 'cyber cafe Kenya, eCitizen services Homabay, computer training Sindo, printing services Kenya, digital services center, internet cafe Kenya, government applications, KRA PIN, NHIF registration, passport services, computer classes Kenya, web development Kenya, business registration Kenya, Vincom Computer Enterprise',
    type: 'website'
  },
  services: {
    title: 'Complete Digital Services - Cyber Cafe, eCitizen, Training | Vincom Computer Enterprise',
    description: 'Comprehensive digital services: eCitizen applications, computer training, professional printing, web development, business consultancy, fleet booking. 150+ services available 24/7 in Kenya.',
    keywords: 'digital services Kenya, eCitizen services, cyber cafe services, computer training Kenya, printing services, web development, business consultancy, government applications Kenya, fleet booking Kenya',
    type: 'service'
  },
  about: {
    title: 'About Vincom Computer Enterprise - Kenya\'s Leading Digital Services Center Since 2012',
    description: 'Discover Vincom Computer Enterprise, Kenya\'s premier cyber cafe and digital services center. Serving 5000+ customers since 2012 with excellence in eCitizen services, computer training, and business solutions.',
    keywords: 'about Vincom Computer Enterprise, digital services company Kenya, cyber cafe history, computer training center Kenya, business consultancy Kenya, Vincent Mutunga founder',
    type: 'website'
  },
  contact: {
    title: 'Contact Vincom Computer Enterprise - 24/7 Digital Services Support in Kenya',
    description: 'Contact Kenya\'s leading cyber cafe and digital services center. Available 24/7 in Sindo, Homabay County. Call +254 726 564 132, WhatsApp, or visit our center for immediate assistance.',
    keywords: 'contact Vincom Computer Enterprise, cyber cafe Sindo, digital services Homabay, computer help Kenya, eCitizen assistance, 24/7 support Kenya',
    type: 'website'
  },
  pricing: {
    title: 'Affordable Digital Services Pricing - Transparent Rates | Vincom Computer Enterprise',
    description: 'Transparent and affordable pricing for all digital services. eCitizen from KSh 30, printing from KSh 5, computer training from KSh 3,000. Negotiable rates, no hidden fees. Best cyber cafe prices in Kenya.',
    keywords: 'digital services pricing Kenya, cyber cafe rates, eCitizen service costs, printing prices Kenya, computer training fees, web development costs Kenya, business consultancy rates',
    type: 'website'
  },
  portfolio: {
    title: 'Digital Portfolio - Web Development & Design Projects | Vincom Computer Enterprise',
    description: 'Explore our portfolio of successful digital projects: web development, graphic design, business solutions, eCitizen services. See our work and client success stories from Kenya\'s leading cyber cafe.',
    keywords: 'digital portfolio Kenya, web development projects, graphic design portfolio, business solutions Kenya, cyber cafe projects, Vincom Computer Enterprise work',
    type: 'website'
  },
  gallery: {
    title: 'Service Gallery - See Our Cyber Cafe & Digital Services in Action | Vincom Computer Enterprise',
    description: 'Visual gallery showcasing our cyber cafe facilities, digital services, computer training, printing services, and satisfied customers. Modern equipment and professional workspace in Sindo, Kenya.',
    keywords: 'Vincom Computer Enterprise gallery, cyber cafe photos, digital services images, computer training gallery, printing services photos, Kenya cyber cafe facilities',
    type: 'website'
  },
  blog: {
    title: 'Digital Insights Blog - Tech Tips & Guides | Vincom Computer Enterprise',
    description: 'Stay informed with our latest articles on digital services, technology trends, eCitizen guides, computer training tips, and helpful guides for navigating Kenya\'s digital landscape.',
    keywords: 'digital services blog Kenya, eCitizen guides, technology tips Kenya, computer training articles, cyber cafe blog, business advice Kenya, tech news Kenya',
    type: 'blog'
  },
  privacy: {
    title: 'Privacy Policy - Data Protection & Security | Vincom Computer Enterprise',
    description: 'Learn how Vincom Computer Enterprise protects your personal information and handles data securely. Our commitment to privacy and data protection for all cyber cafe and digital services.',
    keywords: 'privacy policy Kenya, data protection cyber cafe, information security, personal data handling, Vincom Computer Enterprise privacy',
    type: 'website'
  },
  terms: {
    title: 'Terms of Service - Service Agreement | Vincom Computer Enterprise',
    description: 'Terms and conditions for using Vincom Computer Enterprise cyber cafe and digital services. Service agreements, user responsibilities, and business terms for Kenya\'s leading digital center.',
    keywords: 'terms of service Kenya, cyber cafe terms, digital services agreement, service terms Kenya, business terms Vincom Computer Enterprise',
    type: 'website'
  },
  faq: {
    title: 'FAQ - Frequently Asked Questions | Vincom Computer Enterprise',
    description: 'Find answers to common questions about our cyber cafe services, eCitizen processes, computer training, printing services, pricing, and digital solutions. Get help with all your queries.',
    keywords: 'FAQ digital services Kenya, cyber cafe questions, eCitizen FAQ, computer training questions, printing services FAQ, business services FAQ Kenya',
    type: 'website'
  }
};