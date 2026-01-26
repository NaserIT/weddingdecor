import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const languages = {
  de: { code: 'de', name: 'Deutsch', flag: '🇩🇪', dir: 'ltr' },
  en: { code: 'en', name: 'English', flag: '🇬🇧', dir: 'ltr' },
  ar: { code: 'ar', name: 'العربية', flag: '🇸🇦', dir: 'rtl' }
};

export const LanguageProvider = ({ children }) => {
  const [currentLang, setCurrentLang] = useState('de');

  useEffect(() => {
    // Get saved language or browser language
    const savedLang = localStorage.getItem('language');
    if (savedLang && languages[savedLang]) {
      setCurrentLang(savedLang);
    }
  }, []);

  useEffect(() => {
    // Update document direction and language
    document.documentElement.dir = languages[currentLang].dir;
    document.documentElement.lang = currentLang;
    localStorage.setItem('language', currentLang);
  }, [currentLang]);

  const switchLanguage = (langCode) => {
    if (languages[langCode]) {
      setCurrentLang(langCode);
    }
  };

  const isRTL = languages[currentLang].dir === 'rtl';

  return (
    <LanguageContext.Provider value={{ currentLang, switchLanguage, isRTL, languages }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
