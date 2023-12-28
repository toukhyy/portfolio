import { Metadata } from "next";
import Hero from "../_components/hero/Hero";

export const metadata: Metadata = {
  title: "Abdelrahman El Toukhy's Blog",
  description: "Toukhy's portfolio and blog",
};

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  );
}
