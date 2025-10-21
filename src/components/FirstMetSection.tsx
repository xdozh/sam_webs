import { MapPin } from 'lucide-react';

export default function FirstMetSection() {
  return (
    <div className="relative bg-white rounded-3xl p-6 md:p-12 shadow-2xl overflow-hidden">
      {/* Decorative SVGs */}
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

      {/* Content */}
      <div className="relative z-10">
        <h2 className="font-serif text-3xl md:text-4xl text-slate-800 mb-6 text-center leading-tight">
          Where it all began
        </h2>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className="order-2 md:order-1">
            <p className="font-sans text-base md:text-lg text-slate-700 leading-relaxed mb-4">
              Ohh take me back to the night we met. This is the place that will be engraved in my head and i'll never forget, because it was here where I realised that i found my woman.
            </p>
            <p className="font-sans text-base md:text-lg text-slate-700 leading-relaxed mb-4">
              This is the place where my life took the biggest turn, and I'm immensely blessed that I met you my lover. You are my world and I'm Forever grateful to have a woman like you my baby. We'll look back in the future and reminisce of this beautiful time. I love you with my whole heart. 
            </p>

            {/* Location Box */}
            <div className="flex flex-col gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200 mt-6">
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-teal-600" />
                <div>
                  <p className="text-sm font-medium text-slate-600">
                    Special Location
                  </p>
                  <p className="text-xs text-slate-500">
                    Flamingo Beach 🏖️
                  </p>
                </div>
              </div>

              {/* Embedded Google Map */}
              <div className="w-full h-64 rounded-lg overflow-hidden border border-slate-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14372.787313644933!2d55.91318330000001!3d25.7640615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef6746b347279bd%3A0x38b2d2fbf2efb951!2sFlamingo%20Beach!5e0!3m2!1sen!2sae!4v1761026440878!5m2!1sen!2sae"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-amber-200/50">
              <img
                src="/images/first-meet/Ruzo.png"
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
