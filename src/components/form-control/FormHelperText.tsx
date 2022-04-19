import { FC } from "react";
import { ComponentRole } from "../../types/ComponentRoleTypes";

interface FormHelperTextProps {}

export const FormHelperText: FC<FormHelperTextProps> = ({}) => {
  return <div data-component-role={"helper-text" as ComponentRole}></div>;
};
