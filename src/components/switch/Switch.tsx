import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";
import { TextboxSharedProps } from "../../types/TextboxSharedProps";

export type SwitchProps = {} & TextboxSharedProps &
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const Switch: FC<SwitchProps> = ({}) => {
  return <input className="" type="checkbox" />;
};
