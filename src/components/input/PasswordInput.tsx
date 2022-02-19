import { FC, useState } from "react";
import { useDragontail } from "../../context/ThemeContext";
import { Button } from "../button";
import { CustomInputProps } from "./Input";
import {
  disabledClasses,
  INPUT_BASE,
  INPUT_CORNER_ROUNDING,
  INPUT_DEFAULT_PADDING,
  INPUT_SIZES,
  INPUT_VARIANTS_BORDER,
  invalidClasses,
} from "./styles";

export const PasswordInput: FC<CustomInputProps> = ({
  children,
  leftAddon,
  rightAddon,
  variant = "solid",
  color,
  theme,
  isInvalid = false,
  className,
  isDisabled = false,
  size = "md",
  ...props
}) => {
  const defaultTheme = useDragontail();
  const [showPw, setShowPw] = useState<boolean>(false);

  return (
    <div className="relative flex justify-end">
      <input
        {...props}
        className={`${className} ${disabledClasses(
          isDisabled
        )} ${invalidClasses(isInvalid, theme || defaultTheme)} ${
          INPUT_DEFAULT_PADDING[variant]
        } ${INPUT_CORNER_ROUNDING[variant]["all"]} ${
          INPUT_BASE[theme || defaultTheme][variant]
        } relative ${INPUT_SIZES[size]} pr-20 ${
          INPUT_VARIANTS_BORDER[variant]
        }`}
        type={showPw ? "text" : "password"}
        disabled={isDisabled}
      />
      <div
        className={`absolute flex justify-center items-center px-2 ${INPUT_SIZES[size]} w-20`}
      >
        <Button
          color="neutral"
          theme={theme}
          className="transition h-4/6 px-3 w-full"
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
