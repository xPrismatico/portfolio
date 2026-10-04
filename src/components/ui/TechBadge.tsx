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
        // CLASES BASE: Aislando el hover con group/badge para que no se active por culpa de la tarjeta padre
        "group/badge relative flex items-center gap-4 px-5 py-3 rounded-2xl border border-border/50 bg-background/50 backdrop-blur-sm transition-all duration-500 ease-out select-none",
        
        // COMPORTAMIENTO MÓVIL (Táctil): 
        // Borde y sombra se iluminan solo mientras mantienes presionado con el dedo (active)
        "active:border-[var(--hover-color)] active:shadow-[0_8px_20px_-8px_var(--hover-color)] active:-translate-y-1",
        
        // COMPORTAMIENTO PC (Pantallas grandes - lg): 
        // Recuperamos el efecto hover clásico que solo se activa al poner el cursor sobre ESTA tarjeta
        "lg:hover:shadow-[0_8px_20px_-8px_var(--hover-color)] lg:hover:border-[var(--hover-color)] lg:hover:-translate-y-1 lg:cursor-default",
        
        customClass
      )}
      // Inyectamos el color específico como variable CSS para este elemento
      style={{ "--hover-color": hoverColor } as React.CSSProperties}
    >
      
      {/* Contenedor del Icono: Color encendido en móvil, gris por defecto en PC y encendido al hover individual */}
      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-500 bg-[var(--hover-color)] lg:bg-muted/80 lg:group-hover/badge:bg-[var(--hover-color)] lg:group-hover/badge:scale-110">
        <Icon 
          className="h-6 w-6 transition-colors duration-500 text-white lg:text-muted-foreground lg:group-hover/badge:text-white" 
        />
      </div>

      {/* Nombre: Brillante por defecto en móvil, atenuado por defecto en PC */}
      <span className="text-base font-semibold leading-tight transition-colors duration-500 text-foreground lg:text-foreground/70 lg:group-hover/badge:text-foreground">
        {name[language]}
      </span>
    </div>
  );
}