import React from 'react';
import PropTyes from 'prop-types';
import { Link } from 'gatsby';

const NavLink = ({ linkName, anchorLink, setIsSideBarOpen }) => (
  <p className="p-2 hover:underline transition-colors duration-300 ease-linear hover:text-indigo-600">
    <Link
      to={anchorLink}
      onClick={() => setIsSideBarOpen(false)}
    >
      {linkName}
    </Link>
  </p>
);

export default NavLink;

NavLink.propTypes = {
  linkName: PropTyes.string.isRequired,
  anchorLink: PropTyes.string.isRequired,
  setIsSideBarOpen: PropTyes.func.isRequired
};
