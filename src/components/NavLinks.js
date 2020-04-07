import React from 'react';
import PropTyes from 'prop-types';
import { Link } from 'gatsby';

const NavLinks = ({ setIsSideBarOpen }) => (
  <nav className="text-2xl px-10">
    <p className="p-2 hover:underline hover:text-indigo-600">
      <Link to="/" onClick={() => setIsSideBarOpen(false)}>Home</Link>
    </p>
    <p className="p-2 hover:underline hover:text-indigo-600">
      <Link to="#about" onClick={() => setIsSideBarOpen(false)}>About</Link>
    </p>
    <p className="p-2 hover:underline hover:text-indigo-600">
      <Link to="#projects" onClick={() => setIsSideBarOpen(false)}>Projects</Link>
    </p>
    <p className="p-2 hover:underline hover:text-indigo-600">
      <Link to="#skills" onClick={() => setIsSideBarOpen(false)}>Skills</Link>
    </p>
    <p className="p-2 hover:underline hover:text-indigo-600">
      <Link to="#contact" onClick={() => setIsSideBarOpen(false)}>Contact</Link>
    </p>
    <p className="p-2 hover:underline hover:text-indigo-600">
      <Link to="/blog">Blog</Link>
    </p>
  </nav>
);

NavLinks.propTypes = {
  setIsSideBarOpen: PropTyes.func.isRequired
};

export default NavLinks;
