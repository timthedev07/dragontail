import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Menu, MenuContextProps } from "./Menu";
import { MenuButton } from "./MenuButton";

export default {
  title: "dragontail/Menu",
  component: Menu,
} as ComponentMeta<typeof Menu>;

const MenuTemplate: ComponentStory<typeof Menu> = ({ ...args }) => (
  <Menu {...args} />
);

export const Example = MenuTemplate.bind({});
Example.args = {
  children: [<MenuButton>Hi</MenuButton>],
} as MenuContextProps;
