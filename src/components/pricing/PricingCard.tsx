import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import { useRouter } from "next/navigation";

interface PricingCardProps {
  plan: {
    name: string;
    description: string;
    price: number | null;
    features: string[];
    popular: boolean;
  };
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
};

const priceVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

export const PricingCard: React.FC<PricingCardProps> = ({ plan, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handlePlanSelection = () => {
    const encodedPlanName = encodeURIComponent(plan.name);
    router.push(`/contact?plan=${encodedPlanName}`);
  };

  const ButtonContent = () => (
    <div className="relative overflow-hidden">
      <span className="inline-block transition-transform duration-300 ease-in-out transform group-hover:-translate-y-full">
        {plan.price !== null ? "Choose Plan" : "Get in Touch"}
      </span>
      <span className="inline-block transition-transform duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0 absolute left-0 top-0">
        {plan.price !== null ? "Get Started" : "Contact Us"} <ArrowRight className="inline-block ml-2" size={18} />
      </span>
    </div>
  );

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      custom={index}
      className="h-full relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <NeonGradientCard
        className="h-full flex flex-col transition-all duration-300 ease-in-out transform group-hover:scale-105"
        isHovered={isHovered}
        neonColors={{
          firstColor: "#3B82F6",
          secondColor: "#A855F7",
        }}
      >
        {plan.popular && (
          <div className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-bold py-1 px-3 rounded-full shadow-lg z-10 transition-transform duration-300 ease-in-out transform group-hover:scale-110">
            Most Popular
          </div>
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
                key={plan.name}
                variants={priceVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.2 }}
                className="flex items-baseline"
              >
                {plan.price !== null ? (
                  <>
                    <span className="text-3xl md:text-2xl xl:text-4xl font-bold text-black dark:text-white">
                      MR {plan.price.toLocaleString()}
                    </span>
                    <span className="text-base sm:text-lg text-gray-600 dark:text-gray-400 ml-2">
                      /project
                    </span>
                  </>
                ) : (
                  <span className="text-2xl sm:text-3xl font-bold text-black dark:text-white">
                    Contact Us
                  </span>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="relative w-full mb-6 sm:mb-8">
            <Button 
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 sm:py-4 rounded-lg transition-all duration-300 text-base sm:text-lg overflow-hidden group"
              onClick={handlePlanSelection}
            >
              <ButtonContent />
            </Button>
          </div>
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
