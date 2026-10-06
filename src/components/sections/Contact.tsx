"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { personalInfo, socialLinks, stats } from "@/data/profile";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import CopyButton from "@/components/modules/CopyButton";
import { Mail, Send, Download, MessageCircle, ExternalLink, Phone } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

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
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionTitle 
            title={t.navbar.contact} 
            subtitle={language === "es" ? "¿Tienes un proyecto en mente? ¡Hablemos!" : "Have a project in mind? Let's talk!"} 
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-8 max-w-6xl mx-auto"> {/* Compact grid */}
          
          {/* COLUMNA IZQUIERDA: Información de Contacto Directo */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-6 flex flex-col h-full"
          >
            <Card className="p-6 md:p-8 flex-1 flex flex-col justify-between border-primary/10">
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-6">
                  {language === "es" ? "Información de Contacto" : "Contact Information"}
                </h3>
                
                <div className="space-y-3 sm:space-y-4">
                  {/* Tarjeta 1: Email */}
                  <div 
                    onClick={() => window.open(`mailto:${personalInfo.contact.email}`, '_blank')}
                    className="group flex items-center justify-between gap-2 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-card border border-border/50 transition-all duration-300 hover:border-blue-500/50 hover:shadow-md cursor-pointer active:scale-[0.98] active:bg-muted/50"
                  >
                    {/* Contenedor Izquierdo (Icono + Texto) con min-w-0 y flex-1 para truncar bien */}
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                      {/* Reducimos sutilmente el icono en móviles muy pequeños */}
                      <div className="h-10 w-10 sm:h-12 sm:w-12 shrink-0 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                        <Mail className="h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] sm:text-xs text-muted-foreground font-medium mb-0.5 group-hover:text-foreground transition-colors truncate">
                          {language === "es" ? "Correo Electrónico" : "Email"}
                        </p>
                        {/* El truncate aquí ahora sí funcionará gracias al min-w-0 superior */}
                        <p className="text-xs sm:text-sm md:text-base font-bold text-foreground truncate">
                          {personalInfo.contact.email}
                        </p>
                      </div>
                    </div>
                    
                    {/* Botones de acción (shrink-0 para que nunca sean aplastados ni expulsados) */}
                    <div className="flex items-center gap-1 sm:gap-2 shrink-0" onClick={(e) => e.stopPropagation()}>
                      <CopyButton textToCopy={personalInfo.contact.email} />
                      <a 
                        href={`mailto:${personalInfo.contact.email}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-1.5 sm:p-2 rounded-lg text-muted-foreground hover:text-blue-500 hover:bg-blue-500/10 transition-colors"
                        title={language === "es" ? "Enviar correo" : "Send email"}
                      >
                        <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5" />
                      </a>
                    </div>
                  </div>

                  {/* Tarjeta 2: WhatsApp */}
                  <div 
                    onClick={() => window.open(personalInfo.contact.whatsappUrl, '_blank')}
                    className="group flex items-center justify-between gap-2 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-card border border-border/50 transition-all duration-300 hover:border-green-500/50 hover:shadow-md cursor-pointer active:scale-[0.98] active:bg-muted/50"
                  >
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                      <div className="h-10 w-10 sm:h-12 sm:w-12 shrink-0 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                        {/* NOTA: Si en el paso anterior creaste e importaste WhatsAppIcon, puedes cambiar MessageCircle por WhatsAppIcon aquí */}
                        <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] sm:text-xs text-muted-foreground font-medium mb-0.5 group-hover:text-foreground transition-colors truncate">
                          {language === "es" ? "WhatsApp Directo" : "WhatsApp Direct"}
                        </p>
                        <p className="text-xs sm:text-sm md:text-base font-bold text-foreground truncate">
                          {personalInfo.contact.phone}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1 sm:gap-2 shrink-0" onClick={(e) => e.stopPropagation()}>
                      <CopyButton textToCopy={personalInfo.contact.phone} />
                      <a 
                        href={personalInfo.contact.whatsappUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-1.5 sm:p-2 rounded-lg text-muted-foreground hover:text-green-500 hover:bg-green-500/10 transition-colors"
                        title={language === "es" ? "Enviar mensaje" : "Send message"}
                      >
                        <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5" />
                      </a>
                    </div>
                  </div>

                  {/* Tarjeta 3: Llamada Telefónica */}
                  <div 
                    onClick={() => window.open(personalInfo.contact.phoneUrl, '_self')}
                    className="group flex items-center justify-between gap-2 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-card border border-border/50 transition-all duration-300 hover:border-purple-500/50 hover:shadow-md cursor-pointer active:scale-[0.98] active:bg-muted/50"
                  >
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                      <div className="h-10 w-10 sm:h-12 sm:w-12 shrink-0 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                        <Phone className="h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] sm:text-xs text-muted-foreground font-medium mb-0.5 group-hover:text-foreground transition-colors truncate">
                          {language === "es" ? "Llamada Telefónica" : "Phone Call"}
                        </p>
                        <p className="text-xs sm:text-sm md:text-base font-bold text-foreground truncate">
                          {personalInfo.contact.phone}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1 sm:gap-2 shrink-0" onClick={(e) => e.stopPropagation()}>
                      <CopyButton textToCopy={personalInfo.contact.phone} />
                      <a 
                        href={personalInfo.contact.phoneUrl} 
                        target="_self" 
                        className="p-1.5 sm:p-2 rounded-lg text-muted-foreground hover:text-purple-500 hover:bg-purple-500/10 transition-colors"
                        title={language === "es" ? "Llamar" : "Call"}
                      >
                        <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5" />
                      </a>
                    </div>
                  </div>
                </div>

              </div>

              {/* Botón de CV Secundario */}
              <div className="mt-6 pt-4 border-t border-border/50">
                <a href={personalInfo.cvUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full rounded-xl py-5 text-base font-semibold hover:bg-blue-700/90 text-white shadow-lg shadow-blue-900/20 text-base">
                    <Download className="mr-2 h-4 w-4" />
                    {language === "es" ? "Descargar CV" : "Download Resume"}
                  </Button>
                </a>
              </div>
            </Card>

            {/* Redes Sociales Rápidas */}
            <div className="grid grid-cols-4 gap-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.url} 
                  target="_blank" 
                  className="h-12 rounded-xl bg-card border border-border flex items-center justify-center text-gray hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 group shadow-xl"
                  aria-label={link.name}
                >
                  <link.icon className="h-5 w-5 group-hover:scale-115 transition-transform" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* COLUMNA DERECHA: Llamada a la Acción e Impacto */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col h-full"
          >
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
          </motion.div>

        </div>
      </div>
    </section>
  );
}