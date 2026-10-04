"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  Layers,
  ChevronDown
} from "lucide-react";
import { cn } from "@/libs/utils";

export default function Skills() {
  const { t, language } = useLanguage();
  
  // Estado para controlar qué sección está abierta. Por defecto, abre la primera (Frontend).
  const [openSection, setOpenSection] = useState<string>(skillsData[0]?.id || "");

  // Mapeo de iconos y colores base para los TÍTULOS de categoría
  const categoryTheme = {
    frontend: { icon: Layout, color: "text-blue-500", bgColor: "bg-blue-500/10", borderColor: "border-blue-500/30" },
    backend: { icon: Server, color: "text-green-500", bgColor: "bg-green-500/10", borderColor: "border-green-500/30" },
    databases: { icon: Database, color: "text-yellow-500", bgColor: "bg-yellow-500/10", borderColor: "border-yellow-500/30" },
    tools: { icon: Settings, color: "text-orange-500", bgColor: "bg-orange-500/10", borderColor: "border-orange-500/30" },
    core: { icon: Layers, color: "text-purple-500", bgColor: "bg-purple-500/10", borderColor: "border-purple-500/30" },
    soft: { icon: Users, color: "text-pink-500", bgColor: "bg-pink-500/10", borderColor: "border-pink-500/30" },
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      
      {/* Fondo tipo "Rejilla" */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        <SectionTitle 
          title={t.navbar.skills} 
          subtitle={language === "es" ? "Mis tecnologías y competencias profesionales" : "My professional tech stack and competencies"}
        />

        {/* Contenedor centralizado para el Acordeón */}
        <div className="mt-8 flex flex-col gap-4 max-w-4xl mx-auto">
          {skillsData.map((category) => {
            const theme = categoryTheme[category.id as keyof typeof categoryTheme] || categoryTheme.core;
            const TitleIcon = theme.icon;
            const isOpen = openSection === category.id;

            return (
              <div 
                key={category.id} 
                className={cn(
                  "rounded-2xl md:rounded-3xl border backdrop-blur-sm transition-all duration-300 overflow-hidden",
                  isOpen 
                    ? `bg-card/60 shadow-lg ${theme.borderColor}` 
                    : "bg-card/20 border-border/40 hover:border-border/80 hover:bg-card/40"
                )}
              >
                {/* Botón Cabecera (Header) */}
                <button 
                  onClick={() => setOpenSection(isOpen ? "" : category.id)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4 md:gap-5">
                    <div className={cn(
                      "p-3 md:p-3.5 rounded-xl transition-colors duration-300", 
                      isOpen ? cn(theme.bgColor, theme.color) : "bg-muted text-muted-foreground"
                    )}>
                      <TitleIcon className="h-6 w-6 md:h-7 md:w-7" />
                    </div>
                    <h3 className={cn(
                      "text-lg md:text-2xl font-bold tracking-tight transition-colors duration-300", 
                      isOpen ? theme.color : "text-foreground"
                    )}>
                      {category.title[language]}
                    </h3>
                  </div>
                  
                  {/* Icono Indicador (Chevron) */}
                  <div className={cn(
                    "p-2 rounded-full transition-all duration-300",
                    isOpen ? cn("rotate-180", theme.bgColor) : "rotate-0 bg-transparent"
                  )}>
                    <ChevronDown className={cn(
                      "h-5 w-5 transition-colors duration-300", 
                      isOpen ? theme.color : "text-muted-foreground"
                    )} />
                  </div>
                </button>

                {/* Contenido Expansible (Body) */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="p-5 md:p-6 pt-0 border-t border-border/10">
                        <div className="flex flex-wrap gap-3 md:gap-4 mt-4">
                          {category.skills.map((skill, idx) => (
                            <motion.div 
                              key={idx}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: idx * 0.05 }}
                              className="w-full sm:w-auto" // Comportamiento responsivo individual
                            >
                              <TechBadge 
                                name={skill.name} 
                                icon={skill.icon!} 
                                color={skill.color} 
                                customClass="w-full sm:w-auto"
                              />
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}