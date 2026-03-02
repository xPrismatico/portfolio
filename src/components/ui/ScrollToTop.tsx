"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/libs/utils";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Controlar cuándo mostrar el botón
  useEffect(() => {
    const toggleVisibility = () => {
      // Si bajamos más de 300px, mostrar botón
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    // Limpiar evento al desmontar
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Función para subir suavemente
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Volver al inicio"
      className={cn(
        // Posicionamiento y Estilos Base
        "fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-all duration-300",
        // Colores (Azul vibrante como tu referencia)
        "bg-blue-600 text-white hover:bg-blue-700 hover:scale-110 border border-blue-500/20",
        // Responsividad: Oculto en móvil (hidden), visible en md o superior (md:flex)
        "hidden md:flex",
        // Animación de entrada/salida
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-10 pointer-events-none"
      )}
    >
      <ArrowUp className="h-6 w-6" strokeWidth={2.5} />
    </button>
  );
}