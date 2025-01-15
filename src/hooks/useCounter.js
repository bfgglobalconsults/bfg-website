"use client"
import { useState, useEffect } from 'react';

const useCounter = (end, duration = 5000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const step = Math.ceil(end / (duration / 16)); 
    const timer = setInterval(() => {
      setCount((prevCount) => {
        const nextCount = prevCount + step;
        if (nextCount >= end) {
          clearInterval(timer);
          return end;
        }
        return nextCount;
      });
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
};

export default useCounter;

