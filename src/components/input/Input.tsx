import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from "react";
import { DragontailSizeType } from "../../types/Sizes";
import { TextboxSharedProps } from "../../types/TextboxSharedProps";
import { forwardRef } from "../../utils/forwardRef";
import { useFormControl } from "../form-control/FormControl";
import {
  disabledClasses,
  INPUT_BASE,
  INPUT_CORNER_ROUNDING,
  INPUT_DEFAULT_PADDING,
  INPUT_SIZES,
  toggleBorder,
} from "./styles";

export interface CustomInputProps
  extends DetailedHTMLProps<
      InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    TextboxSharedProps {
  leftAddon?: ReactNode;
  rightAddon?: ReactNode;
  scale?: DragontailSizeType;
  leftElement?: ReactNode;
  rightElement?: ReactNode;
  leftElementWidth?: string;
  rightElementWidth?: string;
  // used to style the container of <input />
  containerClassName?: string;
}

export const Input = forwardRef<HTMLInputElement, CustomInputProps>(
  (
    {
      children,
      leftAddon,
      rightAddon,
      variant: propsVariant = "solid",
      color,
      theme: propsTheme,
      className,
      scale: size = "md",
      leftElement,
      rightElement,
      isDisabled: disabled = false,
      isInvalid: invalid = false,
      isRequired: required = false,
      containerClassName = "",
      leftElementWidth,
      rightElementWidth,
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
    const ADDON_CLASS = `p-2 flex justify-center items-center ${
      INPUT_SIZES[size]
    } ${
      theme === "dark"
        ? "bg-slate-600 text-white"
        : "bg-slate-200 text-slate-700"
    }`;

    const ELEMENT_CLASS = `absolute ${
      INPUT_SIZES[size]
    } font-sans flex justify-center items-center bg-inherit ${
      theme === "dark" ? "text-white" : "text-slate-700"
    }`;

    return (
      <div
        className={`relative flex justify-center items-center ${containerClassName}`}
      >
        {leftAddon ? (
          <div className={`${ADDON_CLASS} rounded-l-md`}>{leftAddon}</div>
        ) : null}
        {leftElement ? (
          <div
            className={`${ELEMENT_CLASS} left-0 ${leftElementWidth || "w-10"}`}
          >
            {leftElement}
          </div>
        ) : null}
        <input
          id={label}
          aria-labelledby={props.name ? props.name : props.placeholder}
          ref={ref}
          className={`${className || ""} ${disabledClasses(isDisabled)} ${
            leftElement && rightElement
              ? "px-10"
              : leftElement
              ? "pl-10 pr-3"
              : rightElement
              ? "pr-10 pl-3"
              : INPUT_DEFAULT_PADDING[variant]
          } ${toggleBorder(isInvalid, theme, variant)} ${
            INPUT_BASE[theme][variant]
          } ${INPUT_SIZES[size]} ${
            INPUT_CORNER_ROUNDING[variant][
              leftAddon && rightAddon
                ? "none"
                : leftAddon
                ? "right"
                : rightAddon
                ? "left"
                : "all"
            ]
          }`}
          {...props}
          disabled={isDisabled}
        />
        {rightElement ? (
          <div
            className={`${ELEMENT_CLASS} ${
              rightElementWidth || "w-10"
            } right-0`}
          >
            {rightElement}
          </div>
        ) : null}
        {rightAddon ? (
          <div className={`${ADDON_CLASS} rounded-r-md`}>{rightAddon}</div>
        ) : null}
      </div>
    );
  }
);
