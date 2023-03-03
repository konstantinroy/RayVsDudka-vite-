import React from "react";
import pcPhoto from "../../../assets/img/pc-photo.jpg";
import mobilePhoto from "../../../assets/img/mobile-photo.jpg";
import styles from "../MainPhoto/MainPhoto.module.scss";

function MainPhoto() {
  return (
    <div>
      <div className={styles["main-photo-block"]}>
        <img className={styles.pcPhoto} src={pcPhoto} alt=""></img>
        <img className={styles.mobilePhoto} src={mobilePhoto} alt=""></img>
        <div className={styles.mainPhotoText}>
          <p className={styles["mainPhotoText-1"]}>Величайшее</p>
          <p className={styles["mainPhotoText-2"]}>противостояние</p>
          <p className={styles["mainPhotoText-3"]}>в истории</p>
          <p className={styles["mainPhotoText-4"]}>спорта</p>
        </div>
      </div>
    </div>
  );
}

export default MainPhoto;
