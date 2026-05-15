import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import TrackPlayer from './components/TrackPlayer'
import Services from './components/Services'
import StudioGear from './components/StudioGear'
import Contact from './components/Contact'

function App() {
  const [selectedService, setSelectedService] = useState('');

  const handleInquire = (serviceTitle) => {
    setSelectedService(serviceTitle);
    // Smooth scroll to contact section
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background relative selection:bg-magenta selection:text-white">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-900/20 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-fuchsia-900/20 blur-[120px]"></div>
      </div>

      <Header />
      <main>
        <Hero />
        <TrackPlayer />
        <Services onInquire={handleInquire} />
        <StudioGear />
        <Contact selectedService={selectedService} />
      </main>
      <footer className="relative border-t border-white/5 mt-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[200px] bg-neonCyan/5 blur-[80px] rounded-full" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Brand */}
            <div className="text-center md:text-left">
              <a href="#" className="text-2xl font-bold tracking-tighter">
                <span className="text-white">SHUAE</span>
                <span className="text-magenta">MUSIC</span>
              </a>
              <p className="text-gray-500 text-sm mt-1">Sculpting Soundscapes. Producing Records.</p>
            </div>
            {/* Nav links */}
            <nav className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <a href="#tracks" className="hover:text-neonCyan transition-colors">Tracks</a>
              <a href="#services" className="hover:text-neonCyan transition-colors">Services</a>
              <a href="#gear" className="hover:text-neonCyan transition-colors">Studio Gear</a>
              <a href="#contact" className="hover:text-neonCyan transition-colors">Contact</a>
            </nav>
            {/* Social links */}
            <div className="flex items-center gap-5">
              <a href="https://soundcloud.com" target="_blank" rel="noopener noreferrer" aria-label="SoundCloud"
                className="w-10 h-10 rounded-full glassmorphism border border-white/10 flex items-center justify-center text-gray-400 hover:text-neonCyan hover:border-neonCyan/50 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M1.175 12.225c-.015 0-.023.01-.023.024l-.424 2.623.424 2.593c0 .013.008.023.023.023s.023-.01.023-.023l.48-2.593-.48-2.623c0-.014-.008-.024-.023-.024m1.467-.37c-.02 0-.03.01-.03.03l-.38 2.994.38 2.935c0 .02.01.03.03.03s.03-.01.03-.03l.43-2.935-.43-2.994c0-.02-.01-.03-.03-.03m1.48-.215c-.026 0-.04.015-.04.04l-.33 3.21.33 3.148c0 .025.014.04.04.04s.04-.015.04-.04l.376-3.147-.376-3.21c0-.025-.014-.04-.04-.04m1.498.254c-.032 0-.05.018-.05.05l-.28 2.956.28 3.02c0 .032.018.05.05.05s.05-.018.05-.05l.316-3.02-.316-2.955c0-.032-.018-.05-.05-.05m1.498-.086c-.037 0-.057.022-.057.06l-.25 3.043.25 3.073c0 .037.02.06.057.06s.057-.022.057-.06l.283-3.073-.283-3.042c0-.038-.02-.06-.057-.06m1.5-.264c-.043 0-.065.026-.065.07l-.218 3.307.218 3.096c0 .044.022.07.065.07s.065-.026.065-.07l.248-3.096-.248-3.307c0-.044-.022-.07-.065-.07m5.33-1.02c-.097 0-.187.017-.272.045-.17-1.938-1.787-3.455-3.765-3.455-1.978 0-3.547 1.478-3.72 3.387v.024l-.01 6.698c0 .015.01.025.024.025h7.744c.665 0 1.204-.54 1.204-1.205V11.81c0-.665-.54-1.204-1.204-1.204"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="w-10 h-10 rounded-full glassmorphism border border-white/10 flex items-center justify-center text-gray-400 hover:text-magenta hover:border-magenta/50 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"
                className="w-10 h-10 rounded-full glassmorphism border border-white/10 flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-500/50 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-white/5 text-center text-gray-600 text-xs">
            <p>&copy; {new Date().getFullYear()} SHUAEMUSIC. All rights reserved. Crafted with 🎵 and caffeine.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
