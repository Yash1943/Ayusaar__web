import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Navigation Links
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Consultation", path: "/consultation" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" }, // ✅ Blog option added
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-lg border-b border-gray-100 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="p-2 rounded-xl bg-green-100 group-hover:bg-green-200"
            >
              <Leaf className="h-7 w-7 text-green-600 group-hover:text-green-700 transition-colors" />
            </motion.div>
            <span className="ml-3 text-2xl font-bold text-gray-900 tracking-tight">
              Ayusaar
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="relative text-gray-700 hover:text-green-600 font-medium transition-colors duration-300 group"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/consultation"
                className="px-6 py-2 bg-green-600 text-white rounded-full shadow-md hover:shadow-lg hover:bg-green-700 transition-all duration-300 font-semibold"
              >
                Book Appointment
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-600 focus:outline-none transition-colors duration-300"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/90 backdrop-blur-lg border-b border-gray-100 shadow-md"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block px-4 py-2 rounded-lg text-gray-700 hover:text-green-600 hover:bg-green-50 font-medium transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/consultation"
                className="block w-full text-center px-4 py-2 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Book Appointment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
