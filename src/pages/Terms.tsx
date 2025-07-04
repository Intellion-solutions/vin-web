import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FileText, Scale, Shield, Clock, AlertTriangle, CheckCircle } from 'lucide-react';

const Terms = () => {
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
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 via-black to-red-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Terms of Service
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Please read these terms carefully before using our services.
          </p>
          <div className="flex items-center justify-center space-x-2 text-lg">
            <Clock className="w-6 h-6" />
            <span>Last updated: January 2024</span>
          </div>
        </div>
      </section>

      {/* Key Terms Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Terms Overview</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the main aspects of our service agreement
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyTerms.map((term, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {term.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{term.title}</h3>
                <p className="text-gray-600">{term.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
            
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FileText className="w-6 h-6 mr-3 text-green-600" />
                Acceptance of Terms
              </h2>
              
              <p className="text-gray-600 mb-6">
                By using the services provided by Vincom Computer (K) Enterprise Ltd, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Scale className="w-6 h-6 mr-3 text-green-600" />
                Services Provided
              </h2>
              
              <div className="mb-8">
                <p className="text-gray-600 mb-4">
                  Vincom Computer (K) Enterprise Ltd provides the following services:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>eCitizen and government document processing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Printing, scanning, and document services</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Computer training and digital literacy programs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Business consultancy and registration services</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Web development and design services</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Fleet booking and transportation coordination</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="w-6 h-6 mr-3 text-green-600" />
                User Responsibilities
              </h2>
              
              <div className="mb-8">
                <p className="text-gray-600 mb-4">
                  As a user of our services, you agree to:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Provide accurate and truthful information</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Use our services for lawful purposes only</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Respect other customers and staff</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Pay for services as agreed upon</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Follow facility rules and guidelines</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Terms</h2>
              
              <div className="mb-8">
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Payment is due upon completion of services unless otherwise agreed</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>We accept cash, mobile money, and bank transfers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Prices may vary based on service complexity and urgency</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Refunds are available for services not delivered as agreed</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <AlertTriangle className="w-6 h-6 mr-3 text-orange-600" />
                Limitations and Disclaimers
              </h2>
              
              <div className="mb-8">
                <p className="text-gray-600 mb-4">
                  Please note the following limitations:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>We are not responsible for government processing delays</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Technical issues may occasionally affect service delivery</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>We cannot guarantee approval of government applications</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Service availability may be affected by external factors</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Intellectual Property</h2>
              <p className="text-gray-600 mb-6">
                All content, designs, and materials created by Vincom Computer (K) Enterprise Ltd remain our intellectual property unless otherwise agreed in writing. Customers retain ownership of their personal documents and data.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Termination</h2>
              <p className="text-gray-600 mb-6">
                We reserve the right to refuse service or terminate our relationship with customers who violate these terms, engage in illegal activities, or behave inappropriately toward staff or other customers.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes to Terms</h2>
              <p className="text-gray-600 mb-6">
                We may update these Terms of Service from time to time. Continued use of our services after changes constitutes acceptance of the new terms. We will notify customers of significant changes when possible.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <p className="text-gray-600 mb-4">
                If you have questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Vincom Computer (K) Enterprise Ltd</strong></p>
                <p className="text-gray-700 mb-2">P.O Box 14-40308, Sindo</p>
                <p className="text-gray-700 mb-2">Phone: +254 726 564 132</p>
                <p className="text-gray-700">Email: info@vincomcomputerenterprise.co.ke</p>
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