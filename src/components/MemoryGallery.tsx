import { Camera } from 'lucide-react';

interface MemoryGalleryProps {
  onViewAll: () => void;
}

export default function MemoryGallery({ onViewAll }: MemoryGalleryProps) {
  return (
    <div className="w-full">
      <h2 className="font-serif text-3xl md:text-5xl text-amber-100 mb-6 md:mb-8 text-center leading-tight">
        Golden Moments
      </h2>

      <p className="text-amber-200 text-center mb-6 md:mb-8 text-base md:text-lg px-4">
        A collection of our most treasured memories together
      </p>

      <div className="flex justify-center">
        <button
          onClick={onViewAll}
          className="group bg-gradient-to-r from-amber-500/90 to-amber-600/90 hover:from-amber-600 hover:to-amber-700 backdrop-blur-sm text-white font-semibold text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-2xl shadow-lg hover:shadow-gold-glow transform hover:scale-105 transition-all duration-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 focus:ring-offset-transparent"
        >
          <span className="flex items-center gap-3">
            <Camera className="w-5 h-5 md:w-6 md:h-6" />
            View Our Golden Moments
          </span>
        </button>
      </div>

      <p className="font-serif text-lg md:text-2xl font-bold text-center text-slate-800 drop-shadow-lg mt-8 md:mt-12 px-4">
        betam new miwedish yene konjo♾️❤️
      </p>
    </div>
  );
}
