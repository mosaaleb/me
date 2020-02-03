import React from 'react';

const About = () => (
  <div className="p-4">
    <h3 className="font-bold text-2xl text-indigo-600 border-b inline-block border-dashed border-gray-500">
      About me
    </h3>
    <h3 className="text-3xl leading-loose">
      Hi
      <span role="img" aria-label="sheep">
        👋🏼
      </span>
    </h3>
    <h2 className="text-xl text-indigo-600 leading-loose my-5 md:text-3xl">
      I&apos;m Muhammad. Nice to meet you!
    </h2>
    <p className="text-lg leading-loose font-normal">
      I&apos;m a software engineer based on Egypt. I am passionate about
      building software that matters.
    </p>
  </div>
);
export default About;
