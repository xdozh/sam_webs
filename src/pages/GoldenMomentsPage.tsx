import { ArrowLeft } from 'lucide-react';

interface Memory {
  id: number;
  image: string;
  caption: string;
}

const memories: Memory[] = [
  { id: 1, image: '/images/memories/memory-01.jpg', caption: 'Our first adventure' },
  { id: 2, image: '/images/memories/memory-02.jpg', caption: 'That beautiful sunset' },
  { id: 3, image: '/images/memories/memory-03.jpg', caption: 'Laughing together' },
  { id: 4, image: '/images/memories/memory-04.jpg', caption: 'A perfect day' },
  { id: 5, image: '/images/memories/memory-05.jpg', caption: 'Making memories' },
  { id: 6, image: '/images/memories/memory-06.jpg', caption: 'Just us two' },
  { id: 7, image: '/images/memories/memory-07.jpg', caption: 'Sweet moments' },
  { id: 8, image: '/images/memories/memory-08.jpg', caption: 'Forever cherished' },
  { id: 9, image: '/images/memories/memory-09.jpg', caption: 'Pure happiness' },
  { id: 10, image: '/images/memories/memory-10.jpg', caption: 'Together always' },
  { id: 11, image: '/images/memories/memory-11.jpg', caption: 'My favorite place' },
  { id: 12, image: '/images/memories/memory-12.jpg', caption: 'With you, home' },
];

interface GoldenMomentsPageProps {
  onBack: () => void;
}

export default function GoldenMomentsPage({ onBack }: GoldenMomentsPageProps) {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <div className="fixed inset-0 bg-gradient-to-b from-indigo-950 via-sky-900 to-amber-300/30 -z-10" />

      <div className="fixed inset-0 -z-10 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-amber-200/30 rounded-full animate-float-sparkles"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 px-4 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={onBack}
            className="group mb-8 flex items-center gap-2 text-amber-200 hover:text-amber-100 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 focus:ring-offset-transparent rounded-lg px-3 py-2"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Home</span>
          </button>

          <h1 className="font-serif text-3xl md:text-6xl text-amber-100 mb-8 md:mb-12 text-center drop-shadow-lg leading-tight">
            Golden Moments
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
            {memories.map((memory) => (
              <div
                key={memory.id}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border-2 border-amber-300/30 hover:border-amber-400/60 shadow-lg hover:shadow-gold-glow transform hover:scale-105 transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={memory.image}
                    alt={memory.caption}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-2 md:p-4">
                    <p className="font-sans text-xs md:text-sm text-white text-center leading-tight">
                      {memory.caption}
                    </p>
                  </div>
                </div>

                <div className="absolute top-2 right-2 w-8 h-8 opacity-20 group-hover:opacity-40 transition-opacity">
                  <svg viewBox="0 0 50 50" className="text-amber-300">
                    <path
                      d="M25,5 Q20,3 17,7 Q14,11 17,15 Q20,19 25,18 L25,5"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
