import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FileText, Scale, Shield, Clock, AlertTriangle, CheckCircle } from 'lucide-react';
import { useSEO, pageSEOConfigs } from '../hooks/useSEO';

const Terms = () => {
  useSEO(pageSEOConfigs.terms);

  const keyTerms = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Service Agreement",
      description: "Clear terms for all digital services provided by our center."
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: "Fair Usage",
      description: "Guidelines for responsible use of our facilities and services."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Privacy Protection",
      description: "How we protect your personal information and documents."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Service Hours",
      description: "24/7 availability with terms for different service types."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section - Full Screen */}
      <section className="bg-gradient-to-r from-green-600 via-black to-red-600 text-white py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Terms of Service
          </h1>
          <p className="text-2xl md:text-3xl mb-12 max-w-4xl mx-auto">
            Please read these terms carefully before using our services.
          </p>
          <div className="flex items-center justify-center space-x-2 text-xl">
            <Clock className="w-8 h-8" />
            <span>Last updated: January 2024</span>
          </div>
        </div>
      </section>

      {/* Key Terms Overview - Full Width */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Key Terms Overview</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Understanding the main aspects of our service agreement
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {keyTerms.map((term, index) => (
              <div key={index} className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-2xl transition-shadow duration-300">
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                  {term.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{term.title}</h3>
                <p className="text-lg text-gray-600">{term.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms Content - Full Screen */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-12 md:p-16">
            
            <div className="prose prose-xl max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <FileText className="w-8 h-8 mr-4 text-green-600" />
                Acceptance of Terms
              </h2>
              
              <p className="text-lg text-gray-600 mb-8">
                By using the services provided by Vincom Computer (K) Enterprise Ltd, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <Scale className="w-8 h-8 mr-4 text-green-600" />
                Services Provided
              </h2>
              
              <div className="mb-12">
                <p className="text-lg text-gray-600 mb-6">
                  Vincom Computer (K) Enterprise Ltd provides the following services:
                </p>
                <ul className="space-y-4 text-lg text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>eCitizen and government document processing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Printing, scanning, and document services</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Computer training and digital literacy programs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Business consultancy and registration services</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Web development and design services</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Fleet booking and transportation coordination</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <Shield className="w-8 h-8 mr-4 text-green-600" />
                User Responsibilities
              </h2>
              
              <div className="mb-12">
                <p className="text-lg text-gray-600 mb-6">
                  As a user of our services, you agree to:
                </p>
                <ul className="space-y-4 text-lg text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Provide accurate and truthful information</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Use our services for lawful purposes only</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Respect other customers and staff</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Pay for services as agreed upon</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Follow facility rules and guidelines</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-8">Payment Terms</h2>
              
              <div className="mb-12">
                <ul className="space-y-4 text-lg text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Payment is due upon completion of services unless otherwise agreed</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>We accept cash, mobile money, and bank transfers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Prices may vary based on service complexity and urgency</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Refunds are available for services not delivered as agreed</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <AlertTriangle className="w-8 h-8 mr-4 text-orange-600" />
                Limitations and Disclaimers
              </h2>
              
              <div className="mb-12">
                <p className="text-lg text-gray-600 mb-6">
                  Please note the following limitations:
                </p>
                <ul className="space-y-4 text-lg text-gray-600">
                  <li className="flex items-start">
                    <AlertTriangle className="w-6 h-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                    <span>We are not responsible for government processing delays</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-6 h-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Technical issues may occasionally affect service delivery</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-6 h-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                    <span>We cannot guarantee approval of government applications</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-6 h-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Service availability may be affected by external factors</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
              <p className="text-lg text-gray-600 mb-6">
                If you have questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-8 rounded-2xl">
                <p className="text-lg text-gray-700 mb-3"><strong>Vincom Computer (K) Enterprise Ltd</strong></p>
                <p className="text-lg text-gray-700 mb-3">P.O Box 14-40308, Sindo</p>
                <p className="text-lg text-gray-700 mb-3">Phone: +254 726 564 132</p>
                <p className="text-lg text-gray-700">Email: info@vincomcomputerenterprise.co.ke</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;