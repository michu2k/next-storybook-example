import React, {memo} from "react";
import styles from "./ProgressBar.module.scss";

type ProgressBarProps = {
  value: number;
}

const ProgressBar = memo(({value}: ProgressBarProps) => {

  const progress = Math.min(Math.max(0, value), 100);
  const style = {"--progress-bar-fill": `${progress}%`} as React.CSSProperties;

  return (
    <div className={styles.progressBar}>
      <div data-testid="progress-bar-fill" className={styles.progressBarFill} style={style} />
    </div>
  );
});

ProgressBar.displayName = "ProgressBar";

export type {ProgressBarProps};

export {ProgressBar};