"use client";

import { useRef, useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { highlightsData } from "@/data/profile";
import SectionTitle from "@/components/ui/SectionTitle";
import { 
  Calendar, 
  ChevronRight, 
  Train, 
  Code2, 
  HeartHandshake, 
  Trophy, 
  Pickaxe, 
  Cpu,
  Star 
} from "lucide-react";
import { cn } from "@/libs/utils";

const getIconComponent = (iconType: string) => {
  switch (iconType) {
    case "train": return Train;
    case "code": return Code2;
    case "heart": return HeartHandshake;
    case "trophy": return Trophy;
    case "pickaxe": return Pickaxe;
    case "cpu": return Cpu;
    default: return Star;
  }
};

export default function Experience() {
  const { language } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Duplicamos los datos para crear el efecto de "bucle infinito" sin cortes
  const infiniteData = [...highlightsData, ...highlightsData, ...highlightsData];
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Lógica de Movimiento Continuo (Marquee) y Detección de Tarjeta Central
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationId: number;
    let lastScrollLeft = container.scrollLeft;

    const loop = () => {
      // 1. Movimiento continuo si no está pausado
      if (!isPaused) {
        container.scrollLeft += 0.8; // Velocidad del movimiento (ajusta este número si lo quieres más rápido o lento)
        
        // Efecto infinito: Si scrolleamos 1/3 del contenedor (la longitud original de los datos),
        // reiniciamos el scroll a 0 silenciosamente. El usuario no lo notará por los datos duplicados.
        if (container.scrollLeft >= container.scrollWidth / 3) {
          container.scrollLeft = 0;
        }
      }

      // 2. Detección de la tarjeta en el centro (solo calculamos si el scroll realmente se movió)
      if (container.scrollLeft !== lastScrollLeft) {
        lastScrollLeft = container.scrollLeft;
        const centerPosition = container.scrollLeft + container.clientWidth / 2;
        
        let closestIndex = 0;
        let minDistance = Infinity;

        Array.from(container.children).forEach((child) => {
          const indexAttr = child.getAttribute("data-index");
          if (indexAttr === null) return;
          
          const childElement = child as HTMLElement;
          const childCenter = childElement.offsetLeft + childElement.clientWidth / 2;
          const distance = Math.abs(childCenter - centerPosition);

          if (distance < minDistance) {
            minDistance = distance;
            closestIndex = Number(indexAttr);
          }
        });

        if (closestIndex !== activeIndex) {
          setActiveIndex(closestIndex);
        }
      }

      animationId = requestAnimationFrame(loop);
    };

    animationId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused, activeIndex]);

  // Función para mover el scroll directo a una tarjeta al hacer clic
  const scrollToCard = (index: number) => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const targetChild = container.querySelector(`[data-index="${index}"]`) as HTMLElement;
    
    if (targetChild) {
      const scrollTarget = targetChild.offsetLeft - container.clientWidth / 2 + targetChild.clientWidth / 2;
      // Desactivamos el smooth global de CSS en este container, así que lo hacemos con JS behavior
      container.scrollTo({ left: scrollTarget, behavior: 'smooth' });
    }
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-background">
      {/* Decoración de fondo suave */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent -z-10" />

      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle
          title={language === "es" ? "Experiencias y Destacados" : "Experience & Highlights"}
          subtitle={language === "es" ? "Iniciativas, competencias y roles activos" : "Initiatives, competitions, and active roles"}
        />

        <div className="mt-8 mb-6 flex items-center justify-end text-sm text-blue-400/80 animate-pulse pr-2 md:pr-4">
            <span>{language === "es" ? "Presiona una tarjeta para explorar" : "Swipe or click to explore"}</span>
            <ChevronRight className="h-4 w-4 ml-1" />
        </div>
      </div>

      {/* 
        CONTENEDOR DEL CARRUSEL CONTINUO
        Quitamos el snap-x para que el movimiento sea 100% fluido a 60fps sin tirones.
      */}
      <div
        ref={containerRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        className="flex overflow-x-auto gap-4 md:gap-6 pb-16 pt-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full cursor-grab active:cursor-grabbing"
      >
        {/* Espaciador Izquierdo */}
        <div className="shrink-0 w-[7.5vw] md:w-[calc(50vw-225px)]" aria-hidden="true" />

        {infiniteData.map((item, index) => {
          const Icon = getIconComponent(item.iconType);
          const isActive = activeIndex === index;
          // Generamos un key único real combinando ID e index del bucle
          const uniqueKey = `${item.id}-${index}`; 

          return (
            <div
              key={uniqueKey}
              data-index={index}
              onClick={() => scrollToCard(index)}
              className="shrink-0 w-[85vw] md:w-[450px] relative transition-transform duration-500"
            >
              {/* TARJETA ANIMADA */}
              <div 
                className={cn(
                  "h-[520px] md:h-[550px] flex flex-col rounded-3xl bg-card/80 border transition-all duration-700 ease-out overflow-hidden group",
                  isActive 
                    ? "scale-100 md:scale-[1.08] opacity-100 shadow-2xl shadow-blue-900/20 border-blue-500/50 z-20" 
                    : "scale-95 md:scale-90 opacity-40 blur-[1px] hover:opacity-70 hover:blur-none border-blue-900/20 z-0 shadow-sm"
                )}
              >
                {/* --- SECCIÓN SUPERIOR: IMAGEN --- */}
                <div className="relative h-48 md:h-52 w-full overflow-hidden shrink-0 bg-muted/50">
                  <img 
                    src={item.image} 
                    alt={item.title[language]} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  {/* Gradiente oscuro para fusionar la imagen con el texto */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                  
                  {/* Etiqueta del tipo flotante */}
                  <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-md border border-border/50 px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                      <Icon className={cn("h-4 w-4", isActive ? "text-blue-500" : "text-muted-foreground")} />
                      <span className={cn("text-xs font-bold uppercase", isActive ? "text-foreground" : "text-muted-foreground")}>
                        {item.type === 'work' && (language === 'es' ? 'Trabajo' : 'Work')}
                        {item.type === 'hackathon' && 'Hackathon'}
                        {item.type === 'volunteer' && (language === 'es' ? 'Voluntariado' : 'Volunteer')}
                        {item.type === 'award' && (language === 'es' ? 'Premio' : 'Award')}
                        {item.type === 'program' && (language === 'es' ? 'Programa' : 'Program')}
                      </span>
                  </div>
                </div>

                {/* --- SECCIÓN INFERIOR: CONTENIDO --- */}
                <div className="flex-1 flex flex-col p-6 md:p-8 relative z-10 bg-card">
                  <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground mb-4 w-fit bg-blue-950/30 border border-blue-900/30 px-3 py-1.5 rounded-full">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{item.period}</span>
                  </div>

                  <h3 className={cn(
                    "text-xl font-bold mb-1 line-clamp-2 transition-colors",
                    isActive ? "text-blue-400" : "text-foreground"
                  )}>
                    {item.title[language]}
                  </h3>
                  <h4 className="text-sm font-semibold text-blue-500 mb-4 line-clamp-1">
                    {item.role[language]}
                  </h4>

                  <p className="text-sm text-muted-foreground/90 leading-relaxed flex-1 overflow-hidden line-clamp-4">
                    {item.description[language]}
                  </p>
                </div>

              </div>
            </div>
          );
        })}

        {/* Espaciador Derecho */}
        <div className="shrink-0 w-[7.5vw] md:w-[calc(50vw-225px)]" aria-hidden="true" />
      </div>
    </section>
  );
}