"use client";

import { motion } from "framer-motion";
import { staggerItemVariants } from "@/components/animation/StaggerChildren";

interface TechIconProps {
  name: string;
  icon: string;
}

export function TechIcon({ name, icon }: TechIconProps) {
  return (
    <motion.div
      variants={staggerItemVariants}
      className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-foreground/5 transition-colors duration-300 group"
    >
      <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
        <img
          src={`/icons/${icon}`}
          alt={name}
          width={48}
          height={48}
          className="w-10 h-10 sm:w-12 sm:h-12 object-contain group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <span className="text-xs sm:text-sm text-muted group-hover:text-foreground transition-colors text-center">
        {name}
      </span>
    </motion.div>
  );
}
