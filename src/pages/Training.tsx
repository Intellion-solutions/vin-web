import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  Monitor, 
  Users, 
  Clock, 
  Award, 
  CheckCircle, 
  Star, 
  Calendar,
  BookOpen,
  Download,
  Play,
  User,
  Mail,
  Phone,
  MessageCircle,
  Filter,
  Search,
  ChevronDown,
  ChevronUp,
  Target,
  TrendingUp,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { addStructuredData } from '../utils/seo';

const Training = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const [enrollmentForm, setEnrollmentForm] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    schedule: '',
    experience: '',
    message: ''
  });
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  // SEO Configuration
  useSEO({
    title: 'Computer Training Courses - Digital Skills & IT Training | Vincom Computer Enterprise',
    description: 'Professional computer training courses in Kenya. Learn Microsoft Office, web design, graphic design, digital marketing, and more. Flexible schedules, expert instructors, certificates provided. Enroll today!',
    keywords: 'computer training Kenya, Microsoft Office training, web design course Kenya, graphic design training, digital marketing course, IT training Homabay, computer classes Kenya, digital skills training, programming courses Kenya',
    type: 'website'
  });

  // Add structured data for courses
  useEffect(() => {
    const courseStructuredData = {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "Vincom Computer Enterprise Training Center",
      "description": "Professional computer training and digital skills development center in Kenya",
      "url": "https://vincomcomputerenterprise.co.ke/training",
      "telephone": "+254726564132",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Sindo Town",
        "addressLocality": "Sindo",
        "addressRegion": "Homabay County",
        "addressCountry": "KE"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Computer Training Courses",
        "itemListElement": courses.map(course => ({
          "@type": "Course",
          "name": course.title,
          "description": course.description,
          "provider": {
            "@type": "EducationalOrganization",
            "name": "Vincom Computer Enterprise"
          },
          "courseMode": "blended",
          "educationalLevel": course.level,
          "timeRequired": course.duration,
          "offers": {
            "@type": "Offer",
            "price": course.price.replace(/[^\d]/g, ''),
            "priceCurrency": "KES"
          }
        }))
      }
    };
    
    addStructuredData(courseStructuredData);
  }, []);

  const categories = [
    { id: 'all', name: 'All Courses', count: 12 },
    { id: 'basic', name: 'Basic Computing', count: 3 },
    { id: 'office', name: 'Microsoft Office', count: 4 },
    { id: 'design', name: 'Design & Graphics', count: 2 },
    { id: 'web', name: 'Web Development', count: 2 },
    { id: 'business', name: 'Business Skills', count: 1 }
  ];

  const courses = [
    {
      id: 1,
      title: "Basic Computer Skills",
      category: "basic",
      level: "Beginner",
      duration: "4 weeks",
      price: "KSh 3,000",
      rating: 4.8,
      students: 150,
      description: "Learn fundamental computer skills including operating systems, file management, and basic applications.",
      features: [
        "Computer basics and terminology",
        "Windows/Mac operating systems",
        "File and folder management",
        "Internet browsing and email",
        "Basic troubleshooting",
        "Digital safety and security"
      ],
      schedule: ["Morning: 8AM-12PM", "Afternoon: 2PM-6PM", "Evening: 6PM-10PM"],
      instructor: "Sarah Wanjiku",
      certificate: true,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Microsoft Office Suite",
      category: "office",
      level: "Intermediate",
      duration: "6 weeks",
      price: "KSh 4,500",
      rating: 4.9,
      students: 200,
      description: "Master Microsoft Word, Excel, PowerPoint, and Access for professional productivity.",
      features: [
        "Microsoft Word advanced features",
        "Excel formulas and functions",
        "PowerPoint presentations",
        "Access database basics",
        "Integration between applications",
        "Professional document creation"
      ],
      schedule: ["Morning: 8AM-12PM", "Evening: 6PM-10PM"],
      instructor: "David Kimani",
      certificate: true,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Web Design & Development",
      category: "web",
      level: "Intermediate",
      duration: "8 weeks",
      price: "KSh 8,000",
      rating: 4.7,
      students: 80,
      description: "Learn to create modern, responsive websites using HTML, CSS, JavaScript, and popular frameworks.",
      features: [
        "HTML5 and CSS3 fundamentals",
        "Responsive web design",
        "JavaScript programming",
        "Bootstrap framework",
        "WordPress development",
        "Website deployment"
      ],
      schedule: ["Evening: 6PM-10PM", "Weekend: 9AM-5PM"],
      instructor: "Vincent Mutunga",
      certificate: true,
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Graphic Design Mastery",
      category: "design",
      level: "Intermediate",
      duration: "6 weeks",
      price: "KSh 6,000",
      rating: 4.8,
      students: 120,
      description: "Master Adobe Creative Suite and design principles for professional graphic design work.",
      features: [
        "Adobe Photoshop mastery",
        "Adobe Illustrator techniques",
        "InDesign for publications",
        "Logo and brand design",
        "Print and digital design",
        "Portfolio development"
      ],
      schedule: ["Afternoon: 2PM-6PM", "Evening: 6PM-10PM"],
      instructor: "Grace Akinyi",
      certificate: true,
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Digital Marketing",
      category: "business",
      level: "Intermediate",
      duration: "5 weeks",
      price: "KSh 5,500",
      rating: 4.6,
      students: 90,
      description: "Learn modern digital marketing strategies including social media, SEO, and online advertising.",
      features: [
        "Social media marketing",
        "Search engine optimization",
        "Google Ads and Facebook Ads",
        "Content marketing strategy",
        "Email marketing campaigns",
        "Analytics and reporting"
      ],
      schedule: ["Evening: 6PM-10PM", "Weekend: 2PM-6PM"],
      instructor: "John Mwangi",
      certificate: true,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Advanced Excel & Data Analysis",
      category: "office",
      level: "Advanced",
      duration: "4 weeks",
      price: "KSh 4,000",
      rating: 4.9,
      students: 75,
      description: "Master advanced Excel features, data analysis, and visualization techniques.",
      features: [
        "Advanced formulas and functions",
        "Pivot tables and charts",
        "Data analysis tools",
        "Macros and VBA basics",
        "Dashboard creation",
        "Business intelligence"
      ],
      schedule: ["Morning: 8AM-12PM", "Weekend: 9AM-1PM"],
      instructor: "Mary Akinyi",
      certificate: true,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const testimonials = [
    {
      name: "Peter Ochieng",
      course: "Microsoft Office Suite",
      rating: 5,
      text: "The training was excellent! I learned so much and now I'm confident using Excel for my business.",
      image: "/api/placeholder/60/60"
    },
    {
      name: "Jane Wanjiru",
      course: "Web Design & Development",
      rating: 5,
      text: "Amazing course! I can now create professional websites. The instructor was very patient and helpful.",
      image: "/api/placeholder/60/60"
    },
    {
      name: "Samuel Kiprotich",
      course: "Graphic Design Mastery",
      rating: 5,
      text: "I'm now working as a freelance designer thanks to this course. Highly recommended!",
      image: "/api/placeholder/60/60"
    }
  ];

  const faqs = [
    {
      question: "Do I need prior computer experience?",
      answer: "No prior experience is required for our basic courses. We have courses designed for complete beginners as well as advanced users."
    },
    {
      question: "Are certificates provided?",
      answer: "Yes, all students receive certificates of completion that are recognized by employers and can enhance your CV."
    },
    {
      question: "What are the class schedules?",
      answer: "We offer flexible schedules including morning, afternoon, evening, and weekend classes to accommodate different lifestyles."
    },
    {
      question: "Can I get one-on-one training?",
      answer: "Yes, we offer personalized one-on-one training sessions tailored to your specific needs and learning pace."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, M-Pesa, Airtel Money, and bank transfers. Payment plans are also available for longer courses."
    }
  ];

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  const handleEnrollmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello! I would like to enroll in the ${enrollmentForm.course} course.\n\nName: ${enrollmentForm.name}\nEmail: ${enrollmentForm.email}\nPhone: ${enrollmentForm.phone}\nPreferred Schedule: ${enrollmentForm.schedule}\nExperience Level: ${enrollmentForm.experience}\nMessage: ${enrollmentForm.message}`;
    const whatsappUrl = `https://wa.me/254726564132?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const openCourseModal = (course: any) => {
    setSelectedCourse(course);
    setEnrollmentForm(prev => ({ ...prev, course: course.title }));
  };

  const closeCourseModal = () => {
    setSelectedCourse(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 via-black to-red-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Professional Computer Training
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Master digital skills with expert instructors. Flexible schedules, hands-on learning, and industry-recognized certificates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Browse Courses
            </button>
            <Link 
              to="/contact?service=Computer Training"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-200"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">1000+</div>
              <div className="text-gray-600">Students Trained</div>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">12</div>
              <div className="text-gray-600">Course Programs</div>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">Flexible</div>
              <div className="text-gray-600">Schedules</div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Categories Filter */}
      <section className="py-12 bg-gray-100" id="courses">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Training Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of computer training courses designed for all skill levels
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-48">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {course.level}
                  </div>
                  <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
                    {course.duration}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(course.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                      ))}
                      <span className="text-sm text-gray-600 ml-2">({course.students} students)</span>
                    </div>
                    <div className="text-2xl font-bold text-green-600">{course.price}</div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    {course.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-gray-500 text-sm">
                      <User className="w-4 h-4 mr-1" />
                      {course.instructor}
                    </div>
                    {course.certificate && (
                      <div className="flex items-center text-green-600 text-sm">
                        <Award className="w-4 h-4 mr-1" />
                        Certificate
                      </div>
                    )}
                  </div>
                  
                  <div className="flex gap-3">
                    <button
                      onClick={() => openCourseModal(course)}
                      className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium"
                    >
                      View Details
                    </button>
                    <Link
                      to={`/contact?service=Computer Training&course=${encodeURIComponent(course.title)}`}
                      className="flex-1 border-2 border-green-600 text-green-600 py-2 rounded-lg hover:bg-green-600 hover:text-white transition-colors duration-200 font-medium text-center"
                    >
                      Enroll Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full bg-white rounded-xl overflow-hidden overflow-y-auto">
            <button
              onClick={closeCourseModal}
              className="absolute top-4 right-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center z-10 transition-colors"
            >
              <span className="text-gray-600 text-xl">×</span>
            </button>
            
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-64 lg:h-full">
                <img 
                  src={selectedCourse.image} 
                  alt={selectedCourse.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-8">
                <div className="mb-4">
                  <span className="text-sm text-green-600 font-medium">{selectedCourse.level}</span>
                  <h2 className="text-3xl font-bold text-gray-900 mt-2">{selectedCourse.title}</h2>
                  <div className="text-2xl font-bold text-green-600 mt-2">{selectedCourse.price}</div>
                </div>
                
                <p className="text-gray-600 mb-6">{selectedCourse.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What You'll Learn:</h4>
                  <ul className="space-y-2">
                    {selectedCourse.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Available Schedules:</h4>
                  <div className="space-y-2">
                    {selectedCourse.schedule.map((time: string, index: number) => (
                      <div key={index} className="flex items-center">
                        <Clock className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="text-gray-700">{time}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Link
                    to={`/contact?service=Computer Training&course=${encodeURIComponent(selectedCourse.title)}`}
                    className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 text-center font-medium"
                  >
                    Enroll Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Student Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our graduates who have transformed their careers through our training programs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-red-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.course}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our training programs
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  className="w-full bg-white rounded-lg p-6 text-left flex items-center justify-between hover:shadow-md transition-shadow duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  {expandedFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {expandedFAQ === index && (
                  <div className="bg-white px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 via-black to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Learning?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of successful graduates and transform your career with our professional training programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact?service=Computer Training"
              className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Enroll Today
            </Link>
            <a 
              href="tel:+254726564132"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-200"
            >
              Call for Info
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Training;