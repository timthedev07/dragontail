import { FC } from "react";
import { ComponentRole } from "../../types/ComponentRoleTypes";

interface FormLabelProps {}

export const FormLabel: FC<FormLabelProps> = ({}) => {
  return (
    <label
      htmlFor=""
      data-component-role={"input-label" as ComponentRole}
    ></label>
  );
};
