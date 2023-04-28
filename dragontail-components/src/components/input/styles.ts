import { DragontailThemeType } from "../../context/ThemeContext";
import { CornerRoundingType } from "../../types/CornerRounding";
import { DragontailSizeType } from "../../types/Sizes";
import { InputVariants } from "../../types/Variants";

const BASE =
  "w-full py-2 focus:bg-inherit outline-none transition-all duration-300 focus:outline-none placeholder:opacity-100 focus:placeholder:opacity-0";

export const DARK_BASE = BASE + " focus:border-sky-400/100 text-white";

export const LIGHT_BASE = BASE + " focus:border-sky-500/100 text-black";

export const disabledClasses = (isDisabled: boolean) => {
  return isDisabled
    ? "cursor-not-allowed placeholder:opacity-30 border-opacity-40"
    : "";
};

export const toggleBorder = (
  isInvalid: boolean,
  theme: DragontailThemeType,
  variant: InputVariants
) => {
  const plainBorderColor =
    theme === "dark" ? "border-gray-600/40" : "border-gray-300/80";
  // if (isInvalid) {
  // } else {
  //   if (variant === "outline") return "border-gray-500/0";
  //   if (variant === "underline") {
  //     if (theme === "dark") {
  //       return "border-b-gray-600/40";
  //     } else {
  //       return "border-b-gray-300/80";
  //     }
  //   }
  //   if (theme === "dark") {
  //     return "";
  //   } else {
  //     return "border-gray-300/80";
  //   }
  // }
  if (isInvalid) {
    return INPUT_VARIANTS_BORDER[variant] + " border-red-600";
  } else {
    return INPUT_VARIANTS_BORDER[variant] + " " + plainBorderColor;
  }
};

export const INPUT_BASE: Record<
  DragontailThemeType,
  Record<InputVariants, string>
> = {
  dark: {
    outline: `${DARK_BASE} bg-inherit`,
    solid: `${DARK_BASE} bg-neutral-50/[.06]`,
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

export const INPUT_DEFAULT_PADDING: Record<InputVariants, string> = {
  outline: "px-3",
  solid: "px-3",
  underline: "px-0",
};

export const INPUT_VARIANTS_BORDER: Record<InputVariants, string> = {
  outline: "border-2",
  solid: "border-2",
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
    all: "",
    left: "rounded-tl-md",
    none: "rounded-none",
    right: "rounded-tr-md",
  },
};
