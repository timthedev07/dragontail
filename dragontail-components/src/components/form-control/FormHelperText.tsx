import { DetailedHTMLProps, LabelHTMLAttributes } from "react";
import { TextboxSharedProps } from "../../types/TextboxSharedProps";
import { forwardRef } from "../../utils/forwardRef";
import { useFormControl } from "./FormControl";

export type FormHelperTextProps = DetailedHTMLProps<
  LabelHTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
> &
  TextboxSharedProps;

export const FormHelperText = forwardRef<HTMLSpanElement, FormHelperTextProps>(
  ({ theme: propsTheme, ...props }, ref) => {
    const { theme } = useFormControl("helper-text", {
      theme: propsTheme,
    });

    return (
      <span
        ref={ref}
        {...props}
        className={
          (theme === "light" ? "text-neutral-800/60" : "text-neutral-400") +
          " text-sm"
        }
      />
    );
  }
);
