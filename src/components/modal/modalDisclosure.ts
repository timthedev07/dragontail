import { useState } from "react";

export const useModalDisclosure = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClose = () => {
    alert("State update");
    setIsOpen(false);
  }

  const onOpen = () => {
    setIsOpen(true);
  }
  
  return {
    isOpen,
    onClose,
    onOpen,
  }
};