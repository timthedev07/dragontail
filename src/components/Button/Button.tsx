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
  cyan: "bg-cyan-400 hover:bg-cyan-300 focus:bg-cyan-500 text-white",
  dark: "bg-slate-800 hover:bg-slate-700 focus:bg-slate-900 text-white",
  light: "bg-neutral-100 hover:bg-neutral-50 focus:bg-slate-100 text-black",
  orange: "bg-orange-500 hover:bg-orange-400 focus:bg-orange-600 text-white",
  red: "bg-red-600 hover:bg-red-500 focus:bg-red-700 text-white",
  sky: "bg-sky-500 hover:bg-sky-400 focus:bg-sky-600 text-white",
  teal: "bg-teal-400 hover:bg-teal-300 focus:bg-teal-500 text-white",
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
      className={`px-4 py-2 ${
        COLORS[props.color || "orange"]
      } rounded-md text-center focus:outline-offset-2 focus:outline focus:outline-2 focus:outline-blue-600`}
      {...props}
    ></button>
  );
};
