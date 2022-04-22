import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Menu, MenuContextProps } from "./Menu";
import { MenuButton } from "./MenuButton";
import { MenuItem } from "./MenuItem";
import { MenuList } from "./MenuList";

export default {
  title: "dragontail/Menu",
  component: Menu,
} as ComponentMeta<typeof Menu>;

const MenuTemplate: ComponentStory<typeof Menu> = ({ ...args }) => (
  <Menu {...args} />
);

export const Example = MenuTemplate.bind({});
Example.args = {
  children: [
    <MenuButton>Hi</MenuButton>,
    <MenuList>
      <MenuItem>Save</MenuItem>
      <MenuItem>Make a copy</MenuItem>
      <MenuItem>Share</MenuItem>
    </MenuList>,
  ],
} as MenuContextProps;
