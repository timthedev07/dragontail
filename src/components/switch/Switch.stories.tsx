import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Switch, SwitchProps } from "./Switch";

export default {
  title: "dragontail/Switch",
  component: Switch,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = ({ scale: _, ...args }) => {
  return (
    <div className="flex flex-col gap-3">
      <Switch {...args} scale="sm" />
      <Switch {...args} scale="md" />
      <Switch {...args} scale="lg" />
      <Switch {...args} scale="xl" />
    </div>
  );
};

export const Examples = Template.bind({});

export const DarkExamples = Template.bind({});
DarkExamples.args = {
  theme: "dark",
} as SwitchProps;
DarkExamples.parameters = { backgrounds: { default: "dark" } };

export const DefaultChecked = Template.bind({});
DefaultChecked.args = {
  defaultChecked: true,
  theme: "dark",
} as SwitchProps;
DefaultChecked.parameters = { backgrounds: { default: "dark" } };

export const Disabled = Template.bind({});
Disabled.args = {
  isDisabled: true,
  theme: "dark",
} as SwitchProps;
Disabled.parameters = { backgrounds: { default: "dark" } };
