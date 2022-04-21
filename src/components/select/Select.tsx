import { DetailedHTMLProps, FC, SelectHTMLAttributes } from "react";
import { DragontailThemeType } from "../../context/ThemeContext";
import { TextboxSharedProps } from "../../types/TextboxSharedProps";
import { InputVariants } from "../../types/Variants";
import { useFormControl } from "../form-control/FormControl";
import {
  INPUT_CORNER_ROUNDING,
  INPUT_DEFAULT_PADDING,
  INPUT_VARIANTS_BORDER,
  invalidClasses,
  LIGHT_BASE,
  DARK_BASE,
} from "../input/styles";

export interface SelectProps
  extends DetailedHTMLProps<
      SelectHTMLAttributes<HTMLSelectElement>,
      HTMLSelectElement
    >,
    TextboxSharedProps {}

const VARIANT_STYLES: Record<
  InputVariants,
  Record<DragontailThemeType, string>
> = {
  outline: {
    dark: DARK_BASE + " bg-inherit",
    light: LIGHT_BASE + " bg-inherit",
  },
  solid: {
    dark: DARK_BASE + " bg-neutral-50/[.06]",
    light: LIGHT_BASE + " bg-slate-100",
  },
  underline: {
    dark: DARK_BASE + " bg-inherit",
    light: LIGHT_BASE + " bg-inherit",
  },
};

export const Select: FC<SelectProps> = (props) => {
  const { isDisabled, isInvalid, variant, theme } = useFormControl(
    "input-field",
    props
  );

  return (
    <select
      {...props}
      className={`appearance-none focus:outline-none ${invalidClasses(
        isInvalid,
        theme,
        variant === "solid"
      )} ${INPUT_VARIANTS_BORDER[variant]} ${
        INPUT_CORNER_ROUNDING[variant].all
      } ${INPUT_DEFAULT_PADDING[variant]} ${VARIANT_STYLES[variant][theme]}`}
      disabled={isDisabled}
    ></select>
  );
};
