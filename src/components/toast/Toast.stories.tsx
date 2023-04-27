import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Toast } from "./Toast";

export default {
  title: "dragontail/Toast",
  component: Toast,
  decorators: [
    (Story) => {
      return (
        <div className="w-80">
          <Story />
        </div>
      );
    },
  ],
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof Toast> = (args) => {
  return <div></div>;
};

export const ToastAppearance = Template.bind({});
ToastAppearance.args = {
  placeholder: "Invalid",
  theme: "dark",
  isInvalid: true,
};
ToastAppearance.parameters = { backgrounds: { default: "dark" } };
