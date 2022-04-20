import { DetailedHTMLProps, FC, LabelHTMLAttributes } from "react";
import { TextboxSharedProps } from "../../types/TextboxSharedProps";
import { useFormControl } from "./FormControl";

export const FormLabel: FC<
  DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> &
    TextboxSharedProps
> = ({ theme: propsTheme, children, ...props }) => {
  const { theme, isRequired, isDisabled } = useFormControl("input-label", {
    theme: propsTheme,
  });

  return (
    <label
      {...props}
      className={`${
        theme === "light" ? "text-black" : "text-neutral-50"
      } text-base ${isDisabled && "opacity-40"}`}
    >
      {children}
      {isRequired ? <span className="text-red-600 text-base">{" *"}</span> : ""}
    </label>
  );
};
