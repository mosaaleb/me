import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import SideBar from './SideBar';

const Layout = ({ children }) => (
  <>
    <Header />
    <SideBar />
    <main>{children}</main>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
