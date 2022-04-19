import { TextboxSharedProps } from "../../types/TextboxSharedProps";
import React, { useContext } from "react";

export type FormControlProps = TextboxSharedProps & {
  data: {
    [field: string]: any;
  };
};

export interface FormControlContextProps {
  isDisabled?: boolean;
  isInvalid?: boolean;
  isRequired?: boolean;
  val?: string;
}

const FormControlContext = React.createContext<FormControlContextProps[]>([]);

export const useFormControl = (s: string) => {
  const context = useContext(FormControlContext);

  let found = -1;
  context.forEach((obj, index) => (obj.val === s ? (found = index) : -1));

  if (found === -1) throw new Error("yo this doesn't work");

  return context[found];
};

// example of helper functions required
export const updateFieldValue = (s: string, val: string) => {};

export const setFieldError = (s: string, val: string) => {};

export const FormControl: React.FC<FormControlProps> = ({
  children,
  data = {
    firstName: "Mark",
    lastName: "Britton",
  },
  ...rest
}) => {
  const defaultProps = {
    isInvalid: false,
    isDisabled: false,
    isRequired: false,
  } as FormControlContextProps;

  const final = [] as FormControlContextProps[];

  Object.keys(data).map((val) =>
    final.push({
      val,
      ...defaultProps,
    })
  ) as FormControlContextProps;

  return (
    <FormControlContext.Provider value={final} {...rest}>
      <div className="flex flex-col gap-3 p-2">{children}</div>
    </FormControlContext.Provider>
  );
};
