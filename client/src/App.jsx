import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import TrackPlayer from './components/TrackPlayer'
import Services from './components/Services'
import StudioGear from './components/StudioGear'
import Contact from './components/Contact'

function App() {
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
        <Services />
        <StudioGear />
        <Contact />
      </main>
      <footer className="py-8 text-center text-gray-500 border-t border-white/5 mt-20">
        <p>&copy; {new Date().getFullYear()} Sonic Architect. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
