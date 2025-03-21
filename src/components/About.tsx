import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">About Zenith Production</h2>
            <p className="text-gray-600 mb-6">
              At Zenith Production, we believe that every moment tells a story worth capturing. With years of experience in professional photography, we've mastered the art of transforming fleeting instances into timeless memories.
            </p>
            <p className="text-gray-600 mb-6">
              Our team of skilled photographers combines technical expertise with creative vision to deliver exceptional results that exceed expectations. Whether it's a wedding, fashion shoot, corporate event, or personal portrait session, we approach each project with dedication and artistic integrity.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <h3 className="text-3xl font-bold mb-2">500+</h3>
                <p className="text-gray-600">Projects</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2">150+</h3>
                <p className="text-gray-600">Clients</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2">10+</h3>
                <p className="text-gray-600">Years</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&q=80" 
              alt="Photographer at work"
              className="w-full h-[600px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;