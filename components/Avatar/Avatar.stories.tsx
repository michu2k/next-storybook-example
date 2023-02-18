import type {Meta, StoryObj} from "@storybook/react";
import {Avatar, AvatarProps} from "./Avatar";
import {AVATAR_SIZE} from "./Avatar.utils";
import AvatarJpg from "public/avatar.jpg";
import styles from "@/styles/Storybook.module.css";

const meta: Meta<AvatarProps> = {
  title: "Display/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className={styles.storybookMultipleStoryWrapper}>
        <Story />
      </div>
    )
  ]
};

export default meta;

type Story = StoryObj<AvatarProps>;

export const Default: Story = {
  args: {
    src: AvatarJpg
  }
};

export const AllSizes: Story = {
  args: {
    src: AvatarJpg
  },
  render: () => <>
    <Avatar src={AvatarJpg} size={AVATAR_SIZE.SM} />
    <Avatar src={AvatarJpg} size={AVATAR_SIZE.MD} />
    <Avatar src={AvatarJpg} size={AVATAR_SIZE.LG} />
    <Avatar src={AvatarJpg} size={AVATAR_SIZE.XL} />
  </>
};