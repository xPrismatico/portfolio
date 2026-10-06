"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { personalInfo, stats, educationInfo, specializations } from "@/data/profile";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import StatCard from "@/components/modules/StatCard";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, CheckCircle2 } from "lucide-react";

export default function About() {
  const { language, t } = useLanguage();

  return (
    <section id="about" className="py-20 relative overflow-hidden">
        
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
          <SectionTitle 
            title={t.navbar.about} 
            subtitle={language === "es" ? "Conoce más sobre mí" : "Get to know me"} 
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          
          {/* COLUMNA IZQUIERDA: Información "Dura" y Stats */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-1 space-y-6"
          >
            
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

            {/* Grid de Estadísticas con Stagger */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
              }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3"
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1, transition: { type: "spring", bounce: 0.4 } }
                  }}
                >
                  <StatCard stat={stat} />
                </motion.div>
              ))}
            </motion.div>

          </motion.div>

          {/* COLUMNA DERECHA: Bio y Especializaciones */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            
            {/* Biografía interactiva y destacada */}
            <div className="prose dark:prose-invert max-w-none text-muted-foreground text-lg leading-relaxed space-y-5">
              {language === "es" ? (
                <>
                  <p>
                    Me especializo en <span className="font-semibold text-blue-500 dark:text-blue-400">desarrollo full stack</span> y <span className="font-semibold text-blue-500 dark:text-blue-400">análisis de datos</span>, con sólida experiencia en la automatización de procesos. Soy un apasionado por la <strong className="text-foreground">ingeniería de software</strong> y la creación de arquitecturas limpias, escalables y seguras.
                  </p>
                  <p>
                    Mi mayor valor diferenciador es la combinación de ingeniería con fuertes <strong className="text-foreground">habilidades humanas</strong>. Mi vocación enseñando programación y matemáticas consolida mi <span className="text-foreground font-medium border-b-2 border-blue-500/30">comunicación efectiva, liderazgo y trabajo en equipo</span>, respaldado por mi rol activo en la universidad, proyectos y hackatones.
                  </p>
                  <p>
                    Además, mi afición por el dibujo potencia mi visión en <strong className="text-foreground">diseño UX/UI, creatividad y atención al detalle</strong>. Me motiva construir <strong className="text-foreground">soluciones innovadoras</strong> que respondan a necesidades reales y aporten un <span className="font-semibold text-blue-500 dark:text-blue-400">valor estratégico medible</span>.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    I specialize in <span className="font-semibold text-blue-500 dark:text-blue-400">fullstack development</span> and <span className="font-semibold text-blue-500 dark:text-blue-400">data analysis</span>, with solid experience in process automation. I am passionate about <strong className="text-foreground">software engineering</strong> and building clean, scalable, and secure architectures.
                  </p>
                  <p>
                    My greatest differentiator is combining engineering with strong <strong className="text-foreground">interpersonal skills</strong>. My passion for teaching programming and mathematics fosters my <span className="text-foreground font-medium border-b-2 border-blue-500/30">effective communication, leadership, and teamwork</span>, supported by my active role in university, projects, and hackathons.
                  </p>
                  <p>
                    Furthermore, my background in drawing enhances my <strong className="text-foreground">UX/UI design, creativity, and attention to detail</strong>. I am driven to build <strong className="text-foreground">innovative solutions</strong> that address real needs and deliver <span className="font-semibold text-blue-500 dark:text-blue-400">measurable strategic value</span>.
                  </p>
                </>
              )}
            </div>

            {/* Áreas de Especialización */}
            <Card className="bg-muted/20 border-border/40">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-primary rounded-full"></span>
                {language === "es" ? "Áreas de especialización:" : "Areas of specialization:"}
              </h3>
              
<motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.5 } }
                }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6"
              >
                {specializations.map((item, index) => (
                  <motion.div 
                    key={index} 
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0 }
                    }}
                    className="flex items-center gap-3 group"
                  >
                    <div className="h-2 w-2 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                    <span className="text-sm md:text-base text-foreground/80 group-hover:text-foreground transition-colors">
                      {item[language]}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </Card>

          </motion.div>

        </div>
      </div>
    </section>
  );
}