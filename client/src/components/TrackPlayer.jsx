import React, { useState, useEffect } from 'react';

export default function TrackPlayer() {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/tracks')
      .then(res => res.json())
      .then(data => {
        setTracks(data.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching tracks:', err);
        setLoading(false);
      });
  }, []);

  return (
    <section id="tracks" className="py-24 relative">
      {/* Section ambient glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[300px] bg-neonCyan/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[30%] h-[200px] bg-magenta/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-neonCyan text-sm font-mono tracking-[0.3em] uppercase mb-3 opacity-70">
            — On Spotify —
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Featured Tracks
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neonCyan to-magenta mx-auto rounded-full shadow-[0_0_10px_rgba(0,247,255,0.5)]" />
        </div>

        {/* Loading state */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="w-8 h-8 border-2 border-neonCyan border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {/* Spotify embed grid */}
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tracks.map((track, index) => (
              <div
                key={track.id}
                className="group relative rounded-2xl p-5 border border-white/10 bg-white/[0.03] backdrop-blur-md
                           hover:border-neonCyan/40 hover:bg-white/[0.05] hover:shadow-[0_0_30px_rgba(0,247,255,0.08)]
                           transition-all duration-500"
              >
                {/* Corner glow accent — alternates cyan/magenta */}
                <div
                  className={`absolute -top-px -left-px w-16 h-16 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none
                    ${index % 2 === 0
                      ? 'bg-gradient-to-br from-neonCyan/20 to-transparent'
                      : 'bg-gradient-to-br from-magenta/20 to-transparent'
                    }`}
                />

                {/* Track label */}
                <div className="flex items-center justify-between mb-4 px-1">
                  <div>
                    <h3 className={`text-base font-bold tracking-wide ${index % 2 === 0 ? 'text-neonCyan' : 'text-magenta'}`}>
                      {track.title}
                    </h3>
                    <p className="text-gray-500 text-xs mt-0.5 font-mono">{track.artist}</p>
                  </div>
                  {/* Spotify wordmark */}
                  <div className="flex items-center gap-1.5 text-[#1DB954]">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                    <span className="text-xs font-semibold">Spotify</span>
                  </div>
                </div>

                {/* Spotify embed iframe */}
                <div className={`rounded-xl overflow-hidden border ${index % 2 === 0 ? 'border-neonCyan/15' : 'border-magenta/15'} shadow-lg`}>
                  <iframe
                    src={track.spotifyEmbedUrl}
                    width="100%"
                    height="152"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    title={`Spotify — ${track.title} by ${track.artist}`}
                    className="block"
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty state */}
        {!loading && tracks.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            <p className="text-lg">No tracks available right now. Check back soon!</p>
          </div>
        )}
      </div>
    </section>
  );
}
