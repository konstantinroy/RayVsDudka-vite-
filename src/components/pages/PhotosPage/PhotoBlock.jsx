import { AiOutlineEllipsis } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { GoComment } from "react-icons/go";
import { PiShareFatLight } from "react-icons/pi";
import { useState } from "react";
import Carousel from "../../common-components/Carousel/index.jsx";
import PhotosArray from "./PhotosArray.jsx";

import styles from "./PhotoBlock.module.scss";
import { useEffect } from "react";

const PhotoBlock = ({ post }) => {
  const [activePostPhotos, setActivePostPhotos] = useState([]);
  const [popup, setPopup] = useState(false);
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
    console.log("additionalFeatures");
  };

  const likeBtn = () => {
    setLikeBtnState((prevState) => !prevState);
  };

  useEffect(() => {}, [activePostPhotos]);

  return (
    <>
      {!popup && pageWidth < 480 ? (
        <div className={styles.photoBlock} onClick={openPhoto}>
          <div className={styles.carouselBlock}>
            <Carousel>
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
                ❮
              </div>
              <div className={styles.photosText}>
                1 из {activePostPhotos.length}
              </div>
              <div
                className={styles.additionalFeatures}
                onClick={additionalFeaturesBtn}
              >
                <AiOutlineEllipsis />
              </div>
            </div>
          )}
          <div className={styles.carouselBlock} onClick={clickOnPhoto}>
            <Carousel>
              {activePostPhotos.map((photo) => {
                return <img src={photo} alt="" />;
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
