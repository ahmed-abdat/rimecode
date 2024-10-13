import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";

interface PricingCardProps {
  plan: {
    name: string;
    description: string;
    monthlyPrice: number;
    annualPrice: number;
    features: string[];
    popular: boolean;
  };
  billingCycle: "M" | "A";
  index: number;
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
  hover: {
    scale: 1.02,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
};

const popularBadgeVariants = {
  initial: { rotate: 0, scale: 1 },
  hover: { rotate: 0, scale: 1.05 },
};

const priceVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

const buttonTextVariants = {
  initial: { x: 0, opacity: 1 },
  hover: { x: -20, opacity: 0 },
};

const buttonIconVariants = {
  initial: { x: 20, opacity: 0 },
  hover: { x: 0, opacity: 1 },
};

export const PricingCard: React.FC<PricingCardProps> = ({ plan, billingCycle, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHoverStart = () => setIsHovered(true);
  const handleHoverEnd = () => setIsHovered(false);

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      custom={index}
      className="h-full relative"
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      layout
    >
      <NeonGradientCard
        className="h-full flex flex-col transition-all duration-300 ease-in-out"
        isHovered={isHovered}
        neonColors={{
          firstColor: "#3B82F6",
          secondColor: "#A855F7",
        }}
      >
        {plan.popular && (
          <motion.div
            className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-bold py-1 px-3 rounded-full shadow-lg z-10"
            variants={popularBadgeVariants}
            initial="initial"
            animate={isHovered ? "hover" : "initial"}
          >
            Most Popular
          </motion.div>
        )}
        <div className="p-6 sm:p-8 flex-grow flex flex-col">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 text-blue-500">
            {plan.name}
          </h3>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6">
            {plan.description}
          </p>
          <div className="flex items-baseline mb-6 sm:mb-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={billingCycle}
                variants={priceVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.2 }}
                className="flex items-baseline"
              >
                <span className="text-3xl sm:text-5xl font-bold text-black dark:text-white">
                  ${billingCycle === "M" ? plan.monthlyPrice : plan.annualPrice}
                </span>
                <span className="text-base sm:text-lg text-gray-600 dark:text-gray-400 ml-2">
                  /{billingCycle === "M" ? "month" : "year"}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
          <motion.div
            className="relative w-full mb-6 sm:mb-8"
            whileHover="hover"
            initial="initial"
          >
            <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 sm:py-4 rounded-lg transition-all duration-300 text-base sm:text-lg overflow-hidden">
              <motion.span
                className="flex items-center justify-center"
                variants={buttonTextVariants}
              >
                Choose Plan
              </motion.span>
              <motion.span
                className="absolute inset-0 flex items-center justify-center"
                variants={buttonIconVariants}
              >
                Get Started <ArrowRight className="ml-2" size={18} />
              </motion.span>
            </Button>
          </motion.div>
          <ul className="space-y-3 sm:space-y-4 mt-auto">
            {plan.features.map((feature, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start text-sm sm:text-base text-gray-600 dark:text-gray-300"
              >
                <Check className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </NeonGradientCard>
    </motion.div>
  );
};
