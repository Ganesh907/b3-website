import React, { useState, useEffect } from 'react';

const Counter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const endValue = end;
    const startTime = Date.now();
    const step = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const newCount = Math.floor(start + (endValue - start) * progress);
      setCount(newCount);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(endValue);
      }
    };
    requestAnimationFrame(step);
  }, [end, duration]);

  return <h3 className="text-6xl font-bold text-black">{count}</h3>;
};

export default Counter;
