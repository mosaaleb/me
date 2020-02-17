import React from 'react';
import PropTypes from 'prop-types';

const ValidationError = ({ error }) => (
  <p className="text-red-500 text-xs italic">{error}</p>
);

ValidationError.defaultProps = {
  error: ''
};

ValidationError.propTypes = {
  error: PropTypes.string
};

export default ValidationError;
