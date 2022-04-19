import { DetailedHTMLProps, FC, InputHTMLAttributes, ReactNode } from "react";
import { useDragontail } from "../../context/ThemeContext";
import { DragontailSizeType } from "../../types/Sizes";
import { TextboxSharedProps } from "../../types/TextboxSharedProps";
import {
  disabledClasses,
  INPUT_BASE,
  INPUT_CORNER_ROUNDING,
  INPUT_DEFAULT_PADDING,
  INPUT_SIZES,
  INPUT_VARIANTS_BORDER,
  invalidClasses,
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
}

export const Input: FC<CustomInputProps> = ({
  children,
  leftAddon,
  rightAddon,
  variant = "solid",
  color,
  theme,
  isDisabled = false,
  className,
  scale: size = "md",
  leftElement,
  rightElement,
  isInvalid = false,
  ...props
}) => {
  const defaultTheme = useDragontail();
  const ADDON_CLASS = `p-2 flex justify-center items-center ${
    INPUT_SIZES[size]
  } ${
    (theme ? theme : defaultTheme) === "dark"
      ? "bg-slate-600 text-white"
      : "bg-slate-200 text-slate-700"
  }`;
  const ELEMENT_CLASS = `absolute ${INPUT_SIZES[size]} w-10 font-sans flex justify-center items-center bg-inherit`;

  return (
    <div
      className="relative flex justify-center items-center"
      data-component-role={""}
    >
      {leftAddon ? (
        <div className={`${ADDON_CLASS} rounded-l-md`}>{leftAddon}</div>
      ) : null}
      {leftElement ? (
        <div className={`${ELEMENT_CLASS} left-0`}>{leftElement}</div>
      ) : null}
      <input
        className={`${className || ""} ${disabledClasses(isDisabled)} ${
          leftElement && rightElement
            ? "px-10"
            : leftElement
            ? "pl-10 pr-3"
            : rightElement
            ? "pr-10 pl-3"
            : INPUT_DEFAULT_PADDING[variant]
        } ${invalidClasses(
          isInvalid,
          theme || defaultTheme,
          variant === "solid"
        )} ${INPUT_BASE[theme || defaultTheme][variant]} ${INPUT_SIZES[size]} ${
          INPUT_VARIANTS_BORDER[variant]
        } ${
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
        <div className={`${ELEMENT_CLASS} right-0`}>{rightElement}</div>
      ) : null}
      {rightAddon ? (
        <div className={`${ADDON_CLASS} rounded-r-md`}>{rightAddon}</div>
      ) : null}
    </div>
  );
};
