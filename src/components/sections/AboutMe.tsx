import { siteConfig } from "@/data/siteConfig";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { FadeInOnScroll } from "@/components/animation/FadeInOnScroll";

const highlights = [
  {
    value: "6+",
    label: "años de experiencia",
  },
  {
    value: "Mobile & Web",
    label: "Flutter · Android · iOS · Next.js · Angular",
  },
  {
    value: "Cancún, MX",
    label: "Disponible remoto",
  },
];

const achievements = [
  "Ownership completo de proyecto e-commerce (mobile + web + backend)",
  "Migración iOS/Android nativa a Flutter en tiempo récord",
  "Resolución de vulnerabilidades críticas para certificación de seguridad",
  "Reducción de regresiones en producción con testing estático y unitario",
];

export function AboutMe() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left column */}
          <FadeInOnScroll>
            <SectionLabel label="About Me" />
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
              Building products
              <br />
              end-to-end —
              <br />
              <span className="text-accent">mobile & web.</span>
            </h2>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {highlights.map((h) => (
                <div key={h.value} className="border border-foreground/10 rounded-sm p-3">
                  <p className="text-accent font-bold text-lg leading-tight">{h.value}</p>
                  <p className="text-muted text-xs mt-1 leading-snug">{h.label}</p>
                </div>
              ))}
            </div>

            <Button variant="secondary" href={siteConfig.resumeUrl} download="CV - Salvador Miron Ramos.pdf">
              Download Resume
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
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </Button>
          </FadeInOnScroll>

          {/* Right column */}
          <FadeInOnScroll delay={0.2}>
            <p className="text-muted leading-relaxed text-base md:text-lg md:mt-16 mb-8">
              {siteConfig.bio}
            </p>
            <ul className="space-y-3">
              {achievements.map((a) => (
                <li key={a} className="flex items-start gap-3 text-sm text-muted">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
}
