import React from "react";
import { motion } from "framer-motion";

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React",
    excerpt: "Learn the basics of React.js and how to build interactive UIs.",
    link: "#",
    image: "https://source.unsplash.com/400x200/?react,code",
    tag: "React",
  },
  {
    id: 2,
    title: "Mastering JavaScript ES6+",
    excerpt: "Discover modern JavaScript features that improve your coding skills.",
    link: "#",
    image: "https://source.unsplash.com/400x200/?javascript,code",
    tag: "JavaScript",
  },
  {
    id: 3,
    title: "Styling with Tailwind CSS",
    excerpt: "Enhance your UI with Tailwind CSS and utility-first design.",
    link: "#",
    image: "https://source.unsplash.com/400x200/?tailwind,design",
    tag: "CSS",
  },
];

const Blog = () => {
  return (
    <section className="p-10 bg-gray-100 min-h-screen">
      {/* Heading */}
      <motion.h2
        className="text-4xl font-bold text-blue-600 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Blog
      </motion.h2>

      <p className="mt-4 text-center text-lg text-gray-700">
        Sharing insights on frontend development, UI/UX, and best practices.
      </p>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <motion.div
            key={post.id}
            className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 * post.id }}
          >
            <img src={post.image} alt={post.title} className="w-full h-40 object-cover rounded-lg" />
            <div className="mt-4">
              <span className="text-sm text-blue-500 font-semibold">{post.tag}</span>
              <h3 className="text-xl font-semibold mt-2">{post.title}</h3>
              <p className="text-gray-600 mt-2">{post.excerpt}</p>
              <a href={post.link} className="text-blue-600 font-bold mt-3 block hover:underline">
                Read More →
              </a>
            </div>
          </motion.div>
        ))}
      </div>


      <div className="mt-10 text-center">
        <p className="text-lg">More blog posts coming soon!</p>
        <a
          href="#"
          className="mt-4 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          View All Posts
        </a>
      </div>
    </section>
  );
};

export default Blog;
