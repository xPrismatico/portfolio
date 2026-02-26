import React from 'react';

// Estos componentes los iremos creando, por ahora pueden ser divs simples
// import Hero from '@/components/sections/Hero';
// import About from '@/components/sections/About';
// ... etc

export default function HomePage() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      
      {/* Hero Section (No necesita ID en navbar normalmente, es el inicio) */}
      <section id="hero" className="min-h-screen flex items-center justify-center bg-muted/20">
        <h1 className="text-4xl font-bold">Hero Section</h1>
      </section>

      {/* About Section */}
      {/* scroll-mt-20 es CLAVE: hace que el scroll pare un poco antes para que se vea el título */}
      <section id="about" className="scroll-mt-20 min-h-[80vh] container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-primary">Sobre mí</h2>
        <p>Contenido sobre mí...</p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="scroll-mt-20 min-h-[80vh] container mx-auto px-4 bg-muted/10">
        <h2 className="text-3xl font-bold mb-4 text-primary">Habilidades</h2>
        <p>Lista de habilidades...</p>
      </section>

      {/* Experience Section */}
      <section id="experience" className="scroll-mt-20 min-h-[80vh] container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-primary">Experiencia</h2>
        <p>Mi trayectoria...</p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="scroll-mt-20 min-h-[80vh] container mx-auto px-4 bg-muted/10">
        <h2 className="text-3xl font-bold mb-4 text-primary">Proyectos</h2>
        <p>Mis trabajos...</p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-20 min-h-[50vh] container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-primary">Contacto</h2>
        <p>Formulario o email...</p>
      </section>

    </div>
  );
}