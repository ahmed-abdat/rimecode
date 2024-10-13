import React from "react";
import { motion } from "framer-motion";

interface BackgroundShiftProps {
  shiftKey: string;
}

export const BackgroundShift: React.FC<BackgroundShiftProps> = ({ shiftKey }) => (
  <motion.span
    key={shiftKey}
    layoutId="bg-shift"
    className="absolute inset-0 -z-10 rounded-lg bg-blue-500"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ type: "spring", stiffness: 200, damping: 20 }}
  />
);
