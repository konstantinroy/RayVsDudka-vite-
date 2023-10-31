import NukaCarousel from 'nuka-carousel/lib/carousel';
import styles from './styles.module.scss';

const Carousel = ({ children, ...props }) => {
  return (
    <NukaCarousel
      renderCenterLeftControls={({ previousSlide }) => (
        <button className={styles.prevNextButtonClassName}></button>
      )}
      renderCenterRightControls={({ nextSlide }) => (
        <button className={styles.prevNextButtonClassName}></button>
      )}
      {...props}
    >
      {children}
    </NukaCarousel>
  );
};

export default Carousel;
