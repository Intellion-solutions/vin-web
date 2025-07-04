import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ChevronDown, ChevronUp, Search, HelpCircle, MessageCircle, Phone } from 'lucide-react';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const faqCategories = [
    {
      category: "eCitizen Services",
      faqs: [
        {
          question: "How long does it take to get a birth certificate?",
          answer: "Birth certificate processing typically takes 1-3 working days through eCitizen. We assist with the entire application process and can expedite urgent requests."
        },
        {
          question: "What documents do I need for a passport application?",
          answer: "You need your original ID card, birth certificate, and passport photos. We can help take the photos and guide you through the entire application process."
        },
        {
          question: "Can you help with KRA PIN registration?",
          answer: "Yes, we provide complete KRA PIN registration services. The process usually takes 30 minutes to 1 hour, and you'll receive your PIN immediately."
        },
        {
          question: "Do you assist with NHIF registration?",
          answer: "Absolutely! We help with NHIF registration, renewals, and all related services. The process is quick and can be completed in one visit."
        }
      ]
    },
    {
      category: "Printing Services",
      faqs: [
        {
          question: "What printing services do you offer?",
          answer: "We offer black & white printing, color printing, large format printing, binding, lamination, scanning, and photocopying. We handle everything from single pages to bulk orders."
        },
        {
          question: "Do you print business cards and marketing materials?",
          answer: "Yes, we design and print business cards, flyers, brochures, posters, and banners. Our design team can create custom materials for your business."
        },
        {
          question: "Can you handle large printing orders?",
          answer: "Absolutely! We specialize in bulk printing jobs and offer competitive rates for large orders. Contact us for a custom quote."
        },
        {
          question: "What file formats do you accept?",
          answer: "We accept PDF, Word, Excel, PowerPoint, JPEG, PNG, and most common file formats. If you're unsure, bring your files and we'll help."
        }
      ]
    },
    {
      category: "Computer Training",
      faqs: [
        {
          question: "What computer courses do you offer?",
          answer: "We offer basic computer skills, Microsoft Office training, internet usage, graphic design, web development basics, and digital marketing courses."
        },
        {
          question: "How long are the training programs?",
          answer: "Course duration varies from 2 weeks to 3 months depending on the program. We offer flexible schedules including evening and weekend classes."
        },
        {
          question: "Do you provide certificates after training?",
          answer: "Yes, we provide certificates of completion for all our training programs. These are recognized and can enhance your CV."
        },
        {
          question: "Can I get one-on-one training?",
          answer: "Yes, we offer personalized one-on-one training sessions tailored to your specific needs and learning pace."
        }
      ]
    },
    {
      category: "Business Services",
      faqs: [
        {
          question: "Do you help with business registration?",
          answer: "Yes, we provide complete business registration services including name search, registration documents, and all necessary permits."
        },
        {
          question: "Can you write business plans?",
          answer: "Our experienced consultants can help develop comprehensive business plans for startups, loan applications, and investor presentations."
        },
        {
          question: "Do you offer logo design services?",
          answer: "Yes, our design team creates professional logos and complete brand identity packages for businesses of all sizes."
        },
        {
          question: "What about tax services?",
          answer: "We provide tax consultation, return preparation, and ongoing tax compliance support for individuals and businesses."
        }
      ]
    },
    {
      category: "General Questions",
      faqs: [
        {
          question: "What are your operating hours?",
          answer: "We operate 24/7, 365 days a year. Our staff is always available to assist you with any digital service needs."
        },
        {
          question: "Do you accept mobile money payments?",
          answer: "Yes, we accept M-Pesa, Airtel Money, and other mobile money platforms, as well as cash and bank transfers."
        },
        {
          question: "Can I book services in advance?",
          answer: "Yes, you can book services in advance by calling us, visiting our center, or contacting us via WhatsApp."
        },
        {
          question: "Do you offer home/office visits?",
          answer: "For certain services like computer training and business consultations, we can arrange visits to your location. Contact us for details."
        }
      ]
    }
  ];

  const allFAQs = faqCategories.flatMap((category, categoryIndex) =>
    category.faqs.map((faq, faqIndex) => ({
      ...faq,
      id: categoryIndex * 100 + faqIndex,
      category: category.category
    }))
  );

  const filteredFAQs = allFAQs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFAQ = (id: number) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 via-black to-red-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Find answers to common questions about our services and processes
          </p>
          <div className="flex items-center justify-center space-x-2 text-lg">
            <HelpCircle className="w-6 h-6" />
            <span>Can't find what you're looking for? Contact us!</span>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="w-6 h-6 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search frequently asked questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
              />
            </div>
            <p className="text-center text-gray-600 mt-4">
              {filteredFAQs.length} question{filteredFAQs.length !== 1 ? 's' : ''} found
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {searchTerm ? (
              // Show filtered results
              <div className="space-y-4">
                {filteredFAQs.map((faq) => (
                  <div key={faq.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div>
                        <span className="text-sm text-green-600 font-medium">{faq.category}</span>
                        <h3 className="text-lg font-semibold text-gray-900 mt-1">{faq.question}</h3>
                      </div>
                      {expandedFAQ === faq.id ? (
                        <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      )}
                    </button>
                    {expandedFAQ === faq.id && (
                      <div className="px-6 pb-4">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              // Show by categories
              <div className="space-y-8">
                {faqCategories.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="bg-gradient-to-r from-green-600 to-red-600 text-white p-6">
                      <h2 className="text-2xl font-bold">{category.category}</h2>
                      <p className="text-white text-opacity-90 mt-2">
                        {category.faqs.length} frequently asked questions
                      </p>
                    </div>
                    <div className="divide-y divide-gray-200">
                      {category.faqs.map((faq, faqIndex) => {
                        const faqId = categoryIndex * 100 + faqIndex;
                        return (
                          <div key={faqIndex}>
                            <button
                              onClick={() => toggleFAQ(faqId)}
                              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                            >
                              <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                              {expandedFAQ === faqId ? (
                                <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                              ) : (
                                <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                              )}
                            </button>
                            {expandedFAQ === faqId && (
                              <div className="px-6 pb-4">
                                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Still Have Questions?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Our friendly staff is always ready to help. Contact us through any of these channels for immediate assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+254726564132"
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call Us Now</span>
              </a>
              <a 
                href="https://wa.me/254726564132"
                className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;