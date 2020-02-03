import React from 'react';
import About from '../components/content/About';
import Projects from '../components/content/Projects';
import Skills from '../components/content/Skills';
import Contact from '../components/content/Contact';

const Portfolio = () => (
  <div className="px-1 py-16 flex-1 overflow-y-scroll">
    <div className="mx-auto md:w-11/12 max-w-6xl">
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  </div>
);

export default Portfolio;
