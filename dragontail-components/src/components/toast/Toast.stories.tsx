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
      description:
        "This is a super long description just to test if the text is wrapped so that it doesn't overflow the container.",
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
    <div className="flex flex-col gap-8">
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

const SizesTemplate: ComponentStory<typeof Toast> = ({ theme }) => {
  const toasts: ToastData = {
    id: 0,
    duration: 3000,
    position: "bottom-right",
    description: "File saved.",
    type: "success",
  };

  return (
    <div className="flex flex-col gap-8">
      {["small", "normal", "large"].map((each) => {
        return (
          <Toast
            theme={theme}
            data={{ ...Toast, size: each as any } as any}
            removeToast={() => {}}
          />
        );
      })}
    </div>
  );
};

export const ToastAppearance = Template.bind({});

export const DarkToastAppearance = Template.bind({});
DarkToastAppearance.args = { theme: "dark" };
DarkToastAppearance.parameters = { backgrounds: { default: "dark" } };

export const DarkSizes = SizesTemplate.bind({});
DarkSizes.args = { theme: "dark" };
DarkSizes.parameters = { backgrounds: { default: "dark" } };
