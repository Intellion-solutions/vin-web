import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Shield, Lock, Eye, FileText, Users, Clock, CheckCircle } from 'lucide-react';

const Privacy = () => {
  const privacyPrinciples = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Data Protection",
      description: "We implement industry-standard security measures to protect your personal information."
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Secure Storage",
      description: "All data is encrypted and stored securely with limited access controls."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Transparency",
      description: "We are transparent about what data we collect and how we use it."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "No Sharing",
      description: "We never sell or share your personal information with third parties."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section - Full Screen */}
      <section className="bg-gradient-to-r from-green-600 via-black to-red-600 text-white py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Privacy Policy
          </h1>
          <p className="text-2xl md:text-3xl mb-12 max-w-4xl mx-auto">
            Your privacy is our priority. Learn how we protect and handle your personal information.
          </p>
          <div className="flex items-center justify-center space-x-2 text-xl">
            <Clock className="w-8 h-8" />
            <span>Last updated: January 2024</span>
          </div>
        </div>
      </section>

      {/* Privacy Principles - Full Width */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Privacy Principles</h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              These core principles guide how we handle your personal information
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {privacyPrinciples.map((principle, index) => (
              <div key={index} className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-2xl transition-shadow duration-300">
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                  {principle.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{principle.title}</h3>
                <p className="text-lg text-gray-600">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Policy Content - Full Screen */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-12 md:p-16">
            
            <div className="prose prose-xl max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <FileText className="w-8 h-8 mr-4 text-green-600" />
                Information We Collect
              </h2>
              
              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Personal Information</h3>
                <ul className="space-y-4 text-lg text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Name, email address, and phone number when you contact us</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Service preferences and requirements</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Payment information for services rendered</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Documents and information necessary for service delivery</span>
                  </li>
                </ul>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Automatically Collected Information</h3>
                <ul className="space-y-4 text-lg text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Website usage data and analytics</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Device information and IP addresses</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Cookies and similar tracking technologies</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <Lock className="w-8 h-8 mr-4 text-green-600" />
                How We Use Your Information
              </h2>
              
              <div className="mb-12">
                <ul className="space-y-4 text-lg text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>To provide and deliver the services you request</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>To communicate with you about your services and appointments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>To process payments and maintain financial records</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>To improve our services and customer experience</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>To comply with legal obligations and government requirements</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>To send you relevant updates and promotional materials (with consent)</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <Shield className="w-8 h-8 mr-4 text-green-600" />
                Information Security
              </h2>
              
              <div className="mb-12">
                <p className="text-lg text-gray-600 mb-6">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <ul className="space-y-4 text-lg text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Encrypted data transmission and storage</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Regular security assessments and updates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Limited access controls and staff training</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Secure disposal of sensitive documents</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <Users className="w-8 h-8 mr-4 text-green-600" />
                Your Rights
              </h2>
              
              <div className="mb-12">
                <p className="text-lg text-gray-600 mb-6">
                  You have the following rights regarding your personal information:
                </p>
                <ul className="space-y-4 text-lg text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Right to access your personal data</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Right to correct inaccurate information</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Right to request deletion of your data</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Right to withdraw consent for marketing communications</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>Right to data portability</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-8">Data Retention</h2>
              <p className="text-lg text-gray-600 mb-8">
                We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, resolve disputes, and enforce our agreements. Government-related documents may be retained for longer periods as required by law.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Us</h2>
              <p className="text-lg text-gray-600 mb-6">
                If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
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

export default Privacy;