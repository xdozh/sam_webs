import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export function getTodayDateString(): string {
  const today = new Date();
  return today.toISOString().split('T')[0];
}

export function getRandomMessageIndex(totalMessages: number, date: string): number {
  const hash = date.split('').reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 5) - acc);
  }, 0);
  return Math.abs(hash) % totalMessages;
}

export async function getTodayMessageIndex(totalMessages: number): Promise<number> {
  const todayDate = getTodayDateString();

  const { data, error } = await supabase
    .from('daily_notes')
    .select('message_index')
    .eq('date', todayDate)
    .maybeSingle();

  if (error) {
    console.error('Error fetching daily note:', error);
    return getRandomMessageIndex(totalMessages, todayDate);
  }

  if (data) {
    return data.message_index;
  }

  const randomIndex = getRandomMessageIndex(totalMessages, todayDate);

  const { error: insertError } = await supabase
    .from('daily_notes')
    .insert({
      date: todayDate,
      message_index: randomIndex,
    });

  if (insertError) {
    console.error('Error saving daily note:', insertError);
  }

  return randomIndex;
}

export function getFormattedDate(date: Date = new Date()): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}
