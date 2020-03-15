import { useState } from 'react';

const useProjects = () => {
  const [projects] = useState([{
    id: 1,
    name: 'Portfolio & Blog',
    github: 'https://github.com/mosaaleb/me',
    live: 'https://muhammadebeid.netlify.com/',
    tags: ['GatsbyJS', 'React', 'GraphQL', 'Blog', 'TailwindCSS', 'Mobile'],
    image: './assets/portfolio.png',
    description: 'Personal portfolio where I showcase my work, share my ideas and writings.'
  },
  {
    id: 2,
    name: 'EDoc',
    github: 'https://github.com/mosaaleb/edoc',
    live: 'https://edoc-capstone.herokuapp.com/',
    tags: ['React', 'Redux', 'Rails', 'JSON API', 'RSpec', 'TailwindCSS', 'Mobile'],
    image: './assets/edoc.png',
    description: 'EDoc is a platform for finding Doctors by their specialties and scheduling appointments. Front-end is built with React and Back-end is built with Rails.'
  }, {
    id: 3,
    name: 'Bookstore',
    github: 'https://github.com/mosaaleb/redux-bookstore',
    live: 'https://book-store-20.herokuapp.com/',
    tags: ['React', 'Redux', 'TailwindCSS', 'Mobile'],
    image: './assets/bookstore.png',
    description: 'Bookstore is a platform for storing books and keep track of their progress. It uses Redux for managing application state.'
  }, {
    id: 4,
    name: 'Devium',
    github: 'https://github.com/mosaaleb/fakebook',
    live: 'https://deviumio.herokuapp.com/',
    tags: ['Rails', 'Bootstrap', 'RSpec', 'TDD'],
    image: './assets/devium.png',
    description: 'Devium is social networking platform for developers. You can connect with our peers and interact with them. Devium is built with Rails, with TDD process.'
  }, {
    id: 5,
    name: 'Atlas',
    github: 'https://github.com/mosaaleb/Atlas',
    live: 'https://xenodochial-carson-49ee2c.netlify.com/',
    tags: ['JavaScript', 'Webpack', 'Weather API', 'Location API', 'TailwindCSS'],
    image: './assets/atlas.png',
    description: 'Atlas allows you to access weather data for any location. It uses the Open Weather API to read current weather states, along with the use of Current Location API to automatically detect user current location.'
  }, {
    id: 6,
    name: 'Calculator',
    github: 'https://github.com/mosaaleb/react-calculator',
    live: 'https://react-ulator.herokuapp.com/',
    tags: ['React', 'SASS', 'Jest', 'Mobile'],
    image: './assets/calculator.png',
    description: 'Calculator built with React'
  }]);

  return projects;
};

export default useProjects;
