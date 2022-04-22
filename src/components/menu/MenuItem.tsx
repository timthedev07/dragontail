import { FC } from "react";
import { useMenu } from "./Menu";

interface MenuItemProps {}

export const MenuItem: FC<MenuItemProps> = ({ children }) => {
  const { theme } = useMenu();
  return (
    <li
      className={`p-2 bg-slate-300/0 w-full min-w-[120px] ${
        theme === "light" ? "hover:bg-slate-200/75" : "hover:bg-slate-500/75"
      }`}
    >
      {children}
    </li>
  );
};
