import { Heart } from 'lucide-react';

interface DailyMessageCardProps {
  message: string;
  dateLabel: string;
}

export default function DailyMessageCard({ message, dateLabel }: DailyMessageCardProps) {
  return (
    <div className="bg-gradient-to-br from-amber-50 to-rose-50 rounded-2xl p-6 md:p-8 shadow-xl border border-amber-200/50">
      <h3 className="font-serif text-xl md:text-2xl text-slate-800 mb-4 md:mb-6 text-center">
        Your Affirmations for today
      </h3>

      <div className="flex justify-center mb-4 md:mb-6">
        <Heart className="w-5 h-5 md:w-6 md:h-6 text-rose-400 fill-rose-400" />
      </div>

      <p className="font-sans text-base md:text-lg text-slate-700 text-center leading-relaxed mb-4 md:mb-6">
        {message}
      </p>

      <div className="flex justify-center mb-4 md:mb-6">
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-rose-300 to-transparent" />
      </div>

      <p className="text-center text-sm text-slate-500 italic">
        {dateLabel}
      </p>
    </div>
  );
}
