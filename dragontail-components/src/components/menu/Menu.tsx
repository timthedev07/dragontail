import React, {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { ThemeType, useTheme } from "../../context/ThemeContext";
import { MaybeRenderProp, runIfFn } from "../../types/Children";
import { forwardRef } from "../../utils/forwardRef";
import { useClickOutside } from "../../utils/hooks";
import { placeholderFn } from "../../utils/placeholderFunction";
import { SearchCandidate } from "./MenuList";

interface SearchCharInfo {
  char?: string;
  /** the index of the item that is to be selected **within the subset filtered based on the char** */
  selectionInd?: number;
}

type UpdateSearchResult = (searchCandidates: SearchCandidate[]) => void;

type MenuDirection = "upward" | "downward";

interface ExposedValues {
  isOpen: boolean;
}

export interface MenuContextProps {
  theme?: ThemeType;
  children?: MaybeRenderProp<ExposedValues>;
  isOpen?: boolean;
  onClose?: Function;
  onOpen?: Function;
  isLazy?: boolean;
  className?: string;
  closeOnItemClick?: boolean;
}

interface MenuContextType {
  theme: ThemeType;
  isOpen: boolean;
  menuDirection: MenuDirection;
  open: Function;
  close: Function;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isLazy: boolean;
  currSearch: SearchCharInfo;
  searchResultChildren: string | null;
  updateSearchResult: UpdateSearchResult;
  availableInitials: string[];
  setAvailableInitials: Dispatch<SetStateAction<string[]>>;
  closeOnItemClick: boolean;
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
  updateSearchResult: placeholderFn,
  availableInitials: [],
  setAvailableInitials: placeholderFn,
  closeOnItemClick: true,
});

export const useMenu = () => {
  return useContext(MenuContext);
};

export const Menu = forwardRef<HTMLDivElement, MenuContextProps>(
  (
    {
      children,
      theme,
      isOpen: _,
      onClose = placeholderFn,
      onOpen = placeholderFn,
      isLazy = false,
      className = "",
      closeOnItemClick = true,
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [menuDirection] = useState<MenuDirection>("downward");
    const { theme: appTheme } = useTheme();
    const menuRef = useRef<HTMLDivElement | null>(ref as any);

    const [currSearch, setCurrSearch] = useState<SearchCharInfo>({});
    const [availableInitials, setAvailableInitials] = useState<string[]>([]);
    const [searchResultChildren, setSearchResultChildren] =
      useState<string | null>(null);

    const updateSearchResult: UpdateSearchResult = (
      searchCandidates: SearchCandidate[]
    ) => {
      const { selectionInd } = currSearch;
      const numCandidates = searchCandidates.length;

      if (selectionInd === undefined || numCandidates < 1) return;

      const candidateInd = selectionInd % numCandidates;
      setSearchResultChildren(searchCandidates[candidateInd].text);
    };

    useEffect(() => {
      const keyboardHandler = (ev: KeyboardEvent) => {
        const { key } = ev;
        if (key.length === 1) {
          setCurrSearch((prev) => {
            // if the previous searched character is the one that is entered this time
            if (
              prev.selectionInd !== undefined &&
              prev.char &&
              prev.char === key
            ) {
              return {
                char: prev.char,
                selectionInd: prev.selectionInd + 1,
              };
              // new search
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

      window.addEventListener("keyup", keyboardHandler);

      return () => {
        window.removeEventListener("keyup", keyboardHandler);
      };
    }, []);

    const close = () => {
      setIsOpen(false);
      onClose();
      setCurrSearch({});
      setSearchResultChildren(null);
    };

    const open = () => {
      setIsOpen(true);
      onOpen();
    };

    const value: MenuContextType = {
      isOpen,
      closeOnItemClick,
      theme: theme || appTheme,
      menuDirection,
      close,
      open,
      setIsOpen,
      isLazy,
      currSearch,
      searchResultChildren,
      updateSearchResult,
      setAvailableInitials,
      availableInitials,
    };

    useClickOutside(menuRef, () => {
      close();
    });

    return (
      <MenuContext.Provider value={value}>
        <div
          ref={menuRef}
          className={`w-min relative z-[9999999999999] ${className}`}
        >
          {runIfFn(children, {
            isOpen,
          })}
        </div>
      </MenuContext.Provider>
    );
  }
);
