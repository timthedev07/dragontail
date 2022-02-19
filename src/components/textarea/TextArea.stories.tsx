import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CustomInputProps } from "../input/Input";
import { Textarea } from "./Textarea";

export default {
  title: "dragontail/TextArea",
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
