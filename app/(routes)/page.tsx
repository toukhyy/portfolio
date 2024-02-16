import { Metadata } from "next";
import Hero from "../_components/hero/Hero";
import AnimatedGradient from "../_components/animatedGradient/AnimatedGradient";

export const metadata: Metadata = {
  title: "Abdelrahman El Toukhy",
  description: "Toukhy's portfolio and blog",
};

export default function Home() {
  return (
    <main>
      <AnimatedGradient />
      <Hero />
    </main>
  );
}
