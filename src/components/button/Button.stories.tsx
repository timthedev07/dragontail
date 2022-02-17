import { ComponentStory, ComponentMeta } from "@storybook/react";
import { RightArrow } from "../../stories-utils/RightArrow";
import { EmailIcon } from "../../stories-utils/EmailIcon";
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

export const EmailMe = Template.bind({});
EmailMe.args = {
  children: "Email Me",
  color: "teal",
  leftIcon: <EmailIcon />,
} as CustomButtonProps;

export const GhostButton = Template.bind({});
GhostButton.args = {
  color: "cyan",
  children: "Ghost button",
  variant: "ghost",
} as CustomButtonProps;

export const OutlineButton = Template.bind({});
OutlineButton.args = {
  color: "orange",
  children: "Outline button",
  variant: "outline",
} as CustomButtonProps;

export const ButtonWithArrow = Template.bind({});
ButtonWithArrow.args = {
  color: "teal",
  variant: "ghost",
  children: "Enter",
  rightIcon: <RightArrow />,
} as CustomButtonProps;
