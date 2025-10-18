// src/utils/dailyNoteService.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Only create the client if both values exist
const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

export function getTodayDateString(): string {
  const today = new Date();
  return today.toISOString().split('T')[0];
}

export function getRandomMessageIndex(totalMessages: number, date: string): number {
  const hash = date.split('').reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 5) - acc);
  }, 0);
  const idx = Math.abs(hash) % totalMessages;
  return idx;
}

// Use Supabase if configured; otherwise gracefully fall back
export async function getTodayMessageIndex(totalMessages: number): Promise<number> {
  const date = getTodayDateString();
  const fallbackIndex = getRandomMessageIndex(totalMessages, date);

  if (!supabase) return fallbackIndex;

  try {
    const { data, error } = await supabase
      .from('daily_notes')
      .select('index')
      .eq('date', date)
      .maybeSingle();

    if (error) throw error;

    if (data?.index != null) return data.index;

    // Not found → save and return fallback
    const { error: insertError } = await supabase
      .from('daily_notes')
      .insert({ date, index: fallbackIndex });

    if (insertError) console.error('Error saving daily note:', insertError);

    return fallbackIndex;
  } catch (e) {
    console.error('Supabase error:', e);
    return fallbackIndex;
  }
}

export function getFormattedDate(date: Date = new Date()): string {
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}
