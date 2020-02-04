import { useState } from 'react';

const useProjects = () => {
  const [projects] = useState([{
    id: 1,
    name: 'IDoc',
    github: 'https://github.com/mosaaleb/edoc',
    live: 'https://react-ulator.herokuapp.com/',
    tags: ['React', 'Redux', 'Rails', 'JSON API', 'RSpec', 'TailwindCSS', 'Mobile'],
    image: './assets/idoc.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
  }, {
    id: 2,
    name: 'Bookstore',
    github: 'https://github.com/mosaaleb/redux-bookstore',
    live: 'https://book-store-20.herokuapp.com/',
    tags: ['react', 'sass', 'here'],
    image: './assets/bookstore.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
  }, {
    id: 3,
    name: 'Devium',
    github: 'https://github.com/mosaaleb/fakebook',
    live: 'https://deviumio.herokuapp.com/',
    tags: ['react', 'sass', 'here'],
    image: './assets/devium.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
  }, {
    id: 4,
    name: 'Atlas',
    github: 'https://github.com/mosaaleb/react-calculator',
    live: 'https://react-ulator.herokuapp.com/',
    tags: ['react', 'sass', 'here'],
    image: './assets/atlas.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
  }, {
    id: 5,
    name: 'React Calculator',
    github: 'https://github.com/mosaaleb/react-calculator',
    live: 'https://react-ulator.herokuapp.com/',
    tags: ['react', 'sass', 'here'],
    image: './assets/calculator.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
  }]);

  return projects;
};

export default useProjects;
