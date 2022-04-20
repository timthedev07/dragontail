import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input } from "../input";
import { FormControl, FormControlProps } from "./FormControl";
import { FormLabel } from "./FormLabel";

export default {
  title: "dragontail/FormControl",
  component: FormControl,
} as ComponentMeta<typeof FormControl>;

const Template: ComponentStory<typeof FormControl> = (args) => (
  <FormControl {...args} />
);

export const Example = Template.bind({});
Example.args = {
  children: [
    <FormLabel htmlFor="email">Email</FormLabel>,
    <Input
      name="email"
      type="email"
      id="email"
      rightAddon="@gmail.com"
      placeholder="john.smith"
    />,
  ],
  theme: "dark",
  className: "w-[400px]",
} as FormControlProps;
Example.parameters = { backgrounds: { default: "dark" } };
