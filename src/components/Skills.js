import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaJs, FaNodeJs, FaHtml5, FaCss3, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";

const skills = [
  { name: "React.js", icon: <FaReact className="text-blue-500" /> },
 
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3 className="text-blue-600" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-700" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-700" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },

  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-700" /> },
];

const Skills = () => (
  <section className="p-10 bg-gradient-to-br from-gray-100 to-gray-300 min-h-screen">
    
    <motion.h2
      className="text-4xl font-bold text-center text-blue-600"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Skills & Tech Stack
    </motion.h2>

    {/* Skills Grid */}
    <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg w-32 h-32"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
        >
          <div className="text-4xl">{skill.icon}</div>
          <p className="mt-2 text-gray-800 font-semibold">{skill.name}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Skills;
