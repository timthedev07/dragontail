import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { DragontailThemeType, useDragontail } from "../../context/ThemeContext";
import { CSType } from "../../types/Colors";
import { DragontailSizeType } from "../../types/Sizes";
import { ButtonVariants } from "../../types/Variants";
import { forwardRef } from "../../utils/forwardRef";

export interface CustomButtonProps {
  color?: CSType;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  variant?: ButtonVariants;
  focusEffect?: boolean;
  theme?: DragontailThemeType;
  scale?: DragontailSizeType;
  isDisabled?: boolean;
}

const ENABLED_STYLES: Record<
  DragontailThemeType,
  Record<"solid" | "ghost", Record<CSType | "neutral-dark", string>>
> = {
  light: {
    solid: {
      cyan: "hover:bg-cyan-600",
      dark: "hover:bg-slate-900",
      light: "hover:bg-neutral-200",
      orange: "hover:bg-orange-600",
      red: "hover:bg-red-700",
      sky: "hover:bg-sky-600",
      teal: "hover:bg-teal-600",
      emerald: "hover:bg-emerald-400",
      green: "hover:bg-green-600",
      neutral: "hover:bg-slate-300 focus:bg-slate-400/60",
      "neutral-dark": "",
    },
    ghost: {
      cyan: "hover:bg-cyan-200",
      dark: "hover:bg-slate-600",
      light: "hover:bg-slate-200",
      orange: "hover:bg-orange-200",
      red: "hover:bg-red-200",
      sky: "hover:bg-sky-200",
      teal: "hover:bg-teal-200",
      emerald: "hover:bg-emerald-200",
      green: "hover:bg-green-200",
      neutral: "hover:bg-slate-400",
      "neutral-dark": "",
    },
  },
  dark: {
    solid: {
      cyan: "hover:bg-cyan-400 focus:bg-cyan-400",
      dark: "hover:bg-slate-700 focus:bg-slate-700",
      light: "hover:bg-neutral-50 focus:bg-slate-50",
      orange: "hover:bg-orange-400 focus:bg-orange-400",
      red: "hover:bg-red-500 focus:bg-red-500",
      sky: "hover:bg-sky-400 focus:bg-sky-400",
      teal: "hover:bg-teal-400 focus:bg-teal-400",
      emerald: "hover:bg-emerald-400 focus:bg-emerald-400",
      green: "hover:bg-green-400 focus:bg-green-400",
      neutral: "",
      "neutral-dark": "hover:bg-slate-500/75 focus:bg-slate-400/60",
    },
    ghost: {
      // need further modification
      cyan: "hover:bg-cyan-200",
      dark: "hover:bg-slate-600",
      light: "hover:bg-slate-200",
      orange: "hover:bg-orange-200",
      red: "hover:bg-red-200",
      sky: "hover:bg-sky-200",
      teal: "hover:bg-teal-200",
      emerald: "hover:bg-emerald-200",
      green: "hover:bg-green-200",
      neutral: "",
      "neutral-dark": "hover:bg-slate-400",
    },
  },
};

const COLORS = (
  variant: ButtonVariants,
  color: CSType,
  theme: DragontailThemeType
) => {
  const TEXT = theme === "dark" ? "text-slate-900" : "text-slate-50";

  const colors = {
    solid: {
      cyan: `bg-cyan-500/90 ${TEXT}`,
      dark: `bg-slate-800 text-slate-50`,
      light: `bg-neutral-100 text-slate-900`,
      orange: `bg-orange-500 ${TEXT}`,
      red: `bg-red-600 ${TEXT}`,
      sky: `bg-sky-500 ${TEXT}`,
      teal: `bg-teal-500/90 ${TEXT}`,
      emerald: `bg-emerald-500 ${TEXT}`,
      green: `bg-green-500 ${TEXT}`,
      neutral: `bg-slate-200 text-slate-700`,
      "neutral-dark": `bg-slate-500/60 text-slate-100`,
    },
    ghost: {
      cyan: "text-cyan-500",
      dark: "text-slate-900",
      light: "text-slate-900",
      orange: "text-orange-500",
      red: "text-red-500",
      sky: "text-sky-500",
      teal: "text-teal-500",
      emerald: "text-emerald-500",
      green: "text-green-500",
      neutral: "text-slate-700",
      "neutral-dark": "text-slate-200",
    },
    outline: {
      cyan: "border-cyan-600",
      dark: "border-slate-900",
      light: "border-slate-400",
      orange: "border-orange-600",
      red: "border-red-600",
      sky: "border-sky-600",
      teal: "border-teal-600",
      emerald: "border-emerald-600",
      green: "border-green-600",
      neutral: "border-slate-400",
      "neutral-dark": "border-slate-500",
    },
  };
  return colors[variant][color];
};

const SIZES: Record<DragontailSizeType, string> = {
  lg: "px-5 py-3 gap-2",
  md: "px-4 py-2 gap-2",
  sm: "px-2 py-2 gap-1 text-xs",
  xl: "px-6 py-3 gap-3 text-lg",
};

const BASE_BUTTON = "rounded-md flex items-center";

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  CustomButtonProps;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      isDisabled = false,
      leftIcon,
      rightIcon,
      variant = "solid",
      color,
      className,
      theme,
      focusEffect = true,
      scale = "md",
      ...props
    },
    ref
  ) => {
    const { theme: defaultTheme, disableButtonFocusRing } = useDragontail();
    const currentTheme = theme ? theme : defaultTheme;
    const chosenColor =
      (color || "teal") +
      (currentTheme === "dark" && color === "neutral" ? "-dark" : "");

    return (
      <button
        ref={ref}
        className={`${className || ""} ${SIZES[scale]} min-w-fit ${
          theme === "dark" ? "brightness-125" : ""
        } transition-colors duration-200 ${
          isDisabled
            ? `cursor-not-allowed text-opacity-70`
            : `${
                variant === "ghost" || variant === "solid"
                  ? ENABLED_STYLES[currentTheme][variant][chosenColor]
                  : variant === "outline"
                  ? ENABLED_STYLES[currentTheme]["ghost"][chosenColor]
                  : ""
              }`
        } ${
          leftIcon === undefined && rightIcon === undefined
            ? "justify-center"
            : "justify-start"
        } ${BASE_BUTTON} ${
          variant === "solid"
            ? `${COLORS("solid", chosenColor as any, currentTheme)} ${
                !disableButtonFocusRing && focusEffect
                  ? "focus:outline-offset-2 focus:outline focus:outline-2 focus:outline-blue-600"
                  : "focus:outline-none"
              }`
            : variant === "link"
            ? `${COLORS("ghost", chosenColor as any, currentTheme)} ${
                !isDisabled && "hover:underline"
              } no-underline bg-transparent border-none outline-none`
            : variant === "ghost"
            ? `transition duration-200 ${
                currentTheme === "dark"
                  ? "hover:bg-opacity-30"
                  : "hover:bg-opacity-50"
              } bg-transparent  ${COLORS(
                "ghost",
                chosenColor as any,
                currentTheme
              )}`
            : `border transition-colors duration-200 hover:outline-none hover:bg-opacity-30 bg-transparent ${COLORS(
                "ghost",
                chosenColor as any,
                currentTheme
              )} ${COLORS("outline", chosenColor as any, currentTheme)}`
        }`}
        disabled={isDisabled}
        {...props}
      >
        {leftIcon ? (
          <div
            className={`w-4 h-4 flex justify-center items-center ${
              variant === "solid"
                ? chosenColor === "light" || chosenColor === "neutral"
                  ? "text-black"
                  : "text-white"
                : COLORS("ghost", chosenColor as any, currentTheme)
            }`}
          >
            {leftIcon}
          </div>
        ) : null}
        {children}
        {rightIcon ? (
          <div
            className={`w-4 h-4 flex justify-center items-center ${
              variant === "solid"
                ? chosenColor === "light" || chosenColor === "neutral"
                  ? "text-black"
                  : "text-white"
                : COLORS("ghost", chosenColor as any, currentTheme)
            }`}
          >
            {rightIcon}
          </div>
        ) : null}
      </button>
    );
  }
);
