import { FC, useEffect, Children } from "react";
import { TextboxSharedProps } from "../../types/TextboxSharedProps";

export type FormControlProps = TextboxSharedProps;

export const FormControl: FC<FormControlProps> = ({ children }) => {
  useEffect(() => {
    if (!children) {
      return;
    }
    {
      Children.forEach(children, (each) => {
        console.log(each);
      });
    }
  });
  return <div className="flex flex-col gap-3 p-2">{children}</div>;
};
