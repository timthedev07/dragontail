import { FC, useEffect, useState } from "react";
import { ToastData, ToastPosition, ToastType } from "./ToastContext";
import { ThemeType, useTheme } from "../../context/ThemeContext";
import { forwardRef } from "../../utils/forwardRef";
import { DangerSVG, InfoSVG, SuccessSVG, WarningSVG } from "./Icons";

export type ToastSize = "large" | "normal" | "small";

export interface ToastProps {
  data: ToastData;
  removeToast: (id: number) => void;
  theme?: ThemeType;
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

const SIZE: Record<ToastSize, string> = {
  large: "px-8 py-4 w-80",
  normal: "px-6 py-3 w-72",
  small: "px-4 py-2 w-56",
};

const TEXT: Record<ToastSize, Record<"title" | "description", string>> = {
  large: {
    title: "text-lg",
    description: "text-sm",
  },
  normal: {
    title: "text-base",
    description: "text-xs",
  },
  small: {
    title: "text-sm",
    description: "text-xxs",
  },
};

const ICON_SIZE: Record<ToastSize, string> = {
  small: "w-5 h-5",
  normal: "w-6 h-6",
  large: "w-9 h-9",
};

const ANIMATION_DURATION = 500;

export const Toast: FC<ToastProps> = forwardRef<HTMLDivElement, ToastProps>(
  ({ data, theme: customTheme, removeToast }, ref) => {
    const { theme: appTheme } = useTheme();
    const [shouldFade, setShouldFade] = useState<boolean>(false);
    const theme = customTheme ? customTheme : appTheme;
    const Icon = ICON_MAP[data.type];

    const finalTitle = data.title || genDefaultToastTitle(data.type);
    const animation =
      data.position === "bottom-left" || data.position === "bottom-right"
        ? "animate-toast-up" // is at bottom
        : "animate-toast-down";

    const finalSize = data.size ? data.size : "normal";

    useEffect(() => {
      const time1 = setTimeout(() => {
        setShouldFade(true);
      }, data.duration);

      const time2 = setTimeout(() => {
        removeToast(data.id);
      }, data.duration + ANIMATION_DURATION);

      return () => {
        clearTimeout(time1);
        clearTimeout(time2);
      };
    }, []);

    return (
      <div
        onClick={async () => {
          setShouldFade(true);
          await new Promise((res) => setTimeout(res, ANIMATION_DURATION));
          removeToast(data.id);
        }}
        ref={ref}
        className={`${
          theme === "dark"
            ? "toast-dark-base border-slate-600/50"
            : "toast-light-base border-slate-300/60"
        } toast-base border ${
          SIZE[finalSize]
        } flex justify-between items-center cursor-pointer transition duration-200 ${
          theme === "dark" ? "hover:bg-slate-900/80" : "hover:bg-slate-50/80"
        } ${POSITION_STYLES[data.position]} ${
          shouldFade ? "animate-toast-fade" : animation
        }`}
      >
        <div className="flex flex-col w-[85%]">
          <span className={`font-semibold ${TEXT[finalSize]["title"]}`}>
            {finalTitle}
          </span>
          {data.description ? (
            <span
              className={`${
                theme === "dark" ? "text-white/70" : "text-black/70"
              } break-words ${TEXT[finalSize]["description"]}`}
            >
              {data.description}
            </span>
          ) : null}
        </div>
        <Icon className={ICON_SIZE[finalSize]} />
      </div>
    );
  }
);
