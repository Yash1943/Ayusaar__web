import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';

export default function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-white overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            rotate: 360,
            transition: { duration: 20, repeat: Infinity, ease: "linear" }
          }}
          className="absolute -right-20 -top-20 text-green-100"
        >
          <Leaf size={400} />
        </motion.div>
      </div>
      
      <div className="container mx-auto px-4 text-center z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <Leaf className="mx-auto mb-6 text-green-600" size={64} />
          <h1 className="text-5xl md:text-7xl font-bold text-green-800 mb-6">
            Ayusaar
          </h1>
          <p className="text-xl md:text-2xl text-green-700">
            The Essence of Life
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}