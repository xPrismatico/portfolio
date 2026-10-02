"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { personalInfo, socialLinks, stats } from "@/data/profile";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import CopyButton from "@/components/modules/CopyButton";
import { Mail, Phone, MapPin, Send, Download, CheckCircle2 } from "lucide-react";
import Image from "next/image";

// Tecnologías específicas para el badge de contacto (Iconos SVG o Lucide)
// Como ejemplo rápido usaré texto, pero idealmente usarías TechBadge si quieres iconos
const contactTechs = ["Next.js", "React", ".NET", "Python", "Unity", "Java", "SQL", "C#", "TypeScript", "Machine Learning"];

export default function Contact() {
  const { language, t } = useLanguage();

  return (
    <section id="contact" className="py-20 relative overflow-hidden"> {/* Reduced padding */}
      
      {/* Fondo decorativo sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <SectionTitle 
          title={t.navbar.contact} 
          subtitle={language === "es" ? "¿Tienes un proyecto en mente? ¡Hablemos!" : "Have a project in mind? Let's talk!"} 
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-8 max-w-6xl mx-auto"> {/* Compact grid */}
          
          {/* COLUMNA IZQUIERDA: Información de Contacto Directo */}
          <div className="space-y-6 flex flex-col h-full">
            <Card className="p-6 md:p-8 flex-1 flex flex-col justify-between border-primary/10">
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-6">
                  {language === "es" ? "Información de Contacto" : "Contact Information"}
                </h3>
                
                <div className="space-y-6">
                  {/* Email */}
                  <div className="group relative flex items-center gap-4 p-3 rounded-xl transition-colors hover:bg-muted/30">
                    <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-0.5">
                        {language === "es" ? "Correo Electrónico" : "Email Address"}
                      </p>
                      {/* USAR VARIABLE */}
                      <a href={`mailto:${personalInfo.contact.email}`} className="text-base font-medium hover:text-primary transition-colors truncate block">
                        {personalInfo.contact.email}
                      </a>
                    </div>
                    {/* USAR VARIABLE */}
                    <CopyButton textToCopy={personalInfo.contact.email} />
                  </div>

                    {/* Teléfono */}
                  <div className="group relative flex items-center gap-4 p-3 rounded-xl transition-colors hover:bg-muted/30">
                    <div className="h-10 w-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-0.5">
                        {language === "es" ? "Teléfono" : "Phone Number"}
                      </p>
                      {/* USAR VARIABLE */}
                      <a href={personalInfo.contact.phoneUrl} className="text-base font-medium hover:text-primary transition-colors block">
                        {personalInfo.contact.phone}
                      </a>
                    </div>
                    {/* USAR VARIABLE */}
                    <CopyButton textToCopy={personalInfo.contact.phone} />
                  </div>

                    {/* Ubicación */}
                  <div className="group relative flex items-center gap-4 p-3 rounded-xl transition-colors hover:bg-muted/30">
                    <div className="h-10 w-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-0.5">
                        {language === "es" ? "Ubicación" : "Location"}
                      </p>
                      {/* USAR VARIABLE */}
                      <a 
                        href={personalInfo.mapUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-base font-medium hover:text-primary transition-colors block"
                      >
                        {personalInfo.location}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Botón de CV Secundario */}
              <div className="mt-8 pt-6 border-t border-border/50">
                <a href={personalInfo.cvUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" className="w-full rounded-xl py-5 text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30">
                    <Download className="mr-2 h-4 w-4" />
                    {language === "es" ? "Descargar Currículum" : "Download Resume"}
                  </Button>
                </a>
              </div>
            </Card>

            {/* Redes Sociales Rápidas */}
            <div className="grid grid-cols-3 gap-3">
              {socialLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.url} 
                  target="_blank" 
                  className="h-12 rounded-xl bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 group shadow-sm"
                  aria-label={link.name}
                >
                  <link.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* COLUMNA DERECHA: Llamada a la Acción e Impacto */}
          <div className="flex flex-col h-full">
            <Card className="flex-1 flex flex-col items-center justify-center text-center p-8 md:p-10 bg-gradient-to-br from-background via-muted/10 to-primary/5 border-primary/10 relative overflow-hidden">
              
              {/* Decoración de fondo */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -mr-10 -mt-10 blur-2xl" />
              
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-500/30 animate-in zoom-in duration-500">
                <Send className="h-7 w-7" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {language === "es" ? "¿Listo para colaborar?" : "Ready to collaborate?"}
              </h3>
              
              <p className="text-base md:text-lg text-muted-foreground max-w-sm mb-8 leading-relaxed">
                {language === "es" 
                  ? "Disponible para nuevos proyectos y oportunidades. Ayudo a construir soluciones únicas, escalables y óptimas."
                  : "Available for new projects and opportunities. Helping build scalable and modern solutions."}
              </p>

              {/* Status Badge Animado */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20 mb-10">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                <span className="font-semibold text-xs md:text-sm">
                  {language === "es" ? "Disponible para trabajar" : "Available for work"}
                </span>
              </div>

              {/* Stats Rápidos */}
              <div className="grid grid-cols-2 gap-8 w-full border-t border-border/50 pt-8 mb-8">
                {stats.slice(0, 2).map((stat, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <p className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground uppercase font-medium mt-1">{stat.label[language]}</p>
                  </div>
                ))}
              </div>

              {/* Tecnologías (Badges Pequeños) */}
              <div className="w-full">
                <p className="text-xs text-muted-foreground mb-3 font-medium">
                    {language === "es" ? "Especializado en:" : "Specialized in:"}
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                    {contactTechs.map((tech) => (
                        <span key={tech} className="px-2.5 py-1 rounded-md bg-blue-500/5 border border-blue-500/10 text-[10px] md:text-xs font-medium text-blue-600 dark:text-blue-400">
                            {tech}
                        </span>
                    ))}
                </div>
              </div>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
}