import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex flex-col">
      <div
        className="flex-grow bg-center bg-no-repeat md:bg-cover bg-contain"
        style={{
          backgroundImage: 'url("https://thinkersklub.in/wp-content/uploads/2025/03/White-And-Beige-Modern-Daily-Vlog-YouTube-Thumbnail-1.png")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-0"></div>
      </div>
    </section>
  );
};

export default Hero;