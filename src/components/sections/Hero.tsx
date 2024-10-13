"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { RainbowButton } from "../ui/rainbow-button";
import { BackgroundLines } from "@/components/ui/background-lines";

const Hero = () => {
  return (
    <BackgroundLines className="min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black">
      <div className="container mx-auto px-4 text-center z-10">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-neutral-100 dark:to-neutral-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Innovative Web & Mobile Solutions
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-neutral-700 dark:text-neutral-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          RimCode delivers cutting-edge web and mobile apps with stunning UI/UX,
          using React, Next.js, and Flutter.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <RainbowButton>
            <Link href="#contact">Get Started</Link>
          </RainbowButton>
        </motion.div>
      </div>
    </BackgroundLines>
  );
};

export default Hero;
