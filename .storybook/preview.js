import { addDecorator } from "@storybook/react";
import "../src/dragontail.css";
import Layout from "./Layout";
addDecorator((storyFn) => <Layout>{storyFn()}</Layout>);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "light",
    values: [
      {
        name: "dark",
        value: "#1e293b",
      },
      {
        name: "light",
        value: "#fefefe",
      },
    ],
  },
};
