import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Til = ({ til }) => (
  <article className="py-4 mb-4 rounded">
    <div className="px-3 border-l-4 border-indigo-400 md:px-10">
      <p className="text-sm text-gray-700">{new Date(til.date).toDateString()}</p>
      <h2 className="text-2xl font-bold text-indigo-600 underline">
        <Link to={`/today-i-learned/${til.slug}`}>{til.title}</Link>
      </h2>
      <div>
        <p>{til.excerpt}</p>
        <h4 className="leading-loose text-indigo-600">
          <Link to={`/today-i-learned/${til.slug}`}>Continue Reading ⟶</Link>
        </h4>
      </div>
    </div>
  </article>
);

Til.propTypes = {
  til: PropTypes.shape({
    slug: PropTypes.string,
    date: PropTypes.string,
    title: PropTypes.string,
    excerpt: PropTypes.string
  }).isRequired
};

export default Til;
