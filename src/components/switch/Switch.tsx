import {
  ChangeEvent,
  DetailedHTMLProps,
  forwardRef,
  InputHTMLAttributes,
} from "react";
import { CSType } from "../../types/Colors";
import { DragontailSizeType } from "../../types/Sizes";
import { TextboxSharedProps } from "../../types/TextboxSharedProps";
import { useFormControl } from "../form-control/FormControl";

export type SwitchCSType = Exclude<CSType, "neutral">;

export type SwitchProps = Omit<
  TextboxSharedProps &
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "onChange"
> & {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  scale?: DragontailSizeType;
  checkedColor?: SwitchCSType;
};

export const CHECKED_COLOR_MAP: Record<SwitchCSType, string> = {
  cyan: "checked:bg-cyan-500",
  dark: "checked:bg-slate-900",
  emerald: "checked:bg-emerald-500",
  green: "checked:bg-green-500",
  light: "checked:bg-slate-100",
  orange: "checked:bg-orange-500",
  red: "checked:bg-red-500",
  sky: "checked:bg-sky-500",
  teal: "checked:bg-teal-500",
};

interface SwitchMeasurements {
  switchDimensions: string;
  switchButtonDimensions: string;
  switchPaddings: string;
  switchButtonDisplacement: string;
}

export const MEASUREMENTS: Record<DragontailSizeType, SwitchMeasurements> = {
  xl: {
    switchButtonDimensions: "after:h-8 after:w-8",
    switchDimensions: "w-20 h-10",
    switchPaddings: "px-[4px]",
    switchButtonDisplacement: "checked:after:translate-x-10",
  },
  lg: {
    switchButtonDimensions: "after:h-7 after:w-7",
    switchDimensions: "w-16 h-8",
    switchPaddings: "px-[2.5px]",
    switchButtonDisplacement: "checked:after:translate-x-[29px]",
  },
  md: {
    switchButtonDimensions: "after:h-5 after:w-5",
    switchDimensions: "w-12 h-6",
    switchPaddings: "px-[2px]",
    switchButtonDisplacement: "checked:after:translate-x-6",
  },
  sm: {
    switchButtonDimensions: "after:h-3 after:w-3",
    switchDimensions: "w-8 h-4",
    switchPaddings: "px-[1.5px]",
    switchButtonDisplacement: "checked:after:translate-x-4",
  },
};

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      defaultChecked: propsDefaultChecked,
      variant: propsVariant,
      theme: propsTheme,
      isDisabled: propsDisabled,
      isRequired: propsRequired,
      isInvalid: propsInvalid,
      scale = "md",
      onChange,
      checkedColor = "emerald",
      checked,
      ...rest
    },
    ref
  ) => {
    const { defaultChecked, isDisabled, theme } = useFormControl(
      "input-field",
      {
        defaultChecked: propsDefaultChecked,
        variant: propsVariant,
        theme: propsTheme,
        isDisabled: propsDisabled,
        isRequired: propsRequired,
        isInvalid: propsInvalid,
      }
    );

    return (
      <input
        ref={ref}
        disabled={isDisabled}
        {...rest}
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={(e) => {
          if (onChange) {
            onChange(e);
          }
        }}
        className={`${
          MEASUREMENTS[scale].switchDimensions
        } rounded-full appearance-none transition-colors duration-200 ${
          theme === "light" ? "bg-neutral-300" : "bg-neutral-500/80"
        } ${CHECKED_COLOR_MAP[checkedColor]} flex items-center ${
          MEASUREMENTS[scale].switchPaddings
        } after:content-[""] ${
          MEASUREMENTS[scale].switchButtonDimensions
        } after:rounded-full after:bg-white after:absolute relative after:transform after:transition after:duration-200 after:ease-out ${
          MEASUREMENTS[scale].switchButtonDisplacement
        } ${isDisabled ? "cursor-not-allowed opacity-40" : "cursor-pointer"}`}
        type="checkbox"
      />
    );
  }
);
