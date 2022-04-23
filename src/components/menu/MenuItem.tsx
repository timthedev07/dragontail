import { DetailedHTMLProps, FC, LiHTMLAttributes } from "react";
import { useMenu } from "./Menu";

interface MenuItemProps
  extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  className?: string;
}

export const MenuItem: FC<MenuItemProps> = ({
  children,
  className,
  ...props
}) => {
  const { theme } = useMenu();

  return (
    <li
      {...props}
      className={`cursor-pointer p-2 px-3 bg-slate-300/0 w-full min-w-[120px] transition duration-100 ${
        theme === "light"
          ? "hover:bg-slate-200/75 text-black/60 hover:text-black/80"
          : "hover:bg-slate-200/10 text-white/60 hover:text-white/80"
      } ${className}`}
    >
      {children}
    </li>
  );
};
