import { ArrowLeft } from 'lucide-react';

interface Flower {
  id: number;
  image: string;
  caption: string;
}

const flowers: Flower[] = [
  { id: 1, image: '/images/memories/Anniversary Flowers.jpg', caption: 'Our Year❤️' },
  { id: 1, image: '/images/memories/Flowers2.jpg', caption: 'Beautiful Princess❤️' },
  { id: 2, image: '/images/memories/Fav Flowers.jpg', caption: 'Your Fav Flowers❤️' },
  { id: 3, image: '/images/memories/First Flowers.jpg', caption: 'The First Flowers❤️' },
  { id: 4, image: '/images/memories/Flowers.jpg', caption: 'Pretty Princess❤️' },
  { id: 5, image: '/images/memories/Jan Flowers.jpg', caption: 'Back home❤️' },
  { id: 6, image: '/images/memories/Jan flowerss.jpg', caption: 'My Girl❤️' },
  { id: 7, image: '/images/memories/my Fav flower.jpg', caption: 'My Fav Flower❤️' },
 
];

interface FlowersPageProps {
  onBack: () => void;
}

export default function FlowersPage({ onBack }: FlowersPageProps) {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-green-950 via-emerald-800 to-lime-400/30 -z-10" />

      {/* Floating sparkles */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-lime-200/30 rounded-full animate-float-sparkles"
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
            className="group mb-8 flex items-center gap-2 text-lime-200 hover:text-lime-100 transition-colors focus:outline-none focus:ring-2 focus:ring-lime-300 focus:ring-offset-2 focus:ring-offset-transparent rounded-lg px-3 py-2"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Home</span>
          </button>

          <h1 className="font-serif text-3xl md:text-6xl text-lime-100 mb-8 md:mb-12 text-center drop-shadow-lg leading-tight">
            Flowers for My Love 💐
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
            {flowers.map((flower) => (
              <div
                key={flower.id}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border-2 border-lime-300/30 hover:border-lime-400/60 shadow-lg hover:shadow-lime-500/50 transform hover:scale-105 transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={flower.image}
                    alt={flower.caption}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-2 md:p-4">
                    <p className="font-sans text-xs md:text-sm text-white text-center leading-tight">
                      {flower.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
