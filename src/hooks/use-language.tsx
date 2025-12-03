"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type Language = "uk" | "ru";

interface LanguageContextValue {
    lang: Language;
    setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [lang, setLangState] = useState<Language>("uk");

    useEffect(() => {
        if (typeof window === "undefined") return;
        const saved = window.localStorage.getItem("katalizatory-lang");
        if (saved === "uk" || saved === "ru") {
            setLangState(saved);
        }
    }, []);

    const setLang = (value: Language) => {
        setLangState(value);
        if (typeof window !== "undefined") {
            window.localStorage.setItem("katalizatory-lang", value);
        }
    };

    return (
        <LanguageContext.Provider value={ { lang, setLang } }>
            { children }
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const ctx = useContext(LanguageContext);
    if (!ctx) {
        throw new Error("useLanguage must be used within LanguageProvider");
    }
    return ctx;
};


