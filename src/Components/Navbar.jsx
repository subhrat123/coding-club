import { Link } from 'react-router-dom';
import React from 'react';

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-[105px] pt-6 bg-[#040313] h-[100px] text-white relative z-50">
      {/* Left Logo */}
      <div className='flex items-center space-x-16'>
        <a href="#" className="text-white font-bold text-lg leading-none flex flex-col items-center" style={{ fontFamily: "Orbitron, sans-serif" }}>
          <span className="block text-[15px] text-center">CODING</span>
          <span className="block text-[15px] text-center">CLUB</span>
          <span className="block text-[10px] text-center text-blue-400">RSCOE</span>
        </a>
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-16 text-sm pl-20 opacity-95" style={{ fontFamily: "Inter, sans-serif" }}>
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">Pricing</a>
          <a href="#" className="hover:text-gray-300">About Us</a>
          <a href="/team" className="hover:text-gray-300">Team</a>
        </div>
      </div>

      <div>
        {/* Right Authentication Buttons */}
        <div className="flex items-center space-x-10 text-sm opacity-95" style={{ fontFamily: "Inter, sans-serif" }}>
          <Link to="/login" className="hover:text-gray-300">Login</Link>
          <a href="#" className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-700 text-white shadow-md">
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