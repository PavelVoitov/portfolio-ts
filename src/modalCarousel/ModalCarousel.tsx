import AliceCarousel from "react-alice-carousel";
import styles from './ModalCarousel.module.scss'
import 'react-alice-carousel/lib/alice-carousel.css';

import React, {MouseEvent, useRef, useState} from "react";

const responsive = {
  0: {items: 1},
  568: {items: 1},
  1024: {items: 1},
};

type Props = {
  handleCloseModal: () => void
  screenshots: string[]
}
export const ModalCarousel = ({handleCloseModal, screenshots}: Props) => {
  const [screenIndex, setScreenIndex] = useState<number>(0);
  const carousel = useRef<AliceCarousel>(null);
  const slideNext = (e: MouseEvent<HTMLDivElement>) => {
    carousel?.current?.slideNext(e)
  };

  const slidePrev = (e: MouseEvent<HTMLDivElement>) => {
    carousel?.current?.slidePrev(e)
  };

  return (
    <div className={styles.modalCarouselBlock}>
      <div className={styles.btnClose} onClick={handleCloseModal}>⨉</div>
      <AliceCarousel
        key="carousel"
        // controlsStrategy={"responsive"}
        responsive={responsive}
        mouseTracking={false}
        disableDotsControls={true}
        ref={carousel}
        // infinite={true}
        // activeIndex={screenIndex}
        // animationType="slide"
        // animationDuration={800}
        // disableDotsControls
        disableButtonsControls
        autoWidth
        autoHeight
        // items={items}
        // mouseTracking={!thumbAnimation}
        // onSlideChange={syncMainBeforeChange}
        // onSlideChanged={syncMainAfterChange}
        // touchTracking={!thumbAnimation}
      >
        {screenshots.map((s, i) => <div
          className={styles.modalImageBlock}
          // className="b-refs-navs"
          key={i}>
            <img
              src={s}
              alt={"project image"}
              className={styles.modalImage}
            />
          </div>
        )}

      </AliceCarousel>
      <div className={styles.btnPrev} onClick={slidePrev}>&lang;&lang;</div>
      <div className={styles.btnNext} onClick={slideNext}>&rang;&rang;</div>
    </div>
  )
}