import React from 'react';
import { Speaker, Mic2, MonitorUp } from 'lucide-react';

export default function StudioGear() {
  return (
    <section id="gear" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonCyan to-magenta">Arsenal</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-md">
              High-end analog outboard gear combined with the latest digital tools to ensure every mix sounds massive.
            </p>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <div className="glassmorphism p-6 rounded-xl border border-white/5 flex flex-col items-center text-center hover:bg-white/5 transition-colors">
              <MonitorUp className="h-10 w-10 text-gray-300 mb-4" />
              <h4 className="font-bold text-white">Custom DAW Rig</h4>
              <span className="text-xs text-gray-500 mt-1">Ableton Live 11 Suite</span>
            </div>
            <div className="glassmorphism p-6 rounded-xl border border-white/5 flex flex-col items-center text-center hover:bg-white/5 transition-colors">
              <Speaker className="h-10 w-10 text-gray-300 mb-4" />
              <h4 className="font-bold text-white">Focal Monitors</h4>
              <span className="text-xs text-gray-500 mt-1">Twin6 Be Red</span>
            </div>
            <div className="glassmorphism p-6 rounded-xl border border-white/5 flex flex-col items-center text-center hover:bg-white/5 transition-colors col-span-2">
              <Mic2 className="h-10 w-10 text-gray-300 mb-4" />
              <h4 className="font-bold text-white">Analog Synths & Outboard</h4>
              <span className="text-xs text-gray-500 mt-1">Moog Sub 37, Universal Audio Apollo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
