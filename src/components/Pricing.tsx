'use client'

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { BackgroundLines } from "@/components/ui/background-lines";

const pricingPlans = [
  {
    name: 'Basic Package',
    price: '$5,000',
    description: 'For startups and small projects',
    features: [
      'Responsive Web Design',
      'Single-Page Application with React.js',
      'Basic Backend with Node.js & Express',
      '1 Month Support'
    ],
    popular: false,
  },
  {
    name: 'Standard Package',
    price: '$10,000',
    description: 'For growing businesses',
    features: [
      'Comprehensive UI/UX Design',
      'Multi-Page Application with Next.js',
      'Advanced Backend Features',
      'Cross-Platform Mobile App Development',
      '3 Months Support'
    ],
    popular: true,
  },
  {
    name: 'Premium Package',
    price: '$20,000',
    description: 'For large-scale projects',
    features: [
      'Custom, High-End UI/UX Design',
      'Full-Featured Web Application',
      'Robust and Scalable Backend Architecture',
      'Cross-Platform Mobile App with Flutter',
      'Third-Party Service Integrations',
      '6 Months Support and Maintenance'
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section className="relative py-16 md:py-24 bg-white dark:bg-black" id="pricing">
      <div className="relative z-10 container mx-auto px-4">
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
            At RimCode, we offer flexible pricing plans designed to provide value and quality, no matter the size or scope of your project.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${
                plan.popular ? 'border-2 border-blue-500 dark:border-blue-400' : ''
              } flex flex-col`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.popular && (
                <div className="bg-blue-500 text-white text-sm font-semibold py-1 px-4 absolute top-0 right-0 rounded-bl-lg">
                  Most Popular
                </div>
              )}
              <div className="p-8 flex-grow">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{plan.description}</p>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-600 dark:text-gray-400 ml-1">starting at</span>
                </div>
                <ul className="mb-8 space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600 dark:text-gray-300">
                      <Check className="h-5 w-5 text-green-500 mr-2" /> {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 pt-0">
                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 rounded-lg transition-all duration-300">
                  Choose Plan
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="pb-16 md:pb-24"></div>
    </section>
  );
};

export default Pricing;