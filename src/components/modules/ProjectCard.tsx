"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Project } from "@/interfaces";
import { useLanguage } from "@/contexts/LanguageContext";
import { TECH_ICONS } from "@/data/profile"; // Importamos el mapa de iconos
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { cn } from "@/libs/utils";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { language } = useLanguage();
  const [showSynopsis, setShowSynopsis] = useState(false);

  // Helper para obtener el path del icono SVG
  const getIconPath = (techName: string) => {
    return TECH_ICONS[techName] || null;
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border/50 bg-card text-card-foreground shadow-lg transition-all hover:shadow-xl hover:border-primary/20"
    >
      {/* --- IMAGEN --- */}
      <div className="relative h-56 w-full overflow-hidden bg-muted">
        {/* Placeholder visual por si la imagen no carga */}
        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20 font-bold text-4xl">
           SF
        </div>
        
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80" />
        
        {project.featured && (
           <div className="absolute top-3 right-3">
             <Badge className="bg-yellow-500/90 text-white border-none shadow-sm backdrop-blur-sm">
                ⭐ {language === 'es' ? 'Destacado' : 'Featured'}
             </Badge>
           </div>
        )}
      </div>

      {/* --- CONTENIDO --- */}
      <div className="flex flex-1 flex-col p-6 pt-2 relative">
        {/* Título superpuesto visualmente un poco arriba o normal */}
        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
            {project.title}
        </h3>

        {/* Tags con Iconos SVG */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => {
            const iconPath = getIconPath(tag);
            return (
              <span 
                key={tag} 
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-blue-500/5 text-blue-300 dark:text-blue-400 border border-blue-500/10"
              >
                {iconPath && (
                  <Image 
                    src={iconPath} 
                    alt={tag} 
                    width={14} 
                    height={14} 
                    className="object-contain" 
                  />
                )}
                {tag}
              </span>
            );
          })}
        </div>

        {/* Descripción Principal (Siempre visible) */}
        <div className="mb-4">
          <p className="text-muted-foreground text-sm leading-relaxed">
            {project.description[language]}
          </p>
        </div>

        {/* Sinopsis Desplegable (Solo si existe, ej: Videojuegos) */}
        {project.synopsis && (
          <div className="mb-6">
            <button 
              onClick={() => setShowSynopsis(!showSynopsis)}
              className="flex items-center gap-1 text-xs font-bold text-primary hover:underline focus:outline-none mb-2"
            >
              {showSynopsis 
                  ? (language === 'es' ? 'Ocultar Sinopsis' : 'Hide Synopsis') 
                  : (language === 'es' ? 'Leer Sinopsis' : 'Read Synopsis')}
              {showSynopsis ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
            </button>

            <AnimatePresence>
              {showSynopsis && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-3 bg-muted/30 rounded-lg text-sm italic text-muted-foreground border-l-2 border-primary">
                    {project.synopsis[language]}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* --- BOTONES DE ACCIÓN --- */}
        <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {project.actions.map((action, idx) => {
             const Icon = action.icon;
             // Si hay 3 botones (ej: Predictor), el último ocupa 2 columnas para quedar centrado
             const isFullWidth = project.actions.length === 1 || (project.actions.length === 3 && idx === 2);
             
             return (
               <a 
                 key={idx} 
                 href={action.url} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className={cn(isFullWidth ? "sm:col-span-2" : "")}
               >
                 <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full gap-2 border-border/50 bg-background/50 hover:bg-primary/5 hover:border-primary/50 transition-all"
                 >
                   <Icon className="h-4 w-4" />
                   {action.label[language]}
                 </Button>
               </a>
             );
          })}
        </div>
      </div>
    </motion.div>
  );
}