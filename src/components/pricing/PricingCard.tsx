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

export const PricingCard: React.FC<PricingCardProps> = ({ plan, billingCycle, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  return (
    <motion.div
      key={plan.name}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2, ease: "easeInOut" }
      }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full relative"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
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
            initial={{ rotate: 0, scale: 1 }}
            animate={{
              rotate: isHovered ? 0 : 5,
              scale: isHovered ? 1.05 : 1,
            }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
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
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
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
            onHoverStart={() => setIsButtonHovered(true)}
            onHoverEnd={() => setIsButtonHovered(false)}
          >
            <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 sm:py-4 rounded-lg transition-all duration-300 text-base sm:text-lg overflow-hidden">
              <motion.span
                className="flex items-center justify-center"
                initial={false}
                animate={{
                  x: isButtonHovered ? -20 : 0,
                  opacity: isButtonHovered ? 0 : 1,
                }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                Choose Plan
              </motion.span>
              <motion.span
                className="absolute inset-0 flex items-center justify-center"
                initial={false}
                animate={{
                  x: isButtonHovered ? 0 : 20,
                  opacity: isButtonHovered ? 1 : 0,
                }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                Get Started <ArrowRight className="ml-2" size={18} />
              </motion.span>
            </Button>
          </motion.div>
          <ul className="space-y-3 sm:space-y-4 mt-auto">
            {plan.features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-start text-sm sm:text-base text-gray-600 dark:text-gray-300"
              >
                <Check className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </NeonGradientCard>
    </motion.div>
  );
};
