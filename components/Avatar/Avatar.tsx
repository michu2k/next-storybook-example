import React, {memo} from "react";
import Image, {StaticImageData} from "next/image";
import cn from "classnames";
import {AvatarSize, AVATAR_SIZE} from "./Avatar.utils";
import styles from "./Avatar.module.scss";

type AvatarProps = {
  src: string | StaticImageData;
  size?: AvatarSize;
}

const Avatar = memo(({src, size = AVATAR_SIZE.MD}: AvatarProps) => {

  const avatarSize = {
    [AVATAR_SIZE.SM]: styles.avatarSM,
    [AVATAR_SIZE.MD]: styles.avatarMD,
    [AVATAR_SIZE.LG]: styles.avatarLG,
    [AVATAR_SIZE.XL]: styles.avatarXL
  };

  const avatarClassName = cn(
    styles.avatar,
    avatarSize[size]
  );

  return (
    <div className={avatarClassName}>
      <Image fill src={src} className={styles.avatarImg} alt="" />
    </div>
  );
});

Avatar.displayName = "Avatar";

export type {AvatarProps};

export {Avatar};