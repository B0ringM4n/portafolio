import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  onOpen?: (project: Project) => void;
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <div
      className="relative bg-card rounded-lg p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-center group border border-border cursor-pointer transition-[border-color] hover:border-foreground/20"
      onClick={() => onOpen?.(project)}
      role={onOpen ? "button" : undefined}
      tabIndex={onOpen ? 0 : undefined}
      onKeyDown={(e) => {
        if (onOpen && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          onOpen(project);
        }
      }}
      aria-label={onOpen ? `Open ${project.name} details` : undefined}
    >
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
        <button
          className="inline-flex items-center gap-2 px-[18px] py-2.5 border border-border rounded-lg text-[12.5px] font-medium transition-all hover:border-accent hover:text-accent hover:bg-accent/10"
          onClick={(e) => {
            e.stopPropagation();
            onOpen?.(project);
          }}
          tabIndex={-1}
        >
          View Project
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="11"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </button>
      </div>

      {/* Image */}
      <div className="relative rounded-lg overflow-hidden bg-foreground/5 aspect-video flex items-center justify-center">
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={project.name}
            className="max-h-full max-w-full object-contain py-2"
          />
        ) : (
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
        )}
      </div>
    </div>
  );
}
