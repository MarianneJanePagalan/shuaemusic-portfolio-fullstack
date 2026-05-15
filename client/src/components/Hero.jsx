import React from 'react';
import { Play } from 'lucide-react';
import heroBg from '../assets/hero_bg.png';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Studio Setup" 
          className="w-full h-full object-cover opacity-30 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mt-20">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 drop-shadow-2xl">
          <span className="block text-white mb-2">Sonic Architect</span>
          <span className="block text-gradient">Sculpting Soundscapes / Producing Records</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300 mb-10 font-light">
          Elevate your artistry with premium custom beats, cinematic scoring, and professional mix/mastering.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="#tracks"
            className="flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-background bg-neonCyan hover:bg-white hover:shadow-[0_0_20px_rgba(0,247,255,0.6)] transition-all duration-300 w-full sm:w-auto"
          >
            <Play className="mr-2 h-5 w-5" />
            Listen Now
          </a>
          <a
            href="#services"
            className="flex items-center justify-center px-8 py-4 border border-white/20 text-lg font-bold rounded-full text-white bg-white/5 hover:bg-white/10 glassmorphism transition-all duration-300 w-full sm:w-auto"
          >
            View Services
          </a>
        </div>
      </div>
    </section>
  );
}
