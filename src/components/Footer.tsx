export default function Footer() {
  return (
    <footer className="relative w-full mt-20">
      <div className="absolute inset-x-0 bottom-0">
        <svg
          viewBox="0 0 1440 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0,100 C240,126 480,136 720,121 C960,106 1200,81 1440,100 L1440,200 L0,200 Z"
            fill="url(#wave-gradient-1)"
            opacity="0.3"
          />
          <path
            d="M0,120 C320,90 640,80 960,100 C1120,110 1280,125 1440,115 L1440,200 L0,200 Z"
            fill="url(#wave-gradient-2)"
            opacity="0.5"
          />
          <path
            d="M0,140 C360,120 720,115 1080,130 C1260,137 1380,145 1440,135 L1440,200 L0,200 Z"
            fill="url(#wave-gradient-3)"
          />
          <defs>
            <linearGradient id="wave-gradient-1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0c4a6e" />
              <stop offset="100%" stopColor="#075985" />
            </linearGradient>
            <linearGradient id="wave-gradient-2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0369a1" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>
            <linearGradient id="wave-gradient-3" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#0ea5e9" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </footer>
  );
}
