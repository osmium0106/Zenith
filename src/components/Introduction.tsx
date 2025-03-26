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
            />
            <h3 className="text-2xl font-semibold">John Doe</h3>
            <p className="text-gray-600">CEO / Director</p>
            <p className="mt-4 text-gray-600">
              John brings over 15 years of experience in the photography industry, leading Zenith Production with a vision for excellence and innovation.
            </p>
          </div>
          <div className="text-center">
            <img
              src="https://thinkersklub.in/wp-content/uploads/2025/03/IMG_4852-scaled.jpg"
              alt="Managing Director"
              className="w-48 h-48 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-2xl font-semibold">Jane Smith</h3>
            <p className="text-gray-600">Managing Director</p>
            <p className="mt-4 text-gray-600">
              Jane oversees operations and ensures every project is executed flawlessly, with a passion for delivering exceptional results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
