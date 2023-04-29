import React, { useContext } from "react";
import { ToastProvider } from "../components/toast";
import { ThemeProvider, ProviderProps } from "./ThemeContext";

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

export const DragontailProvider: React.FC<ProviderProps> = ({
  children,
  theme = "light",
  disableButtonFocusRing = false,
}) => {
  return (
    <ThemeProvider
      {...{
        theme,
        disableButtonFocusRing,
      }}
    >
      <ToastProvider>{children}</ToastProvider>
    </ThemeProvider>
  );
};
