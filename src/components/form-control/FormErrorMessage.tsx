import { DetailedHTMLProps, FC, LabelHTMLAttributes } from "react";
import { TextboxSharedProps } from "../../types/TextboxSharedProps";
import { useFormControl } from "./FormControl";

export const FormErrorMessage: FC<
  DetailedHTMLProps<LabelHTMLAttributes<HTMLSpanElement>, HTMLSpanElement> &
    TextboxSharedProps
> = ({ theme: propsTheme, ...props }) => {
  const { theme } = useFormControl("helper-text", {
    theme: propsTheme,
  });

  return (
    <span
      {...props}
      className={
        (theme === "light" ? "text-red-500" : "text-red-400") + " text-sm"
      }
    />
  );
};
