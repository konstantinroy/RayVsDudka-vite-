import Carousel from '../../common-components/Carousel/index.jsx';

import styles from './PhotoBlock.module.scss';

function PhotoBlock({ post }) {
  return (
    <div className={styles.photoBlock}>
      <div className={styles.carouselBlock}>
        <Carousel>
          {post.photos.map((photo) => {
            return <img key={post.id} src={photo} alt="" />;
          })}
        </Carousel>
      </div>
    </div>
  );
}

export default PhotoBlock;