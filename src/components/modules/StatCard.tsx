"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Stat } from "@/interfaces";
import { cn } from "@/libs/utils";

interface StatCardProps {
  stat: Stat;
  className?: string;
}

export default function StatCard({ stat, className }: StatCardProps) {
  const { language } = useLanguage();
  const Icon = stat.icon;

  return (
    <div className={cn("flex flex-col items-center justify-center p-4 text-center rounded-xl bg-muted/30 border border-border/30 transition-colors hover:bg-primary/5 hover:border-primary/20", className)}>
      <Icon className="h-6 w-6 text-primary mb-2" />
      <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/70">
        {stat.value}
      </span>
      <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium mt-1">
        {stat.label[language]}
      </span>
    </div>
  );
}