import React, { useContext } from "react";

export type DragontailThemeType = "light" | "dark";

const DragontailContext = React.createContext<DragontailThemeType>("light");

export const useDragontail = () => {
  return useContext(DragontailContext);
};

interface ProviderProps {
  theme?: DragontailThemeType;
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
