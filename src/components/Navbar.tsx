import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Leaf, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-2xl font-semibold text-gray-900">Ayusaar</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              to="/consultation" 
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              Consultation
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              About
            </Link>
            <Link
              to="/consultation"
              className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors font-medium"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-white"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-50 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/consultation"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-50 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Consultation
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-50 font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/consultation"
              className="block px-3 py-2 text-green-600 font-medium hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Book Appointment
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;