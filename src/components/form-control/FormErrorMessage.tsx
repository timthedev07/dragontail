import { FC } from "react";
import { ComponentRole } from "../../types/ComponentRoleTypes";

interface FormErrorMessageProps {}

export const FormErrorMessage: FC<FormErrorMessageProps> = ({}) => {
  return <div data-component-role={"error-message" as ComponentRole}></div>;
};
