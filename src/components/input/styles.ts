import { DragontailThemeType } from "../../context/ThemeContext";
import { DragontailSizeType } from "../../types/Sizes";
import { InputVariants } from "../../types/Variants";

const BASE =
  "w-full py-2 px-3 bg-inherit outline-none transition-all duration-300 focus:outline-none placeholder:opacity-100 focus:placeholder:opacity-0";

export const INPUT_BASE: Record<DragontailThemeType, string> = {
  dark:
    BASE +
    " focus:bg-inherit bg-slate-700 border-gray-500 focus:border-sky-400/100 text-white",
  light:
    BASE +
    " focus:bg-inherit bg-slate-100 border-gray-300 focus:border-sky-500/100 text-black",
};

export const INPUT_SIZES: Record<DragontailSizeType, string> = {
  sm: "h-6 text-xs",
  md: "h-10 text-base",
  lg: "h-12 text-lg",
  xl: "h-14 text-lg",
};

export const INPUT_VARIANTS: Record<InputVariants, string> = {
  outline: "rounded-md border-2",
  solid: "rounded-md border-2 border-gray-500/0",
  underline: "rounded-none border-b-2",
};
