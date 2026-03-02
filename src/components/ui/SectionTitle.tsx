import { cn } from "@/libs/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionTitle({ 
  title, 
  subtitle, 
  className,
  align = "center" 
}: SectionTitleProps) {
  return (
    <div className={cn("mb-12", align === "center" ? "text-center" : "text-left", className)}>
      {subtitle && (
        <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 pb-2 inline-block">
        {title}
      </h2>
      <div className={cn(
        "h-1.5 w-20 bg-primary/40 rounded-full mt-2", 
        align === "center" ? "mx-auto" : ""
      )} />
    </div>
  );
}