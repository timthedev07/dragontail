import { FC } from "react";

interface MenuItemProps {}

export const MenuItem: FC<MenuItemProps> = ({ children }) => {
  return <li>{children}</li>;
};
