import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Switch, SwitchProps } from "./Switch";

export default {
  title: "dragontail/Switch",
  component: Switch,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = ({ ...args }) => (
  <Switch {...args} />
);

export const Example = Template.bind({});
Example.args = {} as SwitchProps;
