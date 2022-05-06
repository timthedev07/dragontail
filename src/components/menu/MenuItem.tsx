import {
  DetailedHTMLProps,
  forwardRef,
  LiHTMLAttributes,
  useEffect,
  useRef,
} from "react";
import { useMenu } from "./Menu";

interface MenuItemProps
  extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  className?: string;
}

export const MenuItem = forwardRef<HTMLLIElement, MenuItemProps>(
  ({ children, className = "", ref: _, ...props }, ref) => {
    const { theme, searchResultChildren } = useMenu();
    const liRef = useRef<HTMLLIElement | null>(ref as any);

    const selectedBySearch =
      typeof children === "string" && searchResultChildren === children;

    useEffect(() => {
      const handler = (e: KeyboardEvent) => {
        if (e.key.toLowerCase() === "enter" && selectedBySearch) {
          liRef.current?.click();
        }
      };
      window.addEventListener("keydown", handler);

      return () => {
        window.removeEventListener("keydown", handler);
      };
    }, [selectedBySearch]);

    return (
      <li
        {...props}
        ref={liRef}
        className={`cursor-pointer p-2 px-3 bg-slate-300/0 w-full min-w-[120px] transition duration-100  ${
          selectedBySearch
            ? theme === "light"
              ? "bg-slate-200/75 text-black/80"
              : "bg-slate-200/10 text-white/80"
            : `bg-inherit ${
                theme === "light"
                  ? "hover:bg-slate-200/75 text-black/60 hover:text-black/80"
                  : "hover:bg-slate-200/10 text-white/60 hover:text-white/80"
              }`
        } ${className}`}
      >
        {children}
      </li>
    );
  }
);
