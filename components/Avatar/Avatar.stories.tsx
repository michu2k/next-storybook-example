import type {Meta, StoryObj} from "@storybook/react";
import {Inter} from "@next/font/google";
import {Avatar, AvatarProps} from "./Avatar";
import {AVATAR_SIZE} from "./Avatar.utils";
import AvatarJpg from "public/avatar.jpg";
import styles from "./Avatar.module.scss";

const fontInter = Inter({
  subsets: ["latin"]
});

const meta: Meta<AvatarProps> = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"]
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
  render: () => <div className={fontInter.className}>
    <Avatar src={AvatarJpg} size={AVATAR_SIZE.SM} />
    <p className={styles.storyText}>size SM 32x32</p>

    <Avatar src={AvatarJpg} size={AVATAR_SIZE.MD} />
    <p className={styles.storyText}>size MD 40x40</p>

    <Avatar src={AvatarJpg} size={AVATAR_SIZE.LG} />
    <p className={styles.storyText}>size LG 48x48</p>

    <Avatar src={AvatarJpg} size={AVATAR_SIZE.XL} />
    <p className={styles.storyText}>size XL 56x56</p>
  </div>
};