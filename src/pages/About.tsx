import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Leaf, Heart, Users } from 'lucide-react';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Ayusaar - The Essence of Life</title>
        <meta name="description" content="Learn about Ayusaar's mission to provide holistic Ayurvedic healing and wellness solutions. Discover our expert team and commitment to natural healthcare." />
      </Helmet>

      <div className="py-16 bg-[#faf5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <Leaf className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h1 className="text-4xl font-bold mb-4">About Ayusaar</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the essence of life through ancient Ayurvedic wisdom combined with modern healthcare practices.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white p-8 rounded-lg shadow-md"
              >
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="text-gray-600">
                  At Ayusaar, we are dedicated to bringing the ancient wisdom of Ayurveda to modern healthcare. 
                  Our mission is to provide holistic healing solutions that address the root cause of health issues 
                  while promoting overall wellness and balance in life.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white p-8 rounded-lg shadow-md"
              >
                <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
                <p className="text-gray-600">
                  We envision a world where traditional Ayurvedic practices and modern healthcare work in harmony 
                  to provide comprehensive wellness solutions. Our goal is to make authentic Ayurvedic treatment 
                  accessible to everyone seeking natural healing alternatives.
                </p>
              </motion.div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mb-16">
              <h2 className="text-2xl font-semibold text-center mb-8">Why Choose Ayusaar?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <Heart className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Holistic Approach</h3>
                  <p className="text-gray-600">
                    We treat not just symptoms but the whole person, ensuring complete wellness of body, mind, and spirit.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Expert Practitioners</h3>
                  <p className="text-gray-600">
                    Our team consists of experienced Ayurvedic doctors with deep knowledge of traditional practices.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <Leaf className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Natural Healing</h3>
                  <p className="text-gray-600">
                    We use pure, natural remedies and time-tested Ayurvedic treatments for sustainable healing.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;