import React from 'react';
import PropTyes from 'prop-types';
import NavLink from './NavLink';

const NavLinks = ({ setIsSideBarOpen }) => (
  <nav className="px-10 mr-4 text-2xl text-right">
    <NavLink linkName="Home" anchorLink="/#home" setIsSideBarOpen={setIsSideBarOpen} />
    <NavLink linkName="About" anchorLink="/#about" setIsSideBarOpen={setIsSideBarOpen} />
    <NavLink linkName="Projects" anchorLink="/#projects" setIsSideBarOpen={setIsSideBarOpen} />
    <NavLink linkName="Skills" anchorLink="/#skills" setIsSideBarOpen={setIsSideBarOpen} />
    <NavLink linkName="Contact" anchorLink="/#contact" setIsSideBarOpen={setIsSideBarOpen} />
    <NavLink linkName="Blog" anchorLink="/blog" setIsSideBarOpen={setIsSideBarOpen} />
    <NavLink linkName="TodayILearned" anchorLink="/today-i-learned" setIsSideBarOpen={setIsSideBarOpen} />
  </nav>
);

NavLinks.propTypes = {
  setIsSideBarOpen: PropTyes.func.isRequired
};

export default NavLinks;
