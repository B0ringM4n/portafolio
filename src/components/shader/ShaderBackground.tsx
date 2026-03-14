"use client";

import dynamic from "next/dynamic";

const ShaderScene = dynamic(() => import("./ShaderScene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-gradient-to-br from-accent-teal/20 via-accent/10 to-accent-lavender/20" />
  ),
});

interface ShaderBackgroundProps {
  className?: string;
}

export function ShaderBackground({ className }: ShaderBackgroundProps) {
  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden ${className ?? ""}`}>
      <ShaderScene />
    </div>
  );
}
