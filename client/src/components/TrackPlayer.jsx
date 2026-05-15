import React, { useState, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, ExternalLink } from 'lucide-react';

export default function TrackPlayer() {
  const [tracks, setTracks] = useState([]);
  const [activeTrack, setActiveTrack] = useState(null);

  useEffect(() => {
    fetch('/api/tracks')
      .then(res => res.json())
      .then(data => {
        setTracks(data.data);
        if (data.data.length > 0) setActiveTrack(data.data[0]);
      })
      .catch(err => console.error('Error fetching tracks:', err));
  }, []);

  const handleTrackSelect = (track) => {
    setActiveTrack(track);
  };

  const activeIndex = tracks.findIndex(t => t.id === activeTrack?.id);

  const goPrev = () => {
    if (activeIndex > 0) setActiveTrack(tracks[activeIndex - 1]);
  };

  const goNext = () => {
    if (activeIndex < tracks.length - 1) setActiveTrack(tracks[activeIndex + 1]);
  };

  if (!activeTrack) return null;

  const hasSpotify = Boolean(activeTrack.spotifyEmbedUrl);

  return (
    <section id="tracks" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Featured Audio</h2>
          <div className="w-24 h-1 bg-neonCyan mx-auto rounded-full shadow-[0_0_10px_rgba(0,247,255,0.5)]"></div>
        </div>

        <div className="glassmorphism rounded-2xl p-6 md:p-10 border border-white/10 relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-magenta/10 rounded-full blur-[80px] -z-10"></div>

          <div className="flex flex-col md:flex-row gap-10">

            {/* Left: Art + Player */}
            <div className="w-full md:w-1/3 flex flex-col items-center">
              {/* Album art */}
              <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6 shadow-2xl group">
                <img
                  src={activeTrack.cover}
                  alt={activeTrack.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Spotify badge overlay on art */}
                {hasSpotify && (
                  <div className="absolute top-3 right-3 bg-[#1DB954] rounded-full px-2.5 py-1 flex items-center gap-1.5 text-black text-xs font-bold shadow-lg">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                    Spotify
                  </div>
                )}
                {!hasSpotify && (
                  <div className="absolute inset-0 flex items-end justify-center pb-4">
                    <span className="bg-black/60 backdrop-blur-sm text-gray-400 text-xs px-3 py-1 rounded-full border border-white/10">
                      Coming Soon
                    </span>
                  </div>
                )}
              </div>

              {/* Track info */}
              <div className="text-center mb-4">
                <h3 className="text-white font-bold text-lg">{activeTrack.title}</h3>
                <p className="text-gray-400 text-sm">{activeTrack.artist} · <span className="text-neonCyan/80">{activeTrack.genre}</span></p>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center gap-6 mt-2">
                <button
                  onClick={goPrev}
                  disabled={activeIndex === 0}
                  className="text-gray-400 hover:text-white transition-colors disabled:opacity-30"
                >
                  <SkipBack className="h-6 w-6" />
                </button>

                {hasSpotify ? (
                  <a
                    href={activeTrack.audioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-full bg-[#1DB954] text-white flex items-center justify-center shadow-[0_0_15px_rgba(29,185,84,0.4)] hover:shadow-[0_0_25px_rgba(29,185,84,0.6)] hover:scale-105 transition-all"
                    title="Open in Spotify"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                  </a>
                ) : (
                  <button
                    disabled
                    className="w-14 h-14 rounded-full bg-gray-700 text-gray-500 flex items-center justify-center cursor-not-allowed"
                    title="Audio not yet available"
                  >
                    <Play className="h-6 w-6 ml-1" />
                  </button>
                )}

                <button
                  onClick={goNext}
                  disabled={activeIndex === tracks.length - 1}
                  className="text-gray-400 hover:text-white transition-colors disabled:opacity-30"
                >
                  <SkipForward className="h-6 w-6" />
                </button>
              </div>

              {/* Open in Spotify link */}
              {hasSpotify && (
                <a
                  href={activeTrack.audioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-xs text-gray-500 hover:text-[#1DB954] transition-colors flex items-center gap-1"
                >
                  <ExternalLink className="h-3 w-3" />
                  Open in Spotify
                </a>
              )}
            </div>

            {/* Right: Track list + Spotify embed */}
            <div className="w-full md:w-2/3 flex flex-col">
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">Discography</h3>

              {/* Track list */}
              <div className="space-y-2 mb-6">
                {tracks.map((track) => (
                  <div
                    key={track.id}
                    onClick={() => handleTrackSelect(track)}
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
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs px-2 py-0.5 rounded border border-white/10 text-gray-400">
                            {track.genre}
                          </span>
                          {track.spotifyEmbedUrl && (
                            <span className="text-xs px-2 py-0.5 rounded bg-[#1DB954]/10 border border-[#1DB954]/30 text-[#1DB954] flex items-center gap-1">
                              <svg viewBox="0 0 24 24" fill="currentColor" className="w-2.5 h-2.5">
                                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                              </svg>
                              Spotify
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="text-gray-400 font-mono text-sm">{track.duration}</div>
                  </div>
                ))}
              </div>

              {/* Spotify Embed Player */}
              {hasSpotify ? (
                <div className="rounded-xl overflow-hidden border border-[#1DB954]/20 shadow-[0_0_20px_rgba(29,185,84,0.08)]">
                  <iframe
                    key={activeTrack.spotifyEmbedUrl}
                    src={`${activeTrack.spotifyEmbedUrl}?utm_source=generator&theme=0`}
                    width="100%"
                    height="152"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    title={`Spotify player – ${activeTrack.title}`}
                    className="block"
                  />
                </div>
              ) : (
                <div className="rounded-xl border border-white/5 bg-white/3 p-6 text-center">
                  <p className="text-gray-500 text-sm">🎵 Audio for <span className="text-gray-300 font-medium">{activeTrack.title}</span> is coming soon.</p>
                  <p className="text-gray-600 text-xs mt-1">Check back for the Spotify link!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
