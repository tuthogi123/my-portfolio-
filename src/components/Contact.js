import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="p-10 bg-gradient-to-r from-gray-100 to-gray-300 min-h-screen flex flex-col items-center">
      <motion.h2
        className="text-4xl font-bold text-blue-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h2>

      
      <motion.div
        className="mt-6 text-lg text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <p className="flex items-center gap-2">
          <FaEnvelope className="text-red-500" /> evanskarani076@gmail.com
        </p>
        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://www.linkedin.com/in/evans-karani/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 text-3xl hover:scale-110 transition-transform"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/tuthogi123"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 text-3xl hover:scale-110 transition-transform"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com/@karanievans254"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 text-3xl hover:scale-110 transition-transform"
          >
            <FaTwitter />
          </a>
        </div>
      </motion.div>

      
      <motion.form
        className="mt-10 w-full max-w-md bg-white p-6 rounded-lg shadow-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <label className="block mb-2 font-semibold">Your Name</label>
        <input type="text" className="w-full p-2 border rounded-md mb-4" placeholder="Enter your name" />

        <label className="block mb-2 font-semibold">Your Email</label>
        <input type="email" className="w-full p-2 border rounded-md mb-4" placeholder="Enter your email" />

        <label className="block mb-2 font-semibold">Your Message</label>
        <textarea className="w-full p-2 border rounded-md mb-4" placeholder="Write your message..." rows="4"></textarea>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </motion.form>
    </section>
  );
};

export default Contact;
