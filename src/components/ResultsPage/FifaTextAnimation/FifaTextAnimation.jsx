import React from "react";
import styles from "./FifaTextAnimation.module.scss";

function FifaTextAnimation() {
  return (
    <div className={styles.mainBlock}>
    <div className={styles['text-container']}>
      <span>F</span>
      <span>I</span>
      <span>F</span>
      <span>A</span>
    </div>
    </div>
  );
}

export default FifaTextAnimation;
