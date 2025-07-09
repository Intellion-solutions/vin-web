import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  Bus, 
  Car, 
  Truck, 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  CreditCard,
  CheckCircle,
  AlertCircle,
  Phone,
  MessageCircle,
  Filter,
  Search,
  Star,
  Shield,
  Zap,
  Award,
  Navigation,
  User,
  Mail
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { addStructuredData } from '../utils/seo';

const Booking = () => {
  const [selectedService, setSelectedService] = useState('bus');
  const [bookingStep, setBookingStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    service: 'bus',
    from: '',
    to: '',
    date: '',
    time: '',
    passengers: 1,
    vehicleType: '',
    name: '',
    phone: '',
    email: '',
    specialRequests: ''
  });
  const [availableRoutes, setAvailableRoutes] = useState<any[]>([]);
  const [selectedRoute, setSelectedRoute] = useState<any>(null);

  // SEO Configuration
  useSEO({
    title: 'Fleet Booking Services - Bus, Car & Truck Rentals | Vincom Computer Enterprise',
    description: 'Book buses, cars, trucks and transport services in Kenya. Reliable fleet booking, competitive rates, 24/7 support. Airport transfers, corporate transport, cargo services available.',
    keywords: 'fleet booking Kenya, bus booking Kenya, car rental Kenya, truck hire Kenya, transport services Kenya, airport transfer Kenya, corporate transport, cargo transport, vehicle rental Homabay',
    type: 'website'
  });

  // Add structured data for booking services
  useEffect(() => {
    const bookingStructuredData = {
      "@context": "https://schema.org",
      "@type": "TravelAgency",
      "name": "Vincom Computer Enterprise Fleet Booking",
      "description": "Professional fleet booking and transportation services in Kenya",
      "url": "https://vincomcomputerenterprise.co.ke/booking",
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
        "name": "Transport Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Bus Booking",
              "description": "Comfortable bus transportation for all routes in Kenya"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Car Rental",
              "description": "Reliable car rental services for personal and business use"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Truck Hire",
              "description": "Heavy-duty trucks for cargo and construction needs"
            }
          }
        ]
      }
    };
    
    addStructuredData(bookingStructuredData);
  }, []);

  const services = [
    {
      id: 'bus',
      name: 'Bus Booking',
      icon: Bus,
      description: 'Comfortable bus travel for all major routes',
      features: ['All major routes', 'Comfortable seating', 'Air conditioning', 'Professional drivers'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'car',
      name: 'Car Rental',
      icon: Car,
      description: 'Reliable cars for personal and business use',
      features: ['Various car models', 'Daily/weekly rates', 'Insurance included', 'GPS navigation'],
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'truck',
      name: 'Truck Hire',
      icon: Truck,
      description: 'Heavy-duty trucks for cargo and construction',
      features: ['Different truck sizes', 'Cargo transport', 'Construction support', 'Experienced drivers'],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const popularRoutes = [
    {
      id: 1,
      from: 'Nairobi',
      to: 'Kisumu',
      duration: '6 hours',
      price: 'KSh 1,200',
      company: 'Modern Coast',
      rating: 4.5,
      amenities: ['AC', 'WiFi', 'Charging ports'],
      departure: '07:00, 14:00, 20:00'
    },
    {
      id: 2,
      from: 'Nairobi',
      to: 'Mombasa',
      duration: '8 hours',
      price: 'KSh 1,500',
      company: 'Tahmeed',
      rating: 4.3,
      amenities: ['AC', 'Entertainment', 'Meals'],
      departure: '08:00, 15:00, 21:00'
    },
    {
      id: 3,
      from: 'Kisumu',
      to: 'Homabay',
      duration: '2 hours',
      price: 'KSh 400',
      company: 'Homabay Shuttle',
      rating: 4.2,
      amenities: ['AC', 'Music'],
      departure: '06:00, 10:00, 14:00, 18:00'
    },
    {
      id: 4,
      from: 'Nairobi',
      to: 'Eldoret',
      duration: '5 hours',
      price: 'KSh 1,000',
      company: 'Eldoret Express',
      rating: 4.4,
      amenities: ['AC', 'WiFi'],
      departure: '07:30, 13:30, 19:30'
    }
  ];

  const carTypes = [
    {
      id: 'economy',
      name: 'Economy Car',
      price: 'KSh 3,000/day',
      features: ['Fuel efficient', 'Manual transmission', 'Basic insurance'],
      image: 'https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'suv',
      name: 'SUV',
      price: 'KSh 6,000/day',
      features: ['4WD capability', 'Spacious interior', 'Comprehensive insurance'],
      image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'luxury',
      name: 'Luxury Car',
      price: 'KSh 10,000/day',
      features: ['Premium comfort', 'Advanced features', 'Full insurance'],
      image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  const truckTypes = [
    {
      id: 'pickup',
      name: 'Pickup Truck',
      price: 'KSh 4,000/day',
      capacity: '1 ton',
      features: ['Open bed', 'City delivery', 'Fuel efficient']
    },
    {
      id: 'lorry',
      name: 'Medium Lorry',
      price: 'KSh 8,000/day',
      capacity: '5 tons',
      features: ['Covered bed', 'Long distance', 'Professional driver']
    },
    {
      id: 'trailer',
      name: 'Heavy Trailer',
      price: 'KSh 15,000/day',
      capacity: '20 tons',
      features: ['Heavy cargo', 'Construction', 'Experienced crew']
    }
  ];

  const handleInputChange = (field: string, value: any) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello! I would like to book ${bookingData.service} service.\n\nDetails:\nFrom: ${bookingData.from}\nTo: ${bookingData.to}\nDate: ${bookingData.date}\nTime: ${bookingData.time}\nPassengers: ${bookingData.passengers}\nName: ${bookingData.name}\nPhone: ${bookingData.phone}\nEmail: ${bookingData.email}\nSpecial Requests: ${bookingData.specialRequests}`;
    const whatsappUrl = `https://wa.me/254726564132?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const nextStep = () => {
    if (bookingStep < 3) setBookingStep(bookingStep + 1);
  };

  const prevStep = () => {
    if (bookingStep > 1) setBookingStep(bookingStep - 1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 via-black to-red-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Fleet Booking Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Book buses, cars, and trucks for all your transportation needs. Reliable service, competitive rates, 24/7 support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Book Now
            </button>
            <a 
              href="tel:+254726564132"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-200"
            >
              Call for Assistance
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Safe & Secure</h3>
              <p className="text-gray-600">All vehicles are insured and regularly maintained for your safety</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quick Booking</h3>
              <p className="text-gray-600">Fast and easy booking process with instant confirmation</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Drivers</h3>
              <p className="text-gray-600">Experienced and licensed drivers for all vehicle types</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer support for all your needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Selection */}
      <section className="py-16 bg-gray-100" id="booking">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Choose Your Service</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select from our range of transportation services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={service.id}
                  className={`bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                    selectedService === service.id ? 'ring-4 ring-green-500 transform scale-105' : 'hover:shadow-xl'
                  }`}
                  onClick={() => {
                    setSelectedService(service.id);
                    handleInputChange('service', service.id);
                  }}
                >
                  <div className={`bg-gradient-to-r ${service.color} text-white p-6`}>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold">{service.name}</h3>
                    </div>
                    <p className="text-white text-opacity-90">{service.description}</p>
                  </div>
                  
                  <div className="p-6">
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Routes (for bus service) */}
      {selectedService === 'bus' && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Popular Bus Routes</h2>
              <p className="text-lg text-gray-600">Choose from our most popular destinations</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {popularRoutes.map((route) => (
                <div key={route.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <MapPin className="w-5 h-5 text-green-600" />
                        <span className="font-semibold text-lg">{route.from} → {route.to}</span>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {route.duration}
                        </div>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 mr-1 text-yellow-400" />
                          {route.rating}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">{route.price}</div>
                      <div className="text-sm text-gray-600">{route.company}</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {route.amenities.map((amenity, index) => (
                        <span key={index} className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-600">
                      Departures: {route.departure}
                    </div>
                    <button 
                      onClick={() => {
                        handleInputChange('from', route.from);
                        handleInputChange('to', route.to);
                        document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200"
                    >
                      Select Route
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Car Types (for car service) */}
      {selectedService === 'car' && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Available Car Types</h2>
              <p className="text-lg text-gray-600">Choose the perfect car for your needs</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {carTypes.map((car) => (
                <div key={car.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{car.name}</h3>
                    <div className="text-2xl font-bold text-green-600 mb-4">{car.price}</div>
                    <ul className="space-y-2 mb-6">
                      {car.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button 
                      onClick={() => {
                        handleInputChange('vehicleType', car.name);
                        document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors duration-200"
                    >
                      Select Car
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Truck Types (for truck service) */}
      {selectedService === 'truck' && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Available Truck Types</h2>
              <p className="text-lg text-gray-600">Heavy-duty trucks for all your cargo needs</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {truckTypes.map((truck) => (
                <div key={truck.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Truck className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{truck.name}</h3>
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-green-600">{truck.price}</div>
                    <div className="text-gray-600">Capacity: {truck.capacity}</div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {truck.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={() => {
                      handleInputChange('vehicleType', truck.name);
                      document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition-colors duration-200"
                  >
                    Select Truck
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Booking Form */}
      <section className="py-20 bg-gray-100" id="booking-form">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Complete Your Booking</h2>
              
              <form onSubmit={handleBookingSubmit} className="space-y-6">
                {/* Service Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
                    <input
                      type="text"
                      value={bookingData.from}
                      onChange={(e) => handleInputChange('from', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Departure location"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
                    <input
                      type="text"
                      value={bookingData.to}
                      onChange={(e) => handleInputChange('to', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Destination"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                    <input
                      type="date"
                      value={bookingData.date}
                      onChange={(e) => handleInputChange('date', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
                    <input
                      type="time"
                      value={bookingData.time}
                      onChange={(e) => handleInputChange('time', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Number of Passengers</label>
                  <select
                    value={bookingData.passengers}
                    onChange={(e) => handleInputChange('passengers', parseInt(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    {[1,2,3,4,5,6,7,8,9,10].map(num => (
                      <option key={num} value={num}>{num} passenger{num > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>

                {/* Personal Details */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        value={bookingData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        value={bookingData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="+254 XXX XXX XXX"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      value={bookingData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Special Requests</label>
                    <textarea
                      value={bookingData.specialRequests}
                      onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Any special requirements or requests..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-red-600 text-white py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-200"
                >
                  Complete Booking via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Need Help with Your Booking?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our customer support team is available 24/7 to assist you with any questions or special requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+254726564132"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call: +254 726 564 132</span>
            </a>
            <a 
              href="https://wa.me/254726564132"
              className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Support</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Booking;