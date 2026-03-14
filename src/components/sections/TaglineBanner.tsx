import { siteConfig } from "@/data/siteConfig";
import { FadeInOnScroll } from "@/components/animation/FadeInOnScroll";

export function TaglineBanner() {
  return (
    <section className="relative bg-section-dark py-16 sm:py-20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden sm:block">
        <span className="font-mono text-4xl text-accent/20">&lt;/&gt;</span>
      </div>
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-16 h-px bg-accent" />

      <div className="max-w-7xl mx-auto px-6">
        <FadeInOnScroll>
          <div className="max-w-lg">
            <div className="w-12 h-0.5 bg-accent mb-6" />
            <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-white/90 leading-relaxed">
              {siteConfig.tagline}
            </p>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
