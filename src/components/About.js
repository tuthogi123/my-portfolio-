import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaJs, FaHtml5, FaCss3, FaGithub } from "react-icons/fa";
import profilePic from "../assets/profile.jpg"; 

const About = () => {
  return (
    <section className="p-10 min-h-screen flex flex-col items-center bg-gradient-to-br from-gray-100 to-gray-300 text-gray-900">
    
      <motion.img
        src={profilePic}
        alt="Karani Evans profile"
        className="w-40 h-40 rounded-full shadow-lg mb-6 border-4 border-blue-500"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      
      <motion.h2
        className="text-4xl font-bold text-blue-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="mt-4 text-lg text-center max-w-2xl leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        I'm <span className="font-bold text-blue-500">Karani Evans</span>, a passionate Full Stack Developer 
        with expertise in React.js, JavaScript, Express.js, Node.js, and MongoDB.  
        I love building intuitive user interfaces  and solving real-world problems through clean, efficient code.
      </motion.p>

      <motion.div
        className="mt-6 flex space-x-6 text-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <FaReact className="text-blue-500" />
        <FaJs className="text-yellow-500" />
        <FaHtml5 className="text-orange-500" />
        <FaCss3 className="text-blue-600" />
        <FaGithub className="text-gray-700" />
      </motion.div>

      <motion.div
        className="mt-8 p-6 bg-white rounded-lg shadow-lg max-w-3xl text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <h3 className="text-2xl font-semibold text-blue-600">Experience</h3>
        <p className="mt-2 text-lg text-gray-700">
          I have worked as a Frontend Developer at Mautamu and currently 
          interning at Cognifyz. I have built responsive web applications, 
          optimized performance, and contributed to open-source projects.
        </p>
      </motion.div>

    
      <motion.div
        className="mt-8 p-6 bg-white rounded-lg shadow-lg max-w-2xl text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
      >
        <h3 className="text-2xl font-semibold text-blue-600">Fun Facts</h3>
        <ul className="mt-2 text-lg text-gray-700 list-disc list-inside">
          <li>💡 I love solving coding challenges.</li>
          <li>🎮 I enjoy gaming and UI design.</li>
          <li>📖 I'm always learning new tech stacks.</li>
        </ul>
      </motion.div>
      
      <motion.a
        href="/contact"
        className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-blue-700 transition transform hover:scale-105"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        Let's Connect
      </motion.a>

    </section>
  );
};

export default About;
