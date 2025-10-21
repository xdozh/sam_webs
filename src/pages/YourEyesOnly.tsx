import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

interface Memory {
  id: number;
  image: string;
  caption: string;
}

const memories: Memory[] = [
  { id: 1, image: '/images/my_eyes_only/IMG_8053.JPG', caption: 'Nap time❤️' },
  { id: 2, image: '/images/my_eyes_only/IMG_8056.PNG', caption: 'Perfect kisses❤️' },
  { id: 3, image: '/images/my_eyes_only/IMG_8058.JPG', caption: 'Skin to skin❤️' },
  { id: 4, image: '/images/my_eyes_only/IMG_8059.JPG', caption: 'Cuteee❤️' },
  { id: 5, image: '/images/my_eyes_only/IMG_8060.PNG', caption: 'skin to skinnnn❤️' },
  { id: 5, image: '/images/memories/Getawayy.jpeg', caption: 'Face of love❤️' },
  { id: 5, image: '/images/memories/Gym.jpeg', caption: 'For you' },
  { id: 5, image: '/images/memories/Gymm.jpeg', caption: 'Caught in 4k' },
  { id: 5, image: '/images/memories/Victoryy.jpeg', caption: 'Pubggg' },
  { id: 5, image: '/images/memories/Late night ft.jpeg', caption: 'Our Facetimess❤️' },
];

interface YourEyesOnlyPageProps {
  onBack: () => void;
}

export default function YourEyesOnlyPage({ onBack }: YourEyesOnlyPageProps) {
  const [authorized, setAuthorized] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // The correct password (case-insensitive)
  const correctPassword = 'M01';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Make both lowercase to ignore case
    if (password.trim().toLowerCase() === correctPassword.toLowerCase()) {
      setAuthorized(true);
      setError('');
    } else {
      setError('Incorrect password. Try again 💌');
    }
  };

  if (!authorized) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-950 via-rose-900 to-pink-400/30 text-pink-100 px-4">
        <h1 className="font-serif text-4xl mb-6 text-center">🔒 Your Eyes Only</h1>
        <p className="mb-4 text-pink-200 text-center">
          Enter the secret password to view these memories (our first room) 💞
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 w-full max-w-xs">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full px-4 py-2 rounded-lg bg-white/10 text-pink-100 placeholder-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-pink-500 hover:bg-pink-600 rounded-lg text-white font-medium shadow-lg transition"
          >
            Unlock 💖
          </button>
        </form>
        {error && <p className="mt-3 text-red-300 text-sm">{error}</p>}
        <button
          onClick={onBack}
          className="mt-6 text-sm text-pink-300 hover:text-pink-200 flex items-center gap-1 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </button>
      </div>
    );
  }

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
