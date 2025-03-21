import React from 'react';

const Portfolio = () => {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80',
      category: 'Wedding'
    },
    {
      url: 'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?auto=format&fit=crop&q=80',
      category: 'Fashion'
    },
    {
      url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80',
      category: 'Portrait'
    },
    {
      url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80',
      category: 'Commercial'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden cursor-pointer"
            >
              <img 
                src={image.url} 
                alt={image.category}
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-xl font-semibold">{image.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;