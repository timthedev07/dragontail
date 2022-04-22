import { ClassAttributes, FC, HTMLAttributes } from "react";
import { Button } from "../button";
import { CustomButtonProps } from "../button/Button";
import { useMenu } from "./Menu";

export const MenuButton: FC<
  ClassAttributes<HTMLButtonElement> &
    HTMLAttributes<HTMLButtonElement> &
    CustomButtonProps
> = (props) => {
  const { setIsOpen } = useMenu();

  return (
    <Button
      onClick={() => {
        setIsOpen((prev) => !prev);
      }}
      {...props}
      rightIcon={
        <svg
          className="w-[60%] h-[60%]"
          id="Layer_1"
          version="1.1"
          viewBox="0 0 512 512"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <polygon points="396.6,160 416,180.7 256,352 96,180.7 115.3,160 256,310.5 " />
        </svg>
      }
    />
  );
};
