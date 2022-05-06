import { DetailedHTMLProps, HTMLAttributes } from "react";
import { forwardRef } from "../../utils/forwardRef";
import { useMenu } from "./Menu";

export type MenuDividerProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHRElement>,
  HTMLHRElement
>;

export const MenuDivider = forwardRef<HTMLHRElement, MenuDividerProps>(
  (props, ref) => {
    const { theme } = useMenu();

    return (
      <hr
        {...props}
        ref={ref}
        className={`border-none h-[1px] my-2 ${
          theme === "dark" ? "bg-neutral-100 bg-opacity-20" : "bg-neutral-300"
        }`}
      />
    );
  }
);
