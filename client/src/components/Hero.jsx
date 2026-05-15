import React, { useState, useEffect } from 'react';
import { Play, ChevronDown } from 'lucide-react';
import heroBg from '../assets/hero_bg.png';

const TYPEWRITER_PHRASES = [
  'Sculpting Soundscapes',
  'Producing Records',
  'Engineering Vibes',
  'Building Empires',
];

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const phrase = TYPEWRITER_PHRASES[phraseIndex];
    let timeout;
    if (!deleting && displayed.length < phrase.length) {
      timeout = setTimeout(() => setDisplayed(phrase.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === phrase.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setPhraseIndex((i) => (i + 1) % TYPEWRITER_PHRASES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, phraseIndex]);

  return (
    <section id="about" className="relative h-screen flex items-center justify-center overflow-hidden">
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
        <p className="text-neonCyan text-sm font-mono tracking-[0.3em] uppercase mb-6 opacity-80">
          Music Producer · Sound Designer
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 drop-shadow-2xl">
          <span className="block text-white mb-2">SHUAEMUSIC</span>
          <span className="block text-gradient min-h-[1.2em]">
            {displayed}
            <span className="animate-pulse text-neonCyan">|</span>
          </span>
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

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="h-6 w-6 text-gray-500" />
      </div>
    </section>
  );
}

