"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { personalInfo, socialLinks } from "@/data/profile";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { Download, Mail, MapPin, ArrowDown, Code2, Sparkles } from "lucide-react";

export default function Hero() {
  const { language } = useLanguage();
  const { name, role, about, location, cvUrl, profileImage } = personalInfo;

  return (
    <section id="hero" className="relative flex min-h-[90vh] flex-col justify-center py-20 md:py-0">
      
      {/* Contenedor Principal: Ajusté el px para que en móvil no aplaste el contenido */}
      <div className="container mx-auto grid grid-cols-1 items-center gap-8 px-4 md:grid-cols-2 md:px-12 lg:px-20 xl:px-32">
        
        {/* --- COLUMNA 1: TEXTO --- */}
        {/* En móvil es order-2 (va abajo), en desktop es order-1 (va a la izquierda) */}
        <div className="order-2 md:order-1 flex flex-col items-center text-center md:items-start md:text-left space-y-6 animate-in fade-in slide-in-from-bottom-10 duration-700">
          
          <div className="space-y-4 max-w-2xl">

            {/* Etiqueta "Hola, soy" */}
            <div className="flex justify-center md:justify-start">
                 <span className="rounded-full bg-blue-950/60 border border-blue-800/50 px-4 py-1.5 text-sm font-semibold text-blue-400 backdrop-blur-sm shadow-sm">
                    {language === "es" ? "Hola, soy" : "Hello, I'm"}
                 </span>
            </div>

            {/* Nombre Gigante */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-tight">
              <span className="block text-foreground">{name.split(" ")[0]}</span> 
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent pb-1">
                {name.split(" ").slice(1).join(" ")}
              </span>
            </h1>
            
            {/* Rol */}
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-blue-400">
              {role[language]}
            </h2>
          </div>

          {/* Ubicación */}
          <div className="flex items-center gap-2 text-muted-foreground bg-muted/30 px-3 py-1 rounded-full text-sm border border-border/50">
            <MapPin className="h-4 w-4 text-primary" />
            <span>{location}</span>
          </div>

          {/* Descripción */}
          <p className="max-w-md text-base md:text-lg text-muted-foreground leading-relaxed">
            {about[language]}
          </p>
          


          {/* Botones de Acción */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2 w-full md:w-auto">
            <a href="#contact" className="w-full sm:w-auto">
              <Button size="md" className="group w-full sm:w-auto rounded-full bg-primary hover:bg-blue-700 text-white shadow-lg shadow-blue-900/20 text-base">
                <Mail className="mr-2 h-4 w-4" />
                {language === "es" ? "Contáctame" : "Contact Me"}
              </Button>
            </a>
            
            <a href={cvUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              
              <Button variant="outline" size="md" className="group w-full sm:w-auto rounded-full border-2 border-primary/20 hover:border-primary hover:bg-primary/5 text-foreground text-base">
                <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                {language === "es" ? "Descargar CV" : "Download CV"}
              </Button>
            </a>
          </div>

          {/* Redes Sociales */}
          <div className="flex items-center gap-3 pt-2">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-muted/50 hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 border border-border"
                aria-label={link.name}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
        

        {/* --- COLUMNA 2: IMAGEN --- */}
        {/* En móvil es order-1 (va primero), en desktop es order-2 (va a la derecha) */}
        <div className="order-1 md:order-2 relative flex justify-center md:justify-end animate-in fade-in zoom-in duration-1000 delay-200 mb-8 md:mb-0">
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] bg-blue-500/10 rounded-full blur-3xl -z-10" />

          {/* Contenedor de la imagen */}
          {/* shrink-0 evita que se aplaste como huevo. Tamaños ajustados para móvil */}
          <div className="relative h-[260px] w-[260px] sm:h-[300px] sm:w-[300px] md:h-[380px] md:w-[380px] shrink-0">
            
            <div className="absolute inset-0 rounded-full border border-blue-500/20 md:scale-105" /> 
            
            <div className="relative h-full w-full rounded-full overflow-hidden border-4 border-background shadow-2xl">
               <Image
                src={profileImage || "/profile/me.jpg"} 
                alt={name}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* ETIQUETA 1: Fullstack (Arriba Derecha) */}
            <div className="absolute top-2 -right-2 sm:top-4 sm:-right-4 md:top-8 md:-right-6 z-20">
                <div className="group cursor-pointer bg-background/90 backdrop-blur-md border border-border p-2 sm:p-3 rounded-2xl shadow-xl flex items-center gap-2 sm:gap-3 transition-all duration-300 hover:scale-110 hover:bg-background hover:border-blue-500/50 hover:shadow-blue-500/20">
                    <div className="bg-blue-600 p-1.5 sm:p-2 rounded-lg text-white group-hover:rotate-12 transition-transform duration-300">
                        <Code2 className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
                    </div>
                    <div className="flex flex-col pr-1">
                        <span className="text-[9px] sm:text-[10px] text-muted-foreground font-medium uppercase tracking-wider hidden sm:block">
                            {language === 'es' ? 'Experiencia' : 'Expertise'}
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-foreground">Fullstack</span>
                    </div>
                </div>
            </div>

            {/* ETIQUETA 2: Innovador (Abajo Izquierda) */}
            <div className="absolute bottom-2 -left-2 sm:bottom-4 sm:-left-4 md:bottom-8 md:-left-6 z-20">
                <div className="group cursor-pointer bg-background/90 backdrop-blur-md border border-border p-2 sm:p-3 rounded-2xl shadow-xl flex items-center gap-2 sm:gap-3 transition-all duration-300 hover:scale-110 hover:bg-background hover:border-purple-500/50 hover:shadow-purple-500/20">
                    <div className="bg-purple-600 p-1.5 sm:p-2 rounded-lg text-white group-hover:-rotate-12 transition-transform duration-300">
                        <Sparkles className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
                    </div>
                    <div className="flex flex-col pr-1">
                        <span className="text-[9px] sm:text-[10px] text-muted-foreground font-medium uppercase tracking-wider hidden sm:block">
                             {language === 'es' ? 'Habilidad' : 'Soft Skill'}
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-foreground">
                             {language === 'es' ? 'Innovador' : 'Innovator'}
                        </span>
                    </div>
                </div>
                
            </div>

          </div>
        </div>
      </div>

      {/* Flecha Scroll */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground/50 hover:text-primary transition-colors cursor-pointer hidden md:block">
        <a href="#about" aria-label="Scroll down">
            <ArrowDown className="h-8 w-8" />
        </a>
      </div>

    </section>
  );
}