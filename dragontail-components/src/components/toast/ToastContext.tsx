import React, { useContext, ReactNode, useState } from "react";
import { POSITION_STYLES, Toast } from "./Toast";

interface ToastContextType {
  addToast: (data: Omit<ToastData, "id">) => void;
  removeToast: (id: number) => void;
}

export type ToastType = "info" | "warning" | "success" | "danger";
export enum ToastPosition {
  TopLeft,
  TopRight,
  BottomLeft,
  BottomRight,
}

export interface ToastData {
  id: number;
  type: ToastType;
  title?: string;
  description?: string;
  duration: number; // duration in milliseconds
  position: ToastPosition;
}

const ToastContext = React.createContext<ToastContextType>({
  addToast: () => {},
  removeToast: () => {},
});

export const useToast = () => {
  return useContext(ToastContext);
};

const ToastContainer: React.FC<{
  children: ReactNode;
  position: ToastPosition;
}> = ({ children, position }) => {
  return (
    <div
      className={`fixed flex flex-col gap-2 h-screen ${POSITION_STYLES[position]}`}
    >
      {children}
    </div>
  );
};

export const ToastProvider: React.FC<{ children?: ReactNode }> = ({
  children,
}) => {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  const addToast = (data: Omit<ToastData, "id">) => {
    setToasts((prev) => {
      prev.push({ id: prev.length, ...data });
      return prev;
    });
  };

  const removeToast = (id: number) => {
    setToasts((prev) => {
      prev.splice(
        prev.findIndex((val) => val.id === id),
        1
      );
      return prev;
    });
  };

  const value: ToastContextType = { addToast, removeToast };
  return (
    <ToastContext.Provider value={value}>
      {children}

      {Object.values(ToastPosition).map((position) => {
        return (
          <ToastContainer position={position as any} key={position}>
            {toasts
              .filter((each) => each.position === position)
              .map((each) => (
                <Toast removeToast={removeToast} data={each} key={each.id} />
              ))}
          </ToastContainer>
        );
      })}
    </ToastContext.Provider>
  );
};
