import React from 'react';
import PropTypes from 'prop-types';

const ProjectTags = ({ tags }) => (
  <div className="w-full mt-5">
    {tags.map((tag) => (
      <p
        key={tag}
        className="inline-block text-sm mr-2 mb-2 font-medium py-1 px-2 rounded bg-indigo-600 text-gray-100"
      >
        {tag}
      </p>
    ))}
  </div>
);

ProjectTags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ProjectTags;
