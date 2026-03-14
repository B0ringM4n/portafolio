interface SectionLabelProps {
  label: string;
}

export function SectionLabel({ label }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <span className="inline-block w-2 h-2 bg-accent rounded-sm" />
      <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
        {label}
      </span>
    </div>
  );
}
