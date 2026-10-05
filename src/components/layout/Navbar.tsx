"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/contexts/LanguageContext";
import { Moon, Sun, Menu, X, Globe } from "lucide-react";
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
        <div className="hidden md:flex items-center gap-8">
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
                    ? "text-primary font-bold scale-120" 
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
        <div className="hidden md:flex items-center gap-4">
            
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

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-lg p-6 flex flex-col gap-4 shadow-lg absolute w-full h-screen">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={cn(
                "text-xl font-medium py-4 border-b border-border/50 transition-colors",
                activeSection === link.id ? "text-primary font-bold" : "text-foreground"
              )}
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
             <button onClick={toggleLanguage} className="flex items-center gap-2 text-sm">
                <Globe className="h-4 w-4" />
                {language === 'es' ? 'Inglés' : 'Spanish'}
             </button>
             {mounted && (
                <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                    {theme === "dark" ? <Sun className="text-yellow-500" /> : <Moon className="text-blue-600" />}
                </button>
             )}
          </div>
        </div>
      )}
    </nav>
  );
}