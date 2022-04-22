import { DetailedHTMLProps, FC, HTMLAttributes, useRef } from "react";
import { useMenu } from "./Menu";

export type MenuListProps = {};

/**
 * Wrapper component for MenuItem, it must also be a direct child of Menu.
 */
export const MenuList: FC<
  DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>
> = ({ children }) => {
  const { isOpen } = useMenu();

  return (
    <ul>
      {isOpen ? "open" : "closed"}
      {children}
    </ul>
  );
};
