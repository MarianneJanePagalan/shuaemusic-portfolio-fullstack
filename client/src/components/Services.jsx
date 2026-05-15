import React from 'react';
import { Music, Sliders, Film } from 'lucide-react';

const services = [
  {
    title: 'Custom Beat Production',
    description: 'Tailor-made instrumentals across Electronic, Hip-Hop, and Phonk genres. Exclusive rights and high-quality stems included.',
    icon: <Music className="h-8 w-8 text-magenta" />,
    features: ['Exclusive Rights', 'Track Stems', '2 Revisions']
  },
  {
    title: 'Mixing & Mastering',
    description: 'Professional grade audio engineering to make your tracks hit hard on any sound system. Analog warmth meets digital precision.',
    icon: <Sliders className="h-8 w-8 text-neonCyan" />,
    features: ['Vocal Tuning', 'Analog Summing', 'Loudness Optimization']
  },
  {
    title: 'Film Scoring',
    description: 'Cinematic soundscapes and original compositions for short films, commercials, and video games.',
    icon: <Film className="h-8 w-8 text-white" />,
    features: ['Original Composition', 'Sound Design', 'Foley']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Sonic Architecture</h2>
          <div className="w-24 h-1 bg-magenta mx-auto rounded-full shadow-[0_0_10px_rgba(255,0,255,0.5)]"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
            Elevate your project with industry-standard audio production and engineering services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="glassmorphism rounded-2xl p-8 border border-white/5 hover:border-magenta/50 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-magenta/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center mb-6 shadow-inner">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-neonCyan mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-8 border-t border-white/10">
                  <button className="text-magenta font-bold tracking-wider hover:text-white transition-colors uppercase text-sm">
                    Inquire Now &rarr;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
