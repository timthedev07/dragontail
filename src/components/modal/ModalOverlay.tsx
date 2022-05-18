import { DetailedHTMLProps, forwardRef, HTMLAttributes, } from "react";
import { DragontailThemeType } from "src/context/ThemeContext";
import { getModalContextDefaultProps, useModal } from "./Modal";

export type ModalOverlayProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  theme?: DragontailThemeType;
};

export const ModalOverlay = forwardRef<HTMLDivElement, ModalOverlayProps>(({theme, ...props}, ref) => {
  const { onClose } = useModal("overlay", {
    theme,
    ...getModalContextDefaultProps(),
    componentRole: "overlay"
  });

  return (
    <div {...props} onClick={() => {
      onClose();
    }} className="absolute w-screen h-screen z-[100000] bg-red-100">
      
    </div>
  )
});