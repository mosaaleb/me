import React from 'react';

const Footer = () => (
  <div className="pb-10 text-sm text-center">
    <p>
      ©
      {' '}
      {new Date().getFullYear()}
      {' '}
      Muhammad Ebeid. This site is powered by&nbsp;
      <a href="https://www.netlify.com/" className="text-indigo-600">
        Netlify
      </a>
    </p>
  </div>
);

export default Footer;
