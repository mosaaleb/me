import React, { useState } from 'react';
import NavLinks from '../components/NavLinks';
import SocialLinks from '../components/SocialLinks';

const SideBar = () => {
  const [isClosed, setIsClosed] = useState(true);
  return (
    <div
      className={`bg-pattern fixed flex h-screen w-4/5 max-w-xs border-r-2 border-gray-900 flex-col justify-between
      lg:flex lg:static
      ${isClosed ? 'hidden' : 'flex'} shadow-lg`}
    >
      <div className="">
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
    </div>
  );
};

export default SideBar;
