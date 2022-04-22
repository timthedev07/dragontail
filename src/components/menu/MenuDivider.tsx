import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { useMenu } from "./Menu";

export const MenuDivider: FC<
  DetailedHTMLProps<HTMLAttributes<HTMLHRElement>, HTMLHRElement>
> = ({}) => {
  const { theme } = useMenu();

  return (
    <hr
      className={`border-none h-[1px] my-2 ${
        theme === "dark" ? "bg-neutral-100 bg-opacity-20" : "bg-neutral-300"
      }`}
    />
  );
};
