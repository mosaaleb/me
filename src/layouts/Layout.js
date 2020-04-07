import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SideBar from './SideBar';
import PrimaryView from './PrimaryView';
import NavigationButton from '../components/NavigationButton';

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
      <NavigationButton setIsSideBarOpen={setIsSideBarOpen} />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
