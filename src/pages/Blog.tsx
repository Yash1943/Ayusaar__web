import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const blogPosts = [
    {
        id: 1,
        title: "The Power of Ayurveda in Daily Life",
        excerpt: "Discover how Ayurveda can bring balance to your lifestyle with simple practices.",
        image: "https://source.unsplash.com/600x400/?ayurveda,nature",
        link: "/blog/ayurveda-daily-life",
    },
    {
        id: 2,
        title: "Top Herbal Remedies for Stress Relief",
        excerpt: "Explore natural herbs and remedies that can help you manage stress effectively.",
        image: "https://source.unsplash.com/600x400/?herbs,medicine",
        link: "/blog/herbal-stress-relief",
    },
    {
        id: 3,
        title: "Mindful Eating with Ayurveda",
        excerpt: "Learn the Ayurvedic approach to mindful eating for better health and energy.",
        image: "https://source.unsplash.com/600x400/?healthy-food,spices",
        link: "/blog/mindful-eating",
    },
];

const Blog = () => {
    return (
        <div className="bg-gradient-to-br from-green-50 via-white to-green-100 min-h-screen pt-20 pb-16">
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <h1 className="text-4xl font-extrabold text-gray-900">Our Blog</h1>
                <p className="mt-3 text-lg text-gray-600">
                    Insights, tips, and stories to help you live a healthier lifestyle.
                </p>
            </motion.div>

            {/* Blog Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {blogPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden"
                        >
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                                    {post.title}
                                </h2>
                                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                                <Link
                                    to={post.link}
                                    className="inline-block px-5 py-2 text-sm font-medium bg-green-600 text-white rounded-full shadow hover:bg-green-700 transition-colors"
                                >
                                    Read More
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
