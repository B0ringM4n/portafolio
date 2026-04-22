import { cn } from "@/lib/utils";

interface ButtonProps {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  href?: string;
  download?: string | boolean;
  onClick?: () => void;
  className?: string;
}

export function Button({
  variant = "primary",
  children,
  href,
  download,
  onClick,
  className,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-sm transition-all duration-300 cursor-pointer";

  const variantClasses = {
    primary:
      "bg-accent text-white hover:bg-accent/90 shadow-sm hover:shadow-md",
    secondary:
      "border border-foreground/20 text-foreground hover:border-accent hover:text-accent",
  };

  const classes = cn(baseClasses, variantClasses[variant], className);

  if (href) {
    return (
      <a href={href} download={download} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
