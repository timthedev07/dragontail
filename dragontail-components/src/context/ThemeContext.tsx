import React, { useContext } from "react";

export type DragontailThemeType = "light" | "dark";

export interface ThemeContext {
  disableButtonFocusRing?: boolean;
  theme: DragontailThemeType;
}

const DragontailContext = React.createContext<ThemeContext>({
  theme: "light",
  disableButtonFocusRing: false,
});

export const useDragontail = () => {
  return useContext(DragontailContext);
};

interface ProviderProps {
  theme?: DragontailThemeType;
  disableButtonFocusRing?: boolean;
  children?: React.ReactNode;
}

export const DragontailProvider: React.FC<ProviderProps> = ({
  children,
  theme = "light",
  disableButtonFocusRing = false,
}) => {
  return (
    <DragontailContext.Provider
      value={{
        theme,
        disableButtonFocusRing,
      }}
    >
      {children}
    </DragontailContext.Provider>
  );
};
