"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import tkm from "../locales/tkm.json";
import en from "../locales/en.json";
import ru from "../locales/ru.json";
import ch from "../locales/ch.json";

interface LanguageContextProps {
  lang: string;
  t: typeof tkm;
  setLang: (lang: string) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState("tkm");

  const translations = lang === "tkm" ? tkm : lang === "en" ? en : lang === "ru" ? ru : ch;

  return (
    <LanguageContext.Provider value={{ lang, t: translations, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};