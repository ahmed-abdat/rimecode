'use client'

import { motion } from "framer-motion";
import ContactForm from "@/components/form/ContactForm";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export default function ContactPageContent() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-6xl mx-auto"
    >
      <motion.h1 
        variants={itemVariants}
        className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-gray-100"
      >
        Let's Build Something Great Together
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <ContactForm />
        <motion.div variants={itemVariants} className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Contact by email</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Whether you have a project in mind or need guidance on your digital strategy, our team is here to help. You can reach us at{" "}
              <a href="mailto:contact@rimcode.com" className="text-blue-600 hover:underline">
                contact@rimcode.com
              </a>
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Call us</h2>
            <p className="text-gray-600 dark:text-gray-300">
              To chat with us directly or request information, we're available by phone at{" "}
              <a href="tel:+22242049074" className="text-blue-600 hover:underline">
                +222-42049074
              </a>
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Custom solutions</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Need a tailored solution for your business? Contact us for a personalized quote and let's discuss how we can meet your specific needs.
            </p>
          </section>
        </motion.div>
      </div>
    </motion.div>
  );
}
