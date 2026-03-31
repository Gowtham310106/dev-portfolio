import React, { useEffect, useState, useRef } from 'react';
import { useInView, animate, useMotionValue, useTransform } from 'framer-motion';

const Counter = ({ value, duration = 3 }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  // Extract number and suffix (e.g., "15+" -> number: 15, suffix: "+")
  const numMatch = value.match(/(\d+\.?\d*)/);
  const targetNum = numMatch ? parseFloat(numMatch[0]) : 0;
  const suffix = value.replace(numMatch ? numMatch[0] : '', '');

  const count = useMotionValue(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, targetNum, {
        duration: duration,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, targetNum, duration]);

  useEffect(() => {
    return count.onChange((latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [count]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
};

export default Counter;
