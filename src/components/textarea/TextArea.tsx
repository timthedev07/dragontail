import { FC, DetailedHTMLProps, HTMLAttributes } from "react";
import { DragontailThemeType, useDragontail } from "../../context/ThemeContext";
import { InputVariants } from "../../types/Variants";
import { TEXTAREA_BASE } from "./styles";

export interface TextAreaProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  variant?: InputVariants;
  theme?: DragontailThemeType;
}

export const TextArea: FC<TextAreaProps> = ({
  variant,
  className,
  theme,
  ...props
}) => {
  const defaultTheme = useDragontail();
  return (
    <textarea
      {...props}
      className={`${className} ${TEXTAREA_BASE[theme || defaultTheme]}`}
    ></textarea>
  );
};
