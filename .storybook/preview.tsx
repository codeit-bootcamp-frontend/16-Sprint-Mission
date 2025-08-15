import React from "react";
import type { Preview } from "@storybook/nextjs";
import "../src/app/globals.css";
import { nanumsquare } from "../src/app/layout";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className={nanumsquare.className}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
