import { cn } from "@/libs/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export default function Card({ children, className, hoverEffect = false, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border/50 bg-background/50 backdrop-blur-sm p-6 shadow-sm",
        hoverEffect && "transition-all duration-300 hover:shadow-md hover:bg-muted/20 hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}