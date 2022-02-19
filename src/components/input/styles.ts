import { DragontailThemeType } from "../../context/ThemeContext";
import { CornerRoundingType } from "../../types/CornerRounding";
import { DragontailSizeType } from "../../types/Sizes";
import { InputVariants } from "../../types/Variants";

const BASE =
  "w-full py-2 focus:bg-inherit bg-inherit outline-none transition-all duration-300 focus:outline-none placeholder:opacity-100 focus:placeholder:opacity-0";

const DARK_BASE = BASE + " border-gray-500 focus:border-sky-400/100 text-white";

const LIGHT_BASE =
  BASE + " border-gray-300 focus:border-sky-500/100 text-black";

export const INPUT_BASE: Record<
  DragontailThemeType,
  Record<InputVariants, string>
> = {
  dark: {
    outline: `${DARK_BASE} bg-inherit`,
    solid: `${DARK_BASE} bg-slate-700`,
    underline: `${DARK_BASE} bg-inherit`,
  },
  light: {
    outline: `${LIGHT_BASE} bg-inherit`,
    solid: `${LIGHT_BASE} bg-slate-100`,
    underline: `${LIGHT_BASE} bg-inherit`,
  },
};

export const INPUT_SIZES: Record<DragontailSizeType, string> = {
  sm: "h-6 text-xs",
  md: "h-10 text-base",
  lg: "h-12 text-lg",
  xl: "h-14 text-lg",
};

export const INPUT_VARIANTS: Record<InputVariants, string> = {
  outline: "border-2 px-3",
  solid: "border-2 border-gray-500/0 px-3",
  underline: "border-b-2",
};

const cornerShared = {
  all: "rounded-md",
  left: "rounded-l-md",
  none: "rounded-none",
  right: "rounded-r-md",
};

export const INPUT_CORNER_ROUNDING: Record<
  InputVariants,
  Record<CornerRoundingType, string>
> = {
  outline: cornerShared,
  solid: cornerShared,
  underline: {
    all: "rounded-t-md",
    left: "rounded-tl-md",
    none: "rounded-none",
    right: "rounded-tr-md",
  },
};
