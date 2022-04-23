import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Menu, MenuContextProps } from "./Menu";
import { MenuButton } from "./MenuButton";
import { MenuDivider } from "./MenuDivider";
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
  <MenuButton>Actions</MenuButton>,
  <MenuList>
    <MenuItem>Save</MenuItem>
    <MenuItem>Make a copy</MenuItem>
    <MenuItem>Share</MenuItem>
    <MenuDivider />
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

export const WithAccessToIsOpenState = MenuTemplate.bind({});
WithAccessToIsOpenState.args = {
  children: ({ isOpen }) => {
    return [
      <MenuButton>{isOpen ? "open" : "closed"}</MenuButton>,
      <MenuList>
        <MenuItem>Nothing here</MenuItem>
      </MenuList>,
    ];
  },
  theme: "dark",
} as MenuContextProps;
WithAccessToIsOpenState.parameters = { backgrounds: { default: "dark" } };

export const LazyMenu = MenuTemplate.bind({});
LazyMenu.args = {
  children: [
    <MenuButton>Menu</MenuButton>,
    <MenuList>
      <MenuItem>I won't get rendered until you open the menu</MenuItem>
      <MenuItem>I won't get rendered until you open the menu</MenuItem>
    </MenuList>,
  ],
  isLazy: true,
} as MenuContextProps;
