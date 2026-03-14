"use client";

import { useState } from "react";
import { projects, projectCategories } from "@/data/projects";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FilterTabs } from "@/components/ui/FilterTabs";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { FadeInOnScroll } from "@/components/animation/FadeInOnScroll";

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInOnScroll>
          <SectionLabel label="Projects" />
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-8">
            Bridging the Gap
            <br />
            Between Imagination
            <br />
            and Execution
          </h2>
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.2}>
          <FilterTabs
            tabs={projectCategories}
            activeTab={activeFilter}
            onTabChange={setActiveFilter}
          />
        </FadeInOnScroll>

        <div className="flex flex-col gap-8">
          {filteredProjects.map((project, i) => (
            <FadeInOnScroll key={project.id} delay={i * 0.15}>
              <ProjectCard project={project} />
            </FadeInOnScroll>
          ))}
        </div>

        <FadeInOnScroll delay={0.3}>
          <div className="mt-10">
            <a
              href="#"
              className="flex items-center justify-between px-6 py-4 border border-border rounded-lg text-sm text-foreground hover:border-accent hover:text-accent transition-all group"
            >
              <span>View All Projects</span>
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
                className="group-hover:translate-x-1 transition-transform"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
