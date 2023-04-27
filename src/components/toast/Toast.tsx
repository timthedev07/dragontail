import { FC } from "react";
import { ToastData, ToastType } from "./ToastContext";
import { DragontailThemeType, useDragontail } from "../../context/ThemeContext";
import { forwardRef } from "../../utils/forwardRef";
import { DangerSVG, InfoSVG, SuccessSVG, WarningSVG } from "./Icons";

export interface ToastProps {
  data: ToastData;
  toasts: ToastData[];
  theme?: DragontailThemeType;
}

const ICON_MAP: Record<ToastType, typeof DangerSVG> = {
  danger: DangerSVG,
  info: InfoSVG,
  success: SuccessSVG,
  warning: WarningSVG,
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
  ({ data, theme: customTheme }, ref) => {
    const { theme: appTheme } = useDragontail();
    const theme = customTheme ? customTheme : appTheme;
    const Icon = ICON_MAP[data.type];

    const finalTitle = data.title || genDefaultToastTitle(data.type);

    return (
      <div
        ref={ref}
        className={`${
          theme === "dark"
            ? "toast-dark-base border-slate-600/50"
            : "toast-light-base border-slate-300/60"
        } toast-base border flex justify-between items-center`}
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
