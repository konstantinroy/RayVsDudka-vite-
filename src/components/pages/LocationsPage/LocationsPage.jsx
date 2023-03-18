import React from "react";
import Navbar from "../../Main/Header/Navbar.jsx";
import Footer from "../../Main/Footer/Footer";
import styles from "./LocationsPage.module.scss";
import Carousel from "../../CommonComponents/Carousel/index";
import LocationsPagePhoto from "./img/LocationsPagePhoto.jpg";
import DudaHomePhoto1 from "./img/photo_2022-11-29_23-26-45.jpg";
import DudaHomePhoto2 from "./img/photo_2022-11-29_23-26-52.jpg";
import DudaHomePhoto3 from "./img/photo_2022-11-29_23-27-05.jpg";
import DudaHomePhoto5 from "./img/photo_2022-11-29_23-27-18.jpg";
import DudaHomePhoto6 from "./img/photo_2022-11-29_23-27-21.jpg";
import DudaHomePhoto7 from "./img/photo_2022-11-29_23-27-25.jpg";
import DudaHomePhoto8 from "./img/photo_2022-11-29_23-27-28.jpg";
import DudaHomePhoto9 from "./img/photo_2022-11-29_23-27-31.jpg";
import ParentsDudaHomePhoto from "./img/perents-home.jpg";
import SyberXPhoto1 from "./img/S.jpg";
import SyberXPhoto2 from "./img/S2.jpg";
import SyberXPhoto3 from "./img/S3.jpg";
import NintendoPhoto1 from "./img/N.jpg";
import NintendoPhoto2 from "./img/N2.jpg";
import NintendoPhoto3 from "./img/N3.jpg";

function LocationsPage() {
  return (
    <div>
      <Navbar />
      <div className={styles.content}>
        <div className={styles.locationsPageHeading}>
          <div className={styles.pagePhotoBlock}>
            <img
              className={styles.locationsPagePhoto}
              src={LocationsPagePhoto}
              alt=""
            ></img>
          </div>
          <div className={styles.headingText}>
            <h1 className={styles.heading}>Места проведения каток</h1>
          </div>
        </div>

        <div className={styles.locationInfoBlock}>
          <h1>Дома у Никиты</h1>

          <div className={styles.locationPhotoBlock}>
            <Carousel>
              <img src={DudaHomePhoto1} alt="" />
              <img src={DudaHomePhoto2} alt="" />
              <img src={DudaHomePhoto5} alt="" />
              <img src={DudaHomePhoto3} alt="" />
              <img src={DudaHomePhoto7} alt="" />
              <img src={DudaHomePhoto8} alt="" />
              <img src={DudaHomePhoto6} alt="" />
              <img src={DudaHomePhoto9} alt="" />
            </Carousel>
          </div>
        </div>

        <div className={styles.locationInfoBlock}>
          <h1>Дома у родаков Никиты</h1>
          <div className={styles.locationPhotoBlock}>
            <Carousel>
              <img src={ParentsDudaHomePhoto} alt="" />
            </Carousel>
          </div>
        </div>

        <div className={styles.locationInfoBlock}>
          <h1>Компьютерный клуб Syber X</h1>
          <div className={styles.locationPhotoBlock}>
            <Carousel>
              <img src={SyberXPhoto1} alt="" />
              <img src={SyberXPhoto2} alt="" />
              <img src={SyberXPhoto3} alt="" />
            </Carousel>
          </div>
        </div>

        <div className={styles.locationInfoBlock}>
          <h1>Компьютерный клуб Nintendo</h1>
          <div className={styles.locationPhotoBlock}>
            <Carousel>
              <img src={NintendoPhoto1} alt="" />
              <img src={NintendoPhoto2} alt="" />
              <img src={NintendoPhoto3} alt="" />
            </Carousel>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default LocationsPage;
