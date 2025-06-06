import React, { useEffect, useState } from 'react';
import './preloader.css';

export default function Preloader({ onFinish }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Delay a little to let 100% be visible before removing
          setTimeout(() => {
            onFinish(); // Tell parent to hide preloader
          }, 500); // 0.5s pause at 100%
          return 100;
        }
        return prev + 1;
      });
    }, 10); // Fast count-up

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="preloader-overlay">
      <div className="counter">{count}%</div>
    </div>
  );
}
