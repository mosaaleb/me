import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Notification = ({ message, isSuccess }) => {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <div
      className={`fixed justify-between items-center top-0 right-0 w-full text-gray-100 z-50 p-3
                ${isSuccess ? 'bg-indigo-600' : 'bg-red-500'}
                ${isHidden ? 'hidden' : 'flex'}`}
    >
      <p>{message}</p>
      <button
        type="button"
        onClick={() => setIsHidden(true)}
        className="text-xl focus:outline-none"
      >
        ⨯
      </button>
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  isSuccess: PropTypes.bool.isRequired
};

export default Notification;
