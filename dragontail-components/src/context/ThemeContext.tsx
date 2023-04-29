import React, { useContext } from "react";

export type DragontailThemeType = "light" | "dark";

export interface ThemeContext {
  disableButtonFocusRing?: boolean;
  theme: DragontailThemeType;
}

const ThemeContext = React.createContext<ThemeContext>({
  theme: "light",
  disableButtonFocusRing: false,
});

export const useTheme = () => {
  return useContext(ThemeContext);
};

export interface ProviderProps {
  theme?: DragontailThemeType;
  disableButtonFocusRing?: boolean;
  children?: React.ReactNode;
}

export const ThemeProvider: React.FC<ProviderProps> = ({
  children,
  theme = "light",
  disableButtonFocusRing = false,
}) => {
  return (
    <ThemeContext.Provider
      value={{
        theme,
        disableButtonFocusRing,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
