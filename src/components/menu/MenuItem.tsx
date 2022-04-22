import { FC } from "react";
import { useMenu } from "./Menu";

interface MenuItemProps {}

export const MenuItem: FC<MenuItemProps> = ({ children }) => {
  const { theme } = useMenu();
  return (
    <li
      className={`cursor-pointer p-2 px-3 bg-slate-300/0 w-full min-w-[120px] transition duration-100 ${
        theme === "light"
          ? "hover:bg-slate-200/75 text-black/60 hover:text-black/80"
          : "hover:bg-slate-200/40 text-white/60 hover:text-white/80"
      }`}
    >
      {children}
    </li>
  );
};
