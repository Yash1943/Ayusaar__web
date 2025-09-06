import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, Video, Phone } from 'lucide-react';

const Consultation = () => {
  return (
    <>
      <Helmet>
        <title>Book a Consultation | Ayusaar</title>
        <meta name="description" content="Schedule an online or in-person consultation with our expert Ayurvedic doctors at Ayusaar. Get personalized treatment plans and holistic healing solutions." />
      </Helmet>

      <div className="py-16 bg-[#faf5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold text-center mb-12">Book a Consultation</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Consultation Types */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-6">Consultation Options</h2>
                
                <div className="space-y-6">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-4 border rounded-lg hover:border-green-500 cursor-pointer"
                  >
                    <div className="flex items-center mb-2">
                      <Video className="h-6 w-6 text-green-600 mr-2" />
                      <h3 className="text-lg font-medium">Online Consultation</h3>
                    </div>
                    <p className="text-gray-600">Connect with our doctors from the comfort of your home</p>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-4 border rounded-lg hover:border-green-500 cursor-pointer"
                  >
                    <div className="flex items-center mb-2">
                      <Phone className="h-6 w-6 text-green-600 mr-2" />
                      <h3 className="text-lg font-medium">Phone Consultation</h3>
                    </div>
                    <p className="text-gray-600">Speak directly with our experts over the phone</p>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-4 border rounded-lg hover:border-green-500 cursor-pointer"
                  >
                    <div className="flex items-center mb-2">
                      <Calendar className="h-6 w-6 text-green-600 mr-2" />
                      <h3 className="text-lg font-medium">In-Person Visit</h3>
                    </div>
                    <p className="text-gray-600">Visit our clinic for a personal consultation</p>
                  </motion.div>
                </div>
              </div>

              {/* Booking Form */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-6">Schedule Your Visit</h2>
                
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border rounded-md focus:ring-green-500 focus:border-green-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border rounded-md focus:ring-green-500 focus:border-green-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-3 py-2 border rounded-md focus:ring-green-500 focus:border-green-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-3 py-2 border rounded-md focus:ring-green-500 focus:border-green-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Consultation Type
                    </label>
                    <select className="w-full px-3 py-2 border rounded-md focus:ring-green-500 focus:border-green-500">
                      <option>Online Consultation</option>
                      <option>Phone Consultation</option>
                      <option>In-Person Visit</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
                  >
                    Book Appointment
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Consultation;