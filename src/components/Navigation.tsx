import React from 'react';

const Navigation = () => {
  const navItems = ['Home', 'Portfolio', 'About', 'Services', 'Contact'];

  return (
    <div className="flex flex-col space-y-8 text-center">
      {navItems.map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="menu-item text-white transition-colors duration-300 text-xl relative group"
        >
          {item}
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 71.4 30.8"
            className="hover-underline absolute bottom-[-8px] left-0 w-full h-[45px] opacity-100"
          >
            <path
              className="st0 zTxGWQLh_0"
              d="M68.4,21.9c-10.2,1.9-20.5,3.4-30.7,4.2c-9.3,0.7-20.5,1.9-29-0.4c-4.3-1.2-7.8-4.1-7.4-7.8
              C1.6,15,3.9,12.3,7,10.3c9.4-6.2,22-8.2,33.6-8.8C50,1,75.9,1.4,69.1,13.1c-1.2,2.2-3.5,4-5.9,5.6c-5.4,3.5-12,5.9-18.7,7.4
              c-12.9,3-26.2,3.3-39.1,3.3"
            />
          </svg>
        </a>
      ))}

      {/* Embedded CSS */}
      <style>{`
        .zTxGWQLh_0 {
          stroke: #ff6100;
          fill: none;
          stroke-miterlimit: 10;
          stroke-dasharray: 2250; /* Increased to 1.5x the current value */
          stroke-dashoffset: 2250; /* Matches dasharray for animation */
          transition: stroke-dashoffset 1s ease-in-out; /* Smooth transition */
        }

        .menu-item:hover .zTxGWQLh_0 {
          stroke-dashoffset: 0; /* Reveal the path */
        }

        .menu-item:not(:hover) .zTxGWQLh_0 {
          stroke-dashoffset: 2250; /* Retract the path smoothly */
        }
      `}</style>
    </div>
  );
};

export default Navigation;