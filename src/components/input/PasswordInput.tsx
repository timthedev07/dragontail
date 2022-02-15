import { FC } from "react";
import { useDragontail } from "../../context/ThemeContext";
import { Button } from "../button";
import { CustomInputProps } from "./Input";
import { INPUT_BASE, INPUT_SIZES } from "./Style";

export const PasswordInput: FC<CustomInputProps> = ({
  children,
  leftAddon,
  rightAddon,
  variant,
  color,
  theme,
  size = "md",
  ...props
}) => {
  const defaultTheme = useDragontail();
  return (
    <div className="relative flex justify-center">
      <input
        {...props}
        className={`${INPUT_BASE[theme || defaultTheme]} relative ${
          INPUT_SIZES[size]
        }`}
        type="password"
      />
      <div className="absolute flex justify-center items-center">
        <Button />
      </div>
    </div>
  );
};
