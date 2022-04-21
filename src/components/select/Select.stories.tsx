import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Select, SelectProps } from "./Select";

export default {
  title: "dragontail/Select",
  component: Select,
} as ComponentMeta<typeof Select>;

const SelectTemplate: ComponentStory<typeof Select> = ({
  variant: _,
  ...args
}) => (
  <div className="gap-4 flex flex-col w-80">
    <Select {...args} variant="outline" />
    <Select {...args} variant="solid" />
    <Select {...args} variant="underline" />
  </div>
);

export const Examples = SelectTemplate.bind({});
Examples.args = {
  children: [
    <option>TypeScript</option>,
    <option>C++</option>,
    <option>Python</option>,
  ],
} as SelectProps;

export const DarkExamples = SelectTemplate.bind({});
DarkExamples.args = {
  children: [
    <option>TypeScript</option>,
    <option>C++</option>,
    <option>Python</option>,
  ],
  theme: "dark",
} as SelectProps;
DarkExamples.parameters = { backgrounds: { default: "dark" } };
