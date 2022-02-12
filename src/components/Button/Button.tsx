import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

export interface CustomButtonProps {
  color?: "sky" | "teal" | "red" | "orange" | "dark" | "light" | "cyan";
}

export const colorStates = (color: CustomButtonProps["color"]) => {
  switch (color) {
    case "sky": {
      return {
        normal: "sky-500",
        click: "sky-800",
        hover: "sky-600",
        text: "white",
      };
    }
    case "teal": {
      return {
        normal: "sky-500",
        click: "sky-800",
        hover: "sky-600",
        text: "white",
      };
    }
    default: {
      return {
        normal: "slate-900",
        click: "black",
        hover: "slate-800",
        text: "white",
      };
    }
  }
};

export const Button: FC<
  DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> &
    CustomButtonProps
> = (props) => {
  const colors = colorStates("sky");
  return (
    <button
      className={`w-96 hover:bg-${colors.hover} focus:bg-${colors.click} bg-${colors.normal} text-${colors.text} rounded-md text-center`}
      {...props}
    ></button>
  );
};
