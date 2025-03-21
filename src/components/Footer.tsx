import React from 'react';
import { Instagram, Facebook, Twitter, Camera } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/assets/images/logo.png" alt="Zenith Logo" className="h-24 w-24" />
            </div>
            <p className="text-gray-600">
              Capturing life's precious moments with artistic excellence and professional expertise.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-white">Portfolio</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Wedding Photography</li>
              <li className="text-gray-400">Portrait Sessions</li>
              <li className="text-gray-400">Commercial Photography</li>
              <li className="text-gray-400">Event Coverage</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-300 mt-8 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Zenith Production. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;