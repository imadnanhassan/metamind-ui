"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { TrendingUp, Users, Globe, Zap } from "lucide-react";
import DotBackground from "../dot-background";

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      icon: Users,
      number: "50,000+",
      label: "Active Users",
      description: "Marketers trust our platform",
    },
    {
      icon: TrendingUp,
      number: "300%",
      label: "Average Growth",
      description: "Increase in organic traffic",
    },
    {
      icon: Globe,
      number: "150+",
      label: "Countries",
      description: "Worldwide coverage",
    },
    {
      icon: Zap,
      number: "99.9%",
      label: "Uptime",
      description: "Reliable performance",
    },
  ];

  return (
    <DotBackground>
      <section ref={ref} className="py-20 bg-black z-30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of successful businesses that have transformed
              their SEO strategy with MetaMind
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-100 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-200 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-500">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </DotBackground>
  );
}
