import { DetailedHTMLProps, FC, LabelHTMLAttributes } from "react";
import { TextboxSharedProps } from "../../types/TextboxSharedProps";
import { useFormControl } from "./FormControl";

export const FormLabel: FC<
  DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> &
    TextboxSharedProps
> = ({ theme: propsTheme, ...props }) => {
  const { theme } = useFormControl("input-label", {
    theme: propsTheme,
  });

  return (
    <label
      {...props}
      className={`${theme === "light" ? "text-black" : "text-neutral-50"}`}
    />
  );
};
