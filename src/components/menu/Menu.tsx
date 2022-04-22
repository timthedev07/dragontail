import React, { Dispatch, useContext, useRef, useState } from "react";
import { DragontailThemeType, useDragontail } from "../../context/ThemeContext";
import { useClickOutside } from "../../utils/hooks";

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

  const menuRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(menuRef, (e: MouseEvent) => {
    setIsOpen(false);
  });

  return (
    <MenuContext.Provider value={value}>
      <div ref={menuRef} className="w-min relative">
        {children}
      </div>
    </MenuContext.Provider>
  );
};
