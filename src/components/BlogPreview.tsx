import React from 'react';
import { Calendar, User, Clock, ArrowRight, BookOpen, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPreview = () => {
  const featuredPosts = [
    {
      id: 1,
      title: "Complete Guide to eCitizen Services in Kenya 2024",
      excerpt: "Everything you need to know about accessing government services online, from birth certificates to passport applications.",
      author: "Vincent Mutunga",
      date: "2024-01-15",
      category: "Government Services",
      readTime: "8 min read",
      views: 2450,
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Digital Skills for the Modern Workplace",
      excerpt: "Essential computer skills every professional needs in today's digital economy.",
      author: "Sarah Wanjiku",
      date: "2024-01-12",
      category: "Technology",
      readTime: "6 min read",
      views: 1890,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Starting Your Business: Registration Made Easy",
      excerpt: "Step-by-step guide to registering your business in Kenya and getting all necessary permits.",
      author: "David Kimani",
      date: "2024-01-10",
      category: "Business",
      readTime: "10 min read",
      views: 3200,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Latest Insights & Tips
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay informed with our latest articles on digital services, technology trends, 
            and helpful guides for navigating Kenya's digital landscape.
          </p>
          <div className="flex items-center justify-center mt-6 space-x-2">
            <BookOpen className="w-6 h-6 text-green-600" />
            <span className="text-lg font-medium text-gray-700">Fresh content updated weekly</span>
          </div>
        </div>

        {/* Featured Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-48">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>{post.views.toLocaleString()}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-red-600 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-gray-900">{post.author}</p>
                      <div className="flex items-center space-x-1 text-xs text-gray-600">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <Link 
                    to={`/blog/${post.id}`}
                    className="text-green-600 hover:text-green-700 font-semibold flex items-center space-x-1 group"
                  >
                    <span>Read</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-600 via-black to-red-600 rounded-2xl shadow-xl p-8 max-w-3xl mx-auto text-white">
            <h3 className="text-3xl font-bold mb-4">
              Explore More Articles
            </h3>
            <p className="text-lg mb-6 text-gray-200">
              Discover comprehensive guides, tips, and insights to help you navigate 
              digital services and technology with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/blog"
                className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <BookOpen className="w-5 h-5" />
                <span>View All Articles</span>
              </Link>
              <Link 
                to="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-200"
              >
                Ask Our Experts
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;