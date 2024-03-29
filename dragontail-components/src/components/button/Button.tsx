import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { ThemeType, useTheme } from "../../context/ThemeContext";
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
  theme?: ThemeType;
  scale?: DragontailSizeType;
  isDisabled?: boolean;
}

const ENABLED_STYLES: Record<
  ThemeType,
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
      emerald: "hover:bg-emerald-600",
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
      cyan: "hocus:bg-cyan-600",
      dark: "hocus:bg-slate-700",
      light: "hocus:bg-neutral-50",
      orange: "hocus:bg-orange-600",
      red: "hocus:bg-red-600",
      sky: "hocus:bg-sky-600",
      teal: "hocus:bg-teal-600",
      emerald: "hocus:bg-emerald-600",
      green: "hocus:bg-green-600",
      neutral: "",
      "neutral-dark": "hocus:bg-slate-500/75 focus:bg-slate-400/60",
    },
    ghost: {
      cyan: "hover:bg-cyan-200",
      dark: "hover:bg-slate-800",
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

const COLORS = (variant: ButtonVariants, color: CSType, theme: ThemeType) => {
  const TEXT = theme === "dark" ? "text-slate-900" : "text-slate-50";
  const NON_SOLID_TEXT = theme !== "dark" ? "text-slate-900" : "text-slate-50";
  const ghostOrLink = {
    cyan: "text-cyan-500",
    dark: NON_SOLID_TEXT,
    light: NON_SOLID_TEXT,
    orange: "text-orange-500",
    red: "text-red-500",
    sky: "text-sky-500",
    teal: "text-teal-500",
    emerald: "text-emerald-500",
    green: "text-green-500",
    neutral: "text-slate-700",
    "neutral-dark": "text-slate-200",
  };
  const colors = {
    solid: {
      cyan: `bg-cyan-500/90 ${TEXT}`,
      dark: `bg-slate-800 text-slate-50`,
      light: `bg-neutral-100 text-slate-900`,
      orange: `bg-orange-500 ${TEXT}`,
      red: `bg-red-500 ${TEXT}`,
      sky: `bg-sky-500 ${TEXT}`,
      teal: `bg-teal-500/90 ${TEXT}`,
      emerald: `bg-emerald-500 ${TEXT}`,
      green: `bg-green-500 ${TEXT}`,
      neutral: `bg-slate-200 text-slate-700`,
      "neutral-dark": `bg-slate-500/60 text-slate-100`,
    },
    ghost: ghostOrLink,
    outline: {
      cyan: "border-cyan-600",
      dark: "border-slate-900",
      light: "border-slate-50",
      orange: "border-orange-600",
      red: "border-red-600",
      sky: "border-sky-600",
      teal: "border-teal-600",
      emerald: "border-emerald-600",
      green: "border-green-600",
      neutral: "border-slate-400",
      "neutral-dark": "border-slate-500",
    },
    link: ghostOrLink,
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
    const { theme: defaultTheme, disableButtonFocusRing } = useTheme();
    const currentTheme = theme ? theme : defaultTheme;
    const chosenColor =
      (color || "teal") +
      (currentTheme === "dark" && color === "neutral" ? "-dark" : "");

    return (
      <button
        ref={ref}
        className={`${
          className || ""
        } font-medium transition-all duration-200 ease-in-out ${
          SIZES[scale]
        } min-w-fit ${theme === "dark" ? "brightness-[1.2]" : ""} ${
          isDisabled
            ? `cursor-not-allowed text-opacity-70`
            : `${
                variant === "ghost" || variant === "solid"
                  ? ENABLED_STYLES[currentTheme][variant][chosenColor as CSType]
                  : variant === "outline"
                  ? ENABLED_STYLES[currentTheme]["ghost"][chosenColor as CSType]
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
            ? ` ${
                currentTheme === "dark"
                  ? "hover:bg-opacity-30"
                  : "hover:bg-opacity-50"
              } bg-transparent  ${COLORS(
                "ghost",
                chosenColor as any,
                currentTheme
              )}`
            : `border hover:outline-none hover:bg-opacity-30 bg-transparent ${COLORS(
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
