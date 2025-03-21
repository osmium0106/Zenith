import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Capturing Moments,<br />Creating Memories
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          Professional photography services that tell your story through the lens of artistic excellence
        </p>
        <button className="bg-white text-black px-8 py-3 text-lg font-semibold hover:bg-opacity-90 transition-all duration-300">
          Book a Session
        </button>
      </div>
    </section>
  );
};

export default Hero;