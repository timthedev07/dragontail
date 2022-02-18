import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CustomInputProps } from "../input/Input";
import { TextArea } from "./TextArea";

export default {
  title: "dragontail/TextArea",
  component: TextArea,
  decorators: [
    (Story) => {
      return (
        <div className="w-80">
          <Story />
        </div>
      );
    },
  ],
} as ComponentMeta<typeof TextArea>;

const PlainTemplate: ComponentStory<typeof TextArea> = (args) => (
  <TextArea {...args} />
);

export const PlainTextArea = PlainTemplate.bind({});
PlainTextArea.args = {
  variant: "outline",
} as CustomInputProps;
