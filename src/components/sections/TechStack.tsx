"use client";

import { technologies } from "@/data/techStack";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TechIcon } from "@/components/ui/TechIcon";
import { FadeInOnScroll } from "@/components/animation/FadeInOnScroll";
import { StaggerChildren } from "@/components/animation/StaggerChildren";

export function TechStack() {
  return (
    <section id="tech-stack" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInOnScroll>
          <SectionLabel label="Tech Stack" />
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-12">
            Technologies I
            <br />
            Work With
          </h2>
        </FadeInOnScroll>

        <StaggerChildren
          staggerDelay={0.05}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-2"
        >
          {technologies.map((tech) => (
            <TechIcon key={tech.name} name={tech.name} icon={tech.icon} />
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
