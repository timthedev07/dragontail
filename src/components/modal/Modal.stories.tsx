// Button.stories.js|jsx

import { Button } from '../button';

import { Modal, ModalProps } from './Modal';
import { useModalDisclosure } from './modalDisclosure';
import { ModalOverlay } from './ModalOverlay';

export default {
  title: "dragontail/Modal",
  component: Modal,
};

const Template = (args: ModalProps) => {
  const { isOpen, onOpen, onClose } = useModalDisclosure();

  return (
    <>
      <Button onClick={onOpen}>
        Open
      </Button>
      <Modal {...args} onClose={onClose} isOpen={isOpen}>
        <ModalOverlay />
      </Modal>
    </>
  );
};

export const BasicLight = Template.bind({});