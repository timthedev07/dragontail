import React, { Dispatch, useContext, useState } from "react";
import { DragontailThemeType, useDragontail } from "../../context/ThemeContext";

export interface MenuContextProps {
  theme?: DragontailThemeType;
}

interface MenuContextType {
  theme: DragontailThemeType;
  isOpen: boolean;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
}

const MenuContext = React.createContext<MenuContextType>({
  isOpen: false,
  setIsOpen: () => {},
  theme: "light",
});

export const useMenu = () => {
  return useContext(MenuContext);
};

export const Menu: React.FC<MenuContextProps> = ({ children, theme }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const appTheme = useDragontail();

  const value: MenuContextType = {
    isOpen,
    setIsOpen,
    theme: theme || appTheme,
  };

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};
