"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { BackgroundGradientAnimation } from '../ui/background-gradient-animation';
import { Button } from '../ui/button';

const CTA = () => {
  return (
    <div className="w-full overflow-hidden">
      <BackgroundGradientAnimation
        gradientBackgroundStart="rgb(255 255 255 / 0.2)"
        gradientBackgroundEnd="rgb(255 255 255 / 0)"
        firstColor="#0ea5e9"
        secondColor="#6366f1"
        thirdColor="#8b5cf6"
        fourthColor="#d946ef"
        fifthColor="white"
      >
        <div className="w-full h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-4xl mx-auto text-center z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
            >
              Ready to Transform Your Digital Presence?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              Let&apos;s bring your vision to life with cutting-edge web solutions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex items-center justify-center gap-x-6"
            >
              <Button size="lg">Get Started</Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </motion.div>
          </div>
        </div>
      </BackgroundGradientAnimation>
    </div>
  );
};

export default CTA;
