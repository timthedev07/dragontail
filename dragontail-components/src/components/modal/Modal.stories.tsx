import { Button } from '../button';
import { Modal, ModalProps } from './Modal';
import { useModalDisclosure } from './modalDisclosure';
import { ModalOverlay } from './ModalOverlay';

const BASE = (args: ModalProps) => {
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
  )
}

const Template = (args: ModalProps) => {
  return (
    <BASE {...args} />
  );
};

export default {
  title: "dragontail/Modal",
  component: BASE,
};

export const BasicLight = Template.bind({});