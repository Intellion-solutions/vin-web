import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { updateSEO, addStructuredData, defaultSEO, businessStructuredData, SEOData } from '../utils/seo';

export const useSEO = (seoData?: Partial<SEOData>) => {
  const location = useLocation();

  useEffect(() => {
    // Merge default SEO with page-specific data
    const finalSEOData: SEOData = {
      ...defaultSEO,
      ...seoData,
      url: `${defaultSEO.url}${location.pathname}`
    };

    // Update SEO tags
    updateSEO(finalSEOData);

    // Add business structured data on homepage
    if (location.pathname === '/') {
      addStructuredData(businessStructuredData);
    }

    // Clean up previous structured data scripts
    return () => {
      const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
      existingScripts.forEach(script => {
        if (script.textContent?.includes('@context')) {
          script.remove();
        }
      });
    };
  }, [location.pathname, seoData]);
};

// Page-specific SEO configurations
export const pageSEOConfigs = {
  home: {
    title: 'Vincom Computer (K) Enterprise Ltd - Complete Digital Services Center in Kenya',
    description: 'Your trusted digital gateway in Sindo, Homabay County-Kenya. eCitizen services, printing, computer training, business consultancy, web development, and more. Available 24/7 in Sindo, Homabay County.',
    keywords: 'eCitizen services Kenya, digital services Homabay, computer training Sindo, printing services Kenya, business registration Kenya, web development Kenya'
  },
  services: {
    title: 'Our Services - Complete Digital Solutions | Vincom Computer Enterprise',
    description: 'Comprehensive digital services including eCitizen applications, printing, computer training, business consultancy, web development, and fleet booking. Over 150 services available 24/7.',
    keywords: 'digital services Kenya, eCitizen services, printing services, computer training, business consultancy, web development, fleet booking, government applications'
  },
  about: {
    title: 'About Us - Your Trusted Digital Partner | Vincom Computer Enterprise',
    description: 'Learn about Vincom Computer Enterprise Ltd, Kenya\'s leading digital services center. Serving 5000+ customers since 2012 with excellence in digital solutions.',
    keywords: 'about Vincom Computer, digital services company Kenya, computer training center, business consultancy Kenya'
  },
  contact: {
    title: 'Contact Us - Get Digital Help 24/7 | Vincom Computer Enterprise',
    description: 'Contact Vincom Computer Enterprise for all your digital service needs. Available 24/7 in Sindo, Homabay County. Call +254 726 564 132 or visit our center.',
    keywords: 'contact Vincom Computer, digital services Sindo, computer help Kenya, eCitizen assistance'
  },
  pricing: {
    title: 'Affordable Pricing - Transparent Digital Service Rates | Vincom Computer',
    description: 'Transparent and affordable pricing for all digital services. eCitizen services from KSh 30, printing from KSh 5, computer training packages available. Negotiable rates.',
    keywords: 'digital services pricing Kenya, eCitizen service costs, printing prices Kenya, computer training fees'
  },
  portfolio: {
    title: 'Our Portfolio - Digital Projects & Success Stories | Vincom Computer',
    description: 'Explore our portfolio of successful digital projects including web development, graphic design, business solutions, and eCitizen services. See our work and client success stories.',
    keywords: 'digital portfolio Kenya, web development projects, graphic design portfolio, business solutions Kenya'
  },
  gallery: {
    title: 'Gallery - See Our Services in Action | Vincom Computer Enterprise',
    description: 'Visual gallery showcasing our digital services, modern facilities, and satisfied customers. See our printing services, computer training, and professional workspace.',
    keywords: 'Vincom Computer gallery, digital services photos, computer training images, printing services gallery'
  },
  blog: {
    title: 'Blog - Digital Insights & Tips | Vincom Computer Enterprise',
    description: 'Stay informed with our latest articles on digital services, technology trends, eCitizen guides, and helpful tips for navigating Kenya\'s digital landscape.',
    keywords: 'digital services blog, eCitizen guides, technology tips Kenya, computer training articles, business advice Kenya'
  },
  privacy: {
    title: 'Privacy Policy - Data Protection & Security | Vincom Computer Enterprise',
    description: 'Learn how Vincom Computer Enterprise protects your personal information and handles data securely. Our commitment to privacy and data protection.',
    keywords: 'privacy policy, data protection Kenya, information security, personal data handling'
  },
  terms: {
    title: 'Terms of Service - Service Agreement | Vincom Computer Enterprise',
    description: 'Terms and conditions for using Vincom Computer Enterprise services. Service agreements, user responsibilities, and business terms.',
    keywords: 'terms of service, service agreement, digital services terms, business terms Kenya'
  },
  faq: {
    title: 'FAQ - Frequently Asked Questions | Vincom Computer Enterprise',
    description: 'Find answers to common questions about our digital services, eCitizen processes, printing services, computer training, and business consultancy.',
    keywords: 'FAQ digital services, eCitizen questions, printing FAQ, computer training questions, business services FAQ'
  }
};