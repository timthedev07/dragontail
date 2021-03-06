import { ComponentStory, ComponentMeta } from "@storybook/react";
import { RightArrow } from "../../stories-utils/RightArrow";
import { EmailIcon } from "../../stories-utils/EmailIcon";
import { Button, CustomButtonProps } from "./Button";
import { CSTypeValues } from "../../types/Colors";
import { ButtonVariantsValues } from "../../types/Variants";

export default {
  title: "dragontail/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
const ColorsTemplate: ComponentStory<typeof Button> = ({ color, ...args }) => (
  <div className="flex w-full justify-evenly flex-wrap">
    {ButtonVariantsValues.map((variant) => (
      <div key={variant} className="flex flex-col gap-3 min-w-[120px]">
        {CSTypeValues.map((each) => (
          <Button {...args} variant={variant} color={each}>
            {each}
          </Button>
        ))}
      </div>
    ))}
  </div>
);

export const Example = Template.bind({});
Example.args = {
  children: "Click me",
  color: "cyan",
} as CustomButtonProps;

export const EmailMe = Template.bind({});
EmailMe.args = {
  children: "Email Me",
  color: "teal",
  leftIcon: <EmailIcon />,
} as CustomButtonProps;

export const GhostButton = Template.bind({});
GhostButton.args = {
  color: "cyan",
  children: "Ghost button",
  variant: "ghost",
} as CustomButtonProps;

export const GhostButtonWithIcon = Template.bind({});
GhostButtonWithIcon.args = {
  color: "emerald",
  children: "Email Me",
  variant: "ghost",
  leftIcon: <EmailIcon />,
} as CustomButtonProps;

export const OutlineButton = Template.bind({});
OutlineButton.args = {
  color: "orange",
  children: "Outline button",
  variant: "outline",
} as CustomButtonProps;

export const ButtonWithArrow = Template.bind({});
ButtonWithArrow.args = {
  color: "teal",
  variant: "ghost",
  children: "Enter",
  rightIcon: <RightArrow />,
} as CustomButtonProps;

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  isDisabled: true,
  children: "Disabled",
} as CustomButtonProps;

export const AllColors = ColorsTemplate.bind({});
export const AllColorsInDarkTheme = ColorsTemplate.bind({});
AllColorsInDarkTheme.args = {
  theme: "dark",
};
AllColorsInDarkTheme.parameters = { backgrounds: { default: "dark" } };
