import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { useMenu } from "./Menu";

export type MenuListProps = {};

/**
 * Wrapper component for MenuItem, it must also be a direct child of Menu.
 */
export const MenuList: FC<
  DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>
> = ({ children }) => {
  const { isOpen, theme } = useMenu();

  const menuListOpenStyles = "absolute animate-menu-open origin-top-left";
  const menuListClosedStyles = "hidden";

  return (
    <ul
      className={`mt-3 flex flex-col gap-0 min-w-max ${
        isOpen ? menuListOpenStyles : menuListClosedStyles
      } ${theme === "dark" ? "" : ""}`}
    >
      {children}
    </ul>
  );
};
