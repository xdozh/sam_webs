import { Music, Lock } from 'lucide-react';

interface PlaylistLinksProps {
  ourUrl?: string;
  privateUrl?: string;
}

export default function PlaylistLinks({
  ourUrl = 'https://spotify.link/vKV5fDlQDXb',
  privateUrl = 'https://spotify.link/ZKp5xSkGDXb',
}: PlaylistLinksProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
      <a
        href={ourUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-gradient-to-br from-teal-500/90 to-sky-600/90 hover:from-teal-600 hover:to-sky-700 backdrop-blur-sm rounded-2xl p-5 md:p-6 shadow-lg hover:shadow-gold-glow transform hover:scale-105 transition-all duration-300 border border-white/20"
      >
        <div className="flex items-center justify-center gap-3 mb-3">
          <Music className="w-5 h-5 md:w-6 md:h-6 text-white" />
          <h3 className="font-serif text-xl md:text-2xl text-white">Our Playlist</h3>
        </div>
        <p className="text-center text-white/90 text-sm">
          The songs that remind us of each other
        </p>
      </a>

      <a
        href={privateUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-gradient-to-br from-rose-500/90 to-pink-600/90 hover:from-rose-600 hover:to-pink-700 backdrop-blur-sm rounded-2xl p-5 md:p-6 shadow-lg hover:shadow-gold-glow transform hover:scale-105 transition-all duration-300 border border-white/20"
      >
        <div className="flex items-center justify-center gap-3 mb-3">
          <Lock className="w-5 h-5 md:w-6 md:h-6 text-white" />
          <h3 className="font-serif text-xl md:text-2xl text-white">Her</h3>
        </div>
        <p className="text-center text-white/90 text-sm">
          Songs that remind me of you
        </p>
      </a>
    </div>
  );
}
