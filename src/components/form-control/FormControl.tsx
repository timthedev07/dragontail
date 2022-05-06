import { TextboxSharedProps } from "../../types/TextboxSharedProps";
import React, { forwardRef, useContext } from "react";
import { ComponentRole } from "../../types/ComponentRoleTypes";
import { useDragontail } from "../../context/ThemeContext";

export const getFormControlContextDefaultProps = () => {
  const { theme } = useDragontail();
  return {
    isInvalid: false,
    isDisabled: false,
    isRequired: false,
    defaultChecked: false,
    theme,
    variant: "outline",
  } as FormControlContextProps;
};

export type FormControlProps = TextboxSharedProps & {
  className?: string;
  children?: React.ReactNode;
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

  const defaultProps = getFormControlContextDefaultProps();

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
      ...defaultProps,
      ...componentProps,
    } as Required<FormControlContextProps>;
  }

  return context[found] as Required<FormControlContextProps>;
};

export const FormControl = forwardRef<HTMLDivElement, FormControlProps>(
  ({ children, className = "gap-3", ...rest }, ref) => {
    const defaultProps = getFormControlContextDefaultProps();

    const roles: Array<ComponentRole> = [
      "error-message",
      "helper-text",
      "input-label",
      "input-field",
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
        <div className={`flex flex-col ${className}`} ref={ref}>
          {children}
        </div>
      </FormControlContext.Provider>
    );
  }
);
