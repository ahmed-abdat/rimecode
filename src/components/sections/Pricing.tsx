"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const pricingPlans = [
  {
    name: "Basic Package",
    price: "$5,000",
    description: "For startups and small projects",
    features: [
      "Responsive Web Design",
      "Single-Page Application with React.js",
      "Basic Backend with Node.js & Express",
      "1 Month Support",
    ],
    popular: false,
  },
  {
    name: "Standard Package",
    price: "$10,000",
    description: "For growing businesses",
    features: [
      "Comprehensive UI/UX Design",
      "Multi-Page Application with Next.js",
      "Advanced Backend Features",
      "Cross-Platform Mobile App Development",
      "3 Months Support",
    ],
    popular: true,
  },
  {
    name: "Premium Package",
    price: "$20,000",
    description: "For large-scale projects",
    features: [
      "Custom, High-End UI/UX Design",
      "Full-Featured Web Application",
      "Robust and Scalable Backend Architecture",
      "Cross-Platform Mobile App with Flutter",
      "Third-Party Service Integrations",
      "6 Months Support and Maintenance",
    ],
    popular: false,
  },
];

const Pricing = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-16 md:py-24 bg-white dark:bg-black overflow-hidden w-full" id="pricing">
      <div className="relative z-10 container mx-auto px-4 overflow-hidden">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 py-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <motion.div
                className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ${
                  plan.popular ? "border-2 border-blue-500 dark:border-blue-400" : ""
                } flex flex-col h-full`}
                animate={{
                  scale: hoveredIndex === index ? 1.05 : 1,
                  boxShadow: hoveredIndex === index ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                }}
                transition={{ duration: 0.3 }}
              >
                {plan.popular && (
                  <motion.div
                    className="bg-blue-500 text-white text-sm font-semibold py-1 px-4 absolute top-0 right-0 rounded-bl-lg"
                    initial={{ x: 100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    Most Popular
                  </motion.div>
                )}
                <div className="p-8 flex-grow">
                  <motion.h3
                    className="text-2xl font-bold mb-2 text-black dark:text-white"
                    animate={{ 
                      color: hoveredIndex === index 
                        ? "#3B82F6" 
                        : "var(--color-text-primary)"
                    }}
                    style={{
                      "--color-text-primary": "var(--tw-text-opacity, 1) * rgb(var(--tw-text-color-primary, 0 0 0) / var(--tw-text-opacity))",
                    } as React.CSSProperties}
                  >
                    {plan.name}
                  </motion.h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{plan.description}</p>
                  <motion.div
                    className="flex items-baseline mb-6"
                    animate={{ scale: hoveredIndex === index ? 1.1 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-4xl font-bold text-black dark:text-white">{plan.price}</span>
                    <span className="text-gray-600 dark:text-gray-400 ml-1">starting at</span>
                  </motion.div>
                  <ul className="mb-8 space-y-4">
                    {plan.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-center text-gray-600 dark:text-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                      >
                        <Check className="h-5 w-5 text-green-500 mr-2" /> {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className="p-8 pt-0">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 rounded-lg transition-all duration-300">
                      Choose Plan
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
