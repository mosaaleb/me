import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { kebabCase } from '../utils';

const TagLinks = ({ tags }) => (
  <div className="flex flex-wrap justify-center w-full mt-5">
    {tags.map((tag) => (
      <Link
        to={`/tags/${kebabCase(tag)}`}
        key={tag}
        className="inline-block px-1 mb-2 mr-2 text-sm font-hairline text-gray-100 uppercase bg-indigo-600 rounded"
      >
        {tag}
      </Link>
    ))}
  </div>
);

TagLinks.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default TagLinks;
