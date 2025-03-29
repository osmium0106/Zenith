import React, { useEffect, useState } from 'react';

const PortraitPortfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = [
    'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80',
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
        <h2 className="text-4xl font-bold mb-12 text-center">Portrait Photography</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((url, index) => (
            <div
              key={index}
              className="group relative overflow-hidden cursor-pointer"
              onClick={() => openModal(url)}
            >
              <img
                src={url}
                alt={`Portrait ${index + 1}`}
                className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">Zenith Portrait {index + 1}</span>
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
            alt="Selected Portrait"
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

export default PortraitPortfolio;
