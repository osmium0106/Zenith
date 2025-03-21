import React from 'react';
import { Camera, Users, Building2, Heart } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Wedding Photography',
      description: 'Capturing your special day with elegance and emotion'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Portrait Sessions',
      description: 'Professional portraits that showcase your personality'
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Commercial Photography',
      description: 'High-quality images for your business and products'
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: 'Event Coverage',
      description: 'Comprehensive coverage of your corporate or private events'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-6 text-gray-800">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;