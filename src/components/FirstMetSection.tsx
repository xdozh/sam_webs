import { MapPin } from 'lucide-react';

export default function FirstMetSection() {
  return (
    <div className="relative bg-white rounded-3xl p-6 md:p-12 shadow-2xl overflow-hidden">
      <div className="absolute top-0 left-0 w-32 h-32 opacity-10">
        <svg viewBox="0 0 100 100" className="text-rose-400">
          <path
            d="M50,10 Q30,5 20,20 Q10,35 20,50 Q30,65 50,60 L50,10"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10 transform rotate-180">
        <svg viewBox="0 0 100 100" className="text-amber-400">
          <path
            d="M50,10 Q30,5 20,20 Q10,35 20,50 Q30,65 50,60 L50,10"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="relative z-10">
        <h2 className="font-serif text-3xl md:text-4xl text-slate-800 mb-6 text-center leading-tight">
          Where it all began
        </h2>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className="order-2 md:order-1">
            <p className="font-sans text-base md:text-lg text-slate-700 leading-relaxed mb-4">
              This is where our story started, where two paths crossed and became
              one beautiful journey. Every moment since has been a treasure, and
              it all began right here.
            </p>
            <p className="font-sans text-base md:text-lg text-slate-700 leading-relaxed mb-4">
              I remember the first time I saw you, the way you smiled, the way
              you laughed. That moment changed everything for me.
            </p>

            <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200 mt-6">
              <MapPin className="w-6 h-6 text-teal-600" />
              <div>
                <p className="text-sm font-medium text-slate-600">
                  Special Location
                </p>
                <p className="text-xs text-slate-500">Map coming soon</p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-amber-200/50">
              <img
                src="/images/first-meet/place.jpg"
                alt="The place where we first met"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
