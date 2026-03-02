"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { personalInfo, projectsData, socialLinks } from "@/data/profile";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/modules/ProjectCard";

export default function Projects() {
  const { t, language } = useLanguage();

  return (
    <section id="projects" className="py-24 bg-muted/10 relative">
        
      {/* Decoración de fondo */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-96 w-96 rounded-full bg-purple-500/5 blur-3xl -z-10" />

      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle 
          title={t.navbar.projects} 
          subtitle={language === 'es' ? "Mis trabajos destacados" : "My featured work"}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {/* Botón Ver Todos (Opcional, si tienes muchos más en Github) */}
        <div className="mt-12 text-center">
            <a 
                href={socialLinks[0].url}  // Assuming the first social link is GitHub
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-medium"
            >
                {language === 'es' ? 'Ver más proyectos en GitHub' : 'View more projects on GitHub'}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
        </div>

      </div>
    </section>
  );
}