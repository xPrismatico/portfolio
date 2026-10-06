"use client";



import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/contexts/LanguageContext";
import { Moon, Sun, Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/libs/utils";
import { useScrollSpy } from "@/hooks/useScrollSpy"; // Asegúrate de importar el hook

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Definimos los IDs de las secciones que vamos a espiar
  const sectionIds = ["about", "skills", "experience", "projects", "certifications", "contact"];
  const activeSection = useScrollSpy(sectionIds, 100); // 100px de offset para compensar la altura de la navbar

  useEffect(() => setMounted(true), []);

  const navLinks = [
    { name: t.navbar.about, href: "#about", id: "about" },
    { name: t.navbar.skills, href: "#skills", id: "skills" },
    { name: t.navbar.experience, href: "#experience", id: "experience" },
    { name: t.navbar.projects, href: "#projects", id: "projects" },
    { name: language === 'es' ? 'Certificaciones' : 'Certifications', href: "#certifications", id: "certifications" }, 
    { name: t.navbar.contact, href: "#contact", id: "contact" },
    
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
        // Cerramos menú móvil si está abierto
        setIsMobileMenuOpen(false);
        // Scroll suave manual (por seguridad)
        section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 transition-all duration-300">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8">
        
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                SF
            </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={cn(
                "text-sm font-medium transition-all duration-300 relative",
                // Lógica de estilos:
                // Si es la sección activa, color primario y negrita. Si no, grisáceo.
                activeSection === link.id 
                    ? "text-primary font-bold scale-115" 
                    : "text-foreground/70 hover:text-primary hover:font-semibold"
              )}
            >
              {link.name}
              {/* Pequeño punto brillante debajo del link activo */}
              {activeSection === link.id && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full animate-pulse" />
              )}
            </a>
          ))}
        </div>

        {/* Controls (Theme & Lang) */}
        <div className="hidden md:flex items-center gap-2">
            
            <button
                onClick={toggleLanguage}
                className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors text-foreground/80"
            >
                <Globe className="h-4 w-4" />
                <span>{language.toUpperCase()}</span>
            </button>

            {mounted && (
                <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full hover:bg-muted transition-colors text-foreground/80"
                aria-label="Toggle Theme"
                >
                {theme === "dark" ? (
                    <Sun className="h-5 w-5 text-yellow-500" />
                ) : (
                    <Moon className="h-5 w-5 text-blue-600" />
                )}
                </button>
            )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Dropdown (Animado y Adaptable) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            // top-full hace que empiece exactamente debajo de la barra de navegación (los 64px de alto), 
            // quitamos h-screen para que solo ocupe lo necesario
            className="md:hidden absolute top-full left-0 w-full border-b border-border/50 bg-background/95 backdrop-blur-xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Lista de Enlaces en Cascada */}
            <div className="flex flex-col px-6 py-4">
              {navLinks.map((link, index) => (
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={cn(
                    "text-lg font-semibold py-3.5 border-b border-border/30 transition-colors active:scale-95 origin-left",
                    activeSection === link.id ? "text-primary" : "text-foreground/80 hover:text-foreground"
                  )}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* Controles: Botones táctiles grandes para móvil */}
            <div className="grid grid-cols-2 gap-4 px-6 pb-8 pt-2">
              <button 
                onClick={toggleLanguage} 
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-card border border-border/50 hover:bg-muted active:scale-95 active:border-primary/50 transition-all shadow-sm"
              >
                <Globe className="h-5 w-5 text-primary" />
                <span className="font-medium text-sm">{language === 'es' ? 'English' : 'Español'}</span>
              </button>
              
              {mounted && (
                <button 
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-card border border-border/50 hover:bg-muted active:scale-95 active:border-yellow-500/50 dark:active:border-blue-500/50 transition-all shadow-sm"
                >
                  {theme === "dark" ? (
                    <>
                      <Sun className="h-5 w-5 text-yellow-500" />
                      <span className="font-medium text-sm">{language === 'es' ? 'Claro' : 'Light'}</span>
                    </>
                  ) : (
                    <>
                      <Moon className="h-5 w-5 text-blue-600" />
                      <span className="font-medium text-sm">{language === 'es' ? 'Oscuro' : 'Dark'}</span>
                    </>
                  )}
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}