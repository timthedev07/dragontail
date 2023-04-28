import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input, PasswordInput } from "../input";
import { Textarea } from "../textarea";
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

export const LightBasic = Template.bind({});
LightBasic.args = {
  label: "password",
  children: [
    <FormLabel>Password</FormLabel>,
    <PasswordInput />,
    <FormHelperText>It is encrypted with Caesar cipher :)</FormHelperText>,
  ],
  className: "w-[400px]",
} as FormControlProps;

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

export const LightRequired = Template.bind({});
LightRequired.args = {
  children: [
    <FormLabel htmlFor="password">Password</FormLabel>,
    <PasswordInput id="password" />,
    <FormHelperText>It is encrypted with Caesar cipher :)</FormHelperText>,
  ],
  className: "w-[400px]",
  isRequired: true,
} as FormControlProps;

export const DarkRequired = Template.bind({});
DarkRequired.args = {
  children: [
    <FormLabel htmlFor="password">Password</FormLabel>,
    <PasswordInput id="password" />,
    <FormHelperText>It is encrypted with Caesar cipher :)</FormHelperText>,
  ],
  className: "w-[400px]",
  isRequired: true,
  theme: "dark",
} as FormControlProps;
DarkRequired.parameters = { backgrounds: { default: "dark" } };

export const InvalidWithErrorMessage = Template.bind({});
InvalidWithErrorMessage.args = {
  children: [
    <FormLabel htmlFor="email">Email</FormLabel>,
    <Input type="email" id="email" />,
    <FormErrorMessage>Bad Email! Idc what you typed!</FormErrorMessage>,
  ],
  className: "w-[400px]",
  isInvalid: true,
} as FormControlProps;

export const InvalidWithErrorMessageDark = Template.bind({});
InvalidWithErrorMessageDark.args = {
  children: [
    <FormLabel htmlFor="email">Email</FormLabel>,
    <Input type="email" id="email" />,
    <FormErrorMessage>Bad Email! Idc what you typed!</FormErrorMessage>,
  ],
  className: "w-[400px]",
  theme: "dark",
  isInvalid: true,
} as FormControlProps;
InvalidWithErrorMessageDark.parameters = { backgrounds: { default: "dark" } };

export const Disabled = Template.bind({});
Disabled.args = {
  children: [
    <FormLabel htmlFor="password">Name</FormLabel>,
    <Input id="password" />,
    <FormHelperText>I don't want your name</FormHelperText>,
  ],
  className: "w-[400px]",
  isDisabled: true,
} as FormControlProps;

export const DarkDisabled = Template.bind({});
DarkDisabled.args = {
  children: [
    <FormLabel htmlFor="password">Name</FormLabel>,
    <Input id="password" />,
    <FormHelperText>I don't want your name</FormHelperText>,
  ],
  className: "w-[400px]",
  isDisabled: true,
  theme: "dark",
} as FormControlProps;
DarkDisabled.parameters = { backgrounds: { default: "dark" } };

export const WithTextArea = Template.bind({});
WithTextArea.args = {
  children: [
    <FormLabel htmlFor="opinion">Your Opinion</FormLabel>,
    <Textarea id="opinion" />,
    <FormHelperText>What do you think?</FormHelperText>,
  ],
  className: "w-[400px]",
  isDisabled: true,
  isRequired: true,
  isInvalid: true,
  variant: "underline",
} as FormControlProps;

export const WithTextAreaDark = Template.bind({});
WithTextAreaDark.args = {
  children: [
    <FormLabel htmlFor="opinion">Your Opinion</FormLabel>,
    <Textarea id="opinion" />,
    <FormHelperText>What do you think?</FormHelperText>,
  ],
  className: "w-[400px]",
  isDisabled: true,
  isRequired: true,
  isInvalid: true,
  variant: "underline",
  theme: "dark",
} as FormControlProps;
WithTextAreaDark.parameters = { backgrounds: { default: "dark" } };
