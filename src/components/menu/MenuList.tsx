import {
  Children,
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  useEffect,
  useState,
} from "react";
import { useMenu } from "./Menu";

export type MenuListProps = {};

/**
 * Wrapper component for MenuItem, it must also be a direct child of Menu.
 */
export const MenuList: FC<
  DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>
> = ({ children }) => {
  const { isOpen, theme, isLazy, currSearch: currSearchLetter } = useMenu();

  const [searchCandidates, setSearchCandidates] = useState<
    { ind: number; text: string }[]
  >([]);
  const menuListOpenStyles = "absolute animate-menu-open origin-top-left";
  const menuListClosedStyles = "hidden";

  useEffect(() => {
    const childrenArr = Children.toArray(children);

    childrenArr.forEach((each, ind) => {
      // if the current child is a menu item with children
      if (
        typeof each === "object" &&
        "props" in each &&
        "children" in each.props &&
        typeof each.props.children === "string"
      ) {
        if (
          (each.props.children as string).charAt(0).toLowerCase() ===
          currSearchLetter.char
        ) {
          setSearchCandidates((prev) => {
            return [
              ...prev,
              {
                ind,
                text: each.props.children,
              },
            ];
          });
        }
      }
    });
  }, [children]);

  return (
    <ul
      className={`mt-3 flex flex-col gap-0 py-2 min-w-max rounded-md border ${
        isOpen ? menuListOpenStyles : menuListClosedStyles
      } ${
        theme === "dark"
          ? "bg-gray-800 border-neutral-100/20"
          : "bg-gray-50 border-neutral-300"
      }`}
    >
      {isLazy ? (isOpen ? children : null) : children}
    </ul>
  );
};
