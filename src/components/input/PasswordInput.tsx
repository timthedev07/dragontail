import { FC, useState } from "react";
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
  className,
  size = "md",
  ...props
}) => {
  const defaultTheme = useDragontail();
  const [showPw, setShowPw] = useState<boolean>(false);

  return (
    <div className="relative flex justify-end">
      <input
        {...props}
        className={`${className} ${
          INPUT_BASE[theme || defaultTheme]
        } relative ${INPUT_SIZES[size]}`}
        type={showPw ? "text" : "password"}
      />
      <div
        className={`absolute flex justify-center items-center px-2 ${INPUT_SIZES[size]}`}
      >
        <Button
          color="neutral"
          className="transition h-4/6 px-3"
          onClick={() => {
            setShowPw((prev) => !prev);
          }}
          focusEffect={false}
        >
          {showPw ? "Hide" : "Show"}
        </Button>
      </div>
    </div>
  );
};
