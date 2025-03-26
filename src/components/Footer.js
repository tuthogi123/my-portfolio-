import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto text-center">
        
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com/tuthogi123"  target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <i className="fab fa-github text-2xl"></i>
          </a>
          <a href="https://www.linkedin.com/in/evans-karani/"  target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
          <a href="https://twitter.com/@karanievans254" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <i className="fab fa-twitter text-2xl"></i>
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center space-x-6 mb-4">
          <a href="/" className="hover:text-gray-400">Home</a>
          <a href="/about" className="hover:text-gray-400">About</a>
          <a href="/projects" className="hover:text-gray-400">Projects</a>
          <a href="/contact" className="hover:text-gray-400">Contact</a>
        </div>

        <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Karani Evans. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
