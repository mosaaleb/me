import React, { useState } from 'react';
import NavLinks from '../components/NavLinks';
import SocialLinks from '../components/SocialLinks';

const SideBar = () => {
  const isMobile = window.innerWidth < 480;
  const [isClosed, setIsClosed] = useState(isMobile);
  return (
    <div
      className={`bg-pattern fixed hidden flex flex-col w-4/5 justify-between h-screen border-r-2 border-gray-900
                 sm:static lg:flex lg:w-3/13 lg:max-w-sm
                 `}
    >
      <div>
        <button
          type="button"
          onClick={() => setIsClosed(true)}
          className="block ml-auto p-5 focus:outline-none hover:text-indigo-600 lg:invisible"
        >
          <svg className="h-6 w-6 fill-current">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
          </svg>
        </button>
        <NavLinks />
      </div>
      <SocialLinks />
      <button type="button" className="fixed p-5 block focus:outline-none hover:text-indigo-600 lg:invisible z-50">
        <svg
          className="h-6 w-6 fill-current"
        >
          <path
            d="M22 7V5H2V7H22ZM22 11V13H2V11H22ZM22 17V19H2V17H22Z"
          />
        </svg>
      </button>
    </div>
  );
};

export default SideBar;
