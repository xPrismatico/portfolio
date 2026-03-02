"use client";

import React from 'react';
import Hero from '@/components/sections/Hero';
import SectionTitle from '@/components/ui/SectionTitle';
import { useLanguage } from '@/contexts/LanguageContext';
import Skills from '@/components/sections/Skills';
import About from '../../components/sections/About';
import Projects from '../../components/sections/Projects';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { Certification } from '../../interfaces/index';
import Certifications from '@/components/sections/Certifications';

export default function HomePage() {
  const { t } = useLanguage();

  return (
    // Quitamos pb-20 y usamos el espaciado natural de las secciones
    <div className="flex flex-col w-full overflow-x-hidden">
      
      {/* 1. HERO SECTION 
          No necesita ID para navbar porque es el top, 
          pero si quisieras un botón "Ir arriba", le podrías poner id="home" 
      */}
      <Hero />

      {/* 2. ABOUT SECTION */}
      <About />

      {/* 3. SKILLS SECTION (Fondo alternado) */}
      <Skills />

      {/* 4. EXPERIENCE SECTION */}

      {/* 5. PROJECTS SECTION (Fondo alternado) */}
      <Projects />

      {/* 6. CERTIFICATIONS SECTION */}
      <Certifications />

      {/* 7. CONTACT SECTION */}
      <Contact />
      
      {/* 7. FOOTER */}
      <Footer />

      <ScrollToTop />

    </div>
  );
}