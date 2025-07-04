import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesOverview from '../components/ServicesOverview';
import BlogPreview from '../components/BlogPreview';
import WhyChooseUs from '../components/WhyChooseUs';
import AboutSection from '../components/AboutSection';
import ImageGallery from '../components/ImageGallery';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactPreview from '../components/ContactPreview';
import LocationMap from '../components/LocationMap';
import Footer from '../components/Footer';
import { useSEO, pageSEOConfigs } from '../hooks/useSEO';

const Index = () => {
  useSEO(pageSEOConfigs.home);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesOverview />
        <BlogPreview />
        <WhyChooseUs />
        <AboutSection />
        <ImageGallery />
        <TestimonialsSection />
        <LocationMap />
        <ContactPreview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;