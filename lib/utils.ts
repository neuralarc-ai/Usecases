import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Prevents single-word orphans by replacing spaces with non-breaking spaces
 * This ensures at least 2 words stay together on the last line
 */
export function preventOrphans(text: string): string {
  if (!text || text.trim().length === 0) return text;
  
  const words = text.trim().split(/\s+/);
  
  // If there are 2 or fewer words, return as is
  if (words.length <= 2) return text;
  
  // If there are 3 words, join last 2 with non-breaking space
  if (words.length === 3) {
    return `${words[0]} ${words[1]}\u00A0${words[2]}`;
  }
  
  // For 4+ words, join last 2 with non-breaking space
  const lastTwoWords = words.slice(-2).join('\u00A0'); // \u00A0 is non-breaking space
  const restOfText = words.slice(0, -2).join(' ');
  
  return `${restOfText} ${lastTwoWords}`;
}



