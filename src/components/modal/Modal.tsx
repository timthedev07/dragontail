import React, { useContext } from "react";
import { ModalComponentRole } from "src/types/ComponentRoleTypes";
import { useDragontail } from "../../context/ThemeContext";
import { forwardRef } from "../../utils/forwardRef";

export const getModalContextDefaultProps = () => {
  const { theme } = useDragontail();
  return {
    theme,
  } as ModalContextProps;
};

export type ModalProps = {
  className?: string;
  children?: React.ReactNode;
};

export type ModalContextProps = {
  componentRole?: string;
};

const ModalContext = React.createContext<ModalContextProps[]>([]);

/**
 * Receive appropriate props from form control
 * @param componentRole the role of the component in the form control
 * @param componentProps Fallback: returns the component's own props if not wrapped in form control context.
 * @returns
 */
export const useModal = (
  componentRole: ModalComponentRole,
  componentProps: ModalContextProps
) => {
  const context = useContext(ModalContext);

  const defaultProps = getModalContextDefaultProps();

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
    } as Required<ModalContextProps>;
  }

  return context[found] as Required<ModalContextProps>;
};

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  ({ children, className = "", ...rest }, ref) => {
    const defaultProps = getModalContextDefaultProps();

    const roles: Array<ModalComponentRole> = [
      "body",
      "content",
      "footer",
      "header",
      "overlay",
      "upper-close-button",
    ];

    const final = [] as ModalContextProps[];

    roles.map((val) =>
      final.push({
        componentRole: val,
        ...defaultProps,
        ...rest,
      })
    ) as ModalContextProps;

    return (
      <ModalContext.Provider value={final} {...rest}>
        <div className={`flex flex-col gap-3 ${className}`} ref={ref}>
          {children}
        </div>
      </ModalContext.Provider>
    );
  }
);
