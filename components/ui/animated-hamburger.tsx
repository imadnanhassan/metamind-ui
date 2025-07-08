"use client";

import { motion } from "motion/react";

interface AnimatedHamburgerProps {
  isOpen: boolean;
  onClick: () => void;
}

export function AnimatedHamburger({ isOpen, onClick }: AnimatedHamburgerProps) {
  return (
    <button
      className="relative w-8 h-8 flex flex-col justify-center items-center focus:outline-none"
      onClick={onClick}
      aria-label="Toggle menu"
    >
      <motion.span
        className="block w-6 h-0.5 bg-white absolute"
        animate={{
          rotate: isOpen ? 45 : 0,
          y: isOpen ? 0 : -6,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      <motion.span
        className="block w-6 h-0.5 bg-white absolute"
        animate={{
          opacity: isOpen ? 0 : 1,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      <motion.span
        className="block w-6 h-0.5 bg-white absolute"
        animate={{
          rotate: isOpen ? -45 : 0,
          y: isOpen ? 0 : 6,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </button>
  );
}
