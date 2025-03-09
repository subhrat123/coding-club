import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 md:px-20 py-4 bg-[#040313] h-[80px] text-white relative z-50">
      {/* Left Section: Logo + Navigation Links */}
      <div className="flex items-center space-x-8 md:space-x-16">
        {/* Logo */}
        <a
          href="#"
          className="text-white font-bold text-lg leading-none flex flex-col items-center"
          style={{ fontFamily: "Orbitron, sans-serif" }}
        >
          <span className="block text-[15px] text-center">CODING</span>
          <span className="block text-[15px] text-center">CLUB</span>
          <span className="block text-[10px] text-center text-blue-400">RSCOE</span>
        </a>

        {/* Navigation Links (Hidden in Mobile, Flex in Desktop) */}
        <div
          className="hidden md:flex space-x-8 text-sm opacity-95"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">Pricing</a>
          <a href="#" className="hover:text-gray-300">About Us</a>
          <a href="/team" className="hover:text-gray-300">Team</a>
        </div>
      </div>

      {/* Right Section: Authentication Buttons */}
      <div className="hidden md:flex items-center space-x-10 text-sm opacity-95">
        <Link to="/login" className="hover:text-gray-300">Login</Link>
        <a
          href="#"
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-700 text-white shadow-md"
        >
          Join Now
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute md:hidden top-[80px] left-0 w-full bg-[#040313] transition-all duration-300 ${
          isOpen ? "flex flex-col py-6 space-y-4 shadow-md items-center" : "hidden"
        }`}
      >
        <a href="#" className="hover:text-gray-300">Home</a>
        <a href="#" className="hover:text-gray-300">Pricing</a>
        <a href="#" className="hover:text-gray-300">About Us</a>
        <a href="/team" className="hover:text-gray-300">Team</a>

        <div className="flex flex-col items-center space-y-4 mt-4">
          <Link to="/login" className="hover:text-gray-300">Login</Link>
          <a
            href="#"
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-700 text-white shadow-md"
          >
            Join Now
          </a>
        </div>
      </div>

      {/* White Horizontal Line */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[90%] h-[2px] opacity-35 bg-white"></div>
    </nav>
  );
}

export default Navbar;
