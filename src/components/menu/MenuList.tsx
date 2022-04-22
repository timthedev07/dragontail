import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { useMenu } from "./Menu";

export type MenuListProps = {};

/**
 * Wrapper component for MenuItem, it must also be a direct child of Menu.
 */
export const MenuList: FC<
  DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>
> = ({ children }) => {
  const { isOpen } = useMenu();

  const menuListOpenStyles = "block animate-menu-open origin-top-left";
  const menuListClosedStyles = "hidden";

  return (
    <ul
      className={`absolute ${
        isOpen ? menuListOpenStyles : menuListClosedStyles
      }`}
    >
      {children}
    </ul>
  );
};
