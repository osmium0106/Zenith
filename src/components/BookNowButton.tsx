import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const BookNowButton = () => {
  const [showButton, setShowButton] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  });

  useEffect(() => {
    const timer = setTimeout(() => setShowButton(true), 3000);

    const handleScroll = () => {
      setShowButton(true);
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 2000); // Hide tooltip after 2 seconds
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    const whatsappURL = `https://wa.me/916396433850?text=Hello, my name is ${formData.name}. I am interested in ${formData.service}. Message: ${formData.message}`;
    window.open(whatsappURL, '_blank');
    setShowForm(false);
  };

  return (
    <>
      {showButton && (
        <StyledWrapper>
          <button
            className="book-now-button"
            onClick={() => setShowForm(true)}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
            </svg>
            {showTooltip && <span className="tooltip">Book Now</span>}
          </button>
        </StyledWrapper>
      )}

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-xl font-bold mb-4">Book Now</h2>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mb-4 p-2 border border-gray-300 rounded"
            />
            
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full mb-4 p-2 border border-gray-300 rounded"
            >
              <option value="" disabled>
                Enquiry For
              </option>
              <option value="Event Photography">Event Photography</option>
              <option value="Fashion Photography">Fashion Photography</option>
              <option value="Portrait Photography">Portrait Photography</option>
              <option value="Product Photography">Product Photography</option>
            </select>
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full mb-4 p-2 border border-gray-300 rounded"
            ></textarea>
            <div className="flex justify-between">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                onClick={handleSubmit}
              >
                Book
              </button>
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const StyledWrapper = styled.div`
  .book-now-button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    background-color: #ffe53b;
    background-image: linear-gradient(147deg, #ffe53b 0%, #ff2525 74%);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.151);
    position: fixed;
    bottom: 20px;
    right: 30px;
    z-index: 50;
  }
  .book-now-button svg {
    height: 1.5em;
    fill: white;
  }
  .tooltip {
    position: absolute;
    bottom: 60px; /* Position above the button */
    left: 50%;
    transform: translateX(-50%);
    background-color: #ffe53b;
    background-image: linear-gradient(147deg, #ffe53b 0%, #ff2525 74%);
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    display: inline-block;
    letter-spacing: 0.5px;
    font-size: 0.9em;
    white-space: nowrap;
  }
`;

export default BookNowButton;
