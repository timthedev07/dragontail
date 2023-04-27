import React, { useContext, ReactNode, useState } from "react";
import { Toast } from "./Toast";

interface ToastContextType {
  addToast: (data: ToastData) => void;
  removeToast: (id: number) => void;
}

export type ToastType = "info" | "warning" | "success" | "danger";
export enum ToastPosition {
  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
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

export const ToastProvider: React.FC<{ children?: ReactNode }> = ({
  children,
}) => {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  const addToast = (data: ToastData) => {
    setToasts((prev) => {
      prev.push(data);
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

      {toasts.map((each) => (
        <Toast removeToast={removeToast} data={each} key={each.id} />
      ))}
    </ToastContext.Provider>
  );
};
