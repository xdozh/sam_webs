export function getDayOfYear(date: Date = new Date()): number {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

export function getFormattedDate(date: Date = new Date()): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export function getDailyMessageIndex(messages: string[]): number {
  const dayOfYear = getDayOfYear();
  return (dayOfYear - 1) % messages.length;
}

export function getRandomMessageIndex(messages: string[], excludeIndex?: number): number {
  let randomIndex = Math.floor(Math.random() * messages.length);
  if (excludeIndex !== undefined && messages.length > 1) {
    while (randomIndex === excludeIndex) {
      randomIndex = Math.floor(Math.random() * messages.length);
    }
  }
  return randomIndex;
}
