'use client'

import { motion } from "framer-motion";
import ContactForm from "@/components/form/ContactForm";
import Link from "next/link";

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

export default function ContactPageContent({ selectedPlan }: { selectedPlan: string }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-6xl mx-auto"
    >
      <motion.h1 
        variants={itemVariants}
        className="text-3xl sm:text-4xl font-semibold mb-12 text-center text-blue-600 dark:text-blue-400"
      >
        Contact Us
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <ContactForm selectedPlan={selectedPlan} />
        <motion.div variants={itemVariants} className="space-y-8 pt-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">Contact by email</h2>
            <p className="text-gray-600 dark:text-gray-300">
              For project inquiries, documentation requests, or specific information, our expert team is ready to assist you. Reach out via email at{" "}
              <Link href="mailto:contact@rimcode.com" className="text-blue-600 hover:underline dark:text-blue-400 font-bold">
                contact@rimcode.com
              </Link>
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">Direct Communication</h2>
            <p className="text-gray-600 dark:text-gray-300">
              For immediate assistance or to discuss your project in detail, our consultants are available by phone at{" "}
              <Link href="tel:+22242049074" className="text-blue-600 hover:underline dark:text-blue-400 font-bold">
                +222-42049074
              </Link>
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">Tailored Solutions</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Every business is unique. Let&apos;s collaborate on crafting a bespoke solution that aligns perfectly with your goals and challenges. Contact us for a comprehensive, personalized proposal.
            </p>
          </section>
          <p className="text-lg text-gray-600 mb-8">
            We&apos;re excited to hear from you! Whether you have questions about our services, need assistance, or want to discuss a potential project, we&apos;re here to help.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
