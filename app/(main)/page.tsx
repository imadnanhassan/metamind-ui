import DotBackground from "@/components/ui/dot-background";
import { FeaturesSection } from "@/components/ui/landing/features-section";
import { HeroSection } from "@/components/ui/landing/hero-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - MetaMind",
};

export default function Home() {
  return (
    <>
      <HeroSection />

      <DotBackground className="bg-black">
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 py-20">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Transform Your SEO with
          </h1>
        </div>
      </DotBackground>

      <FeaturesSection/>

       
    </>
  );
}
