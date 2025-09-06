import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const products = [
  {
    name: "Herbal Supplements",
    image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=800&auto=format&fit=crop&q=60",
    description: "Natural supplements for holistic wellness"
  },
  {
    name: "Skin Care",
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&auto=format&fit=crop&q=60",
    description: "Organic skincare for radiant beauty"
  },
  {
    name: "Wellness Teas",
    image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800&auto=format&fit=crop&q=60",
    description: "Therapeutic blends for mind and body"
  }
];

export default function Products() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-green-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-green-800 mb-6">
            Coming Soon
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience our carefully crafted range of authentic Ayurvedic products
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="rounded-xl overflow-hidden shadow-lg bg-white"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}