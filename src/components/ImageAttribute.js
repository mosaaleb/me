import React from 'react';
import PropTypes from 'prop-types';

const ImageAttribute = ({ attribute }) => (
  <div className="mt-2 font-hairline italic text-sm lg:text-base">
    *Photo By
    {' '}
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={attribute.photographer_link}
      className="text-indigo-600 font-semibold"
    >
      {attribute.photographer_name}
    </a>
    {' '}
    on
    {' '}
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={attribute.source_url}
      className="text-indigo-600 font-semibold"
    >
      {attribute.source}
    </a>
  </div>
);

ImageAttribute.propTypes = {
  attribute: PropTypes.shape({
    source: PropTypes.string,
    source_url: PropTypes.string,
    photographer_name: PropTypes.string,
    photographer_link: PropTypes.string
  }).isRequired
};

export default ImageAttribute;
