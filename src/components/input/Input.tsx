import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from "react";
import { DragontailThemeType, useDragontail } from "../../context/ThemeContext";
import { DragontailSizeType } from "../../types/Sizes";
import { InputVariants } from "../../types/Variants";
import {
  INPUT_BASE,
  INPUT_CORNER_ROUNDING,
  INPUT_SIZES,
  INPUT_VARIANTS,
} from "./styles";

export interface CustomInputProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  leftAddon?: ReactNode;
  rightAddon?: ReactNode;
  variant?: InputVariants;
  theme?: DragontailThemeType;
  size?: DragontailSizeType;
  leftElement?: ReactNode;
  rightElement?: ReactNode;
}

export const Input: FC<CustomInputProps> = ({
  children,
  leftAddon,
  rightAddon,
  variant = "solid",
  color,
  theme,
  className,
  size = "md",
  leftElement,
  rightElement,
  ...props
}) => {
  const defaultTheme = useDragontail();
  const ADDON_CLASS = `p-2 flex justify-center items-center ${
    INPUT_SIZES[size]
  } ${
    (theme ? theme : defaultTheme) === "dark"
      ? "bg-slate-600 text-white"
      : "bg-slate-200 text-slate-700"
  }`;
  const ELEMENT_CLASS = `absolute ${INPUT_SIZES[size]} w-10 font-sans flex justify-center items-center bg-inherit`;

  return (
    <div className="relative flex justify-center items-center">
      {leftAddon ? (
        <div className={`${ADDON_CLASS} rounded-l-md`}>{leftAddon}</div>
      ) : null}
      {leftElement ? (
        <div className={`${ELEMENT_CLASS} left-0`}>{leftElement}</div>
      ) : null}
      <input
        className={`${className || ""} ${
          leftElement && rightElement
            ? "px-10"
            : leftElement
            ? "pl-10"
            : rightElement
            ? "pr-10"
            : ""
        } ${INPUT_BASE[theme || defaultTheme][variant]} ${INPUT_SIZES[size]} ${
          INPUT_VARIANTS[variant]
        } ${
          INPUT_CORNER_ROUNDING[variant][
            leftAddon && rightAddon
              ? "none"
              : leftAddon
              ? "right"
              : rightAddon
              ? "left"
              : "all"
          ]
        }`}
        {...props}
      />
      {rightElement ? (
        <div className={`${ELEMENT_CLASS} right-0`}>{rightElement}</div>
      ) : null}
      {rightAddon ? (
        <div className={`${ADDON_CLASS} rounded-r-md`}>{rightAddon}</div>
      ) : null}
    </div>
  );
};
