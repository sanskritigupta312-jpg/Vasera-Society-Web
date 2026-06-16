import { useEffect, useRef, useState } from 'react';
import { useInView, motion } from 'framer-motion';

const StatCounter = ({ value, suffix = '', prefix = '', label, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const isDecimal = !Number.isInteger(value);

  useEffect(() => {
    if (!isInView) return;
    const timer = setTimeout(() => {
      const duration = 1600;
      const start = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const cur = eased * value;
        setCount(isDecimal ? parseFloat(cur.toFixed(1)) : Math.floor(cur));
        if (progress < 1) requestAnimationFrame(tick);
        else setCount(value);
      };
      requestAnimationFrame(tick);
    }, delay * 1000);
    return () => clearTimeout(timer);
  }, [isInView, value, delay, isDecimal]);

  return (
    <div ref={ref} className="inline">
      <span className="font-bold">
        {prefix}{isDecimal ? count.toFixed(1) : count.toLocaleString()}{suffix}
      </span>
      {label && <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">{label}</div>}
    </div>
  );
};

export default StatCounter;
