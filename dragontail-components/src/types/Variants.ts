export const ButtonVariantsValues = [
  "outline",
  "solid",
  "link",
  "ghost",
] as const;
export type ButtonVariants = typeof ButtonVariantsValues[number];
export type InputVariants = "outline" | "solid" | "underline";
