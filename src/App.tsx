import { useState, useEffect } from 'react';
import LockScreen from './components/LockScreen';
import AnniversaryHome from './pages/AnniversaryHome';
import GoldenMomentsPage from './pages/GoldenMomentsPage';
import YourEyesOnlyPage from './pages/YourEyesOnly'; // 🆕 import

function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'gallery' | 'youreyesonly'>('home'); // 🆕 added youreyesonly

  const handleUnlock = () => {
    setIsUnlocked(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 2000);
  };

  useEffect(() => {
    const preferReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (preferReducedMotion) {
      setShowConfetti(false);
    }
  }, []);

  return (
    <>
      {!isUnlocked ? (
        <LockScreen onUnlock={handleUnlock} />
      ) : (
        <>
          {currentPage === 'home' && (
            <AnniversaryHome
              onNavigateToGallery={() => setCurrentPage('gallery')}
              onNavigateToYourEyesOnly={() => setCurrentPage('youreyesonly')} // 🆕 added prop
            />
          )}

          {currentPage === 'gallery' && (
            <GoldenMomentsPage
              onBack={() => setCurrentPage('home')}
              onNavigateToYourEyesOnly={() => setCurrentPage('youreyesonly')} // 🆕 added
            />
          )}

          {currentPage === 'youreyesonly' && (
            <YourEyesOnlyPage onBack={() => setCurrentPage('home')} /> // 🆕 new route
          )}

          {showConfetti && (
            <div className="fixed inset-0 pointer-events-none z-50">
              {[...Array(30)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 animate-confetti"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: '-10px',
                    backgroundColor: ['#fbbf24', '#f59e0b', '#fb923c', '#f472b6', '#ec4899'][
                      Math.floor(Math.random() * 5)
                    ],
                    animationDelay: `${Math.random() * 0.5}s`,
                    animationDuration: `${1 + Math.random() * 0.5}s`,
                    borderRadius: Math.random() > 0.5 ? '50%' : '0',
                  }}
                />
              ))}
            </div>
          )}
        </>
      )}
    </>
  );
}

export default App;
