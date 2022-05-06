import { Children, DetailedHTMLProps, HTMLAttributes, useEffect } from "react";
import { forwardRef } from "../../utils/forwardRef";
import { useMenu } from "./Menu";

export type MenuListProps = {};

export type SearchCandidate = { ind: number; text: string };

/**
 * Wrapper component for MenuItem, it must also be a direct child of Menu.
 */
export const MenuList = forwardRef<
  HTMLUListElement,
  DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>
>(({ children, className, ...props }, ref) => {
  const { isOpen, theme, isLazy, currSearch, updateSearchResult } = useMenu();

  const menuListOpenStyles = "absolute animate-menu-open origin-top-left";
  const menuListClosedStyles = "hidden";

  useEffect(() => {
    const childrenArr = Children.toArray(children);

    const newCandidates: SearchCandidate[] = [];

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
          currSearch.char
        ) {
          if (
            newCandidates.findIndex((val) => {
              return val.ind === ind;
            }) > -1
          ) {
          } else {
            newCandidates.push({
              ind,
              text: each.props.children,
            });
          }
        }
      }
    });

    updateSearchResult(newCandidates);
  }, [children, currSearch]);

  useEffect(() => {}, [children]);

  return (
    <ul
      {...props}
      className={`mt-3 flex flex-col gap-0 py-2 min-w-max rounded-md border ${
        isOpen ? menuListOpenStyles : menuListClosedStyles
      } ${
        theme === "dark"
          ? "bg-gray-800 border-neutral-100/20"
          : "bg-gray-50 border-neutral-300"
      } ${className}`}
      ref={ref}
    >
      {isLazy ? (isOpen ? children : null) : children}
    </ul>
  );
});
