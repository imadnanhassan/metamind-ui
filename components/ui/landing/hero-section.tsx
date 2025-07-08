"use client";

// import { CustomerLogos } from "@/components/customer-logos";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { AnimatedGradientOrb } from "../animated-gradient-orb";
import { Sparkles } from "lucide-react";
import { AnimatedGradientOrbRight } from "../animated-gradient-orb-right";

export function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-black"
    >
      {/* Animated background gradient orb */}
      <AnimatedGradientOrb />
      {/* <AnimatedGradientOrbRight /> */}

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 py-20">
        <div className="text-center space-y-8">
          {/* Main Heading */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex justify-center mb-8 ">
              <div className="glass-card flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-medium border border-gray-800/50">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <Sparkles className="w-4 h-4 text-green-600" />
                <span className="gradient-text font-semibold text-white font-heading">
                  AI-Powered SEO Revolution
                </span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight !font-heading">
              Transform Your SEO with
              <br />
              <span className="relative">
                <span className="gradient-text">AI Intelligence</span>
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            className="max-w-2xl mx-auto space-y-1"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
              Generate high-quality content, optimize meta tags, analyze
              keywords, and boost your search rankings with our comprehensive
              AI-powered SEO toolkit.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  Book a Demo →
                </span>
              </button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  Build AI →
                </span>
              </button>
            </motion.div>
          </motion.div>

          {/* Customer Logos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {/* <CustomerLogos /> */}
          </motion.div>

          {/* Bottom Text */}
          <motion.div
            className="pt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <p className="text-gray-400 text-sm">
              MetaMind works with{" "}
              <span className="underline decoration-gray-400">
                Generative AI Companies
              </span>
              , U.S. Government Agencies & Enterprises
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
