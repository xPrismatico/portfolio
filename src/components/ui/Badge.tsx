import { cn } from "@/libs/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline";
}

export default function Badge({ children, className, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors",
        variant === "default" 
          ? "bg-primary/10 text-primary border border-primary/20" 
          : "border border-border text-foreground/60",
        className
      )}
    >
      {children}
    </span>
  );
}