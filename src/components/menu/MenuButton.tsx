import { ClassAttributes, HTMLAttributes } from "react";
import { forwardRef } from "../../utils/forwardRef";
import { Button } from "../button";
import { CustomButtonProps } from "../button/Button";
import { useMenu } from "./Menu";

export type MenuButtonType = ClassAttributes<HTMLButtonElement> &
  HTMLAttributes<HTMLButtonElement> &
  CustomButtonProps;

export const MenuButton = forwardRef<HTMLButtonElement, MenuButtonType>(
  ({ ref: _, ...props }, ref) => {
    const { close, open, isOpen, theme } = useMenu();

    return (
      <Button
        color="neutral"
        theme={theme}
        ref={ref}
        onClick={() => {
          if (isOpen) {
            close();
          } else {
            open();
          }
        }}
        {...props}
        rightIcon={
          <svg
            className="w-[70%] h-[70%]"
            id="Layer_1"
            version="1.1"
            stroke="currentColor"
            fill="currentColor"
            viewBox="0 0 512 512"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path d="M256,298.3L256,298.3L256,298.3l174.2-167.2c4.3-4.2,11.4-4.1,15.8,0.2l30.6,29.9c4.4,4.3,4.5,11.3,0.2,15.5L264.1,380.9  c-2.2,2.2-5.2,3.2-8.1,3c-3,0.1-5.9-0.9-8.1-3L35.2,176.7c-4.3-4.2-4.2-11.2,0.2-15.5L66,131.3c4.4-4.3,11.5-4.4,15.8-0.2L256,298.3  z" />
          </svg>
        }
      />
    );
  }
);
