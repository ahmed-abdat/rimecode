'use client';

import { motion } from 'framer-motion';

const RippleLoader = () => {
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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="relative h-16 w-16">
        {[0, 0.5, 1].map((delay, index) => (
          <motion.div
            key={index}
            className="absolute h-full w-full rounded-full bg-blue-500 opacity-0"
            variants={rippleVariants}
            initial="start"
            animate="end"
            transition={{ ...rippleTransition, delay }}
          />
        ))}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-4 rounded-full bg-blue-300" />
        </div>
      </div>
    </div>
  );
};

export default RippleLoader;
