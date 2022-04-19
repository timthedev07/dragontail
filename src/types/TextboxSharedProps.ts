import { DragontailThemeType } from "../context/ThemeContext";
import { InputVariants } from "./Variants";

export interface TextboxSharedProps {
  variant?: InputVariants;
  theme?: DragontailThemeType;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isRequired?: boolean;
}
