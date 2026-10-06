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
  Eye,
  MessageCircle
} from "lucide-react"; 




import { Certification, Experience, Project, SkillCategory, SocialLink, Stat, Highlight} from "@/interfaces";

// --- CONSTANTES DE RUTAS (Tus carpetas en public) ---
// Esto hace que si cambias la carpeta mañana, solo cambias esto aquí
export const PATHS = {
  cv: "/cv/CV.pdf",                 // Archivo en public/cv/CV.pdf
  poster: "/projects/poster_dashboard.pdf", 
  profile: "/profile/me2.jpg",       // Foto en public/profile/me.jpg
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


// --- HIGHLIGHTS / MOMENTOS DESTACADOS ---
export const highlightsData: Highlight[] = [
  {
    id: "fcab-vinculacion",
    title: { es: "FCAB Vinculación Temprana", en: "FCAB Early Engagement" },
    role: { es: "Ingeniero de Software Fullstack", en: "Fullstack Software Engineer" },
    period: "2026",
    description: { 
      es: "Impacto directo en operaciones ferroviarias. Arquitectura y desarrollo de sistemas críticos que automatizan, estandarizan y optimizan procesos elevan la seguridad operativa a través de las buenas prácticas, estándares, seguridad, calidad, escalabilidad y seguridad de software.", 
      en: "Direct impact on railway operations. Architecture and development of critical systems that automate processes and elevate operational security." 
    },
    type: "work",
    iconType: "train",
    image: "/experiences/fcab.jpg"
  },
  {
    id: "hackadisc",
    title: { es: "HackaDISC", en: "HackaDISC" },
    role: { es: "Fullstack Software Engineer & Data Analyst", en: "Fullstack Software Engineer & Data Analyst" },
    period: "2024 - 2026",
    description: { 
      es: "Creación de predictores financieros y dashboards con Machine Learning en tiempo récord (3 días). Demostración de alto rendimiento bajo presión extrema.", 
      en: "Creation of financial predictors and dashboards with Machine Learning in record time (3 days). Demonstration of high performance under extreme pressure." 
    },
    type: "hackathon",
    iconType: "cpu",
    image: "/experiences/hackadisc.jpg"
  },
  {
    id: "selene-award",
    title: { es: "1° Lugar 'SELENE' GOTA UCN", en: "1st Place 'SELENE' GOTA UCN" },
    role: { es: "Líder de Desarrollo & UI/UX", en: "Lead Developer & UI/UX" },
    period: "2023 - 2024",
    description: { 
      es: "Bicampeón en desarrollo de videojuegos. Liderazgo de equipo multidisciplinario fusionando programación avanzada, diseño artístico, creatividad y experiencia de usuario.", 
      en: "Two-time game development champion. Leadership of a multidisciplinary team merging advanced programming, art design, creativity and user experience." 
    },
    type: "award",
    iconType: "trophy",
    image: "/experiences/selene-award.jpg"
  },
  {
    id: "freelance-fullstack",
    title: { es: "E-Commerce & Sistemas B2B", en: "E-Commerce & B2B Systems" },
    role: { es: "Desarrollador Fullstack Freelance", en: "Freelance Fullstack Developer" },
    period: "2025 - 2026",
    description: { 
      es: "Entrega de plataformas eficientes listas para usarse con catálogos dinámicos, SEO óptimo, gestión de productos, usuarios, estadísticas y documentos financieros. Aumento real de ventas y visibilidad digital para empresas.", 
      en: "Delivery of efficient platforms ready-to-use with dynamic catalogs and optimal SEO. Real increase in sales and digital visibility for established companies." 
    },
    type: "work",
    iconType: "code",
    image: "/experiences/sistemas.jpg"
  },
  {
    id: "heuma",
    title: { es: "Apresto y Sesiones HEUMA - BHP", en: "Apresto & Sessions HEUMA - BHP" },
    role: { es: "Resolución de Desafíos Mineros & Competencias Laborales", en: "Mining Challenges Resolution & Work Skills" },
    period: "2025 - Actualidad",
    description: { 
      es: "Programa de inmersión estratégica en la cadena de valor minera. Desarrollo de competencias directivas y resolución de desafíos reales de la industria junto a BHP.", 
      en: "Strategic immersion program in the mining value chain. Development of leadership skills and resolution of real industry challenges alongside BHP." 
    },
    type: "program",
    iconType: "pickaxe",
    image: "/experiences/heuma.jpg"
  },
  {
    id: "ayudantias",
    title: { es: "Docencia en Ingeniería Informática UCN", en: "Informatics Engineering Teaching Assistant" },
    role: { es: "Ayudante y Evaluador Académico", en: "Academic Assistant and Evaluator" },
    period: "2023 - 2026",
    description: { 
      es: "Más de 3 años formando, enseñando, evaluando y apoyando a estudiantes en cursos de informática: desarrollo web fullstack, ingeniería de softwarte, videojuegos, algoritmos, estructuras y bases de datos. Fuerte vocación por la comunicación efectiva y buenas prácticas", 
      en: "Over 3 years training students in TI courses: web fullstack development, software engineer, video games, algorithms, structures and databases. Strong passion for effective communication." 
    },
    type: "work",
    iconType: "code",
    image: "/experiences/ayudantias.jpg"
  },
  {
    id: "technovation",
    title: { es: "Technovation Girls", en: "Technovation Girls" },
    role: { es: "Mentor Voluntario en TI", en: "Volunteer IT Mentor" },
    period: "2024 - 2025",
    description: { 
      es: "Formación de futuras mujeres líderes en tecnología. Mentoría en gestión, diseño y programación de aplicaciones orientadas a objetivos ODS.", 
      en: "Training the next generation of women in tech. Mentoring in management, design, and programming of applications oriented to SDG goals." 
    },
    type: "volunteer",
    iconType: "heart",
    image: "/experiences/technovation.jpg"
  },
  {
    id: "ceal",
    title: { es: "Centro de Alumnos (CEAL)", en: "Student Center (CEAL)" },
    role: { es: "Delegado Docente & Líder", en: "Academic Delegate & Leader" },
    period: "2024 - 2025",
    description: { 
      es: "Liderazgo estudiantil activo. Mediación de conflictos, fomento de la equidad y planificación estratégica de eventos para la facultad de ingeniería.", 
      en: "Active student leadership. Conflict mediation, promotion of equity, and strategic planning of events for the engineering faculty." 
    },
    type: "volunteer",
    iconType: "heart",
    image: "/experiences/ceal.jpg"
  },
  {
    id: "expoucn",
    title: { es: "ExpoUCN", en: "ExpoUCN" },
    role: { es: "Expositor Tecnológico", en: "Technology Exhibitor" },
    period: "2024 - 2026",
    description: { 
      es: "Exhibición de proyectos y asignaturas de alto impacto ante la comunidad. Demostración de habilidades de oratoria, presencia y capacidad para transmitir valor tecnológico.", 
      en: "Exhibition of high-impact projects and courses to the community. Demonstration of public speaking skills, presence, and ability to convey technological value." 
    },
    type: "program",
    iconType: "star",
    image: "/experiences/expoucn.jpg"
  }
];



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
    es: "Estudiante con pasión y experiencia en ingeniería de software, desarrollo web fullstack y ciencia de datos. Me motiva crear soluciones innovadoras que te aporten valor estratégico real a través de la ingeniería, creatividad, atención al detalle, experiencias únicas, eficiencia, UI/UX, tecnología y aprendizaje continuo.",
    en: "Passionate student of software engineering, fullstack web development, and data science. I'm motivated to create innovative solutions that provide you with real strategic value through engineering, creativity, attention to detail, unique experiences, efficiency, UI/UX, technology, and continuous learning."
  },
  cvUrl: PATHS.cv,
  
  // Nuevos datos de contacto directo para no escribirlos a mano
  contact: {
    email: "srfuentesavila@gmail.com",
    phone: "+56 9 5839 1079",
    phoneUrl: "tel:+56958391079", // Formato para llamar al hacer clic
    whatsappUrl: "https://wa.me/56958391079?text=Hola%20Samuel,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20hablar%20contigo.",
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
    name: "WhatsApp",
    url: personalInfo.contact.whatsappUrl,
    icon: MessageCircle,
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
    value: "5+",
    label: { es: "Años Estudiando", en: "Years Studying" },
    icon: Brain,
  },
  {
    value: "3+",
    label: { es: "Años de experiencia", en: "Years of experience" },
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
      { name: { es: "Apache ECharts", en: "Apache ECharts" }, icon: Layout, color: "#8b5cf6" },
      { name: { es: "TypeScript", en: "TypeScript" }, icon: Code2, color: "#3178C6" },
      { name: { es: "HTML/CSS", en: "HTML/CSS" }, icon: Layout, color: "#E34F26" },
    ],
  },
  {
    id: "backend",
    title: { es: "Backend", en: "Backend" },
    skills: [
      { name: { es: ".NET", en: ".NET" }, icon: Server, color: "#512BD4" },
      { name: { es: "Java", en: "Java" }, icon: Code2, color: "#FF6C37" },
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
      { name: { es: "PostgreSQL", en: "PostgreSQL" }, icon: Database, color: "#239120" },
      { name: { es: "Oracle", en: "Oracle" }, icon: Database, color: "#DD0031" },
      { name: { es: "MySQL", en: "MySQL" }, icon: Database, color: "#2496ED" },
      { name: { es: "SQLite", en: "SQLite" }, icon: Database, color: "#4479A1" },
      { name: { es: "RQLite", en: "RQLite" }, icon: Database, color: "#4479A1" },
      { name: { es: "SQL Model/Alchemy", en: "SQL Model/Alchemy" }, icon: Database, color: "#4479A1" },
    ],
  },
  {
    id: "tools",
    title: { es: "Herramientas", en: "Tools" },
    skills: [
      { name: { es: "Git & GitHub", en: "Git & GitHub" }, icon: Github, color: "#8b5cf6" },
      { name: { es: "PowerBI", en: "PowerBI" }, icon: Layout, color: "#FFE66D" }, 
      { name: { es: "Docker", en: "Docker" }, icon: Server, color: "#2496ED" },
      { name: { es: "Figma", en: "Figma" }, icon: Layout, color: "#ec4899" },
      { name: { es: "Postman", en: "Postman" }, icon: Settings, color: "#FF6C37" },
      { name: { es: "Linux CLI", en: "Linux CLI" }, icon: Terminal, color: "#FCC624" },
      { name: { es: "Excel", en: "Excel" }, icon: Layout, color: "#217346" },
      { name: { es: "Unity 2D/3D/AR", en: "Unity 2D/3D/AR" }, icon: Monitor, color: "#000000" },
      { name: { es: "Husky, Makefile, Formatters & Linters", en: "Husky, Makefile, Formatters & Linters" }, icon: Code2, color: "#6366f1" },
      { name: { es: "Modelado UML", en: "UML Modeling" }, icon: Layout, color: "#6366f1" },
      { name: { es: "Testing", en: "Testing" }, icon: Code2, color: "#ec4899" },
      { name: { es: "SharePoint", en: "SharePoint" }, icon: Layout, color: "#2496ED" },
      { name: { es: "LaTeX", en: "LaTeX" }, icon: Layout, color: "#217346" },
    ],
  },
  {
    id: "core",
    title: { es: "Competencias Core", en: "Core Competencies" },
    skills: [
      { name: { es: "Scrum & Agile", en: "Scrum & Agile" }, icon: Users, color: "#f97316" },
      { name: { es: "Gestión/Evaluación de Proyectos TI", en: "IT Project Management/Evaluation" }, icon: Globe, color: "#DD0031" },
      { name: { es: "Clean Code", en: "Clean Code" }, icon: Code2, color: "#10b981" },
      { name: { es: "Análisis de datos & IA", en: "Data Analytics & AI" }, icon: Brain, color: "#0ea5e9" },
      { name: { es: "Modelado UML", en: "UML Modeling" }, icon: Layout, color: "#6366f1" },
      { name: { es: "Estructuras de Datos", en: "Data Structures" }, icon: Database, color: "#ec4899" },
      { name: { es: "Principios y Teorías de Visualizaciones efectivas", en: "Principles & Theories for Effective Visualizations" }, icon: Layout, color: "#14b8a6" },
      { name: { es: "Algoritmos", en: "Algorithms" }, icon: Code2, color: "#3b82f6" },
      { name: { es: "Web scraping", en: "Web scraping" }, icon: Eye, color: "#8b5cf6" },
      { name: { es: "Optimización", en: "Optimization" }, icon: Settings, color: "#db2777" },
      { name: { es: "Patrones de diseño", en: "Design Patterns" }, icon: Layout, color: "#14b8a6" },
      { name: { es: "Principios SOLID", en: "SOLID Principles" }, icon: Code2, color: "#f43f5e" },
      { name: { es: "Ingeniería de Software", en: "Software Engineering" }, icon: Code2, color: "#0ea5e9" },
      { name: { es: "Estándares & Buenas prácticas", en: "Standards & Best practices" }, icon: Settings, color: "#db2777" },
      { name: { es: "Calidad de código", en: "Code quality" }, icon: Settings, color: "#14b8a6" },
      { name: { es: "POO", en: "OOP" }, icon: Code2, color: "#eab308" },
      
    ],
  },
  {
    id: "soft",
    title: { es: "Habilidades Blandas", en: "Soft Skills" },
    skills: [
      { name: { es: "Liderazgo & Trabajo en Equipo", en: "Leadership & Teamwork" }, icon: Users, color: "#FF6B6B" },
      { name: { es: "Comunicación efectiva & Empatía", en: "Effective Communication & Empathy" }, icon: Users, color: "#4ECDC4" },
      { name: { es: "Pensamiento analítico y atención a detalles", en: "Analytical Thinking and Attention to Detail" }, icon: Brain, color: "#1A535C" },
      { name: { es: "Resolución de Problemas", en: "Problem Solving" }, icon: Award, color: "#FFE66D" }, 
      { name: { es: "Proactividad & Autonomía", en: "Proactivity & Autonomy" }, icon: Globe, color: "#FF9F1C" },
      { name: { es: "Creatividad & Aprendizaje continuo", en: "Creativity & Continuous Learning" }, icon: Brain, color: "#0ea5e9" },
    
    ],
  },
];

// --- PROYECTOS ---
export const projectsData: Project[] = [
  {
    id: "vyv",
    title: {

      es: "Sitio web corporativo + E-commerce - V&V",
      en: "Corporate website + E-commerce - V&V"
    },
    description: {
      es: "Sitio web corporativo y Cotización de catálogo de productos, gestión de cotizaciones y de productos, solicitado por la empresa Refrigeración V&V. Aumenté ventas, clientes y posicioné a las empresas en redes.",
      en: "Corporate website with product catalog, quotation management and product management, requested by the company Refrigeración V&V. I increased sales and the number of customers and helped the companies establish a presence on social media.",
    },
    image: `${PATHS.projects}/vyvrefrigeracion.jpg`,
    tags: ["Next.js", "TypeScript", ".NET", "PostgreSQL", "SQL", "Tailwind CSS", "HTML", "CSS"],
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

      es: "Sitio web corporativo + E-commerce - MonteCristo",
      en: "Corporate website + E-commerce - MonteCristo"
    },
    description: {
      es: "Sitio web corporativo y Plataforma e-commerce completa con gestión de inventario, cotizaciones y panel administrativo. Implementación de carrito de compras, procesamiento de pedidos y sistema de búsqueda avanzada.",
      en: "Corporate website and complete e-commerce platform with inventory management, quotes, and admin panel. Implementation of shopping cart, order processing, and advanced search system.",
    },
    image: `${PATHS.projects}/ecommerce.jpg`,
    tags: ["Next.js", "TypeScript", ".NET", "SQL", "Tailwind CSS", "HTML", "CSS"],
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
    id: "dashboard-financiero",
    title: {

      es: "Dashboard web - Predicción de Ventas, Trazabilidad y Gestión (según rol)",
      en: "Sales forecast, Traceability & Management (by role) - Dashboard web"
    },
    description: {
      es: "2 Dashboards web inteligentes (para ejecutivos y gerentes) con predicciones financieras, clasificación de clientes y ejecutivos por riesgo. Excelente UI/UX y visualizaciones efectivas. Procesa datos históricos y se conecta a un motor de Machine Learning propio. Hecho en HackaDISC 2026 en 3 días para INSECAP",
      en: "2 Intelligent dashboards web (for executives and managers) with financial predictions, customers and managers classification by risk. Excellent UI/UX and effective visualizations. Processes historical data and connects to a Machine Learning engine. Built in 3 days for INSECAP's HackaDISC 2026 event."
    },
    image: `${PATHS.projects}/dashboard.png`,
    tags: ["Next.js", "FastAPI", "ApacheECharts", "TypeScript", "Python", "PostgreSQL", "Tailwind", "HTML", "CSS"],
    actions: [
      {
        label: { es: "Ver Demo", en: "Live Demo" },
        url: "https://dashboard-comercial-insecap.vercel.app",
        icon: Globe,
      },
    ],
    featured: true,
  },

  {
    id: "dashboard-ventas-clientes",
    title: {

      es: "Dashboard web - Análisis de Ingresos y Clientes",
      en: "Revenue and Customer Analysis - Dashboard web"
    },
    description: {
      es: "Dashboard web de análisis de ventas y clientes. Una visualización efectiva, interactiva y totalmente flexible con excelente UI/UX que transforma libros contables y silos de información en una herramienta interactiva de toma de decisiones estratégicas. Reemplaza Excel por un sistema interactivo de protección de capital y diagnóstico estratégico que identifica claramente salud crediticia, rentabilidad por tipo de proyecto, dependencias, evolución financiera, riesgos de clientes y sus tipos",
      en: "Sales and customer Dashboard web. An effective, interactive, and fully flexible visualization tool with excellent UI/UX that transforms ledgers and information silos into interactive strategic decision-making tools. The goal is to replace static Excel spreadsheets with an interactive capital protection and strategic diagnostic system that clearly identifies creditworthiness, profitability by project type, dependencies, financial progress, and customer risks and their types.",
    },
    image: `${PATHS.projects}/dashboard_ventas_clientes.jpg`,
    tags: ["Next.js", "FastAPI", "ApacheECharts", "TypeScript", "Python", "PostgreSQL", "Tailwind", "HTML", "CSS"],
    actions: [
      {
        label: { es: "Frontend", en: "Frontend" },
        url: "https://github.com/xPrismatico/visual_dashboard_frontend",
        icon: Github,
      },
      {
        label: { es: "Backend", en: "Backend" },
        url: "https://github.com/itspalmera/Visual_FastAPI",
        icon: Github,
      },
      {
        label: { es: "PDF (explicaciones y vista)", en: "PDF (explanations and visuals)" },
        url: PATHS.poster,
        icon: Globe,
      },
    ],
    featured: true,
  },


  {
    id: "bygcompras",
    title: {

      es: "Sistema de Solicitudes de Compra - ByG",
      en: "Purchasing requests System - ByG"
    },
    description: {
      es: "Sistema de solicitudes de compra para empresa de ingeniería con contexto minero, eléctrico, industrial y construcción. Gestión automatizada de solicitudes de compra, proveedores, cotizaciones, órdenes de compra y usuarios. Solicitado por ByG Ingeniería.",
      en: "Purchasing system for engineering company with mining, electrical, industrial and construction context. Management of purchases, suppliers, quotes, purchase orders and users. Requested by ByG Ingeniería.",
    },
    image: `${PATHS.projects}/bygsistemacompras.jpg`,
    tags: ["Next.js", "TypeScript", ".NET", "PostgreSQL", "Tailwind CSS"],
    actions: [
      {
        label: { es: "Ver Sitio", en: "View Site" },
        url: "https://bygfrontend.vercel.app/inicio-sesion",
        icon: Globe,
      },
    ],
    featured: true,
  },

  {
    id: "predictor-financiero",
    title: {

      es: "Predictor Financiero de Pagos y Clientes",
      en: "Financial Predictor for Payments and Customers"
    },
    description: {
      es: "Sistema web inteligente que permite anticipar el comportamiento de pago de clientes clasificándolos por riesgo y predecir cuánto tardarán en pagar. Procesa datos históricos y se conecta a un motor de Machine Learning propio. Hecho en HackaDISC 2025 en 3 días para INSECAP",
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
        label: { es: "Motor IA", en: "AI Motor" },
        url: "https://github.com/GPScript1/fastAPI",
        icon: Github,
      },
    ],
    featured: false,
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
      es: "Estudiante de 5º año con sólida formación en ingeniería de software.",
      en: "5th-year student with solid training in software engineering.",
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
    es: "5º Año • 2021 - Actualidad",
    en: "5th Year • 2021 - Present"
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
    id: "bhp-heuma-2",
    title: { es: "Programa Desafíos en la Industria y Cadena de valor minera", en: "Program: Challenges in the Industry and Mining Value Chain" },
    issuer: "BHP Sesiones HEUMA",
    date: "2026",
    description: {
      es: "Programa de inmersión estratégica en la cadena de valor minera a través de expositores de BHP, charlas, desarrollo de posters, videos y entregables",
      en: "Strategic immersion program in the mining value chain featuring presentations by BHP speakers, talks, poster development, mind maps, videos, and mining-related deliverables.",
    },
      type: "program"
  },
  {
    id: "fullstack-dev",
    title: { es: "Desarrollador Fullstack e Ingeniero de Software", en: "Fullstack Developer and Software Engineer" },
    issuer: "FCAB, ByG Ingeniería, VyV Refrigeración, Comercial MonteCristo, Freelance",
    date: "2025 - 2026",
    description: {
      es: "Desarrollo de sistemas web fullstack y aplicaciones eficientes, modernas, ecommerce, automatización de procesos, sitios corporativos, portafolio, prototipos, arquitectura, base de datos, hosting, SEO óptimo. Aumenté ventas, clientes y posicioné a las empresas en redes sociales.",
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
      es: "Estudiante de 5º año con sólida formación en ingeniería de software, desarrollo web, ciencia de datos, gestión de proyectos, estructuras de datos, base de datos, programación y automatización.",
      en: "5th-year student with solid training in software engineering, web development, data science, programming and automation, project management, data structures, and database."
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