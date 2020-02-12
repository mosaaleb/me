import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const TagLinks = ({ tags }) => (
  <div className="w-full mt-5 flex justify-center">
    {tags.map((tag) => (
      <Link
        to="/blog"
        key={tag}
        className="inline-block text-sm uppercase mr-2 mb-2 px-1 font-hairline rounded bg-indigo-600 text-gray-100"
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
