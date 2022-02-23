import { FC, DetailedHTMLProps, HTMLAttributes } from "react";
import { useDragontail } from "../../context/ThemeContext";
import { TextboxSharedProps } from "../../types/TextboxSharedProps";
import {
  disabledClasses,
  INPUT_CORNER_ROUNDING,
  INPUT_DEFAULT_PADDING,
  invalidClasses,
} from "../input/styles";
import { TEXTAREA_BASE, TEXTAREA_VARIANTS } from "./styles";

export type ResizeType = "horizontal" | "vertical" | "none" | "both";

export interface TextAreaProps
  extends DetailedHTMLProps<
      HTMLAttributes<HTMLTextAreaElement>,
      HTMLTextAreaElement
    >,
    TextboxSharedProps {
  resize?: ResizeType;
}

const RESIZE: Record<ResizeType, string> = {
  horizontal: "resize-x",
  vertical: "resize-y",
  none: "resize-none",
  both: "resize",
};

export const Textarea: FC<TextAreaProps> = ({
  variant = "solid",
  className = "",
  theme,
  isDisabled = false,
  resize = "none",
  isInvalid = false,
  ...props
}) => {
  const defaultTheme = useDragontail();
  return (
    <textarea
      {...props}
      className={`${className} ${RESIZE[resize]} ${disabledClasses(
        isDisabled
      )} ${invalidClasses(
        isInvalid,
        theme || defaultTheme,
        variant === "solid"
      )} ${INPUT_DEFAULT_PADDING[variant]} ${
        INPUT_CORNER_ROUNDING[variant]["all"]
      } ${TEXTAREA_VARIANTS[variant]} ${
        TEXTAREA_BASE[theme || defaultTheme][variant]
      } ${RESIZE[resize]}`}
    ></textarea>
  );
};
