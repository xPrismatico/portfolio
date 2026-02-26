"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { dictionary, Language } from "@/libs/dictionary";

interface LanguageContextProps {
  language: Language;
  toggleLanguage: () => void;
  t: typeof dictionary.es; // Tipado automático basado en el diccionario
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("es");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t: dictionary[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage debe usarse dentro de un LanguageProvider");
  return context;
};