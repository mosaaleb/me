import React from 'react';
import PropTypes from 'prop-types';
import NavLinks from '../components/NavLinks';
import SocialLinks from '../components/SocialLinks';

const SideBar = ({ isSideBarOpen, setIsSideBarOpen }) => (
  <div
    className={`bg-pattern h-screen z-50 border-r-2 border-gray-900 w-4/5 flex flex-col justify-between
                ${isSideBarOpen ? 'fixed lg:static slide' : 'hidden lg:flex'}
                lg:w-3/13 lg:max-w-sm lg:static`}
  >
    <div>
      <button
        type="button"
        onClick={() => setIsSideBarOpen(false)}
        className="block ml-auto p-5 focus:outline-none hover:text-indigo-600 lg:invisible"
      >
        <svg className="h-6 w-6 fill-current">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
        </svg>
      </button>
      <NavLinks setIsSideBarOpen={setIsSideBarOpen} />
    </div>
    <SocialLinks />
  </div>
);

SideBar.propTypes = {
  isSideBarOpen: PropTypes.bool.isRequired,
  setIsSideBarOpen: PropTypes.func.isRequired
};

export default SideBar;
