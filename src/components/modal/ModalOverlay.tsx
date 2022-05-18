import { DetailedHTMLProps, forwardRef, HTMLAttributes, } from "react";
import { DragontailThemeType } from "src/context/ThemeContext";
import { getModalContextDefaultProps, useModal } from "./Modal";

export type ModalOverlayProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  theme?: DragontailThemeType;
};

export const ModalOverlay = forwardRef<HTMLDivElement, ModalOverlayProps>(({theme, ...props}, ref) => {
  const {} = useModal("overlay", {
    theme,
    // {...getModalContextDefaultProps()}
  });
  return (
    <div>

    </div>
  )
})