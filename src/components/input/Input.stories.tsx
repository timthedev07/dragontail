import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input, CustomInputProps } from "./Input";
import { PasswordInput } from "./PasswordInput";

export default {
  title: "dragontail/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const InputTemplate: ComponentStory<typeof Input> = (args) => (
  <Input {...args} />
);
const PasswordTemplate: ComponentStory<typeof Input> = (args) => (
  <PasswordInput {...args} />
);

export const LightExample = InputTemplate.bind({});
LightExample.args = {
  placeholder: "Username",
} as CustomInputProps;
export const DarkExample = InputTemplate.bind({});
DarkExample.args = {
  placeholder: "Name",
  theme: "dark",
} as CustomInputProps;
DarkExample.parameters = { backgrounds: { default: "dark" } };

export const PWExample = PasswordTemplate.bind({});
PWExample.args = {
  placeholder: "Password",
} as CustomInputProps;
