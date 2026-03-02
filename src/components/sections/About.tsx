"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { personalInfo, stats, educationInfo, specializations } from "@/data/profile";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import StatCard from "@/components/modules/StatCard";
import { GraduationCap, MapPin, Calendar, CheckCircle2 } from "lucide-react";

export default function About() {
  const { language, t } = useLanguage();

  return (
    <section id="about" className="py-20 relative overflow-hidden">
        
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <SectionTitle 
          title={t.navbar.about} 
          subtitle={language === "es" ? "Conoce más sobre mí" : "Get to know me"} 
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          
          {/* COLUMNA IZQUIERDA: Información "Dura" y Stats */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Tarjeta de Educación / Ubicación (Estilo Pasaporte) */}
            <Card className="bg-gradient-to-br from-blue-900/10 to-primary/5 border-primary/20">
              <div className="space-y-6">
                
                {/* Universidad */}
                <div className="flex gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-full bg-blue-200 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground leading-tight">{educationInfo.degree[language]}</h3>
                    <p className="text-sm text-muted-foreground">{educationInfo.university}</p>
                    <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground/80 font-medium">
                      <Calendar className="h-3 w-3" />
                      <span>{educationInfo.year[language]}</span>
                    </div>
                  </div>
                </div>

                <div className="w-full h-px bg-border/50" />

                {/* Ubicación */}
                <div className="flex gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-full bg-blue-200 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Antofagasta, Chile</h3>
                    <p className="text-sm text-muted-foreground">{language === "es" ? "Residencia Actual" : "Current Residence"}</p>
                  </div>
                </div>

              </div>
            </Card>

            {/* Grid de Estadísticas */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3">
              {stats.map((stat, index) => (
                <StatCard key={index} stat={stat} />
              ))}
            </div>

          </div>

          {/* COLUMNA DERECHA: Bio y Especializaciones */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Biografía */}
            <div className="prose dark:prose-invert max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed">
                {personalInfo.about[language]}
              </p>
              <p className="text-lg leading-relaxed">
                {language === "es" 
                  ? "Me destaco por mi trabajo en equipo, comunicación efectiva, aprendizaje continuo y liderazgo respaldado por mis roles activos de ayudante en cursos de informática. Me motiva crear soluciones innovadoras que respondan necesidades reales."
                  : "I stand out for my teamwork, effective communication, continuous learning, and leadership backed by my active roles as a teaching assistant in computer science courses. I am motivated to create innovative solutions that answer real needs."
                }
              </p>
            </div>

            {/* Áreas de Especialización */}
            <Card className="bg-muted/20 border-border/40">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-primary rounded-full"></span>
                {language === "es" ? "Áreas de especialización:" : "Areas of specialization:"}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                {specializations.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <div className="h-2 w-2 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                    <span className="text-sm md:text-base text-foreground/80 group-hover:text-foreground transition-colors">
                      {item[language]}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

          </div>

        </div>
      </div>
    </section>
  );
}