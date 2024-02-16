"use client";
import { useEffect } from "react";
import { Gradient } from "@/app/_utils/gradient";

export default function AnimatedGradient() {
  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");
  }, []);
  return (
    <canvas id="gradient-canvas" className="fixed inset-0" data-transition-in />
  );
}
