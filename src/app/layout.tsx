import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/contexts/LanguageContext"; // Asegúrate de haber creado este archivo en el paso anterior
import Navbar from "@/components/layout/Navbar"; // Asegúrate de haber creado este archivo
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    // suppressHydrationWarning es necesario para next-themes para evitar errores de coincidencia entre servidor/cliente
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        {/* ThemeProvider maneja la clase 'dark' en el tag HTML */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LanguageProvider>
            
            <Navbar />
            
            {/* pt-16 añade padding arriba para que la navbar fija no tape el contenido */}
            <main className="flex-grow pt-16">
              {children}
            </main>

          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}