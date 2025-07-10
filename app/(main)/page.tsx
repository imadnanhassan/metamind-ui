"use client";

import { FeaturesSection } from "@/components/ui/landing/features-section";
import { HeroSection } from "@/components/ui/landing/hero-section";
import { StatsSection } from "@/components/ui/landing/stats-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - MetaMind",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
    </>
  );
}
