import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between items-center">
      <h1 className="text-xl font-bold">My Portfolio</h1>
      <ul className="flex space-x-4">
        <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
        <li><Link to="/about" className="hover:text-gray-400">About</Link></li>
        <li><Link to="/projects" className="hover:text-gray-400">Projects</Link></li>
        <li><Link to="/skills" className="hover:text-gray-400">Skills</Link></li>
        <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
        <li><Link to="/blog" className="hover:text-gray-400">Blog</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
