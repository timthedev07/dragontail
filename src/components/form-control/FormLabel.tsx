import { DetailedHTMLProps, LabelHTMLAttributes } from "react";
import { TextboxSharedProps } from "../../types/TextboxSharedProps";
import { forwardRef } from "../../utils/forwardRef";
import { useFormControl } from "./FormControl";

export type FormLabelProps = DetailedHTMLProps<
  LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
> &
  TextboxSharedProps;

export const FormLabel = forwardRef<HTMLLabelElement, FormLabelProps>(
  ({ theme: propsTheme, children, ...props }, ref) => {
    const { theme, isRequired, isDisabled, label } = useFormControl(
      "input-label",
      {
        theme: propsTheme,
      }
    );
    console.log("Label received in the props:", label);

    return (
      <label
        {...props}
        htmlFor={label}
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
