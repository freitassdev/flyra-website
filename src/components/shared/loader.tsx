"use client";

import { useEffect } from "react";

interface ILoaderProps {
  size?: number;
  stroke?: number;
  bgOpacity?: number;
  speed?: number;
  color?: string;
}

export default function Loader({
  size = 40,
  stroke = 5,
  bgOpacity = 0,
  speed = 2,
  color = "hsl(var(--foreground))",
}: ILoaderProps) {
  useEffect(() => {
    async function getLoader() {
      const { ring } = await import("ldrs");
      ring.register();
    }
    getLoader();
  }, []);
  return (
    <l-ring
      size={size}
      stroke={stroke}
      bg-opacity={bgOpacity}
      speed={speed}
      color={color}
    ></l-ring>
  );
}
