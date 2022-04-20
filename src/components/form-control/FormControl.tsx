import { TextboxSharedProps } from "../../types/TextboxSharedProps";
import React, { useContext } from "react";
import { ComponentRole } from "../../types/ComponentRoleTypes";
import { useDragontail } from "../../context/ThemeContext";

export type FormControlProps = TextboxSharedProps & {
  // maps a role to a component's name prop
  // e.g. {
  //   "text-field": "email"   => <Input name="email" />
  // }
  roles: Array<ComponentRole>;
};

export type FormControlContextProps = {
  componentRole?: string;
} & TextboxSharedProps;

const FormControlContext = React.createContext<FormControlContextProps[]>([]);

/**
 * Receive appropriate props from form control
 * @param componentRole the role of the component in the form control
 * @param componentProps Fallback: returns the component's own props if not wrapped in form control context.
 * @returns
 */
export const useFormControl = (
  componentRole: ComponentRole,
  componentProps: FormControlContextProps
) => {
  const context = useContext(FormControlContext);

  let found = -1;
  context.forEach((obj, index) =>
    obj.componentRole === componentRole ? (found = index) : -1
  );

  if (found === -1) {
    return componentProps as Required<FormControlContextProps>;
  }

  return context[found] as Required<FormControlContextProps>;
};

// example of helper functions required
export const updateFieldValue = (s: string, val: string) => {};

export const setFieldError = (s: string, val: string) => {};

export const FormControl: React.FC<FormControlProps> = ({
  children,
  roles = [],
  ...rest
}) => {
  const chosenTheme = useDragontail();
  const defaultProps = {
    isInvalid: false,
    isDisabled: false,
    isRequired: false,
    theme: chosenTheme,
    variant: "outline",
  } as FormControlContextProps;

  const final = [] as FormControlContextProps[];

  roles.map((val) =>
    final.push({
      componentRole: val,
      ...defaultProps,
      ...rest,
    })
  ) as FormControlContextProps;

  return (
    <FormControlContext.Provider value={final} {...rest}>
      <div className="flex flex-col gap-3 p-2">{children}</div>
    </FormControlContext.Provider>
  );
};
