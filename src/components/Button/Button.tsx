import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

type CSType =
  | "sky"
  | "teal"
  | "red"
  | "orange"
  | "dark"
  | "light"
  | "cyan"
  | "emerald"
  | "green";

export interface CustomButtonProps {
  color?: CSType;
}

const COLORS: Record<CSType, string> = {
  cyan: "bg-cyan-400 hover:bg-cyan-300 focus:bg-cyan-600 text-white",
  dark: "bg-slate-900 hover:bg-slate-800 focus:bg-black text-white",
  light: "bg-slate-200 hover:bg-slate-50 focus:bg-slate-400 text-black",
  orange: "bg-orange-500 hover:bg-orange-400 focus:bg-orange-700 text-white",
  red: "bg-red-600 hover:bg-red-500 focus:bg-red-700 text-white",
  sky: "bg-sky-500 hover:bg-sky-400 focus:bg-sky-700 text-white",
  teal: "bg-teal-400 hover:bg-teal-300 focus:bg-teal-600 text-white",
  emerald:
    "bg-emerald-500 hover:bg-emerald-400 focus:bg-emerald-600 text-white",
  green: "bg-green-500 hover:bg-green-400 focus:bg-green-600 text-white",
};

export const Button: FC<
  DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> &
    CustomButtonProps
> = (props) => {
  return (
    <button
      className={`w-96 ${
        COLORS[props.color || "orange"]
      } rounded-md text-center`}
      {...props}
    ></button>
  );
};
