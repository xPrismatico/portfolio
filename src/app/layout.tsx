import type { Metadata } from "next";
import { Montserrat } from "next/font/google"; // 1. Importamos Montserrat
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";

// 2. Configuramos la fuente
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat", // Definimos el nombre de la variable CSS
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Opcional: cargar todos los pesos
});

export const metadata: Metadata = {
  // Título y descripción base (para Google y pestaña del navegador)
  title: "Samuel Fuentes | Ingeniero de Software & Fullstack",
  description: "Portafolio de Samuel Fuentes, Ingeniero de Software, Desarrollador Fullstack y Analista de datos. Descubre mis proyectos, experiencia y habilidades.",
  
  // URL base para que Next.js pueda resolver las rutas absolutas de las imágenes
  metadataBase: new URL("https://samuel-fuentes.vercel.app"),
  
  // Open Graph (WhatsApp, LinkedIn, Facebook, Discord, etc.)
  openGraph: {
    title: "Samuel Fuentes | Portafolio Profesional",
    description: "Ingeniero de Software y Desarrollador Fullstack. Explora mis proyectos, experiencia y habilidades en TI.",
    url: "https://samuel-fuentes.vercel.app",
    images: [
      {
        // Por ahora usa tu foto de perfil, pero te recomiendo crear una imagen horizontal (ver nota abajo)
        url: "/profile/me2.jpg", 
        width: 1200,
        height: 630,
        alt: "Samuel Fuentes - Portafolio Profesional",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
  
  // Twitter Cards (X, Slack, Telegram a veces usan este formato)
  twitter: {
    card: "summary_large_image",
    title: "Samuel Fuentes | Ingeniero de Software",
    description: "Portafolio profesional de Samuel Fuentes. Desarrollador Fullstack y Analista de Datos.",
    images: ["/profile/me.jpg"], // Idealmente la misma imagen horizontal
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        // 3. Aplicamos la variable en el body y eliminamos las de Geist
        className={`${montserrat.variable} antialiased min-h-screen bg-background text-foreground overflow-x-hidden font-sans`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LanguageProvider>
            <Navbar />
            <main className="flex-grow pt-16">
              {children}
            </main>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}