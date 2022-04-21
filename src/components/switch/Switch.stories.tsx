import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CSTypeValues } from "../../types/Colors";
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

const ColorsTemplate: ComponentStory<typeof Switch> = ({
  checkedColor: _,
  ...args
}) => {
  return (
    <div className="flex flex-col gap-3">
      {CSTypeValues.filter((each) => each !== "neutral").map((each) => (
        <Switch defaultChecked {...args} checkedColor={each as any} />
      ))}
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

export const Colors = ColorsTemplate.bind({});
export const ColorsDarkTheme = ColorsTemplate.bind({});
ColorsDarkTheme.args = {
  theme: "dark",
} as SwitchProps;
ColorsDarkTheme.parameters = { backgrounds: { default: "dark" } };
