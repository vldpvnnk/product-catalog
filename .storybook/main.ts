import type { StorybookConfig } from "@storybook/types"

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.ts", "../src/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
}

export default config
