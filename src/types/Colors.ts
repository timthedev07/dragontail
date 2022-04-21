export const CSTypeValues = [
  "sky",
  "teal",
  "red",
  "orange",
  "dark",
  "light",
  "cyan",
  "emerald",
  "green",
  "neutral",
] as const;
export type CSType = typeof CSTypeValues[number];
