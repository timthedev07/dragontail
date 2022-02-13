import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button, CustomButtonProps } from "./Button";

export default {
  title: "dragontail/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Example = Template.bind({});
Example.args = {
  children: "Click me",
  color: "cyan",
} as CustomButtonProps;
