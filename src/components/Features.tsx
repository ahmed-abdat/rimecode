"use client";

import { cn } from "@/lib/utils";
import {
  IconTerminal2,
  IconPalette,
  IconDeviceDesktopAnalytics,
  IconDeviceMobile,
  IconRocket,
  IconHeadset,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Modern Tech Stack",
    description:
      "Stay ahead with React.js, Next.js, TypeScript, Node.js, and Express.",
    icon: <IconTerminal2 />,
  },
  {
    title: "Exceptional UI/UX Design",
    description:
      "Create intuitive experiences with Shadcn UI and Tailwind CSS.",
    icon: <IconPalette />,
  },
  {
    title: "Scalable Solutions",
    description:
      "Build applications that grow with your business.",
    icon: <IconDeviceDesktopAnalytics />,
  },
  {
    title: "Cross-Platform Development",
    description: "Reach wider audiences with Flutter and React Native.",
    icon: <IconDeviceMobile />,
  },
  {
    title: "Fast and Reliable Performance",
    description: "Enjoy optimized code and robust infrastructure.",
    icon: <IconRocket />,
  },
  {
    title: "Dedicated Support",
    description:
      "Get ongoing maintenance and updates for your applications.",
    icon: <IconHeadset />,
  },
];

const Features = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-black" id="features">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Why Choose RimCode?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover the advantages that set us apart and drive your project&apos;s success.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 py-10 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 3) && "lg:border-l dark:border-neutral-800",
        index < 3 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};

export default Features;
