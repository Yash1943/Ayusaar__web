import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Leaf, Heart, Sprout } from 'lucide-react';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const values = [
    {
      icon: Leaf,
      title: "Pure & Natural",
      description: "100% organic ingredients sourced directly from nature"
    },
    {
      icon: Heart,
      title: "Traditional Wisdom",
      description: "Ancient Ayurvedic formulations for modern wellness"
    },
    {
      icon: Sprout,
      title: "Sustainable",
      description: "Eco-friendly practices from sourcing to packaging"
    }
  ];

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-green-800 mb-6">
            Rediscover Natural Wellness
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            At Ayusaar, we blend ancient Ayurvedic wisdom with modern science to create
            pure, effective products that enhance your well-being naturally.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center p-6 rounded-xl bg-green-50"
            >
              <value.icon className="mx-auto mb-4 text-green-600" size={40} />
              <h3 className="text-xl font-semibold text-green-800 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}