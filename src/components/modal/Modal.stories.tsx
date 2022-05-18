// Button.stories.js|jsx

import { Button } from '../button';

import { Modal } from './Modal';
import { useModalDisclosure } from './modalDisclosure';

export default {
  title: 'Modal',
  component: Modal,
};

const Template = () => {
  const { isOpen, onOpen, onClose } = useModalDisclosure();

  return (
    <>
      <Button onClick={onOpen}>
        Open
      </Button>
      <Modal onClose={onClose} isOpen={isOpen}>
        
      </Modal>
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = {
   primary: true,
   label: 'Button',
};