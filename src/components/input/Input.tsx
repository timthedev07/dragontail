import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from "react";
import { DragontailThemeType, useDragontail } from "../../context/ThemeContext";
import { CornerRoundingType } from "../../types/CornerRounding";
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
  cornerRounding?: CornerRoundingType;
}

export const Input: FC<CustomInputProps> = ({
  children,
  leftAddon,
  rightAddon,
  variant = "solid",
  color,
  theme,
  cornerRounding = "all",
  className,
  size = "md",
  ...props
}) => {
  const defaultTheme = useDragontail();
  const ADDON_CLASS = `p-2 flex justify-center items-center ${
    INPUT_SIZES[size]
  } ${
    (theme ? theme : defaultTheme) === "dark"
      ? "bg-slate-500 text-white"
      : "bg-slate-200 text-slate-700"
  }`;

  return (
    <div className="relative flex justify-center items-center">
      {leftAddon ? (
        <div className={`${ADDON_CLASS} rounded-l-md`}>{leftAddon}</div>
      ) : null}
      <input
        className={`${className || ""} ${INPUT_BASE[theme || defaultTheme]} ${
          INPUT_SIZES[size]
        } ${INPUT_VARIANTS[variant]} ${
          INPUT_CORNER_ROUNDING[variant][cornerRounding]
        }`}
        {...props}
      />
      {rightAddon ? (
        <div className={`${ADDON_CLASS} rounded-r-md`}>{rightAddon}</div>
      ) : null}
    </div>
  );
};
