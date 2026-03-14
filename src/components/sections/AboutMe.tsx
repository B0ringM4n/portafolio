import { siteConfig } from "@/data/siteConfig";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { FadeInOnScroll } from "@/components/animation/FadeInOnScroll";

export function AboutMe() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left column */}
          <FadeInOnScroll>
            <SectionLabel label="About Me" />
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
              The Mind
              <br />
              Behind the Magic:
              <br />
              <span className="text-accent">{siteConfig.name}</span>
            </h2>
            <Button variant="secondary" href={siteConfig.resumeUrl}>
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
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </Button>
          </FadeInOnScroll>

          {/* Right column */}
          <FadeInOnScroll delay={0.2}>
            <p className="text-muted leading-relaxed text-base md:text-lg md:mt-16">
              {siteConfig.bio}
            </p>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
}
