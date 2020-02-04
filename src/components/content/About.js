import React from 'react';

const About = () => (
  <div className="p-4">
    <h3 className="font-bold text-4xl text-indigo-600 border-b inline-block border-dashed border-gray-500">
      About me
    </h3>
    <div className="py-5">
      <h3 className="text-xl md:text-2xl">Hi, I&apos;m Muhammad Ebeid.</h3>
      <h2 className="text-xl md:text-2xl mb-3">
        Nice to meet you!
        <span role="img" aria-label="sheep">
          👋🏼
        </span>
      </h2>
      <div className="text-lg font-normal">
        <p>
          I&apos;m a software engineer based on Egypt. I create nice UI
          solutions with
          {' '}
          <a
            href="https://reactjs.org/"
            className="text-indigo-600 border-b border-dashed"
          >
            ReactJS.
          </a>
        </p>
        <p>Passionate about building well-written rails application.</p>
      </div>
    </div>
  </div>
);
export default About;
