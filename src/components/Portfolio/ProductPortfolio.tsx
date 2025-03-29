import React, { useEffect, useState } from 'react';

const ProductPortfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = [
    'https://thinkersklub.in/wp-content/uploads/2025/03/8D40533A-8F44-4D95-842C-F14CD343E02C.jpg',
    'https://thinkersklub.in/wp-content/uploads/2025/03/E978A76A-0567-42F2-8DE1-836417FBB4CD.jpg',
    'https://thinkersklub.in/wp-content/uploads/2025/03/667B33C3-C4A6-483E-ABDD-772F862F0284.jpg',
    'https://thinkersklub.in/wp-content/uploads/2025/03/962F786D-7940-4C6C-BAAC-714DBE8D6803.jpg',
    'https://thinkersklub.in/wp-content/uploads/2025/03/93D33F37-2FD1-43AC-AFD0-6D0902A35582.jpg',
    'https://thinkersklub.in/wp-content/uploads/2025/03/954494F5-C5D5-4DFA-B095-44C4CA2E2375.jpg',
    'https://thinkersklub.in/wp-content/uploads/2025/03/D9E68A07-78EC-4EB9-9EFC-49C228B6EB37.jpg',
    'https://thinkersklub.in/wp-content/uploads/2025/03/045D0512-FEA4-4EDA-8F77-D53134AED517.jpg',
    'https://thinkersklub.in/wp-content/uploads/2025/03/B138E9AF-4694-444E-8B6E-18C619F04BCF.jpg',
    'https://thinkersklub.in/wp-content/uploads/2025/03/908D1C01-266C-4F17-A275-7C26A262853D.jpg',
    'https://thinkersklub.in/wp-content/uploads/2025/03/59A1EF78-33D0-45CE-943A-98FE29701920.jpg',
    'https://thinkersklub.in/wp-content/uploads/2025/03/C5EF2440-E0E4-4C4C-ACE4-3B35694419A9.jpg',
    'https://thinkersklub.in/wp-content/uploads/2025/03/3E30F617-5429-45C7-B2EF-27DF3563D41B.jpg',
    
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (url: string) => {
    setSelectedImage(url);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Product Photography</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((url, index) => (
            <div
              key={index}
              className="group relative overflow-hidden cursor-pointer"
              onClick={() => openModal(url)}
            >
              <img
                src={url}
                alt={`Product ${index + 1}`}
                className="w-full h-[700px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">Zenith Product {index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <img
            src={selectedImage}
            alt="Selected Product"
            className="max-w-full max-h-full"
          />
          <button
            className="absolute top-4 right-4 text-white text-2xl font-bold"
            onClick={closeModal}
          >
            &times;
          </button>
        </div>
      )}
    </section>
  );
};

export default ProductPortfolio;
