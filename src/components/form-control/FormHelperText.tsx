import { DetailedHTMLProps, FC, LabelHTMLAttributes } from "react";
import { TextboxSharedProps } from "../../types/TextboxSharedProps";
import { useFormControl } from "./FormControl";

export const FormHelperText: FC<
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
        (theme === "light" ? "text-neutral-800/60" : "text-neutral-400") +
        " text-sm"
      }
    />
  );
};
