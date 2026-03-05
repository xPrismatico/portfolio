"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { skillsData } from "@/data/profile";
import SectionTitle from "@/components/ui/SectionTitle";
import TechBadge from "../ui/TechBadge";
import { 
  Code2, 
  Database, 
  Layout, 
  Settings, 
  Server,
  Smartphone,
  Brain,
  Users,
  Layers
} from "lucide-react";
import { cn } from "@/libs/utils";

export default function Skills() {
  const { t, language } = useLanguage();

  // Mapeo de iconos y colores base para los TÍTULOS de categoría
  const categoryTheme = {
    frontend: { icon: Layout, color: "text-blue-500", bgColor: "bg-blue-500/10", borderColor: "border-blue-500/20" },
    backend: { icon: Server, color: "text-green-500", bgColor: "bg-green-500/10", borderColor: "border-green-500/20" },
    databases: { icon: Database, color: "text-yellow-500", bgColor: "bg-yellow-500/10", borderColor: "border-yellow-500/20" },
    tools: { icon: Settings, color: "text-orange-500", bgColor: "bg-orange-500/10", borderColor: "border-orange-500/20" },
    core: { icon: Layers, color: "text-purple-500", bgColor: "bg-purple-500/10", borderColor: "border-purple-500/20" },
    soft: { icon: Users, color: "text-pink-500", bgColor: "bg-pink-500/10", borderColor: "border-pink-500/20" },
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      
      {/* Fondo tipo "Rejilla" Bonita (Mantenido) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        <SectionTitle 
          title={t.navbar.skills} 
          subtitle={language === "es" ? "Mi arsenal tecnológico y competencias profesionales" : "My professional tech stack and competencies"}
        />

        {/* Contenedor principal con más espacio entre categorías */}
        <div className="mt-2 flex flex-col gap-6">
          {skillsData.map((category) => {
            // Obtenemos el tema visual para esta categoría
            const theme = categoryTheme[category.id as keyof typeof categoryTheme] || categoryTheme.core;
            const TitleIcon = theme.icon;

            return (
              // --- MEGACONTENEDOR DE CATEGORÍA ---
              // Un gran rectángulo redondeado con fondo sutil que agrupa todo
              <div 
                key={category.id} 
                className="relative flex flex-col lg:flex-row gap-8 p-6 md:p-8 rounded-3xl bg-card/30 border border-border/40 backdrop-blur-md shadow-sm transition-all hover:shadow-md"
              >
                
                {/* --- COLUMNA IZQUIERDA: TARJETA DE TÍTULO --- */}
                {/* En móvil va arriba, en desktop a la izquierda. Es una tarjeta visualmente rica. */}
                <div className={cn(
                  "lg:w-1/3 xl:w-1/4 flex-shrink-0 flex flex-col justify-center p-6 rounded-2xl border",
                  theme.bgColor, theme.borderColor
                )}>
                   <div className="flex items-center gap-4">
                      <div className={cn("p-3 rounded-xl bg-background/60 shadow-sm", theme.color)}>
                        <TitleIcon className="h-8 w-8" />
                      </div>
                      <h3 className={cn("text-2xl font-bold tracking-tight", theme.color)}>
                        {category.title[language]}
                      </h3>
                   </div>
                   {/* Decoración opcional: pequeña descripción bajo el título si quisieras agregarla en el futuro */}
                   {/* <p className="mt-2 text-sm text-muted-foreground">Technical Skills</p> */}
                </div>

                {/* --- COLUMNA DERECHA: LOS BADGES GIGANTES --- */}
                <div className="lg:w-2/3 xl:w-3/4 flex items-center">
                  <div className="flex flex-wrap gap-4">
                    {category.skills.map((skill, idx) => (
                      <TechBadge 
                        key={idx} 
                        name={skill.name} 
                        icon={skill.icon!} 
                        color={skill.color} 
                        // Opcional: hacer que ocupen el ancho completo en móviles muy pequeños
                        customClass="w-full sm:w-auto"
                      />
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}