import { useState } from 'react';

const useNotification = () => {
  const DELAY = 5000;
  const [notification, setNotification] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);

  const notify = (type, message) => {
    clearTimeout(timeoutId);
    setNotification({ type, message });
    const id = setTimeout(() => {
      setNotification(null);
      setTimeoutId(null);
    }, DELAY);
    setTimeoutId(id);
  };

  return [notification, notify];
};

export default useNotification;
