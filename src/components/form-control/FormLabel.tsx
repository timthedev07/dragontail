import { DetailedHTMLProps, forwardRef, LabelHTMLAttributes } from "react";
import { TextboxSharedProps } from "../../types/TextboxSharedProps";
import { useFormControl } from "./FormControl";

export type FormLabelProps = DetailedHTMLProps<
  LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
> &
  TextboxSharedProps;

export const FormLabel = forwardRef<HTMLLabelElement, FormLabelProps>(
  ({ theme: propsTheme, children, ...props }, ref) => {
    const { theme, isRequired, isDisabled } = useFormControl("input-label", {
      theme: propsTheme,
    });

    return (
      <label
        {...props}
        ref={ref}
        className={`${
          theme === "light" ? "text-black" : "text-neutral-50"
        } text-base ${isDisabled && "opacity-40"}`}
      >
        {children}
        {isRequired ? (
          <span className="text-red-600 text-base">{" *"}</span>
        ) : (
          ""
        )}
      </label>
    );
  }
);
