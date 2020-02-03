import React from 'react';
import PropTypes from 'prop-types';
import SideBar from './SideBar';

const Layout = ({ children }) => (
  <div className="font-ibm h-screen flex">
    <SideBar />
    <main className="flex-1 flex overflow-hidden ">{children}</main>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
