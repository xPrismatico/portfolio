"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { personalInfo, socialLinks } from "@/data/profile";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { Download, Mail, MapPin, ArrowDown, Code2, Sparkles } from "lucide-react";

export default function Hero() {
  const { language } = useLanguage();
  const { name, role, about, location, cvUrl, profileImage } = personalInfo;
  // Variantes para orquestar la aparición en cascada tipadas correctamente
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

return (
    <section id="hero" className="relative flex min-h-[90vh] flex-col justify-center py-20 md:py-0">
      
      {/* Fondo de "Constelaciones" (Partículas orgánicas y esparcidas) */}
      <div className="absolute inset-0 pointer-events-none -z-20 overflow-hidden [mask-image:radial-gradient(ellipse_100%_100%_at_50%_50%,#000_10%,transparent_80%)]">
        <svg className="absolute inset-0 w-full h-[150%] opacity-60">
          <defs>
            {/* Patrón 1: Estrellas pequeñas esparcidas asimétricamente */}
            <pattern id="stars-1" x="0" y="0" width="250" height="250" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="1.5" fill="#8ba4ff" opacity="0.5" />
              <circle cx="180" cy="60" r="2" fill="#8ba4ff" opacity="1" />
              <circle cx="90" cy="160" r="1" fill="#8ba4ff" opacity="0.5" />
              <circle cx="220" cy="200" r="1.5" fill="#8ba4ff" opacity="0.6" />
            </pattern>
            {/* Patrón 2: Estrellas medianas con otra escala para romper repetición */}
            <pattern id="stars-2" x="0" y="0" width="350" height="350" patternUnits="userSpaceOnUse">
              <circle cx="120" cy="80" r="2" fill="#8ba4ff" opacity="0.6" />
              <circle cx="280" cy="130" r="2.5" fill="#8ba4ff" opacity="0.2" />
              <circle cx="60" cy="250" r="1.5" fill="#8ba4ff" opacity="0.8" />
              <circle cx="230" cy="310" r="1" fill="#8ba4ff" opacity="0.7" />
            </pattern>
          </defs>
          
          {/* Capa 1 animada (Parallax lento) */}
          <motion.rect 
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: [0.5, 0.4, 0.1], y: -100 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            width="100%" height="100%" fill="url(#stars-1)" 
          />
          {/* Capa 2 animada (Parallax un poco más rápido para dar profundidad) */}
          <motion.rect 
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: [0.5, 0.55, 0.1], y: -150 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            width="100%" height="100%" fill="url(#stars-2)" 
          />
        </svg>
      </div>

      {/* Contenedor Principal: Ajusté el px para que en móvil no aplaste el contenido */}
      <div className="container mx-auto grid grid-cols-1 items-center gap-8 px-4 md:grid-cols-2 md:px-12 lg:px-20 xl:px-32">        
        {/* --- COLUMNA 1: TEXTO --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="order-2 md:order-1 flex flex-col items-center text-center md:items-start md:text-left space-y-6"
        >
          <motion.div variants={itemVariants} className="space-y-4 max-w-2xl">
            {/* Etiqueta "Hola, soy" flotante */}
            <div className="flex justify-center md:justify-start">
                 <motion.span 
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="rounded-full bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 backdrop-blur-sm shadow-sm cursor-default"
                 >
                    {language === "es" ? "Hola, soy" : "Hello, I'm"}
                 </motion.span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-tight">
              <span className="block text-foreground">{name.split(" ")[0]}</span> 
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent pb-1">
                {name.split(" ").slice(1).join(" ")}
              </span>
            </h1>
            
            {/* Rol con Efecto Máquina de Escribir (Protegido contra saltos de línea a mitad de palabra) */}
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-blue-600 dark:text-blue-400 flex flex-wrap justify-center md:justify-start items-center min-h-[32px]">
              {role[language].split(" ").map((word, wordIndex, array) => {
                // Calculamos cuántas letras van antes de esta palabra para mantener el timing fluido
                const previousChars = array.slice(0, wordIndex).join(" ").length + (wordIndex > 0 ? 1 : 0);
                
                return (
                  <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.25em]">
                    {word.split("").map((char, charIndex) => (
                      <motion.span
                        key={charIndex}
                        initial={{ opacity: 0, display: "none" }}
                        animate={{ opacity: 1, display: "inline" }}
                        transition={{
                          duration: 0.1,
                          delay: 0.8 + (previousChars + charIndex) * 0.04,
                        }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                );
              })}
              {/* Cursor parpadeante */}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="ml-0 w-[2px] h-5 sm:h-6 bg-blue-600 dark:bg-blue-400 inline-block"
              />
            </h2>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-2 text-muted-foreground bg-muted/30 px-3 py-1 rounded-full text-sm border border-border/50">
            <MapPin className="h-4 w-4 text-primary" />
            <span>{location}</span>
          </motion.div>

          <motion.p variants={itemVariants} className="max-w-md text-base md:text-lg text-muted-foreground leading-relaxed">
            {about[language]}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-3 pt-1 w-full md:w-auto">
            <a href="#contact" className="w-full sm:w-auto">
              <Button size="md" className="group w-full sm:w-auto rounded-full bg-primary hover:bg-blue-700 text-white shadow-lg shadow-blue-900/20 text-base">
                <Mail className="mr-2 h-4 w-4" />
                {language === "es" ? "Contáctame" : "Contact Me"}
              </Button>
            </a>
            <a href={cvUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button variant="outline" size="md" className="group w-full sm:w-auto rounded-full border-2 border-primary/30 hover:border-primary hover:bg-primary/5 text-foreground text-base">
                <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                {language === "es" ? "Descargar CV" : "Download CV"}
              </Button>
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-3 pt-2">
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
          </motion.div>
        </motion.div>
        
        

        {/* --- COLUMNA 2: IMAGEN --- */}
        {/* En móvil es order-1 (va primero), en desktop es order-2 (va a la derecha) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="order-1 md:order-2 relative flex justify-center md:justify-end mb-8 md:mb-0"
        >
          {/* Aura Orgánica que "respira" y gira (Opacidad e intensidad aumentadas) */}
          <motion.div 
            animate={{ 
              scale: [1, 0.8, 1], 
              rotate: [0, 90, 0],
              opacity: [0.6, 0.9, 0.6] // Valores de opacidad más altos
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-4/7 -translate-x-3/7 -translate-y-1/2 w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[450px] md:h-[450px] bg-gradient-to-tr from-blue-600/40 via-sky-800/50 to-purple-600/40 rounded-full blur-[80px] md:blur-[100px] -z-10" 
          />

          {/* Tamaños ajustados: En "md" se reduce para evitar superposición con el texto */}
          <div className="relative h-[260px] w-[260px] sm:h-[300px] sm:w-[300px] md:h-[300px] md:w-[300px] lg:h-[380px] lg:w-[380px] shrink-0">
            {/* Anillo exterior rotatorio segmentado */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-4px] rounded-full border border-dashed border-blue-500/50 md:scale-105 pointer-events-none" 
            />            
            <div className="relative h-full w-full rounded-full overflow-hidden border-4 border-background shadow-2xl">
               <Image
                src={profileImage || "/profile/me.jpg"} 
                alt={name}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* ETIQUETA 1: Fullstack */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, type: "spring", bounce: 0.4 }}
              className="absolute top-2 -right-2 sm:top-4 sm:-right-4 md:top-8 md:-right-6 z-20"
            >
                <div className="group cursor-pointer bg-background/90 backdrop-blur-md border border-border p-2 sm:p-3 rounded-2xl shadow-xl flex items-center gap-2 sm:gap-3 transition-all duration-300 hover:scale-110 hover:bg-background hover:border-blue-500/50 hover:shadow-blue-500/20 active:scale-95 active:border-blue-500/50 active:bg-background">
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
            </motion.div>

            {/* ETIQUETA 2: Innovador */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1, type: "spring", bounce: 0.4 }}
              className="absolute bottom-2 -left-2 sm:bottom-4 sm:-left-4 md:bottom-8 md:-left-6 z-20"
            >
                <div className="group cursor-pointer bg-background/90 backdrop-blur-md border border-border p-2 sm:p-3 rounded-2xl shadow-xl flex items-center gap-2 sm:gap-3 transition-all duration-300 hover:scale-110 hover:bg-background hover:border-purple-500/50 hover:shadow-purple-500/20 active:scale-95 active:border-purple-500/50 active:bg-background">
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
            </motion.div>
          </div>
        </motion.div>
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