import React, { Dispatch, useContext, useState } from "react";

interface MenuContextType {
  isOpen: boolean;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
}
const MenuContext = React.createContext<MenuContextType>({
  isOpen: false,
  setIsOpen: () => {},
});

export const useMenu = () => {
  return useContext(MenuContext);
};

export const Menu: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const value: MenuContextType = { isOpen, setIsOpen };

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};
