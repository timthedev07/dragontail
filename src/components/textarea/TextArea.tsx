import { FC, DetailedHTMLProps, HTMLAttributes } from "react";
import { DragontailThemeType, useDragontail } from "../../context/ThemeContext";
import { InputVariants } from "../../types/Variants";
import { INPUT_CORNER_ROUNDING } from "../input/styles";
import { TEXTAREA_BASE, TEXTAREA_VARIANTS } from "./styles";

export interface TextAreaProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  variant?: InputVariants;
  theme?: DragontailThemeType;
}

export const Textarea: FC<TextAreaProps> = ({
  variant = "solid",
  className = "",
  theme,
  ...props
}) => {
  const defaultTheme = useDragontail();
  return (
    <textarea
      {...props}
      className={`${className} ${INPUT_CORNER_ROUNDING[variant]["all"]} ${
        TEXTAREA_VARIANTS[variant]
      } ${TEXTAREA_BASE[theme || defaultTheme][variant]}`}
    ></textarea>
  );
};
