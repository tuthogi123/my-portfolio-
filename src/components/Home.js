import React from "react";
import { ReactTyped as Typed } from "react-typed";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import profilePic from "../assets/profile.jpg";

const Home = () => {
  return (
    <section className="relative p-10 text-center min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      
      
      <motion.img
        src={profilePic}
        alt="Karani Evans profile picture"
        className="w-32 h-32 rounded-full shadow-lg mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      />

      <motion.h1
        className="text-5xl font-bold"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Hi, I'm KARANI EVANS
      </motion.h1>

      <Typed
        className="mt-4 text-lg"
        strings={[
          "Full Stack Developer", 
          "React.js Enthusiast", 
          "JavaScript Expert", 
          "Node.js", 
          "Express.js", 
          "MongoDB"
        ]}
        typeSpeed={40}
        backSpeed={50}
        loop
      />

      <motion.div
        className="mt-6 flex space-x-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <a
          href="/contact"
          className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-200 hover:scale-105 transition duration-300"
        >
          Hire Me
        </a>
        <a
          href="/resume.pdf"
          download
          className="border border-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-blue-600 hover:scale-105 transition duration-300"
        >
          Download Resume
        </a>
      </motion.div>

      <motion.div
        className="mt-6 flex space-x-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <a 
          href="https://github.com/tuthogi123" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="GitHub profile"
          className="text-white hover:text-gray-300 hover:scale-110 transition-transform"
        >
          <FaGithub className="text-3xl" />
        </a>
        <a 
          href="https://www.linkedin.com/in/evans-karani/" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="LinkedIn profile"
          className="text-white hover:text-gray-300 hover:scale-110 transition-transform"
        >
          <FaLinkedin className="text-3xl" />
        </a>
        <a 
          href="https://twitter.com/@karanievans254" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Twitter profile"
          className="text-white hover:text-gray-300 hover:scale-110 transition-transform"
        >
          <FaTwitter className="text-3xl" />
        </a>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 text-lg"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        <p className="text-white">Scroll Down ↓</p>
      </motion.div>

    </section>
  );
};

export default Home;
