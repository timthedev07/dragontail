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
  isInvalid: true,
  children: [
    <Input name="email" type="email" id="email" />,
    <FormLabel htmlFor="email" />,
  ],
  roles: {
    "text-field": "email",
    "input-label": "",
  },
} as FormControlProps;
