"use client";

import { motion } from "motion/react";

export function AnimatedGradientOrb() {
  return (
    <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-[800px] h-[800px] pointer-events-none">
      <div className="relative w-full h-full">
        {/* Main animated gradient orb */}
        <motion.div
          className="absolute inset-0 rounded-full blur-3xl"
          style={{
            background: `conic-gradient(from 0deg, 
              rgba(147, 51, 234, 0.4) 0deg,
              rgba(236, 72, 153, 0.4) 60deg,
              rgba(59, 130, 246, 0.4) 120deg,
              rgba(34, 197, 94, 0.4) 180deg,
              rgba(251, 191, 36, 0.4) 240deg,
              rgba(239, 68, 68, 0.4) 300deg,
              rgba(147, 51, 234, 0.4) 360deg
            )`,
          }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        {/* Secondary rotating gradient */}
        <motion.div
          className="absolute inset-4 rounded-full blur-2xl"
          style={{
            background: `conic-gradient(from 180deg, 
              rgba(168, 85, 247, 0.3) 0deg,
              rgba(244, 114, 182, 0.3) 60deg,
              rgba(96, 165, 250, 0.3) 120deg,
              rgba(52, 211, 153, 0.3) 180deg,
              rgba(253, 224, 71, 0.3) 240deg,
              rgba(248, 113, 113, 0.3) 300deg,
              rgba(168, 85, 247, 0.3) 360deg
            )`,
          }}
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        {/* Inner pulsing core */}
        <motion.div
          className="absolute inset-16 rounded-full blur-xl"
          style={{
            background: `radial-gradient(circle, 
              rgba(139, 92, 246, 0.2) 0%,
              rgba(219, 39, 119, 0.2) 25%,
              rgba(59, 130, 246, 0.2) 50%,
              rgba(16, 185, 129, 0.2) 75%,
              rgba(245, 158, 11, 0.2) 100%
            )`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: `hsl(${i * 60}, 70%, 60%)`,
              left: `${20 + i * 10}%`,
              top: `${30 + i * 8}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  );
}
