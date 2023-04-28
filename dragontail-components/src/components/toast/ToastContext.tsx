import React, { useContext, ReactNode, useState } from "react";
import { useEffect } from "react";
import { POSITION_STYLES, Toast } from "./Toast";

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
    console.log(data);
    setToasts((prev) => {
      prev.push({ id: prev.length, ...data });
      console.log("Now: ", prev);
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
    console.log("Toast removed");
  };

  useEffect(() => {
    console.log("Toasts:", toasts);
  }, [toasts]);

  const value: ToastContextType = { addToast, removeToast };
  return (
    <ToastContext.Provider value={value}>
      {children}

      {Object.values(ToastPositionArr).map((position) => {
        return (
          <ToastContainer position={position} key={position}>
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
