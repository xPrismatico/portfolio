// src/interfaces/index.ts

import { LucideIcon } from "lucide-react";

// Para textos que cambian entre Español e Inglés
export interface LocalizedText {
  es: string;
  en: string;
}

// Interfaz para enlaces sociales (GitHub, LinkedIn, Email)
export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon; // Usaremos iconos de Lucide
}

// Interfaz para las estadísticas (ej: "+15 Proyectos")
export interface Stat {
  value: string;
  label: LocalizedText;
  icon: LucideIcon;
}

// Interfaz para Habilidades (Skills)
// Usaremos "categorías" para agruparlas mejor (Frontend, Backend, Herramientas)
export interface Skill {
  name: LocalizedText;
  icon?: LucideIcon; 
  color?: string; // Color hexadecimal para efectos hover (opcional)
}

export interface SkillCategory {
  id: string;
  title: LocalizedText;
  skills: Skill[];
}

// Interfaz para Proyectos
export interface Project {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  synopsis?: LocalizedText;
  image: string; // Ruta en /public (ej: "/projects/ecommerce.jpg")
  tags: string[]; // Tecnologías usadas (React, NextJS, .NET)
  actions: ProjectAction[];
  featured?: boolean; // Si es true, sale más grande o primero
}

// Nueva interfaz para los botones flexibles
export interface ProjectAction {
  label: LocalizedText; // Ej: { es: "Jugar Demo", en: "Play Demo" }
  url: string;
  icon: LucideIcon; // El icono que quieras (Github, Gamepad, Globe, etc.)
}

// Interfaz para Experiencia y Educación
export interface Experience {
  id: string;
  role: LocalizedText;
  company: string; // O institución educativa
  period: string; // Ej: "2021 - Presente"
  description: LocalizedText;
  type: "work" | "education"; 
}

export interface Certification {
  id: string;
  title: LocalizedText;
  issuer: string;
  date: string; 
  description: LocalizedText;
  image?: string; // Por si quisieras logos, aunque usaremos iconos por defecto
  link?: string; // Para el icono de "external link"
  type: "certification" | "course" | "education" | "program"; // Para el texto del badge pequeño
}