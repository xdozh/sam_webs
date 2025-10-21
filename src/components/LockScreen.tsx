import { useState } from 'react';
import { Heart } from 'lucide-react';

interface LockScreenProps {
  onUnlock: () => void;
}

const validPasswords = ['jelk', 'iloveyou']; // ✅ lowercase for comparison

export default function LockScreen({ onUnlock }: LockScreenProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isShaking, setIsShaking] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedPassword = password.trim().toLowerCase(); // ✅ consistent case

    if (validPasswords.includes(trimmedPassword)) {
      onUnlock();
    } else {
      setError("What we named our first baby");
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
      {/* ✅ Background Image */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'url(/images/lock/bg-lock1.jpg)', // ✅ removed "public/"
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4 md:p-8">
        <div
          className={`w-full max-w-md bg-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-8 shadow-2xl border border-white/20 ${
            isShaking ? 'animate-shake' : 'animate-soft-glow'
          }`}
        >
          {/* Portrait */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-amber-300/50 shadow-gold-glow">
                <img
                  src="/images/lock/portrait.jpg" // ✅ fixed path
                  alt="Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-rose-500 rounded-full p-2 shadow-lg">
                <Heart className="w-5 h-5 text-white fill-white" />
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="font-serif text-3xl md:text-4xl text-center text-amber-100 mb-2 leading-tight">
            Heyyy Captain Cute
          </h1>

          <p className="text-center text-amber-200/80 mb-6 md:mb-8 text-base md:text-lg">
            There's a small gift for you
          </p>

          {/* Password Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="password"
                className="block text-sm md:text-base font-medium text-amber-100 mb-2"
              >
                Our cute nickname
              </label>
              <input
                type="text"
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError('');
                }}
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-300/50 focus:border-transparent transition-all"
                placeholder="Enter the secret code..."
                autoComplete="off"
              />
            </div>

            {error && (
              <p className="text-rose-300 text-sm text-center animate-pulse">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-slate-900 font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-gold-glow-lg transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 focus:ring-offset-transparent"
            >
              Unlock
            </button>
          </form>

          <p className="mt-6 text-center text-amber-200/60 text-sm">
            Enter your secret code to see what I have for you💌
          </p>
        </div>
      </div>

      {/* Floating sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-amber-300/40 rounded-full animate-float-sparkles"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
