import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Toast } from "./Toast";
import { ToastData, ToastPosition } from "./ToastContext";

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

const Template: ComponentStory<typeof Toast> = ({ theme }) => {
  const toasts: ToastData[] = [
    {
      id: 0,
      duration: 300,
      position: ToastPosition.bottomRight,
      description: "File saved.",
      type: "success",
    },
    {
      id: 1,
      duration: 300,
      position: ToastPosition.bottomRight,
      type: "danger",
    },
    {
      id: 2,
      duration: 300,
      position: ToastPosition.bottomRight,
      type: "info",
      description: "The app will be updated in 10 days.",
    },
    {
      id: 3,
      duration: 300,
      position: ToastPosition.bottomRight,
      title: "Profile incomplete!",
      type: "warning",
    },
  ];
  return (
    <div>
      {toasts.map((each) => (
        <Toast theme={theme} data={each} key={each.id} toasts={toasts} />
      ))}
    </div>
  );
};

export const ToastAppearance = Template.bind({});

export const DarkToastAppearance = Template.bind({});
DarkToastAppearance.args = { theme: "dark" };
DarkToastAppearance.parameters = { backgrounds: { default: "dark" } };
