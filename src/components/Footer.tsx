import React from 'react';
import SocialButtons from './SocialButtons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div style={{ marginTop: '-60px' }}>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/assets/images/logo.png"
                alt="Zenith Logo"
                className="h-48 w-48"
              />
            </div>
            <p className="text-gray-400" style={{ marginTop: '-20px' }}>
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
            <h3 className="text-lg font-semibold mb-4">Portfolio</h3>
            <ul className="space-y-2">
              <li><a href="/portfolio/event" className="text-gray-400 hover:text-white">Event Photography</a></li>
              <li><a href="/portfolio/fashion" className="text-gray-400 hover:text-white">Fashion Photography</a></li>
              <li><a href="/portfolio/portrait" className="text-gray-400 hover:text-white">Portrait Photography</a></li>
              <li><a href="/portfolio/product" className="text-gray-400 hover:text-white">Product Photography</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <SocialButtons />
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Zenith Production. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;