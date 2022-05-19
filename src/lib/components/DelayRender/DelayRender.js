import React, { useState, useEffect } from 'react';

const DelayRender = (props) => {
  const [complete, setComplete] = useState(false);
  const { children, delay, onComplete } = props;

  useEffect(() => {
    setTimeout(() => handleComplete(), delay);
  }, [null]);

  const handleComplete = () => {
    if (onComplete) onComplete(delay);
    setComplete(true);
  };

  if (complete) {
    return <>{children}</>;
  }
  return null;
};

export default DelayRender;
