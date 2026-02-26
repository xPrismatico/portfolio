"use client";

import { useState, useEffect } from "react";

export const useScrollSpy = (ids: string[], offset: number = 100) => {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      // Buscamos qué sección está cubriendo la posición actual del scroll
      for (const id of ids) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveId(id);
            break; 
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Ejecutar una vez al inicio para detectar dónde estamos al cargar
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [ids, offset]);

  return activeId;
};