import React, {
  Dispatch,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { DragontailThemeType, useDragontail } from "../../context/ThemeContext";
import { useClickOutside } from "../../utils/hooks";

type MenuDirection = "upward" | "downward";

export interface MenuContextProps {
  theme?: DragontailThemeType;
}

interface MenuContextType {
  theme: DragontailThemeType;
  isOpen: boolean;
  menuDirection: MenuDirection;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
}

const MenuContext = React.createContext<MenuContextType>({
  isOpen: false,
  setIsOpen: () => {},
  theme: "light",
  menuDirection: "downward",
});

export const useMenu = () => {
  return useContext(MenuContext);
};

export const Menu: React.FC<MenuContextProps> = ({ children, theme }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [menuDirection, setMenuDirection] = useState<MenuDirection>("downward");
  const appTheme = useDragontail();
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollHandler = () => {
      console.log({
        windowScroll: window.scrollY,
        windowHeight: window.outerHeight,
        menuWrapperClientHeight: menuRef.current?.clientHeight,
        menuWrapperOffsetHeight: menuRef.current?.offsetHeight,
        menuWrapperScrollHeight: menuRef.current?.scrollHeight,
      });
    };
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const value: MenuContextType = {
    isOpen,
    setIsOpen,
    theme: theme || appTheme,
    menuDirection,
  };

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
