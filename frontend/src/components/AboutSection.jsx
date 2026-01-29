import React from 'react';
import { Heart, Award, Users, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const aboutImage = "https://images.unsplash.com/photo-1709122933911-92872524ab87?w=600&q=80";

const AboutSection = () => {
  const { currentLang, isRTL } = useLanguage();
  const t = translations[currentLang].about;

  const featureIcons = [Heart, Award, Users, Clock];

  return (
    <section id="about" className="py-24 bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${isRTL ? 'lg:grid-flow-dense' : ''}`}>
          {/* Image Side */}
          <div className={`relative ${isRTL ? 'lg:col-start-2' : ''}`}>
            <div className="relative z-10">
              <img
                src={aboutImage}
                alt="Hochzeitssetup"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
            {/* Decorative Frame */}
            <div className={`absolute -bottom-6 ${isRTL ? '-left-6' : '-right-6'} w-full h-full border-4 border-amber-400 rounded-2xl -z-10`} />
            <div className={`absolute -top-6 ${isRTL ? '-right-6' : '-left-6'} w-32 h-32 bg-wedding-100 rounded-full -z-10`} />
            
            {/* Stats Badge */}
            <div className={`absolute -bottom-4 ${isRTL ? '-right-4' : '-left-4'} bg-wedding-600 text-white p-6 rounded-xl shadow-xl z-20`}>
              <div className="text-3xl font-bold text-amber-400">10+</div>
              <div className="text-sm text-white/80">{t.experience}</div>
            </div>
          </div>

          {/* Content Side */}
          <div className={isRTL ? 'lg:col-start-1' : ''}>
            <span className="inline-block px-4 py-1.5 bg-wedding-100 text-wedding-700 text-sm font-medium rounded-full mb-4">
              {t.badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-wedding-800 mb-6">
              {t.title}
              <span className="text-amber-600"> {t.titleHighlight}</span>
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              <strong>The Perfect Wedding Deko</strong> {t.description1.replace('Bei The Perfect Wedding Deko verstehen wir', 'verstehen wir').replace('At The Perfect Wedding Deko, we understand', 'we understand').replace('في The Perfect Wedding Deko، نفهم', 'نفهم')}
            </p>
            <p className="text-stone-600 leading-relaxed mb-8">
              {t.description2}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              {t.features.map((feature, index) => {
                const Icon = featureIcons[index];
                return (
                  <div key={index} className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <div className="w-10 h-10 rounded-lg bg-wedding-100 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-wedding-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-wedding-700 mb-1">{feature.title}</h4>
                      <p className="text-sm text-stone-500">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
