import { ArrowLeft } from 'lucide-react';

interface Memory {
  id: number;
  image: string;
  caption: string;
}

const memories: Memory[] = [
  { id: 1, image: '/images/my_eyes_only/IMG_8053.JPG', caption: 'Promise❤️' },
  { id: 2, image: '/images/my_eyes_only/IMG_8056.PNG', caption: 'One Year❤️' },
  { id: 3, image: '/images/my_eyes_only/IMG_8058.JPG', caption: 'Aquarium Date❤️' },
  { id: 4, image: '/images/my_eyes_only/IMG_8059.JPG', caption: 'Aquarium Selfie❤️' },
  { id: 5, image: '/images/my_eyes_only/IMG_8060.PNG', caption: 'Princess and her man❤️' },
 
];

interface YourEyesOnlyPageProps {
  onBack: () => void;
}

export default function YourEyesOnlyPage({ onBack }: YourEyesOnlyPageProps) {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-purple-950 via-rose-900 to-pink-400/30 -z-10" />

      {/* Floating sparkles */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-pink-200/30 rounded-full animate-float-sparkles"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 px-4 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={onBack}
            className="group mb-8 flex items-center gap-2 text-pink-200 hover:text-pink-100 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-offset-2 focus:ring-offset-transparent rounded-lg px-3 py-2"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Home</span>
          </button>

          <h1 className="font-serif text-3xl md:text-6xl text-pink-100 mb-8 md:mb-12 text-center drop-shadow-lg leading-tight">
            Your Eyes Only
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
            {memories.map((memory) => (
              <div
                key={memory.id}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border-2 border-pink-300/30 hover:border-pink-400/60 shadow-lg hover:shadow-pink-500/50 transform hover:scale-105 transition-all duration-300"
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
                  <svg viewBox="0 0 50 50" className="text-pink-300">
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
