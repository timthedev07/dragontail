import { FC, useEffect } from "react";
import { ToastData, ToastPosition, ToastType } from "./ToastContext";
import { DragontailThemeType, useDragontail } from "../../context/ThemeContext";
import { forwardRef } from "../../utils/forwardRef";
import { DangerSVG, InfoSVG, SuccessSVG, WarningSVG } from "./Icons";

export interface ToastProps {
  data: ToastData;
  removeToast: (id: number) => void;
  theme?: DragontailThemeType;
}

const ICON_MAP: Record<ToastType, typeof DangerSVG> = {
  danger: DangerSVG,
  info: InfoSVG,
  success: SuccessSVG,
  warning: WarningSVG,
};

export const POSITION_STYLES: Record<ToastPosition, string> = {
  "top-left": "top-5 left-5",
  "top-right": "top-5 right-5",
  "bottom-left": "bottom-5 left-5",
  "bottom-right": "bottom-5 right-5",
};

export const genDefaultToastTitle = (toastType: ToastType) => {
  switch (toastType) {
    case "danger":
      return "Watch out!";
    case "info":
      return "Info";
    case "success":
      return "Success!";
    case "warning":
      return "Warning!";
  }
};

export const Toast: FC<ToastProps> = forwardRef<HTMLDivElement, ToastProps>(
  ({ data, theme: customTheme, removeToast }, ref) => {
    const { theme: appTheme } = useDragontail();
    const theme = customTheme ? customTheme : appTheme;
    const Icon = ICON_MAP[data.type];

    const finalTitle = data.title || genDefaultToastTitle(data.type);
    const animation =
      data.position === "bottom-left" || data.position === "bottom-right"
        ? "animate-toast-up" // is at bottom
        : "animate-toast-down";

    useEffect(() => {
      const time = setTimeout(() => {
        removeToast(data.id);
      }, data.duration);

      return () => {
        clearTimeout(time);
      };
    }, []);

    return (
      <div
        onClick={() => {
          removeToast(data.id);
        }}
        ref={ref}
        className={`${
          theme === "dark"
            ? "toast-dark-base border-slate-600/50"
            : "toast-light-base border-slate-300/60"
        } toast-base border flex justify-between items-center ${animation} cursor-pointer transition duration-200 ${
          theme === "dark" ? "hover:bg-slate-900/80" : "hover:bg-slate-50/80"
        } ${POSITION_STYLES[data.position]}`}
      >
        <div className="flex flex-col">
          <span className="font-semibold"> {finalTitle}</span>
          {data.description ? (
            <span
              className={`${
                theme === "dark" ? "text-white/70" : "text-black/70"
              } text-xs`}
            >
              {data.description}
            </span>
          ) : null}
        </div>
        <Icon className="w-6 h-6" />
      </div>
    );
  }
);
