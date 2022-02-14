import React, { useContext } from "react";

type ThemeType = "light" | "dark";

const DragontailContext = React.createContext<ThemeType>("light");

export const useDragontail = () => {
  return useContext(DragontailContext);
};

interface ProviderProps {
  theme?: ThemeType;
}

export const DragontailProvider: React.FC<ProviderProps> = ({
  children,
  theme = "light",
}) => {
  return (
    <DragontailContext.Provider value={theme}>
      {children}
    </DragontailContext.Provider>
  );
};
