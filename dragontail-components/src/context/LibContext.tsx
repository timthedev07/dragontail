import React, { useContext } from "react";
import { ThemeContextType, ThemeProvider } from "./ThemeContext";
import { ToastProvider } from "../components";

const DragontailContext = React.createContext(null);

export const useDragontail = () => {
  return useContext(DragontailContext);
};

export const DragontailProvider: React.FC<
  { children: React.ReactNode } & ThemeContextType
> = ({ children, ...rest }) => {
  return (
    <DragontailContext.Provider value={null}>
      <ThemeProvider {...rest}>
        <ToastProvider>{children}</ToastProvider>
      </ThemeProvider>
    </DragontailContext.Provider>
  );
};
