import { IoIosArrowBack } from 'react-icons/io';
import { AiOutlineEllipsis, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { GoComment } from 'react-icons/go';
import { PiShareFatLight } from 'react-icons/pi';
import { useState, useEffect } from 'react';
import Carousel from '../../common-components/Carousel/index.jsx';
import PhotosArray from './PhotosArray.jsx';

import styles from './PhotoBlock.module.scss';

const PhotoBlock = ({ post }) => {
  const [activePostPhotos, setActivePostPhotos] = useState([]);
  const [popup, setPopup] = useState(false);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [instruments, setInstruments] = useState(true);
  const [likeBtnState, setLikeBtnState] = useState(false);

  const pageWidth = document.documentElement.scrollWidth;

  const openPhoto = () => {
    setPopup(true);
    const filter = PhotosArray.filter((photoPost) => {
      return photoPost.id === post.id;
    });
    setActivePostPhotos(filter[0].photos);
  };

  const closePhoto = () => {
    setPopup(false);
  };

  const clickOnPhoto = () => {
    setInstruments((prevState) => !prevState);
  };

  const additionalFeaturesBtn = () => {
    console.log('additionalFeatures');
  };

  const likeBtn = () => {
    setLikeBtnState((prevState) => !prevState);
  };

  const sliderParams = {
    slideIndex: activePhotoIndex,
  };

  useEffect(() => {}, [activePostPhotos, activePhotoIndex]);

  return (
    <>
      {!popup && pageWidth < 480 ? (
        <div className={styles.photoBlock} onClick={openPhoto}>
          <div className={styles.carouselBlock}>
            <Carousel
              withoutControls={(post.photos.length > 1) ? false : true}
              {...sliderParams}
              afterSlide={(currentIndex) => setActivePhotoIndex(currentIndex)}
            >
              {post.photos.map((photo) => {
                return <img key={post.id} src={photo} alt="" />;
              })}
            </Carousel>
          </div>
        </div>
      ) : (
        <div className={styles.popupPhoto}>
          {instruments && (
            <div className={styles.instrumentsTop}>
              <div className={styles.backArrowBtn} onClick={closePhoto}>
                <IoIosArrowBack />
              </div>
              <div className={styles.photosCount}>
                {activePhotoIndex + 1} из {activePostPhotos.length}
              </div>
              <div
                className={styles.additionalFeatures}
                onClick={additionalFeaturesBtn}
              >
                <AiOutlineEllipsis />
              </div>
            </div>
          )}
          <div className={styles.carouselBlock}>
            <Carousel
              withoutControls={true}
              {...sliderParams}
              afterSlide={(currentIndex) => setActivePhotoIndex(currentIndex)}
            >
              {activePostPhotos.map((photo, index) => {
                return <img onClick={clickOnPhoto} src={photo} alt="" />;
              })}
            </Carousel>
          </div>
          {instruments && (
            <div className={styles.instrumentsBottom}>
              <div className={styles.likeBtn} onClick={likeBtn}>
                {likeBtnState ? (
                  <AiFillHeart color="#ff3838" />
                ) : (
                  <AiOutlineHeart />
                )}
              </div>
              <div className={styles.commentBtn}>
                <GoComment />
              </div>
              <div className={styles.shareBtn}>
                <PiShareFatLight />
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default PhotoBlock;
