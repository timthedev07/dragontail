import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { useDragontail } from "../../context/ThemeContext";
import { CSType } from "../../types/Colors";
import { ButtonVariants } from "../../types/Variants";

export interface CustomButtonProps {
  color?: CSType;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  variant?: ButtonVariants;
  focusEffect?: boolean;
}

const COLORS: Record<ButtonVariants, Record<CSType | "neutral-dark", string>> =
  {
    solid: {
      cyan: "bg-cyan-400 hover:bg-cyan-300 focus:bg-cyan-500 text-white",
      dark: "bg-slate-800 hover:bg-slate-700 focus:bg-slate-900 text-white",
      light: "bg-neutral-100 hover:bg-neutral-50 focus:bg-slate-100 text-black",
      orange:
        "bg-orange-500 hover:bg-orange-400 focus:bg-orange-600 text-white",
      red: "bg-red-600 hover:bg-red-500 focus:bg-red-700 text-white",
      sky: "bg-sky-500 hover:bg-sky-400 focus:bg-sky-600 text-white",
      teal: "bg-teal-400 hover:bg-teal-300 focus:bg-teal-500 text-white",
      emerald:
        "bg-emerald-500 hover:bg-emerald-400 focus:bg-emerald-600 text-white",
      green: "bg-green-500 hover:bg-green-400 focus:bg-green-600 text-white",
      neutral:
        "bg-slate-200 hover:bg-slate-300 focus:bg-slate-300 text-slate-700",
      "neutral-dark":
        "bg-slate-500 hover:bg-slate-400 focus:bg-slate-600 text-white",
    },
    link: {
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
    ghost: {
      cyan: "text-cyan-500 hover:bg-cyan-200",
      dark: "text-slate-900 hover:bg-slate-600",
      light: "text-slate-900 hover:bg-slate-200",
      orange: "text-orange-500 hover:bg-orange-200",
      red: "text-red-500 hover:bg-red-200",
      sky: "text-sky-500 hover:bg-sky-200",
      teal: "text-teal-500 hover:bg-teal-200",
      emerald: "text-emerald-500 hover:bg-emerald-200",
      green: "text-green-500 hover:bg-green-200",
      neutral: "text-slate-700 hover:bg-slate-400",
      "neutral-dark": "text-slate-200 hover:bg-slate-400",
    },
    outline: {
      cyan: "outline-cyan-600",
      dark: "outline-slate-900",
      light: "outline-slate-400",
      orange: "outline-orange-600",
      red: "outline-red-600",
      sky: "outline-sky-600",
      teal: "outline-teal-600",
      emerald: "outline-emerald-600",
      green: "outline-green-600",
      neutral: "outline-slate-400",
      "neutral-dark": "outline-slate-500",
    },
  };

const BASE_BUTTON = "px-4 py-2 rounded-md flex items-center gap-2";

export const Button: FC<
  DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> &
    CustomButtonProps
> = ({
  children,
  leftIcon,
  rightIcon,
  variant,
  color,
  className,
  focusEffect = true,
  ...props
}) => {
  const theme = useDragontail();
  const chosenColor = (color || "teal") + (theme === "dark" ? "dark" : "");

  return (
    <button
      className={`
      ${
        leftIcon === undefined && rightIcon === undefined
          ? "justify-center"
          : "justify-start"
      }
      ${className || ""} ${BASE_BUTTON} ${
        variant === "solid" || !variant
          ? ` hey ${COLORS["solid"][chosenColor]} ${
              focusEffect
                ? "focus:outline-offset-2 focus:outline focus:outline-2 focus:outline-blue-600"
                : "focus:outline-none"
            }`
          : variant === "link"
          ? `${COLORS.link[chosenColor]} hover:underline no-underline bg-transparent border-none outline-none`
          : variant === "ghost"
          ? `transition duration-200 hover:bg-opacity-50 bg-transparent ${COLORS.ghost[chosenColor]}`
          : `transition-colors duration-200 hover:outline hover:outline-2 hover:bg-opacity-50 bg-transparent ${COLORS.ghost[chosenColor]} ${COLORS.outline[chosenColor]}`
      }`}
      {...props}
    >
      {leftIcon ? <div className="w-4 h-4">{leftIcon}</div> : null}
      {children}
      {rightIcon ? <div className="w-4 h-4">{rightIcon}</div> : null}
    </button>
  );
};