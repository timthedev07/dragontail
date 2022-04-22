import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { DragontailThemeType, useDragontail } from "../../context/ThemeContext";
import { CSType } from "../../types/Colors";
import { ButtonVariants } from "../../types/Variants";

export interface CustomButtonProps {
  color?: CSType;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  variant?: ButtonVariants;
  focusEffect?: boolean;
  theme?: DragontailThemeType;
  isDisabled?: boolean;
}

const ENABLED_STYLES: Record<
  "solid" | "ghost",
  Record<CSType | "neutral-dark", string>
> = {
  solid: {
    cyan: "hover:bg-cyan-400 focus:bg-cyan-500",
    dark: "hover:bg-slate-700 focus:bg-slate-900",
    light: "hover:bg-neutral-50 focus:bg-slate-100",
    orange: "hover:bg-orange-400 focus:bg-orange-600",
    red: "hover:bg-red-500 focus:bg-red-700",
    sky: "hover:bg-sky-400 focus:bg-sky-600",
    teal: "hover:bg-teal-400 focus:bg-teal-500",
    emerald: "hover:bg-emerald-400 focus:bg-emerald-600",
    green: "hover:bg-green-400 focus:bg-green-600",
    neutral: "hover:bg-slate-300 focus:bg-slate-300",
    "neutral-dark": "hover:bg-slate-400 focus:bg-slate-600",
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
    "neutral-dark": "hover:bg-slate-400",
  },
};

const COLORS: Record<
  Exclude<ButtonVariants, "link">,
  Record<CSType | "neutral-dark", string>
> = {
  solid: {
    cyan: "bg-cyan-500/90 text-slate-100",
    dark: "bg-slate-800 text-slate-100",
    light: "bg-neutral-100 text-black",
    orange: "bg-orange-500 text-slate-100",
    red: "bg-red-600 text-slate-100",
    sky: "bg-sky-500 text-slate-100",
    teal: "bg-teal-500/90 text-slate-100",
    emerald: "bg-emerald-500 text-slate-100",
    green: "bg-green-500 text-slate-100",
    neutral: "bg-slate-200 text-slate-700",
    "neutral-dark": "bg-slate-500 text-slate-100",
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

const BASE_BUTTON = "px-4 py-2 rounded-md flex items-center gap-2";

export type ButtonProps = DetailedHTMLProps<
  HTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  CustomButtonProps;

export const Button: FC<ButtonProps> = ({
  children,
  isDisabled = false,
  leftIcon,
  rightIcon,
  variant = "solid",
  color,
  className,
  theme,
  focusEffect = true,
  ...props
}) => {
  const defaultTheme = useDragontail();
  const currentTheme = theme ? theme : defaultTheme;
  const chosenColor =
    (color || "teal") +
    (currentTheme === "dark" && color === "neutral" ? "-dark" : "");

  return (
    <button
      className={`${className || ""} min-w-fit ${
        theme === "dark" && "bg-opacity-75"
      } transition-colors duration-200 ${
        isDisabled
          ? `cursor-not-allowed text-opacity-70`
          : `${
              variant === "ghost" || variant === "solid"
                ? ENABLED_STYLES[variant][chosenColor]
                : variant === "outline"
                ? ENABLED_STYLES["ghost"][chosenColor]
                : ""
            }`
      } ${
        leftIcon === undefined && rightIcon === undefined
          ? "justify-center"
          : "justify-start"
      } ${BASE_BUTTON} ${
        variant === "solid"
          ? ` hey ${COLORS.solid[chosenColor]} ${
              focusEffect
                ? "focus:outline-offset-2 focus:outline focus:outline-2 focus:outline-blue-600"
                : "focus:outline-none"
            }`
          : variant === "link"
          ? `${COLORS.ghost[chosenColor]} ${
              !isDisabled && "hover:underline"
            } no-underline bg-transparent border-none outline-none`
          : variant === "ghost"
          ? `transition duration-200 ${
              currentTheme === "dark"
                ? "hover:bg-opacity-30"
                : "hover:bg-opacity-50"
            } bg-transparent  ${COLORS.ghost[chosenColor]}`
          : `border transition-colors duration-200 hover:outline-none hover:bg-opacity-30 bg-transparent ${COLORS.ghost[chosenColor]} ${COLORS.outline[chosenColor]}`
      }`}
      disabled={isDisabled}
      {...props}
    >
      {leftIcon ? (
        <div
          className={`w-4 h-4 flex justify-center items-center ${
            variant === "solid"
              ? currentTheme === "dark"
                ? "text-black"
                : "text-white"
              : COLORS.ghost[chosenColor]
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
              ? currentTheme === "dark"
                ? "text-black"
                : "text-white"
              : COLORS.ghost[chosenColor]
          }`}
        >
          {rightIcon}
        </div>
      ) : null}
    </button>
  );
};
