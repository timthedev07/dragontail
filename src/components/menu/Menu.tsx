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

interface SearchCharInfo {
  char?: string;
  /** the index of the item that is to be selected **within the subset filtered based on the char** */
  selectionInd?: number;
}

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
  isLazy?: boolean;
  className?: string;
}

interface MenuContextType {
  theme: DragontailThemeType;
  isOpen: boolean;
  menuDirection: MenuDirection;
  open: Function;
  close: Function;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isLazy: boolean;
  currSearch: SearchCharInfo;
  searchResultChildren: string | null;
}

const MenuContext = React.createContext<MenuContextType>({
  isOpen: false,
  setIsOpen: placeholderFn,
  open: placeholderFn,
  close: placeholderFn,
  theme: "light",
  menuDirection: "downward",
  isLazy: false,
  currSearch: {},
  searchResultChildren: null,
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
  isLazy = false,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [menuDirection] = useState<MenuDirection>("downward");
  const { theme: appTheme } = useDragontail();
  const menuRef = useRef<HTMLDivElement | null>(null);

  const [currSearch, setCurrSearch] = useState<SearchCharInfo>({});
  const [searchResultChildren, setSearchResultChildren] =
    useState<string | null>(null);

  useEffect(() => {
    const keyboardHandler = (ev: KeyboardEvent) => {
      const { key } = ev;
      if (key.length === 1) {
        setCurrSearch((prev) => {
          if (prev.selectionInd && prev.char) {
            return {
              char: prev.char,
              selectionInd: prev.selectionInd + 1,
            };
          } else {
            return {
              char: key,
              selectionInd: 0,
            };
          }
        });
      } else {
        setCurrSearch({
          char: undefined,
          selectionInd: undefined,
        });
      }
    };

    window.addEventListener("keydown", keyboardHandler);

    return () => {
      window.removeEventListener("keydown", keyboardHandler);
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
    isLazy,
    currSearch,
    searchResultChildren,
  };

  useClickOutside(menuRef, () => {
    close();
  });

  return (
    <MenuContext.Provider value={value}>
      <div ref={menuRef} className={`w-min relative ${className}`}>
        {runIfFn(children, {
          isOpen,
        })}
      </div>
    </MenuContext.Provider>
  );
};
