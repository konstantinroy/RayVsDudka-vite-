import React from 'react';

import Navbar from '../Main/Header/Navbar';
import Footer from '../Main/Footer/Footer';

import BackToTopButton from './../../common-components/BackToTopButton/BackToTopButton.jsx';
import styles from './PhotosPage.module.scss';
import PhotoPagePhoto from './img/PhotoPagePhoto.jpg';
import PhotosArray from './PhotosArray';
import PhotoBlock from './PhotoBlock.jsx';

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
              <PhotoBlock key={post.id} post={post} />
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
