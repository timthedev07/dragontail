import { FC } from "react";
import { useDragontail } from "../../context/ThemeContext";
import { CustomInputProps } from "./Input";
import { INPUT_BASE } from "./Style";

export const PasswordInput: FC<CustomInputProps> = ({
  children,
  leftAddon,
  rightAddon,
  variant,
  color,
  theme,
  ...props
}) => {
  const defaultTheme = useDragontail();
  return (
    <input
      {...props}
      className={`${INPUT_BASE[theme || defaultTheme]}`}
      type="password"
    />
  );
};
