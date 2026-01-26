import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { heroContent, companyInfo } from '../data/mock';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProducts = () => {
    const element = document.querySelector('#products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroContent.backgroundImage}
          alt="Hochzeitsdekoration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/70 via-emerald-900/50 to-emerald-950/80" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-amber-400/20 rounded-full animate-pulse" />
      <div className="absolute bottom-40 right-20 w-48 h-48 border border-amber-400/10 rounded-full" />
      <div className="absolute top-1/3 right-10 w-2 h-2 bg-amber-400/60 rounded-full" />
      <div className="absolute bottom-1/3 left-20 w-3 h-3 bg-amber-400/40 rounded-full" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
          <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
          <span className="text-white/90 text-sm font-medium tracking-wide">
            Hochzeitsdeko Vermietung
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="block">{heroContent.title}</span>
          <span className="block mt-2 text-amber-400">
            {heroContent.subtitle}
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          {companyInfo.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-amber-500 hover:bg-amber-600 text-emerald-950 font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-amber-500/30"
          >
            {heroContent.ctaText}
          </Button>
          <Button
            onClick={scrollToProducts}
            variant="outline"
            size="lg"
            className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full transition-all duration-300 bg-transparent"
          >
            Produkte entdecken
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { value: '500+', label: 'Hochzeiten' },
            { value: '100%', label: 'Zufriedenheit' },
            { value: '5★', label: 'Bewertung' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-amber-400">{stat.value}</div>
              <div className="text-sm text-white/60 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToProducts}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default HeroSection;
