import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { BackgroundShift } from "./BackgroundShift";

interface PricingHeadingProps {
  billingCycle: "M" | "A";
  setBillingCycle: (cycle: "M" | "A") => void;
}

export const PricingHeading: React.FC<PricingHeadingProps> = ({ billingCycle, setBillingCycle }) => (
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
    <div className="flex items-center justify-center gap-3 mt-8">
      <button
        onClick={() => setBillingCycle("M")}
        className={cn(
          `rounded-lg px-4 py-2 text-sm font-medium `,
          billingCycle === "M"
            ? "relative bg-blue-500 text-white "
            : "text-gray-700 hover:bg-blue-100 dark:text-gray-300 dark:hover:text-black"
        )}
      >
        Monthly
        {billingCycle === "M" && <BackgroundShift shiftKey="monthly" />}
      </button>
      <button
        onClick={() => setBillingCycle("A")}
        className={cn(
          `rounded-lg px-4 py-2 text-sm font-medium `,
          billingCycle === "A"
            ? "relative bg-blue-500 text-white "
            : "text-gray-700 hover:bg-blue-100 dark:text-gray-300 dark:hover:text-black"
        )}
      >
        Annual
        {billingCycle === "A" && <BackgroundShift shiftKey="annual" />}
      </button>
    </div>
  </motion.div>
);
