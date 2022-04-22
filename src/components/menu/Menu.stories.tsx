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
  <div className={`${false ? "h-[700px] flex flex-col justify-end" : ""}`}>
    <Menu {...args} />
  </div>
);

const BASIC_CHILDREN = [
  <MenuButton>Hi</MenuButton>,
  <MenuList>
    <MenuItem>Save</MenuItem>
    <MenuItem>Make a copy</MenuItem>
    <MenuItem>Share</MenuItem>
    <MenuItem>
      Destroy this document and corrupt our database with one click!
    </MenuItem>
  </MenuList>,
];

export const Example = MenuTemplate.bind({});
Example.args = {
  children: BASIC_CHILDREN,
} as MenuContextProps;

export const DarkThemeExample = MenuTemplate.bind({});
DarkThemeExample.args = {
  children: BASIC_CHILDREN,
  theme: "dark",
} as MenuContextProps;
DarkThemeExample.parameters = { backgrounds: { default: "dark" } };
