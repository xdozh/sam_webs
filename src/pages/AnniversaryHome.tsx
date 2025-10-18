import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import DailyMessageCard from '../components/DailyMessageCard';
import PlaylistLinks from '../components/PlaylistLinks';
import FirstMetSection from '../components/FirstMetSection';
import MemoryGallery from '../components/MemoryGallery';
import Footer from '../components/Footer';
import { MESSAGES } from '../data/dailyMessages';
import { getTodayMessageIndex, getFormattedDate } from '../utils/dailyNoteService';

interface AnniversaryHomeProps {
  onNavigateToGallery: () => void;
}

export default function AnniversaryHome({ onNavigateToGallery }: AnniversaryHomeProps) {
  const [showDailyNote, setShowDailyNote] = useState(false);
  const [messageIndex, setMessageIndex] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const currentMessage = messageIndex !== null ? MESSAGES[messageIndex] : '';
  const dateLabel = getFormattedDate();

  useEffect(() => {
    const loadTodayMessage = async () => {
      const index = await getTodayMessageIndex(MESSAGES.length);
      setMessageIndex(index);
      setIsLoading(false);
    };
    loadTodayMessage();
  }, []);

  // inside AnniversaryHome
useEffect(() => {
  let mounted = true;
  (async () => {
    const idx = await getTodayMessageIndex(MESSAGES.length);
    if (mounted) {
      currentMessage(MESSAGES[idx]);
      dateLabel(getFormattedDate());
      setShowDailyNote(true);
    }
  })();
  return () => { mounted = false; };
}, []);


  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showDailyNote) {
        setShowDailyNote(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [showDailyNote]);

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

      <div className="relative z-10">
        <section className="min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-7xl text-amber-100 mb-8 md:mb-12 drop-shadow-lg leading-tight">
              Happy 1 year Anniversary Yene Fikir🫂❤️
            </h1>

            <div className="flex flex-col items-center gap-4 md:gap-6 mb-8 md:mb-12">
              <button
                onClick={() => setShowDailyNote(!showDailyNote)}
                className="group bg-gradient-to-r from-rose-500/90 to-pink-600/90 hover:from-rose-600 hover:to-pink-700 backdrop-blur-sm text-white font-semibold text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-2xl shadow-lg hover:shadow-gold-glow transform hover:scale-105 transition-all duration-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 focus:ring-offset-transparent"
              >
                <span className="flex items-center gap-3">
                  <Heart className="w-6 h-6" />
                  {showDailyNote ? "Hide Today's Note" : "Today's Note"}
                </span>
              </button>

              {showDailyNote && !isLoading && messageIndex !== null && (
                <div className="w-full max-w-2xl animate-in fade-in slide-in-from-top-4 duration-500">
                  <DailyMessageCard message={currentMessage} dateLabel={dateLabel} />
                </div>
              )}
            </div>

            <PlaylistLinks />
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 py-20">
          <FirstMetSection />
        </section>

        <section className="max-w-7xl mx-auto px-4 py-20">
          <MemoryGallery onViewAll={onNavigateToGallery} />
        </section>

        <Footer />
      </div>
    </div>
  );
}
