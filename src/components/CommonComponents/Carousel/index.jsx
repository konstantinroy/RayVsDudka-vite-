import NukaCarousel from "nuka-carousel/lib/carousel";

const Carousel = ({ children, ...props }) => {
  return (
    <NukaCarousel
      defaultControlsConfig={{
        nextButtonText: <div>❯</div>,
        prevButtonText: <div>❮</div>,
      }}
      {...props}
    >
      {children}
    </NukaCarousel>
  );
};

export default Carousel;
