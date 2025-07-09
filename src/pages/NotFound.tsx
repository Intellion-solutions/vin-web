import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Home, Search, Phone, MessageCircle } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );

    // Update page title for SEO
    document.title = "Page Not Found - Vincom Computer Enterprise";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'The page you are looking for could not be found. Visit our homepage or contact us for assistance with digital services.');
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-green-50 to-red-50">
        <div className="text-center max-w-2xl mx-auto px-4">
          <div className="mb-8">
            <img 
              src="/assets/dfdb6b94-9976-4ca2-85da-47f0aa5d2551.png" 
              alt="Vincom Computer Enterprise Logo" 
              className="w-24 h-24 mx-auto mb-6 opacity-50"
            />
          </div>
          
          <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-700 mb-6">Page Not Found</h2>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            The page you're looking for is currently under development and will be available shortly.
            We appreciate your patience as we work to bring you the best digital services experience.
          </p>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Help Right Now?
            </h3>
            <p className="text-gray-600 mb-6">
              Don't worry! Our team is available 24/7 to assist you with any digital service needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <a 
                href="tel:+254726564132"
                className="flex items-center justify-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200"
              >
                <Phone className="w-5 h-5" />
                <span>Call Us: +254 726 564 132</span>
              </a>
              <a 
                href="https://wa.me/254726564132"
                className="flex items-center justify-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors duration-200"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/" 
              className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-green-600 to-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
            >
              <Home className="w-5 h-5" />
              <span>Return to Homepage</span>
            </Link>
            
            <Link 
              to="/services" 
              className="inline-flex items-center justify-center space-x-2 border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-colors duration-200"
            >
              <Search className="w-5 h-5" />
              <span>Browse Our Services</span>
            </Link>
          </div>
          
          <div className="mt-8 text-sm text-gray-500">
            <p>Error Code: 404 | Path: {location.pathname}</p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;