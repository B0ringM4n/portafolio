"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "@/types";

interface ProjectDialogProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectDialog({ project, onClose }: ProjectDialogProps) {
  const [slideIdx, setSlideIdx] = useState(0);

  const slides: (string | null)[] = project?.images?.length
    ? project.images
    : [null, null];
  const total = slides.length;

  useEffect(() => {
    setSlideIdx(0);
  }, [project?.id]);

  useEffect(() => {
    if (!project) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setSlideIdx((i) => (i + 1) % total);
      if (e.key === "ArrowLeft") setSlideIdx((i) => (i - 1 + total) % total);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [project, onClose, total]);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  const about = project?.about ?? project?.description ?? "";
  const hasSource = !!project?.sourceUrl;
  const hasDemo = !!project?.demoUrl;
  const showFooterButtons = hasSource || hasDemo;

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
          style={{
            backgroundColor: "rgba(4,5,8,0.78)",
            backdropFilter: "blur(6px)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            className="w-full max-w-[1040px] bg-card border border-border rounded-2xl grid min-h-0 overflow-hidden"
            style={{
              maxHeight: "calc(100vh - 64px)",
              gridTemplateRows: "auto 1fr auto",
              boxShadow:
                "0 30px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(249,115,22,0.04)",
            }}
            initial={{ opacity: 0, y: 18, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.99 }}
            transition={{ duration: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="dialog-title"
          >
            {/* ── Header ── */}
            <header className="flex items-center justify-between px-6 py-[18px] border-b border-border shrink-0">
              <div className="flex items-center gap-2.5 font-mono text-[11px] text-muted tracking-[0.05em] uppercase min-w-0">
                <span className="shrink-0">Projects</span>
                <span className="opacity-50 shrink-0">/</span>
                <span className="shrink-0 hidden sm:inline">
                  {project.category}
                </span>
                <span className="opacity-50 shrink-0 hidden sm:inline">/</span>
                <span
                  className="truncate"
                  style={{ color: project.logoColor ?? "var(--accent)" }}
                >
                  {project.name}
                </span>
              </div>
              <button
                onClick={onClose}
                className="ml-4 shrink-0 w-8 h-8 rounded-lg grid place-items-center text-muted hover:bg-foreground/5 hover:text-foreground transition-all"
                aria-label="Close dialog"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </header>

            {/* ── Body ── */}
            <div
              className="grid min-h-0 overflow-hidden grid-cols-1 sm:grid-cols-[1.35fr_1fr]"
            >
              {/* Slider */}
              <div
                className="relative overflow-hidden border-b border-border sm:border-b-0 sm:border-r"
                style={{ background: "#0c0d12", minHeight: 300 }}
              >
                {/* Counter */}
                <div
                  className="absolute top-4 left-4 z-10 font-mono text-[11px] px-2.5 py-1.5 rounded-md border border-border tracking-[0.05em] text-muted"
                  style={{
                    backgroundColor: "rgba(10,11,15,0.8)",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  <span className="text-accent">
                    {String(slideIdx + 1).padStart(2, "0")}
                  </span>{" "}
                  / {String(total).padStart(2, "0")}
                </div>

                {/* Track */}
                <div
                  className="absolute inset-0 flex"
                  style={{
                    transform: `translateX(-${slideIdx * 100}%)`,
                    transition: "transform 0.45s cubic-bezier(0.4,0.8,0.2,1)",
                  }}
                >
                  {slides.map((src, i) => (
                    <div key={i} className="flex-none w-full h-full">
                      {src ? (
                        <img
                          src={src}
                          alt={`${project.name} screenshot ${i + 1}`}
                          className="w-full h-full object-contain p-4"
                        />
                      ) : (
                        <div
                          className="w-full h-full grid place-items-center text-muted"
                          style={{
                            backgroundImage:
                              "repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0 2px, transparent 2px 14px), linear-gradient(135deg, #14161c 0%, #0e1014 100%)",
                          }}
                        >
                          <span
                            className="font-mono text-[11px] px-2.5 py-1.5 border border-border rounded tracking-[0.05em]"
                            style={{ background: "rgba(0,0,0,0.3)" }}
                          >
                            // screenshot_{String(i + 1).padStart(2, "0")}.png
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Prev arrow */}
                <button
                  onClick={() =>
                    setSlideIdx((i) => (i - 1 + total) % total)
                  }
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-[38px] h-[38px] rounded-full grid place-items-center text-foreground border border-border transition-all hover:bg-accent hover:border-accent hover:text-white"
                  style={{
                    backgroundColor: "rgba(10,11,15,0.8)",
                    backdropFilter: "blur(6px)",
                  }}
                  aria-label="Previous slide"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>

                {/* Next arrow */}
                <button
                  onClick={() => setSlideIdx((i) => (i + 1) % total)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-[38px] h-[38px] rounded-full grid place-items-center text-foreground border border-border transition-all hover:bg-accent hover:border-accent hover:text-white"
                  style={{
                    backgroundColor: "rgba(10,11,15,0.8)",
                    backdropFilter: "blur(6px)",
                  }}
                  aria-label="Next slide"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>

                {/* Thumbnails */}
                <div
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2 p-2 rounded-[10px] border border-border"
                  style={{
                    backgroundColor: "rgba(10,11,15,0.75)",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  {slides.map((src, i) => (
                    <button
                      key={i}
                      onClick={() => setSlideIdx(i)}
                      className={`w-11 h-[30px] rounded-[5px] border transition-all overflow-hidden relative bg-card ${
                        i === slideIdx
                          ? "border-accent shadow-[0_0_0_2px_rgba(249,115,22,0.2)]"
                          : "border-border"
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    >
                      {src ? (
                        <img
                          src={src}
                          alt=""
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      ) : (
                        <div
                          className="absolute inset-0"
                          style={{
                            backgroundImage:
                              "repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0 2px, transparent 2px 6px)",
                          }}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Info panel */}
              <div className="p-8 overflow-y-auto flex flex-col gap-6 [scrollbar-width:thin]">
                {/* Project header */}
                <div className="flex items-start gap-4">
                  <div
                    className="w-14 h-14 flex-shrink-0 rounded-xl grid place-items-center border border-border relative overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(135deg, #1f222b 0%, #14161c 100%)",
                    }}
                  >
                    <div
                      className="absolute inset-0"
                      style={{
                        background: project.logoColor
                          ? `radial-gradient(circle at 30% 20%, ${project.logoColor}40, transparent 70%)`
                          : "radial-gradient(circle at 30% 20%, rgba(249,115,22,0.25), transparent 70%)",
                      }}
                    />
                    <span
                      className="relative z-10 font-serif text-2xl font-bold"
                      style={{ color: project.logoColor ?? "var(--accent)" }}
                    >
                      {project.name[0]}
                    </span>
                  </div>
                  <div>
                    <h2
                      id="dialog-title"
                      className="font-serif text-[26px] sm:text-[28px] leading-tight font-semibold tracking-tight text-foreground mb-1.5"
                    >
                      {project.name}
                    </h2>
                    <span className="text-accent text-[11px] font-semibold tracking-[0.16em] uppercase">
                      {project.category} · {project.year ?? "2025"}
                    </span>
                  </div>
                </div>

                {/* About */}
                <div>
                  <SectionHeading>About</SectionHeading>
                  <p className="text-muted text-[13.5px] leading-relaxed">
                    {about}
                  </p>
                </div>

                {/* Problem */}
                {project.problem && (
                  <div>
                    <SectionHeading>Problema que resuelve</SectionHeading>
                    <div
                      className="p-4 rounded-[10px] border"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(249,115,22,0.06), rgba(249,115,22,0.015))",
                        borderColor: "rgba(249,115,22,0.18)",
                      }}
                    >
                      <p className="text-[13px]" style={{ color: "#d8d9dc" }}>
                        {project.problem}
                      </p>
                    </div>
                  </div>
                )}

                {/* Tech Stack */}
                {project.techStack && project.techStack.length > 0 && (
                  <div>
                    <SectionHeading>Tech Stack</SectionHeading>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[11px] px-2.5 py-[5px] rounded-md bg-foreground/5 border border-border text-muted hover:border-foreground/20 hover:text-foreground transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* ── Footer ── */}
            <footer
              className="flex items-center justify-between px-6 py-4 border-t border-border shrink-0"
              style={{
                background:
                  "linear-gradient(180deg, transparent, rgba(0,0,0,0.15))",
              }}
            >
              <div className="font-mono text-[11px] text-muted flex items-center gap-3">
                <span>
                  <Kbd>←</Kbd> <Kbd>→</Kbd> Navigate
                </span>
                <span>
                  <Kbd>Esc</Kbd> Close
                </span>
              </div>
              {showFooterButtons && (
                <div className="flex gap-2.5">
                  {hasSource && (
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-[18px] py-2.5 border border-border rounded-lg text-[12.5px] font-medium transition-all hover:border-accent hover:text-accent hover:bg-accent/10"
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.29 0 .32.22.7.82.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      Source
                    </a>
                  )}
                  {hasDemo && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-[18px] py-2.5 bg-accent border border-accent text-white rounded-lg text-[12.5px] font-medium transition-all hover:bg-[#ea6610]"
                    >
                      Live Demo
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path d="M7 17L17 7M7 7h10v10" />
                      </svg>
                    </a>
                  )}
                </div>
              )}
            </footer>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="flex items-center gap-2 text-[11px] font-semibold text-muted tracking-[0.16em] uppercase mb-2.5">
      <span className="inline-block w-[3px] h-[3px] rounded-full bg-accent shrink-0" />
      {children}
    </h4>
  );
}

function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="font-mono text-[10px] px-1.5 py-0.5 border border-border rounded bg-foreground/5 text-muted">
      {children}
    </kbd>
  );
}
