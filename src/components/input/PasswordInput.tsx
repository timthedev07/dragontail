import { useState } from "react";
import { forwardRef } from "../../utils/forwardRef";
import { Button } from "../button";
import { useFormControl } from "../form-control/FormControl";
import { CustomInputProps } from "./Input";
import {
  disabledClasses,
  INPUT_BASE,
  INPUT_CORNER_ROUNDING,
  INPUT_DEFAULT_PADDING,
  INPUT_SIZES,
  INPUT_VARIANTS_BORDER,
  invalidClasses,
} from "./styles";

export const PasswordInput = forwardRef<HTMLInputElement, CustomInputProps>(
  (
    {
      children,
      leftAddon,
      rightAddon,
      color,
      theme: propsTheme,
      variant: propsVariant = "solid",
      isInvalid: invalid = false,
      isDisabled: disabled = false,
      isRequired: required = false,
      className,
      scale: size = "md",
      ...props
    },
    ref
  ) => {
    const { isDisabled, isInvalid, theme, variant } = useFormControl(
      "input-field",
      {
        isDisabled: disabled,
        isInvalid: invalid,
        isRequired: required,
        theme: propsTheme,
        variant: propsVariant,
      }
    );
    const [showPw, setShowPw] = useState<boolean>(false);

    return (
      <div className="relative flex justify-end">
        <input
          ref={ref}
          {...props}
          className={`${className} ${disabledClasses(
            isDisabled
          )} ${invalidClasses(isInvalid, theme)} ${
            INPUT_DEFAULT_PADDING[variant]
          } ${INPUT_CORNER_ROUNDING[variant]["all"]} ${
            INPUT_BASE[theme][variant]
          } relative ${INPUT_SIZES[size]} pr-20 ${
            INPUT_VARIANTS_BORDER[variant]
          }`}
          type={showPw ? "text" : "password"}
          disabled={isDisabled}
        />
        <div
          className={`absolute flex justify-center items-center px-2 ${INPUT_SIZES[size]} w-20`}
        >
          <Button
            color="neutral"
            theme={theme}
            className="transition h-4/6 px-3 w-full"
            onClick={() => {
              setShowPw((prev) => !prev);
            }}
            focusEffect={false}
          >
            {showPw ? "Hide" : "Show"}
          </Button>
        </div>
      </div>
    );
  }
);
