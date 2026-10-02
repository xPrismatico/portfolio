"use client";

import { Stat } from "@/interfaces";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/libs/utils";

interface StatCardProps {
  stat: Stat;
  className?: string;
}

export default function StatCard({ stat, className }: StatCardProps) {
  const { language } = useLanguage();
  const Icon = stat.icon;

  return (
    <div className={cn(
      "group relative overflow-hidden rounded-2xl bg-card border border-border/50 p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30",
      className
    )}>
      {/* Efecto de brillo de fondo */}
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/10 blur-2xl group-hover:bg-primary/20 transition-colors duration-500" />
      
      <div className="relative z-10 flex flex-col gap-4">
        <div className="p-3 rounded-xl bg-primary/10 w-max text-primary group-hover:scale-110 transition-transform duration-300">
          <Icon className="h-6 w-6" />
        </div>
        
        <div>
          <h4 className="text-3xl font-bold text-foreground mb-1">
            {stat.value}
          </h4>
          <p className="text-sm font-medium text-muted-foreground group-hover:text-primary/80 transition-colors">
            {stat.label[language]}
          </p>
        </div>
      </div>
    </div>
  );
}