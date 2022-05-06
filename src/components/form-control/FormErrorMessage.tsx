import { DetailedHTMLProps, LabelHTMLAttributes } from "react";
import { TextboxSharedProps } from "../../types/TextboxSharedProps";
import { forwardRef } from "../../utils/forwardRef";
import { useFormControl } from "./FormControl";

export type FormErrorMessagePropsType = DetailedHTMLProps<
  LabelHTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
> &
  TextboxSharedProps;

export const FormErrorMessage = forwardRef<
  HTMLSpanElement,
  FormErrorMessagePropsType
>(({ theme: propsTheme, ...props }, ref) => {
  const { theme } = useFormControl("helper-text", {
    theme: propsTheme,
  });

  return (
    <span
      {...props}
      ref={ref}
      className={
        (theme === "light" ? "text-red-500" : "text-red-400") + " text-sm"
      }
    />
  );
});
