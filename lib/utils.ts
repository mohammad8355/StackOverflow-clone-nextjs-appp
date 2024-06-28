import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const getTimestamp = (createdAt: Date): string => {
  const now = new Date();
  const diff = now.getTime() - createdAt.getTime();
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const years = Math.floor(days / 365);
  if (years > 0) {
    return `${years} year${years > 1 ? "s" : ""} ago`;
  } else if (days > 0) {
    return `${days} day${days > 1 ? "s" : ""} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else {
    return "just now";
  }
};

export function formatNumber(num: number): string {
  const abbreviations = ["", "K", "M", "B", "T"]; // Add more if needed
  const tier = (Math.log10(Math.abs(num)) / 3) | 0; // Determine the tier (K, M, B, etc.)

  if (tier === 0) return num.toString(); // No abbreviation needed for small numbers

  const suffix = abbreviations[tier];
  const scaledNum = num / Math.pow(10, tier * 3);

  // Format with up to 2 decimal places
  const formattedNum = scaledNum.toFixed(2);

  return `${formattedNum}${suffix}`;
}

// Example usage:
console.log(formatNumber(1000000)); // Outputs: "1M"
console.log(formatNumber(123456789)); // Outputs: "123.46M"
