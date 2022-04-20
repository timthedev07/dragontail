import { TextboxSharedProps } from "../../types/TextboxSharedProps";
import React, { useContext } from "react";
import { ComponentRole } from "../../types/ComponentRoleTypes";
import { DragontailThemeType, useDragontail } from "../../context/ThemeContext";

export const getFormControlContextDefaultProps = (
  theme: DragontailThemeType
) => {
  return {
    isInvalid: false,
    isDisabled: false,
    isRequired: false,
    theme,
    variant: "outline",
  } as FormControlContextProps;
};

export type FormControlProps = TextboxSharedProps & {
  className?: string;
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
  const theme = useDragontail();

  const defaultProps = getFormControlContextDefaultProps(theme);
  console.log(defaultProps);

  let found = -1;
  context.forEach((obj, index) =>
    obj.componentRole === componentRole ? (found = index) : -1
  );

  // "sanitize" component props => remove undefined properties
  Object.keys(componentProps).forEach((key) =>
    componentProps[key] === undefined ? delete componentProps[key] : {}
  );

  if (found === -1) {
    return {
      theme,
      ...defaultProps,
      ...componentProps,
    } as Required<FormControlContextProps>;
  }

  return context[found] as Required<FormControlContextProps>;
};

// example of helper functions required
export const updateFieldValue = (s: string, val: string) => {};

export const setFieldError = (s: string, val: string) => {};

export const FormControl: React.FC<FormControlProps> = ({
  children,
  className = "",
  ...rest
}) => {
  const chosenTheme = useDragontail();
  const defaultProps = getFormControlContextDefaultProps(chosenTheme);

  const roles: Array<ComponentRole> = [
    "error-message",
    "helper-text",
    "input-label",
    "text-field",
  ];

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
      <div className={`flex flex-col gap-3 p-2 ${className}`}>{children}</div>
    </FormControlContext.Provider>
  );
};
