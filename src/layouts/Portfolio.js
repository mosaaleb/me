import React from 'react';
import Intro from '../components/content/Intro';
import About from '../components/content/About';
import Skills from '../components/content/Skills';
import Contact from '../components/content/Contact';
import Projects from '../components/content/Projects';

const Portfolio = () => (
  <div className="mx-auto md:w-11/12 max-w-6xl">
    <Intro />
    <About />
    <Projects />
    <Skills />
    <Contact />
  </div>
);

export default Portfolio;
