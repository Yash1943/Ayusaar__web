import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Heart, Users, Clock, Instagram, Facebook, Youtube, Leaf, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollEffects } from '../hooks/useScrollEffects';
import ScrollReveal from '../components/ScrollReveal';
import ParallaxSection from '../components/ParallaxSection';

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
  
  // Initialize smooth scroll
  useScrollEffects();

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
        className="relative h-screen flex items-center overflow-hidden"
      >
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url("${heroContent[currentIndex].image}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed'
            }}
          />
        </AnimatePresence>
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70"
          animate={{ opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              key={`title-${currentIndex}`}
              initial={{ y: 50, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -30, opacity: 0, scale: 1.1 }}
              transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              {heroContent[currentIndex].title}
            </motion.h1>
            <motion.p
              key={`desc-${currentIndex}`}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl text-white mb-8"
            >
              {heroContent[currentIndex].description}
            </motion.p>
            <motion.div
              initial={{ y: 30, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="space-x-4"
            >
              <Link
                to="/consultation"
                className="bg-green-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-green-700 hover:scale-105 transition-all duration-300 inline-block shadow-lg hover:shadow-xl"
              >
                Begin Your Wellness Journey
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Image Navigation Dots */}
        <div className="absolute bottom-12 left-0 right-0">
          <div className="flex justify-center space-x-2">
            {heroContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-white scale-125 shadow-lg' : 'bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <ParallaxSection speed={0.3} className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-gradient-to-br from-green-100 to-blue-100" />
        </ParallaxSection>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={0.2}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Services</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover our comprehensive range of Ayurvedic treatments and consultations
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <ScrollReveal direction="up" delay={0.1}>
              <motion.div
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-gray-50 p-8 rounded-lg text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Heart className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Holistic Healing</h3>
                <p className="text-gray-600">Natural and comprehensive approach to wellness through traditional Ayurvedic practices</p>
              </motion.div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.3}>
              <motion.div
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-gray-50 p-8 rounded-lg text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Expert Doctors</h3>
                <p className="text-gray-600">Experienced Ayurvedic practitioners with deep knowledge of traditional medicine</p>
              </motion.div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.5}>
              <motion.div
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-gray-50 p-8 rounded-lg text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Clock className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                <p className="text-gray-600">Round-the-clock care and assistance for your wellness journey</p>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 bg-green-50 relative overflow-hidden">
        <ParallaxSection speed={0.2} className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-gradient-to-tr from-green-200 to-emerald-200" />
        </ParallaxSection>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="scale" delay={0.2}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Coming Soon</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We're expanding our services to serve you better
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollReveal direction="left" delay={0.1}>
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <Calendar className="h-10 w-10 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Online Appointments</h3>
                <p className="text-gray-600">Easy scheduling system for virtual consultations</p>
              </motion.div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.3}>
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <Leaf className="h-10 w-10 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Herbal Store</h3>
                <p className="text-gray-600">Premium Ayurvedic products and supplements</p>
              </motion.div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.5}>
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <Users className="h-10 w-10 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Wellness Programs</h3>
                <p className="text-gray-600">Comprehensive health and lifestyle packages</p>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Ayurvedic Products Gallery */}
      <section className="py-20 bg-white relative overflow-hidden">
        <ParallaxSection speed={0.3} className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-gradient-to-br from-amber-100 to-orange-100" />
        </ParallaxSection>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Authentic Ayurvedic Products</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover our collection of pure, traditional Ayurvedic medicines and wellness products
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollReveal direction="up" delay={0.1}>
              <motion.div
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&auto=format&fit=crop&q=60"
                    alt="Ayurvedic Herbs"
                    className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-lg font-semibold text-green-800 mb-2">Traditional Herbs</h3>
                <p className="text-gray-600 text-sm">Pure medicinal herbs sourced from organic farms</p>
              </motion.div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <motion.div
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&auto=format&fit=crop&q=60"
                    alt="Ayurvedic Oils"
                    className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-lg font-semibold text-green-800 mb-2">Therapeutic Oils</h3>
                <p className="text-gray-600 text-sm">Cold-pressed oils for massage and healing</p>
              </motion.div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.3}>
              <motion.div
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&auto=format&fit=crop&q=60"
                    alt="Ayurvedic Powders"
                    className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-lg font-semibold text-green-800 mb-2">Herbal Powders</h3>
                <p className="text-gray-600 text-sm">Finely ground medicinal powders and churnas</p>
              </motion.div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.4}>
              <motion.div
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&auto=format&fit=crop&q=60"
                    alt="Ayurvedic Tablets"
                    className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-lg font-semibold text-green-800 mb-2">Natural Supplements</h3>
                <p className="text-gray-600 text-sm">Herbal tablets and capsules for daily wellness</p>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50 relative overflow-hidden">
        <ParallaxSection speed={0.4} className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-gradient-to-tl from-green-200 to-blue-200" />
        </ParallaxSection>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">What Our Patients Say</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Real experiences from people who have transformed their health with Ayusaar
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollReveal direction="left" delay={0.1}>
              <motion.div
                whileHover={{ scale: 1.02, rotateY: 2 }}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 relative"
              >
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg font-bold">"</span>
                </div>
                <div className="flex items-center mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&auto=format&fit=crop&q=60"
                    alt="Priya Sharma"
                    className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-green-100"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">Priya Sharma</h4>
                    <p className="text-gray-500 text-sm">Mumbai, Maharashtra</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "Ayusaar's holistic approach completely transformed my digestive health. The personalized treatment plan and natural remedies worked wonders where modern medicine couldn't help."
                </p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="text-lg"
                    >
                      ⭐
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.3}>
              <motion.div
                whileHover={{ scale: 1.02, rotateY: 2 }}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 relative"
              >
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg font-bold">"</span>
                </div>
                <div className="flex items-center mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60"
                    alt="Rajesh Kumar"
                    className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-green-100"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">Rajesh Kumar</h4>
                    <p className="text-gray-500 text-sm">Delhi, India</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "After years of joint pain, Ayusaar's Panchakarma therapy and herbal medicines gave me a new lease on life. I'm pain-free and more energetic than ever!"
                </p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="text-lg"
                    >
                      ⭐
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.5}>
              <motion.div
                whileHover={{ scale: 1.02, rotateY: 2 }}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 relative"
              >
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg font-bold">"</span>
                </div>
                <div className="flex items-center mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=60"
                    alt="Meera Patel"
                    className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-green-100"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">Meera Patel</h4>
                    <p className="text-gray-500 text-sm">Ahmedabad, Gujarat</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "The stress management techniques and herbal supplements from Ayusaar helped me overcome anxiety naturally. Their doctors truly understand mind-body connection."
                </p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="text-lg"
                    >
                      ⭐
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
          <ScrollReveal direction="scale" delay={0.7}>
            <div className="text-center mt-12">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-block bg-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <p className="text-green-600 font-semibold text-lg">
                  Join 10,000+ satisfied patients who chose natural healing
                </p>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </section>
      {/* Social Media Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <ParallaxSection speed={0.4} className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-gradient-to-bl from-purple-100 to-pink-100" />
        </ParallaxSection>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="fade" delay={0.2}>
            <h2 className="text-3xl font-bold text-center mb-12">Connect With Us</h2>
          </ScrollReveal>
          <ScrollReveal direction="scale" delay={0.4}>
            <div className="flex justify-center space-x-8">
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.instagram.com/ayusaarofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Instagram className="h-8 w-8" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.facebook.com/profile.php?id=61574223710354"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 p-4 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Facebook className="h-8 w-8" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.youtube.com/@Ayusaar"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 p-4 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Youtube className="h-8 w-8" />
              </motion.a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Home;