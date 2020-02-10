import React from 'react';
import { Link } from 'gatsby';

const NavLinks = () => (
  <nav className="text-2xl px-10">
    <p className="p-2 hover:underline hover:text-indigo-600">
      <Link to="/">Home</Link>
    </p>
    <p className="p-2 hover:underline hover:text-indigo-600">
      <Link to="/">About</Link>
    </p>
    <p className="p-2 hover:underline hover:text-indigo-600">
      <Link to="/">Projects</Link>
    </p>
    <p className="p-2 hover:underline hover:text-indigo-600">
      <Link to="/">Skills</Link>
    </p>
    <p className="p-2 hover:underline hover:text-indigo-600">
      <Link to="/">Contact</Link>
    </p>
    <p className="p-2 hover:underline hover:text-indigo-600">
      <Link to="/blog">Blog</Link>
    </p>
  </nav>
);

export default NavLinks;
