import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Drawer, DrawerProps } from "./Drawer";

export default {
  title: "dragontail/Drawer",
  component: Drawer,
  decorators: [
    (Story) => {
      return (
        <div className="w-80">
          <Story />
        </div>
      );
    },
  ],
} as ComponentMeta<typeof Drawer>;

const DrawerTemplate: ComponentStory<typeof Drawer> = (args) => {
  return <Drawer {...args} />;
};

export const BasicExample = DrawerTemplate.bind({});
BasicExample.args = {
  drawerLabel: "Open",
  content: <>Hi there</>,
  theme: "dark",
} as DrawerProps;
BasicExample.parameters = { backgrounds: { default: "dark" } };
