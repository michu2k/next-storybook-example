import type {Meta, StoryObj} from "@storybook/react";
import {ProgressBar, ProgressBarProps} from "./ProgressBar";

const meta: Meta<ProgressBarProps> = {
  title: "Components/ProgressBar",
  component: ProgressBar,
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: {type: "range"}
    }
  }
};

export default meta;

type Story = StoryObj<ProgressBarProps>;

export const Empty: Story = {
  args: {
    value: 0
  }
};

export const Filled: Story = {
  args: {
    value: 50
  }
};