"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { personalInfo, socialLinks } from "@/data/profile";
import { Heart } from "lucide-react";

export default function Footer() {
  const { language, t } = useLanguage();
  const year = new Date().getFullYear();

  const navLinks = [
    { name: t.navbar.about, href: "#about" },
    { name: t.navbar.skills, href: "#skills" },
    { name: t.navbar.experience, href: "#experience" },
    { name: t.navbar.projects, href: "#projects" },
    { name: language === 'es' ? 'Certificaciones' : 'Certifications', href: "#certifications" },
    { name: t.navbar.contact, href: "#contact" },
  ];

  return (
    <footer className="bg-background border-t border-border/40 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Columna 1: Brand */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                SF
            </span>
            <p className="text-muted-foreground max-w-xs text-sm leading-relaxed">
              {language === "es" 
                ? "Ingeniero de Software y Desarrollador Fullstack apasionado por crear soluciones innovadoras y de calidad."
                : "Software Engineer and Fullstack Developer passionate about creating innovative and quality solutions."}
            </p>
            <div className="flex gap-3">
               {socialLinks.map((link) => (
                 <a key={link.name} href={link.url} target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                    <link.icon className="h-5 w-5" />
                 </a>
               ))}
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div>
             <h4 className="font-semibold text-foreground mb-4">
               {language === "es" ? "Enlaces Rápidos" : "Quick Links"}
             </h4>
             <ul className="space-y-2 text-sm text-muted-foreground">
                {navLinks.map(link => (
                    <li key={link.name}>
                        <a href={link.href} className="hover:text-primary transition-colors">{link.name}</a>
                    </li>
                ))}
             </ul>
          </div>

            {/* Columna 3: Contacto */}
          <div>
             <h4 className="font-semibold text-foreground mb-4">
               {language === "es" ? "Contacto" : "Contact"}
             </h4>
             <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                    {/* USAR VARIABLE */}
                    <a href={`mailto:${personalInfo.contact.email}`} className="hover:text-primary transition-colors">
                        {personalInfo.contact.email}
                    </a>
                </li>
                {/* USAR VARIABLE */}
                <li>{personalInfo.location}</li>
             </ul>
          </div>
        </div>

        {/* Barra Inferior */}
        <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>
             &copy; {year} Samuel Fuentes Ávila. {language === "es" ? "Todos los derechos reservados." : "All rights reserved."}
          </p>
          <div className="flex items-center gap-1">
             <span>{language === "es" ? "Hecho con" : "Made with"}</span>
             <Heart className="h-3 w-3 text-red-500 fill-red-500 animate-pulse" />
             <span>{language === "es" ? "usando" : "using"}</span>
             <span className="font-medium text-foreground">Next.js</span>
             <span>&</span>
             <span className="font-medium text-foreground">Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}