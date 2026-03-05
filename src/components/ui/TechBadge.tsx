"use client";

import { LucideIcon } from "lucide-react";
import { cn } from "@/libs/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { LocalizedText } from "@/interfaces";

interface TechBadgeProps {
  name: LocalizedText;
  icon: LucideIcon;
  color?: string;
  customClass?: string;
}

export default function TechBadge({ name, icon: Icon, color, customClass }: TechBadgeProps) {
  const { language } = useLanguage();
  
  // Color por defecto si no se especifica uno (usamos el primario de tu tema)
  const hoverColor = color || "var(--primary)";

  return (
    <div
      className={cn(
        // CLASES BASE:
        // - Mucho más padding (px-5 py-3) para que se vean grandes.
        // - rounded-2xl para bordes muy suaves.
        // - Fondo y borde sutiles por defecto.
        "group relative flex items-center gap-4 px-5 py-3 rounded-2xl border border-border/50 bg-background/50 backdrop-blur-sm transition-all duration-500 ease-out cursor-default",
        // HOVER:
        // - Sombra coloreada suave.
        // - El borde toma el color.
        // - Ligera elevación (-translate-y-1).
        "hover:shadow-[0_8px_20px_-8px_var(--hover-color)] hover:border-[var(--hover-color)] hover:-translate-y-1",
        customClass
      )}
      // Inyectamos el color específico como variable CSS para este elemento
      style={{ "--hover-color": hoverColor } as React.CSSProperties}
    >
      
      {/* Contenedor del Icono: Más grande y definido */}
      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-muted/80 transition-all duration-500 group-hover:bg-[var(--hover-color)] group-hover:scale-110">
        <Icon 
          // El icono es gris por defecto, blanco al hacer hover sobre el fondo de color
          className="h-6 w-6 text-muted-foreground transition-colors duration-500 group-hover:text-white" 
        />
      </div>

      {/* Nombre: Texto más grande (text-base) */}
      <span className="text-base font-semibold text-foreground/70 transition-colors duration-500 group-hover:text-foreground leading-tight">
        {name[language]}
      </span>
    </div>
  );
}