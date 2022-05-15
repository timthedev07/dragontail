import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";
import { TextboxSharedProps } from "../../types/TextboxSharedProps";
import { forwardRef } from "../../utils/forwardRef";
import { useFormControl } from "../form-control/FormControl";
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
      TextareaHTMLAttributes<HTMLTextAreaElement>,
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

export const Textarea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      variant: propsVariant = "solid",
      className = "",
      theme: propsTheme,
      isDisabled: disabled = false,
      isInvalid: invalid = false,
      isRequired: required = false,
      resize = "none",
      ...props
    },
    ref
  ) => {
    const { isDisabled, isInvalid, theme, variant, label } = useFormControl(
      "input-field",
      {
        isDisabled: disabled,
        isInvalid: invalid,
        isRequired: required,
        theme: propsTheme,
        variant: propsVariant,
      }
    );

    return (
      <textarea
        id={label}
        aria-labelledby={props.name ? props.name : props.placeholder}
        ref={ref}
        {...props}
        disabled={isDisabled}
        className={`${className} ${RESIZE[resize]} ${disabledClasses(
          isDisabled
        )} ${invalidClasses(isInvalid, theme, variant === "solid")} ${
          INPUT_DEFAULT_PADDING[variant]
        } ${INPUT_CORNER_ROUNDING[variant]["all"]} ${
          TEXTAREA_VARIANTS[variant]
        } ${TEXTAREA_BASE[theme][variant]} ${RESIZE[resize]}`}
      ></textarea>
    );
  }
);
