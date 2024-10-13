import React from "react";
import { motion } from "framer-motion";

export const PricingHeading: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="text-center mb-12"
  >
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      Transparent Pricing Tailored to Your Needs
    </h2>
    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
      At RimCode, we offer flexible pricing plans designed to provide
      value and quality, no matter the size or scope of your project.
    </p>
  </motion.div>
);
