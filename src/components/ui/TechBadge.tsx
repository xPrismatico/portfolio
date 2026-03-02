"use client";

import { LucideIcon } from "lucide-react";
import { cn } from "@/libs/utils";

interface TechBadgeProps {
  name: string;
  icon: LucideIcon;
  color?: string; // Hex color (ej: #61DAFB para React)
  customClass?: string;
}

export default function TechBadge({ name, icon: Icon, color = "#3b82f6", customClass }: TechBadgeProps) {
  return (
    <div
      className={cn(
        "group relative flex items-center gap-3 rounded-xl border border-border/50 bg-background/50 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-border hover:shadow-lg",
        customClass
      )}
      // Usamos style para inyectar el color específico de la tecnología en el hover
      style={{ "--hover-color": color } as React.CSSProperties}
    >
      {/* Fondo con brillo sutil al hover */}
      <div className="absolute inset-0 rounded-xl bg-[var(--hover-color)] opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-10" />
      
      {/* Contenedor del Icono */}
      <div 
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted/50 transition-colors duration-300 group-hover:bg-[var(--hover-color)] group-hover:text-white"
        style={{ color: "var(--foreground)" }} // Color base
      >
        <Icon className="h-6 w-6" />
      </div>

      {/* Nombre */}
      <span className="font-medium text-muted-foreground transition-colors group-hover:text-foreground">
        {name}
      </span>
    </div>
  );
}