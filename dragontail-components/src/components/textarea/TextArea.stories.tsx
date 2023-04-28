import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CustomInputProps } from "../input/Input";
import { Textarea } from "./TextArea";

export default {
  title: "dragontail/Textarea",
  component: Textarea,
  decorators: [
    (Story) => {
      return (
        <div className="w-80">
          <Story />
        </div>
      );
    },
  ],
} as ComponentMeta<typeof Textarea>;

// const PlainTemplate: ComponentStory<typeof Textarea> = (args) => (
//   <Textarea {...args} />
// );

const TextareasTemplate: ComponentStory<typeof Textarea> = ({
  variant,
  ...args
}) => (
  <>
    <Textarea variant="solid" {...args} />
    <Textarea variant="outline" {...args} />
    <Textarea variant="underline" {...args} />
  </>
);

const ResizeTemplate: ComponentStory<typeof Textarea> = ({
  resize,
  placeholder,
  ...args
}) => (
  <>
    <Textarea {...args} resize="horizontal" placeholder="Horizontal"></Textarea>
    <Textarea {...args} resize="vertical" placeholder="Vertical"></Textarea>
    <Textarea {...args} resize="none" placeholder="None"></Textarea>
    <Textarea {...args} resize="both" placeholder="Both"></Textarea>
  </>
);

export const LightExamples = TextareasTemplate.bind({});
LightExamples.args = {
  placeholder: "Light Textarea",
} as CustomInputProps;

export const DarkExamples = TextareasTemplate.bind({});
DarkExamples.args = {
  placeholder: "Dark Textarea",
  theme: "dark",
} as CustomInputProps;
DarkExamples.parameters = { backgrounds: { default: "dark" } };

export const ResizeExamples = ResizeTemplate.bind({});
ResizeExamples.args = {
  theme: "dark",
};
ResizeExamples.parameters = { backgrounds: { default: "dark" } };

export const InvalidExamples = TextareasTemplate.bind({});
InvalidExamples.args = {
  placeholder: "Invalid text area",
  isInvalid: true,
} as CustomInputProps;
