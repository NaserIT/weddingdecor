import React from 'react';
import { Heart, Phone, Mail, MapPin, Instagram, Facebook, ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const companyInfo = {
  name: "The Perfect Wedding Deko",
  description: {
    de: "Wir vermieten exklusive Hochzeitsdekorationen für Ihren unvergesslichen Tag. Von eleganten Tischdecken bis hin zu atemberaubenden Wanddekorationen - wir machen Ihre Vision zur Realität.",
    en: "We rent exclusive wedding decorations for your unforgettable day. From elegant tablecloths to stunning wall decorations - we make your vision a reality.",
    ar: "نؤجر ديكورات زفاف حصرية ليومك الذي لا يُنسى. من مفارش الطاولات الأنيقة إلى ديكورات الجدران المذهلة - نحول رؤيتك إلى واقع."
  },
  phone: "+49 123 456 7890",
  email: "info@perfectweddingdeko.de",
  address: {
    street: "Musterstraße 123",
    city: "12345 Musterstadt",
    country: "Deutschland"
  },
  socialMedia: {
    instagram: "https://instagram.com/perfectweddingdeko",
    facebook: "https://facebook.com/perfectweddingdeko"
  }
};

const Footer = () => {
  const { currentLang, isRTL } = useLanguage();
  const t = translations[currentLang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#products', label: t.nav.products },
    { href: '#about', label: t.nav.about },
    { href: '#contact', label: t.nav.contact }
  ];

  return (
    <footer className="bg-emerald-950 text-white" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className={`flex items-center gap-3 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="w-12 h-12 rounded-full bg-amber-400 flex items-center justify-center">
                <span className="text-emerald-950 font-bold text-xl">PW</span>
              </div>
              <span className="text-2xl font-semibold">{companyInfo.name}</span>
            </div>
            <p className={`text-white/70 leading-relaxed mb-6 max-w-md ${isRTL ? 'text-right' : ''}`}>
              {companyInfo.description[currentLang]}
            </p>
            <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
              <a
                href={companyInfo.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={companyInfo.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`text-lg font-semibold mb-6 text-amber-400 ${isRTL ? 'text-right' : ''}`}>{t.footer.quickLinks}</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href} className={isRTL ? 'text-right' : ''}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className={`text-lg font-semibold mb-6 text-amber-400 ${isRTL ? 'text-right' : ''}`}>{t.footer.contact}</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${companyInfo.phone}`}
                  className={`flex items-center gap-3 text-white/70 hover:text-white transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  {companyInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className={`flex items-center gap-3 text-white/70 hover:text-white transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <Mail className="w-4 h-4 text-amber-400" />
                  {companyInfo.email}
                </a>
              </li>
              <li>
                <div className={`flex items-start gap-3 text-white/70 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                  <MapPin className="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                  <span>
                    {companyInfo.address.street}<br />
                    {companyInfo.address.city}<br />
                    {companyInfo.address.country}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className={`flex flex-col md:flex-row items-center justify-between gap-4 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
            <p className={`text-white/50 text-sm flex items-center gap-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
              © {currentYear} {companyInfo.name}. {t.footer.rights}
              <span className="mx-2">|</span>
              {t.footer.madeWith} <Heart className="w-4 h-4 text-red-400 inline mx-1" /> {t.footer.designed}
            </p>
            <div className={`flex items-center gap-6 text-sm text-white/50 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <a href="#" className="hover:text-white transition-colors">{t.footer.imprint}</a>
              <a href="#" className="hover:text-white transition-colors">{t.footer.privacy}</a>
              <a href="#" className="hover:text-white transition-colors">{t.footer.terms}</a>
            </div>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-amber-400 text-emerald-950 flex items-center justify-center hover:bg-amber-500 transition-colors"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
