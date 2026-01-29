import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import LanguageSwitcher from './LanguageSwitcher';

const companyInfo = {
  name: "The Perfect Wedding Deko",
  phone: "+49 123 456 7890"
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { currentLang, isRTL } = useLanguage();
  const t = translations[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#products', label: t.nav.products },
    { href: '#about', label: t.nav.about },
    { href: '#contact', label: t.nav.contact }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
          {/* Logo */}
          <button
            onClick={() => scrollToSection('#home')}
            className={`flex items-center gap-3 group ${isRTL ? 'flex-row-reverse' : ''}`}
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
              isScrolled ? 'bg-wedding-600' : 'bg-white/20 backdrop-blur-sm'
            }`}>
              <span className={`text-lg font-bold ${
                isScrolled ? 'text-amber-400' : 'text-white'
              }`}>PW</span>
            </div>
            <span className={`text-lg font-semibold tracking-wide transition-colors duration-300 ${
              isScrolled ? 'text-wedding-800' : 'text-white'
            }`}>
              {companyInfo.name}
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className={`hidden md:flex items-center gap-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`text-sm font-medium tracking-wide transition-all duration-300 hover:opacity-70 ${
                  isScrolled ? 'text-wedding-800' : 'text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA Button & Language Switcher */}
          <div className={`hidden md:flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <LanguageSwitcher isScrolled={isScrolled} />
            <a
              href={`tel:${companyInfo.phone}`}
              className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${isRTL ? 'flex-row-reverse' : ''} ${
                isScrolled ? 'text-wedding-600' : 'text-white'
              }`}
            >
              <Phone className="w-4 h-4" />
              {companyInfo.phone}
            </a>
            <Button
              onClick={() => scrollToSection('#contact')}
              className={`transition-all duration-300 ${
                isScrolled
                  ? 'bg-wedding-600 hover:bg-wedding-700 text-white'
                  : 'bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30'
              }`}
            >
              {t.nav.inquire}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className={`md:hidden flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <LanguageSwitcher isScrolled={isScrolled} />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-wedding-800' : 'text-white'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/20">
            <nav className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-base font-medium ${isRTL ? 'text-right' : 'text-left'} ${
                    isScrolled ? 'text-wedding-800' : 'text-white'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection('#contact')}
                className="mt-2 bg-wedding-600 hover:bg-wedding-700 text-white w-full"
              >
                {t.nav.inquire}
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
