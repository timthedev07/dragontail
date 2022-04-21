import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useEffect, useState } from "react";
import { Switch, SwitchProps } from "./Switch";

export default {
  title: "dragontail/Switch",
  component: Switch,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = ({ ...args }) => {
  return <Switch {...args} />;
};

export const Example = Template.bind({});
Example.args = {
  // defaultChecked: true,
} as SwitchProps;
