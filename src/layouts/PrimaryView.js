import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';

const PrimaryView = ({ children }) => (
  <main className="flex-1 flex flex-col overflow-hidden">
    <div className="px-5 flex-1 overflow-y-scroll">
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow py-16">{children}</div>
        <Footer />
      </div>
    </div>
  </main>
);


PrimaryView.propTypes = {
  children: PropTypes.node.isRequired
};

export default PrimaryView;
