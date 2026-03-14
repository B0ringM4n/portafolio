import type { Project } from "@/types";
import { Button } from "@/components/ui/Button";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="relative bg-card rounded-lg p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-center group border border-border">
      {/* Large number */}
      <div className="absolute top-4 right-6 text-7xl sm:text-8xl font-bold text-accent/10 select-none pointer-events-none">
        {project.number}.
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-2">
          {project.name}
        </h3>
        <span className="inline-block text-xs uppercase tracking-wider text-accent font-medium mb-4">
          {project.category}
        </span>
        <p className="text-muted text-sm leading-relaxed mb-6">
          {project.description}
        </p>
        <Button variant="secondary" href={project.projectUrl}>
          View Project
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </Button>
      </div>

      {/* Image placeholder */}
      <div className="relative rounded-lg overflow-hidden bg-foreground/5 aspect-video">
        <div className="absolute inset-0 flex items-center justify-center text-muted/40">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
          </svg>
        </div>
      </div>
    </div>
  );
}
