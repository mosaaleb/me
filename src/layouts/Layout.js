import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SideBar from './SideBar';
import PrimaryView from './PrimaryView';

const Layout = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  return (
    <div className="font-ibm h-screen flex">
      <SideBar
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
      />
      <PrimaryView>
        {children}
      </PrimaryView>
      <button
        type="button"
        onClick={() => setIsSideBarOpen(true)}
        className="fixed lg:hidden rounded-full p-5 text-indigo-600 shadow-lg bg-white focus:outline-none"
      >
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M2 6C2 7.10457 2.89543 8 4 8C5.10457 8 6 7.10457 6 6C6 4.89543 5.10457 4 4 4C2.89543 4 2 4.89543 2 6ZM8 5H22V7H8V5ZM22 11H8V13H22V11ZM8 19H22V17H8V19ZM2 18C2 19.1046 2.89543 20 4 20C5.10457 20 6 19.1046 6 18C6 16.8954 5.10457 16 4 16C2.89543 16 2 16.8954 2 18ZM4 14C2.89543 14 2 13.1046 2 12C2 10.8954 2.89543 10 4 10C5.10457 10 6 10.8954 6 12C6 13.1046 5.10457 14 4 14Z" />
        </svg>
      </button>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
