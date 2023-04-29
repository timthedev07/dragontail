import { ThemeType } from "../context/ThemeContext";
import { InputVariants } from "./Variants";

export interface TextboxSharedProps {
  variant?: InputVariants;
  theme?: ThemeType;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isRequired?: boolean;
  defaultChecked?: boolean;
}
