"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "@/components/ui/Button";
import { SocialIcons } from "@/components/ui/SocialIcons";
import { ShaderBackground } from "@/components/shader/ShaderBackground";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <ShaderBackground className="opacity-60" />

      {/* Social icons - left side */}
      <div className="hidden lg:block fixed left-6 top-1/2 -translate-y-1/2 z-10">
        <SocialIcons direction="vertical" />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 pt-20 w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-sm uppercase tracking-[0.3em] text-muted mb-4"
        >
          {siteConfig.name}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8"
        >
          {siteConfig.role.split(" ").map((word, i) => (
            <span key={i}>
              {i > 0 && (
                <>
                  <br className="hidden sm:block" />{" "}
                </>
              )}
              {i === 0 ? word : (
                <span className="text-accent">{word}</span>
              )}
            </span>
          ))}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Button variant="secondary" href="#contact">
            Say Hello
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </Button>
        </motion.div>

        {/* Mobile social icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="lg:hidden mt-10"
        >
          <SocialIcons direction="horizontal" />
        </motion.div>
      </div>
    </section>
  );
}
