import { FC } from "react";
import { ToastData } from "./ToastContext";

interface ToastProps {
  data: ToastData;
  toasts: ToastData[];
}

export const Toast: FC<ToastProps> = ({}) => {
  return <div></div>;
};
