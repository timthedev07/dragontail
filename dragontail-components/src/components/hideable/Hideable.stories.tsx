import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Hideable, HideableProps } from "./Hideable";

export default {
  title: "dragontail/Hideable",
  component: Hideable,
  decorators: [
    (Story) => {
      return (
        <div className="w-80">
          <Story />
        </div>
      );
    },
  ],
} as ComponentMeta<typeof Hideable>;

const HideableTemplate: ComponentStory<typeof Hideable> = (args) => {
  return <Hideable {...args} />;
};

export const BasicExample = HideableTemplate.bind({});
BasicExample.args = {
  hideableLabel: "Open",
  content: <>Hi there</>,
  theme: "dark",
  rounded: false
} as HideableProps;
BasicExample.parameters = { backgrounds: { default: "dark" } };

export const LightExample = HideableTemplate.bind({});
LightExample.args = {
  hideableLabel: "Open",
  content: <>Hi there</>,
  theme: "light",
  rounded: false
} as HideableProps;