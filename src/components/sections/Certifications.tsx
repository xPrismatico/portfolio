"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { certificationsData } from "@/data/profile";
import SectionTitle from "@/components/ui/SectionTitle";
import { Award, BookOpen, Calendar, ExternalLink, GraduationCap, Sparkles } from "lucide-react";
import { cn } from "@/libs/utils";

export default function Certifications() {
  const { language, t } = useLanguage();

  // Helper para asignar icono según el tipo
  const getIcon = (type: string) => {
    switch (type) {
      case "education": return <GraduationCap className="h-6 w-6" />;
      case "course": return <BookOpen className="h-6 w-6" />;
      case "program": return <Award className="h-6 w-6" />;
      case "work": return <Sparkles className="h-6 w-6" />;
      default: return <Award className="h-6 w-6" />;
    }
  };

  // Helper para traducir el tipo (badge pequeño)
  const getTypeLabel = (type: string) => {
    const labels: Record<string, { es: string; en: string }> = {
      education: { es: "Educación", en: "Education" },
      course: { es: "Curso", en: "Course" },
      program: { es: "Programa", en: "Program" },
      certification: { es: "Certificación", en: "Certification" },
      work: { es: "Experiencias Laborales", en: "Work Experiences" },
    };
    return labels[type]?.[language] || type;
  };

  return (
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionTitle 
            title={language === "es" ? "Certificaciones y Formación" : "Certifications & Education"} 
            subtitle={language === "es" ? "Formación continua y desarrollo profesional" : "Continuous learning and professional development"}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
          {certificationsData.map((cert, index) => (
            <motion.div 
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className="group relative flex flex-col p-6 rounded-2xl bg-card/50 border border-blue-900/20 hover:border-blue-500/30 hover:bg-card/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer active:scale-[0.98] active:border-blue-500/30 active:bg-card/80"
            >
              {/* Icono Flotante en la esquina */}
              {cert.link && (
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="absolute top-6 right-6 text-muted-foreground hover:text-blue-400 transition-colors"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              )}

              <div className="flex gap-5">
                {/* Icono Principal (Izquierda) */}
                <div className="shrink-0 mt-1">
                  <div className="h-12 w-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white group-active:bg-blue-500 group-active:text-white">
                    {getIcon(cert.type)}
                  </div>
                </div>

                {/* Contenido */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground pr-6 leading-tight mb-1 transition-colors group-hover:text-blue-400 group-active:text-blue-400">
                    {cert.title[language]}
                  </h3>
                  <p className="text-sm font-medium text-blue-500 mb-2">
                    {cert.issuer}
                  </p>
                  
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{cert.date}</span>
                  </div>

                  <p className="text-sm text-muted-foreground/80 leading-relaxed mb-4">
                    {cert.description[language]}
                  </p>

                  {/* Badge Tipo */}
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-muted text-muted-foreground border border-border">
                    {getTypeLabel(cert.type)}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bloque de Aprendizaje Continuo (Bottom Box) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mt-8 relative p-8 rounded-2xl bg-blue-950/20 border border-dashed border-blue-900/50 flex flex-col items-center text-center overflow-hidden"
        >
            <div className="absolute inset-0 bg-blue-500/5 blur-3xl -z-10" />
            
            <div className="mb-4 p-3 bg-background rounded-full border border-blue-500/20 shadow-lg shadow-blue-500/10">
                <Sparkles className="h-6 w-6 text-blue-400 animate-pulse" />
            </div>
            
            <h4 className="text-lg font-bold text-foreground mb-2">
                {language === "es" ? "En Aprendizaje Continuo" : "Continuous Learning"}
            </h4>
            <p className="text-sm text-muted-foreground max-w-lg">
                {language === "es" 
                    ? "Siempre actualizando conocimientos tecnológicos y mejores prácticas!"
                    : "Always updating Technologies knowledge and best practices!"}
            </p>
        </motion.div>

      </div>
    </section>
  );
}