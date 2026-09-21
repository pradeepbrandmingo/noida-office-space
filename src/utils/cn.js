import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Standard utility to conditionally combine Tailwind classes
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
