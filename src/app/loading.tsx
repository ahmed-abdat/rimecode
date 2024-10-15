'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect } from 'react';

const RippleLoader = () => {
  const { theme } = useTheme();

  useEffect(() => {
    // Disable scrolling when the component mounts
    document.body.style.overflow = 'hidden';
    
    // Re-enable scrolling when the component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const rippleVariants = {
    start: {
      opacity: 1,
      scale: 0,
    },
    end: {
      opacity: 0,
      scale: 4,
    },
  };

  const rippleTransition = {
    duration: 2,
    ease: 'easeInOut',
    repeat: Infinity,
    repeatDelay: 0.5,
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="relative h-24 w-24">
        {[0, 0.5, 1].map((delay, index) => (
          <motion.div
            key={index}
            className="absolute h-full w-full rounded-full bg-blue-500 dark:bg-blue-400 opacity-0"
            variants={rippleVariants}
            initial="start"
            animate="end"
            transition={{ ...rippleTransition, delay }}
          />
        ))}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-6 w-6 rounded-full bg-blue-600 dark:bg-blue-300" />
        </div>
      </div>
    </div>
  );
};

export default RippleLoader;
