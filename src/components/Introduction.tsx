import React from 'react';

const Introduction: React.FC = () => {
  return (
    <section id="introduction" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Meet Our Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center">
            <img
              src="https://thinkersklub.in/wp-content/uploads/2025/03/IMG_4610.jpg"
              alt="CEO/Director"
              className="w-48 h-48 mx-auto rounded-full object-cover mb-4"
              style={{ objectPosition: 'center bottom' }}
            />
            <h3 className="text-2xl font-semibold">Shivansh Saxena</h3>
            <p className="text-gray-600">CEO / Director</p>
            <p className="mt-4 text-gray-600">
            Meet Shivansh, the man behind the lens, the visionary driving (Zenith Productions pvt ltd.) to new heights.  A master storyteller with an eye for detail and a passion for pushing creative boundaries, shivansh saxena brings a unique blend of artistic vision and business acumen to every project.</p>
          </div>
          <div className="text-center">
            <img
              src="https://thinkersklub.in/wp-content/uploads/2025/03/IMG_4852-scaled.jpg"
              alt="Managing Director"
              className="w-48 h-48 mx-auto rounded-full object-cover mb-4"
              style={{ objectPosition: 'center top' }} // Adjusted position to move the image lower
            />
            <h3 className="text-2xl font-semibold">Bhumi Singh Deopa</h3>
            <p className="text-gray-600">Managing Director</p>
            <p className="mt-4 text-gray-600">
            Meet our exceptional managing director, a trailblazer in her field who combines creativity with strategic vision. With a wealth of experience and a passion for innovation, she leads our team to new heights, ensuring that every project reflects our commitment to quality and excellence. Her dynamic leadership inspires collaboration and drives us to exceed expectations. Join us as we embark on exciting ventures under her guidance!
           </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
