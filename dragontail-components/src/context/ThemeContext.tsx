import React, { useContext } from "react";

export type ThemeType = "dark" | "light";

export interface ThemeContextType {
  disableButtonFocusRing?: boolean;
  theme: ThemeType;
}

const ThemeContext = React.createContext<ThemeContextType>({
  theme: "light",
  disableButtonFocusRing: false,
});

export const useTheme = () => {
  return useContext(ThemeContext);
};

export interface ProviderProps {
  theme?: ThemeType;
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
