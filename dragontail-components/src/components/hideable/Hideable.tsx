import {
  DetailedHTMLProps,
  forwardRef,
  HTMLAttributes,
  ReactNode,
  SVGProps,
  useState,
} from "react";
import { DragontailThemeType, useDragontail } from "../../context/ThemeContext";

export type HideableProps = {
  hideableLabel: string;
  theme?: DragontailThemeType;
  className?: string;
  content: ReactNode;
  rounded?: boolean;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const ArrowSVG = forwardRef<
  SVGSVGElement,
  SVGProps<SVGSVGElement> & { theme: DragontailThemeType }
>(({ theme, ...props }, ref) => {
  return (
    <svg
      ref={ref}
      viewBox="0 0 96 96"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        className={theme === "dark" ? "fill-white" : "fill-black"}
        d="M81.846 25.388a6.024 6.024 0 0 0-8.45.767L48 56.625l-25.396-30.47a5.999 5.999 0 1 0-9.211 7.689l30.001 36.001a5.997 5.997 0 0 0 9.212 0l30.001-36.002a6.008 6.008 0 0 0-.761-8.455Z"
      />
    </svg>
  );
});

ArrowSVG.displayName = "DrawerArrow";

export const Hideable = forwardRef<HTMLDivElement, HideableProps>(
  ({ hideableLabel, theme: pt, content, className = "", rounded = false }, ref) => {
    const { theme } = useDragontail();
    const [open, setOpen] = useState<boolean>(false);
    const t = pt || theme;

    const topRounding = rounded ? "rounded-t-md" : "";
    const bottomRounding = rounded ? "rounded-b-md" : "";

    return (
      <div
        className={`${topRounding} ${className} ${t === "dark" ? "text-white" : "text-black"}`}
        ref={ref}
      >
        <button
          className={`w-full flex ${topRounding} items-center justify-between py-2 px-4 border-b-2 border-b-slate-500/50 transition duration-200 ${
            t === "dark"
              ? "text-white hover:bg-slate-500/30"
              : "text-black hover:bg-slate-600/20"
          } font-semibold`}
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        >
          {hideableLabel}
          <ArrowSVG
            className={`transition-transform transform duration-300 ${
              open ? "rotate-180" : ""
            } w-4 h-4`}
            theme={t}
          />
        </button>
        <div
          className={`px-4 py-3 transition-transform duration-300 bg-inherit ${
            open ? "block translate-y-0" : "hidden -translate-y-8"
          } ${
            t === "dark" ? "text-white/80" : "text-black/90"
          } ${bottomRounding} border-x-2 border-slate-500/50 border-b-2`}
        >
          {content}
        </div>
      </div>
    );
  }
);
