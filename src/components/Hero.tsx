import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://thinkersklub.in/wp-content/uploads/2025/03/White-And-Beige-Modern-Daily-Vlog-YouTube-Thumbnail-1.png")',
          backgroundSize: 'cover', // Ensure the image covers the full width and height
          backgroundRepeat: 'no-repeat', // Prevent tiling
          backgroundPosition: 'center', // Center the image
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-0"></div>
      </div>
    </section>
  );
};

export default Hero;