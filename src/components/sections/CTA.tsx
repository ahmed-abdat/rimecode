"use client";

import React, { useCallback, useMemo } from 'react';
import { motion } from "framer-motion";
import Link from "next/link";
import { RainbowButton } from "../ui/rainbow-button";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";

const CTA = () => {
  const handleClick = useCallback(() => {
    // Handle click logic
  }, []);

  const gradientColors = useMemo(() => ['#ff0000', '#00ff00', '#0000ff'], []);

  return (
    <div className="w-full overflow-hidden">
      <BackgroundGradientAnimation gradientColors={gradientColors}>
        <div className="w-full h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-4xl mx-auto text-center z-10">
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Ready to Elevate Your Digital Presence?
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg md:text-xl mb-10 max-w-2xl mx-auto text-white/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Unlock your digital potential with our cutting-edge solutions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <RainbowButton onClick={handleClick}>
                <Link href="#contact-us">Get in Touch</Link>
              </RainbowButton>
            </motion.div>
          </div>
        </div>
      </BackgroundGradientAnimation>
    </div>
  );
};

export default React.memo(CTA);
