import React from 'react';

const About = () => (
  <div className="py-4">
    <h3
      id="about"
      className="font-bold text-4xl text-indigo-600 border-b inline-block border-dashed border-gray-500"
    >
      About me
    </h3>
    <div className="py-5">
      <h3 className="text-xl md:text-2xl">Hi, I&apos;m Muhammad.</h3>
      <h2 className="text-xl md:text-2xl mb-3">
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
            className="text-indigo-600 border-b border-dashed"
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
            className="text-indigo-600 border-b border-dashed"
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
