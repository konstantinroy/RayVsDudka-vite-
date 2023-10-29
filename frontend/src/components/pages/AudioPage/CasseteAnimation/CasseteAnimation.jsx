import React from 'react';

import styles from './CasseteAnimation.module.scss';

function CasseteAnimation() {
  return (
    <div class={styles.main}>
      <div class={styles.grain}></div>
      <div class={styles.cassette}>
        <div class={styles.head}></div>
        <div class={styles.label}>
          <div class={styles.cutout}>
            <div class={styles['reel_hole']}>
              <div class={styles.gear}></div>
            </div>
            <div class={styles['reel_hole']}>
              <div class={styles.gear}></div>
            </div>
            <div class={styles.window}>
              <div class={styles.spool}></div>
              <div class={styles.spool}></div>
            </div>
          </div>
        </div>
        <div class={styles.accents}>
          <div class={styles['screw i1']}></div>
          <div class={styles['screw i2']}></div>
          <div class={styles['screw i3']}></div>
          <div class={styles['screw i4']}></div>
          <div class={styles['screw i5']}></div>
          <div class={styles['hole i1']}></div>
          <div class={styles['hole i2']}></div>
          <div class={styles['hole i3']}></div>
          <div class={styles['hole i4']}></div>
        </div>
      </div>
    </div>
  );
}

export default CasseteAnimation;
