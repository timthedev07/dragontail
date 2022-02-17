import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { DragontailThemeType, useDragontail } from "../../context/ThemeContext";
import { DragontailSizeType } from "../../types/Sizes";
import { InputVariants } from "../../types/Variants";
import { INPUT_BASE, INPUT_SIZES, INPUT_VARIANTS } from "./styles";

export interface CustomInputProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  leftAddon?: JSX.Element;
  rightAddon?: JSX.Element;
  variant?: InputVariants;
  theme?: DragontailThemeType;
  size?: DragontailSizeType;
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
  ...props
}) => {
  const defaultTheme = useDragontail();
  return (
    <input
      className={`${className || ""} ${INPUT_BASE[theme || defaultTheme]} ${
        INPUT_SIZES[size]
      } ${INPUT_VARIANTS[variant]}`}
      {...props}
    />
  );
};
