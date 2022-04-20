import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input, PasswordInput } from "../input";
import { FormControl, FormControlProps } from "./FormControl";
import { FormErrorMessage } from "./FormErrorMessage";
import { FormHelperText } from "./FormHelperText";
import { FormLabel } from "./FormLabel";

export default {
  title: "dragontail/FormControl",
  component: FormControl,
} as ComponentMeta<typeof FormControl>;

const Template: ComponentStory<typeof FormControl> = (args) => (
  <FormControl {...args} />
);

export const DarkBasic = Template.bind({});
DarkBasic.args = {
  children: [
    <FormLabel htmlFor="email">Email</FormLabel>,
    <Input
      name="email"
      type="email"
      id="email"
      rightAddon="@gmail.com"
      placeholder="john.smith"
    />,
    <FormHelperText>We will never leak your email to Vladimir.</FormHelperText>,
  ],
  theme: "dark",
  className: "w-[400px]",
} as FormControlProps;
DarkBasic.parameters = { backgrounds: { default: "dark" } };

export const LightBasic = Template.bind({});
LightBasic.args = {
  children: [
    <FormLabel htmlFor="password">Password</FormLabel>,
    <PasswordInput id="password" />,
    <FormHelperText>It is encrypted with Caesar cipher :)</FormHelperText>,
  ],
  className: "w-[400px]",
} as FormControlProps;

export const WithErrorMessageDark = Template.bind({});
WithErrorMessageDark.args = {
  children: [
    <FormLabel htmlFor="email">Email</FormLabel>,
    <Input type="email" id="email" />,
    <FormErrorMessage>Bad Email! Idc what you typed!</FormErrorMessage>,
  ],
  className: "w-[400px]",
  theme: "dark",
  isInvalid: true,
} as FormControlProps;
WithErrorMessageDark.parameters = { backgrounds: { default: "dark" } };

export const WithErrorMessage = Template.bind({});
WithErrorMessage.args = {
  children: [
    <FormLabel htmlFor="email">Email</FormLabel>,
    <Input type="email" id="email" />,
    <FormErrorMessage>Bad Email! Idc what you typed!</FormErrorMessage>,
  ],
  className: "w-[400px]",
  isInvalid: true,
} as FormControlProps;
