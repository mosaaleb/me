import React from 'react';

const Intro = () => {
  const items = [
    'Rubyist',
    'Engineer',
    'Problem Solver',
    'Full Stack Developer'
  ];

  return (
    <div className="pb-12">
      {items.map(item => (
        <h3 className="text-3xl font-bold leading-relaxed text-gray-900 lg:text-5xl lg:leading-normal transition-transform duration-500 ease-in-out transform hover:translate-x-3">
          {item}
          <span className="text-4xl leading-none text-indigo-600 lg:text-6xl">
            .
          </span>
        </h3>
      ))}
    </div>
  );
};

export default Intro;
