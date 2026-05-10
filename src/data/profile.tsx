// src/data/profile.tsx

import { 
  Github, 
  Linkedin, 
  Mail, 
  Code2, 
  Database, 
  Layout, 
  Settings, 
  Server, 
  Smartphone,
  Brain,
  Rocket,
  Users,
  Award,
  Globe,     
  Gamepad2,  
  Terminal,  
  Monitor,    
  Eye         
} from "lucide-react";
import { Certification, Experience, Project, SkillCategory, SocialLink, Stat } from "@/interfaces";

// --- CONSTANTES DE RUTAS (Tus carpetas en public) ---
// Esto hace que si cambias la carpeta mañana, solo cambias esto aquí
export const PATHS = {
  cv: "/cv/CV.pdf",                 // Archivo en public/cv/CV.pdf
  profile: "/profile/me.jpg",       // Foto en public/profile/me.jpg
  projects: "/projects",            // Carpeta base de proyectos
};

// --- MAPEO DE ICONOS SVG (NUEVO) ---
// Vincula el nombre exacto del tag con la ruta en public/icons
export const TECH_ICONS: Record<string, string> = {
  "Angular": "/icons/angular.svg",
  ".NET": "/icons/dotnet.svg",
  "Ionic": "/icons/ionic-icon.svg",
  "TypeScript": "/icons/typescript-icon.svg",
  "C#": "/icons/CSharp.svg",
  "Tailwind": "/icons/tailwind.svg",
  "CSS": "/icons/css.svg",
  "HTML": "/icons/html-5.svg",
  "Next.js": "/icons/nextjs-icon.svg",
  "FastAPI": "/icons/fastapi.svg",
  "Python": "/icons/python.svg",
  "PostgreSQL": "/icons/postgresql.svg",
  "MySQL": "/icons/mysql.svg",
  "Unity": "/icons/unity.svg",
  "Java": "/icons/java.svg",
  "Tailwind CSS": "/icons/tailwind.svg",

  // Agrega aquí otros si tienes el archivo SVG, si no, se mostrará solo texto
};


// --- DATOS PERSONALES CENTRALIZADOS ---
export const personalInfo = {
  name: "Samuel Fuentes Ávila",
  profileImage: PATHS.profile,
  role: {
    es: "Ingeniero de Software y Desarrollador Fullstack",
    en: "Software Engineer & Fullstack Developer"
  },
  location: "Antofagasta, Chile",
  mapUrl: "https://www.google.com/maps/place/Antofagasta", // Enlace a Maps
  about: {
    es: "Estudiante apasionado por la ingeniería de software, desarrollo web y ciencia de datos. Tengo experiencia en desarrollo web/móvil, análisis de datos y sistemas a medida.",
    en: "Passionate student of software engineering, web development, and data science. Experienced in web/mobile development, data analysis, and custom systems."
  },
  cvUrl: PATHS.cv,
  
  // Nuevos datos de contacto directo para no escribirlos a mano
  contact: {
    email: "srfuentesavila@gmail.com",
    phone: "+56 9 5839 1079",
    phoneUrl: "tel:+56958391079", // Formato para llamar al hacer clic
  }
};

// --- REDES SOCIALES ---
export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/xPrismatico",
    icon: Github,
  },
  {
    name: "LinkedIn",
    // Asegúrate de usar https:// para que funcione como enlace externo
    url: "https://www.linkedin.com/in/samuel-fuentes-ávila", 
    icon: Linkedin,
  },
  {
    name: "Email",
    url: `mailto:${personalInfo.contact.email}`,
    icon: Mail,
  },
];

// --- ESTADÍSTICAS (Hero / About) ---
export const stats: Stat[] = [
  {
    value: "10+",
    label: { es: "Proyectos", en: "Projects" },
    icon: Code2,
  },
  {
    value: "4+",
    label: { es: "Años Estudiando", en: "Years Studying" },
    icon: Brain,
  },
  {
    value: "3",
    label: { es: "Hackatones", en: "Hackathons" },
    icon: Rocket,
  },
];

// --- HABILIDADES (Organizadas por Categoría) ---
export const skillsData: SkillCategory[] = [
  {
    id: "frontend",
    title: { es: "Frontend", en: "Frontend" },
    skills: [
      { name: { es: "Next.js", en: "Next.js" }, icon: Layout, color: "#000000" },
      { name: { es: "React", en: "React" }, icon: Code2, color: "#61DAFB" },
      { name: { es: "Angular", en: "Angular" }, icon: Layout, color: "#DD0031" },
      { name: { es: "Ionic", en: "Ionic" }, icon: Smartphone, color: "#3880FF" },
      { name: { es: "Tailwind CSS", en: "Tailwind CSS" }, icon: Layout, color: "#38B2AC" },
      { name: { es: "TypeScript", en: "TypeScript" }, icon: Code2, color: "#3178C6" },
      { name: { es: "HTML/CSS", en: "HTML/CSS" }, icon: Layout, color: "#E34F26" },
    ],
  },
  {
    id: "backend",
    title: { es: "Backend", en: "Backend" },
    skills: [
      { name: { es: ".NET", en: ".NET" }, icon: Server, color: "#512BD4" },
      { name: { es: "Java", en: "Java" }, icon: Code2, color: "#007396" },
      { name: { es: "FastAPI", en: "FastAPI" }, icon: Server, color: "#009688" },
      { name: { es: "Python", en: "Python" }, icon: Code2, color: "#3776AB" },
      { name: { es: "C#", en: "C#" }, icon: Code2, color: "#239120" },
    ],
  },
  {
    id: "databases",
    title: { es: "Bases de Datos", en: "Databases" },
    skills: [
      { name: { es: "SQL", en: "SQL" }, icon: Database, color: "#4479A1" },
      { name: { es: "PostgreSQL", en: "PostgreSQL" }, icon: Database, color: "#336791" },
      { name: { es: "MySQL", en: "MySQL" }, icon: Database, color: "#4479A1" },
      { name: { es: "SQLite", en: "SQLite" }, icon: Database, color: "#4479A1" },
      { name: { es: "RQLite", en: "RQLite" }, icon: Database, color: "#4479A1" },
    ],
  },
  {
    id: "tools",
    title: { es: "Herramientas", en: "Tools" },
    skills: [
      { name: { es: "Git & GitHub", en: "Git & GitHub" }, icon: Github, color: "#F05032" },
      { name: { es: "Docker", en: "Docker" }, icon: Server, color: "#2496ED" },
      { name: { es: "Figma", en: "Figma" }, icon: Layout, color: "#F24E1E" },
      { name: { es: "Postman", en: "Postman" }, icon: Settings, color: "#FF6C37" },
      { name: { es: "Linux CLI", en: "Linux CLI" }, icon: Terminal, color: "#FCC624" },
      { name: { es: "Excel", en: "Excel" }, icon: Layout, color: "#217346" },
      { name: { es: "Unity 2D/3D/AR", en: "Unity 2D/3D/AR" }, icon: Monitor, color: "#000000" },
    ],
  },
  {
    id: "core",
    title: { es: "Competencias Core", en: "Core Competencies" },
    skills: [
      { name: { es: "POO", en: "OOP" }, icon: Code2, color: "#eab308" },
      { name: { es: "Scrum / Agile", en: "Scrum / Agile" }, icon: Users, color: "#f97316" },
      { name: { es: "Modelado UML", en: "UML Modeling" }, icon: Layout, color: "#6366f1" },
      { name: { es: "Clean Code", en: "Clean Code" }, icon: Code2, color: "#10b981" },
      { name: { es: "Estructuras de Datos", en: "Data Structures" }, icon: Database, color: "#ec4899" },
      { name: { es: "Algoritmos", en: "Algorithms" }, icon: Code2, color: "#3b82f6" },
      { name: { es: "Web scraping", en: "Web scraping" }, icon: Eye, color: "#8b5cf6" },
      { name: { es: "Optimización", en: "Optimization" }, icon: Settings, color: "#db2777" },
      { name: { es: "Patrones de diseño", en: "Design Patterns" }, icon: Layout, color: "#14b8a6" },
      { name: { es: "Principios SOLID", en: "SOLID Principles" }, icon: Code2, color: "#f43f5e" },
      { name: { es: "Ingeniería de Software", en: "Software Engineering" }, icon: Code2, color: "#0ea5e9" },
    ],
  },
  {
    id: "soft",
    title: { es: "Habilidades Blandas", en: "Soft Skills" },
    skills: [
      { name: { es: "Trabajo en Equipo", en: "Teamwork" }, icon: Users, color: "#FF6B6B" },
      { name: { es: "Comunicación", en: "Communication" }, icon: Users, color: "#4ECDC4" },
      { name: { es: "Liderazgo", en: "Leadership" }, icon: Award, color: "#FFE66D" },
      { name: { es: "Resolución de Problemas", en: "Problem Solving" }, icon: Brain, color: "#1A535C" },
      { name: { es: "Adaptabilidad", en: "Adaptability" }, icon: Globe, color: "#FF9F1C" },
      { name: { es: "Creatividad", en: "Creativity" }, icon: Brain, color: "#0ea5e9" },
    
    ],
  },
];

// --- PROYECTOS ---
export const projectsData: Project[] = [
    {
    id: "vyv",
    title: {
      es: "Sitio web corporativo + E-commerce VyV Refrigeración",
      en: "Corporate website with e-commerce functionality VyV Refrigeración"
    },
    description: {
      es: "Sitio web corporativo y Cotización de catálogo de productos, gestión de cotizaciones y de productos, solicitado por la empresa Refrigeración y Climatizacion VyV.",
      en: "Corporate website with product catalog, quotation management and product management, requested by the company Refrigeración y Climatizacion VyV.",
    },
    image: `${PATHS.projects}/vyvrefrigeracion.jpg`,
    tags: ["Next.js", "TypeScript", ".NET", "PostgreSQL", "SQL", "Tailwind CSS"],
    actions: [
      {
        label: { es: "Ver Sitio", en: "View Site" },
        url: "https://vyvrefrigeracion.cl",
        icon: Globe,
      },
    ],
    featured: true,
  },
    {
    id: "montecristo",
    title: {
      es: "Sitio web corporativo + E-commerce MonteCristo",
      en: "Corporate website with e-commerce functionality MonteCristo"
    },
    description: {
      es: "Sitio web corporativo y Plataforma e-commerce completa con gestión de inventario, cotizaciones y panel administrativo. Implementación de carrito de compras, procesamiento de pedidos y sistema de búsqueda avanzada.",
      en: "Corporate website and complete e-commerce platform with inventory management, quotes, and admin panel. Implementation of shopping cart, order processing, and advanced search system.",
    },
    image: `${PATHS.projects}/ecommerce.jpg`,
    tags: ["Next.js", "TypeScript", ".NET", "SQL", "Tailwind CSS"],
    actions: [
      {
        label: { es: "Ver Demo", en: "Live Demo" },
        url: "https://comercialmontecristo.vercel.app",
        icon: Globe,
      },
    ],
    featured: true,
  },

    {
    id: "bygcompras",
    title: {
      es: "Sistema de Compras ByG Ingeniería",
      en: "Purchasing System for ByG Engineering"
    },
    description: {
      es: "Sistema de comporas para empresa de ingeniería con contexto minero, eléctrico, industrial y construcción. Gestión de compras, proveedores, cotizaciones, órdenes de compra y usuarios. Solicitado por ByG Ingeniería.",
      en: "Purchasing system for engineering company with mining, electrical, industrial and construction context. Management of purchases, suppliers, quotes, purchase orders and users. Requested by ByG Ingeniería.",
    },
    image: `${PATHS.projects}/bygsistemacompras.jpg`,
    tags: ["Next.js", "TypeScript", ".NET", "PostgreSQL", "Tailwind CSS"],
    actions: [
      {
        label: { es: "Ver Sitio", en: "View Site" },
        url: "https://bygfrontend.vercel.app",
        icon: Globe,
      },
    ],
    featured: true,
  },

    {
    id: "predictor-financiero",
    title: {
      es: "Predictor Financiero Inteligente",
      en: "Intelligent Financial Predictor"
    },
    description: {
      es: "Sistema web inteligente que permite anticipar el comportamiento de pago de clientes clasificándolos por riesgo y predecir cuánto tardarán en pagar. Procesa datos históricos y se conecta a un motor de Machine Learning. Hecho en HackaDISC en 3 días para INSECAP",
      en: "Intelligent web system that anticipates customer payment behavior by classifying them by risk and predicting payment time. Processes historical data and connects to a Machine Learning engine. Built in 3 days for INSECAP's HackaDISC event."
    },
    image: `${PATHS.projects}/predictorfinanciero.jpg`,
    tags: ["Next.js", ".NET", "FastAPI", "TypeScript", "C#", "Python", "PostgreSQL", "Tailwind", "HTML", "CSS"],
    actions: [
      {
        label: { es: "Frontend", en: "Frontend" },
        url: "https://github.com/GPScript1/GPS_Frontend",
        icon: Github,
      },
      {
        label: { es: "Backend", en: "Backend" },
        url: "https://github.com/GPScript1/GPS_API",
        icon: Github,
      },
      {
        label: { es: "IA", en: "AI" },
        url: "https://github.com/GPScript1/fastAPI",
        icon: Github,
      },
    ],
    featured: true,
  },
{
    id: "selene",
    title: {
      es: "SELENE",
      en: "SELENE"
    },
    description: {
      es: "Videojuego 2D para PC de un solo jugador. Disparos, Puzzles, Vidas, Enemigos con patrones, Jefes, Coleccionables. Historia y Diseño (Personajes, Entorno, Interfaz).",
      en: "Single-player 2D PC video game. Shooting, Puzzles, Lives, Patterned Enemies, Bosses, Collectibles. Story and Design (Characters, Environment, Interface)."
    },
    synopsis: {
      es: "Un valiente gato debe recuperar las almas perdidas en el más allá, descubriendo islas flotantes, resolviendo puzzles, combatiendo diversos enemigos y descubriendo secretos.",
      en: "A brave cat must recover lost souls in the afterlife, discovering floating islands, solving puzzles, fighting diverse enemies, and uncovering secrets."
    },
    image: `${PATHS.projects}/selene.png`,
    tags: ["Unity", "C#", "PixelStudio"],
    actions: [
      { label: { es: "Repositorio", en: "Repository" }, url: "https://github.com/xPrismatico/Selene-2D", icon: Github },
      { label: { es: "Jugar", en: "Play" }, url: "https://drive.google.com/drive/folders/1oOS4WFf2p1FOZUPFx4dj-o8R_16knsE-?usp=sharing", icon: Gamepad2 },
    ],
  },
  {
    id: "selene-vuelta-casa",
    title: {
      es: "SELENE: Vuelta a casa",
      en: "SELENE: Homecoming"
    },
    description: {
      es: "Videojuego 3D para Móviles y PC. Pantalla dividida, Guardado de datos, Tienda, Edición de personaje. Modelado de Personajes, Animaciones, Interfaz y Entorno.",
      en: "3D Mobile and PC Video Game. Split screen, Data saving, Store, Character editing. Character Modeling, Animations, Interface, and Environment."
    },
    synopsis: {
      es: "Un Gato de capa roja regresa a la vida y debe volver a su hogar en un camino desafiante entre dimensiones, obstáculos y enemigos. ¡Mejora tus poderes y personaliza a tu personaje!",
      en: "A red-caped cat returns to life and must find its way home through a challenging path across dimensions, obstacles, and enemies. Upgrade powers and customize your character!"
    },
    image: `${PATHS.projects}/selene2.png`,
    tags: ["Unity", "C#", "BlockBench"],
    actions: [
      { label: { es: "Repositorio", en: "Repository" }, url: "https://github.com/xPrismatico/Selene-Vuelta-a-casa", icon: Github },
      { label: { es: "Jugar", en: "Play" }, url: "https://drive.google.com/drive/folders/1RsVCCFfieG5lmR7pz2dfUTeXlvIuLkbW?usp=sharing", icon: Gamepad2 },
    ],
  },
    {
    id: "ratings-bebidas",
    title: {
      es: "Predicción de Ratings de Bebidas",
      en: "Beverage Rating Prediction"
    },
    description: {
      es: "Sistema de Análisis de datos para predecir ratings de bebidas extrayendo datos con Web Scrapping. Análisis exploratorio, limpieza de datos, modelos de regresión y clasificación.",
      en: "Data Analysis system to predict beverage ratings extracting data with Web Scraping. Exploratory analysis, data cleaning, regression and classification models."
    },
    image: `${PATHS.projects}/datascience.png`,
    tags: ["Python", "Scikit-learn", "Matplotlib", "Seaborn", "Selenium"],
    actions: [
      { label: { es: "Version 1", en: "Version 1" }, url: "https://github.com/xPrismatico/Taller1-DataScience", icon: Github },
      { label: { es: "Version 2", en: "Version 2" }, url: "https://github.com/xPrismatico/Taller2-DataScience", icon: Github },
    ],
  },


];

// --- EXPERIENCIA Y EDUCACIÓN ---
export const experienceData: Experience[] = [
  {
    id: "ucn",
    type: "education",
    company: "Universidad Católica del Norte",
    role: { es: "Ingeniería Civil en Computación e Informática", en: "Computer Science Engineering" },
    period: "2021 - Actualidad",
    description: {
      es: "Estudiante de 4º año con sólida formación en ingeniería de software.",
      en: "4th-year student with solid training in software engineering.",
    },
  },
  {
    id: "freelance",
    type: "work",
    company: "Freelance",
    role: { es: "Desarrollador Fullstack", en: "Fullstack Developer" },
    period: "2023 - Actualidad",
    description: {
      es: "Desarrollo de soluciones web a medida para clientes locales.",
      en: "Development of custom web solutions for local clients.",
    },
  },
];

// --- DATOS EXTRAS PARA "SOBRE MÍ" ---
export const educationInfo = {
  university: "Universidad Católica del Norte",
  degree: {
    es: "Ingeniería Civil en Computación e Informática",
    en: "Computer Science & Informatics Engineering"
  },
  year: {
    es: "4º Año • 2021 - Actualidad",
    en: "4th Year • 2021 - Present"
  },
  location: "Antofagasta, Chile",
};

export const specializations = [
  { es: "Desarrollo Full Stack", en: "Full Stack Development" },
  { es: "Análisis de Datos", en: "Data Analysis" },
  { es: "Machine Learning", en: "Machine Learning" },
  { es: "Ingeniería de Software", en: "Software Engineering" },
  { es: "Desarrollo Web/Móvil", en: "Web/Mobile Development" },
  { es: "Sistemas a Medida", en: "Custom Systems" },
  { es: "Prototipado y Diseño", en: "Prototyping & Design" },
  { es: "Desarrollo de Videojuegos", en: "Game Development" },
];

// --- CERTIFICACIONES Y FORMACIÓN ---
export const certificationsData: Certification[] = [
  {
    id: "bhp-heuma",
    title: { es: "Programa Desarrollo de competencias para la empleabilidad", en: "Employability Skills Development Program" },
    issuer: "BHP Apresto HEUMA",
    date: "Sept - Dic 2025",
    description: {
      es: "Programa de desarrollo de competencias blandas y preparación para el mundo laboral. Incluye comunicación efectiva, liderazgo, inteligencia emocional, trabajo en equipo y resolución de conflictos.",
      en: "Soft skills development program and preparation for the labor market. Includes effective communication, leadership, emotional intelligence, teamwork, and conflict resolution."
    },
    type: "program"
  },
  {
    id: "fullstack-dev",
    title: { es: "Desarrollador Fullstack e Ingeniero de Software", en: "Fullstack Developer and Software Engineer" },
    issuer: "ByG Ingeniería, VyV Refrigeración, Comercial MonteCristo, Freelance",
    date: "2025 - 2026",
    description: {
      es: "Desarrollo de sistemas web fullstack y aplicaciones modernas, ecommerce, automatización de procesos, sitios corporativos, portafolio, prototipos, arquitectura, base de datos, hosting, SEO óptimo. Aumenté ventas, clientes y posicioné a las empresas en redes sociales.",
      en: "Fullstack web system development and modern applications, ecommerce, process automation, corporate websites, portfolio, prototypes, architecture, database, hosting, optimal SEO. Increased sales, clients, and positioned companies on social media."
    },
    type: "work"
  },
  {
    id: "nextjs-udemy",
    title: { es: "Next.js el framework de React para producción", en: "Next.js: The React Framework for Production" },
    issuer: "Udemy",
    date: "Oct 2025",
    description: {
      es: "Curso completo sobre desarrollo web moderno con Next.js, Server Components, App Router y optimización.",
      en: "Complete course on modern web development with Next.js, Server Components, App Router, and optimization."
    },
    link: "https://www.udemy.com/certificate/UC-30709159-7386-47a7-9768-c11287f60e26/", // Pon el link real si lo tienes
    type: "course"
  },
  {
    id: "ing-ucn",
    title: { es: "Ingeniería Civil en Computación e Informática", en: "Computer Science & Informatics Engineering" },
    issuer: "Universidad Católica del Norte (UCN)",
    date: "2021 - 2026",
    description: {
      es: "Estudiante de 4º año con sólida formación en ingeniería de software, desarrollo web, ciencia de datos, gestión de proyectos, estructuras de datos, base de datos, programación y automatización.",
      en: "4th-year student with solid training in software engineering, web development, data science, programming and automation, project management, data structures, and database."
    },
    link: "https://admision.ucn.cl/carreras/tecnologia-computacion/ingenieria-civil-en-computacion-e-informatica/", // Enlace a la universidad
    type: "education"
  },
  {
    id: "tec-donbosco",
    title: { es: "Título Técnico Eléctrico", en: "Electrical Technician Title" },
    issuer: "Colegio Técnico Industrial Don Bosco",
    date: "2017 - 2020",
    description: {
      es: "Formación técnica en electricidad y electrónica industrial y doméstica con énfasis en resolución de problemas.",
      en: "Technical training in electricity and electronics industrial and domestic with emphasis on problem solving."
    },
    link: "https://www.donboscoantofagasta.cl/", // Enlace al colegio
    type: "education"
  }
];