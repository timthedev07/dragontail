import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { DragontailThemeType, useDragontail } from "../../context/ThemeContext";
import { InputVariants } from "../../types/Variants";
import { INPUT_BASE } from "./Style";

export interface CustomInputProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  leftAddon?: JSX.Element;
  rightAddon?: JSX.Element;
  variant?: InputVariants;
  theme?: DragontailThemeType;
}

export const Input: FC<CustomInputProps> = ({
  children,
  leftAddon,
  rightAddon,
  variant,
  color,
  theme,
  ...props
}) => {
  const defaultTheme = useDragontail();
  return (
    <input className={`${INPUT_BASE[theme || defaultTheme]}`} {...props} />
  );
};
