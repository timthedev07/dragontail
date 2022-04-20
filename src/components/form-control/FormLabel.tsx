import { DetailedHTMLProps, FC, LabelHTMLAttributes } from "react";
import { ComponentRole } from "../../types/ComponentRoleTypes";

export const FormLabel: FC<
  DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>
> = (props) => {
  return (
    <label {...props} data-component-role={"input-label" as ComponentRole} />
  );
};
