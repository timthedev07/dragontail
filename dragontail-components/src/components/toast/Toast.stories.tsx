import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Toast } from "./Toast";
import { ToastData } from "./ToastContext";

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
      duration: 3000,
      position: "bottom-right",
      description: "File saved.",
      type: "success",
    },
    {
      id: 1,
      duration: 3000,
      position: "bottom-right",
      type: "danger",
    },
    {
      id: 2,
      duration: 3000,
      position: "bottom-right",
      type: "info",
      description: "The app will be updated in 10 days.",
    },
    {
      id: 3,
      duration: 3000,
      position: "bottom-right",
      title: "Profile incomplete!",
      type: "warning",
    },
  ];
  return (
    <div>
      {toasts.map((each) => (
        <Toast
          theme={theme}
          data={each}
          key={each.id}
          removeToast={(id) => {}}
        />
      ))}
    </div>
  );
};

export const ToastAppearance = Template.bind({});

export const DarkToastAppearance = Template.bind({});
DarkToastAppearance.args = { theme: "dark" };
DarkToastAppearance.parameters = { backgrounds: { default: "dark" } };
