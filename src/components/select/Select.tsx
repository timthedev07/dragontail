import { DetailedHTMLProps, FC, SelectHTMLAttributes } from "react";
import { DragontailThemeType } from "../../context/ThemeContext";
import { TextboxSharedProps } from "../../types/TextboxSharedProps";
import { InputVariants } from "../../types/Variants";
import { useFormControl } from "../form-control/FormControl";
import {
  INPUT_CORNER_ROUNDING,
  INPUT_DEFAULT_PADDING,
  INPUT_VARIANTS_BORDER,
} from "../input/styles";

export interface SelectProps
  extends DetailedHTMLProps<
      SelectHTMLAttributes<HTMLSelectElement>,
      HTMLSelectElement
    >,
    TextboxSharedProps {}

const VARIANT_BASE_STYLES: Record<InputVariants, string> = {
  outline: "p-2 px-3 bg-inherit",
  solid: "p-2 px-3 bg-slate-100",
  underline: "p-2 px-0 bg-inherit",
};

const VARIANT_STYLES: Record<
  InputVariants,
  Record<DragontailThemeType | "invalid", string>
> = {
  outline: {
    dark: "",
    light: "",
    invalid: "",
  },
  solid: {
    dark: "",
    light: "",
    invalid: "",
  },
  underline: {
    dark: "",
    light: "",
    invalid: "",
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
      className={`appearance-none focus:outline-none ${
        INPUT_VARIANTS_BORDER[variant]
      } ${INPUT_CORNER_ROUNDING[variant].all} ${
        INPUT_DEFAULT_PADDING[variant]
      } ${VARIANT_BASE_STYLES[variant]} ${
        VARIANT_STYLES[variant][isInvalid ? "invalid" : theme]
      }`}
      disabled={isDisabled}
    ></select>
  );
};
