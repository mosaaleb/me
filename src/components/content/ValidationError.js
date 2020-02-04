import React from 'react';
import PropTypes from 'prop-types';

const ValidationError = ({ error }) => {
  return <p className="text-red-500 text-xs italic">{error}</p>;
};

ValidationError.propTypes = {
  error: PropTypes.string.isRequired
};

export default ValidationError;
