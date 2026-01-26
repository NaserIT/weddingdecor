import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage, languages } from '../context/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Button } from './ui/button';

const LanguageSwitcher = ({ isScrolled }) => {
  const { currentLang, switchLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={`flex items-center gap-2 transition-colors ${
            isScrolled
              ? 'text-emerald-900 hover:text-emerald-700 hover:bg-emerald-50'
              : 'text-white hover:text-white/80 hover:bg-white/10'
          }`}
        >
          <Globe className="w-4 h-4" />
          <span className="text-sm font-medium">{languages[currentLang].flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[140px]">
        {Object.values(languages).map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => switchLanguage(lang.code)}
            className={`flex items-center gap-3 cursor-pointer ${
              currentLang === lang.code ? 'bg-emerald-50 text-emerald-900' : ''
            }`}
          >
            <span className="text-lg">{lang.flag}</span>
            <span>{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
