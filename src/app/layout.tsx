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
  title: "Samuel Fuentes - Portafolio",
  description: "Portafolio de Samuel Fuentes, Ingeniero de Software, Desarrollador Fullstack y Analista de datos.",
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