import { useState } from "react";
import Hero from "@/components/kathy/Hero";
import Marquee from "@/components/kathy/Marquee";
import BreathTimer from "@/components/kathy/BreathTimer";
import SystemsGrid from "@/components/kathy/SystemsGrid";
import Podcast from "@/components/kathy/Podcast";
import Manifesto from "@/components/kathy/Manifesto";
import Footer from "@/components/kathy/Footer";

const Index = () => {
  const [startSignal, setStartSignal] = useState(0);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero onActivate={() => setStartSignal((s) => s + 1)} />
      <Marquee />
      <BreathTimer startSignal={startSignal} />
      <SystemsGrid />
      <Podcast />
      <Manifesto />
      <Footer />
    </main>
  );
};

export default Index;
