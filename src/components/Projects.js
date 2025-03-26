import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Expense Tracker",
    description: "A simple and interactive expense tracking app with chart integration.",
    tech: ["React.js", "LocalStorage", "Chart.js"],
    demo: "#",
    github: "#",
  },
  {
    title: "Wardrobe Management System",
    description: "A Vue & Laravel-based system to organize and track clothing inventory.",
    tech: ["Vue.js", "Laravel", "MySQL"],
    demo: "#",
    github: "#",
  },
  {
    title: "Vendor App",
    description: "A React-based inventory and sales management app for vendors.",
    tech: ["React.js", "Context API", "Firebase"],
    demo: "#",
    github: "#",
  },
];

const Projects = () => (
  <section className="p-10 bg-gradient-to-br from-gray-100 to-gray-300 min-h-screen">
    <motion.h2
      className="text-4xl font-bold text-center text-blue-600"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Projects
    </motion.h2>


    <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="p-6 bg-white shadow-lg rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
        >
          
          <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>

          
          <p className="mt-2 text-gray-700">{project.description}</p>

          <div className="mt-3 flex flex-wrap gap-2">
            {project.tech.map((tech, idx) => (
              <span
                key={idx}
                className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-4 flex gap-4">
            <a
              href={project.demo}
              className="flex items-center text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo <FaExternalLinkAlt className="ml-2" />
            </a>
            <a
              href="https://github.com/tuthogi123/vendor-app"
              className="flex items-center text-gray-700 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <FaGithub className="ml-2" />
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Projects;
