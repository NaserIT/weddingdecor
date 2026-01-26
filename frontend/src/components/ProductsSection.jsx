import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { products } from '../data/mock';

const ProductsSection = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="py-24 bg-gradient-to-b from-stone-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-800 text-sm font-medium rounded-full mb-4">
            Unser Sortiment
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-emerald-950 mb-4">
            Exklusive Dekoration für
            <span className="text-amber-600"> Ihren Tag</span>
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Entdecken Sie unsere handverlesene Auswahl an hochwertigen Dekorationsartikeln
            für Ihre perfekte Hochzeit.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 via-transparent to-transparent" />
                
                {/* Overlay on Hover */}
                <div className={`absolute inset-0 bg-emerald-900/80 flex items-center justify-center transition-opacity duration-300 ${
                  hoveredId === product.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <Button
                    onClick={scrollToContact}
                    className="bg-amber-500 hover:bg-amber-600 text-emerald-950 font-semibold px-6"
                  >
                    Jetzt anfragen
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-emerald-900 mb-2 group-hover:text-amber-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-stone-600 text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>
                
                {/* Features */}
                <div className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-stone-700">
                      <Check className="w-4 h-4 text-emerald-600" />
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-emerald-800 to-emerald-900 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-400/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Individuelle Beratung gewünscht?
            </h3>
            <p className="text-white/80 mb-6 max-w-xl mx-auto">
              Lassen Sie sich kostenlos und unverbindlich beraten. 
              Wir finden gemeinsam die perfekte Dekoration für Ihre Hochzeit.
            </p>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-emerald-950 font-semibold px-8 rounded-full"
            >
              Kostenlose Beratung anfordern
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
