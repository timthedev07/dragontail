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

export const Example = MenuTemplate.bind({});
Example.args = {
  children: [
    <MenuButton>Hi</MenuButton>,
    <MenuList>
      <MenuItem>Save</MenuItem>
      <MenuItem>Make a copy</MenuItem>
      <MenuItem>Share</MenuItem>
      <MenuItem>
        Destroy this document and corrupt our database with one click!
      </MenuItem>
    </MenuList>,
  ],
} as MenuContextProps;
