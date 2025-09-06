import React from "react";
import { motion } from "framer-motion";
import { Package } from "lucide-react";

const Products = () => {
    return (
        <div className="bg-gradient-to-br from-green-50 via-white to-green-100 min-h-screen flex flex-col items-center justify-center px-4">
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
            >
                <div className="flex justify-center mb-6">
                    <motion.div
                        whileHover={{ rotate: 20 }}
                        transition={{ duration: 0.4 }}
                        className="p-6 bg-green-100 rounded-full shadow-md"
                    >
                        <Package className="h-12 w-12 text-green-600" />
                    </motion.div>
                </div>

                <h1 className="text-4xl font-extrabold text-gray-900">Our Products</h1>
                <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
                    We’re working hard to bring you a curated selection of natural,
                    sustainable, and Ayurvedic products to enhance your lifestyle.
                </p>

                {/* Coming Soon Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mt-12 bg-white rounded-2xl shadow-lg px-8 py-16 inline-block"
                >
                    <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
                        🚀 Coming Soon
                    </h2>
                    <p className="text-gray-600 text-center">
                        Stay tuned for exciting product launches!
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Products;
