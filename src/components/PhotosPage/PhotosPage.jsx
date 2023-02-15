import React from "react";
import Carousel from "../CommonComponents/Carousel/index.jsx";
import Navbar from "../Main/Header/Navbar.jsx";
import Footer from "../Main/Footer/Footer.jsx";
import BackToTopButton from "./../CommonComponents/BackToTopButton/BackToTopButton.jsx";
import styles from "./PhotosPage.module.scss";
import PhotoPagePhoto from "../../assets/img/PhotoPagePhoto.jpg";
import PhotosArray from "./PhotosArray";

function PhotosPage() {
  return (
    <div>
      <Navbar />
      <div className={styles.content}>
        <div className={styles.photoHeading}>
          <div className={styles.pagePhotoBlock}>
            <img
              className={styles.photoPagePhoto}
              src={PhotoPagePhoto}
              alt=""
            ></img>
          </div>
          <div className={styles.headingText}>
            <h1 className={styles.heading}>Лучшие фоточки за всё время</h1>
          </div>
        </div>

        {PhotosArray.map((post) => {
          return (
            <>
              {Object.keys(post).length > 2 ? (
                <div className={styles.photoBlock}>
                  <div className={styles.carouselBlock}>
                    <Carousel>
                      <img src={post.photo1} alt="" />
                      <img src={post.photo2} alt="" />
                    </Carousel>
                  </div>
                </div>
              ) : (
                <div className={styles.photoBlock}>
                  <img src={post.photo1} alt="" />
                </div>
              )}
            </>
          );
        })}
        <BackToTopButton />
      </div>

      <Footer />
    </div>
  );
}

export default PhotosPage;
