"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { skillsData } from "@/data/profile";
import SectionTitle from "@/components/ui/SectionTitle";
import { cn } from "@/libs/utils";
import TechBadge from "../ui/TechBadge";

// Si no quieres instalar framer-motion, avísame y te paso la versión CSS pura.
// npm install framer-motion

export default function Skills() {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(skillsData[0].id);

  // Encontrar la categoría activa para mostrar sus skills
  const activeData = skillsData.find((cat) => cat.id === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-muted/10">
      
      {/* Fondo sutil tipo Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <SectionTitle 
          title={t.navbar.skills} 
          subtitle={language === "es" ? "Mi arsenal tecnológico" : "My Tech Stack"}
        />

        <div className="flex flex-col items-center mt-12">
          
          {/* --- NAVEGACIÓN DE PESTAÑAS (TABS) --- */}
          <div className="flex flex-wrap justify-center gap-2 p-1.5 rounded-full bg-background/80 backdrop-blur-md border border-border shadow-sm mb-12">
            {skillsData.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 relative",
                  activeCategory === category.id 
                    ? "text-white shadow-md" 
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                {/* Fondo animado para la tab activa */}
                {activeCategory === category.id && (
                  <span className="absolute inset-0 bg-primary rounded-full -z-10 animate-in fade-in zoom-in duration-300" />
                )}
                {category.title[language]}
              </button>
            ))}
          </div>

          {/* --- GRID DE HABILIDADES --- */}
          <div className="w-full max-w-5xl min-h-[300px]">
             {/* Animación de entrada al cambiar categoría */}
             <div 
               key={activeCategory} 
               className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500"
             >
                {activeData?.skills.map((skill, index) => (
                  <TechBadge 
                    key={index}
                    name={skill.name}
                    icon={skill.icon!} // El ! es porque definimos icon como opcional en la interfaz, pero aquí sabemos que existe
                    color={skill.color}
                  />
                ))}
             </div>
             
             {/* Mensaje vacío si no hay skills (seguridad) */}
             {(!activeData?.skills || activeData.skills.length === 0) && (
               <p className="text-center text-muted-foreground mt-10">
                 No skills found for this category.
               </p>
             )}
          </div>

        </div>
      </div>
    </section>
  );
}