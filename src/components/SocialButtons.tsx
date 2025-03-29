import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaWhatsapp, FaXTwitter, FaLinkedin } from 'react-icons/fa6'; // Import LinkedIn icon

const Button = () => {
  return (
    <StyledWrapper>
      <div>
        <a
          href="https://www.instagram.com/zenithproductionhub?igsh=MTRzY2RuaXVoaHloeQ%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          <FaInstagram className="w-6 h-6 text-gray-800 dark:text-white" />
        </a>
        <a
          href="https://wa.me/916396433850"
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          <FaWhatsapp className="w-6 h-6 text-gray-800 dark:text-white" />
        </a>
        <button className="button">
          <FaXTwitter className="w-6 h-6 text-gray-800 dark:text-white" /> {/* X icon */}
        </button>
        
        <button className="button">
          <svg viewBox="0 0 24 24" fill="currentColor" height={24} width={24} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-6 h-6 text-gray-800 dark:text-white">
            <path clipRule="evenodd" d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z" fillRule="evenodd" />
          </svg>
        </button>
        
        <a
          href="https://www.linkedin.com/in/zenithproductionhub" // Replace with your LinkedIn profile link
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          <FaLinkedin className="w-6 h-6 text-gray-800 dark:text-white" /> {/* LinkedIn icon */}
        </a>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  div {
    display: flex; /* Arrange buttons horizontally */
    gap: 10px; /* Add spacing between buttons */
  }

  .button {
    cursor: pointer;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    border: none;
    background: linear-gradient(120deg, #833ab4, #fd1d1d, #fcb045);
    position: relative;
    z-index: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.1s;
  }

  .button svg {
    color: white;
    width: 30px;
    height: 30px;
    z-index: 9;
  }

  .button:nth-child(1) {
    background: linear-gradient(120deg, #833ab4, #fd1d1d, #fcb045); /* 1st button hover effect */
  }

  .button:nth-child(2) {
    background: linear-gradient(120deg, #02ff2c, #008a12); /* 2nd button hover effect */
  }

  .button:nth-child(3) {
    background: rgb(0, 0, 0); /* 3rd button hover effect */
  }

  .button:nth-child(4) {
    background: rgb(255, 33, 33); /* 4th button hover effect */
  }

  .button:nth-child(5) {
    background: rgb(10, 102, 194); /* LinkedIn blue */
  }

  .button:nth-child(6):hover {
    background: black; /* Black on hover for the 6th button */
  }

  .button:active {
    transform: scale(0.85);
  }

  .button::before {
    content: "";
    position: absolute;
    width: 55px;
    height: 55px;
    background-color: #212121;
    border-radius: 50px;
    z-index: -1;
    border: 0px solid rgba(255, 255, 255, 0.411);
    transition: 0.4s;
  }

  .button:hover::before {
    width: 0px;
    height: 0px;
  }
`;

export default Button;
