import React, {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { DragontailThemeType, useDragontail } from "../../context/ThemeContext";
import { MaybeRenderProp, runIfFn } from "../../types/Children";
import { useClickOutside } from "../../utils/hooks";
import { placeholderFn } from "../../utils/placeholderFunction";

type MenuDirection = "upward" | "downward";

interface ExposedValues {
  isOpen: boolean;
}

export interface MenuContextProps {
  theme?: DragontailThemeType;
  children?: MaybeRenderProp<ExposedValues>;
  isOpen?: boolean;
  onClose?: Function;
  onOpen?: Function;
}

interface MenuContextType {
  theme: DragontailThemeType;
  isOpen: boolean;
  menuDirection: MenuDirection;
  open: Function;
  close: Function;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const MenuContext = React.createContext<MenuContextType>({
  isOpen: false,
  setIsOpen: placeholderFn,
  open: placeholderFn,
  close: placeholderFn,
  theme: "light",
  menuDirection: "downward",
});

export const useMenu = () => {
  return useContext(MenuContext);
};

export const Menu: React.FC<MenuContextProps> = ({
  children,
  theme,
  isOpen: propsIsOpen,
  onClose = placeholderFn,
  onOpen = placeholderFn,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [menuDirection] = useState<MenuDirection>("downward");
  const { theme: appTheme } = useDragontail();
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

  const close = () => {
    setIsOpen(false);
    onClose();
  };

  const open = () => {
    setIsOpen(true);
    onOpen();
  };

  const value: MenuContextType = {
    isOpen,
    theme: theme || appTheme,
    menuDirection,
    close,
    open,
    setIsOpen,
  };

  useClickOutside(menuRef, () => {
    close();
  });

  return (
    <MenuContext.Provider value={value}>
      <div ref={menuRef} className="w-min relative">
        {runIfFn(children, {
          isOpen,
        })}
      </div>
    </MenuContext.Provider>
  );
};
