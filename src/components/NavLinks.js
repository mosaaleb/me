import React from 'react';
import { Link } from 'gatsby';

const NavLinks = () => (
  <nav className="text-2xl px-10">
    <p className="p-2 hover:underline hover:text-indigo-600">
      <Link to="/">Home</Link>
    </p>
    <p className="p-2 hover:underline hover:text-indigo-600">
      <Link to="#about">About</Link>
    </p>
    <p className="p-2 hover:underline hover:text-indigo-600">
      <Link to="#projects">Projects</Link>
    </p>
    <p className="p-2 hover:underline hover:text-indigo-600">
      <Link to="#skills">Skills</Link>
    </p>
    <p className="p-2 hover:underline hover:text-indigo-600">
      <Link to="#contact">Contact</Link>
    </p>
    <p className="p-2 hover:underline hover:text-indigo-600">
      <Link to="/blog">Blog</Link>
    </p>
  </nav>
);

export default NavLinks;
