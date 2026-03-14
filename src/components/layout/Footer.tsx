import { siteConfig } from "@/data/siteConfig";

export function Footer() {
  return (
    <footer className="mt-20">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
        <p>
          Designed & built by <span className="text-foreground font-medium">{siteConfig.name}</span>
        </p>
        <p>code + design + dedication &copy; 2025</p>
      </div>
      <div className="h-1 bg-gradient-to-r from-accent-teal via-accent to-accent-lavender" />
    </footer>
  );
}
