import React, { useContext, ReactNode, useState } from "react";
import { POSITION_STYLES, Toast, ToastSize } from "./Toast";

interface ToastContextType {
  addToast: (data: Omit<ToastData, "id">) => void;
  removeToast: (id: number) => void;
}

export type ToastType = "info" | "warning" | "success" | "danger";
const ToastPositionArr = [
  "top-left",
  "top-right",
  "bottom-left",
  "bottom-right",
] as const;
export type ToastPosition = typeof ToastPositionArr[number];

export interface ToastData {
  id: number;
  type: ToastType;
  title?: string;
  description?: string;
  duration: number; // duration in milliseconds
  position: ToastPosition;
  size?: ToastSize;
  // defaults to 1000
  zIndex?: number;
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
  zIndex?: number;
}> = ({ children, position, zIndex = 50 }) => {
  return (
    <div
      style={{ zIndex }}
      className={`fixed flex flex-col gap-4 ${POSITION_STYLES[position]}`}
    >
      {children}
    </div>
  );
};

const findMaxZIndex = (data: ToastData[]) => {
  let max = 0;
  for (const toast of data) {
    const curr = toast.zIndex || 50;
    if (curr > max) {
      max = curr;
    }
  }
  return max;
};

export const ToastProvider: React.FC<{ children?: ReactNode }> = ({
  children,
}) => {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  const addToast = (data: Omit<ToastData, "id">) => {
    setToasts((prev) => {
      return [
        ...prev,
        { id: Math.random() * Math.random() * prev.length, ...data },
      ];
    });
  };

  const removeToast = (id: number) => {
    setToasts((prev) => {
      return prev.filter((each) => each.id !== id);
    });
  };

  const value: ToastContextType = { addToast, removeToast };
  return (
    <ToastContext.Provider value={value}>
      {children}

      <ToastContainer zIndex={findMaxZIndex(toasts)} position={"bottom-left"}>
        {toasts
          .filter((each) => each.position === "bottom-left")
          .map((each) => (
            <Toast removeToast={removeToast} data={each} key={each.id} />
          ))}
      </ToastContainer>

      <ToastContainer zIndex={findMaxZIndex(toasts)} position={"bottom-right"}>
        {toasts
          .filter((each) => each.position === "bottom-right")
          .map((each) => (
            <Toast removeToast={removeToast} data={each} key={each.id} />
          ))}
      </ToastContainer>

      <ToastContainer zIndex={findMaxZIndex(toasts)} position={"top-left"}>
        {toasts
          .filter((each) => each.position === "top-left")
          .map((each) => (
            <Toast removeToast={removeToast} data={each} key={each.id} />
          ))}
      </ToastContainer>

      <ToastContainer zIndex={findMaxZIndex(toasts)} position={"top-right"}>
        {toasts
          .filter((each) => each.position === "top-right")
          .map((each) => (
            <Toast removeToast={removeToast} data={each} key={each.id} />
          ))}
      </ToastContainer>
    </ToastContext.Provider>
  );
};
