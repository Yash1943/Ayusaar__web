import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Heart, Users, Clock, Instagram, Facebook, Youtube, Leaf, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const heroContent = [
  {
    image: 'https://images.unsplash.com/photo-1611071536600-2dc38af40d77?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    title: 'Ancient Wisdom, Modern Healing',
    description: 'Discover the transformative power of traditional Ayurvedic medicine'
  },
  {
    image: 'https://images.unsplash.com/photo-1545048702-79362596cdc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    title: 'Balance Your Doshas',
    description: 'Personalized treatments based on your unique constitution'
  },
  {
    image: 'https://images.unsplash.com/photo-1552693673-1bf958298935?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    title: 'Natural Healing Remedies',
    description: 'Pure herbs and traditional preparations for holistic wellness'
  },
  {
    image: 'https://images.unsplash.com/photo-1598901865264-4f26e3d3f28c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    title: 'Mind-Body Harmony',
    description: 'Achieve perfect balance through Ayurvedic practices'
  },
  {
    image: 'https://images.unsplash.com/photo-1617952385804-7b326fa42766?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    title: 'Panchakarma Therapy',
    description: 'Experience deep cleansing and rejuvenation'
  },
  {
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    title: 'Spiritual Wellness',
    description: 'Connect with your inner self through Ayurvedic wisdom'
  },
  {
    image: 'https://images.unsplash.com/photo-1616198814651-e71f960c3180?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    title: 'Herbal Excellence',
    description: 'Premium quality Ayurvedic herbs and formulations'
  }
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === heroContent.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Helmet>
        <title>Ayusaar - The Essence of Life | Ayurvedic Wellness</title>
        <meta name="description" content="Discover the essence of life with Ayusaar. Expert Ayurvedic consultations, holistic healing, and natural wellness solutions for a balanced lifestyle." />
        <meta name="keywords" content="Ayusaar, Ayurveda, holistic healing, wellness, natural medicine, doctor consultation, health" />
      </Helmet>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[90vh] flex items-center overflow-hidden"
      >
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url("${heroContent[currentIndex].image}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              key={`title-${currentIndex}`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              {heroContent[currentIndex].title}
            </motion.h1>
            <motion.p
              key={`desc-${currentIndex}`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-white mb-8"
            >
              {heroContent[currentIndex].description}
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="space-x-4"
            >
              <Link
                to="/consultation"
                className="bg-green-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-green-700 transition-colors inline-block"
              >
                Begin Your Wellness Journey
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Image Navigation Dots */}
        <div className="absolute bottom-8 left-0 right-0">
          <div className="flex justify-center space-x-2">
            {heroContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-white scale-125' : 'bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of Ayurvedic treatments and consultations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 p-8 rounded-lg text-center"
            >
              <Heart className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Holistic Healing</h3>
              <p className="text-gray-600">Natural and comprehensive approach to wellness through traditional Ayurvedic practices</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 p-8 rounded-lg text-center"
            >
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Doctors</h3>
              <p className="text-gray-600">Experienced Ayurvedic practitioners with deep knowledge of traditional medicine</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 p-8 rounded-lg text-center"
            >
              <Clock className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock care and assistance for your wellness journey</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-4">Coming Soon</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We're expanding our services to serve you better
              </p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <Calendar className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Online Appointments</h3>
              <p className="text-gray-600">Easy scheduling system for virtual consultations</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <Leaf className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Herbal Store</h3>
              <p className="text-gray-600">Premium Ayurvedic products and supplements</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <Users className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Wellness Programs</h3>
              <p className="text-gray-600">Comprehensive health and lifestyle packages</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Connect With Us</h2>
          <div className="flex justify-center space-x-8">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://www.instagram.com/ayusaarofficial/"
              // target="https://www.instagram.com/ayusaarofficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full text-white"
            >
              <Instagram className="h-8 w-8" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://www.facebook.com/profile.php?id=61574223710354"
              // target="https://www.facebook.com/profile.php?id=61574223710354"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 p-3 rounded-full text-white"
            >
              <Facebook className="h-8 w-8" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://www.youtube.com/@Ayusaar"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-400 p-3 rounded-full text-white"
            >
              <Youtube className="h-8 w-8" />
            </motion.a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;