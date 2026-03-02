// src/libs/dictionary.ts

export const dictionary = {
  es: {
    navbar: {
      about: "Sobre mí",
      skills: "Habilidades",
      experience: "Experiencia",
      projects: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola, soy",
      role: "Ingeniero de Software & Desarrollador Fullstack",
    }
    // Aquí agregaremos más textos luego
  },
  en: {
    navbar: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      role: "Software Engineer & Fullstack Developer",
    }
  },
};

export type Language = "es" | "en";