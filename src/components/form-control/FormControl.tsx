import { TextboxSharedProps } from "../../types/TextboxSharedProps";
import React, { useContext } from "react";
import { ComponentRole } from "../../types/ComponentRoleTypes";

type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T;
};

export type FormControlProps = TextboxSharedProps & {
  // maps a role to a component's name prop
  // e.g. {
  //   "text-field": "email"   => <Input name="email" />
  // }
  roles: PartialRecord<ComponentRole, string>;
};

export type FormControlContextProps = {
  val?: string;
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
  componentProps: TextboxSharedProps
) => {
  const context = useContext(FormControlContext);

  let found = -1;
  context.forEach((obj, index) =>
    obj.val === componentRole ? (found = index) : -1
  );

  if (found === -1) {
    return componentProps;
  }

  return context[found];
};

// example of helper functions required
export const updateFieldValue = (s: string, val: string) => {};

export const setFieldError = (s: string, val: string) => {};

export const FormControl: React.FC<FormControlProps> = ({
  children,
  roles = {},
  ...rest
}) => {
  const defaultProps = {
    isInvalid: false,
    isDisabled: false,
    isRequired: false,
  } as FormControlContextProps;

  const final = [] as FormControlContextProps[];

  Object.keys(roles).map((val) =>
    final.push({
      val,
      ...defaultProps,
      ...rest,
    })
  ) as FormControlContextProps;

  console.log(rest);

  return (
    <FormControlContext.Provider value={final} {...rest}>
      <div className="flex flex-col gap-3 p-2">{children}</div>
    </FormControlContext.Provider>
  );
};
