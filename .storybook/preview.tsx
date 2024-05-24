import React from 'react'
import type { Preview } from "@storybook/react";
import '../src/app/globals.css';

// Custom google font
import { Kanit } from "next/font/google";

export const kanit = Kanit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900']
})

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
      <div className={kanit.className}>
        <Story/>
      </div>
    )
  ]
};

export default preview;
