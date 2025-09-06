import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center">
              <Leaf className="h-8 w-8 text-green-500" />
              <span className="ml-2 text-2xl font-semibold">Ayusaar</span>
            </Link>
            <p className="mt-4 text-gray-400">
              The Essence of Life - Discover the power of Ayurvedic healing
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/consultation" className="text-gray-400 hover:text-white transition-colors">
                  Consultation
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-green-500 mr-2" />
                <a
                  href="tel:+916354909494"
                  className="text-gray-400 hover:text-green-600 transition-colors"
                >
                  +91 6354909494
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-gray-400">ayusaarofficial@gmail.com</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-gray-400">Visnagar,Gujarat,India-384315</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for updates and wellness tips.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded-r-md hover:bg-green-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Ayusaar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;