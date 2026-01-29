import React, { useState } from 'react';
import { Check, ArrowRight, ArrowLeft } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const productImages = [
  "https://images.unsplash.com/photo-1691550593351-b3586f6be77e?w=600&q=80",
  "https://images.unsplash.com/photo-1646075514021-398d0925d4a9?w=600&q=80",
  "https://images.unsplash.com/photo-1522058171200-e61f77c7353d?w=600&q=80",
  "https://images.unsplash.com/photo-1738025277368-3be4de3a1be7?w=600&q=80",
  "https://images.unsplash.com/photo-1738025277440-5415dcfadd51?w=600&q=80",
  "https://images.unsplash.com/photo-1544813617-d99b33c3e573?w=600&q=80"
];

const ProductsSection = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const { currentLang, isRTL } = useLanguage();
  const t = translations[currentLang].products;

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section id="products" className="py-24 bg-gradient-to-b from-stone-50 to-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-wedding-100 text-wedding-700 text-sm font-medium rounded-full mb-4">
            {t.badge}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-wedding-800 mb-4">
            {t.title}
            <span className="text-amber-600"> {t.titleHighlight}</span>
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            {t.description}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.items.map((product, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white"
              onMouseEnter={() => setHoveredId(index)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={productImages[index]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wedding-900/60 via-transparent to-transparent" />
                
                {/* Overlay on Hover */}
                <div className={`absolute inset-0 bg-wedding-700/80 flex items-center justify-center transition-opacity duration-300 ${
                  hoveredId === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <Button
                    onClick={scrollToContact}
                    className={`bg-amber-500 hover:bg-amber-600 text-wedding-900 font-semibold px-6 ${isRTL ? 'flex-row-reverse' : ''}`}
                  >
                    {t.inquireNow}
                    <ArrowIcon className={`w-4 h-4 ${isRTL ? 'mr-2' : 'ml-2'}`} />
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-wedding-700 mb-2 group-hover:text-amber-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-stone-600 text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>
                
                {/* Features */}
                <div className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className={`flex items-center gap-2 text-sm text-stone-700 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <Check className="w-4 h-4 text-wedding-500" />
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-wedding-600 to-wedding-700 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className={`absolute top-0 ${isRTL ? 'left-0' : 'right-0'} w-64 h-64 bg-amber-400/10 rounded-full -translate-y-1/2 ${isRTL ? '-translate-x-1/2' : 'translate-x-1/2'}`} />
          <div className={`absolute bottom-0 ${isRTL ? 'right-0' : 'left-0'} w-48 h-48 bg-amber-400/5 rounded-full translate-y-1/2 ${isRTL ? 'translate-x-1/2' : '-translate-x-1/2'}`} />
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {t.ctaTitle}
            </h3>
            <p className="text-white/80 mb-6 max-w-xl mx-auto">
              {t.ctaDescription}
            </p>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-wedding-900 font-semibold px-8 rounded-full"
            >
              {t.ctaButton}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
