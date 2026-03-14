"use client";

import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

export default function ShaderScene() {
  return (
    <ShaderGradientCanvas
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    >
      <ShaderGradient
        type="sphere"
        animate="on"
        uSpeed={0.3}
        uDensity={0.8}
        uFrequency={5.5}
        uStrength={0.3}
        uAmplitude={3.2}
        uTime={0}
        color1="#73bfc4"
        color2="#ff810a"
        color3="#8da0ce"
        cDistance={0.5}
        cPolarAngle={180}
        cAzimuthAngle={270}
        cameraZoom={15.1}
        brightness={0.8}
        grain="on"
        lightType="env"
        envPreset="city"
        reflection={0.4}
        positionX={-0.1}
        positionY={0}
        positionZ={0}
        rotationX={0}
        rotationY={130}
        rotationZ={70}
      />
    </ShaderGradientCanvas>
  );
}
