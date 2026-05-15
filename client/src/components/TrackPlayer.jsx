import React, { useState, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2 } from 'lucide-react';

export default function TrackPlayer() {
  const [tracks, setTracks] = useState([]);
  const [activeTrack, setActiveTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(30);

  useEffect(() => {
    fetch('/api/tracks')
      .then(res => res.json())
      .then(data => {
        setTracks(data.data);
        if (data.data.length > 0) setActiveTrack(data.data[0]);
      })
      .catch(err => console.error("Error fetching tracks:", err));
  }, []);

  const togglePlay = () => setIsPlaying(!isPlaying);

  if (!activeTrack) return null;

  return (
    <section id="tracks" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Featured Audio</h2>
          <div className="w-24 h-1 bg-neonCyan mx-auto rounded-full shadow-[0_0_10px_rgba(0,247,255,0.5)]"></div>
        </div>

        <div className="glassmorphism rounded-2xl p-6 md:p-10 border border-white/10 relative overflow-hidden">
          {/* Subtle background glow for player */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-magenta/10 rounded-full blur-[80px] -z-10"></div>
          
          <div className="flex flex-col md:flex-row gap-10">
            {/* Album Art & Controls */}
            <div className="w-full md:w-1/3 flex flex-col items-center">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6 group shadow-2xl">
                <img 
                  src={activeTrack.cover} 
                  alt={activeTrack.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button onClick={togglePlay} className="w-16 h-16 rounded-full bg-magenta/90 text-white flex items-center justify-center hover:scale-110 transition-transform">
                    {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8 ml-1" />}
                  </button>
                </div>
              </div>
              
              <div className="w-full">
                <div className="flex justify-between text-xs text-gray-400 mb-2 font-mono">
                  <span>1:02</span>
                  <span>{activeTrack.duration}</span>
                </div>
                {/* Progress bar */}
                <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden cursor-pointer">
                  <div 
                    className="h-full bg-neonCyan shadow-[0_0_8px_rgba(0,247,255,0.8)] relative" 
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-6 mt-6">
                <button className="text-gray-400 hover:text-white transition-colors"><SkipBack className="h-6 w-6" /></button>
                <button 
                  onClick={togglePlay}
                  className="w-14 h-14 rounded-full bg-magenta text-white flex items-center justify-center shadow-[0_0_15px_rgba(255,0,255,0.4)] hover:shadow-[0_0_25px_rgba(255,0,255,0.6)] transition-all"
                >
                  {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 ml-1" />}
                </button>
                <button className="text-gray-400 hover:text-white transition-colors"><SkipForward className="h-6 w-6" /></button>
              </div>
            </div>

            {/* Track List */}
            <div className="w-full md:w-2/3 flex flex-col">
              <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">Discography</h3>
              <div className="space-y-3">
                {tracks.map((track) => (
                  <div 
                    key={track.id}
                    onClick={() => setActiveTrack(track)}
                    className={`flex items-center justify-between p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                      activeTrack.id === track.id 
                        ? 'bg-white/10 border border-neonCyan/30 shadow-[inset_0_0_20px_rgba(0,247,255,0.05)]' 
                        : 'hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-gray-500 font-mono w-4">{track.id}</span>
                      <div>
                        <h4 className={`font-bold ${activeTrack.id === track.id ? 'text-neonCyan' : 'text-gray-200'}`}>
                          {track.title}
                        </h4>
                        <span className="text-xs px-2 py-1 rounded border border-white/10 text-gray-400 inline-block mt-1">
                          {track.genre}
                        </span>
                      </div>
                    </div>
                    <div className="text-gray-400 font-mono text-sm">
                      {track.duration}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
