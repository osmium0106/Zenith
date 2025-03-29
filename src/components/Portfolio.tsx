import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const images = [
    {
      url: 'https://thinkersklub.in/wp-content/uploads/2025/03/523614C9-09A8-4951-9E0E-3DFDE96839D8-1-scaled.jpg',
      category: 'Event',
      path: '/portfolio/event',
    },
    {
      url: 'https://thinkersklub.in/wp-content/uploads/2025/03/IMG_5955.jpg',
      category: 'Fashion',
      path: '/portfolio/fashion',
    },
    {
      url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80',
      category: 'Portrait',
      path: '/portfolio/portrait',
    },
    {
      url: 'https://thinkersklub.in/wp-content/uploads/2025/03/8D40533A-8F44-4D95-842C-F14CD343E02C.jpg',
      category: 'Product',
      path: '/portfolio/product',
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {images.map((image, index) => (
            <Link
              key={index}
              to={image.path}
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;