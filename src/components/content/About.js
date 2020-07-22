import React from 'react';

const About = () => (
  <div className="py-4">
    <h3
      id="about"
      className="inline-block text-4xl font-bold text-indigo-600 border-b border-gray-500 border-dashed"
    >
      About me
    </h3>
    <div className="py-5">
      <h3 className="text-xl md:text-2xl">Hi, I&apos;m Muhammad.</h3>
      <h2 className="mb-3 text-xl md:text-2xl">
        Nice to meet you!
        <span role="img" aria-label="wave">
          👋🏼
        </span>
      </h2>
      <div className="text-lg font-normal">
        <p>
          I&apos;m a software engineer based in Egypt. I create nice UI
          solutions with
          {' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://reactjs.org/"
            className="text-indigo-600 border-b border-dashed transition-colors ease-linear duration-200 hover:text-indigo-800"
          >
            ReactJS.
          </a>
        </p>
        <p>
          Passionate about building well-written
          {' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://rubyonrails.org/"
            className="text-indigo-600 border-b border-dashed transition-colors ease-linear duration-200 hover:text-indigo-800"
          >
            Rails
          </a>
          {' '}
          applications.
        </p>
      </div>
    </div>
  </div>
);
export default About;
