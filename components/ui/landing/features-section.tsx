"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Brain, Zap, Shield, BarChart3 } from "lucide-react";
import { CardSpotlight } from "../card-spotlight";

export function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Brain,
      title: "Advanced AI Models",
      description:
        "State-of-the-art machine learning models trained on massive datasets for superior performance.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Optimized infrastructure delivering results in milliseconds, not minutes.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Bank-level security with SOC 2 compliance and end-to-end encryption.",
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description:
        "Comprehensive dashboards and insights to track performance and ROI.",
    },
  ];

  return (
    <section ref={ref} className="py-24 px-6 bg-black/95">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              MetaMind
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Cutting-edge AI technology designed for enterprise scale and
            government-grade security
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <CardSpotlight>
              <motion.div
                key={feature.title}
                className=" rounded-lg p-2 hover:border-purple-500/50 transition-colors duration-300 !z-20"
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            </CardSpotlight>
          ))}
        </div>
      </div>
    </section>
  );
}
