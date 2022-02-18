import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input, CustomInputProps } from "./Input";
import { PasswordInput } from "./PasswordInput";

export default {
  title: "dragontail/Input",
  component: Input,
  decorators: [
    (Story) => {
      return (
        <div className="w-80">
          <Story />
        </div>
      );
    },
  ],
} as ComponentMeta<typeof Input>;

const InputsTemplate: ComponentStory<typeof Input> = (args) => {
  args.className = "m-4";
  return (
    <div>
      <Input variant="solid" {...args} />
      <Input variant="outline" {...args} />
      <Input variant="underline" {...args} />
    </div>
  );
};
const PasswordTemplate: ComponentStory<typeof Input> = (args) => (
  <PasswordInput {...args} />
);
const PlainTemplate: ComponentStory<typeof Input> = (args) => (
  <Input {...args} />
);

export const LightExample = InputsTemplate.bind({});
LightExample.args = {
  placeholder: "Light Input",
} as CustomInputProps;

export const DarkExample = InputsTemplate.bind({});
DarkExample.args = {
  placeholder: "Dark Input",
  theme: "dark",
} as CustomInputProps;
DarkExample.parameters = { backgrounds: { default: "dark" } };

export const PasswordExample = PasswordTemplate.bind({});
PasswordExample.args = {
  placeholder: "Password",
  size: "md",
} as CustomInputProps;

export const LeftAddonExample = PlainTemplate.bind({});
LeftAddonExample.args = {
  placeholder: "Phone number",
  leftAddon: "+86",
} as CustomInputProps;
