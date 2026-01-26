import React from 'react';
import { Heart, Award, Users, Clock } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Heart,
      title: 'Mit Leidenschaft',
      description: 'Jede Dekoration wird mit Liebe zum Detail ausgewählt und gepflegt.'
    },
    {
      icon: Award,
      title: 'Premium Qualität',
      description: 'Nur hochwertige Materialien finden den Weg in unser Sortiment.'
    },
    {
      icon: Users,
      title: 'Persönliche Beratung',
      description: 'Wir nehmen uns Zeit für Ihre Wünsche und Vorstellungen.'
    },
    {
      icon: Clock,
      title: 'Zuverlässig',
      description: 'Pünktliche Lieferung und Abholung - garantiert.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1709122933911-92872524ab87?w=600&q=80"
                alt="Hochzeitssetup"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
            {/* Decorative Frame */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-amber-400 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-emerald-100 rounded-full -z-10" />
            
            {/* Stats Badge */}
            <div className="absolute -bottom-4 -left-4 bg-emerald-800 text-white p-6 rounded-xl shadow-xl z-20">
              <div className="text-3xl font-bold text-amber-400">10+</div>
              <div className="text-sm text-white/80">Jahre Erfahrung</div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-800 text-sm font-medium rounded-full mb-4">
              Über uns
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-950 mb-6">
              Ihre Vision ist unsere
              <span className="text-amber-600"> Mission</span>
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              Bei <strong>The Perfect Wedding Deko</strong> verstehen wir, dass Ihre Hochzeit 
              einer der wichtigsten Tage Ihres Lebens ist. Deshalb setzen wir alles daran, 
              Ihre Traumdekoration Wirklichkeit werden zu lassen.
            </p>
            <p className="text-stone-600 leading-relaxed mb-8">
              Mit einem umfangreichen Sortiment an exklusiven Dekorationsartikeln und 
              jahrelanger Erfahrung begleiten wir Sie von der ersten Idee bis zum fertigen 
              Konzept. Unser Team steht Ihnen mit Rat und Tat zur Seite.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-emerald-900 mb-1">{feature.title}</h4>
                    <p className="text-sm text-stone-500">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
